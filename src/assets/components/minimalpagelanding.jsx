/*import React from "react";

function MinimalPageLanding() {
  return (
    <div>
      <nav className="flex items-center justify-between px-3 py-4 relative">
        <div>
          <img src="public/logo.png" alt="Logo" />
        </div>
        <div className="flex items-center gap-[70px] absolute left-1/2 -translate-x-1/2">
          <p>Home</p>
          <p>Service</p>
          <p>Feature</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>

        <div className="flex items-center gap-[20px]">
          <p className="text-green-500">Login</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
      </nav>
      /* content  */

/*<div className="w-full min-h-screen flex items-center      px-20">
        <div className="flex-2">
          <div className="text-7xl font-mono font-bold opacity-70 ">
            <h1>Lessons and insights</h1>
            <h1 className="text-[#4CAF4F]">from 8 years</h1>
          </div>
          <p className="mt-5 opacity-70">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="rounded-sm mt-3 py-3 px-8 bg-[#4CAF4F] text-white">
            Register
          </button>
        </div>

        <div className="flex-1">
          <img src="/Illustration.png" className="w-full" alt="Illustration" />
        </div>
      </div>
    </div>
  );
}

export default MinimalPageLanding;*/
import React, { useState, useEffect } from "react";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";

function MinimalPageLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-x-hidden">

      <nav
        className={`
          w-full fixed top-0 left-0 z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}
        `}
      >
        <div
          className="
            w-full flex items-center justify-between
            px-4 py-2.5
            sm:px-6 sm:py-3
            md:px-8 md:py-3
            lg:px-10 lg:py-3.5
            xl:px-16 xl:py-4
            2xl:px-24
          "
        >

          {/* ── LOGO ── */}
          <div className="shrink-0">
            <img
              src="public/logo.png"
              alt="Logo"
              className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 w-auto object-contain"
            />
          </div>

          {/* ── NAV LINKS (desktop only) ── */}
          <ul
            className="
              hidden md:flex flex-1 items-center justify-evenly
              mx-2 lg:mx-4 xl:mx-8
              list-none p-0 m-0
            "
          >
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="
                    cursor-pointer font-medium text-gray-700
                    hover:text-green-500 transition-colors duration-150
                    whitespace-nowrap no-underline
                    text-[11px] lg:text-xs xl:text-sm 2xl:text-base
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* ── AUTH BUTTONS ── */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* ✅ LOGIN — always visible on the page (all screen sizes) */}
            <a
              href="#"
              className="
                text-green-500 font-medium cursor-pointer
                whitespace-nowrap no-underline
                hover:text-green-600 transition-colors
                text-xs
                sm:text-[11px]
                md:text-xs
                lg:text-sm
                xl:text-base
              "
            >
              Login
            </a>

            {/* SIGN UP — always visible */}
            <button
              className="
                bg-green-500 hover:bg-green-600
                text-white font-medium rounded-md
                transition-colors duration-150 whitespace-nowrap
                px-3 py-1.5 text-xs
                sm:px-3.5 sm:py-1.5 sm:text-[11px]
                md:px-4 md:py-2 md:text-xs
                lg:px-5 lg:py-2 lg:text-sm
                xl:px-6 xl:text-sm
              "
            >
              Sign up
            </button>

            {/* HAMBURGER — mobile only (< 768px) */}
            <button
              className="
                md:hidden flex flex-col justify-center items-center
                gap-[5px] w-9 h-9 rounded-md
                hover:bg-gray-100 transition-colors
                focus:outline-none focus:ring-2 focus:ring-green-400
              "
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-250 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-250 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-250 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>

          </div>
        </div>

        {/* ── MOBILE DROPDOWN — nav links ONLY, login is already visible in navbar ── */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
            bg-white border-t border-gray-100 shadow-lg
          `}
        >
          <ul className="list-none p-0 m-0 py-2">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="
                    block px-6 py-3
                    sm:px-8 sm:py-3.5
                    text-sm text-gray-700
                    hover:bg-green-50 hover:text-green-600
                    transition-colors duration-150 no-underline
                  "
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer to offset fixed navbar */}
      <div className="h-[52px] sm:h-[56px] md:h-[60px] lg:h-[64px] xl:h-[68px]" />

      {/* ── HERO SECTION ── */}
      <div
        className="
          w-full min-h-[80vh]
          flex flex-col lg:flex-row items-center
          px-6 py-10 gap-8
          sm:px-10 sm:py-12 sm:gap-10
          md:px-14 md:py-14
          lg:px-16 lg:py-0
          xl:px-24
          2xl:px-32
        "
      >
        <div className="flex-1 lg:flex-[2] text-center lg:text-left">
          <div className="font-mono font-bold opacity-70 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h1>Lessons and insights</h1>
            <h1 className="text-[#4CAF4F]">from 8 years</h1>
          </div>
          <p className="mt-4 opacity-70 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-5 bg-[#4CAF4F] hover:bg-[#43A047] text-white rounded-sm transition-colors py-2.5 px-7 text-sm sm:py-3 sm:px-8 sm:text-base">
            Register
          </button>
        </div>

        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
          <img src="/Illustration.png" className="w-full h-auto object-contain" alt="Illustration" />
        </div>
      </div>

      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
    </div>
  );
}

export default MinimalPageLanding;
