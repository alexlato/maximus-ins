import React from "react";
import { AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="flex justify-end h-8 mx-auto sm:px-72 border-b text-sm text-[#000000]">
      <ul className="hidden md:flex">
        <a
          className="flex items-center p-4 border-l border-r"
          href="https://www.securevcheck.com/insurance.php?id=maximusinsuranceagency"
        >
          <AiOutlineShoppingCart size={20} />
          Online Payments
        </a>
        <a
          className="flex items-center p-4 border-r"
          href="https://portal.csr24.com/mvc/3084055"
        >
          <AiOutlineLogin size={20} />
          Client Portal
        </a>
      </ul>
    </div>
  );
};

export default Topbar;
