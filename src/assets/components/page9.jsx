// function Page9() {
//   return (
//     <div className="bg-[#263238] w-full max-w-[95rem] mx-auto py-16 px-40 flex gap-32 mt-20">
//       <div>
//         <img src="public/Logopage9.png" />
//         <p className="mt-10 text-white ">Copyright © 2020 Nexcent ltd.</p>
//         <p className="mt-2 text-white ">All rights reserved</p>
//         <div className="flex flex-col-4 gap-2 mt-10 ">
//           <img src="public/Social Icons.png" />
//           <img src="public/Socialicon2.png" />
//           <img src="public/SocialIcons3.png" />
//           <img src="public/SocialIcons4.png" />
//         </div>
//       </div>
//       <div className="flex gap-32  text-white">
//         <div>
//           <h1 className="text-2xl font-bold">Company</h1>
//           <ul className="mt-6 space-y-2">
//             <li>About us</li>
//             <li>Blog</li>
//             <li>Contact us</li>
//             <li>Pricing</li>
//             <li>Testimonials</li>
//           </ul>
//         </div>

//         <div>
//           <h1 className="text-2xl font-bold">Support</h1>
//           <ul className="mt-6 space-y-2">
//             <li>Help center</li>
//             <li>Terms of service</li>
//             <li>Legal</li>
//             <li>Privacy policy</li>
//             <li>Status</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <h1 className="text-4xl font-bold text-white ">Stay up to date</h1>
//         <div className="bg-gray-500 p-4 rounded-lg w-fit mt-10 flex items-center gap-2">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="bg-transparent text-white placeholder-white outline-none"
//           />
//           <img src="/Vector.png" alt="icon" className="w-4 h-4" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page9;
//responsive code below:

// function Page9() {
//   return (
//     <div className="bg-[#263238] w-full max-w-[95rem] mx-auto py-10 sm:py-14 md:py-16 px-6 sm:px-16 md:px-40 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-32 mt-10 sm:mt-16 md:mt-20">
//       <div>
//         <img src="/Logopage9.png" />
//         <p className="mt-10 text-white ">Copyright © 2020 Nexcent ltd.</p>
//         <p className="mt-2 text-white ">All rights reserved</p>
//         <div className="flex flex-col-4 gap-2 mt-10 ">
//           <img src="/Social Icons.png" />
//           <img src="/Socialicon2.png" />
//           <img src="/SocialIcons3.png" />
//           <img src="/SocialIcons4.png" />
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-32  text-white">
//         <div>
//           <h1 className="text-2xl font-bold">Company</h1>
//           <ul className="mt-6 space-y-2">
//             <li>About us</li>
//             <li>Blog</li>
//             <li>Contact us</li>
//             <li>Pricing</li>
//             <li>Testimonials</li>
//           </ul>
//         </div>

//         <div>
//           <h1 className="text-2xl font-bold">Support</h1>
//           <ul className="mt-6 space-y-2">
//             <li>Help center</li>
//             <li>Terms of service</li>
//             <li>Legal</li>
//             <li>Privacy policy</li>
//             <li>Status</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white ">Stay up to date</h1>
//         <div className="bg-gray-500 p-4 rounded-lg w-fit mt-10 flex items-center gap-2">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="bg-transparent text-white placeholder-white outline-none"
//           />
//           <img src="/Vector.png" alt="icon" className="w-4 h-4" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page9;

import React from "react";

function Page9() {
  const companyLinks = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];
  const supportLinks = ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"];
  const socialIcons  = [
    "/Social Icons.png",
    "/Socialicon2.png",
    "/SocialIcons3.png",
    "/SocialIcons4.png",
  ];

  return (
    <footer className="
      w-full bg-[#263238]
      /* Mobile */
      px-4 py-10
      /* sm: Galaxy A51, Surface Duo */
      sm:px-8 sm:py-12
      /* md: iPad Mini, Z Fold unfolded */
      md:px-12 md:py-14
      /* lg: Nest Hub, Surface Pro, iPad Pro */
      lg:px-20 lg:py-16
      /* xl: Nest Hub Max, Desktop */
      xl:px-32 xl:py-20
      /* 2xl: Wide desktop */
      2xl:px-48
    ">
      <div className="
        flex flex-col
        /* Stack on mobile/tablet, row on lg+ */
        lg:flex-row
        /* spacing */
        gap-10
        sm:gap-12
        lg:gap-10
        xl:gap-16
        2xl:gap-20
        /* align tops on desktop */
        lg:items-start
        lg:justify-between
      ">

        {/* ── COL 1: LOGO + COPYRIGHT + SOCIAL ── */}
        <div className="flex flex-col gap-4 shrink-0">
          <img
            src="/Logopage9.png"
            alt="Nexcent logo"
            className="
              object-contain w-auto
              h-8 sm:h-9 md:h-10 lg:h-10 xl:h-12
            "
          />
          <div className="mt-2">
            <p className="text-white text-sm sm:text-base opacity-80">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="text-white text-sm sm:text-base opacity-80 mt-1">
              All rights reserved
            </p>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-3 mt-2">
            {socialIcons.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`social-${i + 1}`}
                className="
                  object-contain cursor-pointer
                  hover:opacity-80 transition-opacity
                  w-7 h-7
                  sm:w-8 sm:h-8
                  md:w-8 md:h-8
                "
              />
            ))}
          </div>
        </div>

        {/* ── COL 2 & 3: NAV LINKS ── */}
        <div className="
          flex flex-row flex-wrap
          gap-10 sm:gap-14 md:gap-16 lg:gap-12 xl:gap-20
        ">
          {/* Company */}
          <div>
            <h2 className="
              font-bold text-white
              text-lg sm:text-xl md:text-xl lg:text-2xl
            ">
              Company
            </h2>
            <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li
                  key={link}
                  className="
                    text-white/70 cursor-pointer
                    hover:text-white transition-colors
                    text-sm sm:text-base
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="
              font-bold text-white
              text-lg sm:text-xl md:text-xl lg:text-2xl
            ">
              Support
            </h2>
            <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
              {supportLinks.map((link) => (
                <li
                  key={link}
                  className="
                    text-white/70 cursor-pointer
                    hover:text-white transition-colors
                    text-sm sm:text-base
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── COL 4: NEWSLETTER ── */}
        <div className="shrink-0">
          <h2 className="
            font-bold text-white
            text-xl
            sm:text-2xl
            md:text-2xl
            lg:text-3xl
            xl:text-4xl
          ">
            Stay up to date
          </h2>

          <div className="
            flex items-center gap-2
            bg-gray-600/60 hover:bg-gray-600/80
            transition-colors
            rounded-lg
            mt-5 sm:mt-6
            px-3 sm:px-4 py-2.5 sm:py-3
            w-full sm:w-72 md:w-80 lg:w-72 xl:w-80
          ">
            <input
              type="email"
              placeholder="Your email address"
              className="
                flex-1 min-w-0
                bg-transparent text-white
                placeholder-white/60
                outline-none
                text-sm sm:text-base
              "
            />
            <img
              src="/Vector.png"
              alt="subscribe"
              className="
                object-contain shrink-0 cursor-pointer
                hover:opacity-80 transition-opacity
                w-4 h-4 sm:w-5 sm:h-5
              "
            />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Page9;

