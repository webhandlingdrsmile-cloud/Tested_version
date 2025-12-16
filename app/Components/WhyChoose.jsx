"use client";

import { PhoneCall, Smile, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <PhoneCall className="text-[#3c2d25] w-6 h-6" />,
      title: "Emergency Services",
      desc: "Quick, reliable dental emergency care ensuring comfort and healthy smiles.",
    },
    {
      icon: <Smile className="text-[#3c2d25] w-6 h-6" />,
      title: "Positive Patient Reviews",
      desc: "Patients praise Dr Smile for compassionate, expert, and reliable care.",
    },
    {
      icon: <UserCheck className="text-[#3c2d25] w-6 h-6" />,
      title: "Experienced Professionals",
      desc: "Skilled dental experts delivering precise, safe, and confident smile care.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
<section
  className="bg-[url('/Images/BGw.png')] bg-cover bg-center text-white px-6 sm:px-10 md:px-7 lg:px-8 xl:px-15 overflow-hidden pt-16 pb-8 xl:pb-0"
>

      <div className=" mx-auto grid grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-1 items-center">

        <div>
          <h4 className="uppercase text-sm font-semibold tracking-wider text-white">
            Why Choose Us
          </h4>
          <h2
            id="why-choose-us-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-snug"
          >
           Crafting Confident Smiles with <span className="font-light">Expert Dental Care</span>
          </h2>
          <p className="text-white mt-4 text-sm sm:text-[15px] leading-relaxed max-w-lg">
            At Dr Smile, we provide expert dental care combining advanced
            technology and personalized attention, ensuring every patient enjoys
            healthy, beautiful, and confident smiles with lasting results.
          </p>
             <Link
              href="/Contact"
             
            >
            <button  className="bg-white text-[#704532] mt-4 px-6 py-3 text-sm sm:text-base font-medium font-semibold transition">
              Contact Us
            </button>
            </Link>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[260px] sm:w-[320px] lg:w-[300px] xl:w-[360px] aspect-[3/4]">
            <Image
              src="/Images/W1.png"
              alt="Smiling female dentist in a lab coat at Dr Smile"
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              variants={fadeIn}
            >
              <div className="bg-white p-3 rounded-lg shadow flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
