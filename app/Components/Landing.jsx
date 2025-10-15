"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing() {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center sm:justify-start overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="./Video/dp.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>

      <main className="relative z-10 text-white w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl px-4 sm:px-8 md:px-12 lg:px-20 text-center sm:text-left">
        <p className="text-[11px] sm:text-sm mb-3 uppercase tracking-wide text-gray-300 text-start">
          Welcome To Dr. Smile
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4 text-start">
         Vibrant Smile to Create
          <span className="text-orange-500"></span>{" "}
         Healthy Life.
        </h1>

        <p className="text-gray-300 mb-6 text-xs sm:text-sm md:text-base leading-relaxed text-start">
          Dr. Smile offers professional dental care, cosmetic dentistry, and
          oral health solutions to help you achieve the perfect smile. Our team
          provides trusted dental treatments with advanced technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/Booking"
            className="w-full sm:w-auto bg-[#704532] hover:bg-[#704532] text-white px-6 py-3  font-medium shadow-md transition text-center"
          >
            Book Appointment
          </Link>
          <a
            href="tel:+918296099118"
            className="w-full sm:w-auto flex items-center justify-center border border-white/40 px-5 py-3  text-sm hover:bg-white/10 transition"
            aria-label="Call Dr. Smile dental clinic"
          >
            Call: +91-8296099118
          </a>
        </div>
      </main>

      <motion.aside
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 right-1/2 sm:right-8 translate-x-1/2 sm:translate-x-0 bg-black/70 backdrop-blur-md text-white rounded-2xl shadow-lg p-3 sm:p-4 w-60 sm:w-72 flex items-center gap-3"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww"
          alt="Happy smiling patient at Dr. Smile dental clinic"
          className="w-10 h-10 sm:w-20 sm:h-20 rounded-sm object-cover"
        />
        <div>
          <h2 className="font-semibold text-xs sm:text-sm">
            Expert Dental Care
          </h2>
          <p className="text-[10px] sm:text-xs text-gray-300 leading-snug">
            Trusted by patients across India, Dr. Smile provides expert oral
            care, cosmetic dentistry, and dental surgery solutions.
          </p>
        </div>
      </motion.aside>
    </header>
  );
}
