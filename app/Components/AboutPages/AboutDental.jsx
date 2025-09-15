"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function AboutDental() {
  return (
    <main className="bg-transparent">
      <section className=" mx-auto py-12 xl:py-20 px-6 grid  grid-cols-3 text-center gap-8">
        <div>
          <h2 className="text-xs md:text-3xl font-bold">10+ Years</h2>
          <p className="text-gray-700 text-xs">Dental Excellence</p>
        </div>
        <div>
          <h2 className="text-xs md:text-4xl font-bold">3,500+</h2>
          <p className="text-gray-700 text-xs">Happy Patients</p>
        </div>
        <div>
          <h2 className="text-xs md:text-4xl font-bold">99%</h2>
          <p className="text-gray-700 text-xs">Satisfaction Rate</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[url('/Images/AS2.png')] text-white p-20  flex flex-col justify-center ">
          <div className="mb-4">
            <img src="./Images/Y1.png" alt="" className="w-10 h-10 xl:w-20 xl:h-20"/>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">General Dentistry</h3>
          <p className="mb-4 text-sm text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="bg-white text-black px-4 py-2 text-sm w-fit">
            Learn More
          </button>
        </div>
        <div className="bg-[url('/Images/AS1.png')] bg-cover text-black p-20 flex flex-col justify-center ">
          <div className="mb-4">
              <img src="./Images/Y2.png" alt="" className="w-10 h-10 xl:w-20 xl:h-20"/>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Orthodontics</h3>
          <p className="mb-4 text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="bg-black text-white px-4 py-2  w-fit">
            Learn More
          </button>
        </div>
        <div className="bg-[url('/Images/AS1.png')] bg-cover text-black p-20 flex flex-col justify-center">
          <div className="mb-4">
          <img src="./Images/Y3.png" alt="" className="w-10 h-10 xl:w-20 xl:h-20"/>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Implants & Restorations</h3>
          <p className="mb-4 text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="bg-black text-white px-4 py-2  w-fit">
            Learn More
          </button>
        </div>
        <div className="bg-[url('/Images/AS3.png')] text-white p-20 flex flex-col justify-center">
          <div className="mb-4">
           <img src="./Images/Y4.png" alt="" className="w-10 h-10 xl:w-20 xl:h-20"/>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Cosmetic Dentistry</h3>
          <p className="mb-4 text-gray-200 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="bg-white text-black px-4 py-2  w-fit">
            Learn More
          </button>
        </div>
      </section>
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <Image
          src="/Images/AS4.png"
          alt="Dental Care"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-2xl px-6 text-white">
          <button className="mb-6 bg-white/80 text-black p-4 rounded-full hover:bg-white transition">
            <Play size={28} />
          </button>
          <h2 className="text-xl md:text-xl font-bold mb-4">
            Our Motive is Helping Patients From Around the Globe
          </h2>
          <p className="mb-6 text-gray-200 text-sm md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button className="bg-[#7A3B1A] text-white px-6 py-3  hover:bg-[#5C2B12] transition">
            Schedule Now
          </button>
        </div>
      </section>
    </main>
  );
}
