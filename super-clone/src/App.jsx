import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'; 

// Import all pages
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Showcase from "./pages/Showcase";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Guides from "./pages/Guides";
import Blog from "./pages/Blog";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

       <Footer />
    </>
  );
}

export default App;

