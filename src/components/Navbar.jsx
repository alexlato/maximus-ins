import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-16 py-16 sm:px-24 text-[#71171e]">
      <h1 className="w-full text-3xl font-bold text-[#71171e]">
        Maximus Insurance Inc.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Applications</li>
        <li className="p-4">Insurance</li>
        <li className="p-4">About</li>
        <li className="p-4">Support</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="px-16 py-16">
        <button className="bg-[#5a0715] w-[180px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
