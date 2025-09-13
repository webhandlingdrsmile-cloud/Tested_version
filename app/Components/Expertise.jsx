"use client";

import { CheckSquare } from "lucide-react";

export default function Expertise() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch px-2">
        <div className="bg-[#f5e9dd] p-6 sm:p-10 md:p-16 flex flex-col justify-center h-full">
          <header>
            <h4 className="uppercase text-xs sm:text-sm font-semibold tracking-wider text-gray-600">
              Expertise
            </h4>
            <h2
              id="expertise-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-snug"
            >
              Trusted dental expertise delivering healthy, confident smiles daily.
            </h2>
          </header>

          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Dr Smile combines advanced technology and compassionate care to deliver
            precise, safe, and confident smiles for every patient.
          </p>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <article className="flex items-start gap-3">
              <CheckSquare
                className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl">
                  Advanced Technology & Precision
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">
                  Our clinic utilizes cutting-edge dental technology to deliver
                  precise, efficient treatments, ensuring comfort, accuracy, and
                  long-lasting, healthy smiles for every patient.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-3">
              <CheckSquare
                className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">
                  At Dr Smile, every treatment focuses on your comfort, needs, and
                  well-being, ensuring personalized, compassionate care for healthier
                  smiles.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="h-full">
          <img
            src="./Images/E2-1.png"
            alt="Expertise section image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
