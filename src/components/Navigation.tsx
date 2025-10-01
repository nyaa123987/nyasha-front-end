"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <header className="px-[3%] sticky top-0 left-0 right-0 z-[100] bg-[#1C0C4E] text-[#FFFFFF] shadow-md flex justify-center md:justify-between items-center">
      
      <div className="hidden md:flex h-16 justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          N.Z.
        </Link>
      </div>

      <div className="flex justify-center items-center space-x-4 md:space-x-8 text-[12px] md:text-lg md:font-medium">
        <Link href="/" className="hover:underline active:opacity-[0.5]">Home</Link>
        <Link href="/about" className="hover:underline active:opacity-[0.5]">About</Link>
        <Link href="/certifications" className="hover:underline active:opacity-[0.5]">Certificates</Link>
        <Link href="/projects" className="hover:underline active:opacity-[0.5]">Projects</Link>
        <Link href="/contact" className="hover:underline active:opacity-[0.5]">Contact</Link>
      </div>
      
      <button className="hidden md:flex items-center">
        <a
          href="/Nyasha-Zimbudzana-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="capitalize cursor-pointer text-[12px] md:text-xl px-2 py-1 md:px-4 md:py-2 bg-white text-[#7B1FEA] rounded shadow-lg hover:bg-[#7B1FEA] hover:text-white transition active:opacity-[0.5]"
        >
          resume
        </a>
      </button>

    </header>
  );
}
