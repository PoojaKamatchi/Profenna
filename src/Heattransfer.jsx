
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import img12 from "./assets/4.png";
import LabelSidebar from "./components/LabelSidebar";
// ✅ adjust path as needed

const Heattransfer = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Page title & breadcrumb */}
        <div className="w-full bg-[#7506B1] py-7">
          <h1 className="text-white font-inter font-semibold leading-none text-4xl text-center mb-2">
            Heat Transfer Stickers
          </h1>
          <p className="text-white text-center">Home / Heat Transfer Stickers</p>
        </div>

        {/* Grid layout with padding */}
        <div className="grid md:grid-cols-4 gap-6 px-4 md:px-6 py-8">
          {/* Left Sidebar */}
          <LabelSidebar />

          {/* Main Content */}
          <section className="md:col-span-3 space-y-6">
            <h2 className="text-3xl font-inter font-semibold">Heat Transfer Stickers</h2>

            {/* Image */}
            <img
              src={img12} // ✅ use the correct image variable
              alt="Heat Transfer Stickers"
              className="w-full h-auto rounded-[24px]"
            />

            {/* Paragraphs */}
            <p className="font-inter font-normal text-[20px]">
              Heat transfer stickers have revolutionized the textile and garment
              industry by offering a versatile and efficient method of customization. These stickers, often made of vinyl or similar materials, adhere to fabric through heat and pressure, creating vibrant designs and logos that are durable and wash-resistant. They allow for intricate detailing and can be applied quickly, making them ideal for both large-scale manufacturing and individualized designs. 
              From personalized t-shirts to branded sportswear, heat transfer stickers
              provide a flexible solution that combines aesthetics with practicality,
              transforming garments into unique expressions of style and identity.
            </p>

            {/* Blockquote */}
            <blockquote className="border-r-4 border-b-4 border-[#7506B1] font-inter font-normal italic text-[20px] bg-purple-50 p-4 rounded">
              Heat transfer stickers offer durable and
              wash-resistant customization for textiles and garments.
            </blockquote>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Heattransfer;
