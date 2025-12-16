"use client";

export default function AboutStory() {
  return (
    <section className="bg-[#E1D5C9] py-12 px-6 lg:px-15 xl:px-45  mx-auto py-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <div className="flex justify-center md:justify-end ">
          <img
            src="./Images/AS.png"
            alt="Our Story"
            className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-cover "
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#704532] mb-4">
            Our Story
          </h2>

          <p className="text-xs sm:text-xs md:text-sm text-gray-700 xl:text-[17px] text-start leading-relaxed mb-4 max-w-2xl">
        At Dr Smile, patient comfort and precision come first. Our team of highly experienced orthodontists 
        and dental specialists 
          </p>

          <p className="text-xs sm:text-xs md:text-sm xl:text-[17px] text-gray-700 text-start leading-relaxed mb-6 max-w-2xl">
          ensure every treatment is tailored to your unique needs 
           whether you’re seeking discreet alignment options, corrective orthodontic care
           , or complete dental makeover solutions. From 
           digital smile assessments to painless procedures, we make every 
           visit smooth, stress-free, and rewarding.
          </p>

          <button className="bg-[#704532] text-white px-6 py-3  hover:bg-[#2b1d18] transition text-sm sm:text-base md:text-lg">
            Our Teams
          </button>
        </div>
      </div>
    </section>
  );
}
