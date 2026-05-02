import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import "@/styles/living-workspace.css";

const TARGET_MS = new Date("2026-05-06T23:59:59").getTime();
const APPLY_URL = "https://living-workspace-application.lovable.app";

const SKILLS: Array<{ name: string }> = [
  { name: "File Organizer" },
  { name: "Client Onboarding Sequence Builder" },
  { name: "Brainstorming Skill" },
  { name: "SOP Creator" },
  { name: "Consciousness-Based Sales Page Creator" },
  { name: "Frontend Design Skill" },
  { name: "AI Product Thinking Coach" },
  { name: "Podcast Script Creator" },
  { name: "The Content Multiplier" },
  { name: "The Newsletter Builder" },
  { name: "News Carousel Builder" },
];

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"];

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Is this a course?",
    a: "No. This is private 1:1 implementation. We're building your workspace together on live calls. You're not buying access to videos and hoping you finish them.",
  },
  {
    q: "Do I need to already use Claude?",
    a: "Less of a learning curve if you do, but if you don't we can bring your memories from ChatGPT over to Claude. You don't need to be advanced — just comfortable in AI and willing to work inside Claude regularly.",
  },
  {
    q: "What if I've taken AI courses before and nothing stuck?",
    a: "Same. That's most of my clients. Courses don't stick because nobody builds the system inside your actual business. We do. That's the whole point.",
  },
  {
    q: "What if my tech stack is different?",
    a: "Expected. The intake covers your tools and platforms. We pick the three workflows that fit YOUR business, not a generic template. You'll learn throughout, and ultimately be able to build your own.",
  },
  {
    q: "Will you build complex automations in Zapier, Make, or n8n?",
    a: "The three custom workflows are Claude-based. External automation builds can be a separate engagement — but honestly, most everything can be done directly within Claude these days.",
  },
  {
    q: "What if Claude changes?",
    a: "It will. AI moves fast. Week 4 covers maintenance, evolution, and how to keep your workspace alive as everything shifts. What I'm teaching is a full concept that works with any LLM — Claude just happens to be perfectly equipped for it.",
  },
  {
    q: "What happens after the 30 days?",
    a: "You have 30 more days of Slack support. After that, ongoing maintenance options exist if you want them.",
  },
  {
    q: "Can I get on a call to ask questions before I apply?",
    a: "Apply first. Then if you'd like, we can hop on a 15-minute call. That's by design — it saves both of us time.",
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function useCountdown() {
  const [t, setT] = useState(() => {
    const diff = Math.max(0, TARGET_MS - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
      expired: diff === 0,
    };
  });
  useEffect(() => {
    const id = window.setInterval(() => {
      const diff = Math.max(0, TARGET_MS - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        expired: diff === 0,
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);
  return t;
}

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const root = ref.current;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    // Pageload pass — anything already on screen reveals immediately
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function LivingWorkspacePage() {
  const [, setLocation] = useLocation();
  const { d, h, m, s, expired } = useCountdown();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const rootRef = useReveal();

  // When countdown expires, redirect to /bonus-expired
  useEffect(() => {
    if (expired) {
      setLocation("/bonus-expired");
    }
  }, [expired, setLocation]);

  return (
    <div className="lw-root" ref={rootRef}>
      {/* Countdown */}
      <div className="countdown">
        <span>
          <span className="pulse-dot" aria-hidden>●</span>{" "}
          <span className="pre">Founding Round · 5 spots · 3 remaining</span>
        </span>
        <div className="timer">
          <span>Skills bonus closes in</span>
          <b>{pad(d)}</b><span>D</span>
          <b>{pad(h)}</b><span>H</span>
          <b>{pad(m)}</b><span>M</span>
          <b className="seconds-only">{pad(s)}</b><span className="seconds-only">S</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="top">
        <div className="wm"><span className="dash" /><span className="name">The Living Workspace</span></div>
        <div className="nav-mid">
          <a href="#" className="active">Home</a>
          <a href="#story">About</a>
          <a href="#weeks">Process</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">Apply <span>→</span></a>
      </nav>

      {/* Hero */}
      <div className="hero-shell">
        <div className="hero-card">
          <div className="hero-left">
            <div className="hero-eyebrow"><span className="line" /><span>Vol. 02 · The Living Workspace · 30-Day Build</span></div>
            <div>
              <h1 className="hero-title">
                <span className="stop">Stop carrying</span>
                <span className="it">your whole business</span>
                <span className="it smaller">in your head.</span>
              </h1>
              <p className="hero-deck">In 30 days, we build your Living Workspace inside Claude — a private command center your business can actually run from. Private 1:1 implementation. Five founding spots.</p>
              <div className="hero-actions">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-coral">Apply for a founding spot <span>→</span></a>
                <a href="#weeks" className="link-secondary">See the build →</a>
              </div>
            </div>
            <div className="hero-bottom">
              <span className="label">The Atelier</span>
              <span>— 02 / Founding Round</span>
            </div>
          </div>
          <div className="hero-right">
            <img src="/images/lw-gabriel.jpeg" alt="Gabriel Omat" />
            <div className="hero-tag">Workspace Architect</div>
            <div className="hero-caption">"Built in private,<br />not on a stage."</div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          <span>One workspace, not seven tabs</span>
          <span>Claude already knows your business</span>
          <span>Built around you — not a template</span>
          <span>Private 1:1 implementation</span>
          <span>Five founding spots</span>
          <span>One workspace, not seven tabs</span>
          <span>Claude already knows your business</span>
          <span>Built around you — not a template</span>
          <span>Private 1:1 implementation</span>
          <span>Five founding spots</span>
        </div>
      </div>

      {/* Problem */}
      <section className="problem">
        <div className="section-rule"><span className="line" /><span>The Diagnosis</span></div>
        <div className="intro">
          <h2 className="editorial reveal">YOUR AI SETUP <span className="it">looks impressive</span> <span className="coral">for about five minutes.</span></h2>
          <p className="reveal reveal-d1">A Custom GPT here. A Claude Project there. Prompts saved somewhere you can't remember. A Notion doc you forgot existed. Then your business changes — and suddenly your AI setup is already stale.</p>
        </div>

        <div className="problem-grid">
          <div className="problem-card reveal">
            <span className="num">i.</span>
            <h3>The Scattered Setup</h3>
            <div className="sub">What you have right now</div>
            <ul>
              <li>A Custom GPT you set up six months ago</li>
              <li>A Claude Project that's missing your latest offer</li>
              <li>A Notion doc you forgot existed</li>
              <li>A spreadsheet of metrics you meant to update</li>
              <li>Prompts saved across three apps</li>
            </ul>
            <p style={{ marginTop: 20 }}>Then your offer shifts. Your priorities move. A client asks for something new. <strong>And it's all stale.</strong></p>
          </div>

          <div className="problem-card dark reveal reveal-d2">
            <span className="num">ii.</span>
            <h3>The Living Workspace</h3>
            <div className="sub">What we build instead</div>
            <ul>
              <li>One workspace Claude knows by heart</li>
              <li>Your offers, voice, and audience captured</li>
              <li>Three custom workflows for YOUR business</li>
              <li>A Command Center you actually want to open</li>
              <li>A Chat Sweep ritual that keeps it alive</li>
            </ul>
            <p style={{ marginTop: 20 }}>You stop re-explaining your business. <strong>You start from where you actually are.</strong></p>
          </div>
        </div>
      </section>

      {/* Promise (full bleed) */}
      <div className="promise">
        <div className="promise-inner">
          <div className="section-rule"><span className="line" /><span>The Promise · 02</span></div>
          <h2 className="editorial">IMAGINE SUNDAY NIGHT. <span className="it">You open one workspace.</span> <span className="coral">Not seven tabs.</span></h2>
          <div className="body">
            <div>
              <p>Claude already knows what offer you're selling. <strong>It already knows what you decided last Thursday about pricing.</strong> It already knows your voice, the three metrics you're watching, and the membership rebrand you parked until Q2.</p>
              <p>You don't re-explain your business. You don't paste the same context for the 47th time. You just start from where you actually are.</p>
              <p>That's a Living Workspace. The foundation underneath everything else AI can do for your business.</p>
            </div>
            <div className="pull">"With it, you stop starting from scratch. <em>You start from you.</em>"</div>
          </div>
        </div>
      </div>

      {/* Weeks */}
      <section id="weeks">
        <div className="section-rule"><span className="line" /><span>The 30-Day Build · Week by Week</span></div>
        <div className="weeks-head">
          <h2 className="editorial">FOUR WEEKS. <span className="it">One private build.</span></h2>
          <p>Four 60-minute 1:1 calls, plus async support between them. We build inside YOUR business — not a course, not a template, not a 400-person Telegram channel.</p>
        </div>

        <div className="weeks-grid">
          <article className="week-card reveal">
            <div className="top-row">
              <span className="num">01</span>
              <span className="label"><span className="line" />Week One</span>
            </div>
            <div>
              <h3>Build Your<br />Business Brain</h3>
              <div className="it">— The foundation.</div>
            </div>
            <p>Set up your foundational workspace files. CLAUDE.md, TASKS.md, LOG.md, your wiki structure, business profile, brand voice, offers, audience, priorities, projects, decisions, metrics. I ask. You talk. Claude captures.</p>
            <span className="read">By end of week → no more starting from zero <span>→</span></span>
          </article>

          <article className="week-card dark reveal reveal-d1">
            <div className="top-row">
              <span className="num">02</span>
              <span className="label"><span className="line" />Week Two</span>
            </div>
            <div>
              <h3>Build Your<br />Command Center</h3>
              <div className="it">— Make it usable.</div>
            </div>
            <p>Nobody wants to live inside markdown files. So we build a clean, clickable HTML view of your knowledge base, folders, active priorities, and current focus — the part that makes the system feel like a system.</p>
            <span className="read">By end of week → a workspace you want to open <span>→</span></span>
          </article>

          <article className="week-card dark reveal reveal-d2">
            <div className="top-row">
              <span className="num">03</span>
              <span className="label"><span className="line" />Week Three</span>
            </div>
            <div>
              <h3>Build Your<br />3 Custom Workflows</h3>
              <div className="it">— Yours, not generic.</div>
            </div>
            <p>Weekly content planning. Sales call prep. Lead research. Client onboarding. Workshop launches. We pick the three that lift the most weight off your shoulders — and we build them around YOUR tech stack and offers.</p>
            <span className="read">By end of week → real time saved <span>→</span></span>
          </article>

          <article className="week-card reveal reveal-d3">
            <div className="top-row">
              <span className="num">04</span>
              <span className="label"><span className="line" />Week Four</span>
            </div>
            <div>
              <h3>Build Your<br />Operating Rhythm</h3>
              <div className="it">— Make it stick.</div>
            </div>
            <p>How to use it daily. How to keep your Brain updated. How to use the Chat Sweep command. How to clean up old context. How to add new workflows as your business evolves. The difference between buying a system and owning one.</p>
            <span className="read">By end of week → you own it <span>→</span></span>
          </article>
        </div>
      </section>

      {/* Stack / Deliverables */}
      <section id="included">
        <div className="section-rule"><span className="line" /><span>The Founding-Client Deliverable</span></div>
        <div className="stack-head">
          <h2 className="editorial">WHAT YOU <span className="it">walk away with.</span></h2>
          <p>Eight private deliverables, valued at $6,191. Available to founding clients at <strong>$1,497</strong> — the lowest price this offer will ever exist.</p>
        </div>

        <div className="stack-list">
          {[
            { idx: "i", item: "Four private 60-minute 1:1 implementation calls", desc: "Just you and me. Building your custom business brain & operating system.", val: "$2,000" },
            { idx: "ii", item: "30 days private async implementation support", desc: "Loom feedback. Screenshot review. Real help between calls.", val: "$750" },
            { idx: "iii", item: "30 more days of Slack support after the build", desc: "Because the real questions show up after you've been living in it.", val: "$750" },
            { idx: "iv", item: "The Living Workspace Starter System", desc: "Every foundational file, prompt, and template I use. So we're not starting blank.", val: "$497" },
            { idx: "v", item: "Three custom workflows built around your business", desc: "Real workflows for the work you actually do every week — not templates.", val: "$1,500" },
            { idx: "vi", item: "Workspace Command Center artifact", desc: "A clean HTML dashboard so you actually want to open your workspace.", val: "$497" },
            { idx: "vii", item: "Chat Sweep Command", desc: "The single command that keeps your workspace alive instead of going stale.", val: "$197" },
            { idx: "viii", item: "Experience and expertise to thrive in your living workspace", desc: "Watch it get smarter over time and continue adding AI roles and workflows as needed.", val: "Priceless" },
          ].map((row) => (
            <div className="stack-item" key={row.idx}>
              <span className="idx">{row.idx}</span>
              <div className="item">
                {row.item}
                <small>{row.desc}</small>
              </div>
              <div className="val">{row.val}</div>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>

        <div className="stack-total">
          <div className="lbl">Founding-Client Investment</div>
          <div className="crossed">$6,191</div>
          <div className="now"><em>$1,497</em></div>
        </div>
      </section>

      {/* Bonus */}
      <div className="bonus">
        <div className="bonus-card">
          <div className="bonus-left">
            <div className="eyebrow"><span className="line" /><span>Bonus · Closes May 6</span></div>
            <h3>11 Custom</h3>
            <h3>Claude Skills.</h3>
            <div className="it">— $500 value.</div>
            <p>The same skills I use in my own business every single week. The ones I'd hand a private client. The ones that took months to build, refine, and prove.</p>
            <p>You get all 11 the day you join. They drop straight into your workspace and they're yours to keep.</p>
            <div className="deadline">After May 6 · this disappears</div>
          </div>
          <div className="skills">
            {SKILLS.map((sk, i) => (
              <div className="skill" key={sk.name}>
                <span className="n">{ROMAN[i]}</span>
                <span className="t">{sk.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="story" id="story">
        <div className="story-inner">
          <div className="story-portrait">
            <div className="frame"><img src="/images/lw-gabriel-desk.png" alt="Gabriel Omat at his desk" /></div>
            <div className="badge">The Builder</div>
            <div className="meta"><span>Gabriel Omat</span><span>Vol. 02 · 2026</span></div>
          </div>

          <div className="story-text">
            <div className="section-rule"><span className="line" /><span>A Note From Gabriel</span></div>
            <h2>"IT WORKED <span className="it">until it didn't.</span>"</h2>
            <p>In 2022 I was running $40K–$70K months in my coaching business. A team of six. $10K/mo in ad spend. High-ticket launches every single month.</p>
            <p>It looked impressive from the outside. From the inside? <strong>I was holding the entire thing together with caffeine during the day, wine at night, and a brain that never stopped spinning.</strong></p>
            <p>Then the live launch model started breaking down. The market shifted. The whole house of cards came down with it. I had to rethink everything.</p>
            <div className="pull">"The version I'm building now runs on systems instead of stamina. AI does the heavy lifting. My workspace holds the context. <em>I get to think like a CEO instead of running like an employee in my own company.</em>"</div>
            <p>That's the version I've built for myself. And it's the version I help my clients build. Lean. Calm. Sustainable. Powerful.</p>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="guar">
        <div className="guar-inner">
          <div className="guar-seal"><b>30</b><span>Day Promise</span></div>
          <div>
            <h3>Show up to the four calls. Do the intake. <span className="it">Build with me.</span></h3>
            <p>If by Day 30 you don't have a working Living Workspace that's saving you at least 10 hours a week, tell me. I'll refund you in full and you keep everything we built.</p>
          </div>
          <div className="seal-cta">— G.</div>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-rule"><span className="line" /><span>Questions Worth Asking</span></div>
        <h2 className="editorial">SOME <span className="it">good ones.</span></h2>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button
                className="faq-q"
                aria-expanded={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="idx">{ROMAN[i]}</span>
                <span>{item.q}</span>
                <span className="icon">+</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="final" id="apply">
        <div className="final-card">
          <div className="final-inner">
            <div className="eyebrow">— The Founding Round · 5 Spots · $1,497</div>
            <h2>SIX MONTHS FROM NOW. <span className="it">You'll either still be re-explaining</span> — or watching Claude already know.</h2>
            <p>The math is brutal. The fix is one 30-day build. When the spots are gone, they're gone.</p>
            <div className="final-cta-row">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="final-cta">Apply for a founding spot <span>→</span></a>
            </div>
            <div className="final-meta">
              <span>5 founding spots · 3 left</span>
              <span>·</span>
              <span>$1,497 (future $3,000)</span>
              <span>·</span>
              <span>Skills bonus closes May 6</span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span className="wm">The Living Workspace · Vol. 02</span>
        <span>© 2026 Gabriel Omat · Built in private, not on a stage</span>
      </footer>
    </div>
  );
}
