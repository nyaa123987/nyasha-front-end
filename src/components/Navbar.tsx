"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => setOpen((p) => !p);

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on click outside + Esc key
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/certifications", label: "Certificates" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-[100]">
      <nav
        role="navigation"
        aria-label="Primary"
        className="relative bg-[#1C0C4E] text-white shadow-md"
      >
        <div className="px-[3%] h-16 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wide md:text-2xl">
            N.Z.
          </Link>

          {/* Mobile toggle button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="block md:hidden p-2 rounded focus:outline-none focus:ring focus:ring-offset-2 focus:ring-white"
            onClick={toggleMenu}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex md:w-[500px] md:h-[70px] justify-center items-center pr-[5%] space-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`hover:underline ${
                    pathname === link.href ? "text-[#7B1FEA] font-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
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
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
            open ? "max-h-[420px] opacity-100 transform translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col px-6 pb-4 space-y-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`${pathname === link.href ? "text-[#7B1FEA] font-bold" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Button>Resume</Button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
