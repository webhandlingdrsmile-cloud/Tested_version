'use client'

import { motion } from "framer-motion";

export default function Technology() {
  const technologies = [
    {
      img: "./Images/T2.png",
      title: "Single – Visit Dentistry",
      desc: "Advanced Single-Visit Dentistry: Quick, Comfortable, Lasting Smiles.",
      alt: "Dentist consulting a patient for single-visit dental treatment"
    },
    {
      img: "./Images/T3.png",
      title: "Robot – Guided Implant Placement",
      desc: "Precision, Safety, Comfort—Robot-Guided Implants Ensure Perfect Smiles.",
      alt: "Dental implant placement using advanced robot-guided technology"
    },
    {
      img: "./Images/T4.png",
      title: "No – Shot Laser Fillings",
      desc: "Painless, Precise Laser Fillings For Healthier, Stress-Free Smiles.",
      alt: "Patient receiving painless no-shot laser dental fillings"
    }
  ];

  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      aria-labelledby="technology-heading"
      style={{
        backgroundImage:
          "url('./Images/T1.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="technology-heading"
            className="text-3xl md:text-4xl font-bold"
          >
            Technology
          </h2>
          <p className="text-lg md:text-xl mt-2">at Dr Smile Dental Clinic</p>
        </motion.header>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.article
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <figure>
                <img
                  src={tech.img}
                  alt={tech.alt}
                  className="w-full h-80 object-cover"
                />
                <figcaption className="sr-only">{tech.title}</figcaption>
              </figure>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{tech.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{tech.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
