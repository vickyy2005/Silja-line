"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InclusionsClient() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "Gastronomy Without Limits",
      icon: "🍽️",
      subtitle: "Four Signature Venues. Zero Surcharges.",
      desc: "Unlike other luxury lines that charge $100+ cover charges for specialty restaurants, Silja Line includes all dining venues without limitation. Dine at L’Etoile under the guidance of Michelin-lauded chefs, savor fresh sushi, or enjoy course-by-course dinner served on your private veranda by your personal butler.",
      points: [
        "All specialty restaurants, omakase counters & trattorias included",
        "24-Hour in-suite fine dining with white glove table presentation",
        "Daily afternoon tea with bespoke pastries and artisan infusions",
        "Chef-hosted market-to-table shore foraging masterclasses",
      ],
      image: "/ship%20models/a9d5ba8d2cdabd4fa7f5b541387b4c67.jpg",
    },
    {
      title: "Sommelier Cellars & Open Bar",
      icon: "🥂",
      subtitle: "Vintage Champagnes & Unlimited Reserves",
      desc: "True luxury is never having to sign a drinks chit. Enjoy unlimited vintage champagnes, sommelier-curated grand cru wines, single malt whiskies, and bespoke cocktails crafted by award-winning mixologists anywhere on board at any hour.",
      points: [
        "Complimentary Moët & Chandon champagne flowing freely on deck",
        "Extensive global sommelier list with 120+ complimentary wines",
        "Customizable in-suite minibar restocked twice daily with your favorites",
        "Artisan espresso, specialty teas, and fresh pressed morning juices",
      ],
      image: "/ship%20models/d8c6ed0956126370c4c524f03720ffd6.jpg",
    },
    {
      title: "Bespoke Shore Excursions",
      icon: "⛵",
      subtitle: "Private Tenders & Expert Local Historians",
      desc: "In every single port of call, choose from curated small-group excursions at no additional cost. Travel in luxury Mercedes vans with private guides, board Zodiacs with polar naturalists, or explore UNESCO World Heritage sites after the crowds have departed.",
      points: [
        "Daily complimentary excursions in every destination",
        "Small-group guarantee: never more than 14 guests per shoreside guide",
        "Complimentary high-speed Zodiac landings and polar expedition parkas",
        "Private tender service with zero wait times in anchor harbors",
      ],
      image: "/voyages/aegean.jpg",
    },
    {
      title: "The European Butler Tradition",
      icon: "🛎️",
      subtitle: "Dedicated Service for Every Stateroom",
      desc: "Every guest aboard Silja Line enjoys dedicated butler service trained in the finest European grand hotels. From unpacking your luggage and garment pressing to drawing a scented bath after shore excursions, our butlers anticipate every wish.",
      points: [
        "Personal luggage unpacking and packing assistance",
        "Complimentary garment pressing and shoeshine services",
        "In-suite breakfast setup on your oceanfront veranda",
        "Priority reservations for spa treatments and private shore cars",
      ],
      image: "/ship%20models/4cff0bc2fa0aee808326890d3dff78a3.jpg",
    },
    {
      title: "Nordic Spa & Thermal Sanctuaries",
      icon: "🧖‍♀️",
      subtitle: "Unlimited Hydrotherapy & Wellness Access",
      desc: "Relax your senses in our expansive thermal suites. Unlike other cruise lines that charge daily spa passes, Silja Line guests enjoy unlimited access to panoramic cedar saunas, aromatic herbal steam grottos, heated stone loungers, and cantilevered infinity pools.",
      points: [
        "Full access to cedarwood saunas with ocean-view floor-to-ceiling glass",
        "Heated thalassotherapy vitality pools with therapeutic water jets",
        "Complimentary sunrise yoga and Pilates classes on the observation deck",
        "Herbal inhalation rooms and glacier cold plunge pools",
      ],
      image: "/ship%20models/45f5b7ba025092b8c84639f14405bd4c.jpg",
    },
    {
      title: "Starlink Wi-Fi & Private Transfers",
      icon: "🛰️",
      subtitle: "Seamless Connectivity Across All Oceans",
      desc: "Stay effortlessly connected with friends, family, and global markets. High-speed multi-device Starlink maritime satellite Wi-Fi is included in all suites, and private airport-to-pier chauffeured limousine transfers welcome you upon arrival.",
      points: [
        "Unlimited Starlink satellite internet with streaming and video call speeds",
        "Private chauffeured luxury transfer from airport directly to the vessel",
        "All port charges, government taxes, and staff gratuities covered 100%",
        "Digital access to 7,000+ international newspapers and magazines",
      ],
      image: "/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg",
    },
  ];

  return (
    <div style={{ background: "var(--color-navy)", minHeight: "100vh", color: "var(--color-ivory)" }}>
      <Navbar currentPath="/inclusions" />

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
            width: "950px",
            height: "420px",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)",
            filter: "blur(75px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="flex items-center gap-2 mb-4" style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-blue-light)", fontWeight: 600 }}>All-Inclusive Standard</span>
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
              UNCOMPROMISED FREEDOM AT SEA
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)",
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              maxWidth: "920px",
              marginBottom: "22px",
            }}
          >
            Everything Included. <br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #f0f4ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Nothing Compromised.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.18rem)",
              lineHeight: 1.75,
              color: "rgba(240,244,255,0.7)",
              maxWidth: "740px",
              marginBottom: "40px",
            }}
          >
            At Silja Line, luxury is the absence of restriction. Never sign a receipt, never worry about dining cover charges or beverage tiers, and never pay extra for excursions. Every element of your voyage is seamlessly and lavishly provided.
          </p>

          {/* Key Value Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(59,130,246,0.3)",
              padding: "12px 24px",
              borderRadius: "14px",
            }}
          >
            <span style={{ fontSize: "20px" }}>💎</span>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>
              Over <span style={{ color: "var(--color-blue-light)" }}>$3,600+</span> in added luxury value included per guest on every sailing.
            </div>
          </div>

        </div>
      </section>

      {/* ── Comparison Table: Conventional vs Silja Line Standard ──────── */}
      <section style={{ padding: "80px 0 90px", background: "#080c18" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700, marginBottom: "8px" }}>
              The Silja Line Transparency Guarantee
            </div>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Conventional Luxury vs. Silja Line
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginTop: "8px" }}>
              See how typical cruise lines monetize your holiday through hidden extras, compared to our genuine all-inclusive standard.
            </p>
          </div>

          <div
            style={{
              background: "rgba(18,25,48,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              overflow: "hidden",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "rgba(10,14,26,0.9)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    <th style={{ padding: "18px 24px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontSize: "10px", fontWeight: 700 }}>Service / Experience</th>
                    <th style={{ padding: "18px 24px", color: "rgba(239,68,68,0.8)", fontSize: "13px", fontWeight: 700 }}>Typical "Luxury" Cruise Lines</th>
                    <th style={{ padding: "18px 24px", color: "#60a5fa", fontSize: "14px", fontWeight: 900, background: "rgba(37,99,235,0.12)" }}>Silja Line All-Inclusive Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Michelin Specialty Dining", comp: "$85 – $150 per person per evening", silja: "100% INCLUDED (All venues, unlimited)" },
                    { item: "Fine Wines, Champagnes & Spirits", comp: "$90 – $140 per day beverage package", silja: "100% INCLUDED (Moët & Chandon, open bar)" },
                    { item: "Daily Shore Excursions", comp: "$180 – $380 per guest per port", silja: "100% INCLUDED (Daily in every port)" },
                    { item: "Starlink Multi-Device Wi-Fi", comp: "$35 – $45 per day surcharge", silja: "100% INCLUDED (Unlimited high-speed)" },
                    { item: "Dedicated In-Suite Butler", comp: "Restricted to top-tier penthouses only", silja: "100% INCLUDED (For all 120 suites)" },
                    { item: "Thermal Spa & Hydrotherapy", comp: "$50 – $75 daily pass fee", silja: "100% INCLUDED (Unlimited daily access)" },
                    { item: "Staff Gratuities & Service", comp: "$25 – $35 per day added to bill", silja: "100% INCLUDED (Zero service charges)" },
                    { item: "Airport Chauffeured Transfers", comp: "$150 – $300 private car fee", silja: "100% INCLUDED (Arrival & departure)" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "16px 24px", fontWeight: 700, color: "#fff" }}>{row.item}</td>
                      <td style={{ padding: "16px 24px", color: "rgba(255,255,255,0.6)" }}>{row.comp}</td>
                      <td style={{ padding: "16px 24px", color: "#93c5fd", fontWeight: 700, background: "rgba(37,99,235,0.08)" }}>
                        ✓ {row.silja}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── Six Pillars of Inclusions (Interactive Tabs) ───────────── */}
      <section style={{ padding: "90px 0 100px", background: "#0a0e1a" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }}>
            <div style={{ fontSize: "10px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700, marginBottom: "8px" }}>
              Comprehensive Deep-Dive
            </div>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              The Six Pillars of the Silja Line Standard
            </h2>
            <p style={{ color: "rgba(240,244,255,0.6)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Select a pillar below to explore what makes your passage on board effortless and truly all-inclusive.
            </p>
          </div>

          {/* Tab selector buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {pillars.map((p, index) => {
              const active = activePillar === index;
              return (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  style={{
                    padding: "16px 12px",
                    borderRadius: "14px",
                    border: active ? "1.5px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                    background: active ? "rgba(37,99,235,0.22)" : "rgba(255,255,255,0.03)",
                    color: "#fff",
                    cursor: "pointer",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:border-blue-500/50"
                >
                  <span style={{ fontSize: "24px" }}>{p.icon}</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card */}
          <div
            style={{
              background: "rgba(18,25,48,0.7)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "8px" }}>
                    Pillar 0{activePillar + 1}
                  </div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "6px" }}>
                    {pillars[activePillar].title}
                  </h3>
                  <div style={{ fontSize: "1rem", color: "var(--color-blue-light)", fontWeight: 600, marginBottom: "18px" }}>
                    {pillars[activePillar].subtitle}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "rgba(240,244,255,0.75)", lineHeight: 1.8, marginBottom: "26px" }}>
                    {pillars[activePillar].desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {pillars[activePillar].points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span style={{ color: "var(--color-blue-light)", fontSize: "14px" }}>✓</span>
                        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <Link
                    href="/voyages"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "var(--color-blue)",
                      color: "#fff",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                    className="hover:bg-blue-600 transition-colors"
                  >
                    View All-Inclusive Voyages →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── In-Suite Finishes & Amenities ──────────────────────────── */}
      <section style={{ padding: "80px 0 100px", background: "#060912", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
            <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700, marginBottom: "8px" }}>
              In-Suite Perfection
            </div>
            <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "#fff" }}>
              Complimentary Stateroom Amenities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🧴", title: "Bvlgari Bath Amenities", desc: "Full-sized luxury fragrances, bath oils, and artisan shampoos restocked daily." },
              { icon: "🛏️", title: "Custom Pillow Menu", desc: "Choice of goose down, hypoallergenic, memory foam, or lavender infused pillows." },
              { icon: "☕", title: "Illy Espresso Machines", desc: "Italian artisan coffee machine with freshly roasted capsules and bespoke bone china." },
              { icon: "💨", title: "Dyson Hair Care", desc: "High-power Dyson Supersonic dryers and styling accessories in every suite vanity." },
            ].map((amenity, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(18,25,48,0.5)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "26px",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{amenity.icon}</div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{amenity.title}</h4>
                <p style={{ fontSize: "0.82rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.65 }}>{amenity.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
