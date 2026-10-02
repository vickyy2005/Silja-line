"use client";

import { useState, useMemo } from "react";

export interface ItineraryDay {
  day: number;
  port: string;
  country: string;
  activity: string;
  highlight: string;
}

export interface Voyage {
  id: string;
  title: string;
  subtitle: string;
  region: "Mediterranean" | "Scandinavia" | "Caribbean" | "Asia" | "Polar";
  regionLabel: string;
  duration: string;
  nights: number;
  ship: string;
  departure: string;
  price: string;
  priceNote: string;
  image: string;
  route: string[];
  highlights: string[];
  suitesAvailable: number;
  itinerary: ItineraryDay[];
}

export const VOYAGES_DATA: Voyage[] = [
  {
    id: "aegean-odyssey",
    title: "Aegean Pearl & Cyclades Sunsets",
    subtitle: "A sun-kissed voyage through ancient harbors, caldera cliffs, and sapphire waters",
    region: "Mediterranean",
    regionLabel: "Mediterranean & Greece",
    duration: "8 Nights / 9 Days",
    nights: 8,
    ship: "Silja Solaris",
    departure: "May – October 2026",
    price: "$2,450",
    priceNote: "per guest / all-inclusive",
    image: "/voyages/aegean.jpg",
    route: ["Athens (Piraeus)", "Mykonos", "Santorini", "Rhodes", "Heraklion", "Athens"],
    highlights: ["Private Caldera Sunset Tasting", "Ancient Delos Archeological Tour", "Santorini Cliffside Wine Pairing"],
    suitesAvailable: 4,
    itinerary: [
      { day: 1, port: "Athens (Piraeus)", country: "Greece", activity: "Embarkation at Port Silja Line Terminal, Captain's Welcome Reception on the Skylight Deck", highlight: "Sunset departure with champagne toast" },
      { day: 2, port: "Mykonos Town", country: "Greece", activity: "Morning tenders to Little Venice; private guided exploration of windmills and seaside tavernas", highlight: "Exclusive beach club evening party" },
      { day: 3, port: "Delos & Rhenia", country: "Greece", activity: "UNESCO World Heritage Delos guided ruins followed by swimming in Rhenia's turquoise cove", highlight: "Catamaran snorkeling & Greek feast" },
      { day: 4, port: "Santorini (Thira)", country: "Greece", activity: "Private tender to Ammoudi Bay, funicular to Oia, afternoon wine tasting overlooking the volcanic caldera", highlight: "Golden hour dinner at cliffside terrace" },
      { day: 5, port: "Rhodes Old Town", country: "Greece", activity: "Walk the medieval Street of the Knights and Palace of the Grand Master; artisan market immersion", highlight: "Live harp concert inside medieval courtyard" },
      { day: 6, port: "Agios Nikolaos, Crete", country: "Greece", activity: "Boat excursion to Spinalonga islet, olive oil pressing and artisan cheese masterclass", highlight: "Traditional Cretan farm-to-table lunch" },
      { day: 7, port: "Nafplio & Mycenae", country: "Greece", activity: "Scenic climb to Palamidi fortress; afternoon excursion to Homeric Mycenae citadel", highlight: "Private acoustics demo in Epidaurus theater" },
      { day: 8, port: "Athens (Piraeus)", country: "Greece", activity: "Farewell Gala dinner with 7-course Mediterranean tasting menu crafted by Chef Michel", highlight: "Midnight fireworks over the Saronic Gulf" },
    ],
  },
  {
    id: "norwegian-fjords",
    title: "Glaciers & Midnight Sun Fjordland",
    subtitle: "Towering granite peaks, cascading waterfalls, and mirror-still emerald fjords",
    region: "Scandinavia",
    regionLabel: "Scandinavia & Fjords",
    duration: "10 Nights / 11 Days",
    nights: 10,
    ship: "Silja Aurora",
    departure: "June – August 2026",
    price: "$3,200",
    priceNote: "per guest / all-inclusive",
    image: "/voyages/fjords.jpg",
    route: ["Bergen", "Geirangerfjord", "Flåm", "Ålesund", "Sognefjord", "Bergen"],
    highlights: ["Helicopter Glacier Flyover", "Flåm Mountain Railway Journey", "Nordic Spa & Thermal Hydrotherapy"],
    suitesAvailable: 6,
    itinerary: [
      { day: 1, port: "Bergen", country: "Norway", activity: "Embarkation at historic Bryggen wharf, panoramic sail-away through the Byfjorden islands", highlight: "Fresh king crab tasting on the forward deck" },
      { day: 2, port: "Geirangerfjord", country: "Norway", activity: "Cruising alongside the Seven Sisters waterfalls; private RIB boat deep into the fjord crevices", highlight: "Observation lounge naturalist lecture" },
      { day: 3, port: "Flåm & Aurlandsfjord", country: "Norway", activity: "Scenic ride on the world-famous Flåm Railway through snowcapped summits and roaring ravines", highlight: "Artisan goat cheese tasting in Undredal" },
      { day: 4, port: "Ålesund", country: "Norway", activity: "Art Nouveau walking tour, hike to Mount Aksla viewpoint for panoramic ocean and archipelago views", highlight: "Sunset fjord sea-kayaking" },
      { day: 5, port: "Sognefjord & Balestrand", country: "Norway", activity: "Deep navigation of Norway's longest fjord; visit to historic Kviknes timber estate and cider orchards", highlight: "Cider pairing & local salmon feast" },
      { day: 6, port: "Olden & Briksdal Glacier", country: "Norway", activity: "Open-top troll car excursion to the face of Briksdal Glacier; glacial river hike", highlight: "Glacier ice cocktail lounge reception" },
      { day: 7, port: "Stavanger & Lysefjord", country: "Norway", activity: "Cruising beneath the sheer 604m drop of Preikestolen (Pulpit Rock); maritime heritage museum", highlight: "Evening acoustic Nordic folk performance" },
      { day: 8, port: "Hardangerfjord", country: "Norway", activity: "Orchard walks in blossom valleys; panoramic viewing from the heated infinity pool on board", highlight: "Orchard-side private dinner under midnight sun" },
      { day: 9, port: "Cruising Norwegian Sea", country: "At Sea", activity: "Relaxation in Silja Line Nordic Spa, outdoor cedarwood saunas, chef's pastry masterclass", highlight: "Chef's 8-course Arctic seafood gala" },
      { day: 10, port: "Bergen Disembarkation", country: "Norway", activity: "Morning breakfast with fjord panoramic views; seamless transfer to airport or rail", highlight: "Final souvenir and luxury travel kit" },
    ],
  },
  {
    id: "caribbean-azure",
    title: "Azure Caribbean & Virgin Atolls",
    subtitle: "Pristine white sandbars, secluded coral reefs, and bohemian chic island hideaways",
    region: "Caribbean",
    regionLabel: "Caribbean & Tropics",
    duration: "7 Nights / 8 Days",
    nights: 7,
    ship: "Silja Celestis",
    departure: "November 2026 – April 2027",
    price: "$2,100",
    priceNote: "per guest / all-inclusive",
    image: "/voyages/caribbean.jpg",
    route: ["St. Thomas", "St. Barts", "Virgin Gorda", "Anguilla", "Antigua", "St. Thomas"],
    highlights: ["Secluded Beach Barbecue with Lobster", "The Baths Granite Grotto Snorkel", "St. Barts Designer Port Walk"],
    suitesAvailable: 3,
    itinerary: [
      { day: 1, port: "Charlotte Amalie, St. Thomas", country: "USVI", activity: "Boarding Silja Celestis; champagne welcome in the Horizon Atrium", highlight: "Sunset cocktail sail past Blackbeard's Castle" },
      { day: 2, port: "Gustavia, St. Barts", country: "French West Indies", activity: "Tender ashore to glamorous Gustavia harbor; French boutiques and gourmet beachside dining", highlight: "Moët & Chandon rooftop DJ sunset session" },
      { day: 3, port: "Virgin Gorda (The Baths)", country: "BVI", activity: "Wade through mystical natural sea pools and colossal granite boulders; pristine snorkeling", highlight: "Private rum cocktail beach cabana setup" },
      { day: 4, port: "Jost Van Dyke & White Bay", country: "BVI", activity: "Swim ashore to legendary White Bay; pristine crystalline water and barefoot luxury vibes", highlight: "Fresh coconut and Caribbean lobster barbecue" },
      { day: 5, port: "Shoal Bay, Anguilla", country: "Anguilla", activity: "Powder-soft coral sands, paddleboarding, and steel drum reggae performances right on the beach", highlight: "Barefoot beach sunset yoga & cocktails" },
      { day: 6, port: "Nelson's Dockyard, Antigua", country: "Antigua", activity: "Historic 18th-century naval dockyard tour, panoramic vistas from Shirley Heights", highlight: "Sunset rum punch celebration at Shirley Heights" },
      { day: 7, port: "St. John (Trunk Bay)", country: "USVI", activity: "Undersea coral snorkeling trail in Virgin Islands National Park, catamaran sunset sail", highlight: "Captain’s All-White Farewell Gala Dinner" },
    ],
  },
  {
    id: "japan-archipelago",
    title: "Imperial Coast & Sea of Japan",
    subtitle: "Centuries of heritage, tranquil temple gardens, and Michelin dining along the Rising Sun coast",
    region: "Asia",
    regionLabel: "Asia & Japan",
    duration: "12 Nights / 13 Days",
    nights: 12,
    ship: "Silja Solaris",
    departure: "March – May 2027",
    price: "$4,650",
    priceNote: "per guest / all-inclusive",
    image: "/voyages/japan.jpg",
    route: ["Yokohama (Tokyo)", "Shimizu (Mt. Fuji)", "Kobe (Kyoto)", "Hiroshima", "Miyajima", "Kanazawa", "Yokohama"],
    highlights: ["Private Tea Ceremony in Kyoto", "View of Mt. Fuji from Suruga Bay", "Authentic Wagyu & Omakase on Board"],
    suitesAvailable: 5,
    itinerary: [
      { day: 1, port: "Yokohama (Tokyo)", country: "Japan", activity: "Boarding at Osanbashi International Pier; traditional taiko drum welcome ceremonial performance", highlight: "Tokyo Bay illuminated skyline departure" },
      { day: 2, port: "Shimizu & Suruga Bay", country: "Japan", activity: "Dawn view of snow-capped Mt. Fuji towering over the sea; excursion to Miho no Matsubara pine grove", highlight: "Sake sommelier masterclass on the aft deck" },
      { day: 3, port: "Kobe & Kyoto Overland", country: "Japan", activity: "Exclusive bullet train transfer to Kyoto; private access to bamboo groves and private zen temple gardens", highlight: "Matcha tea ceremony with a Zen master" },
      { day: 4, port: "Kobe Harbor", country: "Japan", activity: "Kobe beef culinary showcase prepared by certified teppanyaki masters on board", highlight: "10-course omakase dinner at sea" },
      { day: 5, port: "Seto Inland Sea Cruising", country: "Japan", activity: "Daytime navigation through the legendary calm waters and 3,000 islets of the Seto Inland Sea", highlight: "Art installations viewing on Naoshima island" },
      { day: 6, port: "Hiroshima & Miyajima", country: "Japan", activity: "Peace Memorial Park followed by high-tide private tender to Itsukushima's Floating Torii gate", highlight: "Twilight view of glowing shrine on the water" },
      { day: 7, port: "Fukuoka & Hakata", country: "Japan", activity: "Dazaifu Tenmangu shrine visit, artisan pottery workshops, and gourmet Hakata ramen discovery", highlight: "Calligraphy and silk kimono masterclass" },
      { day: 8, port: "Kanazawa (Little Kyoto)", country: "Japan", activity: "Stroll through Kenroku-en garden, one of Japan's Top 3 gardens; gold leaf artisan guild", highlight: "Geisha district evening traditional arts performance" },
      { day: 9, port: "Sado Island & Niigata", country: "Japan", activity: "Wooden tub boat (Taraibune) experience and Kodo drumming cultural exchange", highlight: "Fresh Sea of Japan snow crab feast" },
      { day: 10, port: "Hakodate, Hokkaido", country: "Japan", activity: "Morning seafood market, Goryokaku star fortress, Mount Hakodate world-renowned night view", highlight: "Night view ranked among the world's finest" },
      { day: 11, port: "Cruising Pacific Coast", country: "At Sea", activity: "Silja Line Zen Onsen and warm cedar baths, origami and bonsai demonstrations", highlight: "Captain's Imperial Kaiseki Banquet" },
      { day: 12, port: "Yokohama (Tokyo)", country: "Japan", activity: "Disembarkation with private concierge baggage and luxury limousine service to Tokyo Haneda", highlight: "Commemorative woodblock art keepsake" },
    ],
  },
  {
    id: "riviera-monaco",
    title: "French Riviera & Amalfi Splendor",
    subtitle: "Glamour, cliffside pastel villas, and timeless Mediterranean indulgence from Monaco to Capri",
    region: "Mediterranean",
    regionLabel: "Mediterranean & Greece",
    duration: "9 Nights / 10 Days",
    nights: 9,
    ship: "Silja Celestis",
    departure: "June – September 2026",
    price: "$3,800",
    priceNote: "per guest / all-inclusive",
    image: "/voyages/riviera.jpg",
    route: ["Monaco (Port Hercule)", "Saint-Tropez", "Portofino", "Florence (Livorno)", "Capri", "Amalfi"],
    highlights: ["Port Hercule Yacht Berth Access", "Sunset in Portofino Piazzetta", "Private Capri Blue Grotto Boat Entry"],
    suitesAvailable: 2,
    itinerary: [
      { day: 1, port: "Monaco (Port Hercule)", country: "Monaco", activity: "VIP check-in right in Port Hercule; Casino de Monte-Carlo private salon invitation", highlight: "Chilled champagne on the helipad deck" },
      { day: 2, port: "Saint-Tropez", country: "France", activity: "Tenders to Pampelonne beach; stroll through Place des Lices and vintage Provencal market", highlight: "Private VIP table at Nikki Beach" },
      { day: 3, port: "Cannes & Îles de Lérins", country: "France", activity: "Boulevard de la Croisette luxury shopping; monastic vineyard tour on Saint-Honorat island", highlight: "Monastery wine tasting with sommelier" },
      { day: 4, port: "Portofino", country: "Italy", activity: "Drop anchor in the picturesque pastel harbor; scenic walk to Castello Brown overlooking the Gulf of Tigullio", highlight: "Aperitivo in Portofino Piazzetta" },
      { day: 5, port: "Cinque Terre & Portovenere", country: "Italy", activity: "Cruising past Riomaggiore, Manarola and Vernazza; private pesto making class with local chef", highlight: "Fresh focaccia and Ligurian white wine tasting" },
      { day: 6, port: "Livorno (Florence & Pisa)", country: "Italy", activity: "Fast-track entry to Florence Uffizi Gallery; private olive estate in the Tuscan Chianti hills", highlight: "Private Tuscan vineyard banquet" },
      { day: 7, port: "Capri & Anacapri", country: "Italy", activity: "Private wooden gozzo boat around Faraglioni rocks; chairlift to Monte Solaro summit", highlight: "Exclusive Blue Grotto entry before crowds" },
      { day: 8, port: "Amalfi & Positano", country: "Italy", activity: "Climb the grand stairs to Amalfi Cathedral; cliffside drive along Positano's pastel cascades", highlight: "Limoncello liqueur artisan tasting" },
      { day: 9, port: "Naples & Pompeii", country: "Italy", activity: "Private archaeologist tour of Pompeii ruins; authentic Neapolitan pizza masterclass", highlight: "Italian Opera performance in ship’s Grand Salon" },
    ],
  },
  {
    id: "antarctic-expedition",
    title: "Antarctica & Drake Passage Odyssey",
    subtitle: "Untamed white wilderness, colossal cathedral icebergs, and rare wildlife at the edge of the world",
    region: "Polar",
    regionLabel: "Polar Expeditions",
    duration: "14 Nights / 15 Days",
    nights: 14,
    ship: "Silja Aurora",
    departure: "December 2026 – February 2027",
    price: "$6,900",
    priceNote: "per guest / all-inclusive",
    image: "/voyages/antarctica.jpg",
    route: ["Ushuaia", "Drake Passage", "South Shetland Islands", "Paradise Bay", "Lemaire Channel", "Ushuaia"],
    highlights: ["Daily Zodiac Landings with Polar Guides", "Polar Plunge in Glacial Waters", "Encounters with Gentoo & Emperor Penguins"],
    suitesAvailable: 2,
    itinerary: [
      { day: 1, port: "Ushuaia (Tierra del Fuego)", country: "Argentina", activity: "Boarding the reinforced polar vessel Silja Aurora at the Southernmost city on Earth", highlight: "Scenic sail-away down the Beagle Channel" },
      { day: 2, port: "Crossing Drake Passage", country: "Open Sea", activity: "Marine biologist and polar ornithologist lectures; spotting wandering albatross and humpbacks", highlight: "High-latitude sea navigation briefing" },
      { day: 3, port: "Drake Passage to Convergence", country: "Polar Waters", activity: "Crossing the Antarctic Convergence; sudden temperature shift and first sightings of mammoth icebergs", highlight: "First table iceberg observation from bridge" },
      { day: 4, port: "South Shetland Islands", country: "Antarctica", activity: "First Zodiac landing at Aitcho Island; colonies of Gentoo and Chinstrap penguins on volcanic shore", highlight: "Walking amidst penguin rookeries" },
      { day: 5, port: "Deception Island", country: "Antarctica", activity: "Navigating through Neptune's Bellows into a sunken volcanic caldera; geothermal steam beaches", highlight: "The legendary Antarctic Polar Plunge" },
      { day: 6, port: "Gerlache Strait & Cuverville", country: "Antarctica", activity: "Weaving between gargantuan cyan blue icebergs; sea leopard and crabeater seal sightings", highlight: "Zodiac ice-cruising through sculpture gardens" },
      { day: 7, port: "Paradise Bay & Neko Harbour", country: "Continental Antarctica", activity: "Official continental step onto the mainland of Antarctica; glacial hike for panoramic vistas", highlight: "Thunderous calving glacier spectacle" },
      { day: 8, port: "Lemaire Channel (Kodak Gap)", country: "Antarctica", activity: "Navigation through the razor-thin cliff-lined passage with mirror-flat reflections and orca pods", highlight: "Spectacular wildlife photography moment" },
      { day: 9, port: "Port Lockroy & Historic Base", country: "Antarctica", activity: "Visit British Antarctic Base 'A'; send postcards stamped from the bottom of the world", highlight: "Gentoo penguins nesting beneath building stilts" },
      { day: 10, port: "Wilhelmina Bay", country: "Antarctica", activity: "Known as 'Whale-mina Bay'; close encounters with feeding humpback whale pods from kayak and deck", highlight: "Humpback whale bubble-net feeding up close" },
      { day: 11, port: "Melchior Islands", country: "Antarctica", activity: "Exploring frozen maze of ice floes and submerged bergs; farewell toast in Antarctic waters", highlight: "Champagne on the bow surrounded by glaciers" },
      { day: 12, port: "Drake Passage Return", country: "Polar Waters", activity: "Scientific presentation on Antarctic conservation; recap of photography with resident artist", highlight: "Polar expedition certificates presentation" },
      { day: 13, port: "Cape Horn Passage", country: "Chile", activity: "Circumnavigating the historic cape of seafarers under safe guided navigation", highlight: "Cape Horn commemorative maritime badge" },
      { day: 14, port: "Ushuaia Disembarkation", country: "Argentina", activity: "Breakfast overlooking the Martial Glacier; private charter flight connection to Buenos Aires", highlight: "Farewell champagne and memories of a lifetime" },
    ],
  },
];

export default function VoyagesSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalVoyage, setActiveModalVoyage] = useState<Voyage | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [selectedSuite, setSelectedSuite] = useState("Deluxe Balcony Suite");

  // Region filtering
  const filteredVoyages = useMemo(() => {
    return VOYAGES_DATA.filter((v) => {
      const matchRegion = selectedRegion === "All" || v.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.subtitle.toLowerCase().includes(q) ||
        v.regionLabel.toLowerCase().includes(q) ||
        v.ship.toLowerCase().includes(q) ||
        v.route.some((r) => r.toLowerCase().includes(q));
      return matchRegion && matchSearch;
    });
  }, [selectedRegion, searchQuery]);

  const handleOpenItinerary = (voyage: Voyage) => {
    setActiveModalVoyage(voyage);
    setBookingSuccess(false);
  };

  const handleCloseModal = () => {
    setActiveModalVoyage(null);
    setBookingSuccess(false);
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestEmail) return;
    setBookingSuccess(true);
  };

  return (
    <section
      id="voyages"
      style={{
        background: "linear-gradient(180deg, #0a0e1a 0%, #0d1424 50%, #0a0e1a 100%)",
        padding: "100px 0 110px",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Background ambient water glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* ── Section Header ────────────────────────────────────────── */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 52px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(59,130,246,0.3)",
              marginBottom: "18px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-blue-light)" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--color-blue-light)",
              }}
            >
              2026 – 2027 Signature Itineraries
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Curated Voyages Across<br />The Seven Seas
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(240,244,255,0.65)",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Every voyage is an art form. Sail on ultra-luxury boutique vessels featuring all-suite oceanfront verandas, Michelin-star culinary craft, and private shoreside adventures.
          </p>
        </div>

        {/* ── Search & Filter Controls ───────────────────────────────── */}
        <div
          style={{
            background: "rgba(15,21,40,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "20px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "44px",
          }}
        >
          {/* Region Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              { id: "All", label: "All Destinations" },
              { id: "Mediterranean", label: "Mediterranean" },
              { id: "Scandinavia", label: "Fjordland & Nordic" },
              { id: "Caribbean", label: "Caribbean" },
              { id: "Asia", label: "Asia & Japan" },
              { id: "Polar", label: "Antarctica & Polar" },
            ].map((tab) => {
              const active = selectedRegion === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRegion(tab.id)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: active ? "1px solid var(--color-blue-light)" : "1px solid rgba(255,255,255,0.08)",
                    background: active ? "var(--color-blue)" : "rgba(255,255,255,0.04)",
                    color: active ? "#fff" : "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "260px", flexGrow: 1, maxWidth: "340px" }}>
            <input
              type="text"
              placeholder="Search ports, ships, or routes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                padding: "10px 16px 10px 38px",
                color: "#ffffff",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px",
              }}
            >
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ── Voyages Grid ───────────────────────────────────────────── */}
        {filteredVoyages.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "70px 20px",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "20px",
              border: "1px dashed rgba(255,255,255,0.1)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem", marginBottom: "12px" }}>
              No voyages found matching your criteria.
            </p>
            <button
              onClick={() => { setSelectedRegion("All"); setSearchQuery(""); }}
              style={{
                padding: "8px 20px",
                background: "var(--color-blue)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "11px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(390px, 1fr))",
              gap: "28px",
            }}
          >
            {filteredVoyages.map((voyage) => (
              <article
                key={voyage.id}
                style={{
                  background: "rgba(18,25,48,0.75)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                  position: "relative",
                }}
                className="group hover:border-blue-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Image Container with Badges */}
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
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(18,25,48,0.95) 0%, rgba(18,25,48,0.2) 60%, transparent 100%)",
                    }}
                  />

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

                  {/* Vessel info at bottom of image */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "var(--color-gold)", fontSize: "11px" }}>⚓</span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.85)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Vessel: {voyage.ship}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div style={{ padding: "24px 24px 22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  
                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      color: "#ffffff",
                      lineHeight: 1.25,
                      marginBottom: "8px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {voyage.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      color: "rgba(240,244,255,0.55)",
                      lineHeight: 1.6,
                      marginBottom: "18px",
                    }}
                  >
                    {voyage.subtitle}
                  </p>

                  {/* Route Timeline summary */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-blue-light)",
                        marginBottom: "6px",
                      }}
                    >
                      Ports of Call
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.5,
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {voyage.route.map((port, idx) => (
                        <span key={idx} style={{ display: "inline-flex", alignItems: "center" }}>
                          <span>{port}</span>
                          {idx < voyage.route.length - 1 && (
                            <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 4px" }}>→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {voyage.highlights.map((h, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.76rem", color: "rgba(255,255,255,0.7)" }}>
                        <span style={{ color: "var(--color-blue-light)", fontSize: "10px" }}>✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer with Price & Actions */}
                  <div
                    style={{
                      marginTop: "auto",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "1.45rem", color: "#ffffff", letterSpacing: "-0.02em" }}>
                          {voyage.price}
                        </span>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          / guest
                        </span>
                      </div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "var(--color-gold)", letterSpacing: "0.05em" }}>
                        {voyage.departure}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => handleOpenItinerary(voyage)}
                        style={{
                          padding: "10px 16px",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.18)",
                          background: "rgba(255,255,255,0.05)",
                          color: "#ffffff",
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        className="hover:bg-white/10 hover:border-white/30"
                      >
                        Itinerary
                      </button>

                      <button
                        onClick={() => handleOpenItinerary(voyage)}
                        style={{
                          padding: "10px 16px",
                          borderRadius: "8px",
                          border: "none",
                          background: "var(--color-blue)",
                          color: "#ffffff",
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        className="hover:bg-blue-600 shadow-md shadow-blue-500/20"
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

        {/* ── Luxury Privileges / Guarantee Strip ─────────────────────── */}
        <div
          style={{
            marginTop: "64px",
            background: "rgba(15,21,40,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "36px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "28px",
          }}
        >
          {[
            {
              icon: "🛏️",
              title: "All-Suite Ocean Verandas",
              desc: "Every stateroom opens directly onto private sea views with custom Italian linens & marble baths.",
            },
            {
              icon: "🥂",
              title: "Inclusive Fine Gastronomy",
              desc: "Five specialty dining rooms, curated wine pairings, and 24-hr in-suite service included on every voyage.",
            },
            {
              icon: "⚓",
              title: "Private Shore Tenders",
              desc: "Direct harbor-side access and escorted excursions with local historians and certified naturalists.",
            },
            {
              icon: "✨",
              title: "1:1 Guest to Crew Ratio",
              desc: "Unrivaled white-glove hospitality where every desire is anticipated before it is spoken.",
            },
          ].map((item, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "24px", marginBottom: "4px" }}>{item.icon}</span>
              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "#ffffff" }}>
                {item.title}
              </h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "rgba(240,244,255,0.5)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Interactive Itinerary & Reservation Modal ─────────────────── */}
      {activeModalVoyage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(3,6,15,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: "#0c1222",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "860px",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
              position: "relative",
              color: "#ffffff",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                position: "relative",
                height: "220px",
                overflow: "hidden",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
              }}
            >
              <img
                src={activeModalVoyage.image}
                alt={activeModalVoyage.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, #0c1222 0%, rgba(12,18,34,0.4) 60%, rgba(0,0,0,0.6) 100%)",
                }}
              />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>

              <div style={{ position: "absolute", bottom: "20px", left: "28px", right: "28px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-blue-light)",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {activeModalVoyage.regionLabel} • {activeModalVoyage.duration}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 900,
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    lineHeight: 1.15,
                  }}
                >
                  {activeModalVoyage.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "28px" }}>
              
              {/* Quick Spec Pills */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "12px",
                  marginBottom: "28px",
                  background: "rgba(255,255,255,0.03)",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Vessel</div>
                  <div style={{ fontSize: "13px", fontWeight: 700 }}>{activeModalVoyage.ship}</div>
                </div>
                <div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Departure Season</div>
                  <div style={{ fontSize: "13px", fontWeight: 700 }}>{activeModalVoyage.departure}</div>
                </div>
                <div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>All-Inclusive Fare</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gold)" }}>{activeModalVoyage.price} / person</div>
                </div>
                <div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Availability</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#34d399" }}>{activeModalVoyage.suitesAvailable} Suites Left</div>
                </div>
              </div>

              {/* Day-by-Day Timeline */}
              <div style={{ marginBottom: "32px" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>🗺️</span> Day-by-Day Journey Itinerary
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeModalVoyage.itinerary.map((item) => (
                    <div
                      key={item.day}
                      style={{
                        display: "flex",
                        gap: "16px",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "12px",
                        padding: "14px 16px",
                      }}
                    >
                      <div
                        style={{
                          width: "54px",
                          flexShrink: 0,
                          textAlign: "center",
                          borderRight: "1px solid rgba(255,255,255,0.08)",
                          paddingRight: "12px",
                        }}
                      >
                        <span style={{ fontSize: "9px", color: "var(--color-blue-light)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.1em" }}>
                          Day
                        </span>
                        <div style={{ fontSize: "1.4rem", fontWeight: 900, lineHeight: 1 }}>{item.day}</div>
                      </div>

                      <div style={{ flexGrow: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                          <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#ffffff" }}>
                            {item.port}
                          </span>
                          <span style={{ fontSize: "10px", color: "var(--color-gold)", letterSpacing: "0.05em" }}>
                            {item.country}
                          </span>
                        </div>
                        <p style={{ fontSize: "0.8rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.5, margin: "0 0 6px" }}>
                          {item.activity}
                        </p>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#60a5fa" }}>
                          <span>✦</span>
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Request Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(15,21,40,0.8) 100%)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                {bookingSuccess ? (
                  <div style={{ textAlign: "center", padding: "16px 0" }}>
                    <div style={{ fontSize: "36px", marginBottom: "10px" }}>🎉</div>
                    <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "#ffffff", marginBottom: "8px" }}>
                      Reservation Inquiry Received
                    </h4>
                    <p style={{ color: "rgba(240,244,255,0.7)", fontSize: "0.85rem", maxWidth: "440px", margin: "0 auto 16px" }}>
                      Thank you! Our private concierge team will reach out to {guestEmail || "you"} within 2 hours with suite availability, stateroom floor plans, and flight coordination.
                    </p>
                    <button
                      onClick={handleCloseModal}
                      style={{
                        padding: "10px 24px",
                        background: "var(--color-blue)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookSubmit}>
                    <h4 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "6px", color: "#ffffff" }}>
                      Hold Your Cabin on {activeModalVoyage.ship}
                    </h4>
                    <p style={{ fontSize: "0.8rem", color: "rgba(240,244,255,0.6)", marginBottom: "18px" }}>
                      Complimentary 72-hour suite hold with zero deposit required.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.6)", marginBottom: "6px", textTransform: "uppercase" }}>
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
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "8px",
                            padding: "9px 12px",
                            color: "#fff",
                            fontSize: "12px",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.6)", marginBottom: "6px", textTransform: "uppercase" }}>
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
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "8px",
                            padding: "9px 12px",
                            color: "#fff",
                            fontSize: "12px",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.6)", marginBottom: "6px", textTransform: "uppercase" }}>
                          Suite Tier
                        </label>
                        <select
                          value={selectedSuite}
                          onChange={(e) => setSelectedSuite(e.target.value)}
                          style={{
                            width: "100%",
                            background: "#151c35",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "8px",
                            padding: "9px 12px",
                            color: "#fff",
                            fontSize: "12px",
                            outline: "none",
                          }}
                        >
                          <option value="Deluxe Balcony Suite">Deluxe Balcony Suite</option>
                          <option value="Horizon Penthouse Suite">Horizon Penthouse Suite</option>
                          <option value="Owner's Ocean Villa">Owner's Ocean Villa</option>
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
                        }}
                        className="hover:bg-blue-600"
                      >
                        Request Suite Hold
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
