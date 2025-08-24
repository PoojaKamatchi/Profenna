import React from "react";
import Footer from './Footer';
import Navbar from './Navbar';

// Image imports (as per your style)
import img18 from '../assets/L1.png';
import img19 from '../assets/L2.png';
import img20 from '../assets/sewing.png';
import img21 from '../assets/L21.png';
import img22 from '../assets/L22.png';
import img23 from '../assets/L23.png';
import img24 from '../assets/L24.png';
import img25 from '../assets/L25.png';

const Aboutus = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      {/* Top Purple Section */}
      <section className="bg-[#7506B1] text-white py-10 text-center">
        <h1 className="font-inter font-semibold text-[40px] leading-[1] tracking-[0]">About Us</h1>
        <p className="font-inter font-normal text-[14px] mt-2">Home / About Us</p>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="md:-mt-40">
          <span className="bg-[#7506B1] font-inter text-[14px] leading-[30px] text-white px-3 py-1 rounded-full mb-4 inline-block">
            ABOUT US
          </span>
          <h2 className="text-2xl md:text-3xl mb-4 font-inter font-semibold">
            Let’s Build Something Creative <br /> Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Item 1 */}
            <div className="flex flex-col items-start text-left space-y-2">
              <img src={img18} alt="Labels" className="w-12 h-12" />
              <p className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0]">Labels</p>
              <p className="text-[#656566] font-inter font-normal text-[14px] leading-[1] tracking-[0]">
                Printed labels in the textile industry <br /> provide essential information about care instructions.
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-start text-left space-y-2">
              <img src={img19} alt="Stickers" className="w-12 h-12" />
              <p className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0]">Stickers</p>
              <p className="text-[#656566] font-inter font-normal text-[14px] leading-[1] tracking-[0]">
                Bar code and heat transfer stickers in <br /> streamline inventory management.
              </p>
            </div>
          </div>
          <button className="bg-[#7506B1] text-white font-inter font-semibold text-[16px] leading-[24px] tracking-[0] px-5 py-2 rounded-md hover:bg-purple-800">
            Contact us
          </button>
        </div>
        <div>
          <img
            src={img20}
            alt="About"
            className="w-full h-3/4 rounded-lg shadow"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F1E6F7] py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="bg-[#53047E] font-inter font-normal text-[14px] leading-[30px] tracking-[0] text-white px-3 py-1 rounded-full text-xs mb-4 inline-block">
            OUR AIM
          </span>
          <h2 className="text-2xl md:text-4xl font-inter font-semibold leading-[1] tracking-[0] text-center mb-8">
            Provide best solution Take a Look Into <br /> Our Best Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {/* Service Item 1 */}
            <div className="rounded-lg p-4 md:p-6 shadow hover:shadow-md transition flex flex-col items-start space-y-2">
              <img src={img21} alt="Labels Products" className="w-6 h-6 mb-2" />
              <p className="font-inter font-bold text-[18px] leading-[32px]">
                Labels products and Accessories
              </p>
              <p className="text-[#474748] font-plusjakarta font-normal text-sm md:text-base lg:text-lg leading-[29px]">
                Labels, products, and accessories aid in brand identification and garment functionality.
              </p>
            </div>

            {/* Service Item 2 */}
            <div className="rounded-lg p-4 md:p-6 shadow hover:shadow-md transition flex flex-col items-start space-y-2">
              <img src={img22} alt="Garment Tech" className="w-6 h-6 mb-2" />
              <p className="font-inter font-bold text-[18px] leading-[32px]">
                Innovations in Garment Technology Smart
              </p>
              <p className="text-[#474748] font-plusjakarta font-normal text-sm md:text-base lg:text-lg leading-[29px]">
                Innovations integrate advanced materials and electronics to create interactive clothing.
              </p>
            </div>

            {/* Service Item 3 */}
            <div className="rounded-lg p-4 md:p-6 shadow hover:shadow-md transition flex flex-col items-start space-y-2">
              <img src={img23} alt="Sustainable Production" className="w-6 h-6 mb-2" />
              <p className="font-inter font-bold text-[18px] leading-[32px]">
                Sustainable Production in Garments
              </p>
              <p className="text-[#474748] font-plusjakarta font-normal text-sm md:text-base lg:text-lg leading-[29px]">
                Sustainable production focuses on eco-friendly processes, reducing waste and impact.
              </p>
            </div>

            {/* Service Item 4 */}
            <div className="rounded-lg p-4 md:p-6 shadow hover:shadow-md transition flex flex-col items-start space-y-2">
              <img src={img24} alt="Garments & Culture" className="w-6 h-6 mb-2" />
              <p className="font-inter font-bold text-[18px] leading-[32px]">
                Garments and Culture Exploring Role in it
              </p>
              <p className="text-[#474748] font-plusjakarta font-normal text-sm md:text-base lg:text-lg leading-[29px]">
                Garments reflect identity and social values in different cultures.
              </p>
            </div>

            {/* Service Item 5 */}
            <div className="rounded-lg p-4 md:p-6 shadow hover:shadow-md transition flex flex-col items-start space-y-2">
              <img src={img25} alt="Bar Code Stickers" className="w-6 h-6 mb-2" />
              <p className="font-inter font-bold text-[18px] leading-[32px]">
                The Future of Bar Code Stickers Trends
              </p>
              <p className="text-[#474748] font-plusjakarta font-normal text-sm md:text-base lg:text-lg leading-[29px]">
                Future trends move towards digital integration and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7506B1] mb-14 text-white rounded-[10px] text-center py-12 ml-20 mr-20 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Provide the highest quality work that<br /> meets your expectation
        </h2>
        <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-100">
          Get Free Consultation
        </button>
      </section>
<Footer/>
     
    </div>
  );
};

export default Aboutus;
