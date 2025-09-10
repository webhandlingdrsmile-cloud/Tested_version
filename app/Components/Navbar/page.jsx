"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Check } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile
  const [selectedService, setSelectedService] = useState(null);

  const pathname = usePathname();

  // ✅ Auto-select service on page load if URL matches
  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setSelectedService(pathname);
    }
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const openDropdown = (menu) =>
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  const toggleMobileDropdown = (menu) =>
    setMobileDropdown((prev) => (prev === menu ? null : menu));

  // ✅ Services List
  const services = [
    { href: "/services/orthodontics", label: "Orthodontics Department" },
    { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
    { href: "/services/endodontics", label: "Endodontics (Root Canal)" },
    { href: "/services/pediatric-dentistry", label: "Pediatric Dentistry" },
    { href: "/services/prosthodontics", label: "Prosthodontics" },
    { href: "/services/implant-dentistry", label: "Implant Dentistry" },
    { href: "/services/periodontics", label: "Periodontics" },
    { href: "/services/oral-surgery", label: "Oral Surgery" },
    { href: "/services/digital-dentistry", label: "Digital Dentistry" },
  ];

  return (
    <>
      {/* ===== Navbar Header ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          menuOpen || activeDropdown ? "bg-[#d7c2ad]" : "backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Images/Logo.png"
              alt="Dr Smile Logo"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* ===== Desktop Links ===== */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {/* About Us */}
            <div
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => openDropdown("about")}
                className={`text-sm ${
                  activeDropdown === "about"
                    ? "text-[#5a2e1e]"
                    : "text-white hover:text-[#5a2e1e]"
                }`}
              >
                About Us
              </button>
            </div>

            {/* Services */}
            <div
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => openDropdown("services")}
                className={`text-sm ${
                  activeDropdown === "services"
                    ? "text-[#5a2e1e]"
                    : "text-white hover:text-[#5a2e1e]"
                }`}
              >
                Services
              </button>
            </div>

            {/* Other Links */}
            <Link href="/teams" className="text-white hover:text-[#5a2e1e] text-sm">
              Our Teams
            </Link>
            <Link href="/gallery" className="text-white hover:text-[#5a2e1e] text-sm">
              Gallery
            </Link>
            <Link href="/blogs" className="text-white hover:text-[#5a2e1e] text-sm">
              Blogs
            </Link>
            <Link href="/contact" className="text-white hover:text-[#5a2e1e] text-sm">
              Contact
            </Link>
          </nav>

          {/* ===== Mobile Toggle ===== */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition"
          >
            {menuOpen ? (
              <X size={22} className="text-[#5a2e1e]" />
            ) : (
              <Menu size={22} className="text-[#5a2e1e]" />
            )}
          </button>
        </div>
      </header>

      {/* ===== Desktop Dropdown ===== */}
      {activeDropdown && (
        <div className="hidden md:flex fixed inset-x-0 top-[72px] bg-[#d7c2ad] z-40 h-1/2">
          {/* Left Image */}
          <div className="w-1/3 h-full">
            <img
              src="https://www.bartonassociates.com/wp-content/uploads/2024/10/Blog-Twitter-Facebook-1080x1080-86-1024x1024-1.jpg"
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dropdown Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {activeDropdown === "about" && (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  About Us
                </h2>
                <p className="text-gray-700 mb-2">
                  Welcome to Dr. Smile! We are committed to providing world-class
                  dental care with modern technology and personalized treatment.
                </p>
                <p className="text-gray-700">
                  Our team of experienced doctors ensures that every patient
                  leaves with a confident and healthy smile.
                </p>
              </>
            )}

            {activeDropdown === "services" && (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setSelectedService(service.href);
                        setActiveDropdown(null);
                      }}
                      className={`flex items-center p-2 rounded-md transition-colors ${
                        selectedService === service.href
                          ? "bg-[#5a2e1e] text-white"
                          : "hover:bg-[#e8d9cb]"
                      }`}
                    >
                      {selectedService === service.href && (
                        <Check size={16} className="mr-2" />
                      )}
                      <span className={selectedService === service.href ? "ml-6" : ""}>
                        {service.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-[#d7c2ad] h-screen z-40 shadow-lg overflow-y-auto">
          <ul className="flex flex-col p-6 space-y-4 text-gray-800 font-medium text-lg">
            {/* About Us */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("about")}
                className="flex items-center justify-between w-full hover:text-[#5a2e1e]"
              >
                About Us <ChevronDown size={18} />
              </button>
              {mobileDropdown === "about" && (
                <div className="pl-4 mt-2 text-sm text-gray-700">
                  <p>
                    Welcome to Dr. Smile! We are committed to world-class dental
                    care with modern technology and personalized treatment.
                  </p>
                </div>
              )}
            </li>

            {/* Services */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between w-full hover:text-[#5a2e1e]"
              >
                Services <ChevronDown size={18} />
              </button>
              {mobileDropdown === "services" && (
                <div className="pl-4 mt-2 flex flex-col space-y-2 text-sm text-gray-700">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setSelectedService(service.href);
                        setMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className={`flex items-center p-2 rounded-md transition-colors ${
                        selectedService === service.href
                          ? "bg-[#5a2e1e] text-white"
                          : "hover:bg-[#e8d9cb]"
                      }`}
                    >
                      {selectedService === service.href && (
                        <Check size={16} className="mr-2" />
                      )}
                      <span className={selectedService === service.href ? "ml-6" : ""}>
                        {service.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Other Links */}
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