import './Footer.css';
import { Mail, Phone, MapPin} from 'lucide-react';
import logo from '../assets/logo1 (2).png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Row 1 */}
        <div className="footer-row">
          {/* Column 1 - Logo & Description */}
          <div className="footer-col">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-desc">
              I'm Vikas Pal, a passionate Web Developer building modern, user-friendly websites with React and the latest technologies.
              I specialize in creating responsive and high-performance websites that help businesses grow their digital presence and stand out online.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" aria-label="Navigate to Home section">Home</a></li>
              <li><a href="#about" aria-label="Navigate to About Us section">About Us</a></li>
              <li><a href="#skill" aria-label="Navigate to Skill section">Skill</a></li>
              <li><a href="#services" aria-label="Navigate to Services section">Services</a></li>
              <li><a href="#projects" aria-label="Navigate to Projects section">Projects</a></li>
              <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <address className="contact-list">
              <div>
                <Phone size={16} /> <a href="tel:+919004207813">+91-9004207813</a>
              </div>
              <div>
                <Mail size={16} /> <a href="mailto:vikaspal9004@gmail.com">vikaspal9004@gmail.com</a>
              </div>
              <div>
                <MapPin size={16} /> <a href="https://www.google.com/maps?q=Wadala+East,+Mumbai,+400037" target="_blank" rel="noopener noreferrer">Wadala East, Mumbai, 400037</a>
              </div>
            </address>
          </div>
        </div>
        {/* Row 2 - Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2025 Developed by Vikas Pal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
