import React from 'react';
import stich1 from '../assets/stich1.png';
import stich2 from '../assets/stich2.png';
import star from '../assets/star.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import E1 from '../assets/E1.png';
import E2 from '../assets/E2.png';
import E3 from '../assets/E3.png';
import E4 from '../assets/E4.png';
import DoneIcon from '../assets/done.png';
import { FaStar } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from './Footer';

const labels = [
  { name: 'Printed Labels', img: img3 },
  { name: 'Barcode Stickers', img: img4 },
  { name: 'Heat Transfer Stickers', img: img5 },
  { name: 'Woven Labels', img: img6 },
];

const testimonials = [
  {
    name: 'Kandasamy',
    role: 'Customer',
    text: 'I have been using SKA labels for 3 years and they always deliver high quality stickers!',
    img: E1,
    bgColor: 'bg-pink-100',
  },
  {
    name: 'Priya Ashok',
    role: 'Vendor',
    text: 'The woven labels from SKA are very durable and professional-looking. Highly recommended!',
    img: E2,
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Anu Sree',
    role: 'Partner',
    text: 'SKA’s support team is very helpful. They handled our bulk order quickly and efficiently.',
    img: E3,
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Sneha Rathi',
    role: 'Manager',
    text: 'We trust SKA for all our branding needs. They always maintain great standards.',
    img: E4,
    bgColor: 'bg-pink-100',
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
        <div className="w-full lg:w-1/2 text-left space-y-5">
          <p className="text-sm uppercase text-gray-600">Welcome to</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-purple-600">Best Business</span>{' '}
            <span className="text-black">of the</span><br />
            <span className="text-black">Garment Arena</span>
          </h1>
          <p className="text-gray-600 text-base">
            Design Your Style: Unleash Your Creativity on Our Premium Apparel.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-800 transition duration-300">
            Get Free Consultation
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">
          <div className="absolute top-0 right-16 grid grid-cols-4 gap-2 text-gray-400 text-lg z-10">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}>+</span>
            ))}
          </div>

          <div className="relative w-[400px] h-[280px]">
            <img
              src={star}
              alt="Star Icon"
              className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 z-20"
            />
            <div className="absolute top-0 right-0 w-[250px] h-[170px] rounded-xl overflow-hidden shadow-lg z-0">
              <img src={stich1} alt="Sewing Machine" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[250px] h-[170px] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img src={stich2} alt="Stitching Hand" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-purple-100 px-6 md:px-10 py-14 flex flex-col md:flex-row gap-10 items-center">
        <img src={img4} alt="Creative" className="rounded-lg w-full md:w-96" />
        <div className="max-w-xl space-y-4">
          <span className="bg-purple-700 text-white text-sm px-4 py-1 rounded-full">About Us</span>
          <h2 className="text-3xl font-bold">Let’s Build Something Creative Together</h2>
          <p className="text-gray-700">
            SKA specializes in manufacturing all kinds of Printed Labels, Woven Labels, Barcode Stickers & Heat Transfer Stickers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <span className="bg-white px-4 py-2 rounded shadow">Expanding the look of fashion</span>
            <span className="bg-white px-4 py-2 rounded shadow">Best in class for business</span>
            <span className="bg-white px-4 py-2 rounded shadow">Get satisfied label production</span>
            <span className="bg-white px-4 py-2 rounded shadow">Creative Execution</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 bg-white text-center">
        <span className="text-purple-600 text-sm uppercase tracking-widest">Our Services</span>
        <h2 className="text-3xl font-bold mt-3 mb-10 leading-snug">
          Exploring the Role of <br />
          <span className="text-purple-700">Labels & Stickers</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {labels.map((label, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="w-full h-36 flex items-center justify-center">
                <img src={label.img} alt={label.name} className="h-full object-contain rounded" />
              </div>
              <h4 className="font-semibold text-lg mt-4">{label.name}</h4>
              <button className="mt-2 text-sm text-purple-600 underline hover:text-purple-800 transition">
                Learn Today
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="px-6 md:px-12 py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-2">Testimonials</h2>
        <p className="text-gray-500 mb-10 text-lg">What Our Customers Are Saying</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl bg-white">
              <div className="p-6 min-h-[200px] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4 text-yellow-500 text-sm">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                  <div className="text-purple-700 font-medium flex items-center gap-1 text-xs">
                    <img src={DoneIcon} alt="done" className="w-4 h-4" />
                    Testimonial
                  </div>
                </div>
                <p className="text-gray-700 text-left text-sm mb-4">{t.text}</p>
              </div>
              <div className={`${t.bgColor} flex items-center gap-3 px-6 py-4`}>
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-left">
                  <h4 className="font-semibold text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-600">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <div className="bg-purple-700 text-white text-center p-10 rounded-xl my-16">
        <h3 className="text-2xl font-semibold mb-4">
          Provide the highest quality work that meets your expectation
        </h3>
        <button className="bg-white text-purple-700 px-6 py-2 font-semibold rounded shadow hover:bg-gray-100 transition">
          Get Free Consultation
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
