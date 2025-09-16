"use client";

import { PhoneCall, Smile, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section
      className="bg-[#3c2d25] text-white py-16 px-6 sm:px-10 lg:px-20 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="uppercase text-sm font-semibold tracking-wider text-gray-300">
            Why Choose Us
          </h4>
          <h2
            id="why-choose-us-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-snug"
          >
            Expert care creating beautiful, healthy, confident smiles.
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed max-w-lg">
            At Dr Smile, we provide expert dental care combining advanced
            technology and personalized attention, ensuring every patient enjoys
            healthy, beautiful, and confident smiles with lasting results.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-3 w-40 bg-white text-[#3c2d25] font-semibold  shadow hover:bg-gray-100 transition"
            aria-label="Contact Dr Smile for expert dental care"
          >
            Contact Us
          </motion.a>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <motion.div
            className="flex justify-center lg:flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="./Images/W1.png"
              alt="Smiling female dentist in a lab coat at Dr Smile"
              className="w-56 sm:w-72 lg:w-80 xl:w-96 object-contain md:hidden xl:inline"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-8 w-full max-w-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.3, duration: 0.6 },
              },
            }}
          >
            {[{
              icon: <PhoneCall className="text-[#3c2d25] w-6 h-6" />,
              title: "Emergency Services",
              desc: "Quick, reliable dental emergency care ensuring comfort and healthy smiles.",
            },{
              icon: <Smile className="text-[#3c2d25] w-6 h-6" />,
              title: "Positive Patient Reviews",
              desc: "Patients praise Dr Smile for compassionate, expert, and reliable care.",
            },{
              icon: <UserCheck className="text-[#3c2d25] w-6 h-6" />,
              title: "Experienced Professionals",
              desc: "Skilled dental experts delivering precise, safe, and confident smile care.",
            }].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              >
                <div className="bg-white p-3 rounded-lg shadow">{feature.icon}</div>
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
      </div>
    </section>
  );
}
