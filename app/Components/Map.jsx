"use client";

import { MapPin } from "lucide-react";

export default function Mapss() {
  return (
    <section className="w-full  py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          How To <span className="font-normal">Find Us</span>
        </h2>
        <p className="mt-3 text-xs text-gray-600">
          Fill Up The Form And Ask Your Queries
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="wsqlcvlpewr[l"
            className="inline-flex items-center gap-2 bg-[#6B4A3A] text-white text-sm font-medium px-5 py-2.5 hover:bg-[#5a3f31] transition"
          >
            <MapPin size={16} />
            View On Google Map
          </a>
        </div>
      </div>
    </section>
  );
}
