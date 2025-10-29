"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Landing() {
  return (
    <>
  
      <Head>
        <title>Dr. Smile | Professional Dental Care & Cosmetic Dentistry</title>
        <meta
          name="description"
          content="Dr. Smile offers professional dental care, cosmetic dentistry, and oral health solutions to help you achieve the perfect smile with trusted treatments and advanced technology."
        />
        <meta
          name="keywords"
          content="dentist, dental clinic, cosmetic dentistry, teeth whitening, dental implants, oral care, Dr. Smile, dental surgery"
        />
        <meta name="author" content="Dr. Smile Dental Clinic" />
        <meta property="og:title" content="Dr. Smile Dental Clinic" />
        <meta
          property="og:description"
          content="Trusted dental care and cosmetic dentistry for a vibrant smile and healthy life."
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=1200"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <link rel="canonical" href="https://www.drsmile.com/" />
      </Head>

      <header
        className="relative w-full  h-screen xl:h-[65vh] flex items-center justify-center sm:justify-start overflow-hidden"
        role="banner"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="./Video/dp.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      <div
  className="absolute bottom-0 left-0 w-full h-48 
  bg-gradient-to-t from-black via-black/90 to-gray/5"
  aria-hidden="true"
></div>

        <main
          className="relative z-10 text-white w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl px-4 sm:px-8 md:px-12 lg:px-20 text-center sm:text-left xl:mt-12"
          role="main"
        >
          <p className="text-[11px] sm:text-sm mb-3 uppercase tracking-wide text-gray-300 text-start">
            Welcome To <strong>Dr. Smile</strong>
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4 text-start">
            Vibrant Smile to Create{" "}
            <span className="">Healthy Life.</span>
          </h1>
            
          <p className="text-gray-300 mb-6 text-xs sm:text-sm md:text-base leading-relaxed text-start">
            Dr. Smile offers professional dental care, cosmetic dentistry, and
            oral health solutions to help you achieve the perfect smile. Our
            team provides trusted dental treatments with advanced technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/Booking"
              className="w-full sm:w-auto bg-[#704532] hover:bg-[#704532]/90 text-white px-6 py-3 text-sm lg:text-lg  font-medium shadow-md transition text-center"
              aria-label="Book dental appointment at Dr. Smile"
            >
              Book Appointment
            </Link>

            <a
              href="tel:+918296099118"
              className="w-full sm:w-auto flex items-center justify-center border border-white/40 px-5 py-3 lg:py-3 text-sm lg:text-lg hover:bg-white/10 transition"
              aria-label="Call Dr. Smile dental clinic"
            >
              Call: +91-8296099118
            </a>
          </div>
        </main>




<div
  className="absolute bottom-7 right-7 w-[275px] h-[119px] 
  bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden 
  flex flex-col justify-between shadow-lg"
>
  <div className="grid grid-cols-2 items-center gap-2 ">
    <Image
      src="/Images/AB1.png"
      alt="Smiling patient after dental treatment"
      width={400}
      height={100}
      className="w-full h-[130px] object-cover "
    />
    <div>
      <h1 className="text-white font-semibold text-sm">Hello</h1>
      <p className="text-gray-400 text-xs leading-tight mt-1">
        Example text showing layout.
      </p>
      <div className="flex items-center gap-2 mt-2 px-1">
        <span className="w-5 h-[2px] bg-white rounded-full"></span>
        <span className="w-5 h-[2px] bg-white/40 rounded-full"></span>
        <span className="w-5 h-[2px] bg-white/40 rounded-full"></span>
        <span className="w-5 h-[2px] bg-white/40 rounded-full"></span>
      </div>
    </div>
  </div>
</div>



      </header>
    </>
  );
}
