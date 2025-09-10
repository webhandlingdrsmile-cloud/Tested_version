"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop dropdown
  const [forceOpen, setForceOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false); // mobile dropdown
  const [selectedService, setSelectedService] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setSelectedService(pathname);
    }
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu && forceOpen) {
      setActiveDropdown(null);
      setForceOpen(false);
    } else {
      setActiveDropdown(menu);
      setForceOpen(true);
    }
  };

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
            <Link
              href="/about"
              className="text-sm text-white hover:text-[#5a2e1e]"
            >
              About Us
            </Link>

            <div
              onMouseEnter={() => {
                if (!forceOpen) setActiveDropdown("services");
              }}
              onMouseLeave={() => {
                if (!forceOpen) setActiveDropdown(null);
              }}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className={`text-sm ${
                  activeDropdown === "services"
                    ? "text-[#5a2e1e]"
                    : "text-white hover:text-[#5a2e1e]"
                }`}
              >
                Services
              </button>
            </div>

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

      {/* ===== Desktop Dropdown (Services only) ===== */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            key="services-dropdown"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="hidden md:flex fixed inset-x-0 top-[72px] bg-[#d7c2ad] z-40 h-1/2"
          >
            {/* Left Image */}
            <div className="w-1/3 h-full p-10">
              <img
                src="https://www.bartonassociates.com/wp-content/uploads/2024/10/Blog-Twitter-Facebook-1080x1080-86-1024x1024-1.jpg"
                alt="Preview"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Dropdown Content */}
            <div className="flex-1 p-8 overflow-y-auto">
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
                      setForceOpen(false);
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
                    <span
                      className={selectedService === service.href ? "ml-6" : ""}
                    >
                      {service.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#d7c2ad] z-50 md:hidden flex flex-col p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100"
            >
              <X size={22} className="text-gray-700" />
            </button>

            {/* Links */}
            <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
              <Link href="/about" onClick={toggleMenu}>
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <button
                onClick={() => setMobileDropdown((prev) => !prev)}
                className="flex items-center justify-between"
              >
                <span>Services</span>
                {mobileDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <AnimatePresence>
                {mobileDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 flex flex-col space-y-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setSelectedService(service.href);
                          setMenuOpen(false);
                          setMobileDropdown(false);
                        }}
                        className={`text-sm ${
                          selectedService === service.href
                            ? "text-[#5a2e1e] font-semibold"
                            : "text-gray-600 hover:text-[#5a2e1e]"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/teams" onClick={toggleMenu}>
                Our Teams
              </Link>
              <Link href="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link href="/blogs" onClick={toggleMenu}>
                Blogs
              </Link>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
