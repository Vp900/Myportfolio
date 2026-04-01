import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SkillsSection.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaWordpress, FaShopify, FaGitAlt, FaRobot, FaSms, FaNetworkWired,
  FaPython, FaDocker, FaAws, FaFireAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiOpenai, SiWhatsapp, SiJsonwebtokens,
  SiSocketdotio, SiNextdotjs, SiRedux, SiPostgresql, SiRedis,
  SiZapier, SiStrapi, SiContentful, SiMysql
} from "react-icons/si";

// Import local images for cards
import frontendImg from "../assets/skills/frontend.png";
import backendImg from "../assets/skills/backend.png";
import aiImg from "../assets/skills/ai.png";
import cmsImg from "../assets/skills/cms.png";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Core Web Technologies",
    image: frontendImg,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
    ]
  },
  {
    title: "Backend & Systems",
    image: backendImg,
    skills: [
      { name: "Node & Express", icon: <FaNodeJs /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "System Arch", icon: <FaNetworkWired /> },
      { name: "Auth (JWT)", icon: <SiJsonwebtokens /> },
    ]
  },
  {
    title: "AI & Automation",
    image: aiImg,
    skills: [
      { name: "AI Integration", icon: <SiOpenai /> },
      { name: "Python Scripts", icon: <FaPython /> },
      { name: "WhatsApp API", icon: <SiWhatsapp /> },
      { name: "Zapier Auto", icon: <SiZapier /> },
      { name: "Real-time Sockets", icon: <SiSocketdotio /> },
      { name: "Docker/AWS", icon: <FaDocker /> },
    ]
  },
  {
    title: "CMS & Ecommerce",
    image: cmsImg,
    skills: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Shopify", icon: <FaShopify /> },
      { name: "Strapi Headless", icon: <SiStrapi /> },
      { name: "Contentful", icon: <SiContentful /> },
      { name: "Version Control", icon: <FaGitAlt /> },
      { name: "CPaaS Systems", icon: <FaSms /> },
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.skill-card-v2');

    cards.forEach((card, i) => {
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
          <span className="subtitle-v2">Expertise & Tools</span>
          <h2 className="main-title-v2">Technical Skillset</h2>
          <p className="description-v2">
            Elevating digital products with high-performance architectures, AI-driven workflows,
            and scalable web solutions optimized for the modern era.
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
