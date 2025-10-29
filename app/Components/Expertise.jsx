"use client";

import { CheckSquare } from "lucide-react";

export default function Expertise() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Content Section */}
        <div className="bg-[#f5e9dd] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
          <header className="mb-6 sm:mb-8">
            <h4 className="uppercase text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mb-2 sm:mb-3">
              Expertise
            </h4>
            <h2
              id="expertise-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight sm:leading-snug"
            >
              Trusted dental expertise delivering healthy, confident smiles daily.
            </h2>
          </header>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Dr Smile combines advanced technology and compassionate care to deliver
            precise, safe, and confident smiles for every patient.
          </p>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <article className="flex items-start gap-3 sm:gap-4">
              <CheckSquare
                className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl mb-2">
                  Advanced Technology & Precision
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Our clinic utilizes cutting-edge dental technology to deliver
                  precise, efficient treatments, ensuring comfort, accuracy, and
                  long-lasting, healthy smiles for every patient.
                </p>
              </div>
            </article>
            
            <article className="flex items-start gap-3 sm:gap-4">
              <CheckSquare
                className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl mb-2">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  At Dr Smile, every treatment focuses on your comfort, needs, and
                  well-being, ensuring personalized, compassionate care for healthier
                  smiles.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full min-h-[400px]">
          <img
            src="./Images/E2-1.png"
            alt="Expertise section image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}