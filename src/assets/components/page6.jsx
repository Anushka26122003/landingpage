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


function Page6() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30 px-4 sm:px-8 md:px-12">
      <div className="flex justify-center w-full md:w-auto">
        <img
          src="public/page6pic.jpg"
          alt="pana"
          className="m-6 sm:m-12 md:m-20 w-64 sm:w-80 md:w-100 h-auto md:h-90 rounded-sm"
        />
      </div>
      <div className="max-w-3xl flex flex-col gap-4 text-center md:text-left">
        <p className="text-gray-600 text-base sm:text-lg">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1 className="text-2xl font-bold text-[#4CAF4F]/70">Tim Smith</h1>
        <p className="text-gray-600 text-md">
          British Dragon Boat Racing Association
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          {/* Logos */}
          <img src="/Logo (11).png" alt="pic1" className="w-14 h-14 rounded-sm" />
          <img src="/Logo3.png" alt="pic1" className="w-14 h-14 rounded-sm" />
          <img src="/Logo7.png" alt="pic1" className="w-14 h-14 rounded-sm" />
          <img src="/Logo5.png" alt="pic1" className="w-14 h-14 rounded-sm" />
          <img src="/Logo (9).png" alt="pic1" className="w-14 h-14 rounded-sm" />
          <img src="/Logo (10).png" alt="pic1" className="w-14 h-14 rounded-sm" />

          {/* Meet all customers */}
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#4CAF4F]/80 whitespace-nowrap">
              Meet all customers
            </h1>
            <img src="public/arrowpage6.png" alt="pic1" className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page6;