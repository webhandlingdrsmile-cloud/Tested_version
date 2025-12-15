"use client";

import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FounderSection from "../Components/ContactPages/Founder";
import Form from "../Components/ContactPages/Form";

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
 <Form/>

      </div>
    </>
  );
}
