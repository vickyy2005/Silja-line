import type { Metadata } from "next";
import VoyagesClient from "./VoyagesClient";

export const metadata: Metadata = {
  title: "Curated Voyages & Expeditions 2026 – 2027 | Silja Line Luxury Cruises",
  description:
    "Explore handcrafted boutique luxury voyages across the Mediterranean, Norwegian Fjords, Caribbean, Japan, and Antarctica aboard Silja Solaris, Silja Aurora, and Silja Celestis. 100% all-inclusive with private veranda suites and Michelin-star gastronomy.",
};

export default function VoyagesPage() {
  return <VoyagesClient />;
}
