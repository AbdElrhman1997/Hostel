import React from "react";
import navImage from "../Assets/BV-with-Text.png";
const NavBar = () => {
  return (
    <nav className="p-3">
      <div className=" flex justify-between">
        <img src={navImage} alt="logo" className="h-16"></img>
        <div className="flex items-center">
          <div className="mr-8 text-xl">Call Us Today: 727-461-7695</div>
          <div className=" text-2xl  font-bold cursor-pointer">
            <div className="text-[#007DB9]">BOOK A ROOM</div>
            <div className=" h-[4px] bg-[#007DB9] w-auto mt-4"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
