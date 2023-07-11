import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-16 py-16 sm:px-24  text-[#71171e]">
      <h1 className="w-full text-2xl text-[#71171e]">
        Maximus Insurance Agency Inc.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 flex items-center">Applications</li>
        <li className="p-4 flex items-center">
          Insurance <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex items-center">
          About <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex items-center">
          Support <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex items-center">Contact</li>
      </ul>
      <div className="hidden md:flex px-16 py-16">
        <button className="bg-[#5a0715] w-[180px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get a Quote
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-black-400 bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 flex justify-center border-b border-black-400">
          Applications <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex justify-center border-b border-black-400">
          Insurance <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex justify-center border-b border-black-400">
          About <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex justify-center border-b border-black-400">
          Support <RiArrowDropDownLine size={20} />
        </li>
        <li className="p-4 flex justify-center border-b border-black-400">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
