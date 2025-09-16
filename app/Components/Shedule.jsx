"use client";

import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[50vh] lg:min-h-[50vh] xl:min-h-[70vh]  flex items-center justify-center px-4 sm:px-6 lg:px-10 py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./Images/S1.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/20" /> 
      <div className="relative z-10 flex items-center justify-center w-full">
        <motion.div
          className="bg-white/80 backdrop-blur-md w-full max-w-4xl text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Book Your Trusted Dental Implant Consultation
          </motion.h2>
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Today At Dr Smile
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
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
            className="mt-6 px-6 sm:px-8 py-3 bg-[#8B3D3D] text-white text-sm sm:text-base md:text-lg  shadow-md hover:bg-[#732f2f] transition"
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
