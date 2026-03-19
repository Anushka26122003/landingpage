// function Page9() {
//   return (
//     <div className="bg-[#263238] w-full max-w-[95rem] mx-auto py-16 px-40 flex gap-32 mt-20">
//       <div>
//         <img src="public/Logopage9.png" />
//         <p className="mt-10 text-white ">Copyright © 2020 Nexcent ltd.</p>
//         <p className="mt-2 text-white ">All rights reserved</p>
//         <div className="flex flex-col-4 gap-2 mt-10 ">
//           <img src="public/Social Icons.png" />
//           <img src="public/Socialicon2.png" />
//           <img src="public/SocialIcons3.png" />
//           <img src="public/SocialIcons4.png" />
//         </div>
//       </div>
//       <div className="flex gap-32  text-white">
//         <div>
//           <h1 className="text-2xl font-bold">Company</h1>
//           <ul className="mt-6 space-y-2">
//             <li>About us</li>
//             <li>Blog</li>
//             <li>Contact us</li>
//             <li>Pricing</li>
//             <li>Testimonials</li>
//           </ul>
//         </div>

//         <div>
//           <h1 className="text-2xl font-bold">Support</h1>
//           <ul className="mt-6 space-y-2">
//             <li>Help center</li>
//             <li>Terms of service</li>
//             <li>Legal</li>
//             <li>Privacy policy</li>
//             <li>Status</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <h1 className="text-4xl font-bold text-white ">Stay up to date</h1>
//         <div className="bg-gray-500 p-4 rounded-lg w-fit mt-10 flex items-center gap-2">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="bg-transparent text-white placeholder-white outline-none"
//           />
//           <img src="/Vector.png" alt="icon" className="w-4 h-4" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page9;
//responsive code below:

function Page9() {
  return (
    <div className="bg-[#263238] w-full max-w-[95rem] mx-auto py-10 sm:py-14 md:py-16 px-6 sm:px-16 md:px-40 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-32 mt-10 sm:mt-16 md:mt-20">
      <div>
        <img src="public/Logopage9.png" />
        <p className="mt-10 text-white ">Copyright © 2020 Nexcent ltd.</p>
        <p className="mt-2 text-white ">All rights reserved</p>
        <div className="flex flex-col-4 gap-2 mt-10 ">
          <img src="public/Social Icons.png" />
          <img src="public/Socialicon2.png" />
          <img src="public/SocialIcons3.png" />
          <img src="public/SocialIcons4.png" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-32  text-white">
        <div>
          <h1 className="text-2xl font-bold">Company</h1>
          <ul className="mt-6 space-y-2">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Support</h1>
          <ul className="mt-6 space-y-2">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white ">Stay up to date</h1>
        <div className="bg-gray-500 p-4 rounded-lg w-fit mt-10 flex items-center gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent text-white placeholder-white outline-none"
          />
          <img src="/Vector.png" alt="icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Page9;
