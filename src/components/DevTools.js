import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DevTools.css";
import {
  SiPostman, SiCpanel, SiGit, SiGithub, SiFigma,
  SiMongodb, SiPostgresql, SiMysql, SiSupabase,
  SiVercel, SiNetlify, SiRender, SiCanva, SiAdobephotoshop,
  SiOpenai, SiGooglegemini, SiHostinger
} from "react-icons/si";
import { 
  FaServer, FaTerminal, FaCode, FaRobot,
  FaFileExcel, FaLaptopCode, FaGlobe, FaBrain
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const toolCategories = [
  { id: "all", label: "All Tools" },
  { id: "ai", label: "AI & Assistants" },
  { id: "editors", label: "Editors & IDEs" },
  { id: "databases", label: "Databases & APIs" },
  { id: "hosting", label: "Hosting & Cloud" },
  { id: "design", label: "Design & Office" }
];

const toolData = [
  // AI Coding Assistants & Productivity (Directly from Resume)
  { category: "ai", icon: <FaBrain color="#10a37f" />, name: "Google Antigravity", desc: "Agentic AI & Engineering System" },
  { category: "ai", icon: <SiOpenai color="#10a37f" />, name: "ChatGPT", desc: "AI Coding & Solution Architecture" },
  { category: "ai", icon: <FaRobot color="#24292e" />, name: "GitHub Copilot", desc: "AI Pair Programming" },
  { category: "ai", icon: <FaCode color="#d97706" />, name: "Claude & Claude Code", desc: "Anthropic AI Coding & Analysis" },
  { category: "ai", icon: <SiGooglegemini color="#4285f4" />, name: "Google Gemini", desc: "Multimodal AI & Research" },
  { category: "ai", icon: <FaRobot color="#8b5cf6" />, name: "Cursor AI", desc: "AI-First Code Editor" },
  { category: "ai", icon: <FaBrain color="#06b6d4" />, name: "Perplexity AI & Grok", desc: "Technical Research & Prompt Eng." },
  { category: "ai", icon: <FaLaptopCode color="#f97316" />, name: "Bolt.new & OpenCode", desc: "Rapid Full-Stack Prototyping" },

  // Code Editors & IDEs (Resume Page 3)
  { category: "editors", icon: <VscCode color="#007ACC" />, name: "VS Code", desc: "Primary Code Editor & Extensions" },
  { category: "editors", icon: <FaLaptopCode color="#5c2d91" />, name: "Visual Studio", desc: "Full IDE for Development" },
  { category: "editors", icon: <FaTerminal color="#c7254e" />, name: "Spyder & Python IDLE", desc: "Python Scripting & Testing" },
  { category: "editors", icon: <FaTerminal color="#0000FF" />, name: "Turbo C++", desc: "C / C++ Environment" },

  // Database & API Tools (Resume Page 3)
  { category: "databases", icon: <SiPostman color="#FF6C37" />, name: "Postman", desc: "REST API Testing & Documentation" },
  { category: "databases", icon: <SiMongodb color="#47A248" />, name: "MongoDB Compass", desc: "GUI for MongoDB Clusters" },
  { category: "databases", icon: <SiMysql color="#00758F" />, name: "MySQL Workbench", desc: "Relational Schema & SQL Queries" },
  { category: "databases", icon: <SiPostgresql color="#336791" />, name: "PostgreSQL", desc: "Enterprise Relational Database" },
  { category: "databases", icon: <SiSupabase color="#3ECF8E" />, name: "Supabase", desc: "Open-Source Backend & Postgres" },
  { category: "databases", icon: <FaServer color="#CC292B" />, name: "Microsoft SSMS", desc: "SQL Server Management Studio" },

  // Web Hosting & Server Management (Resume Page 3)
  { category: "hosting", icon: <SiCpanel color="#FF6C2C" />, name: "cPanel & WHM", desc: "Web Hosting & Server Management" },
  { category: "hosting", icon: <SiHostinger color="#673DE6" />, name: "Hostinger & HostGator", desc: "Web Hosting & DNS Setup" },
  { category: "hosting", icon: <FaGlobe color="#0080FF" />, name: "BigRock & GoDaddy", desc: "Domain & DNS Management" },
  { category: "hosting", icon: <SiVercel color="#000000" />, name: "Vercel", desc: "Frontend & Serverless Hosting" },
  { category: "hosting", icon: <SiNetlify color="#00C7B7" />, name: "Netlify", desc: "Production App Deployment" },
  { category: "hosting", icon: <SiRender color="#46E3B7" />, name: "Render", desc: "Cloud Web Services & APIs" },
  { category: "hosting", icon: <FaServer color="#FF9933" />, name: "FTP / SFTP", desc: "Secure File Transfer & Deployments" },

  // Version Control & Collaboration
  { category: "editors", icon: <SiGit color="#F05032" />, name: "Git", desc: "Version Control System" },
  { category: "editors", icon: <SiGithub color="#181717" />, name: "GitHub", desc: "Repository Management & Collaboration" },

  // Design & Office Productivity (Resume Page 3 & 4)
  { category: "design", icon: <SiFigma color="#F24E1E" />, name: "Figma", desc: "UI/UX Design & Wireframing" },
  { category: "design", icon: <SiAdobephotoshop color="#31A8FF" />, name: "Adobe Photoshop", desc: "Certified Graphic Design (76%)" },
  { category: "design", icon: <SiCanva color="#00C4CC" />, name: "Canva", desc: "Branding, Assets & Social Graphics" },
  { category: "design", icon: <FaFileExcel color="#107C41" />, name: "Advanced Excel & MS Office", desc: "Data Analysis & Documentation (88%)" },
];

const DevTools = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const gridRef = useRef(null);

  const filteredTools = selectedCategory === "all" 
    ? toolData 
    : toolData.filter(tool => tool.category === selectedCategory);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.tool-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power2.out'
        }
      );
    }
  }, [selectedCategory]);

  return (
    <section className="devtools-section" id="tools">
      <div className="container">
        <div className="devtools-header">
          <span className="subtitle">Tools & Environment</span>
          <h2 className="section-title">
            Software & <span className="highlight">Tools Skills</span>
          </h2>
          <p className="section-subtitle">
            Industry-standard tools, IDEs, database managers, AI coding assistants, and cloud platforms
            mastered throughout my professional development journey.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="tools-filter-bar">
          {toolCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="devtools-grid" ref={gridRef}>
          {filteredTools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon-wrapper">
                {tool.icon}
              </div>
              <div className="tool-info">
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevTools;
