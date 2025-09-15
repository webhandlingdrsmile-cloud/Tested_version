"use client";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#E1D5C9] px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 xl:grid-cols-[30%_70%] gap-8 items-start">
        
        {/* Left Section */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Visual Journey of Our <br /> Dental Expertise
          </h1>
          <img
            src="./Images/G1.png"
            alt="Gallery intro"
            className="w-full max-w-sm xl:max-w-full h-140 object-cover rounded-md"
          />
        </div>

        {/* Right Section */}
        <div className="p-6">
          <p className="text-sm md:text-base max-w-2xl mb-8 text-gray-700 leading-relaxed">
            Explore Dr Smile’s gallery showcasing our dedication to exceptional
            dental care. Witness smile transformations, advanced treatments, and
            happy patients, reflecting our commitment to precision, comfort, and
            confident, healthy smiles.
          </p>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {Array(6).fill(0).map((_, i) => (
              <img
                key={i}
                src="./Images/G2.png"
                alt={`Gallery ${i + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-md"
              />
            ))}
          </div>

          {/* Slider Dots (static) */}
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
