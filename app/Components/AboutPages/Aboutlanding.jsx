"use client";
import { IoMdCall } from "react-icons/io";

export default function AboutLanding() {
  return (
    <section className="relative w-full h-screen md:h-[35vh] xl:h-[60vh] flex items-center">
      <img
        src="./Images/AB1.png"
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-10 left-0 z-10 max-w-4xl px-6 md:px-12 lg:px-20 text-left">
        <h2 className="text-lg md:text-3xl lg:text-2xl font-bold text-white mb-4">
          About Us
        </h2>
        <p className="text-xs md:text-xs lg:text-sm text-gray-200 mb-6 leading-relaxed max-w-sm xl:max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#3D2A24] hover:bg-[#2b1d18] text-white px-6 py-3 text-sm md:text-base">
            Schedule Now
          </button>
          <button className="border border-white text-white px-6 py-3 flex items-center justify-center gap-x-2 text-sm md:text-base">
            <IoMdCall /> +91-8000001111
          </button>
        </div>
      </div>
    </section>
  );
}
