// function Page8() {
//   return (
//  <div className="flex flex-col items-center mt-20">
//   <h1 className="text-6xl font-semibold max-w-2xl text-center">
//     Pellentesque suscipit fringilla libero eu.
//   </h1>

//   <button className="flex items-center gap-3 mt-10 font-semibold  text-white bg-[#4CAF4F] px-14 py-3 rounded">
//     Get a Demo
//     <img src="/image.png" alt="arrow" className="w-5 h-6 mt-2" />
//   </button>
// </div>
//   );
// }

// export default Page8;
//responsive code below:
// function Page8() {
//   return (
//  <div className="flex flex-col items-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-8">
//   <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold max-w-2xl text-center">
//     Pellentesque suscipit fringilla libero eu.
//   </h1>

//   <button className="flex items-center gap-3 mt-8 sm:mt-10 font-semibold  text-white bg-[#4CAF4F] px-8 sm:px-14 py-3 rounded">
//     Get a Demo
//     <img src="/image.png" alt="arrow" className="w-5 h-6 mt-2" />
//   </button>
// </div>
//   );
// }

// export default Page8;
import React from "react";

function Page8() {
  return (
    <div
      className="
      w-full overflow-x-hidden
      flex flex-col items-center text-center
      /* Mobile */
      px-4 py-12
      /* sm: Galaxy A51, Surface Duo */
      sm:px-8 sm:py-14
      /* md: iPad Mini, Z Fold unfolded */
      md:px-12 md:py-16
      /* lg: Nest Hub, Surface Pro, iPad Pro */
      lg:px-20 lg:py-20
      /* xl: Nest Hub Max, Desktop */
      xl:px-32 xl:py-24
      /* 2xl: Wide desktop */
      2xl:px-48
    "
    >
      {/* ── HEADING ── */}
      <h1
        className="
        font-semibold text-black/80 leading-snug
        max-w-xs
        sm:max-w-md
        md:max-w-xl
        lg:max-w-2xl
        xl:max-w-3xl
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
      "
      >
        Pellentesque suscipit fringilla libero eu.
      </h1>

      {/* ── BUTTON ── */}
      <button
        className="
        flex items-center gap-2
        font-semibold text-white
        bg-[#4CAF4F] hover:bg-[#43A047]
        transition-colors duration-150
        rounded
        /* Mobile */
        mt-8 px-8 py-2.5 text-sm
        /* sm */
        sm:mt-10 sm:px-10 sm:py-3 sm:text-base
        /* md */
        md:px-12 md:py-3 md:text-base
        /* lg */
        lg:mt-12 lg:px-14 lg:py-3.5 lg:text-lg
        /* xl */
        xl:px-16 xl:py-4 xl:text-xl
      "
      >
        Get a Demo
        <img
          src="/image.png"
          alt="arrow"
          className="
            object-contain
            w-4 h-4
            sm:w-5 sm:h-5
            lg:w-6 lg:h-6
          "
        />
      </button>
    </div>
  );
}

export default Page8;
