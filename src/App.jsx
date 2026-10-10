import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Home from "./Pages/Home";
import Products from "./Pages/ProductsPage";
import Footer from "./Componets/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
