import { useEffect } from "react";

declare global {
  interface Window {
    ml_webform_success_41347039?: () => void;
    ml_jQuery?: unknown;
  }
}

export default function NewsletterSkillPage() {
  useEffect(() => {
    // MailerLite success callback
    window.ml_webform_success_41347039 = function () {
      const successEl = document.querySelector<HTMLElement>(
        ".ml-subscribe-form-41347039 .row-success"
      );
      const formEl = document.querySelector<HTMLElement>(
        ".ml-subscribe-form-41347039 .row-form"
      );
      if (successEl) successEl.style.display = "block";
      if (formEl) formEl.style.display = "none";
    };

    // Load MailerLite webforms script
    const scriptId = "ml-webforms-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b";
      script.async = true;
      document.body.appendChild(script);
    }

    // MailerLite takel ping
    fetch(
      "https://assets.mailerlite.com/jsonp/2175286/forms/187540034574878540/takel"
    ).catch(() => {});

    return () => {
      delete window.ml_webform_success_41347039;
    };
  }, []);

  return (
    <>
      <style>{`
        .ns-page {
          background: #e8e4dc;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 40px 16px 80px;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .ns-wrap {
          background: #faf8f4;
          color: #1a1a1a;
          padding: 56px 48px;
          max-width: 800px;
          width: 100%;
        }
        .ns-masthead {
          border-top: 3px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          padding: 12px 0 10px;
          margin-bottom: 40px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
        }
        .ns-masthead-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
        }
        .ns-masthead-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #1a1a1a;
        }
        .ns-stamp {
          background: #c8401a;
          color: white;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
          display: inline-block;
          margin-bottom: 20px;
        }
        .ns-headline {
          font-size: clamp(36px, 6vw, 60px);
          font-weight: 700;
          line-height: 1.05;
          color: #1a1a1a;
          margin-bottom: 16px;
          font-family: 'Playfair Display', Georgia, serif;
        }
        .ns-headline em { color: #c8401a; font-style: italic; }
        .ns-subhead {
          font-size: 18px;
          font-weight: 300;
          color: #555;
          line-height: 1.65;
          margin-bottom: 32px;
          border-bottom: 1px solid #d4cfc6;
          padding-bottom: 28px;
        }
        .ns-subhead strong { font-weight: 500; color: #1a1a1a; }
        .ns-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c8401a;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ns-section-label::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: #d4cfc6;
        }
        .ns-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }
        .ns-card {
          background: #f0ece4;
          border: 0.5px solid #d4cfc6;
          border-radius: 4px;
          padding: 18px 16px;
        }
        .ns-card.accent {
          border-color: #c8401a;
          border-width: 1px;
          background: #f5e8e3;
        }
        .ns-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c8401a;
          margin-bottom: 10px;
        }
        .ns-card-title {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 6px;
        }
        .ns-card-desc {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
          font-weight: 300;
        }
        .ns-pull-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.4;
          color: #1a1a1a;
          border-left: 3px solid #c8401a;
          padding: 12px 0 12px 24px;
          margin: 36px 0;
        }
        .ns-pull-quote span {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-style: normal;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          margin-top: 10px;
        }
        .ns-who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }
        .ns-who-card {
          border: 0.5px solid #d4cfc6;
          border-radius: 4px;
          padding: 18px;
        }
        .ns-who-title {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 7px;
        }
        .ns-who-desc {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          font-weight: 300;
        }
        .ns-note {
          border: 0.5px solid #b8912a;
          border-radius: 4px;
          padding: 16px 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .ns-note-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #b8912a;
          margin-top: 4px;
          flex-shrink: 0;
        }
        .ns-note-text {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          font-weight: 300;
        }
        .ns-note-text strong { color: #1a1a1a; font-weight: 500; }
        .ns-optin-box {
          border-top: 1px solid #d4cfc6;
          border-bottom: 1px solid #d4cfc6;
          padding: 36px 0;
          text-align: center;
        }
        .ns-optin-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 10px;
        }
        .ns-optin-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .ns-optin-sub {
          font-size: 15px;
          font-weight: 300;
          color: #555;
          margin-bottom: 28px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        /* MailerLite overrides */
        #mlb2-41347039 { max-width: 420px; margin: 0 auto; }
        #mlb2-41347039 .ml-form-embedWrapper { width: 100%; background: transparent !important; border: none !important; border-radius: 0 !important; }
        #mlb2-41347039 .ml-form-embedBody { padding: 0 !important; }
        #mlb2-41347039 .ml-form-embedContent { display: none; }
        #mlb2-41347039 .ml-form-formContent { display: flex; flex-direction: column; gap: 12px; }
        #mlb2-41347039 .ml-form-fieldRow { margin: 0 !important; }
        #mlb2-41347039 input[type="text"],
        #mlb2-41347039 input[type="email"] {
          width: 100% !important;
          padding: 12px 16px !important;
          border: 1px solid #d4cfc6 !important;
          border-radius: 2px !important;
          background: #f0ece4 !important;
          font-family: 'DM Sans', sans-serif !important;
          font-size: 15px !important;
          color: #1a1a1a !important;
          box-sizing: border-box !important;
          outline: none;
        }
        #mlb2-41347039 input:focus { border-color: #c8401a !important; }
        #mlb2-41347039 input::placeholder { color: #888 !important; }
        #mlb2-41347039 .ml-form-embedSubmit { margin: 12px 0 0 0 !important; float: none !important; width: 100%; }
        #mlb2-41347039 .ml-form-embedSubmit button[type="submit"] {
          background: #c8401a !important;
          border: none !important;
          border-radius: 2px !important;
          font-family: 'DM Sans', sans-serif !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          letter-spacing: 0.08em !important;
          padding: 14px 32px !important;
          width: 100% !important;
          cursor: pointer;
          color: white !important;
        }
        #mlb2-41347039 .ml-form-embedSubmit button[type="submit"]:hover { opacity: 0.85; }
        #mlb2-41347039 .ml-form-embedSubmit button.loading { display: none !important; }
        #mlb2-41347039 .ml-form-embedPermissions { display: none; }
        #mlb2-41347039 .ml-form-successBody { padding: 0 !important; }
        .ns-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 16px 0;
        }
        .ns-success-icon {
          width: 40px;
          height: 40px;
          background: #c8401a;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
        }
        .ns-success-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .ns-success-sub {
          font-size: 14px;
          color: #555;
          font-weight: 300;
        }
        .ns-optin-fine {
          font-size: 12px;
          color: #888;
          margin-top: 12px;
        }
        .ns-optin-fine a { color: #888; }
        .ns-footer {
          border-top: 1px solid #1a1a1a;
          border-bottom: 0.5px solid #d4cfc6;
          padding: 8px 0;
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ns-footer-text {
          font-size: 12px;
          color: #888;
          letter-spacing: 0.06em;
        }
        .ns-footer-text a { color: #888; text-decoration: none; }
        @media (max-width: 620px) {
          .ns-wrap { padding: 32px 24px; }
          .ns-headline { font-size: 34px; }
          .ns-grid { grid-template-columns: 1fr 1fr; }
          .ns-who-grid { grid-template-columns: 1fr; }
          .ns-masthead { flex-direction: column; gap: 4px; }
        }
        @media (max-width: 440px) {
          .ns-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ns-page">
        <div className="ns-wrap">

          {/* Masthead */}
          <div className="ns-masthead">
            <div className="ns-masthead-label">AI Coachbox</div>
            <div className="ns-masthead-title">Free Resource</div>
            <div className="ns-masthead-label">For Coaches &amp; Creators</div>
          </div>

          {/* Hero */}
          <div className="ns-stamp">Free Download</div>
          <div className="ns-headline">
            Your newsletter,<br /><em>beautifully done</em><br />in minutes.
          </div>
          <div className="ns-subhead">
            The AI Newsletter Skill — a Claude skill you install once that turns any topic into a{" "}
            <strong>fully designed, on-brand HTML newsletter</strong> in one session.
            No design skills. No formatting rabbit holes. Just a polished issue you're proud to send.
          </div>

          {/* What you get */}
          <div className="ns-section-label">What you get</div>
          <div className="ns-grid">
            <div className="ns-card accent">
              <div className="ns-dot" />
              <div className="ns-card-title">The Newsletter Skill</div>
              <div className="ns-card-desc">A Claude skill you upload once — it handles research, writing, and layout every time you use it.</div>
            </div>
            <div className="ns-card">
              <div className="ns-dot" />
              <div className="ns-card-title">Locked Design System</div>
              <div className="ns-card-desc">Editorial-style HTML template with Playfair Display + DM Sans — looks like a real publication.</div>
            </div>
            <div className="ns-card">
              <div className="ns-dot" />
              <div className="ns-card-title">Your Brand Colors</div>
              <div className="ns-card-desc">One variable to swap your accent color and the entire issue updates — no CSS knowledge needed.</div>
            </div>
            <div className="ns-card">
              <div className="ns-dot" />
              <div className="ns-card-title">Auto-Research Built In</div>
              <div className="ns-card-desc">The skill tells Claude to gather sources first, so every issue is grounded in real intel, not filler.</div>
            </div>
            <div className="ns-card">
              <div className="ns-dot" />
              <div className="ns-card-title">Reusable Every Week</div>
              <div className="ns-card-desc">Write one issue, then run it again next week on a new topic. Same great layout. Zero design rework.</div>
            </div>
            <div className="ns-card">
              <div className="ns-dot" />
              <div className="ns-card-title">Send-Ready Output</div>
              <div className="ns-card-desc">A complete .html file drops out — paste into your email platform or host it as a landing page.</div>
            </div>
          </div>

          {/* Pull quote */}
          <div className="ns-pull-quote">
            "The layout, the fonts, the structure — it's all decided. You just show up with a topic."
            <span>— How the Skill works</span>
          </div>

          {/* This is for you if */}
          <div className="ns-section-label">This is for you if</div>
          <div className="ns-who-grid">
            <div className="ns-who-card">
              <div className="ns-who-title">You've been avoiding your newsletter</div>
              <div className="ns-who-desc">Because starting from a blank doc every week is exhausting. This removes the blank-doc problem entirely.</div>
            </div>
            <div className="ns-who-card">
              <div className="ns-who-title">You want to look polished without hiring a designer</div>
              <div className="ns-who-desc">The template looks like something a creative agency built — because the design decisions are already made for you.</div>
            </div>
            <div className="ns-who-card">
              <div className="ns-who-title">You already use Claude but can't get consistent output</div>
              <div className="ns-who-desc">A skill is an installed capability inside Claude — once it's uploaded, it gives Claude a repeatable structure so every issue comes out the same quality, every time.</div>
            </div>
            <div className="ns-who-card">
              <div className="ns-who-title">You need content that actually sounds like you</div>
              <div className="ns-who-desc">You control the topic and the tone. Claude handles the research, structure, and layout so your voice stays front and center.</div>
            </div>
          </div>

          {/* Note */}
          <div className="ns-note">
            <div className="ns-note-dot" />
            <div className="ns-note-text">
              <strong>You'll need a Claude account to use this skill.</strong>{" "}
              Free accounts work — though a Pro account unlocks longer sessions if you're doing deep research pulls. The skill is a file you upload directly into your Claude system. No copy-pasting, no setup — just install and go.
            </div>
          </div>

          {/* Opt-in */}
          <div className="ns-optin-box">
            <div className="ns-optin-eyebrow">Get the free skill</div>
            <div className="ns-optin-headline">Send me the Newsletter Skill</div>
            <div className="ns-optin-sub">
              Drop your name and email — I'll send it straight to your inbox.
            </div>

            <div id="mlb2-41347039" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41347039">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <form
                    className="ml-block-form"
                    action="https://assets.mailerlite.com/jsonp/2175286/forms/187540034574878540/subscribe"
                    data-code=""
                    method="post"
                    target="_blank"
                  >
                    <div className="ml-form-formContent">
                      <div className="ml-form-fieldRow">
                        <input aria-label="name" type="text" name="fields[name]" placeholder="First name" autoComplete="given-name" />
                      </div>
                      <div className="ml-form-fieldRow ml-last-item">
                        <input aria-label="email" aria-required="true" type="email" name="fields[email]" placeholder="Email address" autoComplete="email" required />
                      </div>
                    </div>
                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />
                    <div className="ml-form-embedSubmit">
                      <button type="submit">Send Me the Skill →</button>
                      <button disabled type="button" className="loading" style={{ display: "none" }}>
                        Loading…
                      </button>
                    </div>
                  </form>
                </div>
                <div className="ml-form-successBody row-success" style={{ display: "none" }}>
                  <div className="ns-success">
                    <div className="ns-success-icon">✓</div>
                    <div className="ns-success-headline">You're in — check your inbox.</div>
                    <div className="ns-success-sub">The skill is on its way. Check your spam folder if it doesn't arrive in a few minutes.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ns-optin-fine">
              No spam. Unsubscribe any time.{" "}
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>

          {/* Footer */}
          <div className="ns-footer">
            <div className="ns-footer-text">
              AI Coachbox — <a href="https://www.gabrielomat.com">gabrielomat.com</a>
            </div>
            <div className="ns-footer-text">Free Resource · May 2026</div>
          </div>

        </div>
      </div>
    </>
  );
}
