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
function Page8() {
  return (
 <div className="flex flex-col items-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-8">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold max-w-2xl text-center">
    Pellentesque suscipit fringilla libero eu.
  </h1>

  <button className="flex items-center gap-3 mt-8 sm:mt-10 font-semibold  text-white bg-[#4CAF4F] px-8 sm:px-14 py-3 rounded">
    Get a Demo
    <img src="/image.png" alt="arrow" className="w-5 h-6 mt-2" />
  </button>
</div>
  );
}

export default Page8;