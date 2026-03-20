// function Page3() {
//   return (
//     <div className="flex items-center  ">
//       <div>
//         <img src="/rafiki.png" alt="rafiki" className=" m-30" />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-4 ">
//         <h1 className="text-4xl font-bold text-black/70">
//           The unseen of spending three
//         </h1>
//         <p className="text-4xl font-bold text-black/70">years at Pixelgrade</p>

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
// export default Page3;

// function Page3() {
//   return (
//     <div className="flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-12">
//       <div className="flex justify-center w-full md:w-auto">
//         <img src="/rafiki.png" alt="rafiki" className="m-6 sm:m-12 md:m-30 w-64 sm:w-80 md:w-auto" />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-4 text-center md:text-left">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70">
//           The unseen of spending three
//         </h1>
//         <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70">years at Pixelgrade</p>

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
// export default Page3;
// function Page3() {
//   return (
//     <div className="flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-6 sm:py-10 md:py-14 lg:py-20">
//       <div className="flex justify-center w-full md:w-auto shrink-0">
//         <img src="/rafiki.png" alt="rafiki" className="m-4 sm:m-8 md:m-16 lg:m-24 w-56 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] object-contain" />
//       </div>
//       <div className="max-w-3xl flex flex-col gap-3 sm:gap-4 md:gap-5 text-center md:text-left px-2 sm:px-4 md:px-0">
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black/70 leading-snug">
//           The unseen of spending three
//         </h1>
//         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black/70 leading-snug">years at Pixelgrade</p>

//         <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           justo ipsum. Sed accumsan quam vitae est varius fringilla.
//           Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
//           tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
//           Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
//           elementum pulvinar odio.
//         </p>

//         <button className="bg-green-500 text-white font-semibold py-2 px-5 sm:px-6 rounded-sm w-fit mx-auto md:mx-0 text-sm sm:text-base mt-1 sm:mt-2">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Page3;

import React from "react";

function Page3() {
  return (
    <div className="
      w-full overflow-x-hidden
      flex flex-col lg:flex-row
      items-center
      /* Mobile */
      px-4 py-10 gap-6
      /* sm: Galaxy A51, Surface Duo */
      sm:px-8 sm:py-12 sm:gap-8
      /* md: iPad Mini, Galaxy Z Fold unfolded */
      md:px-12 md:py-14 md:gap-10
      /* lg: Nest Hub, Surface Pro, iPad Pro */
      lg:px-20 lg:py-16 lg:gap-12
      /* xl: Nest Hub Max, Desktop */
      xl:px-32 xl:py-20 xl:gap-16
      /* 2xl: Wide desktop */
      2xl:px-48
    ">

      {/* ── IMAGE ── */}
      <div className="flex justify-center items-center shrink-0
        w-full lg:w-auto
      ">
        <img
          src="/rafiki.png"
          alt="rafiki"
          className="
            object-contain
            /* Mobile phones */
            w-52 h-52
            /* sm: Galaxy A51 / Surface Duo */
            sm:w-64 sm:h-64
            /* md: iPad Mini / Z Fold unfolded */
            md:w-80 md:h-80
            /* lg: Nest Hub / iPad Pro / Surface Pro */
            lg:w-96 lg:h-96
            /* xl: Nest Hub Max / Desktop */
            xl:w-[420px] xl:h-[420px]
            /* 2xl */
            2xl:w-[480px] 2xl:h-[480px]
          "
        />
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className="
        flex flex-col
        text-center lg:text-left
        /* Mobile */
        gap-3 px-2
        /* sm */
        sm:gap-4 sm:px-4
        /* md */
        md:gap-5 md:px-0
        /* lg+ */
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
          The unseen of spending three years at Pixelgrade
        </h1>

        {/* Body text */}
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
            lg:text-base
          ">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default Page3;