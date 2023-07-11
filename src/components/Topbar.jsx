import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-end h-4 mx-auto px-0 py-0 sm:px-40 text-sm text-[#71171e]">
      <ul className="hidden md:flex">
        <button className="p-4">Online Payments</button>
        <button className="p-4">Client Portal</button>
      </ul>
    </div>
  );
};

export default Topbar;
