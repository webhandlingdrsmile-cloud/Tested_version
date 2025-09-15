"use client";

export default function AboutLanding() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center">
      {/* Background Image */}
      <img
        src="./Images/AB1.png" 
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 lg:px-20 text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          About Us
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 leading-relaxed max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <button className="bg-[#3D2A24] hover:bg-[#2b1d18] text-white px-6 py-3  text-sm md:text-base">
            Schedule Now
          </button>
          <button className="border border-white text-white px-6 py-3 text-sm md:text-base">
            📞 +91-8000001111
          </button>
        </div>
      </div>
    </section>
  );
}
