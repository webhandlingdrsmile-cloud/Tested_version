"use client";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

export default function BlogLanding() {
  return (
    <section className="relative w-full h-[25vh] md:h-[30vh] xl:h-[50vh] flex items-center">
      <img
        src="./Images/AB1.png"
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(19, 18, 18, 0.13) 45%, rgba(0, 0, 0, 0.94) 100%)",
        }}
      ></div>

      <div className="absolute bottom-10 left-0 z-10 max-w-4xl px-6 md:px-12 lg:px-20 text-left">
        <h2 className="text-lg md:text-3xl lg:text-2xl xl:text-3xl font-bold text-white mb-4">
          Blogs
        </h2>

        <p className="text-xs md:text-xs lg:text-sm text-gray-200 mb-6 leading-relaxed max-w-sm xl:max-w-lg">
          Dr Smile Orthodontics and Multispeciality Dental Clinic is a premier
          dental care centre dedicated to delivering advanced, personalized, and
          comfortable treatments for every age group.
        </p>

        <div className="flex flex-row gap-4">
          <Link href="/Booking">
            <button className="bg-[#704532] hover:bg-[#704532] text-white px-6 py-3 text-xs sm:text-sm md:text-base">
              Schedule Now
            </button>
          </Link>

          <a href="tel:+918296099118">
            <button className="border border-white text-white px-6 py-3 text-xs flex items-center justify-center gap-x-2 sm:text-sm md:text-base">
              <IoMdCall /> +91 82960 99118
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
