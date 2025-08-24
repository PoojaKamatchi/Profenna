import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Printed from "./Printed";
import Woven from "./Woven";
import Barcode from "./Barcode";
import Heattransfer from "./Heattransfer";
import LabelSidebar from "./components/LabelSidebar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

function Layout() {
  const location = useLocation();

  // Define paths where the sidebar should appear
  const sidebarPaths = ["/printed", "/woven", "/barcode", "/heattransfer"];
  const showSidebar = sidebarPaths.includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <LabelSidebar />}

      {/* Main content with top margin for navbar */}
      <main className="flex-1 mt-20 px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/printed" element={<Printed />} />
          <Route path="/woven" element={<Woven />} />
          <Route path="/barcode" element={<Barcode />} />
          <Route path="/heattransfer" element={<Heattransfer />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
    </Router>
  );
}

export default App;
