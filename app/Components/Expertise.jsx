"use client";

import { CheckSquare } from "lucide-react";
import Image from "next/image";
export default function Expertise() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
        <div className="bg-[#f5e9dd] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center h-full">
          <header className="mb-4 sm:mb-6 md:mb-8">
            <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-600 mb-2">
              Expertise
            </h4>
            <h2
              id="expertise-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-[27px] xl:text-[36px] font-bold text-gray-900 leading-tight"
            >
              Trusted dental expertise delivering healthy, confident smiles daily.
            </h2>
          </header>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8">
            Dr Smile combines advanced technology and compassionate care to deliver
            precise, safe, and confident smiles for every patient.
          </p>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <article className="flex items-start gap-3">
              <CheckSquare
                className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl mb-1 md:mb-2">
                  Advanced Technology & Precision
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Our clinic utilizes cutting-edge dental technology to deliver
                  precise, efficient treatments, ensuring comfort, accuracy, and
                  long-lasting, healthy smiles for every patient.
                </p>
              </div>
            </article>
            
            <article className="flex items-start gap-3">
              <CheckSquare
                className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl mb-1 md:mb-2">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  At Dr Smile, every treatment focuses on your comfort, needs, and
                  well-being, ensuring personalized, compassionate care for healthier
                  smiles.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Image Section */}
  <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[300px] w-full">
  <Image
    src="/Images/E2-1.png"
    alt="Expertise section image"
    fill
    className="object-cover"
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
  />
</div>

      </div>
    </section>
  );
}