"use client";

import Image from "next/image";

export default function ReshmaDr() {
  return (
    <section
      className="relative min-h-full flex items-center bg-cover bg-center px-6 md:px-2 lg:px-6 xl:px-0"
      style={{ backgroundImage: "url('/Images/AB2.png')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 w-full container mx-auto md:px-5 lg:px-0 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Meet Dr. Reshma S
          </h2>
          <p className="mb-6 leading-relaxed text-gray-200 text-xs md:text-sm leading-relaxed lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            Lorem Ipsum has been.
          </p>
          <p className="mb-8 leading-relaxed text-gray-200 text-xs leading-relaxed md:text-sm lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black font-medium px-5 py-2  hover:bg-gray-200 transition"
          >
            Our Teams
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Images/AB3.png"
            alt="Dr. Reshma S"
            width={400}
            height={500}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover "
          />
        </div>
      </div>
    </section>
  );
}
