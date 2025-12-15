"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Form() {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/Images/AB1.png')" }}
    >
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-gray-300/60"></div>

      <div className="relative z-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE CONTENT */}
          <div>
            <h5 className="text-sm font-semibold tracking-wide text-[#704532] uppercase">
              Contact Us
            </h5>

            <h1 className="text-3xl md:text-[40px] font-bold mt-2 leading-snug">
              Get in Touch with{" "}
              <span className="text-[#704532]">Our Caring Team</span>
            </h1>

            <p className="text-gray-700 mt-4 max-w-lg leading-relaxed text-[15px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s.
            </p>

            <div className="mt-10 space-y-7">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#704532] p-4 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-black">Phone Number</p>
                  <p className="text-gray-800 text-[15px]">+91-8793457111</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#704532] p-4 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-black">Email</p>
                  <p className="text-gray-800 text-[15px]">
                    dhealthsmile@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-[#704532] p-4 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-black">Location</p>
                  <p className="text-gray-800 text-[15px] max-w-sm">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-black">Fill The Form Below</h2>
              <div className="w-16 h-[3px] bg-[#704532] mt-2 mb-6 rounded-full"></div>

              {/* NAME ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div>
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

                <div className="flex items-center gap-6 mt-2 text-sm">
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
                  className="w-full mt-1 p-3 bg-[#F4F4F4] rounded-md text-sm outline-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="mt-6 bg-[#704532] text-white w-32 py-2 rounded-md text-sm hover:bg-[#5b3427]">
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
