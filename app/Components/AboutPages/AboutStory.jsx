"use client";

export default function AboutStory() {
  return (
    <section className="bg-[#E1D5C9] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <div className="flex justify-center md:justify-end xl:p-12">
          <img
            src="./Images/AS.png"
            alt="Our Story"
            className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-cover "
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>

          <p className="text-xs sm:text-xs md:text-sm text-gray-700 xl:text-lg text-start leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been.
          </p>

          <p className="text-xs sm:text-xs md:text-sm xl:text-lg text-gray-700 text-start leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>

          <button className="bg-[#3D2A24] text-white px-6 py-3 hover:bg-[#2b1d18] transition text-sm sm:text-base md:text-lg">
            Our Teams
          </button>
        </div>
      </div>
    </section>
  );
}
