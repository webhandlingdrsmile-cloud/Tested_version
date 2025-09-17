"use client";

import { Play, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Experience() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

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
      className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden"
      aria-label="Dental Experience Section"
    >
      <motion.figure
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
        className="w-full h-[400px] lg:h-auto overflow-hidden"
      >
        <motion.img
          src="./Images/E1.png"
          alt="Smiling patient at Dr Smile Dental Clinic"
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <figcaption className="sr-only">
          Happy patient showcasing dental confidence at Dr Smile Dental Clinic
        </figcaption>
      </motion.figure>

      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="bg-[#f5e9df] flex items-center px-6 md:px-12 lg:px-16 py-12"
      >
        <div className="max-w-xl space-y-6">
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-wider text-[#5a2e1e] uppercase"
          >
            10 Years Experience
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-black"
          >
            Your Journey to a Confident <br /> Smile Starts Here
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-sm md:text-base leading-relaxed"
          >
            At Dr Smile Dental Clinic, we believe every smile tells a story, and we are
            here to make yours brighter, healthier, and more confident. With a team of
            experienced dental professionals, we provide comprehensive care that blends
            advanced technology with a gentle, patient-focused approach.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-sm md:text-base leading-relaxed"
          >
            From preventive checkups and cosmetic enhancements to orthodontics and
            restorative treatments, we ensure personalized solutions for every dental
            need.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
          >
            <motion.article variants={fadeInRight} className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-[#5a2e1e]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-black">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  Compassionate, precise, innovative care for healthy smiles.
                </p>
              </div>
            </motion.article>

            <motion.article variants={fadeInRight} className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#5a2e1e]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-black">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  Compassionate, precise, innovative care creating confident smiles.
                </p>
              </div>
            </motion.article>
          </motion.div>
          <motion.div variants={fadeInUp} className="pt-6">
          <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="#appointment"
          className="block bg-[#704532] hover:bg-[#422014] text-white px-6 py-3 font-medium shadow-md transition text-center w-40"
        >
        About More
        </Link>
      </motion.div>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
}
