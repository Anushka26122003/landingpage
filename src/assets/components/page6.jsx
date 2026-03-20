// function Page6() {
//   return (
//     <div className="flex items-center gap-30 ">
//       <div>
//         <img
//           src="public/page6pic.jpg"
//           alt="pana"
//           className=" m-20 w-100 h-90 rounded-sm"
//         />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-4  ">
//         <p className="text-gray-600 text-lg">
//           Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
//           sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
//           Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
//           molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
//           molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
//           ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
//           turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
//           sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
//           neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
//           dignissim finibus ac sit amet magna.
//         </p>
//         <h1 className="text-2xl font-bold text-[#4CAF4F]/70">Tim Smith</h1>
//         <p className="text-gray-600 text-md">
//           British Dragon Boat Racing Association
//         </p>

//         <div className="flex items-center gap-50 mt-4">
//           {/* Left Side - Logos */}
//           <div className="flex gap-7 mt-5">
//             <img
//               src="/Logo (11).png"
//               alt="pic1"
//               className="w-14 h-14 rounded-sm"
//             />
//             <img src="/Logo3.png" alt="pic1" className="w-14 h-14 rounded-sm" />
//             <img src="/Logo7.png" alt="pic1" className="w-14 h-14 rounded-sm" />
//             <img src="/Logo5.png" alt="pic1" className="w-14 h-14 rounded-sm" />
//             <img
//               src="/Logo (9).png"
//               alt="pic1"
//               className="w-14 h-14 rounded-sm"
//             />
//             <img
//               src="/Logo (10).png"
//               alt="pic1"
//               className="w-14 h-14 rounded-sm"
//             />
//           </div>

//           <div className="flex items-center gap-2 mt-4">
//             <h1 className="font-bold text-3xl text-[#4CAF4F]/80 whitespace-nowrap">
//               Meet all customers
//             </h1>
//             <img
//               src="public/arrowpage6.png"
//               alt="pic1"
//               className="   w-10 mt-3 "
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Page6;


// function Page6() {
//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30 px-4 sm:px-8 md:px-12">
//       <div className="flex justify-center w-full md:w-auto">
//         <img
//           src="/page6pic.jpg"
//           alt="pana"
//           className="m-6 sm:m-12 md:m-20 w-64 sm:w-80 md:w-100 h-auto md:h-90 rounded-sm"
//         />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-4 text-center md:text-left">
//         <p className="text-gray-600 text-base sm:text-lg">
//           Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
//           sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
//           Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
//           molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
//           molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
//           ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
//           turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
//           sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
//           neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
//           dignissim finibus ac sit amet magna.
//         </p>
//         <h1 className="text-2xl font-bold text-[#4CAF4F]/70">Tim Smith</h1>
//         <p className="text-gray-600 text-md">
//           British Dragon Boat Racing Association
//         </p>

//         <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
//           {/* Logos */}
//           <img src="/Logo (11).png" alt="pic1" className="w-14 h-14 rounded-sm" />
//           <img src="/Logo3.png" alt="pic1" className="w-14 h-14 rounded-sm" />
//           <img src="/Logo7.png" alt="pic1" className="w-14 h-14 rounded-sm" />
//           <img src="/Logo5.png" alt="pic1" className="w-14 h-14 rounded-sm" />
//           <img src="/Logo (9).png" alt="pic1" className="w-14 h-14 rounded-sm" />
//           <img src="/Logo (10).png" alt="pic1" className="w-14 h-14 rounded-sm" />

//           {/* Meet all customers */}
//           <div className="flex items-center gap-2">
//             <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#4CAF4F]/80 whitespace-nowrap">
//               Meet all customers
//             </h1>
//             <img src="/arrowpage6.png" alt="pic1" className="w-10" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Page6;

import React, { useEffect, useRef } from "react";

function Page6() {
  const trackRef = useRef(null);

  const logos = [
    "/Logo (11).png",
    "/Logo3.png",
    "/Logo7.png",
    "/Logo5.png",
    "/Logo (9).png",
    "/Logo (10).png",
  ];

  // Duplicate for seamless infinite loop
  const allLogos = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.5;
    const singleSetWidth = track.scrollWidth / 2;

    const animate = () => {
      position += speed;
      if (position >= singleSetWidth) position = 0;
      track.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause  = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="
      w-full overflow-x-hidden
      flex flex-col lg:flex-row items-center
      px-4 py-10 gap-8
      sm:px-8 sm:py-12 sm:gap-10
      md:px-12 md:py-14 md:gap-12
      lg:px-20 lg:py-16 lg:gap-14
      xl:px-32 xl:py-20 xl:gap-16
      2xl:px-48
    ">

      {/* ── IMAGE ── */}
      <div className="flex justify-center items-center shrink-0 w-full lg:w-auto">
        <img
          src="/page6pic.jpg"
          alt="testimonial"
          className="
            object-cover rounded-lg
            w-64 h-64
            sm:w-80 sm:h-80
            md:w-96 md:h-96
            lg:w-[380px] lg:h-[400px]
            xl:w-[420px] xl:h-[440px]
            2xl:w-[460px] 2xl:h-[480px]
          "
        />
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className="
        flex flex-col text-center lg:text-left
        gap-3 px-2
        sm:gap-4 sm:px-4
        md:gap-4 md:px-0
        lg:gap-5
        max-w-xl lg:max-w-2xl xl:max-w-3xl
        mx-auto lg:mx-0 w-full
      ">

        {/* Quote */}
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales.
        </p>

        {/* Name */}
        <h1 className="font-bold text-[#4CAF4F]/70 text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
          Tim Smith
        </h1>

        {/* Title */}
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg -mt-1">
          British Dragon Boat Racing Association
        </p>

        {/* ── AUTO-SLIDING LOGO STRIP ── */}
        <div className="mt-3 sm:mt-4 w-full overflow-hidden relative">

          {/* Left fade */}
          <div
            className="absolute left-0 top-0 h-full w-10 sm:w-14 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 h-full w-10 sm:w-14 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-10 md:gap-12"
            style={{ width: "max-content", willChange: "transform" }}
          >
            {allLogos.map((src, i) => (
              <div key={i} className="flex items-center justify-center shrink-0">
                <img
                  src={src}
                  alt={`partner-${(i % logos.length) + 1}`}
                  className="
                    object-contain
                    h-7 w-auto
                    sm:h-9
                    md:h-10
                    lg:h-11
                    xl:h-12
                    max-w-[80px] sm:max-w-[100px] xl:max-w-[120px]
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Meet all customers CTA */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
          <span className="font-bold text-[#4CAF4F]/80 whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Meet all customers
          </span>
          <img
            src="/arrowpage6.png"
            alt="arrow"
            className="object-contain w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10"
          />
        </div>

      </div>
    </div>
  );
}

export default Page6;