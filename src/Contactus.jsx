import React, { useState } from "react";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
// import axios from "axios"; // Uncomment when backend is ready

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
      // await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="bg-white">
      <Navbar />

      <div className="bg-[#7506B1] text-center py-10">
        <h2 className="text-white text-4xl md:text-5xl font-semibold">Contact us</h2>
        <p className="text-white mt-2">Home / Contact Us</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Google Map */}
        <div>
          <iframe
            title="Google Map"
            className="w-full h-80 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191341139245!2d-122.08424968468174!3d37.42206597982561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0f74c5ed411%3A0xdaa43c1d40c4f0b0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614723645866!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="font-semibold text-3xl mb-4">Contact Information</h3>
          <p className="mb-6 text-gray-600 text-xl">Say something to start a live chat!</p>
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
                placeholder="Email Address"
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
            <button type="submit" className="bg-[#7506B1] text-white px-10 py-2 rounded">
              Send Now
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center bg-purple-50 rounded-md">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            <Phone size={24} color="#7506B1" />
            <span className="text-[#7506B1] text-[20px]">97913 67638</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={24} color="#7506B1" />
            <span className="text-[#7506B1] text-[20px]">sale@iprofenautomation.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={24} color="#7506B1" />
            <span className="text-[#7506B1] text-[20px]">Your location text here</span>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#"><FaFacebookF className="text-[#7506B1] text-xl" /></a>
            <a href="#"><FaTwitter className="text-[#7506B1] text-xl" /></a>
            <a href="#"><FaLinkedinIn className="text-[#7506B1] text-xl" /></a>
            <a href="#"><FaInstagram className="text-[#7506B1] text-xl" /></a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-48 bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-gray-600">Image Placeholder</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
