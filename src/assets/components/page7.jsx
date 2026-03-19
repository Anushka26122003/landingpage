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
function Page7() {
  const texts = [
    "Creating Streamlined Safeguarding Processes with OneRen",
    "What are your safeguarding responsibilities and how can you manage them?",
    "Revamping the Membership Model with Triathlon Australia",
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 pb-24 sm:pb-28">
      <div>
        <h1 className="font-sans font-semibold tracking-normal text-center text-black/75 text-3xl sm:text-4xl md:text-5xl">
          Caring is the new marketing
        </h1>

        <p className="text-center mt-4 opacity-70 text-base px-4 sm:px-16 md:px-100">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's more.
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col sm:flex-row gap-16 sm:gap-6 md:gap-10 justify-center mt-10 items-center sm:items-stretch flex-wrap">
        {texts.map((text, index) => (
          <div key={index} className="relative w-72 sm:w-64 md:w-80">
            <img src="/image 18.png" alt="img1" className="w-full rounded-lg" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-64 sm:w-56 md:w-72 rounded-lg p-4 bg-white shadow-md">
              <p className="text-sm">{text}</p>

              <div className="flex items-center gap-2 mt-3">
                <h2 className="font-semibold text-green-500">Read more</h2>
                <img src="/image.png" alt="arrow" className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page7;