"use client";

import Image from "next/image";

export default function WhyPatients() {
  const items = [
    {
      title1: "Advanced Dental",
      title2: "Technology",
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem Ipsum Is Simply",
      img: "/Images/WP1.png",
      hoverBg: "hover:bg-[#6B3E2E]",
    },
    {
      title1: "Comfort-First",
      title2: "Approach",
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem Ipsum Is Simply",
      img: "/Images/WP2.png",
      hoverBg: "hover:bg-[#6B3E2E]",
    },
    {
      title1: "Flexible",
      title2: "Appointments",
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem Ipsum Is Simply",
      img: "/Images/WP3.png",
      hoverBg: "hover:bg-[#6B3E2E]",
    },
    {
      title1: "Family-Friendly",
      title2: "Care",
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem Ipsum Is Simply",
      img: "/Images/WP4.png",
      hoverBg: "hover:bg-[#6B3E2E]",
    },
  ];

  return (
    <section className="bg-[#E1D5C9] py-16 px-6 md:px-10 lg:px-16 xl:px-30">
      <div className=" mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Why <span className="font-bold text-black">Patients</span> Trust Us
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ">

          {items.map((item, index) => (
            <div
              key={index}
              className={`group bg-white shadow-md p-8 text-center group  rounded transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${item.hoverBg} hover:text-white`}
            >
              <div className="mb-4 flex justify-center">
             <div className="bg-gray-300/30 p-5 group-hover:bg-gray-100 ">
                 <Image
                  src={item.img}
                  alt={item.title1}
                  width={48}
                  height={48}
                  className="transition-all "
                />
             </div>
              </div>

              <h3 className="font-medium text-lg mb-2 leading-tight">
                {item.title1} <br />
                <span className="font-bold">{item.title2}</span>
              </h3>

              <p className="text-gray-600 text-sm transition-colors group-hover:text-white/90">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
