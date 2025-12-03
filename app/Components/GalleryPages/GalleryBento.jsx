"use client";

import Image from "next/image";

export default function BentoGallery() {
  const images = [
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
    "/Images/G1.png",
  ];

  return (
    <div className="min-h-full bg-[#E1D5C9] relative px-4 sm:px-6 md:px-8 lg:px-18 py-8 sm:py-10 lg:py-12">
     <div className="relative grid grid-cols-1  lg:gap-10 items-center py-6 sm:py-8 lg:py-10">

  <div className="space-y-4 sm:space-y-5">
  
    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[36px] font-bold text-[#2E2E2E] text-center leading-tight sm:leading-snug">
    Dr. Smile Dental Gallery Creating <br />
      <span className="text-black font-thin"> Confident Smiles</span>
    </h1>

    <p className="text-center text-sm">ckjwdhjgfiorek   jvfnrewjgfjker n vjedfnvkefkvpl</p>
  </div>


</div>


    <div className="py-5 gap-5">
          <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="flex-1 relative aspect-[3/2] overflow-hidden ">
          <Image
            src="/Images/DR.png"
            alt="Gallery main image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 "
            sizes="(max-width: 1024px) 100vw, 40vw"
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
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>




      {/* sec */}
         <div className="flex flex-col lg:flex-row gap-6 mt-4">
       
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
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
         <div className="flex-1 relative aspect-[3/2] overflow-hidden ">
          <Image
            src="/Images/DR.png"
            alt="Gallery main image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 "
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
