
"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

export default function AboutDental() {
  const services = [
    {
      title: "General Dentistry",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "/Images/Y1.png",
      bg: "/Images/AS2.png",
      textColor: "text-white",
      btnBg: "bg-white",
      btnText: "text-black",
    },
    {
      title: "Orthodontics",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "/Images/Y2.png",
      bg: "/Images/AS1.png",
      textColor: "text-black",
      btnBg: "bg-black",
      btnText: "text-white",
    },
    {
      title: "Implants & Restorations",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "/Images/Y3.png",
      bg: "/Images/AS1.png",
      textColor: "text-black",
      btnBg: "bg-black",
      btnText: "text-white",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "/Images/Y4.png",
      bg: "/Images/AS3.png",
      textColor: "text-white",
      btnBg: "bg-white",
      btnText: "text-black",
    },
  ];

  return (
    <main className="bg-transparent w-full">
      {/* Stats Section */}
      <section className="mx-auto py-10 md:py-16 lg:py-20 px-4 sm:px-6 grid grid-cols-3 sm:grid-cols-3 text-center gap-8 max-w-6xl">
        <div>
          <h2 className="text-xl sm:text-3xl lg:text-5xl text-[#704532] font-extrabold">10+ Years</h2>
          <p className="text-[#704532] font-semibold text-[10px] sm:text-base">Dental Excellence</p>
        </div>

        <div>
          <h2 className="text-xl sm:text-3xl lg:text-5xl text-[#704532] font-extrabold">3,500+</h2>
          <p className="text-[#704532] font-semibold text-[10px] sm:text-base">Happy Patients</p>
        </div>

        <div>
          <h2 className="text-xl sm:text-3xl lg:text-5xl text-[#704532] font-extrabold">99%</h2>
          <p className="text-[#704532] font-semibold text-[10px] sm:text-base">Satisfaction Rate</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((item, index) => (
          <div
            key={index}
            className={`${item.textColor} bg-cover bg-center p-8 sm:p-10 lg:p-14 xl:px-28 flex flex-col justify-center min-h-[280px]`}
            style={{ backgroundImage: `url('${item.bg}')` }}
          >
            <div className="mb-4">
              <Image src={item.icon} alt={item.title} width={55} height={55} className="w-12 sm:w-14 h-auto" />
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="mb-4 text-sm sm:text-base opacity-90 max-w-md">{item.desc}</p>

            <button className={`${item.btnBg} ${item.btnText} px-4 py-2 text-xs sm:text-sm w-fit `}>
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="relative h-[380px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center text-center ">
        <Image
          src="/Images/AS4.png"
          alt="Dental Care"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-xl px-4 sm:px-6 text-white">
          <button className="mb-6 bg-gray-200/50 text-black p-3 sm:p-4 rounded-full  transition">
            <FaPlay size={28} className="text-white" />
          </button>

          <h2 className="text-lg sm:text-xl lg:text-xl font-bold mb-4 leading-relaxed">
            Our Motive is Helping Patients From Around the Globe
          </h2>

          <p className="mb-6 text-gray-200 text-xs sm:text-sm lg:text-sm">
            Lorem Ipsum is simply dummy text of the printing industry. It has been the industry's standard dummy text for centuries.
          </p>

     <Link href={`/Booking`}>
          <button className="bg-[#704532] text-white px-5 sm:px-6 py-2 sm:py-3  hover:bg-[#5C2B12] transition text-sm sm:text-base">
            Schedule Now
          </button>
     </Link>
        </div>
      </section>
    </main>
  );
}
