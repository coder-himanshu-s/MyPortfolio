import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import ScrollToTop from "./components/ScrollToTop";
import './styles/global.css';
import './styles/animations.css';

function Portfolio() {
  return (
    <Layout>
      <div className="space-y-0">
        <Hero />
        <SocialLinks />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <ScrollToTop />
    </Layout>
  );
}

export default Portfolio;