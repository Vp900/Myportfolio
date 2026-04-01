import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';
import { FaLinkedinIn, FaGithub, FaAward, FaProjectDiagram, FaUserCheck } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import aboutImage from '../assets/aboutnew.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const visual = sectionRef.current.querySelector('.about-visual');
    const contentItems = sectionRef.current.querySelector('.about-content').children;
    const highlights = sectionRef.current.querySelectorAll('.highlight-item');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(visual, 
      { opacity: 0, x: -50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(contentItems, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(highlights, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
      "-=0.4"
    );
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Professional Image with Decorative Elements */}
          <div className="about-visual">
            <div className="image-wrapper">
              <img src={aboutImage} alt="Vikas Pal" className="profile-img" />
              <div className="experience-badge">
                <span className="years">3+</span>
                <span className="text">Years of<br/>Experience</span>
              </div>
            </div>
            <div className="decorative-shape"></div>
          </div>

          {/* Right: Structured Professional Bio */}
          <div className="about-content">
            <span className="subtitle">Who I Am</span>
            <h2 className="main-title">Professional Full Stack Developer & AI Enthusiast</h2>
            
            <div className="bio-segments">
              <p className="bio-intro">
                I’m <strong>Vikas Pal</strong>, a dedicated and detail-oriented Full Stack Developer with a passion for building high-performance, scalable, and user-centric digital solutions.
              </p>
              
              <p className="bio-details">
                With 3+ years of expertise in the MERN stack (MongoDB, Express, React, Node.js), I specialize in transforming complex business requirements into seamless web experiences. From AI-integrated chatbots to high-volume bulk messaging platforms, my focus is always on <strong>clean code, optimized performance, and exceptional UI/UX</strong>.
              </p>

              <p className="bio-vision">
                I believe that every line of code should serve a purpose. My goal is to help businesses grow by delivering websites that don't just look great, but perform exceptionally well in the real world.
              </p>
            </div>

            {/* Quick Stats/Highlights */}
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="h-icon"><FaProjectDiagram /></div>
                <div className="h-text">
                  <h4>50+</h4>
                  <span>Projects Delivered</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="h-icon"><FaAward /></div>
                <div className="h-text">
                  <h4>Expert</h4>
                  <span>AI & Automation</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="h-icon"><FaUserCheck /></div>
                <div className="h-text">
                  <h4>100%</h4>
                  <span>Client Focused</span>
                </div>
              </div>
            </div>

            {/* Structured Social/Contact Links */}
            <div className="about-actions">
              <div className="social-links-box">
                <a href="mailto:vikaspal9004@gmail.com" className="action-link" title="Email Me"><MdEmail /></a>
                <a href="tel:9004207813" className="action-link" title="Call Me"><MdPhone /></a>
                <a href="https://www.linkedin.com/in/vikaspal9004" target="_blank" rel="noopener noreferrer" className="action-link" title="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://github.com/Vp900" target="_blank" rel="noopener noreferrer" className="action-link" title="GitHub"><FaGithub /></a>
              </div>
              <a href="#contact" className="contact-btn">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
