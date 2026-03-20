// function Page7() {
//   return (
//     <div>
//       <div>
//         <h1 className="font-sans font-semibold tracking-normal text-center text-black/75 text-5xl">
//           Caring is the new marketing
//         </h1>

//         <p className="text-center mt-4 opacity-70 text-base px-100">
//           The Nexcent blog is the best place to read about the latest membership
//           insights, trends and more. See who's joining the community, read about
//           how our community are increasing their membership income and lot's
//           more.​
//         </p>
//       </div>
//       <div className="">
        
//           <div className="relative w-80">
//             {/* Image */}
//             <img src="/image 18.png" alt="img1" className="w-full rounded-lg" />

//             {/* Overlapping Box */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-72  rounded-lg p-4 bg-white shadow-md">
//               <p className="text-sm">
//                 Creating Streamlined Safeguarding Processes with OneRen
//               </p>

//               <div className="flex items-center gap-2 mt-3">
//                 <h2 className="font-semibold text-green-500">Read more</h2>
//                 <img src="/image.png" alt="arrow" className="w-4 h-4" />
//               </div>
//             </div>
//           </div>
        
//          <div className="relative w-80">
//             {/* Image */}
//             <img src="/image 18.png" alt="img1" className="w-full rounded-lg" />

//             {/* Overlapping Box */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-72  rounded-lg p-4 bg-white shadow-md">
//               <p className="text-sm">
//                What are your safeguarding responsibilities and how can you manage them?
//               </p>

//               <div className="flex items-center gap-2 mt-3">
//                 <h2 className="font-semibold text-green-500">Read more</h2>
//                 <img src="/image.png" alt="arrow" className="w-4 h-4" />
//               </div>
//             </div>
//           </div>
//         <div className="relative w-80">
//             {/* Image */}
//             <img src="/image 18.png" alt="img1" className="w-full rounded-lg" />

//             {/* Overlapping Box */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-72  rounded-lg p-4 bg-white shadow-md">
//               <p className="text-sm">
//              Revamping the Membership Model with Triathlon Australia
//               </p>

//               <div className="flex items-center gap-2 mt-3">
//                 <h2 className="font-semibold text-green-500">Read more</h2>
//                 <img src="/image.png" alt="arrow" className="w-4 h-4" />
//               </div>
//             </div>
//           </div>
//       </div>
     
//     </div>
//   );
// }
//same code in short version 

// function Page7() {
//   const texts = [
//     "Creating Streamlined Safeguarding Processes with OneRen",
//     "What are your safeguarding responsibilities and how can you manage them?",
//     "Revamping the Membership Model with Triathlon Australia",
//   ];

//   return (
//     <div>
//       <div>
//         <h1 className="font-sans font-semibold tracking-normal text-center text-black/75 text-5xl">
//           Caring is the new marketing
//         </h1>

//         <p className="text-center mt-4 opacity-70 text-base px-100">
//           The Nexcent blog is the best place to read about the latest membership
//           insights, trends and more. See who's joining the community, read about
//           how our community are increasing their membership income and lot's more.
//         </p>
//       </div>

//       {/* Cards Row */}
//       <div className="flex gap-10 justify-center mt-10">
//         {texts.map((text, index) => (
//           <div key={index} className="relative w-80">
//             <img src="/image 18.png" alt="img1" className="w-full rounded-lg" />

//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-72 rounded-lg p-4 bg-white shadow-md">
//               <p className="text-sm">{text}</p>

//               <div className="flex items-center gap-2 mt-3">
//                 <h2 className="font-semibold text-green-500">Read more</h2>
//                 <img src="/image.png" alt="arrow" className="w-4 h-4" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page7;
//responsive code below 
// function Page7() {
//   const texts = [
//     "Creating Streamlined Safeguarding Processes with OneRen",
//     "What are your safeguarding responsibilities and how can you manage them?",
//     "Revamping the Membership Model with Triathlon Australia",
//   ];

//   return (
//     <div className="px-4 sm:px-8 md:px-12 pb-24 sm:pb-28">
//       <div>
//         <h1 className="font-sans font-semibold tracking-normal text-center text-black/75 text-3xl sm:text-4xl md:text-5xl">
//           Caring is the new marketing
//         </h1>

//         <p className="text-center mt-4 opacity-70 text-base px-4 sm:px-16 md:px-100">
//           The Nexcent blog is the best place to read about the latest membership
//           insights, trends and more. See who's joining the community, read about
//           how our community are increasing their membership income and lot's more.
//         </p>
//       </div>

//       {/* Cards Row */}
//       <div className="flex flex-col sm:flex-row gap-16 sm:gap-6 md:gap-10 justify-center mt-10 items-center sm:items-stretch flex-wrap">
//         {texts.map((text, index) => (
//           <div key={index} className="relative w-72 sm:w-64 md:w-80">
//             <img src="/image 18.png" alt="img1" className="w-full rounded-lg" />

//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-64 sm:w-56 md:w-72 rounded-lg p-4 bg-white shadow-md">
//               <p className="text-sm">{text}</p>

//               <div className="flex items-center gap-2 mt-3">
//                 <h2 className="font-semibold text-green-500">Read more</h2>
//                 <img src="/image.png" alt="arrow" className="w-4 h-4" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page7;

import React from "react";

function Page7() {
  const cards = [
    "Creating Streamlined Safeguarding Processes with OneRen",
    "What are your safeguarding responsibilities and how can you manage them?",
    "Revamping the Membership Model with Triathlon Australia",
  ];

  return (
    <div className="
      w-full overflow-x-hidden
      px-4 py-10
      sm:px-8 sm:py-12
      md:px-12 md:py-14
      lg:px-20 lg:py-16
      xl:px-32 xl:py-20
      2xl:px-48
    ">

      {/* ── HEADING ── */}
      <div className="text-center">
        <h1 className="
          font-sans font-semibold text-black/75
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
        ">
          Caring is the new marketing
        </h1>
        <p className="
          mt-3 sm:mt-4 opacity-70 leading-relaxed
          max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl
          mx-auto
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
        ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's more.
        </p>
      </div>

      {/* ── CARDS ──
          Mobile:       1 column stacked
          sm (540px):   2 columns
          lg (1024px):  3 columns side by side
          Each card has an image + floating text box pinned below it.
          We use padding-bottom on the card to make room for the floating box
          instead of `translate-y` which causes clipping issues.
      */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-16
        sm:gap-x-6 sm:gap-y-16
        md:gap-x-8 md:gap-y-20
        lg:gap-x-10 lg:gap-y-20
        xl:gap-x-12
        mt-10 sm:mt-12 md:mt-14 lg:mt-16
        /* bottom padding so floating cards don't get cut off */
        pb-10 sm:pb-12 md:pb-14
      ">
        {cards.map((text, index) => (
          <div key={index} className="relative w-full">

            {/* Card image */}
            <img
              src="/image 18.png"
              alt={`blog-${index + 1}`}
              className="w-full h-auto rounded-lg object-cover
                aspect-[4/3]
                sm:aspect-[3/2]
                md:aspect-[4/3]
              "
            />

            {/* Floating text box — sits half-below the image */}
            <div className="
              absolute
              left-1/2 -translate-x-1/2
              /* pushes below image */
              bottom-0 translate-y-[55%]
              /* width slightly narrower than card */
              w-[88%]
              bg-white rounded-lg shadow-md
              p-3 sm:p-4 md:p-4 lg:p-5
            ">
              <p className="
                text-gray-700 leading-snug
                text-xs
                sm:text-xs
                md:text-sm
                lg:text-sm
                xl:text-base
              ">
                {text}
              </p>

              <div className="flex items-center gap-1.5 mt-2 sm:mt-3">
                <span className="
                  font-semibold text-green-500
                  text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base
                ">
                  Read more
                </span>
                <img
                  src="/image.png"
                  alt="arrow"
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                />
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Page7;