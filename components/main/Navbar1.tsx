import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-full shadow-[#090979]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
    
        <div className="w-[800px] h-full flex flex-row items-center justify-center ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#About Us" className="cursor-pointer">
              About us
            </a>
            <a href="#Chapters" className="cursor-pointer">
              Chapters
            </a>
            <a href="#events" className="cursor-pointer">
              Evnets
            </a>
            <a href="#Contact Us" className="cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
