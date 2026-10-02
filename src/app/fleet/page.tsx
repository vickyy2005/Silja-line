import type { Metadata } from "next";
import FleetClient from "./FleetClient";

export const metadata: Metadata = {
  title: "Our Luxury Fleet | Silja Solaris, Silja Aurora, Silja Celestis",
  description:
    "Discover the engineering and architecture behind the Silja Line boutique fleet: Silja Solaris, Silja Aurora, and Silja Celestis. 100% oceanview veranda suites, shallow-harbor capability, and 1:1 butler service.",
};

export default function FleetPage() {
  return <FleetClient />;
}
