import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Overview from "./pages/Overview";

export default function App() {
  return (
    <BrowserRouter>
      {/* Wrapper utama agar konten minimal setinggi layar */}
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        
        {/* Main mengatur flex-grow agar konten mengisi ruang kosong di antara Nav dan Footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}