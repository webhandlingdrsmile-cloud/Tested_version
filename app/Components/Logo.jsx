"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Logo() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        {/* Desktop - Tablet */}
        <div className="hidden sm:grid sm:grid-cols-3 w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
          {/* Logo */}
          <div className="bg-[#3D2A24] flex items-center justify-center p-4 sm:p-6 md:p-8 h-full relative">
            <div className="relative w-full h-full max-w-[90%] max-h-[80%]">
              <Image
                src="/Images/logo.png"
                alt="Dr Smile Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          </div>

          {/* Doctor Image */}
          <div className="bg-gray-100 h-full relative overflow-hidden">
            <Image
              src="/Images/L1.png"
              alt="Doctor"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              priority
            />
          </div>

          {/* Content - LEFT ALIGNED like screenshot */}
          <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white h-full">
            <div className="flex flex-col items-start text-left gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-lg">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight md:leading-tight">
                Unlock your smile's potential
              </h1>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Enhance confidence and beauty with expert dental care at Dr Smile.
              </p>

              <a
                href="#"
                className="text-[#8B3D3D] font-medium hover:underline text-sm sm:text-base md:text-lg mt-1 sm:mt-2 inline-block transition-colors duration-200 hover:text-[#6D2D2D]"
              >
                View More →
              </a>
            </div>

            <div className="pt-4 sm:pt-6 md:pt-8 w-full flex justify-start">
              <ArrowDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-col w-full">
          {/* Logo */}
          <div className="bg-[#3D2A24] flex items-center justify-center p-6 aspect-square relative">
            <div className="relative w-full h-full max-w-[80%] max-h-[80%]">
              <Image
                src="/Images/logo.png"
                alt="Dr Smile Logo"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div>

          {/* Doctor Image */}
          <div className="bg-gray-100 aspect-[4/3] relative">
            <Image
              src="/Images/L1.png"
              alt="Doctor"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>

          {/* Content - LEFT ALIGNED */}
          <div className="flex flex-col justify-center items-start p-6 bg-white min-h-[300px]">
            <div className="flex flex-col items-start text-left gap-4 w-full">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Unlock your smile's potential
              </h1>

              <p className="text-gray-600 text-base leading-relaxed">
                Enhance confidence and beauty with expert dental care at Dr Smile.
              </p>

              <a
                href="#"
                className="text-[#8B3D3D] font-medium hover:underline text-base mt-2 inline-block transition-colors duration-200 hover:text-[#6D2D2D]"
              >
                View More →
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