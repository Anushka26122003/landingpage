// function Page5() {
//   return (
//     <div className="flex items-center  ">
//       <div>
//         <img src="public/pana.png" alt="pana" className=" m-30" />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-4 ">
//         <h1 className="text-4xl font-bold text-black/70">
//           How to design your site footer like 
//         </h1>
//         <p className="text-4xl font-bold text-black/70">we did</p>

//         <p className="text-gray-600 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           justo ipsum. Sed accumsan quam vitae est varius fringilla.
//           Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//           tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
//           Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
//           elementum pulvinar odio.
//         </p>

//         <button className="bg-green-500  text-white font-semibold py-2 px-4 rounded-sm w-30">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Page5;

// function Page5() {
//   return (
//     <div className="flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-12">
//       <div className="flex justify-center w-full md:w-auto">
//         <img src="/pana.png" alt="pana" className="m-6 sm:m-12 md:m-30 w-64 sm:w-80 md:w-auto" />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-4 text-center md:text-left">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70">
//           How to design your site footer like 
//         </h1>
//         <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70">we did</p>

//         <p className="text-gray-600 text-base sm:text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           justo ipsum. Sed accumsan quam vitae est varius fringilla.
//           Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//           tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
//           Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
//           elementum pulvinar odio.
//         </p>

//         <button className="bg-green-500  text-white font-semibold py-2 px-4 rounded-sm w-30 mx-auto md:mx-0">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Page5;

import React from "react";

function Page5() {
  return (
    <div className="
      w-full overflow-x-hidden
      flex flex-col lg:flex-row
      items-center
      /* Mobile */
      px-4 py-10 gap-6
      /* sm: Galaxy A51, Surface Duo */
      sm:px-8 sm:py-12 sm:gap-8
      /* md: iPad Mini, Z Fold unfolded */
      md:px-12 md:py-14 md:gap-10
      /* lg: Nest Hub, Surface Pro, iPad Pro */
      lg:px-20 lg:py-16 lg:gap-12
      /* xl: Nest Hub Max, Desktop */
      xl:px-32 xl:py-20 xl:gap-16
      /* 2xl: Wide desktop */
      2xl:px-48
    ">

      {/* ── IMAGE ── */}
      <div className="flex justify-center items-center shrink-0 w-full lg:w-auto">
        <img
          src="/pana.png"
          alt="pana"
          className="
            object-contain
            w-52 h-52
            sm:w-64 sm:h-64
            md:w-80 md:h-80
            lg:w-96 lg:h-96
            xl:w-[420px] xl:h-[420px]
            2xl:w-[480px] 2xl:h-[480px]
          "
        />
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className="
        flex flex-col
        text-center lg:text-left
        gap-3 px-2
        sm:gap-4 sm:px-4
        md:gap-5 md:px-0
        lg:gap-5
        max-w-xl lg:max-w-2xl xl:max-w-3xl
        mx-auto lg:mx-0
      ">

        {/* Heading */}
        <h1 className="
          font-bold text-black/70 leading-snug
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl
        ">
          How to design your site footer like we did
        </h1>

        {/* Body */}
        <p className="
          text-gray-600 leading-relaxed
          text-sm
          sm:text-base
          md:text-base
          lg:text-lg
          xl:text-xl
        ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        {/* Button */}
        <div className="flex justify-center lg:justify-start mt-1 sm:mt-2">
          <button className="
            bg-green-500 hover:bg-green-600
            text-white font-semibold
            rounded-sm transition-colors duration-150
            py-2 px-6
            sm:py-2.5 sm:px-7
            md:py-3 md:px-8
            text-sm
            sm:text-base
          ">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default Page5;


