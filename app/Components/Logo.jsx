"use client";

import { ArrowDown } from "lucide-react";

export default function Logo() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto lg:h-full">
      <div className="bg-[#3D2A24] flex items-center justify-center p-6 w-full h-60 md:h-96 lg:h-full">
        <img
          src="./Images/logo.png"
          alt="Dr Smile Logo"
          className="w-auto h-full object-contain"
        />
      </div>
      <div className="bg-gray-100 flex items-center justify-center w-full h-80 md:h-96 lg:h-full">
        <img
          src="./Images/L1.png"
          alt="Doctor"
          className="w-auto h-full bg-cover"
        />
      </div>
      <div className="flex flex-col justify-between items-start px-6 md:px-10 lg:px-16 py-10 bg-white w-full h-auto lg:h-full text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Unlock your smile’s potential
          </h1>

          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md">
            Enhance confidence and beauty with expert dental care at Dr Smile.
          </p>

          <a
            href="#"
            className="text-[#8B3D3D] font-medium hover:underline"
          >
            View More
          </a>
        </div>
        <div className="pt-6">
          <ArrowDown className="text-gray-500 w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
