"use client";

import { ArrowDown } from "lucide-react";

export default function Logo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[500px]">
      {/* Left Column */}
      <div className="bg-[#3D2A24] flex items-center justify-center p-4 sm:p-6 md:p-8 h-full">
        <img
          src="./Images/logo.png"
          alt="Dr Smile Logo"
          className="w-auto max-w-full h-3/5 object-contain"
        />
      </div>

      {/* Middle Column */}
      <div className="bg-gray-100 flex items-center justify-center h-full">
        <img
          src="./Images/L1.png"
          alt="Doctor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-between items-start px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 bg-white h-full text-left">
        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[33px] font-bold text-gray-900 leading-tight">
            Unlock your smile's potential
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-sm max-w-lg leading-relaxed">
            Enhance confidence and beauty with expert dental care at Dr Smile.
          </p>

          <a
            href="#"
            className="text-[#8B3D3D] font-medium hover:underline text-base sm:text-lg mt-2"
          >
            View More
          </a>
        </div>

        <div className="pt-6 w-full flex justify-start">
          <ArrowDown className="text-gray-500 w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
