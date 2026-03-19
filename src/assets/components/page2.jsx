  // import React from "react";
  // function Page2() {
  //   return (
  //     <div>
  //       <div>
  //         <h1 className="text-4xl font-bold text-center mt-10 text-black/80">
  //           Our Clients
  //         </h1>
  //         <p className="  text-center mt-4 opacity-70">
  //           We have been working with some Fortune 500+ clients
  //         </p>
  //       </div>

  //       <div className="flex flex-col-7 gap-45 mt-15     m-45">
  //         <img src="public/Logo2.png" alt="pic1" />
  //         <img src="public/Logo3.png" alt="pic2" />
  //         <img src="public/Logo4.png" alt="pic3" />
  //         <img src="public/Logo5.png" alt="pic4" />
  //         <img src="public/Logo (9).png" alt="pic6" />
  //         <img src="public/Logo (10).png" alt="pic7" />
  //       </div>
  //       <div>
  //         <h1 className="font-sans font-semibold tracking-normal text-center text-black/75 text-5xl">
  //           Manage your entire community
  //         </h1>
  //         <h1 className="ont-sans   text-5xl font-semibold text-center text-black/75">
  //           in a single system
  //         </h1>
  //         <p className="text-center mt-4 opacity-70 text-2xl">
  //           Who is Nextcent suitable for?
  //         </p>
  //       </div>

  //       <div className="flex justify-center gap-45 flex-wrap mt-10">
  //         {/* Card 1 */}
  //         <div className="w-64 h-64 p-4  text-center flex flex-col items-center justify-start">
  //           <img src="/Icon.png" alt="pic1" className="w-12 mb-3" />
  //           <p className="font-bold text-2xl opacity-70">Membership</p>
  //           <p className="font-bold text-2xl opacity-70">Organisations</p>
  //           <p className="text-sm mt-2 break-words      opacity-75">
  //             Our membership management software provides full automation of
  //             membership renewals and payments
  //           </p>
  //         </div>

  //         {/* Card 2 */}
  //         <div className="w-64 h-64 p-4   text-center flex flex-col items-center justify-start">
  //           <img src="/Icon.png" alt="pic1" className="w-12 mb-3" />
  //           <p className="font-bold text-2xl opacity-70">National</p>
  //           <p className="font-bold text-2xl opacity-70">Associations</p>
  //           <p className="text-sm mt-2 break-words opacity-75">
  //             Our membership management software provides full automation of
  //             membership renewals and payments
  //           </p>
  //         </div>

  //         {/* Card 3 */}
  //         <div className="w-64 h-64 p-4 text-center flex flex-col items-center justify-start">
  //           <img src="/Icon.png" alt="pic1" className="w-12 mb-3" />
  //           <p className="font-bold text-2xl opacity-70">Clubs And</p>
  //           <p className="font-bold text-2xl opacity-70">Groups</p>
  //           <p className="text-sm mt-2 break-words opacity-75">
  //             Our membership management software provides full automation of
  //             membership renewals and payments
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // export default Page2;
  

import React from "react";
function Page2() {
  return (
    <div className="px-4 sm:px-8 md:px-12 overflow-x-hidden">
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 text-black/80">
          Our Clients
        </h1>
        <p className="  text-center mt-4 opacity-70">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 mt-10 sm:mt-15 mx-4 sm:mx-10">
        <img src="public/Logo2.png" alt="pic1" className="h-8 sm:h-10 object-contain w-full" />
        <img src="public/Logo3.png" alt="pic2" className="h-8 sm:h-10 object-contain w-full" />
        <img src="public/Logo4.png" alt="pic3" className="h-8 sm:h-10 object-contain w-full" />
        <img src="public/Logo5.png" alt="pic4" className="h-8 sm:h-10 object-contain w-full" />
        <img src="public/Logo (9).png" alt="pic6" className="h-8 sm:h-10 object-contain w-full" />
        <img src="public/Logo (10).png" alt="pic7" className="h-8 sm:h-10 object-contain w-full" />
      </div>

      <div className="mt-10">
        <h1 className="font-sans font-semibold tracking-normal text-center text-black/75 text-3xl sm:text-4xl md:text-5xl">
          Manage your entire community
        </h1>
        <h1 className="ont-sans   text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black/75">
          in a single system
        </h1>
        <p className="text-center mt-4 opacity-70 text-lg sm:text-2xl">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex justify-center gap-8 sm:gap-16 md:gap-45 flex-wrap mt-10">
        {/* Card 1 */}
        <div className="w-56 sm:w-64 h-auto sm:h-64 p-4  text-center flex flex-col items-center justify-start">
          <img src="/Icon.png" alt="pic1" className="w-12 mb-3" />
          <p className="font-bold text-2xl opacity-70">Membership</p>
          <p className="font-bold text-2xl opacity-70">Organisations</p>
          <p className="text-sm mt-2 break-words      opacity-75">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-56 sm:w-64 h-auto sm:h-64 p-4   text-center flex flex-col items-center justify-start">
          <img src="/Icon.png" alt="pic1" className="w-12 mb-3" />
          <p className="font-bold text-2xl opacity-70">National</p>
          <p className="font-bold text-2xl opacity-70">Associations</p>
          <p className="text-sm mt-2 break-words opacity-75">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-56 sm:w-64 h-auto sm:h-64 p-4 text-center flex flex-col items-center justify-start">
          <img src="/Icon.png" alt="pic1" className="w-12 mb-3" />
          <p className="font-bold text-2xl opacity-70">Clubs And</p>
          <p className="font-bold text-2xl opacity-70">Groups</p>
          <p className="text-sm mt-2 break-words opacity-75">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
export default Page2;

