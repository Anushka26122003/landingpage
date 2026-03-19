// function page4() {
//   return (
// <div className="flex justify-between items-center p-20 bg-[#F5F7FA]">      {/* Left Side Text */}
//       <div className="flex flex-col gap-4">
//         <h1 className="text-4xl font-semibold text-black/80">
//           Helping a local
//         </h1>
//         <h1 className="text-4xl font-semibold text-green-500/80">
//           business reinvent itself
//         </h1>
//         <p>We reached here with our hard work and dedication</p>
//       </div>

//       {/* Right Side Box */}
//      <div className="w-1/2 p-6">    
//         <div className="grid grid-cols-2 gap-10">
//           <div className="flex items-center gap-4">
//             <img src="/Icon4-1.png" alt="Members" />
//             <div>
//               <p className="font-bold">2,245,341</p>
//               <p>Members</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/Icon4-2.png" alt="Clubs" />
//             <div>
//               <p className="font-bold">46,328</p>
//               <p>Clubs</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/Icon4-3.png" alt="Event Bookings" />
//             <div>
//               <p className="font-bold">828,867</p>
//               <p>Event Bookings</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <img src="/Icon4-4.png" alt="Payments" />
//             <div>
//               <p className="font-bold">1,926,436</p>
//               <p>Payments</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default page4;

function page4() {
  return (
<div className="flex flex-col md:flex-row justify-between items-center p-6 sm:p-12 md:p-20 bg-[#F5F7FA] gap-10 md:gap-0">      {/* Left Side Text */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black/80">
          Helping a local
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-500/80">
          business reinvent itself
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>

      {/* Right Side Box */}
     <div className="w-full md:w-1/2 p-6">    
        <div className="grid grid-cols-2 gap-6 sm:gap-10">
          <div className="flex items-center gap-4">
            <img src="/Icon4-1.png" alt="Members" />
            <div>
              <p className="font-bold">2,245,341</p>
              <p>Members</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src="/Icon4-2.png" alt="Clubs" />
            <div>
              <p className="font-bold">46,328</p>
              <p>Clubs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src="/Icon4-3.png" alt="Event Bookings" />
            <div>
              <p className="font-bold">828,867</p>
              <p>Event Bookings</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src="/Icon4-4.png" alt="Payments" />
            <div>
              <p className="font-bold">1,926,436</p>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page4;
