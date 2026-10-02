"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Story {
  id: string;
  category: "Polar" | "Mediterranean" | "Asia" | "Caribbean" | "Crew" | "Culinary";
  categoryLabel: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  leadParagraph: string;
  fullContent: string[];
  pullQuote: string;
  relatedVoyage: string;
  relatedVoyageLink: string;
}

const STORIES_DATA: Story[] = [
  {
    id: "norwegian-midnight-sun",
    category: "Polar",
    categoryLabel: "Fjords & Polar",
    title: "Chasing the Midnight Sun: Ten Nights in the Deepest Fjords of Western Norway",
    subtitle: "When the clock strikes midnight and golden daylight still dances across mirror-flat emerald waters.",
    author: "Elena & Marcus Vance",
    authorRole: "Silja Line Guests, Suite 702",
    readTime: "6 min read",
    date: "July 2026",
    image: "/voyages/fjords.jpg",
    leadParagraph: "At 62 degrees North, the concept of time dissolves into a luminous golden dream. We stood on the teak observation deck of Silja Aurora as she navigated silently into Geirangerfjord, flanked by granite cliffs rising sheer into snowcaps.",
    fullContent: [
      "There is an ethereal tranquility to sailing Norway's deep fjords that no photograph can truly prepare you for. As our vessel slipped into the narrow channel beneath the Seven Sisters waterfalls, the only sound was the delicate rush of cascading glacial water echoing across the rock face.",
      "Our expedition leader, Henrik, joined us on the bow with mugs of freshly poured cloudberry tea. 'Notice the quiet,' he whispered. Because of Silja Aurora's hybrid silent electric propulsion, we moved without disturbing the harbor seals resting along the shoreline stones.",
      "Later that evening, after a seven-course Nordic tasting menu featuring King Crab harvested that very morning, we stepped onto our suite's private veranda. It was 12:45 AM. The sky was an incandescent twilight of soft apricot and lavender. You do not sleep during the Midnight Sun—you simply watch the world breathe in quiet wonder.",
    ],
    pullQuote: "At midnight in the fjords, the ocean becomes a mirror of liquid amber and still granite.",
    relatedVoyage: "Glaciers & Midnight Sun Fjordland",
    relatedVoyageLink: "/voyages",
  },
  {
    id: "antarctica-paradise-bay",
    category: "Polar",
    categoryLabel: "Polar Expeditions",
    title: "First Footsteps on the White Continent: Crossing Drake Passage to Paradise Bay",
    subtitle: "Colossal ice cathedrals, colonies of gentoo penguins, and the sheer humbling silence of Antarctica.",
    author: "Dr. Alistair Sterling",
    authorRole: "Polar Historian & Guest Lecturer",
    readTime: "8 min read",
    date: "January 2026",
    image: "/voyages/antarctica.jpg",
    leadParagraph: "The Drake Passage is legendary among mariners, but aboard Silja Aurora with her state-of-the-art zero-speed gyroscopic stabilizers, the crossing was an inspiring rhythm of oceanic swells rather than an ordeal.",
    fullContent: [
      "On day four, as the fog lifted like a stage curtain, Antarctica unveiled itself. Nothing prepares you for the scale of the tabular icebergs—monumental slabs of turquoise and sapphire ice, larger than city blocks, drifting with primeval dignity.",
      "We boarded our Mark V Zodiac in groups of ten. As our pilot cut the motor in Paradise Bay, 3,000 Gentoo penguins called out from the pebble beach, while a pod of humpback whales surfaced forty meters away, their misty breath rising into the crisp Antarctic air.",
      "Returning to the vessel, the team greeted us with heated toweling and warm spiced gløgg. To stand on the edge of the world, surrounded by ancient ice, and return to an open fire and warm cashmere in your suite is the definition of modern luxury.",
    ],
    pullQuote: "Antarctica does not ask for your admiration; it commands your reverence.",
    relatedVoyage: "Antarctica & Drake Passage Odyssey",
    relatedVoyageLink: "/voyages",
  },
  {
    id: "aegean-caldera-sunset",
    category: "Mediterranean",
    categoryLabel: "Mediterranean & Greece",
    title: "The Golden Hour in Oia: Private Caldera Tenders and Wine Above the Clouds",
    subtitle: "Sailing through the submerged volcanic caldera of Santorini as the setting sun turns cliffside villas to gold.",
    author: "Sophia Delacroix",
    authorRole: "Travel Journalist & Silja Line Guest",
    readTime: "5 min read",
    date: "September 2026",
    image: "/voyages/aegean.jpg",
    leadParagraph: "While mega-cruise ships remain locked in congested commercial docks, Silja Solaris dropped anchor directly inside Santorini’s volcanic caldera, right beneath the dramatic cliffs of Oia.",
    fullContent: [
      "Our private tender boat carried just eight of us to Ammoudi Bay, where our driver met us for a private ascent through terraced vineyards to an exclusive cliffside estate. There was no waiting in lines, no jostling with tourist crowds—only an authentic, private encounter with Greece's oldest winemaking traditions.",
      "We tasted crisp Assyrtiko grapes harvested from volcanic ash soil while Chef Michel Moreau prepared fresh octopus over olive wood embers. As the sun sank below the Aegean horizon, casting deep violet shadows across the cliffside, we toasted to the timeless sea.",
      "Back aboard the Solaris, the aft infinity pool was illuminated with soft starlight lanterns. Swimming suspended between ocean and sky, with the caldera glowing above us, remains an indelible memory.",
    ],
    pullQuote: "Santorini is best understood from the water, where its dramatic cliffs feel like a sanctuary from another age.",
    relatedVoyage: "Aegean Pearl & Cyclades Sunsets",
    relatedVoyageLink: "/voyages",
  },
  {
    id: "japan-seto-inland-sea",
    category: "Asia",
    categoryLabel: "Asia & Japan",
    title: "Navigating the Sacred Waters of Japan: From Mt. Fuji to the Floating Torii",
    subtitle: "A meditative voyage through 3,000 islands, ancient bamboo groves, and teppanyaki masterclasses.",
    author: "Captain Henri Lindqvist",
    authorRole: "Master of Silja Solaris",
    readTime: "7 min read",
    date: "April 2026",
    image: "/voyages/japan.jpg",
    leadParagraph: "The Seto Inland Sea is known as the Mediterranean of Japan—calm, mist-laden waters weaving through historic trading ports and sacred shrines.",
    fullContent: [
      "At dawn, from the navigation bridge, the silhouette of Mt. Fuji rose over Suruga Bay against a sky of pale rose and indigo. Navigating these narrow straits requires consummate seamanship, but our precision joystick thrusters allow us to slide past island fishing villages with whispering silence.",
      "At high tide in Miyajima, our guests were tendered directly beneath the iconic vermilion Floating Torii of Itsukushima Shrine. To view this centuries-old UNESCO monument from the water as cherry blossom petals drift on the tide is an experience reserved for very few.",
      "On board, our master chefs collaborated with local sushi artisans from Hiroshima, serving authentic 10-course omakase paired with rare junmai daiginjo sakes. This is travel as cultural immersion.",
    ],
    pullQuote: "In the Seto Inland Sea, morning mist is not weather—it is a painting coming to life.",
    relatedVoyage: "Imperial Coast & Sea of Japan",
    relatedVoyageLink: "/voyages",
  },
  {
    id: "caribbean-virgin-gorda",
    category: "Caribbean",
    categoryLabel: "Caribbean & Tropics",
    title: "Barefoot Chic in the Virgin Atolls: Granite Grottos and Secluded Coves",
    subtitle: "Dropping anchor in hidden bays where crystal turquoise water meets powder-soft white sandbars.",
    author: "Lord Julian Montgomery",
    authorRole: "Silja Line Guest, Suite 614",
    readTime: "5 min read",
    date: "December 2026",
    image: "/voyages/caribbean.jpg",
    leadParagraph: "Silja Celestis was designed for these waters. With her shallow 5.5-meter draft and retractable hydraulic sea-level beach club, she behaves like a private billionaire's yacht.",
    fullContent: [
      "We anchored off Virgin Gorda at dawn. While other cruise ships can only dream of reaching such secluded coves, our marina platform opened at sea level. We stepped directly onto Seabobs and paddleboards into water so clear you could count the starfish on the seabed six meters below.",
      "Our butler, Vincent, had arranged a private beach barbecue on an uninhabited spit of sand. White linen tables were set beneath sea grape trees, with freshly caught spiny lobster grilled over coconut husks and chilled bottles of vintage champagne.",
      "As dusk fell, we watched a private cinema screening on the ship's rooftop terrace under a warm canopy of Caribbean stars. Pure, barefoot perfection.",
    ],
    pullQuote: "True luxury is having an entire pristine island to yourself, with champagne waiting on ice.",
    relatedVoyage: "Azure Caribbean & Virgin Atolls",
    relatedVoyageLink: "/voyages",
  },
  {
    id: "butler-behind-the-scenes",
    category: "Crew",
    categoryLabel: "Crew Dispatches",
    title: "The Art of the Unspoken Wish: Behind the Scenes with Silja Line Head Butler",
    subtitle: "How intuition, European hospitality training, and meticulous care define life in our ocean suites.",
    author: "Vincent Dupont",
    authorRole: "Head Butler, Silja Solaris",
    readTime: "4 min read",
    date: "August 2026",
    image: "/ship%20models/4cff0bc2fa0aee808326890d3dff78a3.jpg",
    leadParagraph: "People often ask me what makes our service different. The answer is simple: the greatest service is invisible. It is anticipating what a guest desires before they have articulated it themselves.",
    fullContent: [
      "Before a guest ever steps aboard, our concierge team compiles their personal preferences—from their preferred morning espresso roast to their choice of pillow density and favorite listening music.",
      "If a guest returns from a chilly Zodiac landing in Norway, their bathroom is already drawn with warm mineral salts and fresh eucalyptus sprigs. If they enjoy sunset cocktails on their veranda, their favorite vintage is chilling precisely at 6:00 PM.",
      "Every stateroom on Silja Line is an oceanfront suite, which means our crew-to-guest ratio is almost one-to-one. This allows us to craft relationships of genuine warmth and personal care. We do not just serve—we create memories.",
    ],
    pullQuote: "The greatest luxury is never having to ask for what you need—it is already waiting.",
    relatedVoyage: "All Silja Line Voyages",
    relatedVoyageLink: "/voyages",
  },
];

export default function StoriesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeStoryModal, setActiveStoryModal] = useState<Story | null>(null);

  const filteredStories = STORIES_DATA.filter((s) => {
    if (selectedCategory === "All") return true;
    return s.category === selectedCategory;
  });

  return (
    <div style={{ background: "var(--color-navy)", minHeight: "100vh", color: "var(--color-ivory)" }}>
      <Navbar currentPath="/stories" />

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

        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="flex items-center gap-2 mb-4" style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-blue-light)", fontWeight: 600 }}>Stories &amp; Chronicles</span>
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
              MARITIME DISPATCHES &amp; ESSAYS
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
            Tales from the Oceans: <br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #f0f4ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Journeys That Reshape Perspective
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.18rem)",
              lineHeight: 1.75,
              color: "rgba(240,244,255,0.7)",
              maxWidth: "760px",
              marginBottom: "40px",
            }}
          >
            Firsthand dispatches, photo essays, and personal reflections from fellow travelers, naturalists, and captains exploring the world’s most pristine maritime corridors.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "All", label: "All Chronicles" },
              { id: "Polar", label: "Polar & Fjords" },
              { id: "Mediterranean", label: "Mediterranean" },
              { id: "Asia", label: "Asia & Japan" },
              { id: "Caribbean", label: "Caribbean" },
              { id: "Crew", label: "Behind the Helm" },
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: active ? "1.5px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                    background: active ? "var(--color-blue)" : "rgba(255,255,255,0.03)",
                    color: active ? "#fff" : "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Featured Story Spotlight ───────────────────────────────── */}
      <section style={{ padding: "70px 0 80px", background: "#080c18" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div
            style={{
              background: "rgba(18,25,48,0.7)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px]">
                <img
                  src={STORIES_DATA[0].image}
                  alt={STORIES_DATA[0].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(18,25,48,0.95) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
                  <span style={{ fontSize: "9px", background: "var(--color-blue)", color: "#fff", padding: "4px 10px", borderRadius: "4px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    EDITOR'S SPOTLIGHT
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div style={{ fontSize: "11px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "8px" }}>
                    {STORIES_DATA[0].categoryLabel} • {STORIES_DATA[0].readTime}
                  </div>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
                    {STORIES_DATA[0].title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "rgba(240,244,255,0.75)", lineHeight: 1.7, marginBottom: "20px" }}>
                    {STORIES_DATA[0].leadParagraph}
                  </p>
                  <blockquote style={{ borderLeft: "2px solid var(--color-blue-light)", paddingLeft: "14px", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", margin: "0 0 20px 0" }}>
                    "{STORIES_DATA[0].pullQuote}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>{STORIES_DATA[0].author}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>{STORIES_DATA[0].authorRole}</div>
                  </div>
                  <button
                    onClick={() => setActiveStoryModal(STORIES_DATA[0])}
                    style={{
                      background: "var(--color-blue)",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                    className="hover:bg-blue-600 transition-colors"
                  >
                    Read Chronicle →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Stories Grid ───────────────────────────────────────────── */}
      <section style={{ padding: "80px 0 100px", background: "#0a0e1a" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 28px" }}>
          
          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontSize: "10px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700 }}>
              Recent Dispatches
            </div>
            <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "#fff" }}>
              Explore All Traveler Dispatches
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
              gap: "28px",
            }}
          >
            {filteredStories.map((story) => (
              <article
                key={story.id}
                style={{
                  background: "rgba(18,25,48,0.65)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                className="hover:border-blue-500/40 hover:-translate-y-1.5"
              >
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(18,25,48,0.95) 0%, transparent 60%)" }} />
                  
                  <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                    <span style={{ fontSize: "9px", background: "rgba(10,14,26,0.85)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)", color: "var(--color-blue-light)", padding: "4px 10px", borderRadius: "6px", fontWeight: 700, textTransform: "uppercase" }}>
                      {story.categoryLabel}
                    </span>
                  </div>

                  <div style={{ position: "absolute", bottom: "12px", right: "14px", fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>
                    ⏱ {story.readTime}
                  </div>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ fontSize: "10px", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px" }}>
                    {story.date}
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "8px" }}>
                    {story.title}
                  </h4>

                  <p style={{ fontSize: "0.82rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.65, marginBottom: "20px", flexGrow: 1 }}>
                    {story.leadParagraph}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>{story.author}</div>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)" }}>{story.authorRole}</div>
                    </div>
                    <button
                      onClick={() => setActiveStoryModal(story)}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        padding: "7px 14px",
                        borderRadius: "6px",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                      className="hover:bg-blue-600 hover:border-blue-600 transition-colors"
                    >
                      Read Story
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── Story Reading Modal ────────────────────────────────────── */}
      {activeStoryModal && (
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
          onClick={() => setActiveStoryModal(null)}
        >
          <div
            style={{
              background: "#0e1529",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "22px",
              width: "100%",
              maxWidth: "820px",
              maxHeight: "88vh",
              overflowY: "auto",
              padding: "36px",
              position: "relative",
              boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStoryModal(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
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
              }}
            >
              ✕
            </button>

            <div style={{ fontSize: "11px", color: "var(--color-blue-light)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "8px" }}>
              {activeStoryModal.categoryLabel} • {activeStoryModal.date}
            </div>

            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
              {activeStoryModal.title}
            </h2>

            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10 text-[12px] text-white/60">
              <span style={{ color: "#fff", fontWeight: 700 }}>By {activeStoryModal.author}</span>
              <span>•</span>
              <span>{activeStoryModal.authorRole}</span>
              <span>•</span>
              <span>{activeStoryModal.readTime}</span>
            </div>

            <div style={{ position: "relative", height: "280px", borderRadius: "14px", overflow: "hidden", marginBottom: "26px" }}>
              <img
                src={activeStoryModal.image}
                alt={activeStoryModal.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "rgba(240,244,255,0.85)", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontWeight: 600, color: "#fff" }}>
                {activeStoryModal.leadParagraph}
              </p>
              
              <blockquote style={{ borderLeft: "3px solid var(--color-gold)", paddingLeft: "18px", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-gold)", margin: "10px 0" }}>
                "{activeStoryModal.pullQuote}"
              </blockquote>

              {activeStoryModal.fullContent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
              <div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>Inspired by this voyage?</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{activeStoryModal.relatedVoyage}</div>
              </div>
              <Link
                href={activeStoryModal.relatedVoyageLink}
                style={{
                  background: "var(--color-blue)",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
                className="hover:bg-blue-600 transition-colors"
              >
                View Voyage Details →
              </Link>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
