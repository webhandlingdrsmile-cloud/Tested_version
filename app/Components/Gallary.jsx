"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
  ];

  return (
    <div className="min-h-full bg-[#E1D5C9] relative px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
     <div className="relative grid grid-cols-1 lg:grid-cols-2  lg:gap-10 items-center py-6 sm:py-8 lg:py-10">
  {/* Left: Heading */}
  <div className="space-y-4 sm:space-y-5">
    <p className="font-extrabold text-sm sm:text-base text-[#704532] uppercase tracking-wide">
      Our Gallery
    </p>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[36px] font-semibold text-[#2E2E2E] leading-tight sm:leading-snug">
      Visual Journey of our <br />
      <span className="text-[#704532] font-bold">Dental Expertise</span>
    </h1>
  </div>

  {/* Right: Paragraph */}
  <div className="max-w-sm lg:max-w-md xl:max-w-lg w-full lg:absolute lg:right-10 mt-4 lg:mt-0">
    <p className="text-[#4A4A4A] text-xs sm:text-xs lg:text-sm leading-relaxed">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s.
    </p>
  </div>
</div>


      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative aspect-[3/4] overflow-hidden ">
          <Image
            src="/Images/G1.png"
            alt="Gallery main image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 50vw, 20vw"
          />
        </div>
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden "
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 1024px) 22vw, 10vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
