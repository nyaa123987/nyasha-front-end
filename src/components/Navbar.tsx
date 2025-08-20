"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/certifications", label: "Certificates" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // toggle menu
  const toggleMenu = () => setOpen((prev) => !prev);

  // close menu when link clicked
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-[100]">
      <nav className="relative bg-[#1C0C4E] text-white shadow-md">
        <div className="px-[3%] h-16 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wide md:text-2xl">
            NZ.dev
          </Link>

          {/* Mobile toggle button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="block md:hidden p-2 rounded focus:outline-none focus:ring"
            onClick={toggleMenu}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex md:w-[500px] md:h-[70px] justify-center items-center pr-[5%] space-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`hover:underline ${
                  pathname === link.href ? "text-[#7B1FEA] font-bold" : ""
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button>Resume</Button>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu (dropdown under the toggle button) */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-6 pb-4 space-y-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </Link>
              </li>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <Button>Resume</Button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
