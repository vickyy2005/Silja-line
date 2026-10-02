import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#05070d", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "70px 28px 40px" }}>
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 32, background: "var(--color-blue)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontSize: "14px", fontWeight: 800 }}>S</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.1em" }}>SILJA LINE</span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "16px" }}>
              Pioneering ultra-luxury maritime journeys across the world’s most pristine oceans. All-suite boutique cruising with uncompromised elegance.
            </p>
            <div style={{ fontSize: "11px", color: "var(--color-blue-light)" }}>
              Silja Line Terminal, Pier 7 • International Cruise Harbour
            </div>
          </div>

          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              Explore Fleet &amp; Itineraries
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
              <li><Link href="/voyages" className="hover:text-white transition-colors no-underline text-inherit">All Handcrafted Voyages</Link></li>
              <li><Link href="/fleet" className="hover:text-white transition-colors no-underline text-inherit">Our Luxury Fleet</Link></li>
              <li><Link href="/inclusions" className="hover:text-white transition-colors no-underline text-inherit">All-Inclusive Standard</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors no-underline text-inherit">Traveler Stories &amp; Dispatch</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors no-underline text-inherit">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              Worldwide Destinations
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
              <li><Link href="/voyages" className="hover:text-white transition-colors no-underline text-inherit">Mediterranean &amp; Greek Isles</Link></li>
              <li><Link href="/voyages" className="hover:text-white transition-colors no-underline text-inherit">Norwegian Fjords &amp; Midnight Sun</Link></li>
              <li><Link href="/voyages" className="hover:text-white transition-colors no-underline text-inherit">Azure Caribbean &amp; Virgin Atolls</Link></li>
              <li><Link href="/voyages" className="hover:text-white transition-colors no-underline text-inherit">Imperial Japan &amp; Seto Inland Sea</Link></li>
              <li><Link href="/voyages" className="hover:text-white transition-colors no-underline text-inherit">Antarctica &amp; Drake Passage</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              Concierge Desk
            </div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "12px" }}>
              Connect with our maritime advisors for custom itineraries, suite holds, and private charters:
            </p>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
              +91 98765 43210
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-blue-light)" }}>
              voyages@siljaline.com
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-white/40">
          <div>
            © 2026 Silja Line Luxury Cruises Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Passage</span>
            <span>Maritime Environmental Safety</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
