import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './components/about';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SkillsSection from './components/SkillsSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DevTools from './components/DevTools';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // Animation starts when top of section hits 80% of viewport
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);

  return (
    <div className="portfolio-app">  
      <section id="home"><Header /></section>
      <div className="animate-section"><Hero/></div>
      <div className="animate-section"><Stats /></div>
      <section id="about" className="animate-section"><About /></section>
      <section id="skill" className="animate-section"><SkillsSection /></section>
      <section id="services" className="animate-section"><Services /></section>
      <section id="projects" className="animate-section"><Projects /></section>
      <section id="tools" className="animate-section"><DevTools /></section>
      <section id="contact" className="animate-section"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;
