"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:opacity-90 transition"
        >
          🌐 NAATI<span className="text-sky-300">Prep</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link
            href="/"
            className="hover:text-sky-200 transition duration-300 hover:scale-[1.05]"
          >
            Home
          </Link>
          <Link
            href="/dialogues"
            className="hover:text-sky-200 transition duration-300 hover:scale-[1.05]"
          >
            Dialogues
          </Link>
          <Link
            href="/vocab"
            className="hover:text-sky-200 transition duration-300 hover:scale-[1.05]"
          >
            Vocabulary
          </Link>
          <Link
            href="/about"
            className="hover:text-sky-200 transition duration-300 hover:scale-[1.05]"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white/10 backdrop-blur-md border-t border-white/20 text-white text-center font-medium">
          <Link
            href="/"
            className="py-3 hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/dialogues"
            className="py-3 hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
          >
            Dialogues
          </Link>
          <Link
            href="/vocab"
            className="py-3 hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
          >
            Vocabulary
          </Link>
          <Link
            href="/about"
            className="py-3 hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
