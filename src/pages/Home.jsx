import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brand from "../components/Branding";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
