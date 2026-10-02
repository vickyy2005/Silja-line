"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { VOYAGES_DATA, Voyage, ItineraryDay } from "@/components/VoyagesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SuiteTier {
  id: string;
  name: string;
  size: string;
  veranda: string;
  description: string;
  perks: string[];
  priceAddon: string;
}

const SUITE_TIERS: SuiteTier[] = [
  {
    id: "deluxe-balcony",
    name: "Deluxe Balcony Suite",
    size: "42 m² (452 sq.ft)",
    veranda: "8 m² Private Ocean Balcony",
    description: "Floor-to-ceiling glass doors opening onto the endless ocean. Italian marble bathroom with rain shower, plush king bedding, and complimentary mini-bar restocked daily.",
    perks: ["24-Hour Room Service", "Pillow Menu Selection", "Bvlgari Bath Amenities", "Unlimited Starlink Wi-Fi"],
    priceAddon: "Included in Fare",
  },
  {
    id: "horizon-penthouse",
    name: "Horizon Penthouse Suite",
    size: "78 m² (840 sq.ft)",
    veranda: "18 m² Wraparound Teak Terrace",
    description: "Expansive living salon with dining table for four, private teak veranda with cushioned daybeds, soaking whirlpool tub with panoramic horizon views.",
    perks: ["Dedicated European Butler", "Complimentary Laundry & Pressing", "Guaranteed Specialty Dining Reservations", "Priority Tender & Embarkation"],
    priceAddon: "+$950 / guest",
  },
  {
    id: "owners-villa",
    name: "Owner’s Ocean Villa",
    size: "135 m² (1,453 sq.ft)",
    veranda: "38 m² Private Jacuzzi Sun Deck",
    description: "The pinnacle of maritime luxury. Master bedroom, walk-in dressing salon, private outdoor hot tub on the bow, customized wine cellar, and private dinner served by the Executive Chef.",
    perks: ["Private Chauffeured Airport Transfers", "Private Chef In-Suite Dining", "Unlimited Spa Treatments", "Dedicated In-Suite Sommelier Reserve"],
    priceAddon: "+$2,400 / guest",
  },
];

const SHIPS = [
  {
    name: "Silja Solaris",
    tagline: "The Mediterranean & Asian Flagship",
    image: "/ship%20models/45f5b7ba025092b8c84639f14405bd4c.jpg",
    specs: {
      guests: 240,
      suites: 120,
      length: "198 m",
      crewRatio: "1 : 1.1",
      dining: "4 Venues",
      speed: "19 Knots",
    },
    features: ["Aft Glass Infinity Pool", "Rooftop Starlight Lounge", "Thermal Thalassotherapy Spa", "Helipad Access"],
    regions: ["Mediterranean & Greece", "Asia & Japan"],
  },
  {
    name: "Silja Aurora",
    tagline: "Polar Expedition & Fjord Cruiser",
    image: "/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg",
    specs: {
      guests: 180,
      suites: 90,
      length: "172 m",
      crewRatio: "1 : 1",
      dining: "3 Venues",
      speed: "17 Knots",
    },
    features: ["Polar Class 6 Reinforced Hull", "16 Expedition Zodiacs", "Panoramic Science & Observation Lounge", "Heated Glacial Salt Sauna"],
    regions: ["Scandinavia & Fjords", "Polar Expeditions"],
  },
  {
    name: "Silja Celestis",
    tagline: "Caribbean & Riviera Superyacht",
    image: "/ship%20models/d8c6ed0956126370c4c524f03720ffd6.jpg",
    specs: {
      guests: 220,
      suites: 110,
      length: "186 m",
      crewRatio: "1 : 1.1",
      dining: "4 Venues",
      speed: "20 Knots",
    },
    features: ["Retractable Sea-Level Marina", "Open-Air Sunset Amphitheatre", "Moët & Chandon Champagne Bar", "Deep-Water Submersible"],
    regions: ["Caribbean & Tropics", "Mediterranean & Greece"],
  },
];

const INCLUSIONS = [
  {
    icon: "🍽️",
    title: "Michelin-Inspired Gastronomy",
    desc: "Every dining venue is included without surcharge. Savor multi-course tasting menus, fresh seafood, and artisan delicacies created by master chefs.",
  },
  {
    icon: "🥂",
    title: "Sommelier Cellars & Open Bar",
    desc: "Unlimited fine wines, vintage champagnes, handcrafted spirits, and specialty coffees available throughout the ship at any hour.",
  },
  {
    icon: "⛵",
    title: "Private Shoreside Expeditions",
    desc: "Curated small-group excursions, private catamaran cruises, UNESCO heritage visits, and Zodiac exploration led by expert expedition naturalists.",
  },
  {
    icon: "🛎️",
    title: "Dedicated European Butler",
    desc: "From unpacking your wardrobe and preparing in-suite breakfast to arranging private shore reservations, our intuitive service anticipates every desire.",
  },
  {
    icon: "🧖‍♀️",
    title: "Nordic Spa & Hydrotherapy",
    desc: "Complimentary access to cedarwood saunas, aromatic steam rooms, salt halotherapy suites, heated infinity plunge pools, and vitality pools.",
  },
  {
    icon: "🛰️",
    title: "Unlimited Starlink Wi-Fi",
    desc: "Ultra-fast global satellite internet across all ocean waters, keeping you seamlessly connected whether cruising the equator or the polar ice.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Sailing the Norwegian fjords with Silja Line felt like having an ultra-luxury private yacht to ourselves. The culinary craft and midnight sun views were breathtaking.",
    author: "Elena & Marcus Vance",
    location: "Zurich, Switzerland",
    voyage: "Glaciers & Midnight Sun Fjordland",
    rating: 5,
  },
  {
    quote: "Our expedition to Antarctica exceeded all dreams. The Zodiac landings, the naturalists, and returning each evening to heated suites and hot toddies was pure bliss.",
    author: "Dr. Alistair Sterling",
    location: "London, United Kingdom",
    voyage: "Antarctica & Drake Passage Odyssey",
    rating: 5,
  },
  {
    quote: "The Aegean voyage was pure perfection. Sunset tenders in Santorini, private olive groves in Crete, and the warmth of the Silja Line crew made this our best holiday ever.",
    author: "Sophia & Julien Delacroix",
    location: "Paris, France",
    voyage: "Aegean Pearl & Cyclades Sunsets",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "What is genuinely included in the Silja Line voyage fare?",
    a: "Silja Line provides an all-inclusive luxury standard. Your fare covers all ocean-view suite accommodations, all meals across all specialty restaurants with zero surcharges, unlimited fine wines and spirits, private shore excursions and tenders, onboard gratuities, unlimited Starlink satellite Wi-Fi, and access to all spa thermal suites.",
  },
  {
    q: "How many guests are on board each ship?",
    a: "Our boutique vessels carry between 180 and 240 guests only. This ensures an intimate, uncrowded experience with a near 1:1 guest-to-crew ratio and effortless tender access to secluded ports that mega-ships cannot enter.",
  },
  {
    q: "Can I customize or request private shore excursions?",
    a: "Yes. Our shoreside concierge team can curate private chauffeured cars, helicopter flights, private winery tours, and exclusive access to monuments and archeological sites upon request.",
  },
  {
    q: "What is the deposit and reservation policy?",
    a: "A 15% deposit secures your suite at time of booking. Final balance is due 90 days prior to embarkation. Full refund is available up to 120 days prior to departure, or flexibility to transfer your deposit to any other sailing within 24 months.",
  },
  {
    q: "Do I need special equipment for polar expeditions?",
    a: "For our Antarctica and Arctic voyages, Silja Line provides every guest with a complimentary custom-fitted polar expedition parka to keep, insulated Muck boots for Zodiac wet landings, and trekking poles.",
  },
];

export default function VoyagesClient() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedShip, setSelectedShip] = useState<string>("All");
  const [durationFilter, setDurationFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal state
  const [activeModalVoyage, setActiveModalVoyage] = useState<Voyage | null>(null);
  const [modalTab, setModalTab] = useState<"itinerary" | "suites" | "inclusions">("itinerary");
  const [selectedSuiteTier, setSelectedSuiteTier] = useState<string>("Deluxe Balcony Suite");
  
  // Booking inquiry state
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [travelGuests, setTravelGuests] = useState("2");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingRefId, setBookingRefId] = useState("");

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filter & sort logic
  const filteredVoyages = useMemo(() => {
    let result = VOYAGES_DATA.filter((v) => {
      const matchRegion = selectedRegion === "All" || v.region === selectedRegion;
      const matchShip = selectedShip === "All" || v.ship === selectedShip;
      
      let matchDuration = true;
      if (durationFilter === "short") matchDuration = v.nights <= 8;
      else if (durationFilter === "medium") matchDuration = v.nights >= 9 && v.nights <= 11;
      else if (durationFilter === "long") matchDuration = v.nights >= 12;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.subtitle.toLowerCase().includes(q) ||
        v.regionLabel.toLowerCase().includes(q) ||
        v.ship.toLowerCase().includes(q) ||
        v.route.some((r) => r.toLowerCase().includes(q)) ||
        v.highlights.some((h) => h.toLowerCase().includes(q));

      return matchRegion && matchShip && matchDuration && matchSearch;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => {
        const pa = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const pb = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return pa - pb;
      });
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => {
        const pa = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const pb = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return pb - pa;
      });
    } else if (sortBy === "duration-desc") {
      result = [...result].sort((a, b) => b.nights - a.nights);
    }

    return result;
  }, [selectedRegion, selectedShip, durationFilter, searchQuery, sortBy]);

  const handleOpenModal = (voyage: Voyage, tab: "itinerary" | "suites" | "inclusions" = "itinerary") => {
    setActiveModalVoyage(voyage);
    setModalTab(tab);
    setBookingSubmitted(false);
  };

  const handleCloseModal = () => {
    setActiveModalVoyage(null);
    setBookingSubmitted(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestEmail) return;
    const ref = "SL-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRefId(ref);
    setBookingSubmitted(true);
  };

  const handleFilterByShip = (shipName: string) => {
    setSelectedShip(shipName);
    const element = document.getElementById("catalog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "var(--color-navy)", minHeight: "100vh", color: "var(--color-ivory)" }}>
      
      {/* ── Top Navigation Bar ───────────────────────────────────────── */}
      <Navbar currentPath="/voyages" />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          paddingTop: "150px",
          paddingBottom: "100px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #070a14 0%, #0c1222 50%, #0a0e1a 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Glow ambient spots */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1000px",
            height: "450px",
            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.05) 45%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(80px)",
          }}
        />

        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6" style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-blue-light)", fontWeight: 600 }}>Voyages &amp; Expeditions</span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(37,99,235,0.14)",
              border: "1px solid rgba(59,130,246,0.35)",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 8px #3b82f6" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#93c5fd",
              }}
            >
              2026 – 2027 WORLD VOYAGES &amp; POLAR EXPEDITIONS
            </span>
          </div>

          {/* Hero Titles */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              maxWidth: "1000px",
              marginBottom: "24px",
            }}
          >
            Voyages of Distinction <br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #e0e7ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Across The Seven Seas
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
              lineHeight: 1.75,
              color: "rgba(240,244,255,0.7)",
              maxWidth: "760px",
              marginBottom: "40px",
            }}
          >
            Immerse yourself in boutique luxury travel. Discover sun-drenched Cycladic isles, mirror-still Norwegian fjords, secluded Caribbean lagoons, imperial Japanese ports, and the untamed ice cathedrals of Antarctica.
          </p>

          {/* Quick Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "50px",
            }}
          >
            {[
              { val: "6 Global Regions", label: "Curated Itineraries", icon: "🌐" },
              { val: "100% Veranda", label: "All-Oceanview Suites", icon: "🌅" },
              { val: "Michelin Gastronomy", label: "All Venues Included", icon: "⭐" },
              { val: "1 : 1 Ratio", label: "Guest-to-Crew Butler Service", icon: "🛎️" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span style={{ fontSize: "24px" }}>{stat.icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.05rem", color: "#fff" }}>
                    {stat.val}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "rgba(240,244,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick jump to catalog button */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#catalog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--color-blue)",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "10px",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
              }}
              className="hover:bg-blue-600 transition-all"
            >
              <span>Explore All 2026 – 2027 Itineraries</span>
              <span>↓</span>
            </a>
            <a
              href="#fleet"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: "10px",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textDecoration: "none",
              }}
              className="hover:bg-white/10 transition-all"
            >
              Meet Our Boutique Fleet
            </a>
          </div>

        </div>
      </section>

      {/* ── Fleet Showcase Section ─────────────────────────────────── */}
      <section
        id="fleet"
        style={{
          padding: "90px 0 100px",
          background: "#080c18",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ marginBottom: "50px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px" }}>
            <div>
              <p style={{ color: "var(--color-blue-light)", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "10px" }}>
                Engineered for Intimate Elegance
              </p>
              <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2rem, 3.8vw, 3.2rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                The Silja Line Luxury Fleet
              </h2>
            </div>
            <p style={{ color: "rgba(240,244,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "420px" }}>
              Three distinct boutique vessels, purposefully designed with all-suite accommodations, ultra-shallow draft for exclusive harbors, and industry-leading environmental propulsion.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "28px",
            }}
          >
            {SHIPS.map((ship) => (
              <div
                key={ship.name}
                style={{
                  background: "rgba(18,25,48,0.7)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                className="hover:border-blue-500/50 hover:-translate-y-1.5"
              >
                <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                  <img
                    src={ship.image}
                    alt={ship.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(18,25,48,0.95) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px" }}>
                    <div style={{ fontSize: "10px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
                      Boutique Vessel
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>
                      {ship.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                      {ship.tagline}
                    </div>
                  </div>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  {/* Specs grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "10px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "12px",
                      padding: "12px",
                      marginBottom: "18px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Capacity</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{ship.specs.guests} Guests</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Suites</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{ship.specs.suites} Oceanview</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Crew Ratio</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-blue-light)" }}>{ship.specs.crewRatio}</div>
                    </div>
                  </div>

                  {/* Ship highlights */}
                  <div style={{ marginBottom: "20px", flexGrow: 1 }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px", fontWeight: 700 }}>
                      Vessel Features
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {ship.features.map((feat, i) => (
                        <li key={i} style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "var(--color-blue-light)", fontSize: "10px" }}>◈</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action filter */}
                  <button
                    onClick={() => handleFilterByShip(ship.name)}
                    style={{
                      width: "100%",
                      padding: "10px 16px",
                      background: "rgba(37,99,235,0.12)",
                      border: "1px solid rgba(59,130,246,0.3)",
                      color: "var(--color-blue-light)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-blue-600 hover:text-white"
                  >
                    View {ship.name} Itineraries →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Main Voyages Catalog & Filter Engine ───────────────────── */}
      <section
        id="catalog"
        style={{
          padding: "100px 0 110px",
          background: "linear-gradient(180deg, #0a0e1a 0%, #0d1426 50%, #0a0e1a 100%)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          {/* Section heading */}
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 44px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 14px",
                borderRadius: "999px",
                background: "rgba(37,99,235,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                marginBottom: "16px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-blue-light)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-blue-light)" }}>
                Curated Expeditions
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "16px" }}>
              Explore The Voyage Catalog
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.7 }}>
              Filter by region, destination, ship, or voyage length. Every booking includes private oceanfront suite accommodations, Michelin gastronomy, and all shore excursions.
            </p>
          </div>

          {/* ── Filter Controls Panel ──────────────────────────────── */}
          <div
            style={{
              background: "rgba(15,21,40,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px 28px",
              marginBottom: "36px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}
          >
            {/* Primary Region Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "All", label: "All Regions" },
                  { id: "Mediterranean", label: "Mediterranean & Greece" },
                  { id: "Scandinavia", label: "Scandinavia & Fjords" },
                  { id: "Caribbean", label: "Caribbean & Tropics" },
                  { id: "Asia", label: "Asia & Japan" },
                  { id: "Polar", label: "Polar & Antarctica" },
                ].map((tab) => {
                  const active = selectedRegion === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedRegion(tab.id)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "8px",
                        border: active ? "1px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                        background: active ? "var(--color-blue)" : "rgba(255,255,255,0.04)",
                        color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
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

              {/* Reset all button */}
              {(selectedRegion !== "All" || selectedShip !== "All" || durationFilter !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedRegion("All");
                    setSelectedShip("All");
                    setDurationFilter("All");
                    setSearchQuery("");
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--color-blue-light)",
                    fontSize: "11px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Clear all filters ✕
                </button>
              )}
            </div>

            {/* Sub-Filters: Search, Ship, Duration, Sort */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Search input */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search ports, countries, or ships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px 10px 36px",
                    color: "#ffffff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    outline: "none",
                  }}
                />
                <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
                  🔍
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Ship filter */}
              <div>
                <select
                  value={selectedShip}
                  onChange={(e) => setSelectedShip(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#131a33",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#ffffff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="All">All Ships in Fleet</option>
                  <option value="Silja Solaris">Silja Solaris</option>
                  <option value="Silja Aurora">Silja Aurora</option>
                  <option value="Silja Celestis">Silja Celestis</option>
                </select>
              </div>

              {/* Duration filter */}
              <div>
                <select
                  value={durationFilter}
                  onChange={(e) => setDurationFilter(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#131a33",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#ffffff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="All">Any Duration</option>
                  <option value="short">7 – 8 Nights (Intimate)</option>
                  <option value="medium">9 – 11 Nights (Extended)</option>
                  <option value="long">12+ Nights (Grand Voyage)</option>
                </select>
              </div>

              {/* Sort by */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#131a33",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#ffffff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="recommended">Sort: Curated Highlights</option>
                  <option value="price-asc">Price: Lowest First</option>
                  <option value="price-desc">Price: Highest First</option>
                  <option value="duration-desc">Duration: Longest First</option>
                </select>
              </div>

            </div>

            {/* Results count pill */}
            <div style={{ marginTop: "16px", fontSize: "11px", color: "rgba(255,255,255,0.5)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Showing <strong>{filteredVoyages.length}</strong> handcrafted voyages</span>
              <span style={{ color: "var(--color-blue-light)" }}>✓ Real-time suite availability</span>
            </div>

          </div>

          {/* ── Voyages Grid ───────────────────────────────────────── */}
          {filteredVoyages.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "20px",
                border: "1px dashed rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🧭</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                No voyages found matching your search
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "20px" }}>
                Try adjusting your region, vessel filter, or clear your search terms.
              </p>
              <button
                onClick={() => {
                  setSelectedRegion("All");
                  setSelectedShip("All");
                  setDurationFilter("All");
                  setSearchQuery("");
                }}
                style={{
                  padding: "10px 24px",
                  background: "var(--color-blue)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
                gap: "30px",
              }}
            >
              {filteredVoyages.map((voyage) => (
                <article
                  key={voyage.id}
                  style={{
                    background: "rgba(18,25,48,0.75)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "22px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                  }}
                  className="group hover:border-blue-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Photo Container */}
                  <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                    <img
                      src={voyage.image}
                      alt={voyage.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)",
                      }}
                      className="group-hover:scale-105"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(18,25,48,0.95) 0%, rgba(18,25,48,0.2) 60%, transparent 100%)" }} />

                    {/* Top Badges */}
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        right: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          padding: "5px 12px",
                          background: "rgba(10,14,26,0.85)",
                          backdropFilter: "blur(8px)",
                          borderRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "var(--color-blue-light)",
                          fontFamily: "var(--font-sans)",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                        }}
                      >
                        {voyage.regionLabel}
                      </span>

                      <span
                        style={{
                          padding: "5px 10px",
                          background: "rgba(37,99,235,0.9)",
                          borderRadius: "6px",
                          color: "#fff",
                          fontFamily: "var(--font-sans)",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                        }}
                      >
                        {voyage.duration}
                      </span>
                    </div>

                    {/* Vessel & Suites left */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "18px",
                        right: "18px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ color: "var(--color-gold)", fontSize: "11px" }}>⚓</span>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.05em" }}>
                          {voyage.ship}
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(220,38,38,0.2)",
                          border: "1px solid rgba(239,68,68,0.4)",
                          color: "#fca5a5",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontWeight: 600,
                        }}
                      >
                        Only {voyage.suitesAvailable} Suites Left
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "6px" }}>
                      Sailing: {voyage.departure}
                    </div>

                    <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.28rem", color: "#ffffff", lineHeight: 1.25, marginBottom: "8px" }}>
                      {voyage.title}
                    </h3>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.6, marginBottom: "16px" }}>
                      {voyage.subtitle}
                    </p>

                    {/* Route Timeline */}
                    <div
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "12px",
                        padding: "12px 14px",
                        border: "1px solid rgba(255,255,255,0.05)",
                        marginBottom: "16px",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-blue-light)", marginBottom: "6px" }}>
                        Ports of Call
                      </div>
                      <div className="flex items-center flex-wrap gap-1" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.85)" }}>
                        {voyage.route.map((port, idx) => (
                          <span key={idx} className="flex items-center gap-1">
                            <span>{port}</span>
                            {idx < voyage.route.length - 1 && <span style={{ color: "rgba(255,255,255,0.3)" }}>➔</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px", flexGrow: 1 }}>
                      {voyage.highlights.map((hl, i) => (
                        <span
                          key={i}
                          style={{
                            background: "rgba(37,99,235,0.1)",
                            border: "1px solid rgba(59,130,246,0.2)",
                            color: "rgba(240,244,255,0.85)",
                            borderRadius: "6px",
                            padding: "3px 8px",
                            fontSize: "10px",
                            fontWeight: 500,
                          }}
                        >
                          ✧ {hl}
                        </span>
                      ))}
                    </div>

                    {/* Price & Action Row */}
                    <div
                      style={{
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          All-Inclusive Fare
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span style={{ fontSize: "1.45rem", fontWeight: 900, color: "#ffffff", fontFamily: "var(--font-sans)" }}>
                            {voyage.price}
                          </span>
                          <span style={{ fontSize: "10px", color: "rgba(240,244,255,0.5)" }}>/ guest</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenModal(voyage, "itinerary")}
                          style={{
                            padding: "9px 14px",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontFamily: "var(--font-sans)",
                            fontSize: "11px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          className="hover:bg-white/10"
                        >
                          Itinerary
                        </button>
                        <button
                          onClick={() => handleOpenModal(voyage, "suites")}
                          style={{
                            padding: "9px 16px",
                            background: "var(--color-blue)",
                            border: "none",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontFamily: "var(--font-sans)",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            boxShadow: "0 0 12px rgba(37,99,235,0.3)",
                          }}
                          className="hover:bg-blue-600"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── The Silja Line All-Inclusive Standard ────────────────────────── */}
      <section
        id="inclusions"
        style={{
          padding: "90px 0 100px",
          background: "#080c18",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 56px" }}>
            <p style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
              Total Freedom at Sea
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2rem, 3.8vw, 3.2rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "16px" }}>
              The All-Inclusive Standard
            </h2>
            <p style={{ color: "rgba(240,244,255,0.6)", fontSize: "0.95rem", lineHeight: 1.75 }}>
              On every Silja Line voyage, true luxury means never signing a receipt. Everything from fine vintage wines to daily private excursions is seamlessly included.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "24px",
            }}
          >
            {INCLUSIONS.map((inc, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(18,25,48,0.5)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "all 0.3s ease",
                }}
                className="hover:border-blue-500/40 hover:bg-blue-900/10"
              >
                <div style={{ fontSize: "30px", marginBottom: "16px" }}>{inc.icon}</div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
                  {inc.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.7 }}>
                  {inc.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Guest Stories & Testimonials ────────────────────────────── */}
      <section
        id="stories"
        style={{
          padding: "90px 0 100px",
          background: "linear-gradient(180deg, #0a0e1a 0%, #080c18 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <p style={{ color: "var(--color-blue-light)", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "10px" }}>
              Verified Guest Chronicles
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#fff", letterSpacing: "-0.03em" }}>
              Memories from the High Seas
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "26px",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(18,25,48,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4" style={{ color: "var(--color-gold)", fontSize: "14px" }}>
                    {"★".repeat(t.rating)}
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, fontStyle: "italic", marginBottom: "24px" }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                    {t.location} • <span style={{ color: "var(--color-blue-light)" }}>{t.voyage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ Accordion ───────────────────────────────────────────── */}
      <section
        id="faq"
        style={{
          padding: "90px 0 100px",
          background: "#0a0e1a",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "var(--color-blue-light)", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "10px" }}>
              Planning Your Voyage
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", color: "#fff", letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: "rgba(18,25,48,0.55)",
                    border: isOpen ? "1px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      color: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: "18px", color: "var(--color-blue-light)", transition: "transform 0.2s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 24px 20px", color: "rgba(240,244,255,0.65)", fontSize: "0.88rem", lineHeight: 1.75 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Grand Embarkation Banner CTA ────────────────────────────── */}
      <section style={{ padding: "90px 28px 100px", background: "linear-gradient(180deg, #0a0e1a 0%, #060912 100%)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "26px",
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(255,255,255,0.12)",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px 30px",
          }}
        >
          <img
            src="/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg"
            alt="Silja Line Voyage"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 65%", filter: "brightness(0.35)" }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
            <span style={{ fontSize: "10px", color: "var(--color-gold)", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "14px" }}>
              Private Charters &amp; Global Concierge
            </span>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px" }}>
              Ready to Chart Your Course?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "32px" }}>
              Our personal maritime concierges are available 24/7 to reserve your preferred suite, arrange private jet connections, or design customized back-to-back grand journeys.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#catalog"
                style={{
                  background: "var(--color-blue)",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 4px 25px rgba(37,99,235,0.5)",
                }}
                className="hover:bg-blue-600 transition-all"
              >
                Browse Available Dates
              </a>
              <a
                href="mailto:voyages@siljaline.com"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                }}
                className="hover:bg-white/20 transition-all"
              >
                Speak with Concierge (+91 98765 43210)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Interactive Deep-Dive Modal (Itinerary / Suites / Inclusions) ── */}
      {activeModalVoyage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(5,7,14,0.85)",
            backdropFilter: "blur(18px)",
            padding: "20px",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: "#0e1529",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "22px",
              width: "100%",
              maxWidth: "880px",
              maxHeight: "90vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                position: "relative",
                padding: "24px 28px",
                background: "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(15,21,40,0.9) 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ fontSize: "9px", background: "var(--color-blue)", color: "#fff", padding: "3px 8px", borderRadius: "4px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {activeModalVoyage.regionLabel}
                  </span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>
                    • {activeModalVoyage.duration} • Vessel: {activeModalVoyage.ship}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "1.45rem", color: "#fff", letterSpacing: "-0.01em" }}>
                  {activeModalVoyage.title}
                </h3>
              </div>

              <button
                onClick={handleCloseModal}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "#fff",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(10,14,26,0.6)" }}>
              {[
                { id: "itinerary", label: "Day-by-Day Journey" },
                { id: "suites", label: "Suite Categories" },
                { id: "inclusions", label: "What's Included" },
              ].map((tab) => {
                const active = modalTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setModalTab(tab.id as any)}
                    style={{
                      flex: 1,
                      padding: "13px 16px",
                      background: active ? "rgba(37,99,235,0.15)" : "transparent",
                      border: "none",
                      borderBottom: active ? "2px solid var(--color-blue-light)" : "2px solid transparent",
                      color: active ? "#ffffff" : "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Modal Content Scroll Area */}
            <div style={{ padding: "24px 28px", overflowY: "auto", flexGrow: 1 }}>
              
              {/* TAB 1: Day-by-Day Itinerary */}
              {modalTab === "itinerary" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>
                    Each morning on board begins with panoramic sunrise breakfast on your private veranda. Below is the complete day-by-day expedition route:
                  </div>

                  {activeModalVoyage.itinerary.map((day) => (
                    <div
                      key={day.day}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "12px",
                        padding: "16px 18px",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          flexShrink: 0,
                          textAlign: "center",
                          padding: "6px 8px",
                          background: "rgba(37,99,235,0.2)",
                          border: "1px solid rgba(59,130,246,0.3)",
                          borderRadius: "8px",
                        }}
                      >
                        <div style={{ fontSize: "9px", textTransform: "uppercase", color: "var(--color-blue-light)", fontWeight: 700 }}>
                          DAY
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 900, color: "#fff" }}>
                          0{day.day}
                        </div>
                      </div>

                      <div style={{ flexGrow: 1 }}>
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", margin: 0 }}>
                            {day.port}
                          </h4>
                          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
                            {day.country}
                          </span>
                        </div>
                        <p style={{ fontSize: "12px", color: "rgba(240,244,255,0.7)", lineHeight: 1.6, margin: "0 0 8px 0" }}>
                          {day.activity}
                        </p>
                        <div style={{ fontSize: "11px", color: "var(--color-gold)", display: "flex", alignItems: "center", gap: "6px" }}>
                          <span>✦</span>
                          <span style={{ fontWeight: 600 }}>Silja Line Signature Highlight:</span>
                          <span>{day.highlight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: Suites */}
              {modalTab === "suites" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                    Every stateroom on {activeModalVoyage.ship} is an exterior-facing suite with a private teak ocean veranda and dedicated butler service.
                  </div>

                  {SUITE_TIERS.map((tier) => (
                    <div
                      key={tier.id}
                      style={{
                        background: selectedSuiteTier === tier.name ? "rgba(37,99,235,0.12)" : "rgba(255,255,255,0.03)",
                        border: selectedSuiteTier === tier.name ? "1.5px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "14px",
                        padding: "18px 20px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onClick={() => setSelectedSuiteTier(tier.name)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="suiteTier"
                            checked={selectedSuiteTier === tier.name}
                            onChange={() => setSelectedSuiteTier(tier.name)}
                            style={{ accentColor: "var(--color-blue)" }}
                          />
                          <h4 style={{ fontSize: "15px", fontWeight: 800, color: "#fff", margin: 0 }}>
                            {tier.name}
                          </h4>
                        </div>
                        <span style={{ fontSize: "12px", color: "var(--color-gold)", fontWeight: 700 }}>
                          {tier.priceAddon}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-2 text-[11px] text-white/50">
                        <span>📐 {tier.size}</span>
                        <span>🌊 {tier.veranda}</span>
                      </div>

                      <p style={{ fontSize: "12px", color: "rgba(240,244,255,0.7)", lineHeight: 1.6, marginBottom: "12px" }}>
                        {tier.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {tier.perks.map((p, idx) => (
                          <span key={idx} style={{ fontSize: "10px", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", padding: "2px 8px", borderRadius: "4px" }}>
                            ✓ {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: Inclusions */}
              {modalTab === "inclusions" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                    Voyage Fare: <strong>{activeModalVoyage.price}</strong> per guest. Complete luxury without nickel-and-diming.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { title: "All Gourmet Dining", desc: "No surcharges at any specialty restaurant or tasting menu." },
                      { title: "Unlimited Premium Spirits & Wines", desc: "Open bar across all ship lounges and in-suite minibar." },
                      { title: "Private Shore Excursions", desc: "Daily small-group guided excursions in every single port." },
                      { title: "Starlink High-Speed Wi-Fi", desc: "Global maritime satellite connectivity for all your devices." },
                      { title: "Dedicated Butler Service", desc: "Packing, unpacking, garment pressing, and 24h room service." },
                      { title: "Thermal Spa & Hydrotherapy", desc: "Complimentary saunas, steam rooms, and heated infinity plunge pools." },
                      { title: "All Onboard Gratuities", desc: "All tips and service charges for shipboard staff are covered." },
                      { title: "Airport & Pier Limousine Transfers", desc: "Chauffeured arrival and departure transfers to/from vessel." },
                    ].map((item, i) => (
                      <div key={i} style={{ background: "rgba(255,255,255,0.03)", padding: "14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ color: "var(--color-blue-light)", fontWeight: 700, fontSize: "12px", marginBottom: "4px" }}>
                          ✓ {item.title}
                        </div>
                        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Request Form (Bottom of modal) */}
              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(10,14,26,0.4)",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                {bookingSubmitted ? (
                  <div style={{ textAlign: "center", padding: "20px 10px" }}>
                    <div style={{ fontSize: "36px", color: "#10b981", marginBottom: "10px" }}>✓</div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
                      Suite Hold Requested!
                    </h4>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", maxWidth: "450px", margin: "0 auto 14px", lineHeight: 1.6 }}>
                      Thank you, <strong>{guestName || "Guest"}</strong>. Your preliminary reference ID is <span style={{ color: "var(--color-blue-light)", fontWeight: 700 }}>{bookingRefId}</span> for the {activeModalVoyage.title} ({selectedSuiteTier}).
                    </p>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
                      A Silja Line senior maritime concierge will contact you at <strong>{guestEmail}</strong> within 4 hours to finalize your dates and suite placement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit}>
                    <div style={{ marginBottom: "14px" }}>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                        Request Suite Hold / Inquire for this Voyage
                      </h4>
                      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                        Selected Suite: <strong>{selectedSuiteTier}</strong> • {activeModalVoyage.suitesAvailable} suites remaining on {activeModalVoyage.ship}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div>
                        <label style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "4px" }}>
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Lorde Evelyn"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "8px",
                            padding: "9px 12px",
                            color: "#fff",
                            fontSize: "12px",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "4px" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="concierge@example.com"
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "8px",
                            padding: "9px 12px",
                            color: "#fff",
                            fontSize: "12px",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "4px" }}>
                          Guests
                        </label>
                        <select
                          value={travelGuests}
                          onChange={(e) => setTravelGuests(e.target.value)}
                          style={{
                            width: "100%",
                            background: "#131a33",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "8px",
                            padding: "9px 12px",
                            color: "#fff",
                            fontSize: "12px",
                            outline: "none",
                          }}
                        >
                          <option value="1">1 Solo Guest</option>
                          <option value="2">2 Guests (1 Suite)</option>
                          <option value="4">4 Guests (2 Suites)</option>
                          <option value="charter">Private Vessel Charter</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        style={{
                          padding: "10px 18px",
                          borderRadius: "8px",
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "11px",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        style={{
                          padding: "10px 24px",
                          borderRadius: "8px",
                          background: "var(--color-blue)",
                          border: "none",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          boxShadow: "0 0 15px rgba(37,99,235,0.4)",
                        }}
                        className="hover:bg-blue-600"
                      >
                        Submit Suite Hold Request
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
