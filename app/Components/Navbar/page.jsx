"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openDropdown = (menu) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);

  return (
    <>
      {/* ===== Navbar Header ===== */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300
          ${menuOpen || activeDropdown ? "bg-[#d7c2ad]" : "backdrop-blur-md"}
        `}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Dr Smile Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* ===== Desktop Navbar Links ===== */}
          <nav className="hidden md:flex space-x-6 font-medium text-gray-800 text-lg">
            <div
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => openDropdown("about")}
                className={`hover:text-[#5a2e1e] text-white text-sm ${
                  activeDropdown === "about" ? "text-[#5a2e1e]" : ""
                }`}
              >
                About Us
              </button>
            </div>

            <div
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => openDropdown("services")}
                className={`hover:text-[#5a2e1e] text-white text-sm ${
                  activeDropdown === "services" ? "text-[#5a2e1e]" : ""
                }`}
              >
                Services
              </button>
            </div>

            <Link href="/teams" className="hover:text-[#5a2e1e] text-white text-sm">
              Our Teams
            </Link>
            <Link href="/gallery" className="hover:text-[#5a2e1e] text-white text-sm">
              Gallery
            </Link>
            <Link href="/blogs" className="hover:text-[#5a2e1e] text-white text-sm">
              Blogs
            </Link>
            <Link href="/contact" className="hover:text-[#5a2e1e] text-white text-sm">
              Contact
            </Link>
          </nav>

          {/* ===== Floating Button (Mobile Only) ===== */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition z-50"
          >
            {menuOpen ? (
              <X size={20} className="text-[#5a2e1e]" />
            ) : (
              <Menu size={20} className="text-[#5a2e1e]" />
            )}
          </button>
        </div>
      </header>

      {/* ===== Desktop Dropdown Overlay ===== */}
      {(menuOpen || activeDropdown) && (
        <div className="hidden md:flex fixed inset-0 bg-[#d7c2ad] z-40 h-1/2 flex-row mt-[72px]">
          {/* Left image */}
          <div className="w-1/3 h-full px-4">
            <img
              src="https://www.bartonassociates.com/wp-content/uploads/2024/10/Blog-Twitter-Facebook-1080x1080-86-1024x1024-1.jpg"
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {activeDropdown === "about"
                  ? "About Us"
                  : activeDropdown === "services"
                  ? "Services"
                  : ""}
              </h2>
            </div>

            {/* About Us Content */}
            {activeDropdown === "about" && (
              <div className="prose max-w-3xl text-gray-800">
                <p>
                  Welcome to Dr. Smile! We are committed to providing
                  world-class dental care with modern technology and
                  personalized treatment.
                </p>
                <p>
                  Our team of experienced doctors ensures that every
                  patient walks out with a healthy and confident smile.
                </p>
              </div>
            )}

            {/* Services Content */}
            {activeDropdown === "services" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                <Link href="/services/orthodontics">Orthodontics Department</Link>
                <Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link>
                <Link href="/services/endodontics">Endodontics (Root Canal)</Link>
                <Link href="/services/pediatric-dentistry">Pediatric Dentistry</Link>
                <Link href="/services/prosthodontics">Prosthodontics</Link>
                <Link href="/services/implant-dentistry">Implant Dentistry</Link>
                <Link href="/services/periodontics">Periodontics</Link>
                <Link href="/services/oral-surgery">Oral Surgery</Link>
                <Link href="/services/digital-dentistry">Digital Dentistry</Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== Mobile Slide Down Nav ===== */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-[#d7c2ad] h-screen z-40 shadow-lg">
          <ul className="flex flex-col p-6 space-y-4 text-gray-800 font-medium text-lg">
            <li>
              <button
                onClick={() => openDropdown("about")}
                className="flex items-center justify-between w-full hover:text-[#5a2e1e]"
              >
                About Us <ChevronDown size={18} />
              </button>
              {activeDropdown === "about" && (
                <div className="pl-4 mt-2 text-sm text-gray-700">
                  <p>
                    Welcome to Dr. Smile! We are committed to world-class dental
                    care with modern technology and personalized treatment.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => openDropdown("services")}
                className="flex items-center justify-between w-full hover:text-[#5a2e1e]"
              >
                Services <ChevronDown size={18} />
              </button>
              {activeDropdown === "services" && (
                <div className="pl-4 mt-2 flex flex-col space-y-2 text-sm text-gray-700">
                  <Link href="/services/orthodontics">Orthodontics</Link>
                  <Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link>
                  <Link href="/services/endodontics">Endodontics</Link>
                  <Link href="/services/pediatric-dentistry">Pediatric Dentistry</Link>
                  <Link href="/services/prosthodontics">Prosthodontics</Link>
                  <Link href="/services/implant-dentistry">Implant Dentistry</Link>
                  <Link href="/services/periodontics">Periodontics</Link>
                  <Link href="/services/oral-surgery">Oral Surgery</Link>
                  <Link href="/services/digital-dentistry">Digital Dentistry</Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/teams" className="hover:text-[#5a2e1e]">
                Our Teams
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#5a2e1e]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#5a2e1e]">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#5a2e1e]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
