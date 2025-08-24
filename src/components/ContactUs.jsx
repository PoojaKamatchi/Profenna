import React, { useState } from "react";
import axios from "axios";
import Footer from './Footer';
import Navbar from './Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Phone, Mail, MapPin } from "lucide-react";
import mapImage from '../assets/map.png'; // ✅ map image

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Top title section */}
      <div className="bg-[#7506B1] text-center py-10">
        <h2 className="text-white text-2xl md:text-3xl font-inter font-semibold text-4xl lg:text-5xl leading-none">Contact us</h2>
        <p className="text-white mt-2">Home / Contact Us</p>
      </div>

      {/* Map and form */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* 🗺️ Corrected Map Image */}
        <div className="flex justify-center items-center">
          <img
            src={mapImage}
            alt="Map Location"
            className="rounded-md w-full h-80 object-cover shadow-md"
          />
        </div>

        {/* Contact form */}
        <div>
          <h3 className="font-semibold font-inter text-3xl leading-none mb-4">Contact Information</h3>
          <p className="mb-6 text-gray-600 font-inter font-normal text-xl">Say something to start a live chat!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-1/2 border rounded px-3 py-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-1/2 border rounded px-3 py-2"
                required
              />
            </div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded px-3 py-2"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message"
              className="w-full border rounded px-3 py-2 h-28 resize-none"
              required
            ></textarea>
            <button type="submit" className="bg-[#7506B1] text-white px-6 py-2 rounded">
              Send Now
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Only (Removed image here) */}
      <div className="max-w-6xl mx-auto px-4 py-10 bg-purple-50 rounded-md">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            <Phone size={24} color="#7506B1" />
            <span className="text-[#7506B1] font-inter font-normal text-[20px]">97913 67638</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={24} color="#7506B1" />
            <span className="text-[#7506B1] font-inter font-normal text-[20px]">sale@iprofenautomation.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={24} color="#7506B1" />
            <span className="text-[#7506B1] font-inter font-normal text-[20px]">Your location text here</span>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#"><FaFacebookF className="text-[#7506B1] text-xl" /></a>
            <a href="#"><FaTwitter className="text-[#7506B1] text-xl" /></a>
            <a href="#"><FaLinkedinIn className="text-[#7506B1] text-xl" /></a>
            <a href="#"><FaInstagram className="text-[#7506B1] text-xl" /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
