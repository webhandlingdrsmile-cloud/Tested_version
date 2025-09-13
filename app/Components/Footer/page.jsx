// components/Footer.jsx
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-5">
      <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-white font-semibold mb-4">
            Discover Your Beautiful New Smile
          </h2>
          <p className="text-sm leading-relaxed">
            Dr Smile Dental Clinic combines advanced technology, expert care, 
            and compassionate service to create healthy, confident, and 
            beautiful smiles.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>General</li>
            <li>Surgical</li>
            <li>Family Dentistry</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Teams</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & Certifications */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MessageCircle size={16} /> +91 8265099118
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 8265099118
            </li>
            <li className="flex items-center gap-2 break-all">
              <Mail size={16} /> Dreshmadentalie@gmail.com
            </li>
          </ul>

          <h3 className="text-white font-semibold mt-6 mb-3">Medical Certifications</h3>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          </div>
          <p className="text-xs mt-2">
            Certifications ensuring safety, quality, and compliance with global standards.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Flipmaxx Global LLP. All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Sitemap</a>
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Manage Cookies</a>
        </div>
      </div>
    </footer>
  );
}
