import React from "react";
import "./SkillsSection.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaShopify,
  FaGitAlt,
} from "react-icons/fa";

import skilImage from "../assets/skillpic.jpeg";

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Most Popular Skills</h2>

      <p className="section-description">
        I specialize in building responsive, high-performance, and user-focused
        digital solutions using modern full-stack technologies. With a strong
        foundation in frontend, backend, CMS platforms, and database
        management, I create scalable applications, optimized websites, and
        seamless user experiences.
      </p>

      <div className="skills-container">
        
        {/* LEFT SIDE SKILLS */}
        <div className="skills-left">
          <div className="skill-card">
            <FaHtml5 className="skill-icon" />
            <div>
              <h3>HTML</h3>
              <p>Clean, semantic, SEO-friendly structure.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="skill-icon" />
            <div>
              <h3>CSS</h3>
              <p>Responsive layouts, animations & UI styling.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaJs className="skill-icon" />
            <div>
              <h3>JavaScript</h3>
              <p>Dynamic features & interactive functionality.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaBootstrap className="skill-icon" />
            <div>
              <h3>Bootstrap</h3>
              <p>Fast, mobile-first component development.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaReact className="skill-icon" />
            <div>
              <h3>React.js</h3>
              <p>Reusable components & smooth UI rendering.</p>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="skills-center">
          <img src={skilImage} alt="Vikas Pal" className="center-photo" />
        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className="skills-right">
          <div className="skill-card">
            <FaNodeJs className="skill-icon" />
            <div>
              <h3>Node.js & Express.js</h3>
              <p>REST APIs, backend logic & server handling.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <div>
              <h3>MongoDB & MySQL</h3>
              <p>Data storage, queries & CRUD operations.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaWordpress className="skill-icon" />
            <div>
              <h3>WordPress</h3>
              <p>Theme customization & dynamic CMS setup.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaShopify className="skill-icon" />
            <div>
              <h3>Shopify</h3>
              <p>Store setup, product management & customization.</p>
            </div>
          </div>

          <div className="skill-card">
            <FaGitAlt className="skill-icon" />
            <div>
              <h3>Git & GitHub</h3>
              <p>Version control & collaborative development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
