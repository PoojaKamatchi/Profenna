import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; // Make sure the logo path is correct

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-6 lg:px-16 py-4">
        
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg text-black-800">LOGO</span>
        </div>

        {/* Right: Navigation Links */}
        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-purple-600 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-600 transition duration-200">
            About Us
          </Link>

          {/* Pricing goes to Printed page */}
          <Link to="/printed" className="hover:text-purple-600 transition duration-200">
            Pricing
          </Link>

          <Link to="/contact" className="hover:text-purple-600 transition duration-200">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
