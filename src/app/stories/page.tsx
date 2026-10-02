import type { Metadata } from "next";
import StoriesClient from "./StoriesClient";

export const metadata: Metadata = {
  title: "Traveler Chronicles & Maritime Dispatches | Silja Line",
  description:
    "Read firsthand dispatches, captain logs, and traveler chronicles from the Norwegian Fjords, Antarctica, the Greek Cyclades, and the Japanese Archipelago.",
};

export default function StoriesPage() {
  return <StoriesClient />;
}
