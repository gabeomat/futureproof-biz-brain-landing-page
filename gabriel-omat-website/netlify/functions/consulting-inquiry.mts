import type { Context } from "@netlify/functions";

export default async (request: Request, _context: Context) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = Netlify.env.get("MAILERLITE_API_KEY");
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Server misconfigured" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: {
    name: string;
    email: string;
    company: string;
    teamSize: string;
    message: string;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!body.email || !body.name || !body.message) {
    return new Response(
      JSON.stringify({ error: "Name, email, and message are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // Split name into first/last
  const nameParts = body.name.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: body.email,
        fields: {
          name: firstName,
          last_name: lastName,
          company: body.company || "",
          team_size: body.teamSize || "",
          message: body.message,
        },
        groups: ["184641732489512242"], // Consulting Inquiries group
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("MailerLite error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit inquiry" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
};
