"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "News",
    href: "#",
    children: [
      { label: "News", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland" },
      { label: "Archive", href: "https://www.bitcoinassociation.ch/archive" },
    ],
  },
  {
    label: "Events",
    href: "#",
    children: [
      { label: "Roadshow 2025", href: "https://www.bitcoinassociation.ch/roadshow-2025" },
      { label: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { label: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { label: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { label: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { label: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    label: "Membership",
    href: "#",
    children: [
      { label: "Private", href: "https://www.bitcoinassociation.ch/private" },
      { label: "Corporate", href: "https://www.bitcoinassociation.ch/corporate" },
      { label: "Our Corporate Members", href: "https://www.bitcoinassociation.ch/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    href: "#",
    children: [
      { label: "Meetups & Events", href: "https://www.bitcoinassociation.ch/meetups-events" },
    ],
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About", href: "https://www.bitcoinassociation.ch/about-1" },
      { label: "Board", href: "https://www.bitcoinassociation.ch/board" },
      { label: "Finances", href: "https://www.bitcoinassociation.ch/finances" },
      { label: "Statutes", href: "https://www.bitcoinassociation.ch/statutes" },
      { label: "Media Kit", href: "https://www.bitcoinassociation.ch/media-kit" },
      { label: "Contact", href: "https://www.bitcoinassociation.ch/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="ml-2 text-white text-[10px] font-semibold uppercase tracking-wider leading-tight hidden sm:block">
            <div>Bitcoin</div>
            <div>Association</div>
            <div>Switzerland</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button className="nav-link text-white flex items-center space-x-1 hover:text-white/80 transition-colors">
                    <span>{item.label}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-sm min-w-[220px] py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="nav-link text-white hover:text-white/80 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.children ? (
                  <>
                    <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="block text-sm text-gray-600 hover:text-primary"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}