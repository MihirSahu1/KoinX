"use client";
import Image from "next/image";
import React, { useState } from "react";
import {  MdClose } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#FFFFFF] border-custom-gray shadow-custom-bottom sm:h-[80px] h-[60px] flex flex-row items-center justify-between sm:pl-[56px] sm:pr-[56px] pl-[24px] pr-[24px] w-full">
      <div className="cursor-pointer">
        <Image
          src="/KoinXWeb.svg"
          alt="KoinX"
          width={96}
          height={24}
          className="max-sm:hidden"
        />
        <Image
          src="/KoinXWeb.svg"
          alt="KoinX"
          width={81}
          height={20.25}
          className="sm:hidden"
        />
      </div>
      <div className="flex flex-row gap-[45px] max-sm:hidden">
        <div className="flex flex-row gap-[32px] items-center">
          {" "}
          <div className="text-[16px] font-[600] leading-[19.36px] cursor-pointer">
            Crypto Taxes
          </div>
          <div className="text-[16px] font-[600] leading-[19.36px] cursor-pointer">
            Free Tools
          </div>
          <div className="text-[16px] font-[600] leading-[19.36px] cursor-pointer">
            Resource Center
          </div>
        </div>
        <div className="p-[8px] text-[16px] text-[#FFFFFF] font-[600] leading-[19.36px] rounded-[8px] bg-custom-gradient h-[40px] w-[136px] flex justify-center items-center cursor-pointer">
          Get Started
        </div>
      </div>
      <div className="sm:hidden">
        <Image
          onClick={toggleMenu}
          src="/Nav/menu.svg"
          alt="Menu"
          width={27}
          height={27}
        />
      </div>
      {isMenuOpen && (
        <div className={`fixed top-0 left-0 right-0 bg-white transition-transform duration-500 ease-in-out min-h-[245px] ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} z-50`}>
        <button
            className="fixed right-2  block p-2 text-2xl text-slate-800 md:hidden "
            onClick={toggleMenu}
          >
            <MdClose />
          </button>
          <div className="flex flex-col sm:flex-row gap-[32px] items-center p-[24px] sm:p-0">
            <div className="text-[16px] font-[600] leading-[19.36px] cursor-pointer">
              Crypto Taxes
            </div>
            <div className="text-[16px] font-[600] leading-[19.36px] cursor-pointer">
              Free Tools
            </div>
            <div className="text-[16px] font-[600] leading-[19.36px] cursor-pointer">
              Resource Center
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-[8px] text-[16px] text-[#FFFFFF] font-[600] leading-[19.36px] rounded-[8px] bg-custom-gradient h-[40px] w-[136px] flex justify-center items-center cursor-pointer">
              Get Started
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
