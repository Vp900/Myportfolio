// about.js
import React from 'react';
import './about.css';
<<<<<<< HEAD
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { PiShoppingCartBold, PiBrowsersLight, PiNotePencil, PiBookOpenTextLight } from 'react-icons/pi';
import aboutImage from '../assets/aboutpic.jpeg';
=======
import { FaLinkedin, FaGithub,} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { PiShoppingCartBold, PiBrowsersLight, PiNotePencil, PiBookOpenTextLight } from 'react-icons/pi';
import aboutImage from '../assets/aboutpic.jpg';
>>>>>>> 4ce24a08e72d30bd451793532c70ab6104df8b9f

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
<<<<<<< HEAD
          <img src={aboutImage} alt="Vikas Pal" />
        </div>
        <div className="about-right">
      
          <h2 className="main-heading">About Me</h2>
          <p className="description">
          I’m a passionate and detail-oriented Web Developer with hands-on experience in crafting dynamic, user-focused websites and web applications. My expertise spans across HTML, CSS, JavaScript, React.js, PHP, WordPress, Shopify, Bootstrap, SQL, and Python, allowing me to build everything from sleek front-end designs to efficient, data-driven back-end systems. I take pride in writing clean, optimized code and ensuring every website I create is fully responsive, intuitive, and aligned with the client’s goals.
<br></br><br></br>
Beyond just coding, I enjoy bringing ideas to life through creative problem-solving and modern web technologies. Whether it’s customizing a CMS, developing a robust e-commerce platform, or enhancing user experience, I’m dedicated to delivering high-quality, impactful web solutions that drive results. I constantly explore new tools and frameworks to stay ahead in the ever-evolving digital landscape and to create web experiences that truly stand out. </p>
          <ul className="info-list">
            <div className="info">


              <a href="mailto:vikaspal9004@gmail.com" target="_blank" rel="noopener noreferrer">     <MdEmail className="icon" /></a>

            </div>
            <div className="info">
              <a href="tel:9004207813" target="_blank" rel="noopener noreferrer">      <MdPhone className="icon" /></a>

            </div>
            <div className="info">

              <a href="https://maps.app.goo.gl/GUjN79Cok5uDsUS27" target="_blank" rel="noopener noreferrer">    <MdLocationOn className="icon" /></a>
            </div>
            <div className="info">
              <a href="https://www.linkedin.com/in/vikaspal9004" target="_blank" rel="noopener noreferrer">  <FaLinkedin className="icon" /></a>
            </div>
            <div className="info">

              <a href="https://github.com/Vp900" target="_blank" rel="noopener noreferrer">  <FaGithub className="icon" /></a>
            </div>
          </ul>
    
=======
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
>>>>>>> 4ce24a08e72d30bd451793532c70ab6104df8b9f
        </div>
      </div>
    </section>
  );
}
