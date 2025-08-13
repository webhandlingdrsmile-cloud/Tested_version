"use client";

import { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Youtube, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header className="w-full">
      <div className="bg-[#03414d] text-gray-200 text-xs sm:text-xs md:text-sm flex justify-between items-center px-4 sm:px-10 h-16 sm:h-13">
        <div className="hidden md:inline text-xs lg:text-sm">Welcome to Dr. Smile Trusted Dental Care for the Whole Family</div>
        <div className="md:hidden text-xs"></div>
        <div className="flex items-center space-x-3 sm:space-x-5 text-xs sm:text-sm">
          <Phone className="w-4 h-4" />
          <span>+91 0000000000</span>
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Email" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4 4v-8"
              />
            </svg>
          </a>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <p className="text-2xl font-bold text-[#03414d] cursor-pointer">Dr.Smile</p>
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <Link href="/">
                <p className="text-gray-700 hover:text-[#03414d] transition cursor-pointer">Home</p>
              </Link>
              <Link href="/about">
                <p className="text-gray-700 hover:text-[#03414d] transition cursor-pointer">About</p>
              </Link>
                <Link href="/Contact">
                <p className="text-gray-700 hover:text-[#03414d] transition cursor-pointer">Contact</p>
              </Link>

              <Link href="/team">
                <p className="text-gray-700 hover:text-[#03414d] transition cursor-pointer">Our Team</p>
              </Link>
              <Link href="/gallery">
                <p className="text-gray-700 hover:text-[#03414d] transition cursor-pointer">Gallery</p>
              </Link>
              <Link href="/blogs">
                <p className="text-gray-700 hover:text-[#03414d] transition cursor-pointer">Blogs</p>
              </Link>
              <Link href="/Contact">
                <p className="text-gray-700 hover:text-[#03414d] transition  cursor-pointer">
                  Contact Us
                </p>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link href="/Booking">
                <p className="bg-[#03414d] text-white px-4 py-2 rounded hover:bg-[#022a32] transition cursor-pointer">
                  Book Appointment &rarr;
                </p>
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                className="text-[#03414d] hover:text-[#022a32]"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/">
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                >
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                >
                  About
                </p>
              </Link>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition focus:outline-none"
                >
                  Services
                  <svg
                    className={`h-4 w-4 transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4">
                    <Link href="/services/checkup">
                      <p
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                      >
                        Checkup
                      </p>
                    </Link>
                    <Link href="/services/cleaning">
                      <p
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                      >
                        Cleaning
                      </p>
                    </Link>
                    <Link href="/services/whitening">
                      <p
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                      >
                        Whitening
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/team">
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                >
                  Our Team
                </p>
              </Link>
              <Link href="/gallery">
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                >
                  Gallery
                </p>
              </Link>
              <Link href="/blogs">
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white transition cursor-pointer"
                >
                  Blogs
                </p>
              </Link>
              <Link href="/contact">
                <p
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-[#03414d] hover:text-white font-semibold transition cursor-pointer"
                >
                  Contact Us
                </p>
              </Link>

              <div className="mt-2 px-3">
                <Link href="/Booking">
                  <p
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-[#03414d] text-white text-center py-2 rounded hover:bg-[#022a32] transition cursor-pointer"
                  >
                    Book Appointment &rarr;
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
