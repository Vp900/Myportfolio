// about.js
import React from 'react';
import './about.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import aboutImage from '../assets/aboutpic.jpg';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <img src={aboutImage} alt="Vikas Pal" />
        </div>

        <div className="about-right">
          <h2 className="main-heading">About Me</h2>
          <p className="description">
           I’m a dedicated and detail-oriented Website Developer with strong experience in creating modern, responsive and high-quality websites. I specialize in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, WordPress, Shopify, and Bootstrap allowing me to build everything from custom business websites to clean and functional e-commerce platforms.
<br></br><br></br>
With 3+ years of hands-on experience, I focus on delivering websites that are fast, user-friendly and aligned with each client’s goals. I enjoy improving UI/UX, customizing themes, optimizing performance, and developing smooth, interactive web experiences.
<br></br><br></br>
I believe in writing clean, structured code and continuously learning new tools and technologies to stay updated in the evolving digital world. My goal is simple to create websites that not only look great but also perform exceptionally well and help businesses grow online.
<br></br><br></br>
            </p>

          <ul className="info-list">
            <div className="info">
              <a href="mailto:vikaspal9004@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail className="icon" />
              </a>
            </div>
            <div className="info">
              <a href="tel:9004207813" target="_blank" rel="noopener noreferrer">
                <MdPhone className="icon" />
              </a>
            </div>
            <div className="info">
              <a href="https://maps.app.goo.gl/GUjN79Cok5uDsUS27" target="_blank" rel="noopener noreferrer">
                <MdLocationOn className="icon" />
              </a>
            </div>
            <div className="info">
              <a href="https://www.linkedin.com/in/vikaspal9004" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
            <div className="info">
              <a href="https://github.com/Vp900" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
