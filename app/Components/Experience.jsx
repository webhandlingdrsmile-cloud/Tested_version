"use client";

import { Play, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="w-full bg-black text-white py-12 sm:py-16 lg:py-20 px-7"
      aria-label="Dental Experience Section"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden md:gap-19">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="relative w-full lg:w-1/2 h-[320px] sm:h-[420px] lg:h-auto flex-shrink-0"
        >
          <Image
            src="/Images/E1.png"
            alt="Dr Reshma S - Orthodontist"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute bottom-3 md:bottom-5 bg-[#704532] px-7 py-3 right-5   ">
            <h3 className="text-sm sm:text-base font-semibold">Dr. Reshma S</h3>
            <p className="text-[10px] sm:text-xs tracking-wide">
              BDS, MDS ORTHODONTICS
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="w-full lg:w-1/2  py-10 sm:py-15 flex flex-col justify-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs md:text-sm font-semibold tracking-widest text-white uppercase mb-3"
          >
            10 Years Experience
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl md:text-4xl lg:text-xl  xl:text-4xl font-bold leading-snug mb-4"
          >
            Your Journey to a Confident{" "}
            <br className="hidden sm:block" /> Smile Starts Here
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-xs md:text-base lg:text-sm xl:text-base leading-relaxed mb-4"
          >
            At Dr Smile Dental Clinic, we believe every smile tells a story, and
            we are here to make yours brighter, healthier, and more confident.
            With a team of experienced dental professionals, we provide
            comprehensive care that blends advanced technology with a gentle,
            patient-focused approach.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-xs md:text-base lg:text-sm xl:text-base leading-relaxed mb-8"
          >
            From preventive checkups and cosmetic enhancements to orthodontics
            and restorative treatments, we ensure personalized solutions for
            every dental need.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-3 sm:gap-4"
            >
             
             <Image
  src="/Images/EE1.png"   
  alt="Dr. Reshma S - Orthodontist" 
  width={600}                 
  height={600}
  className="w-8 h-8 sm:w-10 sm:h-10 text-[#f5e9df] flex-shrink-0"
/>
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base lg:text-sm xl:text-base">
                  Our Mission
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-xs xl:text-base leading-snug">
                  Compassionate, precise, innovative care for healthy smiles.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-3 sm:gap-4"
            >
                      <Image
  src="/Images/EE2.png"   
  alt="Dr. Reshma S - Orthodontist" 
  width={600}                 
  height={600}
  className="w-6 h-6 sm:w-8 sm:h-8 text-[#f5e9df] flex-shrink-0"
/>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  Our Vision
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-xs xl:text-base leading-snug">
                  Compassionate, precise, innovative care creating confident
                  smiles.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 flex-wrap"
          >
            <Link
              href="#about"
              className="bg-[#704532] hover:bg-[#4a2a1f] text-white px-6 py-3 text-sm sm:text-base font-medium transition"
            >
              About More
            </Link>

            <button
              aria-label="Play video"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
