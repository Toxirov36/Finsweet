import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import CompanyPage from "./pages/CompanyPage";
import CareerPage from "./pages/CareerPage";
import CareerInnerPage from "./pages/CareerInnerPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/:jobTitle" element={<CareerInnerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}