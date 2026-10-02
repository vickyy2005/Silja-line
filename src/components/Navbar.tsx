"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const pathname = usePathname() || currentPath || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Voyages", href: "/voyages" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Inclusions", href: "/inclusions" },
    { name: "Stories", href: "/stories" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        background: "rgba(10,14,26,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div
          style={{
            width: 34,
            height: 34,
            background: "var(--color-blue)",
            borderRadius: "7px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 16px rgba(37,99,235,0.45)",
          }}
        >
          <span style={{ color: "#fff", fontSize: "15px", fontWeight: 800, fontFamily: "var(--font-sans)" }}>S</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span style={{ color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.12em" }}>
              SILJA LINE
            </span>
            <span
              style={{
                fontSize: "8px",
                background: "rgba(37,99,235,0.25)",
                color: "var(--color-blue-light)",
                padding: "2px 6px",
                borderRadius: "4px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              LUXURY
            </span>
          </div>
          <span style={{ color: "var(--color-ivory-400)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            World Cruises &amp; Expeditions
          </span>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-7">
        {navLinks.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-[11px] uppercase tracking-[0.16em] transition-colors relative py-1 block no-underline"
                style={{
                  color: isActive ? "#ffffff" : "rgba(240,244,255,0.65)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {item.name}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "var(--color-blue)",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px var(--color-blue)",
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Action CTA & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <Link
          href="/voyages"
          className="hidden sm:inline-flex items-center px-5 py-2 text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-blue-600 no-underline"
          style={{
            background: "var(--color-blue)",
            color: "#fff",
            borderRadius: "6px",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(37,99,235,0.35)",
          }}
        >
          Book a Voyage
        </Link>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white"
          style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "20px" }}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#0a0e1a",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
          }}
          className="lg:hidden"
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname === item.href ? "var(--color-blue-light)" : "rgba(255,255,255,0.8)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "6px 0",
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/voyages"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: "var(--color-blue)",
              color: "#fff",
              textAlign: "center",
              padding: "10px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            Book a Voyage
          </Link>
        </div>
      )}
    </nav>
  );
}
