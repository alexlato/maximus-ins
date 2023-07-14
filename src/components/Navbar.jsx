import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center h-24 mx-auto sm:px-24 text-[#000000]">
      <header className="container mx-auto flex items-center justify-center">
        <a href="/" className="text-xl px-24">
          Maximus Insurance Agency Inc.
        </a>
        <ul className="hidden md:flex">
          <li className="relative group px-3 py-2">Applications</li>
          <li class="relative group px-3 py-2">
            <button class="flex hover:opacity-50 cursor-default">
              Insurance <RiArrowDropDownLine size={24} />{" "}
            </button>
            <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform ">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full border border-black">
                {/* <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm border border-blue-400"></div> */}
                <div class="relative z-10">
                  <ul class="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Auto, Home, & Personal
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Trucking
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Contractor
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2">
            <button class="flex hover:opacity-50 cursor-default">
              About <RiArrowDropDownLine size={24} />{" "}
            </button>
            <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full border border-black">
                {/* <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div> */}
                <div class="relative z-10">
                  <ul class="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Our Insurance Carriers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Meet Our Staff
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2">
            <button class="flex hover:opacity-50 cursor-default">
              Support <RiArrowDropDownLine size={24} />{" "}
            </button>
            <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full border border-black">
                {/* <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div> */}
                <div class="relative z-10">
                  <ul class="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Online Billing & Payments
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        File a Claim
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Auto Card ID Request
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-black hover:text-red-500 py-1 block"
                      >
                        Certificate of Insurance Request
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">Contact</li>
        </ul>
        <div className="hidden md:flex justify-evenly items-center h-24 p-8 px-8 py-8 mx-auto">
          <button className="sm:px-12 text-md font-medium text-red-950 border-2 border-red-950 px-2 py-2 rounded-md hover:text-white group relative flex items-center overflow-hidden">
            <span className="absolute left-0 w-full h-0 transition-all bg-red-950 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
            <span class="relative">Get Quote</span>
          </button>
        </div>
        <div onClick={handleNav} className="block md:hidden p-12">
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
            Applications
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
      </header>
    </div>
  );
};

export default Navbar;
