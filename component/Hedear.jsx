"use client";

import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200 px-4 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="belle logo.png" alt="logo" className="h-16" />

        {/* <a href="/" className="text-black text-2xl mt-7" >خانه</a>
        <a href="/#card" className="text-black text-2xl mt-7">خدمات</a>
        <a href="/kala" className="text-black text-2xl mt-7">کالا</a> */}

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <input
            type="search"
            placeholder="جستجو..."
            className="w-48 h-10 rounded-2xl bg-gray-200 text-black px-3 text-center focus:outline-none focus:ring-2 focus:ring-[#74ea15] transition-all"
          />
          <button className="px-6 py-2 rounded-2xl bg-gradient-to-r from-[#871683] to-[#74ea15] text-white font-bold shadow-lg hover:scale-105 transition-transform">
            ثبت نام
          </button>
          <button className="px-6 py-2 rounded-2xl bg-gradient-to-r from-[#871683] to-[#74ea15] text-white font-bold shadow-lg hover:scale-105 transition-transform">
            ورود
          </button> */}
          <a href="/" className="text-black text-2xl mt-7" >خانه</a>
        <a href="/#card" className="text-black text-2xl mt-7">خدمات</a>
        <a href="/kala" className="text-black text-2xl mt-7">کالا</a>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-2">
          {/* <input
            type="text"
            placeholder="جستجو..."
            className="w-full h-10 rounded-2xl bg-gray-200 text-black px-3 text-center focus:outline-none focus:ring-2 focus:ring-[#74ea15] transition-all"
          />
          <button className="w-full px-6 py-2 rounded-2xl bg-gradient-to-r from-[#871683] to-[#74ea15] text-white font-bold shadow-lg hover:scale-105 transition-transform">
            ثبت نام
          </button>
          <button className="w-full px-6 py-2 rounded-2xl bg-gradient-to-r from-[#871683] to-[#74ea15] text-white font-bold shadow-lg hover:scale-105 transition-transform">
            ورود
          </button> */}
        <a href="/" className="text-black text-2xl mt-7" >خانه</a>
        <a href="/#card" className="text-black text-2xl mt-7">خدمات</a>
        <a href="/kala" className="text-black text-2xl mt-7">کالا</a>

        </div>
      )}
    </header>
  );
}

export default Header;
