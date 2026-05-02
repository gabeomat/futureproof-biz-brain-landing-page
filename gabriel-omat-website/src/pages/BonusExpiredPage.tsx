import "@/styles/living-workspace.css";

export default function BonusExpiredPage() {
  return (
    <div className="lw-root" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <nav className="top">
        <a href="/living-workspace" className="wm" style={{ textDecoration: "none" }}>
          <span className="dash" />
          <span className="name">The Living Workspace</span>
        </a>
      </nav>

      <div className="final" style={{ flex: 1, display: "flex", alignItems: "center", paddingTop: 60 }}>
        <div className="final-card" style={{ width: "100%" }}>
          <div className="final-inner">
            <div className="eyebrow">— Fast-Action Bonus · Closed</div>
            <h2>
              THE FAST-ACTION BONUSES
              <br />
              <span className="it">have expired.</span>
            </h2>
            <p>
              The 11 Custom Claude Skills bonus for The Living Workspace closed on
              May&nbsp;6, 2026. If you're still interested in joining the founding round,
              email Gabriel directly to see if any spots are still open.
            </p>
            <div className="final-cta-row">
              <a
                href="mailto:AICOACHBOX@gabrielomat.com?subject=The%20Living%20Workspace%20%E2%80%94%20Spot%20Inquiry"
                className="final-cta"
              >
                Email Gabriel <span>→</span>
              </a>
            </div>
            <div className="final-meta" style={{ marginTop: 28 }}>
              <span>AICOACHBOX@gabrielomat.com</span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span className="wm">The Living Workspace · Vol. 02</span>
        <span>© 2026 Gabriel Omat</span>
      </footer>
    </div>
  );
}
