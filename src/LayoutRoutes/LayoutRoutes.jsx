import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

import Plans from "../Components/Pages/Plans/Plans";
import Home from "../Components/Pages/Home/Home";
import Courses from "../Components/Pages/Courses/Courses";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/ContactUs/Contact";
import Support from "../Components/Pages/Support/Support";
import Header from "../Components/Header/Header";

function LayoutRoutes() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eduvision-website" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
