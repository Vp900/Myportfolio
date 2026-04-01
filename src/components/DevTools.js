import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DevTools.css";
import {
  SiPostman, SiCpanel, SiGit, SiGithub, SiDocker, SiFigma,
  SiJira, SiSlack, SiJenkins, SiNginx, SiRedis, SiMongodb,
  SiSwagger, SiFilezilla, SiGrafana, SiPm2, SiLetsencrypt,
  SiCloudflare, SiAmazonwebservices, SiDigitalocean, SiVercel,
  SiNetlify, SiFirebase, SiKubernetes, SiSentry, SiRender,
  SiBitbucket, SiTrello, SiInsomnia, SiGooglecloud, SiHeroku,
  SiTerraform, SiAnsible, SiWebpack, SiBabel, SiVite, SiNpm,
  SiYarn
} from "react-icons/si";
import { FaServer, FaTerminal, FaCloud } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const toolData = [
  { icon: <SiPostman color="#FF6C37" />, name: "Postman", desc: "API Testing & Development" },
  { icon: <FaTerminal color="#0000FF" />, name: "PuTTY", desc: "SSH & Server Access" },
  { icon: <FaServer color="#FF9933" />, name: "WinSCP", desc: "Secure File Transfer" },
  { icon: <SiCpanel color="#FF6C2C" />, name: "cPanel / WHM", desc: "Hosting Management" },
  { icon: <VscCode color="#007ACC" />, name: "VS Code", desc: "Code Editor" },
  { icon: <SiGit color="#F05032" />, name: "Git", desc: "Version Control System" },
  { icon: <SiGithub color="#181717" />, name: "GitHub", desc: "Cloud Git Hosting" },
  { icon: <SiDocker color="#2496ED" />, name: "Docker", desc: "Containerization" },
  { icon: <SiFigma color="#F24E1E" />, name: "Figma", desc: "UI/UX Design" },
  { icon: <SiJira color="#0052CC" />, name: "Jira", desc: "Project Management" },
  { icon: <SiSlack color="#4A154B" />, name: "Slack", desc: "Team Communication" },
  { icon: <SiJenkins color="#D24939" />, name: "Jenkins", desc: "CI/CD Pipeline" },
  { icon: <SiNginx color="#009639" />, name: "Nginx", desc: "Web Server & Proxy" },
  { icon: <SiRedis color="#DC382D" />, name: "Redis", desc: "Caching & Queues" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB", desc: "Database Compass" },
  { icon: <SiSwagger color="#85EA2D" />, name: "Swagger", desc: "API Documentation" },
  { icon: <SiFilezilla color="#BF0000" />, name: "FileZilla", desc: "FTP Client" },
  { icon: <SiGrafana color="#F46800" />, name: "Grafana", desc: "Monitoring & Analytics" },
  { icon: <SiPm2 color="#2B037A" />, name: "PM2", desc: "Process Manager" },
  { icon: <SiLetsencrypt color="#003A70" />, name: "Let's Encrypt", desc: "SSL Certificates" },
  { icon: <SiCloudflare color="#F38020" />, name: "Cloudflare", desc: "CDN & Security" },
  { icon: <SiAmazonwebservices color="#232F3E" />, name: "AWS", desc: "Cloud Computing" },
  { icon: <SiGooglecloud color="#4285F4" />, name: "Google Cloud", desc: "Cloud Platform" },
  { icon: <FaCloud color="#0078D4" />, name: "Azure", desc: "Cloud Computing" },
  { icon: <SiBabel color="#F9DC3E" />, name: "Babel", desc: "JavaScript Compiler" },
  { icon: <SiRender color="#46E3B7" />, name: "Render", desc: "Cloud Hosting" },
  { icon: <SiDigitalocean color="#0080FF" />, name: "DigitalOcean", desc: "Hosting Solutions" },
  { icon: <SiVercel color="#000000" />, name: "Vercel", desc: "Deployment & Hosting" },
  { icon: <SiNetlify color="#00C7B7" />, name: "Netlify", desc: "Serverless Deployment" },
  { icon: <SiFirebase color="#FFCA28" />, name: "Firebase", desc: "Cloud App Dev" },
  { icon: <SiKubernetes color="#326CE5" />, name: "Kubernetes", desc: "Orchestration" },
  { icon: <SiSentry color="#362D59" />, name: "Sentry", desc: "Error Tracking" },
  { icon: <SiBitbucket color="#0052CC" />, name: "Bitbucket", desc: "Git Collaboration" },
  { icon: <SiTrello color="#0052CC" />, name: "Trello", desc: "Visual Planning" },
  { icon: <SiInsomnia color="#4000BF" />, name: "Insomnia", desc: "API Tooling" },
  { icon: <SiHeroku color="#430098" />, name: "Heroku", desc: "Cloud Platform" },
  { icon: <SiTerraform color="#623CE4" />, name: "Terraform", desc: "IaC Tool" },
  { icon: <SiAnsible color="#EE0000" />, name: "Ansible", desc: "Automation" },
  { icon: <SiWebpack color="#8DD6F9" />, name: "Webpack", desc: "Module Bundler" },
  { icon: <SiVite color="#646CFF" />, name: "Vite", desc: "Next-gen Tooling" },
  { icon: <SiNpm color="#CB3837" />, name: "npm", desc: "Package Manager" },
  { icon: <SiYarn color="#2C8EBB" />, name: "Yarn", desc: "Package Branding" }
];

const DevTools = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.tool-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section className="devtools-section" id="tools">
      <div className="container">
        <h2 className="section-title">
          Professional <span className="highlight">Development Tools</span>
        </h2>
        <p className="section-subtitle">
          We use industry-standard tools and software to deliver reliable, 
          secure, and scalable solutions for all our services.
        </p>
        
        <div className="devtools-grid" ref={gridRef}>
          {toolData.map((tool, index) => (
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
