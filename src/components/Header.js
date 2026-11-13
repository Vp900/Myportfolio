import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo1 (2).png';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer for active link
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skill', 'services', 'projects', 'tools', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(mobileMenuRef.current, 
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    gsap.to(mobileMenuRef.current, {
      x: '100%',
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => setMenuOpen(false)
    });
  };

  const navLinks = [
    { label: 'Home', hash: '#home' },
    { label: 'About', hash: '#about' },
    { label: 'Experience & Edu', hash: '#experience' },
    { label: 'Skills', hash: '#skill' },
    { label: 'Services', hash: '#services' },
    { label: 'Projects', hash: '#projects' },
    { label: 'Tools', hash: '#tools' },
    { label: 'Contact', hash: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-wrapper">
          <img src={logo} alt="VIKAS Logo" />
        </div>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={`nav-link ${activeLink === link.hash ? 'active' : ''}`}
              onClick={() => setActiveLink(link.hash)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="call-button-wrapper">
          <a href="tel:9004207813" className="call-button">Call Now</a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div
            className="mobile-menu"
            ref={mobileMenuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="mobile-close-button" onClick={closeMenu}>
              <X size={28} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                className={`mobile-link ${activeLink === link.hash ? 'active' : ''}`}
                onClick={() => {
                  setActiveLink(link.hash);
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:9004207813" className="call-button" style={{ textAlign: 'center', marginTop: '20px' }}>Call Now</a>
          </div>
        </div>
      )}
    </header>
  );
}