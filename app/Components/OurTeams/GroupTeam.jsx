"use client";

import Image from "next/image";

export default function GroupTeam() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 md:py-24 ">
      {/* Headings */}
      <div className="z-10 mb-10">
        <h1 className="text-[15px] font-bold text-[#3D2A24]">
          MEET THE SMILE EXPERTS
        </h1>

        <div className="mt-3 text-gray-600 text-base flex gap-1 sm:text-lg md:text-4xl leading-snug">
          <p className="font-extrabold">Dedicated Experts</p>
          <p>Behind Every Smile</p>
        </div>
      </div>

      {/* Image Wrapper */}
      <div className="relative w-full container h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] lg:h-[500px]  overflow-hidden">
        <Image
          src="/Images/TM1.png"
          alt="Dr. Reshma"
          fill
          className=" :bg-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          priority
        />
      </div>
    </section>
  );
}
