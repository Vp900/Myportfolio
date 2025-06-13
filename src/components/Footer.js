import './Footer.css';
import { Mail, Phone, MapPin} from 'lucide-react';
import logo from '../assets/logo.png';

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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#skill">Skill</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <Mail size={16} />
                <a href="mailto:vikaspal9004@gmail.com">vikaspal9004@gmail.com</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+919004207813">+91-9004207813</a>
              </li>
              <li>
                <MapPin size={16} />
                <a href="https://www.google.com/maps?q=Wadala+East,+Mumbai,+400037" target="_blank" rel="noopener noreferrer">
                  Wadala East, Mumbai, 400037
                </a>
              </li>
             
            </ul>
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
