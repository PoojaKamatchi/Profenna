import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import img9 from "./assets/3.png";
import LabelSidebar from "./components/LabelSidebar";

 // ✅ Adjusted import path

const Printed = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Page title & breadcrumb */}
        <div className="w-full bg-[#7506B1] py-7">
          <h1 className="text-white font-inter font-semibold leading-none text-4xl text-center mb-2">
            Printed Labels
          </h1>
          <p className="text-white text-center">Home / Printed Labels</p>
        </div>

        {/* Grid layout with padding */}
        <div className="grid md:grid-cols-4 gap-6 px-4 md:px-6 py-8">
          {/* Left Sidebar */}
          <LabelSidebar />

          {/* Main Content */}
          <section className="md:col-span-3 space-y-6 pr-4 md:pr-10">
            <h2 className="text-3xl font-inter font-semibold">Printed Labels</h2>

            {/* Image */}
            <img
              src={img9}
              alt="Printed Labels"
              className="w-full h-auto rounded-[24px]"
            />

            {/* Paragraph */}
            <p className="font-inter font-normal text-[20px]">
              Printed labels in the textile and garment industry play a crucial role in branding,
              information dissemination, and regulatory compliance. These labels often include
              details such as brand name, size, fabric composition, care instructions, and country
              of origin. By providing this information, printed labels help consumers make informed decisions
              about the products they purchase and properly care for them. Additionally, regulatory
              labels that comply with standards help manufacturers avoid penalties.
            </p>

            {/* Blockquote */}
            <blockquote className="border-r-4 border-b-4 border-[#7506B1] font-inter font-normal italic text-[20px] bg-purple-50 p-4 rounded">
              Printed labels in textiles provide essential information about garment care,
              composition, and branding, ensuring consumer satisfaction and regulatory compliance.
              Advances in printing technology and sustainable materials enhance label durability and
              align with eco-friendly practices.
            </blockquote>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Printed;
