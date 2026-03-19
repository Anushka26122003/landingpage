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

function Page3() {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-12">
      <div className="flex justify-center w-full md:w-auto">
        <img src="/rafiki.png" alt="rafiki" className="m-6 sm:m-12 md:m-30 w-64 sm:w-80 md:w-auto" />
      </div>
      <div className="max-w-3xl flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70">
          The unseen of spending three
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70">years at Pixelgrade</p>

        <p className="text-gray-600 text-base sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        <button className="bg-green-500  text-white font-semibold py-2 px-4 rounded-sm w-30 mx-auto md:mx-0">
          Learn More
        </button>
      </div>
    </div>
  );
}
export default Page3;