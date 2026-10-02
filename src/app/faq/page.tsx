import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Silja Line",
  description:
    "Find answers to questions about booking deposits, onboard dress code, Michelin dining, complimentary shore excursions, polar expedition gear, and passport requirements.",
};

export default function FaqPage() {
  return <FaqClient />;
}
