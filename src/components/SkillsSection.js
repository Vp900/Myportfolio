import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SkillsSection.css";
import {
  FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap,
  FaWordpress, FaShopify, FaNetworkWired,
  FaPython, FaPhp, FaDatabase, FaBolt
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiSupabase, SiMysql,
  SiJquery, SiWoocommerce, SiElementor,
  SiAxios, SiJsonwebtokens, SiFigma
} from "react-icons/si";

// Import local images for cards
import frontendImg from "../assets/skills/frontend.png";
import backendImg from "../assets/skills/backend.png";
import aiImg from "../assets/skills/ai.png";
import cmsImg from "../assets/skills/cms.png";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Frontend Development",
    image: frontendImg,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript (ES6+)", icon: <FaJs /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "jQuery & Responsive", icon: <SiJquery /> },
    ]
  },
  {
    title: "Backend & RESTful APIs",
    image: backendImg,
    skills: [
      { name: "Node.js & Express", icon: <FaNodeJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "RESTful APIs", icon: <FaNetworkWired /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
      { name: "Axios & Fetch API", icon: <SiAxios /> },
    ]
  },
  {
    title: "Database Management",
    image: aiImg,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Mongoose ODM", icon: <FaDatabase /> },
      { name: "CRUD Operations", icon: <FaDatabase /> },
    ]
  },
  {
    title: "CMS, E-Commerce & UI/UX",
    image: cmsImg,
    skills: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Shopify", icon: <FaShopify /> },
      { name: "WooCommerce", icon: <SiWoocommerce /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "Figma & Photoshop", icon: <SiFigma /> },
      { name: "SEO & Optimization", icon: <FaBolt /> },
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.skill-card-v2');

    cards.forEach((card) => {
      // Entrance Animation for Cards
      gsap.fromTo(card,
        { opacity: 0, y: 50, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );

      // Stagger Badges inside card
      const badges = card.querySelectorAll('.skill-badge-v2');
      gsap.fromTo(badges,
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });

    // Parallax background effect for cards
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;

        gsap.to(card.querySelector('.card-bg-layer'), {
          x: x * 20,
          y: y * 20,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="skills-section-v2" id="skill" ref={sectionRef}>
      <div className="container">
        <div className="skills-header-v2">
          <span className="subtitle-v2">Expertise & Technologies</span>
          <h2 className="main-title-v2">Technical Skillset</h2>
          <p className="description-v2">
            Professional skill stack aligned with industry standards — specializing in modern frontend,
            scalable backend architectures, database management, CMS platforms, and clean code principles.
          </p>
        </div>

        <div className="skills-grid-v2">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-card-v2">
              <div className="card-bg-layer" style={{ backgroundImage: `url(${group.image})` }}></div>
              <div className="card-overlay-v2"></div>

              <div className="card-content-v2">
                <h3 className="group-title-v2">{group.title}</h3>
                <div className="badges-container-v2">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-badge-v2">
                      <span className="badge-icon-v2">{skill.icon}</span>
                      <span className="badge-name-v2">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
