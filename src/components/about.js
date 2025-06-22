// about.js
import React from 'react';
import './about.css';
import { FaLinkedin, FaGithub,} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { PiShoppingCartBold, PiBrowsersLight, PiNotePencil, PiBookOpenTextLight } from 'react-icons/pi';
import aboutImage from '../assets/aboutpic.jpg';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
     <img src={aboutImage} alt="Vikas Pal" />
        </div>
        <div className="about-right">
          <h5 className="intro-heading">MY INTRO</h5>
          <h2 className="main-heading">About Me</h2>
          <p className="description">
            A highly motivated and skilled Web Developer with expertise in HTML, CSS, JavaScript, WordPress, Shopify, React Js, PHP and Bootstrap. Proficient in building responsive, user-friendly websites and customizing CMS platforms. Passionate about delivering high-quality web solutions.
          </p>
          <ul className="info-list">
             <li><strong>Portfolio:</strong> <a href="https://vikaspalportfolio.netlify.app" target="_blank" rel="noopener noreferrer">vikas-pal.netlify.app</a></li>
            <div className="info">
  <MdEmail className="icon" />
  <span>vikaspal9004@gmail.com</span>
</div>
<div className="info">
  <MdPhone className="icon" />
  <span>+91-9004207813</span>
</div>
<div className="info">
  <MdLocationOn className="icon" />
  <span>Wadala East, Mumbai, 400037</span>
</div>
<div className="info">
  <FaLinkedin className="icon" />
  <a href="https://www.linkedin.com/in/vikaspal9004" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
<div className="info">
  <FaGithub className="icon" />
  <a href="https://github.com/Vp900" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
          </ul>
          <div className="project-types">
            <div className="skills-icons">
  <div className="skills-row">
  <div className="skill">
    <PiShoppingCartBold className="icon" />
    <span>Storefront</span>
  </div>
  <div className="v-divider" />
  <div className="skill">
    <PiBrowsersLight className="icon" />
    <span>Marketplace</span>
  </div>
  <div className="v-divider" />
  <div className="skill">
    <PiNotePencil className="icon" />
    <span>Articles</span>
  </div>
  <div className="v-divider" />
  <div className="skill">
    <PiBookOpenTextLight className="icon" />
    <span>Insights</span>
  </div>
</div>


</div>

          </div>
        </div>
      </div>
    </section>
  );
}
