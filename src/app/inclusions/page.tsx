import type { Metadata } from "next";
import InclusionsClient from "./InclusionsClient";

export const metadata: Metadata = {
  title: "All-Inclusive Luxury Standard | What's Included | Silja Line",
  description:
    "Explore the genuine all-inclusive standard of Silja Line Luxury Cruises. All Michelin-starred dining, open bar with vintage champagnes, daily shore excursions, dedicated butler service, and Starlink Wi-Fi included with zero surcharges.",
};

export default function InclusionsPage() {
  return <InclusionsClient />;
}
