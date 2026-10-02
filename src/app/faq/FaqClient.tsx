"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FaqItem {
  id: string;
  category: "booking" | "onboard" | "dining" | "excursions" | "health" | "charter";
  categoryLabel: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  // Booking & Deposits
  {
    id: "b1",
    category: "booking",
    categoryLabel: "Booking & Deposits",
    question: "What deposit is required to reserve a suite on board?",
    answer: "A 15% deposit is required at the time of reserving your suite. The remaining balance is due 90 days prior to embarkation. If you book within 90 days of sailing, full payment is required upon confirmation.",
  },
  {
    id: "b2",
    category: "booking",
    categoryLabel: "Booking & Deposits",
    question: "What is the cancellation and refund policy?",
    answer: "Cancellations made 120 days or more prior to departure receive a 100% full refund of deposit, minus a $150 administrative concierge fee. Alternatively, you may transfer 100% of your deposit toward any other Silja Line sailing departing within 24 months with zero penalty.",
  },
  {
    id: "b3",
    category: "booking",
    categoryLabel: "Booking & Deposits",
    question: "Can I book consecutive voyages as a combined Grand Journey?",
    answer: "Yes. Many Silja Line guests combine back-to-back itineraries (for example, sailing the Greek Isles followed immediately by the French Riviera). Combining voyages qualifies you for a 10% Grand Journey suite savings, complimentary overnight shoreside hotel stays between sailings, and continuous in-suite placement.",
  },

  // Onboard Life & Dress Code
  {
    id: "o1",
    category: "onboard",
    categoryLabel: "Onboard Life",
    question: "What is the dress code on board Silja Line vessels?",
    answer: "Our atmosphere is 'Country Club Casual' by day (breathable linens, tailored shorts, resort wear, swimwear permitted exclusively at pool and spa decks). In the evenings after 6:00 PM, the ambiance transitions to 'Elegant Resort Chic'—collared shirts, jackets for gentlemen (ties optional), and cocktail dresses or pantsuits for ladies. There are no mandatory black-tie galas, though many guests choose to dress up for the Captain’s Welcome Dinner.",
  },
  {
    id: "o2",
    category: "onboard",
    categoryLabel: "Onboard Life",
    question: "Are gratuities and service charges expected on board?",
    answer: "No. Staff gratuities and service charges for all shipboard personnel (including dining staff, bartenders, suite attendants, and butlers) are completely included in your fare. There is never an expectation to tip on board.",
  },
  {
    id: "o3",
    category: "onboard",
    categoryLabel: "Onboard Life",
    question: "How fast is the onboard Starlink Wi-Fi?",
    answer: "All vessels in the Silja Line fleet are equipped with high-throughput maritime Starlink satellite constellations. Guests enjoy unlimited high-speed connectivity capable of streaming HD video, handling Zoom video conferences, and multi-device connection throughout the ship.",
  },
  {
    id: "o4",
    category: "onboard",
    categoryLabel: "Onboard Life",
    question: "Are children permitted on Silja Line voyages?",
    answer: "Silja Line voyages are designed primarily for sophisticated adult travelers, discerning couples, and multi-generational families. Guests must be at least 12 years of age for ocean voyages and at least 16 years of age for Antarctic and high-Arctic expedition sailings.",
  },

  // Dining & Beverages
  {
    id: "d1",
    category: "dining",
    categoryLabel: "Dining & Beverages",
    question: "Are all specialty dining venues genuinely included without cover charges?",
    answer: "Yes, 100%. Every single dining venue—from L'Etoile French Haute Cuisine to our authentic Japanese omakase counters and Mediterranean grills—is included in your cruise fare with zero cover charges. You may dine at any restaurant as often as you wish.",
  },
  {
    id: "d2",
    category: "dining",
    categoryLabel: "Dining & Beverages",
    question: "Can dietary requirements (vegan, gluten-free, halal, allergies) be accommodated?",
    answer: "Absolutely. Our Executive Chefs and dedicated culinary concierges consult with every guest prior to sailing to record dietary preferences, allergies, and religious dietary standards. Dedicated plant-based, gluten-free, and kosher/halal menus are prepared fresh daily in separate culinary prep stations.",
  },
  {
    id: "d3",
    category: "dining",
    categoryLabel: "Dining & Beverages",
    question: "What beverages and spirits are included in the open bar?",
    answer: "All premium spirits (including grey goose, Macallan 12, Hendrick’s, Casamigos), over 120 international sommelier wines, vintage champagnes (including Moët & Chandon), artisan cocktails, craft beers, and fresh morning juices are complimentary throughout all lounges, restaurants, and your in-suite minibar.",
  },

  // Shore Excursions & Polar Gear
  {
    id: "e1",
    category: "excursions",
    categoryLabel: "Shore Excursions",
    question: "How do complimentary daily shore excursions work?",
    answer: "In every port of call on your itinerary, you may choose from a selection of curated complimentary shore excursions. Groups are capped at a maximum of 14 guests per local expert guide to ensure an intimate, personalized cultural experience. Private car arrangements with driver can also be coordinated with your butler.",
  },
  {
    id: "e2",
    category: "excursions",
    categoryLabel: "Shore Excursions",
    question: "What gear is provided for polar expeditions (Antarctica & Arctic)?",
    answer: "For all polar itineraries aboard Silja Aurora, every guest receives a complimentary custom-fitted, fleece-lined, waterproof polar expedition parka (yours to keep), heavy-duty insulated Muck boots on loan for wet Zodiac landings, and trekking poles.",
  },
  {
    id: "e3",
    category: "excursions",
    categoryLabel: "Shore Excursions",
    question: "How do Zodiac landings operate on expedition voyages?",
    answer: "Silja Aurora carries a fleet of 16 Mark V military-grade Zodiacs stored in dual hydraulic internal hangars. Because our vessel carries only 180 guests, all passengers can disembark simultaneously for wildlife viewing without the long waiting rotations common on larger cruise liners.",
  },

  // Passports, Health & Safety
  {
    id: "h1",
    category: "health",
    categoryLabel: "Health & Passports",
    question: "What passport and visa validity is required for international sailings?",
    answer: "All guests must hold a valid passport with at least six months of validity beyond the final date of your voyage, along with at least two blank visa pages. Our shoreside concierge team will provide a tailored visa guide specific to your nationality 60 days prior to departure.",
  },
  {
    id: "h2",
    category: "health",
    categoryLabel: "Health & Passports",
    question: "What medical facilities are available on board?",
    answer: "Every Silja Line vessel is staffed 24/7 by a fully licensed maritime physician and registered critical-care emergency nurses. Our onboard medical centers are equipped with cardiac monitoring, pharmacy facilities, and satellite tele-medicine connectivity with leading European university hospitals.",
  },
  {
    id: "h3",
    category: "health",
    categoryLabel: "Health & Passports",
    question: "Do the vessels have motion stabilizers for rough seas?",
    answer: "Yes. All three Silja Line vessels are equipped with hydrodynamic computer-controlled fin stabilizers and zero-speed gyroscopic anti-roll systems that operate both while cruising at high speed and while anchored, reducing roll motion by over 85%.",
  },

  // Private Charters
  {
    id: "c1",
    category: "charter",
    categoryLabel: "Private Charters",
    question: "Can I privately charter an entire Silja Line vessel for a private event or family reunion?",
    answer: "Yes. Silja Line offers full-vessel private charters for corporate summits, milestone celebrations, and family voyages. A dedicated charter director works with you to customize every port of call, sailing schedule, on-deck entertainment, and menu. Inquiries should be placed 9 to 18 months in advance.",
  },
];

export default function FaqClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("b1");

  // Inquiries form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchCat = selectedCategory === "All" || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.categoryLabel.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setInquirySent(true);
  };

  return (
    <div style={{ background: "var(--color-navy)", minHeight: "100vh", color: "var(--color-ivory)" }}>
      <Navbar currentPath="/faq" />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          paddingTop: "150px",
          paddingBottom: "80px",
          background: "linear-gradient(180deg, #070a14 0%, #0d1426 50%, #0a0e1a 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1, textAlign: "center" }}>
          
          <div className="flex items-center justify-center gap-2 mb-4" style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-blue-light)", fontWeight: 600 }}>Help &amp; FAQ</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(59,130,246,0.35)",
              marginBottom: "20px",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 8px #3b82f6" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#93c5fd" }}>
              CONCIERGE &amp; VOYAGE KNOWLEDGE BASE
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.75,
              color: "rgba(240,244,255,0.7)",
              maxWidth: "680px",
              margin: "0 auto 36px",
            }}
          >
            Everything you need to know about preparing for your voyage, life on board, suite accommodations, shore excursions, and our transparent reservation policies.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
            <input
              type="text"
              placeholder="Search topics (e.g. dress code, gratuities, Wi-Fi, polar gear, refunds)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                borderRadius: "14px",
                padding: "16px 20px 16px 48px",
                color: "#ffffff",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                outline: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />
            <span style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", fontSize: "18px", color: "rgba(255,255,255,0.4)" }}>
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "14px" }}
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ── FAQ Body & Category Filters ────────────────────────────── */}
      <section style={{ padding: "70px 0 100px", background: "#0a0e1a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 28px" }}>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "All", label: "All Questions" },
              { id: "booking", label: "Booking & Deposits" },
              { id: "onboard", label: "Onboard Life & Dress" },
              { id: "dining", label: "Dining & Drinks" },
              { id: "excursions", label: "Shore Excursions" },
              { id: "health", label: "Safety & Passports" },
              { id: "charter", label: "Private Charters" },
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={{
                    padding: "9px 18px",
                    borderRadius: "10px",
                    border: active ? "1.5px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                    background: active ? "var(--color-blue)" : "rgba(255,255,255,0.03)",
                    color: active ? "#fff" : "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginBottom: "20px" }}>
            Showing {filteredFaqs.length} answers
          </div>

          {/* FAQ Accordions List */}
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "rgba(255,255,255,0.02)", borderRadius: "18px", border: "1px dashed rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>❓</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
                No matching answers found
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "16px" }}>
                Try searching with a different keyword or reset your category.
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                style={{ padding: "8px 18px", background: "var(--color-blue)", color: "#fff", border: "none", borderRadius: "8px", fontSize: "11px", fontWeight: 600, cursor: "pointer" }}
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      background: "rgba(18,25,48,0.6)",
                      border: isOpen ? "1px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      overflow: "hidden",
                      transition: "all 0.25s ease",
                      boxShadow: isOpen ? "0 8px 30px rgba(37,99,235,0.15)" : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      style={{
                        width: "100%",
                        padding: "20px 24px",
                        background: "none",
                        border: "none",
                        textAlign: "left",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        cursor: "pointer",
                      }}
                    >
                      <div>
                        <span style={{ fontSize: "9px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                          {faq.categoryLabel}
                        </span>
                        <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-sans)", lineHeight: 1.4 }}>
                          {faq.question}
                        </span>
                      </div>
                      
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: isOpen ? "var(--color-blue)" : "rgba(255,255,255,0.05)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          color: "#fff",
                          flexShrink: 0,
                          transition: "transform 0.25s ease",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        }}
                      >
                        +
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px 24px",
                          color: "rgba(240,244,255,0.75)",
                          fontSize: "0.92rem",
                          lineHeight: 1.8,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "16px",
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Concierge Direct Contact Card ──────────────────────── */}
          <div
            style={{
              marginTop: "60px",
              background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(18,25,48,0.85) 100%)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "22px",
              padding: "36px 32px",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700 }}>
                  24/7 Personal Assistance
                </span>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#fff", marginTop: "4px", marginBottom: "10px" }}>
                  Have a Question Not Listed Here?
                </h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(240,244,255,0.7)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Our senior maritime concierges are available around the clock to provide personalized cabin plans, flight transfers, or answer specific dietary and accessibility needs.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-[13px] text-white/90">
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span style={{ fontWeight: 700 }}>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉️</span>
                    <span style={{ color: "var(--color-blue-light)" }}>concierge@siljaline.com</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                {inquirySent ? (
                  <div style={{ textAlign: "center", padding: "20px", background: "rgba(16,185,129,0.1)", borderRadius: "14px", border: "1px solid rgba(16,185,129,0.3)" }}>
                    <div style={{ fontSize: "28px", color: "#10b981", marginBottom: "8px" }}>✓</div>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>Inquiry Dispatched!</div>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>
                      Our concierge team will respond to {inquiryEmail} within two hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "#fff",
                        fontSize: "12px",
                        outline: "none",
                      }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "#fff",
                        fontSize: "12px",
                        outline: "none",
                      }}
                    />
                    <textarea
                      rows={2}
                      required
                      placeholder="Your question or request..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "#fff",
                        fontSize: "12px",
                        outline: "none",
                        resize: "none",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: "var(--color-blue)",
                        color: "#fff",
                        border: "none",
                        padding: "11px",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                      className="hover:bg-blue-600 transition-colors"
                    >
                      Ask Concierge
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
