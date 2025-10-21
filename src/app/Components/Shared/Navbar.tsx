"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-3 shadow-sm sticky top-0 z-50 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold flex items-center">
          <span className="text-black">Grid</span>
          <span className="text-blue-600">X</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5 text-sm text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/works" className="hover:text-blue-600 transition">
            Works
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Button (Desktop only) */}
        <button className="hidden md:block bg-gray-800 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
          Let’s talk
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 border-t border-gray-200 mt-2 py-3 space-y-4 text-center text-gray-700 font-medium backdrop-blur-md">
          <Link
            href="/"
            className="block hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/works"
            className="block hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Works
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
            Let’s talk
          </button>
        </div>
      )}
    </nav>
  );
}
