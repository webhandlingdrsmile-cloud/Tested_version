"use client";

import { motion } from "framer-motion";

export default function Section2() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const textBlock = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-20"
      aria-label="Liberty’s Top-Rated Dental Experts"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start"
      >
        <motion.article
          variants={card}
          whileHover={{ scale: 1.05 }}
          className="relative w-full group overflow-hidden"
        >
          <figure>
            <img
              src="/Images/D1.png"
              alt="Dr. John Doe - BDS, MDS Orthodontics Specialist"
              className="w-full h-96 sm:h-96 md:h-80 lg:h-96 xl:h-130 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-3 px-4 text-sm text-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="font-semibold">Dr. John Doe</h3>
              <p className="text-xs">BDS, MDS ORTHODONTICS</p>
            </figcaption>
          </figure>
        </motion.article>
        <motion.article
          variants={card}
          whileHover={{ scale: 1.05 }}
          className="relative w-full group overflow-hidden"
        >
          <figure>
            <img
              src="/Images/D2.png"
              alt="Dr. Reshma S - BDS, MDS Orthodontics Specialist"
              className="w-full h-96 sm:h-96 md:h-80 lg:h-96 xl:h-130 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-3 px-4 text-sm text-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="font-semibold">Dr. Reshma S</h3>
              <p className="text-xs">BDS, MDS ORTHODONTICS</p>
            </figcaption>
          </figure>
        </motion.article>
        <motion.article
          variants={card}
          whileHover={{ scale: 1.05 }}
          className="relative w-full group overflow-hidden"
        >
          <figure>
            <img
              src="/Images/D3.png"
              alt="Dr. Alex Smith - BDS, MDS Orthodontics Specialist"
              className="w-full h-96 sm:h-96 md:h-80 lg:h-96 xl:h-130 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-3 px-4 text-sm text-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="font-semibold">Dr. Alex Smith</h3>
              <p className="text-xs">BDS, MDS ORTHODONTICS</p>
            </figcaption>
          </figure>
        </motion.article>
        <motion.div
          variants={textBlock}
          className="space-y-4 md:pl-6 flex flex-col justify-center mt-7"
        >
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-snug">
            Liberty’s <br /> Top-Rated <br /> Dental Experts
          </h2>
          <p className="text-gray-300 text-sm lg:text-lg xl:text-1xl leading-relaxed">
            Our experienced Liberty dentists provide exceptional care with
            advanced treatments, personalized attention, and a gentle approach —
            ensuring healthy, confident smiles for the whole family in a
            comfortable, trusted environment.
          </p>
     <motion.a
  href="/about"
  aria-label="Learn more about our dental experts"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-[#704532] hover:bg-[#422014] w-40 md:w-50 text-center text-white px-4 py-5  text-sm transition"
>
  Meet Us
</motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}
