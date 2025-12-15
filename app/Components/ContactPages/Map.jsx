"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Map() {
  return (
    <section className="w-full bg-black text-white">
      {/* TOP SECTION */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Stay Connected <span className="font-normal">with us</span>
          </h2>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6 text-sm text-gray-300">
            <Info
              icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />}
              text="Mangalassery Tower, Floor Rd, Opposite Ganapathy Temple, Kalamassery, Kochi, Kerala 683104"
            />
            <Info 
              icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />} 
              text="8296099118" 
            />
            <Info 
              icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />} 
              text="dreshsmadrs@gmail.com" 
            />
            <Info
              icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
              text={
                <>
                  Monday - Saturday <br /> 9 am - 7:30 pm <br />
                  Sunday <br /> 10 am - 12 pm
                </>
              }
            />
          </div>
        </div>

        {/* MAP */}
        <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-auto lg:min-h-[400px] p-4 sm:p-6 md:p-8 lg:p-10">
          <iframe
            className="w-full h-full rounded-lg lg:rounded-none"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Mangalassery Tower, Floor Rd, Opposite Ganapathy Temple, Kalamassery, Kochi, Kerala 683104&output=embed"
            title="Dr. Smile Dental Clinic Location"
          ></iframe>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
     
    </section>
  );
}

const Info = ({ icon, text }) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="text-white mt-0.5 sm:mt-1 flex-shrink-0">{icon}</div>
    <p className="text-xs sm:text-sm md:text-base leading-relaxed">{text}</p>
  </div>
);