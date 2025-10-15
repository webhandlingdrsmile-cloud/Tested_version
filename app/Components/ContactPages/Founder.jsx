"use client";

import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className=" py-12 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <Image
            src="/Images/F1.png"
            alt="Doctor with patient"
            width={600}
            height={400}
            className=" object-cover w-full h-auto"
          />
        </div>

        <div className="text-left">
          <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold">
            Founder of Dr. Smile
          </p>
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mt-2">
            Broken Stuff After Using
          </h2>
          <h3 className="text-sm md:text-xl xl:text-2xl mt-1 font-medium text-gray-800">
            Our Service?
          </h3>
          <p className="text-gray-600  text-xs xl:text-lg mt-4 leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s. Lorem Ipsum Is Simply Dummy Text Of The
            Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry's Standard Dummy Text Ever Since The 1500s.
          </p>
        <Link href={`/Booking`}>  <button className="mt-6 bg-[#704532] text-white px-6 py-3 shadow hover:bg-[#40241a] transition">
            Schedule Now
          </button></Link>
        </div>
      </div>
    </section>
  );
}
