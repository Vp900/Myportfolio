import logo from '../assets/logo.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="VIKAS Logo" style={{ height: '40px' }} />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#home" className={`nav-link${activeLink === '#home' ? ' active' : ''}`} onClick={() => handleLinkClick('#home')}>Home</a>
          <a href="#about" className={`nav-link${activeLink === '#about' ? ' active' : ''}`} onClick={() => handleLinkClick('#about')}>About Us</a>
          <a href="#services" className={`nav-link${activeLink === '#services' ? ' active' : ''}`} onClick={() => handleLinkClick('#services')}>Services</a>
          <a href="#projects" className={`nav-link${activeLink === '#projects' ? ' active' : ''}`} onClick={() => handleLinkClick('#projects')}>Projects</a>
          <a href="#blogs" className={`nav-link${activeLink === '#blogs' ? ' active' : ''}`} onClick={() => handleLinkClick('#blogs')}>Blogs</a>
          <a href="#contact" className={`nav-link${activeLink === '#contact' ? ' active' : ''}`} onClick={() => handleLinkClick('#contact')}>Contact</a>
        </nav>

        {/* Call Us Button */}
      <div className="call-button-wrapper">
  <a href="tel:9004207813" className="call-button">Call Now</a>
</div>


        {/* Mobile Menu Toggle (Only show when menu is closed) */}
        {!menuOpen && (
          <button className="menu-toggle" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button in Top Right inside menu */}
            <button className="mobile-close-button" onClick={closeMenu}>
              <X size={24} />
            </button>

            {/* Menu Links */}
            <a href="#home" className={`mobile-link${activeLink === '#home' ? ' active' : ''}`} onClick={() => handleLinkClick('#home')}>Home</a>
            <a href="#about" className={`mobile-link${activeLink === '#about' ? ' active' : ''}`} onClick={() => handleLinkClick('#about')}>About Us</a>
            <a href="#services" className={`mobile-link${activeLink === '#services' ? ' active' : ''}`} onClick={() => handleLinkClick('#services')}>Services</a>
            <a href="#projects" className={`mobile-link${activeLink === '#projects' ? ' active' : ''}`} onClick={() => handleLinkClick('#projects')}>Projects</a>
            <a href="#blogs" className={`mobile-link${activeLink === '#blogs' ? ' active' : ''}`} onClick={() => handleLinkClick('#blogs')}>Blogs</a>
            <a href="#contact" className={`mobile-link${activeLink === '#contact' ? ' active' : ''}`} onClick={() => handleLinkClick('#contact')}>Contact</a>

            {/* Call Button */}
          <a href="tel:9004207813" className="call-button w-full">Call Now</a>

          </div>
        </div>
      )}
    </header>
  );
}