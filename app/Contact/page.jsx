"use client";

import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FounderSection from "../Components/ContactPages/Founder";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Needs: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/Contact", formData);
      alert("Message sent successfully!");
      setFormData({ Name: "", Email: "", Phone: "", Needs: "", Message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Dr. Smile | Best Dental Clinic in Kochi</title>
        <meta
          name="description"
          content="Get in touch with Dr. Smile Orthodontics & Multispeciality Dental Clinic in Kochi. Book an appointment for dental checkups, teeth cleaning, whitening, and more."
        />
        <meta
          name="keywords"
          content="Dentist in Kochi, Dental Clinic Kochi, Dr Smile, Orthodontics, Teeth Cleaning, Invisalign, Dental Checkup"
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
        <meta property="og:title" content="Contact Dr. Smile | Dental Clinic in Kochi" />
        <meta
          property="og:description"
          content="Reach out to Dr. Smile Dental Clinic for appointments and inquiries."
        />
        <meta property="og:image" content="https://yourdomain.com/Images/Cpage.png" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Dr. Smile | Dental Clinic in Kochi" />
        <meta
          name="twitter:description"
          content="Contact Dr. Smile Dental Clinic for appointments and dental care services in Kochi."
        />
        <meta name="twitter:image" content="https://yourdomain.com/Images/Cpage.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dr Smile Orthodontics & Multispeciality Dental Clinic",
            image: "https://yourdomain.com/Images/Cpage.png",
            "@id": "https://yourdomain.com/contact",
            url: "https://yourdomain.com",
            telephone: "+91 0000000000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mangalassery Tower, Elco Rd, Opp Ganapathy Temple",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              postalCode: "683104",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 09:00-19:30, Su 10:00-19:30",
          })}
        </script>
      </Head>
      <div className="w-full">
      <div
  className="relative bg-cover bg-center h-56 sm:h-110 flex items-center"
  style={{ backgroundImage: "url('/Images/C1.png')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 top-0 px-6 sm:px-8 text-white text-left">
    <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
    <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
      <span className="text-gray-300">Home</span> &nbsp;→&nbsp; Contact Us
    </p>
  </div>
</div>
 <FounderSection/>
        <div className="py-12 sm:py-16 px-4 sm:px-6 xl:px-5 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  Let's Send Us Message!
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Experience Personalized Dental Care With Advanced Treatments, Gentle Techniques.
                </p>
              </div>

              <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#0d3b36] w-5 h-5 sm:w-8 sm:h-6 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-sm">Address</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Mangalassery Tower, Elco Rd, Opposite Ganapathy Temple,
                      Kalamassery, Kochi, Kerala 683104
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#0d3b36] w-5 h-5 sm:w-6 sm:h-6 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-sm">Contact With Us</h3>
                    <p className="text-sm">Call Support: +91 0000000000</p>
                    <p className="text-sm">Call An Appointment: +91 0000000000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#0d3b36] w-5 h-5 sm:w-6 sm:h-6 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-sm">Email Address</h3>
                    <p className="text-sm">drsmile@gmail.com</p>
                    <p className="text-sm">drsmile@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#0d3b36] w-5 h-5 sm:w-6 sm:h-6 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-sm">Opening Hours</h3>
                    <p className="text-sm">Mon - Sat: 9:00 AM - 7:30 PM</p>
                    <p className="text-sm">Sun: 10:00 AM - 7:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-600">
                <span className="font-semibold">Follow Us:</span>
                <a href="#" aria-label="Facebook" className="hover:text-[#0d3b36] transition">Facebook</a>
                <a href="#" aria-label="Twitter" className="hover:text-[#0d3b36] transition">Twitter /X</a>
                <a href="#" aria-label="Instagram" className="hover:text-[#0d3b36] transition">Instagram</a>
                <a href="#" aria-label="Youtube" className="hover:text-[#0d3b36] transition">Youtube</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-md space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="Name"
                  placeholder="First Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  value={formData.Email}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded text-sm sm:text-base"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded text-sm sm:text-base"
                  required
                />
                <select
                  name="Needs"
                  value={formData.Needs}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded text-sm sm:text-base"
                  required
                >
                  <option value="">What Are Your Needs?</option>
                  <option value="Checkup">Dental Checkup</option>
                  <option value="Cleaning">Teeth Cleaning</option>
                  <option value="Whitening">Teeth Whitening</option>
                </select>
              </div>
              <textarea
                name="Message"
                placeholder="Message..."
                value={formData.Message}
                onChange={handleChange}
                rows="5"
                className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#704532] text-white py-3 px-6 rounded hover:bg-[#704532] transition text-sm sm:text-base w-full sm:w-auto"
              >
                Submit Require &gt;
              </button>
            </form>
          </div>
        </div>
        
        <div className="w-full px-4 sm:px-8 lg:px-0 container mx-auto mb-12">
          <iframe
            className="w-full h-64 sm:h-80 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8714770315533!2d76.31991981530807!3d10.0642683928811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f791ec7b5db%3A0xee1f7a53f038f459!2sDr%20Smile%20orthodontics%20and%20multispeciality%20dental%20clinic(INVISALIGN%2C%20CLEAR%20ALIGNER%20%26%20ORTHODONTIC%20BRACES)!5e0!3m2!1sen!2sin!4v1691764876823!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Dr Smile Dental Clinic Location in Kochi"
          ></iframe>
        </div>
      </div>
    </>
  );
}
