"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ShipDetail {
  id: string;
  name: string;
  tagline: string;
  classification: string;
  builtYear: string;
  shipyard: string;
  description: string;
  image: string;
  gallery: string[];
  specs: {
    length: string;
    beam: string;
    draft: string;
    tonnage: string;
    guests: number;
    suites: number;
    decks: number;
    crewRatio: string;
    speed: string;
    iceClass?: string;
  };
  keyVenues: {
    name: string;
    type: string;
    desc: string;
    icon: string;
  }[];
  decks: {
    deckNum: string;
    name: string;
    highlights: string[];
  }[];
  activeRegions: string[];
}

const FLEET_DATA: ShipDetail[] = [
  {
    id: "solaris",
    name: "Silja Solaris",
    tagline: "The Grand Mediterranean & Asian Flagship",
    classification: "Ultra-Luxury Ocean Cruiser",
    builtYear: "2024",
    shipyard: "Fincantieri, Italy",
    description: "Designed as an open-air sanctuary bathed in light, Silja Solaris represents the quintessential expression of maritime grandeur. Featuring our signature aft glass-bottom infinity pool, expansive teak promenade decks, and four distinct culinary destinations led by Michelin-decorated culinary masters.",
    image: "/ship%20models/45f5b7ba025092b8c84639f14405bd4c.jpg",
    gallery: [
      "/ship%20models/45f5b7ba025092b8c84639f14405bd4c.jpg",
      "/ship%20models/a9d5ba8d2cdabd4fa7f5b541387b4c67.jpg",
      "/the%20space/01.jpg",
      "/ship%20models/4cff0bc2fa0aee808326890d3dff78a3.jpg",
    ],
    specs: {
      length: "198 m (650 ft)",
      beam: "26 m (85 ft)",
      draft: "6.2 m (shallow-port capable)",
      tonnage: "38,000 GT",
      guests: 240,
      suites: 120,
      decks: 8,
      crewRatio: "1 : 1.1 (260 Crew)",
      speed: "19.5 Knots",
    },
    keyVenues: [
      { name: "Aft Cantilevered Infinity Pool", type: "Recreation", desc: "Suspended 12 meters over the ocean with heated seawater and 270-degree horizon views.", icon: "🌊" },
      { name: "L'Etoile Gastronomic Salon", type: "Dining", desc: "Intimate 50-seat restaurant serving multi-course menus paired with sommelier cellar vintages.", icon: "⭐" },
      { name: "Starlight Observatory Lounge", type: "Nightlife", desc: "Retractable glass dome rooftop with live acoustic piano, craft mixology, and stargazing.", icon: "🍸" },
      { name: "The Grand Thalasso Sanctuary", type: "Wellness", desc: "Heated mineral pools, Finnish cedar saunas, aromatic steam suites, and outdoor massage cabanas.", icon: "🧖‍♀️" },
    ],
    decks: [
      { deckNum: "Deck 8", name: "Sky & Helipad Deck", highlights: ["VIP Helipad Touch-and-Go", "Starlight Observation Lounge", "Open-Air Sunbathing Cabanas"] },
      { deckNum: "Deck 7", name: "Horizon Suites", highlights: ["Owner's Ocean Villas", "Horizon Penthouse Suites", "Private Concierge Executive Club"] },
      { deckNum: "Deck 6", name: "Culinary Promenade", highlights: ["L'Etoile 3-Star Dining", "Mediterranean Trattoria", "Sommelier Wine Vault"] },
      { deckNum: "Deck 5", name: "Veranda Suites & Atrium", highlights: ["Grand 3-Story Glass Atrium", "Deluxe Balcony Suites", "Artisan Coffee Boutique"] },
      { deckNum: "Deck 4", name: "Thalasso Spa & Sports Deck", highlights: ["Hydrotherapy Vitality Pool", "Fitness & Pilates Pavilion", "Tender Embarkation Lounge"] },
    ],
    activeRegions: ["Mediterranean & Greek Isles", "Asia & Japanese Archipelago", "French Riviera & Amalfi"],
  },
  {
    id: "aurora",
    name: "Silja Aurora",
    tagline: "Polar Expedition & Fjord Cruiser",
    classification: "PC6 Polar Expedition Yacht",
    builtYear: "2025",
    shipyard: "VARD, Norway",
    description: "Engineered to conquer the world’s most formidable oceans without sacrificing an ounce of luxury. Silja Aurora features an ice-strengthened Polar Class 6 hull, twin expedition helicopters, 16 Mark V Zodiacs, and dynamic positioning thrusters that hold position without dropping anchors, preserving delicate seabed ecosystems.",
    image: "/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg",
    gallery: [
      "/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg",
      "/voyages/antarctica.jpg",
      "/voyages/fjords.jpg",
      "/designed%20for%20better%20experinece/18b95c852446fd37894db1c36d2d6d67.jpg",
    ],
    specs: {
      length: "172 m (564 ft)",
      beam: "24 m (78 ft)",
      draft: "5.8 m",
      tonnage: "28,500 GT",
      guests: 180,
      suites: 90,
      decks: 7,
      crewRatio: "1 : 1 (190 Crew + 16 Naturalists)",
      speed: "17.0 Knots",
      iceClass: "Polar Class 6 (PC6)",
    },
    keyVenues: [
      { name: "Expedition Science Hub & Library", type: "Discovery", desc: "Interactive microscopes, wildlife tracking displays, and lectures led by glaciologists and marine biologists.", icon: "🧭" },
      { name: "Fleet of 16 Mark V Zodiacs", type: "Exploration", desc: "Dual internal Zodiac hangars enabling all 180 guests to disembark for wildlife sightings in under 15 minutes.", icon: "🚤" },
      { name: "Nordic Glacial Salt Sauna", type: "Wellness", desc: "Floor-to-ceiling glass sauna overlooking icebergs, followed by therapeutic cold mist showers.", icon: "❄️" },
      { name: "The Polar Observation Bridge", type: "Scenic", desc: "Forward heated open deck with high-powered swiveling binoculars for whale and albatross spotting.", icon: "🔭" },
    ],
    decks: [
      { deckNum: "Deck 7", name: "Observation & Helipad", highlights: ["Panoramic Heated Observation Deck", "Glacier Viewing Terraces", "Forward Warm Lounge"] },
      { deckNum: "Deck 6", name: "Expedition Suites", highlights: ["Grand Antarctic Balcony Suites", "Naturalist Briefing Theater", "Library & Chart Room"] },
      { deckNum: "Deck 5", name: "Nordic Gastronomy Deck", highlights: ["Fjordland Seafood Grill", "Arctic Sommelier Lounge", "Boutique Expedition Shop"] },
      { deckNum: "Deck 4", name: "Science Lab & Suites", highlights: ["Interactive Research Station", "Deluxe Veranda Staterooms", "Wellness Thermal Suite"] },
      { deckNum: "Deck 3", name: "The Marina & Mudroom", highlights: ["Zodiac Launching Marina", "Heated Gear & Boot Mudroom", "Kayak Storage Bay"] },
    ],
    activeRegions: ["Antarctica & Drake Passage", "Norwegian Fjords & Arctic Svalbard"],
  },
  {
    id: "celestis",
    name: "Silja Celestis",
    tagline: "Caribbean & Riviera Superyacht",
    classification: "Ultra-Boutique Mega Yacht",
    builtYear: "2025",
    shipyard: "Lürssen, Germany",
    description: "Built for guests who demand the playful, barefoot glamour of a billionaire’s private superyacht combined with the service of a grand palace hotel. Celestis boasts a hydraulic sea-level beach club marina that opens directly onto crystal-clear turquoise waters for paddleboarding, Seabobs, and yacht tenders.",
    image: "/ship%20models/d8c6ed0956126370c4c524f03720ffd6.jpg",
    gallery: [
      "/ship%20models/d8c6ed0956126370c4c524f03720ffd6.jpg",
      "/voyages/caribbean.jpg",
      "/voyages/riviera.jpg",
      "/the%20space/43f383b09e9d2766d9b3b9bb64425a06.jpg",
    ],
    specs: {
      length: "186 m (610 ft)",
      beam: "25 m (82 ft)",
      draft: "5.5 m (ultra-shallow draft)",
      tonnage: "32,000 GT",
      guests: 220,
      suites: 110,
      decks: 7,
      crewRatio: "1 : 1.1 (240 Crew)",
      speed: "20.2 Knots",
    },
    keyVenues: [
      { name: "Hydraulic Sea-Level Beach Club", type: "Water Sports", desc: "Retractable teak swim platform with Seabobs, e-foils, paddleboards, and cocktail lounge.", icon: "🏄‍♂️" },
      { name: "Moët & Chandon Sunset Bar", type: "Lounge", desc: "Curated champagne pairings, open-air cabanas, and resident sunset DJ sessions.", icon: "🥂" },
      { name: "Open-Air Cinema Under the Stars", type: "Entertainment", desc: "Heated deck chairs, artisan popcorn, and private film screenings beneath the Caribbean night sky.", icon: "🎬" },
      { name: "Deep-Sea Exploration Submersible", type: "Adventure", desc: "A private 3-passenger submarine diving down to 300 meters for private coral reef discovery.", icon: "🤿" },
    ],
    decks: [
      { deckNum: "Deck 7", name: "Rooftop Starlight Cinema", highlights: ["Open-Air Amphitheater", "Moët & Chandon Champagne Bar", "Daybed Sunken Lounges"] },
      { deckNum: "Deck 6", name: "Penthouse Horizon Deck", highlights: ["Owner's Ocean Penthouse", "Terrace Champagne Club", "Private Dining Salon"] },
      { deckNum: "Deck 5", name: "Riviera Dining & Suites", highlights: ["Mediterranean Seafood Bar", "Sommelier Tasting Cellar", "Deluxe Balcony Suites"] },
      { deckNum: "Deck 4", name: "Grand Salon & Spa", highlights: ["Wellness & Cryotherapy Suite", "Boutique Perfumery", "Main Reception Hall"] },
      { deckNum: "Deck 3", name: "Sea-Level Beach Club", highlights: ["Hydraulic Marina Platform", "Water Toys & Seabob Bay", "Marina Bar & Grill"] },
    ],
    activeRegions: ["Caribbean & Virgin Atolls", "French Riviera & Monaco", "Italian Coast & Amalfi"],
  },
];

export default function FleetClient() {
  const [selectedShipId, setSelectedShipId] = useState<string>("solaris");
  const [activeDeckTab, setActiveDeckTab] = useState<number>(0);

  const activeShip = FLEET_DATA.find((s) => s.id === selectedShipId) || FLEET_DATA[0];

  return (
    <div style={{ background: "var(--color-navy)", minHeight: "100vh", color: "var(--color-ivory)" }}>
      <Navbar currentPath="/fleet" />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          paddingTop: "150px",
          paddingBottom: "80px",
          background: "linear-gradient(180deg, #070a14 0%, #0d1324 50%, #0a0e1a 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="flex items-center gap-2 mb-4" style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-blue-light)", fontWeight: 600 }}>Our Fleet</span>
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
              THE ARCHITECTURE OF MARITIME LUXURY
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
              marginBottom: "22px",
            }}
          >
            Three Vessels. <br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #f0f4ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Three Distinct Visions of the Sea.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.18rem)",
              lineHeight: 1.75,
              color: "rgba(240,244,255,0.7)",
              maxWidth: "760px",
              marginBottom: "44px",
            }}
          >
            Custom-built in Europe’s premier shipyards, every Silja Line vessel is designed with ultra-shallow draft to dock directly in intimate historic harbors where mega-cruise liners cannot venture. All staterooms are 100% exterior-facing veranda suites with personalized European butler service.
          </p>

          {/* Quick Fleet Tabs */}
          <div className="flex flex-wrap gap-4">
            {FLEET_DATA.map((ship) => {
              const active = ship.id === selectedShipId;
              return (
                <button
                  key={ship.id}
                  onClick={() => setSelectedShipId(ship.id)}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "14px",
                    border: active ? "1.5px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.1)",
                    background: active ? "rgba(37,99,235,0.22)" : "rgba(255,255,255,0.03)",
                    color: "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.25s ease",
                    boxShadow: active ? "0 0 25px rgba(37,99,235,0.3)" : "none",
                  }}
                  className="hover:border-blue-400"
                >
                  <div style={{ fontSize: "10px", color: active ? "var(--color-blue-light)" : "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
                    {ship.classification}
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginTop: "2px" }}>
                    {ship.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>
                    {ship.specs.guests} Guests • {ship.specs.suites} Oceanview Suites
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Active Ship Deep-Dive ───────────────────────────────────── */}
      <section style={{ padding: "80px 0 100px", background: "#0a0e1a" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          {/* Main vessel banner & specs */}
          <div
            style={{
              background: "rgba(18,25,48,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "26px",
              overflow: "hidden",
              marginBottom: "50px",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Photo spotlight */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px]">
                <img
                  src={activeShip.image}
                  alt={activeShip.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, rgba(18,25,48,0.95) 100%)" }} />
                
                <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "rgba(10,14,26,0.85)", backdropFilter: "blur(10px)", padding: "10px 18px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 700 }}>
                    Commissioned {activeShip.builtYear}
                  </div>
                  <div style={{ fontSize: "12px", color: "#fff", fontWeight: 600 }}>
                    Crafted by {activeShip.shipyard}
                  </div>
                </div>
              </div>

              {/* Vessel specs & story */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div style={{ fontSize: "10px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "8px" }}>
                    {activeShip.classification}
                  </div>
                  <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "6px" }}>
                    {activeShip.name}
                  </h2>
                  <div style={{ fontSize: "0.9rem", color: "var(--color-gold)", fontStyle: "italic", marginBottom: "18px" }}>
                    "{activeShip.tagline}"
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "rgba(240,244,255,0.7)", lineHeight: 1.75, marginBottom: "26px" }}>
                    {activeShip.description}
                  </p>

                  {/* Specs Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                      background: "rgba(255,255,255,0.03)",
                      padding: "16px",
                      borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      marginBottom: "24px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Length Overall</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{activeShip.specs.length}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Tonnage</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{activeShip.specs.tonnage}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Guest Capacity</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-blue-light)" }}>{activeShip.specs.guests} Guests Only</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Staff to Guest</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{activeShip.specs.crewRatio}</div>
                    </div>
                    {activeShip.specs.iceClass && (
                      <div className="col-span-2">
                        <div style={{ fontSize: "9px", color: "var(--color-cyan)", textTransform: "uppercase" }}>Hull Ice Rating</div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{activeShip.specs.iceClass} (Reinforced Polar Navigation)</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/voyages`}
                    style={{
                      background: "var(--color-blue)",
                      color: "#fff",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      boxShadow: "0 0 15px rgba(37,99,235,0.35)",
                    }}
                    className="hover:bg-blue-600 transition-colors"
                  >
                    View {activeShip.name} Itineraries →
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Key Venues on this Vessel */}
          <div style={{ marginBottom: "60px" }}>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "10px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700 }}>
                Bespoke Social Spaces
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                Signature Venues on Board {activeShip.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeShip.keyVenues.map((venue, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(18,25,48,0.5)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "32px", marginBottom: "14px" }}>{venue.icon}</div>
                    <span style={{ fontSize: "9px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
                      {venue.type}
                    </span>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginTop: "4px", marginBottom: "8px" }}>
                      {venue.name}
                    </h4>
                    <p style={{ fontSize: "0.82rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.65 }}>
                      {venue.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deck-by-Deck Plan Explorer */}
          <div
            style={{
              background: "rgba(18,25,48,0.55)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "36px",
              marginBottom: "70px",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700 }}>
                Deck-By-Deck Architectural Layout
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>
                Explore the Decks of {activeShip.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Deck selector buttons */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                {activeShip.decks.map((d, index) => (
                  <button
                    key={d.deckNum}
                    onClick={() => setActiveDeckTab(index)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "10px",
                      border: activeDeckTab === index ? "1px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.06)",
                      background: activeDeckTab === index ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.03)",
                      color: "#fff",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "10px", color: activeDeckTab === index ? "var(--color-blue-light)" : "rgba(255,255,255,0.45)", fontWeight: 700, textTransform: "uppercase" }}>
                        {d.deckNum}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700 }}>{d.name}</div>
                    </div>
                    <span style={{ color: activeDeckTab === index ? "var(--color-blue-light)" : "rgba(255,255,255,0.2)" }}>➔</span>
                  </button>
                ))}
              </div>

              {/* Active Deck Highlights */}
              <div
                className="lg:col-span-8 p-6 lg:p-8 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div style={{ fontSize: "11px", color: "var(--color-blue-light)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "6px" }}>
                  {activeShip.decks[activeDeckTab]?.deckNum}
                </div>
                <h4 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
                  {activeShip.decks[activeDeckTab]?.name}
                </h4>

                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "18px" }}>
                  Key spaces, staterooms, and public venues located on this level:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeShip.decks[activeDeckTab]?.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(37,99,235,0.08)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        borderRadius: "10px",
                        padding: "12px 16px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "var(--color-blue-light)" }}>✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  High-speed noiseless elevator access connects all passenger decks directly from the Grand Atrium and Spa foyer.
                </p>
              </div>

            </div>
          </div>

          {/* ── Fleet Comparison Table ───────────────────────────────── */}
          <div style={{ marginBottom: "60px" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
              <div style={{ fontSize: "10px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700, marginBottom: "8px" }}>
                Fleet Specifications Side-by-Side
              </div>
              <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#fff" }}>
                Compare Our Three Vessels
              </h3>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: "rgba(18,25,48,0.8)" }}>
                    <th style={{ padding: "16px 20px", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", fontSize: "10px" }}>Specification</th>
                    <th style={{ padding: "16px 20px", color: "#60a5fa", fontWeight: 800, fontSize: "14px" }}>Silja Solaris</th>
                    <th style={{ padding: "16px 20px", color: "#38bdf8", fontWeight: 800, fontSize: "14px" }}>Silja Aurora</th>
                    <th style={{ padding: "16px 20px", color: "#a78bfa", fontWeight: 800, fontSize: "14px" }}>Silja Celestis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { spec: "Classification", s: "Ultra-Luxury Flagship", a: "PC6 Polar Expedition", c: "Riviera Mega-Yacht" },
                    { spec: "Guest Capacity", s: "240 Guests", a: "180 Guests", c: "220 Guests" },
                    { spec: "Suite Count", s: "120 (100% Veranda)", a: "90 (100% Veranda)", c: "110 (100% Veranda)" },
                    { spec: "Staff-to-Guest", s: "1 : 1.1", a: "1 : 1", c: "1 : 1.1" },
                    { spec: "Length / Beam", s: "198m / 26m", a: "172m / 24m", c: "186m / 25m" },
                    { spec: "Ice Strengthening", s: "Open Water", a: "Polar Class 6 (PC6)", c: "Open Water" },
                    { spec: "Zodiac Hangars", s: "4 Sightseeing Tenders", a: "16 Mark V Polar Zodiacs", c: "4 Tenders + Submersible" },
                    { spec: "Marina Beach Club", s: "Aft Cantilevered Pool", a: "Zodiac Launch Marina", c: "Hydraulic Sea-Level Marina" },
                    { spec: "Helipad", s: "Bow Helipad", a: "Dual Helipads", c: "Touch-and-Go Helipad" },
                    { spec: "Primary Oceans", s: "Mediterranean, Asia", a: "Antarctica, Fjords", c: "Caribbean, French Riviera" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "14px 20px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{row.spec}</td>
                      <td style={{ padding: "14px 20px", color: "#fff" }}>{row.s}</td>
                      <td style={{ padding: "14px 20px", color: "#fff" }}>{row.a}</td>
                      <td style={{ padding: "14px 20px", color: "#fff" }}>{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Environmental Commitment Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.15) 100%)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "20px",
              padding: "36px 40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontSize: "10px", color: "var(--color-cyan)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "6px" }}>
                Next-Generation Ecological Maritime Engineering
              </div>
              <h4 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                Zero Waste, Dynamic Anchoring &amp; Hybrid LNG Propulsion
              </h4>
              <p style={{ fontSize: "0.85rem", color: "rgba(240,244,255,0.7)", lineHeight: 1.7 }}>
                Our entire fleet uses GPS-guided Dynamic Positioning thrusters that keep our vessels stationary in marine sanctuaries and coral atolls without dropping anchors. 100% of organic waste is converted to bio-energy on board.
              </p>
            </div>

            <Link
              href="/voyages"
              style={{
                background: "#fff",
                color: "#0a0e1a",
                padding: "14px 30px",
                borderRadius: "10px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              className="hover:bg-blue-50 transition-colors"
            >
              Book Your Voyage →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
