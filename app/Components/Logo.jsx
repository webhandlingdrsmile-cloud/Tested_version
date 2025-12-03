"use client";

import { ArrowDown } from "lucide-react";

export default function Logo() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Aspect ratio container */}
      <div className="relative w-full">
        {/* Desktop Layout - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 w-full min-h-[300px] lg:min-h-[400px]">
          {/* Left Column */}
          <div className="bg-[#3D2A24] flex items-center justify-center p-6 lg:p-8 h-full aspect-[4/3] md:aspect-auto">
            <img
              src="./Images/logo.png"
              alt="Dr Smile Logo"
              className="w-auto h-auto max-h-[70%] max-w-[80%] object-contain"
            />
          </div>

          {/* Middle Column - Image */}
          <div className="bg-gray-100 h-full aspect-[3/4] md:aspect-auto">
            <img
              src="./Images/L1.png"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between items-start p-6 lg:p-8 xl:p-12 bg-white h-full">
            <div className="flex flex-col gap-4 lg:gap-6 w-full">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                Unlock your smile's potential
              </h1>

              <p className="text-gray-600 text-base lg:text-lg max-w-md leading-relaxed">
                Enhance confidence and beauty with expert dental care at Dr Smile.
              </p>

              <a
                href="#"
                className="text-[#8B3D3D] font-medium hover:underline text-base lg:text-lg mt-2 inline-block"
              >
                View More
              </a>
            </div>

            <div className="pt-6 lg:pt-8 w-full flex justify-start">
              <ArrowDown className="text-gray-500 w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single column stack */}
        <div className="md:hidden flex flex-col w-full">
          {/* Logo - Top section */}
          <div className="bg-[#3D2A24] flex items-center justify-center p-6 aspect-square sm:aspect-[16/9]">
            <img
              src="./Images/logo.png"
              alt="Dr Smile Logo"
              className="w-auto h-auto max-h-[60%] max-w-[80%] object-contain"
            />
          </div>

          {/* Image - Middle section */}
          <div className="bg-gray-100 aspect-[16/9] sm:aspect-[21/9]">
            <img
              src="./Images/L1.png"
              alt="Doctor"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content - Bottom section */}
          <div className="flex flex-col justify-between items-start p-6 sm:p-8 bg-white min-h-[280px]">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Unlock your smile's potential
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Enhance confidence and beauty with expert dental care at Dr Smile.
              </p>

              <a
                href="#"
                className="text-[#8B3D3D] font-medium hover:underline text-base sm:text-lg mt-2 inline-block"
              >
                View More
              </a>
            </div>

            <div className="pt-6 w-full flex justify-start">
              <ArrowDown className="text-gray-500 w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}