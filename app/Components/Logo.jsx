"use client";

import { ArrowDown } from "lucide-react";

export default function Logo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full h-1/2">
      <div className="bg-[#3D2A24] flex items-center justify-center p-4 sm:p-6 md:p-8 w-full h-48 sm:h-60 md:h-72 lg:h-full">
        <img
          src="./Images/logo.png"
          alt="Dr Smile Logo"
          className="w-auto max-w-full h-32 sm:h-40 md:h-48 lg:h-3/5 object-contain"
        />
      </div>

      <div className="bg-gray-100 flex items-center justify-center w-full h-64 sm:h-80 md:h-full lg:h-full">
        <img
          src="./Images/L1.png"
          alt="Doctor"
          className="w-full h-full object-cover lg:object-contain"
        />
      </div>

      <div className="flex flex-col justify-between items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 bg-white w-full h-auto lg:h-full text-left">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight sm:leading-snug">
            Unlock your smile's potential
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed">
            Enhance confidence and beauty with expert dental care at Dr Smile.
          </p>

          <a
            href="#"
            className="text-[#8B3D3D] font-medium hover:underline text-sm sm:text-base md:text-lg mt-2"
          >
            View More
          </a>
        </div>
        
        <div className="pt-4 sm:pt-6 md:pt-8 w-full flex justify-start">
          <ArrowDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}