import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import logo from '../assets/logo1 (2).png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top-gradient"></div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Branding & Bio */}
          <div className="footer-column branding">
            <img src={logo} alt="Vikas Pal Logo" className="footer-logo" />
            <p className="footer-bio">
              Empowering businesses with scalable, high-performance web solutions. Specialized in Full Stack Development (React.js, Node.js, Python), Database Systems (MongoDB, PostgreSQL, Supabase), and CMS Solutions (WordPress, Shopify).
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="column-title">Quick Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience & Education</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Expert Services */}
          <div className="footer-column">
            <h3 className="column-title">Expert Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Full Stack Web Dev</a></li>
              <li><a href="#services">RESTful API Architecture</a></li>
              <li><a href="#services">Database Management</a></li>
              <li><a href="#services">WordPress & Shopify</a></li>
              <li><a href="#services">Quiz & ERP Portals</a></li>
              <li><a href="#services">Speed & SEO Optimization</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-column">
            <h3 className="column-title">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919004207813">+91 9004207813</a>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:vikaspal9004@gmail.com">vikaspal9004@gmail.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Maharishi Nagar, IIM Road, Lucknow, UP - 226013</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} <strong>Vikas Pal</strong>. Created and designed by <strong>Eng Vikas Pal</strong>.</p>
          </div>

          <div className="footer-social-bottom">
            <a href="https://www.linkedin.com/in/vikaspal9004" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="https://github.com/Vp900" target="_blank" rel="noopener noreferrer" className="social-icon github"><FaGithub /></a>
            <a href="https://wa.me/919004207813" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><FaWhatsapp /></a>
          </div>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
