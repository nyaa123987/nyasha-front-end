"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="px-[3%] bg-[#1C0C4E] text-white shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide md:text-2xl">
          NZ.dev
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="navigation">
          <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">

            <li className={`list ${pathname === "/" ? "active" : ""}`}>
              <Link href="/">Home</Link>
            </li>

            <li className={`list ${pathname === "/about" ? "active" : ""}`}>
              <Link href="/Linkbout">About</Link>
            </li>

            <li className={`list ${pathname === "/certifications" ? "active" : ""}`}>
              <Link href="/certifications">Certificates</Link>
            </li>

            <li className={`list ${pathname === "/projects" ? "active" : ""}`}>
              <Link href="/projects">Projects</Link>
            </li>

            <li className={`list ${pathname === "/contact" ? "active" : ""}`}>
              <Link href="/contact">Contact</Link>
            </li>

            <Button>resume</Button>
            
          </ul>
        </div>

      </div>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-lg font-medium">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/certifications" onClick={() => setOpen(false)}>Certificates</Link></li>
            <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
    )}

    </nav>
  );
}
