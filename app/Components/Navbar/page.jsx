"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setSelectedService(pathname);
    }
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? " "
            : "bg-transparent "
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Images/Logo.png"
              alt="Dr Smile Logo"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* ===== Desktop Menu ===== */}
          <nav className="hidden md:flex space-x-8 font-medium items-center text-white">
            <Link href="/About" className="hover:text-[#5a2e1e]">
              About Us
            </Link>

            {/* Desktop Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "services" ? null : "services"
                  )
                }
                className="flex items-center hover:text-[#5a2e1e]"
              >
                Services{" "}
                {activeDropdown === "services" ? (
                  <ChevronUp size={16} className="ml-1" />
                ) : (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 text-black bg-white shadow-lg rounded-lg w-72 p-4 grid gap-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setSelectedService(service.href);
                          setActiveDropdown(null);
                        }}
                        className={`p-2 rounded-md ${
                          selectedService === service.href
                            ? "bg-[#5a2e1e] text-white"
                            : "hover:bg-[#f1e4d6]"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/Teams" className="hover:text-[#5a2e1e]">
              Our Teams
            </Link>
            <Link href="/Gallery" className="hover:text-[#5a2e1e]">
              Gallery
            </Link>
            <Link href="/Blogs" className="hover:text-[#5a2e1e]">
              Blogs
            </Link>
            <Link href="/Contact" className="hover:text-[#5a2e1e]">
              Contact
            </Link>
          </nav>

          {/* ===== Mobile Toggle ===== */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
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

      {/* ===== Mobile Menu (Slide from Right) ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#d7c2ad]/95 z-50 md:hidden flex flex-col p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100"
            >
              <X size={22} className="text-gray-700" />
            </button>

            {/* Links */}
            <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
              <Link href="/About" onClick={() => setMenuOpen(false)}>
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

              <Link href="/teams" onClick={() => setMenuOpen(false)}>
                Our Teams
              </Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
