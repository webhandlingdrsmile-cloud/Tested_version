"use client";

export default function Gallery() {
  return (
    <div className="min-h-full bg-[#E1D5C9] px-4 sm:px-6 md:px-10 py-8 sm:py-10">
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center  py-8">
  <div className="space-y-5">
    <p className="font-extrabold text-md text-[#704532] uppercase tracking-wide">
      Our Gallery
    </p>
    <h1 className="text-2xl sm:text-2xl lg:text-4xl font-semibold text-[#2E2E2E] leading-snug">
      Visual Journey of our <br />
      <span className="text-[#704532] font-bold">Dental Expertise</span>
    </h1>
  </div>

  <div className="max-w-2xl">
    <p className="text-[#4A4A4A] text-sm md:text-md leading-relaxed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>
  </div>
</div>

      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(300px,30%)_minmax(0,70%)] gap-6 md:gap-8 items-start mx-auto">
      
        <div className="flex flex-col">
          <div className="w-full">
            <img
              src="./Images/G1.png"
              alt="Gallery intro"
              className="w-full h-[50vh]  md:h-[40vh] xl:h-[91vh] max-w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img
                    src="./Images/G2.png"
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover shadow-sm hover:scale-105 transition-transform duration-300 "
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}