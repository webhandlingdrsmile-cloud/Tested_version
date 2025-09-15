"use client";

export default function WhyPatients() {
  return (
    <section className="bg-[#E1D5C9] py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Why <span className="font-bold text-black">Patients</span> Trust Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white shadow-md p-8 text-center rounded transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#6B3E2E] hover:text-white">
            <div className="mb-4 text-4xl transition-colors">
              <img src="./Images/WP1.png" alt="Technology" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-medium text-lg mb-2">
              Advanced Dental <br />
              <span className="font-bold">Technology</span>
            </h3>
            <p className="text-gray-600 text-sm transition-colors group-hover:text-white/90">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry Lorem Ipsum Is Simply
            </p>
          </div>
          <div className="group bg-white shadow-md p-8 text-center rounded transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#6B3E2E] hover:text-white">
            <div className="mb-4 text-4xl transition-colors">
              <img src="./Images/WP2.png" alt="Comfort" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-medium text-lg mb-2">
              Comfort-First <br />
              <span className="font-bold">Approach</span>
            </h3>
            <p className="text-gray-600 text-sm transition-colors group-hover:text-white/90">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry Lorem Ipsum Is Simply
            </p>
          </div>
          <div className="group bg-white text-black shadow-md p-8 text-center rounded transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#4B2A1F] hover:text-white">
            <div className="mb-4 text-4xl transition-colors">
              <img src="./Images/WP3.png" alt="Appointments" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-medium text-lg mb-2">
              Flexible <br />
              <span className="font-bold">Appointments</span>
            </h3>
            <p className="text-black text-sm transition-colors group-hover:text-white/90">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry Lorem Ipsum Is Simply
            </p>
          </div>
          <div className="group bg-white shadow-md p-8 text-center rounded transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#6B3E2E] hover:text-white">
            <div className="mb-4 text-4xl transition-colors">
              <img src="./Images/WP4.png" alt="Family Care" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-medium text-lg mb-2">
              Family-Friendly <br />
              <span className="font-bold">Care</span>
            </h3>
            <p className="text-gray-600 text-sm transition-colors group-hover:text-white/90">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry Lorem Ipsum Is Simply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
