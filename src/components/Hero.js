import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import heroImage from '../assets/vikaspic.png'; 
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaCss3Alt, FaHtml5, FaGitAlt, FaChrome, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

const banners = [
  {
    subheading: 'Vp | Full Stack Developer',
    heading: 'Crafting Digital Experiences',
    description: 'Specialized in MERN, AI Integration, and High-Performance Web Architecture.',
  },
  {
    subheading: 'Advanced Web solutions',
    heading: 'Innovative Problem Solving',
    description: 'Building tools that matter—from custom CRMs to bulk messaging systems.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef(null);

  // Entrance & Continuous Animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Staggered Text Reveal
    tl.fromTo(contentRef.current.children, 
      { opacity: 0, x: -30, filter: 'blur(10px)' }, 
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    )
    .fromTo(imageRef.current, 
      { opacity: 0, scale: 0.9, y: 150 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'expo.out' },
      '-=0.8'
    );

    // Floating Background Icons Animation
    const icons = iconsRef.current.querySelectorAll('.floating-icon');
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: 'random(-30, 30)',
        x: 'random(-15, 15)',
        rotation: 'random(-20, 20)',
        duration: `random(4, 6)`,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.1
      });
    });

    // Subtle Background Wave Animation
    gsap.to('.bg-wave', {
      xPercent: 5,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  // Simple Banner Loop
  useEffect(() => {
    const interval = setInterval(() => {
      const items = contentRef.current.querySelectorAll('.animate-text');
      gsap.to(items, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        stagger: 0.05,
        onComplete: () => {
          setCurrent((prev) => (prev + 1) % banners.length);
          gsap.fromTo(items, 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
          );
        }
      });
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* Enhanced Multi-Icon & Wave Background */}
      <div className="hero-bg-shapes" ref={iconsRef}>
        <div className="floating-icon icon-1"><FaReact /></div>
        <div className="floating-icon icon-2"><FaJs /></div>
        <div className="floating-icon icon-3"><FaNodeJs /></div>
        <div className="floating-icon icon-4"><FaDatabase /></div>
        <div className="floating-icon icon-5"><FaCss3Alt /></div>
        <div className="floating-icon icon-6"><FaHtml5 /></div>
        <div className="floating-icon icon-7"><FaGitAlt /></div>
        <div className="floating-icon icon-8"><FaChrome /></div>
        <div className="floating-icon icon-9"><FaAws /></div>
        <div className="floating-icon icon-10"><FaDocker /></div>
        <div className="floating-icon icon-11"><FaPython /></div>
        <div className="floating-icon icon-12"><SiFirebase /></div>
        
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        
        {/* Subtle Decorative Background Waves */}
        <div className="bg-wave wave-alpha">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M0,50 C150,150 350,0 500,50 C650,100 850,0 1000,50 L1000,100 L0,100 Z" fill="rgba(33, 190, 219, 0.03)"></path></svg>
        </div>
        <div className="bg-wave wave-beta">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M0,30 C200,80 400,0 600,30 C800,60 1000,0 1000,30 L1000,100 L0,100 Z" fill="rgba(30, 102, 136, 0.02)"></path></svg>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content" ref={contentRef}>
          <div className="hero-subline animate-text">{banners[current].subheading}</div>
          <h1 className="hero-title animate-text">{banners[current].heading}</h1>
          <p className="hero-desc animate-text">{banners[current].description}</p>
          <div className="hero-actions animate-text">
            <a href="#projects" className="hero-btn primary">Explore Portfolio</a>
            <a href="/Vikas_Pal_FullStack_Developer_Resume.pdf" download className="hero-btn secondary">Get Resume</a>
          </div>
        </div>

        <div className="hero-image-box" ref={imageRef}>
          <div className="photo-halo"></div>
          <div className="glow-effect"></div>
          <img src={heroImage} alt="Vikas Pal" className="profile-photo" />
        </div>
      </div>

      {/* Main Bottom Wave Divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,117.26,128.31,124,209.23,101.91,262.24,87.43,285.34,63.1,321.39,56.44Z" className="shape-fill-stats"></path>
        </svg>
      </div>
    </section>
  );
}
