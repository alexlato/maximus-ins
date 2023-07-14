import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 md:text-xl sm:text-lg">
          Your local Massapequa Independent Insurance Agency
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py6">
          We've got you Protected.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-lg font-bold py-4">
            Fast, reliable insurance for
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-lg font-bold py-4 pl-2"
            strings={[
              "Auto",
              "Home",
              "Personal",
              "Business",
              "Trucking",
              "Contracting",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className="md:flex justify-evenly items-center h-24 p-8 px-8 py-8 mx-auto">
          <button className="sm:px-12 text-md font-medium text-white border-2 border-red-950 bg-red-950 px-2 py-2 rounded-md hover:text-red-950 group relative flex items-center overflow-hidden">
            <span className="absolute left-0 w-full h-0 transition-all bg-white opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
            <span class="relative">Get Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
