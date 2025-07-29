import React from "react";
import img1 from "../assets/sie-logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-[#18172B] text-white pt-10 pb-4 mt-10 border-t border-[#28274a]">
      {/* Top Section: Logo + Name/Desc */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-8 border-b border-[#28274a]">
        {/* Logo + Name */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img src={img1} alt="School Logo" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain" />
          <div>
            <div className="text-xl sm:text-2xl font-bold leading-tight">School of Innovation &<br className="hidden sm:block" />Entrepreneurship</div>
            <div className="text-sm text-gray-400 mt-1">IIT Madras</div>
          </div>
        </div>
        {/* Navigation + Social */}
        <div className="flex flex-col items-center gap-6 flex-1">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <a href="/" className="hover:text-amber-400 transition">Home</a>
            <a href="/about_us" className="hover:text-amber-400 transition">About</a>
            <a href="/news" className="hover:text-amber-400 transition">News</a>
            <a href="/contact" className="hover:text-amber-400 transition">Contact</a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition" aria-label="Facebook"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-red-500 transition" aria-label="YouTube"><FaYoutube size={20} /></a>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right mt-8 lg:mt-0">
          <div className="flex items-center gap-2 text-sm text-gray-300"><HiBuildingOffice2 className="text-white" /> I Floor, Sudha & Shankar Innovation Hub</div>
          <div className="flex items-center gap-2 text-sm text-gray-300"><FaMapMarkerAlt className="text-white" /> IIT Madras, Chennai - 600 036</div>
          <div className="flex items-center gap-2 text-sm text-gray-300"><FaPhoneAlt className="text-white" /> 044 - 2257 8514</div>
          <div className="flex items-center gap-2 text-sm text-gray-300"><FaEnvelope className="text-white" /> office.ie@imail.iitm.ac.in</div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © 2025 School of Innovation & Entrepreneurship. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
