import React from "react";
import { FaFacebookF, FaTwitter, FaLocationDot } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";

const MenuBar = () => {
  return (
    <div className="my-4 flex">
      <ul className="flex justify-between w-4/5 pl-8">
        <li className="relative ">
          <div className="text-[#666] hover:text-[#0077B1] flex items-center test">
            <a href="#">Rooms & Suites</a>
            <RiArrowDownSFill />
          </div>
          <div className="absolute top-6 -left-8 shadow-lg py-2 px-4 min-w-[200px] hidden">
            <div>
              <a href="#">Option 1</a>
            </div>
            <div>
              <a href="#">Option 2</a>
            </div>
          </div>
        </li>
        <li className="relative">
          <a href="#" className=" text-[#666] hover:text-[#0077B1]">
            Photo Gallery
          </a>
        </li>
        <li className="relative">
          <a href="#" className=" text-[#666] hover:text-[#0077B1]">
            Specials
          </a>
        </li>
        <li className="relative">
          <div className="text-[#666] hover:text-[#0077B1] flex items-center test test">
            <a href="#">Amenities</a>
            <RiArrowDownSFill />
          </div>
          <div className="absolute top-6 -left-8 shadow-lg py-2 px-4 min-w-[200px] hidden">
            <div>
              <a href="#">Option 1</a>
            </div>
            <div>
              <a href="#">Option 2</a>
            </div>
          </div>
        </li>
        <li className="relative">
          <div className="text-[#666] hover:text-[#0077B1] flex items-center test">
            <a href="#">Groups & Events</a>
            <RiArrowDownSFill />
          </div>
          <div className="absolute top-6 -left-8 shadow-lg py-2 px-4 min-w-[200px] hidden">
            <div>
              <a href="#">Option 1</a>
            </div>
            <div>
              <a href="#">Option 2</a>
            </div>
          </div>
        </li>
        <li className="relative">
          <div className="text-[#666] hover:text-[#0077B1] flex items-center test">
            <a href="#">Hotel News</a>
            <RiArrowDownSFill />
          </div>
          <div className="absolute top-6 -left-8 shadow-lg py-2 px-4 min-w-[200px] hidden">
            <div>
              <a href="#">Option 1</a>
            </div>
            <div>
              <a href="#">Option 2</a>
            </div>
          </div>
        </li>
        <li className="relative">
          <div className="text-[#666] hover:text-[#0077B1] flex items-center test">
            <a href="#">Area Guide</a>
            <RiArrowDownSFill />
          </div>
          <div className="absolute top-6 -left-8 shadow-lg py-2 px-4 min-w-[200px] hidden">
            <div>
              <a href="#">Option 1</a>
            </div>
            <div>
              <a href="#">Option 2</a>
            </div>
          </div>
        </li>
        <li className="relative">
          <a href="#" className=" text-[#666] hover:text-[#0077B1]">
            Ck's Eats & Drinks
          </a>
        </li>
      </ul>
      <div className=" flex justify-center w-1/5 gap-x-8">
        <FaFacebookF className="text-[#008480] text-xl hover:text-[#0077B1] cursor-pointer" />
        <FaTwitter className="text-[#008480] text-xl hover:text-[#0077B1] cursor-pointer" />
        <ImLocation className="text-[#008480] text-xl hover:text-[#0077B1] cursor-pointer" />
      </div>
    </div>
  );
};

export default MenuBar;
