"use client";

import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section className="relative h-full py-30 px-10 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./Images/S1.png')", 
        }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <motion.div
          className="bg-white/70 max-w-5xl text-center p-10 md:p-12 rounded-md shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-light text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Book Your Trusted Dental Implant Consultation
          </motion.h2>
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Today At Dr Smile
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-[#8B3D3D] text-white text-sm md:text-base rounded-md shadow-md hover:bg-[#732f2f] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Schedule Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
