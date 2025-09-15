"use client";

export default function AboutStory() {
  return (
    <section className="bg-[#E1D5C9] py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image */}
        <div>
          <img
            src="./Images/AS.png" // replace with your image
            alt="Our Story"
            className="w-full h-119 object-cover rounded-md shadow"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <button className="bg-[#3D2A24] text-white px-6 py-3 rounded-md hover:bg-[#2b1d18] transition">
            Our Teams
          </button>
        </div>
      </div>
    </section>
  );
}
