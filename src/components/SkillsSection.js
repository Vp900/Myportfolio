import React from "react";
import "./SkillsSection.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";

import skilImage from "../assets/skillpic.jpeg"; 


const SkillsSection = () => {
  return (
    <section className="skills-section">

  
      <h2 className="section-title">Most Popular Skills</h2>
      <p className="section-description">
       I specialize in delivering robust and innovative web solutions through advanced front-end technologies and responsive frameworks. With strong backend expertise and PHP integration, I ensure every project is efficient, scalable, and performance-driven.    </p>

  
      <div className="skills-container">
        <div className="skills-left">
          <div className="skill-card">
            <FaHtml5 className="skill-icon" />
            <div>
              <h3>HTML</h3>
              <p>Semantic and structured web markup.</p>
            </div>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="skill-icon" />
            <div>
              <h3>CSS</h3>
              <p>Stylish, responsive layouts and themes.</p>
            </div>
          </div>
          <div className="skill-card">
            <FaJs className="skill-icon" />
            <div>
              <h3>JavaScript</h3>
              <p>Interactive, dynamic web interfaces.</p>
            </div>
          </div>
        </div>

       <div className="skills-center">
  <img src={skilImage} alt="Vikas Pal" className="center-photo" />
</div>


        <div className="skills-right">
          <div className="skill-card">
            <FaBootstrap className="skill-icon" />
            <div>
              <h3>Bootstrap</h3>
              <p>Mobile-first responsive design toolkit.</p>
            </div>
          </div>
          <div className="skill-card">
            <FaWordpress className="skill-icon" />
            <div>
              <h3>WordPress</h3>
              <p>Flexible and customizable CMS platform.</p>
            </div>
          </div>
          <div className="skill-card">
            <FaShopify className="skill-icon" />
            <div>
              <h3>Shopify</h3>
              <p>Professional-grade ecommerce development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
