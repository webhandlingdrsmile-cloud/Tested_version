"use client";

import Image from "next/image";

export default function ReshmaDr() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center px-6 md:px-10 lg:px-16 xl:px-20 py-16 lg:py-20 min-h-[80vh]"
      style={{ backgroundImage: "url('/Images/AB2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full container mx-auto">
        <div className="flex-1 md:flex-[0.6] text-white text-center md:text-left">
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-bold mb-4 leading-snug">
            Meet Dr. Reshma S
          </h2>

          <p className="text-gray-200 text-sm md:text-sm lg:text-lg leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            Lorem Ipsum has been.
          </p>

          <p className="text-gray-200 text-sm md:text-sm lg:text-lg leading-relaxed mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <a
            href="#"
            className="inline-block bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Our Teams
          </a>
        </div>

    
        <div className="flex-1 md:flex-[0.4] flex justify-center md:justify-end">
          <Image
            src="/Images/AB3.png"
            alt="Dr. Reshma S"
            width={450}
            height={550}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
