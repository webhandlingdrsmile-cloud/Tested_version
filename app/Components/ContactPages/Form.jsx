"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Form() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* HERO SECTION WITH FORM */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat py-12 md:py-20 px-4 sm:px-6 xl:px-20"
        style={{ backgroundImage: "url('/Images/AB1.png')" }}
      >
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-300/60"></div>

        <div className="relative z-10  mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">
            
            {/* LEFT SIDE CONTENT */}
            <div className="order-2 lg:order-1">
              <h5 className="text-sm font-semibold tracking-wide text-[#704532] uppercase">
                Contact Us
              </h5>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[20px] xl:text-[40px] font-bold mt-2 leading-tight md:leading-snug">
                Get in Touch with{" "}
                <span className="text-[#704532]">Our Caring Team</span>
              </h1>

              <p className="text-gray-700 mt-4 max-w-lg leading-relaxed text-sm md:text-[15px]">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                Ever Since The 1500s.
              </p>

              <div className="mt-8 lg:mt-10 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#704532] p-3 sm:p-4 rounded-full shrink-0">
                    <FaPhoneAlt className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm sm:text-base">Phone Number</p>
                    <p className="text-gray-800 text-sm sm:text-[15px]">+91-8793457111</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#704532] p-3 sm:p-4 rounded-full shrink-0">
                    <FaEnvelope className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm sm:text-base">Email</p>
                    <p className="text-gray-800 text-sm sm:text-[15px]">
                      dhealthsmile@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#704532] p-3 sm:p-4 rounded-full shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm sm:text-base">Location</p>
                    <p className="text-gray-800 text-sm sm:text-[15px] max-w-sm">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And
                      Typesetting Industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="order-1 lg:order-2 relative lg:absolute lg:right-2 xl:right-16 2xl:right-20">
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-lg mx-auto lg:mx-0">
                <h2 className="text-xl sm:text-2xl font-bold text-black">Fill The Form Below</h2>
                <div className="w-16 h-[3px] bg-[#704532] mt-2 mb-6 rounded-full"></div>

                {/* NAME ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full mt-1 p-3 bg-[#F4F4F4] rounded-md text-sm outline-none"
                    />
                  </div>

                  <div className="mt-3 sm:mt-0">
                    <label className="text-sm font-semibold text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full mt-1 p-3 bg-[#F4F4F4] rounded-md text-sm outline-none"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div className="mt-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full mt-1 p-3 bg-[#F4F4F4] rounded-md text-sm outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div className="mt-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full mt-1 p-3 bg-[#F4F4F4] rounded-md text-sm outline-none"
                  />
                </div>

                {/* INSURANCE */}
                <div className="mt-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Do You Have Dental Insurance?
                  </label>

                  <div className="flex items-center gap-4 sm:gap-6 mt-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4" /> Yes
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4" /> No
                    </label>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-4">
                  <label className="text-sm font-semibold text-gray-700">
                    How Can We Help You?
                  </label>
                  <textarea
                    rows="4"
                    className="w-full mt-1 p-3 bg-[#F4F4F4] rounded-md text-sm outline-none resize-none"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button className="mt-6 bg-[#704532] text-white w-full sm:w-32 py-3 sm:py-2 rounded-md text-sm hover:bg-[#5b3427] transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="w-full bg-[#e9dfd7] py-12 md:py-26 lg:py-50  ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-lg h-[280px] sm:h-[320px] lg:h-[420px]">
                <Image
                  src="/Images/CSBG1.png"
                  alt="Moving Solutions"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 p-6 sm:p-8 text-white flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                    We're Your Moving Solutions.
                  </h3>
                  <p className="text-sm mt-3 sm:mt-4 opacity-90 max-w-md">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                  </p>
                  <button className="mt-4 bg-[#704532] text-sm px-4 py-2 w-fit hover:bg-[#5b3427] transition-colors">
                    Schedule Now
                  </button>
                </div>
              </div>

              {/* CONTACT CARD */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center">
                  <Image
                    src="/Images/LG3.png"
                    alt="Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold mt-4 text-lg">Contact Us</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN – FAQ */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Frequently Asked <span className="font-normal">Questions</span> at Dr Smile
              </h2>
              <p className="text-sm text-gray-600 mt-2 mb-6 lg:mb-8 max-w-xl">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
              </p>

              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <div key={index} className="mb-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full bg-[#704532] text-white px-4 sm:px-5 md:px-6 py-4 sm:py-7 rounded-md flex justify-between items-center text-left hover:bg-[#5b3427] transition-colors"
                    >
                      <p className="text-sm font-semibold pr-4 flex-1">{item.q}</p>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && item.a && (
                      <div className="bg-white px-4 sm:px-6 py-4 text-sm text-gray-700 rounded-b-md shadow-md">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const faqs = [
  {
    q: "What is Dr. Smile and what services do you offer?",
    a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  { 
    q: "How do Dr. Smile clear aligners work?",
    a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.", 
  },
  { 
    q: "Is Dr. Smile treatment suitable for everyone?",
    a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.", 
  },
  { 
    q: "How long does the treatment take?",
    a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.", 
  },
  { 
    q: "How much does Dr. Smile treatment cost?",
    a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.", 
  },
];