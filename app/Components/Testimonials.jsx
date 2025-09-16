"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Dr Smile completely transformed my smile! The entire team was incredibly professional and caring. Each visit was a positive experience. I’m so happy with my new smile and the confidence it has given me!",
      name: "Ajay Krishna",
    },
    {
      text: "From the initial consultation to the final treatment, the team at Dr Smile provided exceptional, personalized care. Their expertise and advanced technology made me feel comfortable throughout. Highly recommend!",
      name: "Deepak",
    },
    {
      text: "I was always nervous about visiting the dentist, but Dr Smile changed that. The staff is incredibly welcoming, and the doctors are so gentle and reassuring. I finally love my smile again!",
      name: "Anna James",
    },
    {
      text: "I’ve had braces before, but my experience with Dr Smile was by far the best. The attention to detail and comfort was amazing. I love the final results!",
      name: "Ritika Sharma",
    },
    {
      text: "The clinic is top-notch! Clean, modern, and everyone is so friendly. Dr Smile truly lives up to the name. My teeth have never looked better.",
      name: "Karthik V",
    },
    {
      text: "I brought my daughter here for orthodontic treatment, and the results are fantastic. She smiles confidently now, and we couldn’t be happier.",
      name: "Meera Patel",
    },
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000); 

    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = currentPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <section className="bg-[#E1D5C9] py-16 px-6 md:px-12 text-center">
      <div className="mb-12">
        <h2 className="text-sm uppercase tracking-wide text-gray-600 mb-2">
          Testimonials
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          What Our <span className="text-[#3D2A24]">Clients Say</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto transition-all duration-700 ease-in-out">
        {currentTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-transparent p-6 rounded-lg text-left flex flex-col items-start"
          >
            <Quote className="w-10 h-10 text-[#3D2A24] mb-4" />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              {t.text}
            </p>
            <h4 className="font-semibold text-[#3D2A24]">{t.name}</h4>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              index === currentPage ? "bg-[#3D2A24]" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
