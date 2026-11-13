import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './components/about';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SkillsSection from './components/SkillsSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DevTools from './components/DevTools';
import './components/responsive.css';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Small delay so all DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.animate-section');
      
      sections.forEach((section) => {
        // Set initial visible state so content doesn't flash hidden
        gsap.set(section, { opacity: 1, y: 0 });
        
        gsap.fromTo(section, 
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              // 'play none none none' = animate once, stay visible always
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-app">  
      <section id="home"><Header /></section>
      <div className="animate-section"><Hero/></div>
      <div className="animate-section"><Stats /></div>
      <section id="about" className="animate-section"><About /></section>
      <section id="experience" className="animate-section"><Experience /></section>
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
