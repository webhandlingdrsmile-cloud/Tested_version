"use client";

import { ArrowDown } from "lucide-react";

export default function Logo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 h-full">
      {/* Left Section - Brown Background with Logo */}
      <div className="bg-[#3D2A24] flex items-center justify-center p-6">
        <img
          src="./Images/logo.png" // replace with your logo path
          alt="Dr Smile Logo"
          className="w-32 md:w-40"
        />
      </div>

      {/* Middle Section - Doctor Image */}
      <div className="bg-gray-100 flex items-center justify-center">
        <img
          src="./Images/L1.png" // replace with your doctor image path
          alt="Doctor"
          className="h-full object-cover"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="flex flex-col justify-center items-start px-8 md:px-12 bg-white text-left gap-4">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
    Unlock your smile’s potential
  </h1>

  <p className="text-gray-600 text-sm md:text-base max-w-md">
    Enhance confidence and beauty with expert dental care at Dr Smile.
  </p>

  <a
    href="#"
    className="text-[#8B3D3D] font-medium hover:underline"
  >
    View More
  </a>

  {/* Arrow Down at Bottom */}
  <div className="flex justify-start pt-6">
    <ArrowDown className="text-gray-500 w-6 h-6 animate-bounce" />
  </div>
</div>

    </section>
  );
}
