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

import React, { useState } from "react";
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

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-3 py-4 relative">
        <div>
          <img src="public/logo.png" alt="Logo" />
        </div>

        {/* Nav links - hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex items-center gap-[70px] absolute left-1/2 -translate-x-1/2">
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

          {/* Hamburger button - only visible on small screens */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black block"></span>
            <span className="w-6 h-0.5 bg-black block"></span>
            <span className="w-6 h-0.5 bg-black block"></span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-md">
          <p>Home</p>
          <p>Service</p>
          <p>Feature</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
      )}

      {/* Content */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center px-20 gap-10">
        <div className="flex-2 text-center lg:text-left">
          <div className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold opacity-70">
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
          <img
            src="/Illustration.png"
            className="w-full h-auto"
            alt="Illustration"
          />
        </div>
      </div>

      <div>
        <Page2 />
      </div>
      <div>
        <Page3 />
      </div>
      <div>
        <Page4 />
      </div>
      <div>
        <Page5 />
      </div>
      <div>
        <Page6 />
      </div>
      <div>
        <Page7 />
      </div>
      <div>
        <Page8 />
      </div>
      <div>
        <Page9 />
      </div>
    </div>
  );
}

export default MinimalPageLanding;
