import React from "react";
import img1 from "../img/SungaLogo.png";

const Navbar = () => {
  return (
    <div class="sticky top-0 w-[100%] z-30">
      <div class="bg-blue-500 relative h-20 text-white flex flex-row items-center">
        <div class="bg-white rounded-b-xl ml-10 p-2 size-24 drop-shadow-md flex justify-center items-center">
          <img class="size-14" src={img1} alt="" />
        </div>

        <div class="px-4">
          <div>
            <h1 class="text-sm font-light">SUNGA HOSPITAL</h1>
            <h2 class="text-xl font-semibold">
              INFORMATION AND ADMITTING SECTION DASHBOARD
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
