'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShowcaseNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="
      overflow-hidden
      p-10
      rounded-[6px]
      top-5
      sticky
      md:mx-auto
      transform
      z-50
      xl:w-4/5
      2xl:w-[68%]
      bg-white
      flex
      items-center
      justify-between py-6
      px-4
      md:px-8
      mx-6"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-28"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex absolute right-1/2 translate-x-1/2 transform gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg">
        <Link href="/showcase" className="hover:text-blue-500">
          Gallery
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Services
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Process
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Guarantees
        </Link>
        <Link href="/about" className="hover:text-blue-500">
          About
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center gap-x-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✖</span> // Close Icon
          ) : (
            <span className="text-2xl">☰</span> // Hamburger Icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-4/5 h-full bg-white shadow-lg z-50 p-6 transition-transform transform translate-x-0"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-blue-500 text-lg mb-4"
          >
            ✖ Close
          </button>
          <nav className="flex flex-col gap-y-6 text-gray-700 font-medium">
            <Link href="/showcase" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Process
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Guarantees
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}

      {/* Call-to-Action Button */}
      <div className="hidden md:flex items-center gap-x-4">
        <Link
          href="/meeting"
          className="py-3 px-6
          text-lg
          hover:bg-[#abcbff]
          rounded-[6px]
          border-2
          border-black
          dark:border-white
          bg-[#121212]
          text-white
          transition
          duration-200
          hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
