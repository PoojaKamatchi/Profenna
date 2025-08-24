import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../assets/logo.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-[#2c0043] text-white text-sm font-light px-8 md:px-20 py-12">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-400 pb-10">
        
        {/* Column 1: Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-lg font-semibold">Tech World</h2>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            A team of experienced designers and developers dedicated to
            creating exceptional websites. Providing custom web solutions and
            Digital Marketing tailored to your specific business goals.
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* Column 2: Services with Links */}
        <div>
          <h3 className="text-base font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/printed" className="hover:underline">Printed Label</Link></li>
            <li><Link to="/woven" className="hover:underline">Woven Label</Link></li>
            <li><Link to="/barcode" className="hover:underline">Barcode Stickers</Link></li>
            <li><Link to="/heattransfer" className="hover:underline">Heat Transfer Stickers</Link></li>
          </ul>
        </div>

        {/* Column 3: Pages */}
        <div>
          <h3 className="text-base font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-base font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> (406) 555-0120
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> mangcoding123@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                2972 Westheimer Rd. Santa Ana,
                <br />
                Illinois 85486
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-300">
        <p>© Copyrights 2023 Techmax All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/privacy" className="hover:underline">Privacy policy</Link>
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
