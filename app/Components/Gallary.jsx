"use client";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#E1D5C9] px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 xl:grid-cols-[30%_70%] gap-8 items-start">
        
        <div className="p-6 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Visual Journey of Our <br /> Dental Expertise
          </h1>
          <img
            src="./Images/G1.png"
            alt="Gallery intro"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[820px] max-w-sm xl:max-w-full object-cover shadow-md"
          />
        </div>

        <div className="p-6 flex flex-col">
          <p className="text-sm md:text-base max-w-2xl mb-8 text-gray-700 leading-relaxed">
            Explore Dr Smile’s gallery showcasing our dedication to exceptional
            dental care. Witness smile transformations, advanced treatments, and
            happy patients, reflecting our commitment to precision, comfort, and
            confident, healthy smiles.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  src="./Images/G2.png"
                  alt={`Gallery ${i + 1}`}
                  className="w-full aspect-square object-cover rounded-md shadow-sm hover:scale-105 transition-transform"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
