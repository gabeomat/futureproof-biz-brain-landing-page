import type { Context } from "@netlify/functions";
import Stripe from "stripe";

/**
 * Stripe webhook handler for post-purchase automation.
 *
 * Fires for `checkout.session.completed` events:
 *   1. Adds buyer to MailerLite (group from Stripe product metadata)
 *   2. Sends server-side Meta Purchase event (Conversions API)
 *      → deduped against the client-side Pixel event via Stripe session ID
 *
 * Env vars required (configure in Netlify dashboard → Site settings → Env vars):
 *   - STRIPE_SECRET_KEY          Stripe API secret (sk_live_... or sk_test_...)
 *   - STRIPE_WEBHOOK_SECRET      Signing secret from the Stripe webhook endpoint
 *   - MAILERLITE_API_KEY         MailerLite API token (already configured)
 *   - META_PIXEL_ID              Meta Pixel / dataset ID
 *   - META_CAPI_ACCESS_TOKEN     Conversions API access token
 *
 * Per-product config lives in Stripe product metadata:
 *   - mailerlite_group_id        MailerLite group to add buyers to
 *   - content_name               (optional) override for Meta event
 *   - content_id                 (optional) override for Meta event
 */

export const config = {
  path: "/.netlify/functions/stripe-webhook",
};

export default async (request: Request, _context: Context) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const stripeSecret = Netlify.env.get("STRIPE_SECRET_KEY");
  const webhookSecret = Netlify.env.get("STRIPE_WEBHOOK_SECRET");
  if (!stripeSecret || !webhookSecret) {
    console.error("Missing Stripe env vars");
    return new Response("Server misconfigured", { status: 500 });
  }

  const stripe = new Stripe(stripeSecret);

  // Verify signature
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing signature", { status: 400 });
  }

  const rawBody = await request.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      webhookSecret,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // We only care about completed checkouts right now
  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ received: true, ignored: event.type }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Pull product metadata (expand line items → product)
  let productMetadata: Record<string, string> = {};
  let productName = "";
  try {
    const expanded = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items.data.price.product"],
    });
    const product = expanded.line_items?.data?.[0]?.price?.product as
      | Stripe.Product
      | undefined;
    if (product && !("deleted" in product)) {
      productMetadata = product.metadata ?? {};
      productName = product.name ?? "";
    }
  } catch (err) {
    console.warn("Could not expand product metadata:", err);
  }

  const email = session.customer_details?.email ?? "";
  const fullName = session.customer_details?.name ?? "";
  const phone = session.customer_details?.phone ?? "";
  const countryCode = session.customer_details?.address?.country ?? "";

  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  const lastName = rest.join(" ");

  // Run both integrations in parallel; log failures but don't fail the webhook
  // (returning non-200 to Stripe triggers retries we don't want).
  await Promise.allSettled([
    syncToMailerLite({
      email,
      firstName,
      lastName,
      phone,
      productName,
      groupId: productMetadata.mailerlite_group_id,
    }),
    fireMetaPurchase({
      sessionId: session.id,
      email,
      firstName,
      lastName,
      phone,
      countryCode,
      value: (session.amount_total ?? 0) / 100,
      currency: (session.currency ?? "usd").toUpperCase(),
      contentName: productMetadata.content_name || productName || "Workshop",
      contentId: productMetadata.content_id || session.id,
    }),
  ]).then((results) => {
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(`Integration ${i} failed:`, r.reason);
      }
    });
  });

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// ───────────────────────── MailerLite ─────────────────────────

async function syncToMailerLite(args: {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  productName: string;
  groupId?: string;
}) {
  const apiKey = Netlify.env.get("MAILERLITE_API_KEY");
  if (!apiKey) throw new Error("MAILERLITE_API_KEY not set");
  if (!args.email) throw new Error("No email in Stripe session");

  const body: Record<string, unknown> = {
    email: args.email,
    fields: {
      name: args.firstName,
      last_name: args.lastName,
      phone: args.phone,
      last_purchase: args.productName,
    },
  };

  if (args.groupId) {
    body.groups = [args.groupId];
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MailerLite ${res.status}: ${text}`);
  }
}

// ───────────────────────── Meta Conversions API ─────────────────────────

async function fireMetaPurchase(args: {
  sessionId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  countryCode: string;
  value: number;
  currency: string;
  contentName: string;
  contentId: string;
}) {
  const pixelId = Netlify.env.get("META_PIXEL_ID");
  const token = Netlify.env.get("META_CAPI_ACCESS_TOKEN");
  if (!pixelId || !token) throw new Error("Meta CAPI env vars not set");

  const userData: Record<string, string> = {};
  if (args.email) userData.em = await sha256(args.email.trim().toLowerCase());
  if (args.firstName) userData.fn = await sha256(args.firstName.trim().toLowerCase());
  if (args.lastName) userData.ln = await sha256(args.lastName.trim().toLowerCase());
  if (args.phone) {
    const digits = args.phone.replace(/\D/g, "");
    if (digits) userData.ph = await sha256(digits);
  }
  if (args.countryCode) {
    userData.country = await sha256(args.countryCode.trim().toLowerCase());
  }

  const payload = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: args.sessionId, // same ID the client-side Pixel used → deduped
        event_source_url: "https://gabrielomat.com/workshop/thanks",
        action_source: "website",
        user_data: userData,
        custom_data: {
          currency: args.currency,
          value: args.value,
          content_name: args.contentName,
          content_ids: [args.contentId],
          content_type: "product",
          num_items: 1,
        },
      },
    ],
  };

  const res = await fetch(
    `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${token}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Meta CAPI ${res.status}: ${text}`);
  }
}

async function sha256(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
