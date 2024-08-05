// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import HeaderImage from './components/header_image/HeaderImage';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import About from './components/about/About';
import Contact from './components/contact/Contact'; 

function App() {
  return (
    <Router>
      <div id="container">
        <HeaderImage />
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
