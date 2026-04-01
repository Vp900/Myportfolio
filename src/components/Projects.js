import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'NotifyNow Platform',
    image: require('../assets/notifynow.png'),
    link: 'https://notifynow.in/',
    tags: ['MERN', 'AI', 'CPaaS'],
    description: 'A comprehensive CPaaS platform for bulk messaging (SMS, WhatsApp, RCS) with high-volume queue management and real-time event processing.'
  },
  {
    title: 'Ila Fashion Ecommerce',
    image: require('../assets/ivafashion.png'),
    link: 'https://iva-fashion-1.onrender.com/',
    tags: ['Next.js', 'Tailwind', 'E-com'],
    description: 'A premium fashion ecommerce website with modern UI, product filtering, and a seamless shopping experience built for speed and responsiveness.'
  },
  {
    title: 'Pal Classes Education',
    image: require('../assets/palclasses.png'),
    link: 'https://palclasses.com/',
    tags: ['React', 'Firebase', 'Edu'],
    description: 'A modern educational platform for coaching classes, featuring course details, online presence, and student engagement tools.'
  },
  {
    title: 'Uvita Nutrition Website',
    image: require('../assets/uvita.png'),
    link: 'https://uvitanutrition.com/',
    tags: ['WordPress', 'SEO', 'Brand'],
    description: 'A modern and responsive nutrition brand website built with clean UI, optimized performance, and user-friendly navigation.'
  },
  {
    title: 'Ila Homes Website',
    image: require('../assets/ilahomes.png'),
    link: 'https://ilahomes.com/',
    tags: ['Booking', 'Premium', 'UI'],
    description: 'A premium villa and room booking platform designed with an elegant layout, showcasing luxury stays with a seamless, mobile-friendly user experience.'
  },
  {
    title: 'Kem Cards Website',
    image: require('../assets/kemcards.png'),
    link: 'https://kemcards.in/',
    tags: ['Portfolio', 'Design', 'SEO'],
    description: 'A printing and packaging website for premium playing cards with clean product showcasing and smooth order experience.'
  },
  {
    title: 'The Glamorholic Website',
    image: require('../assets/theglamorholic.png'),
    link: 'https://theglamorholic.com/',
    tags: ['Blog', 'SEO', 'Creative'],
    description: 'Daily news and blog website featuring the latest articles, trending stories, and engaging content with optimized loading and responsive design.'
  },
  {
    title: 'INDET Concrete Website',
    image: require('../assets/ind-etctpl.png'),
    link: 'https://ind-etctpl.com/',
    tags: ['Industrial', 'Business', 'Corporate'],
    description: 'Corporate industrial website built with a professional layout, service showcase, and fast-loading pages.'
  },
  {
    title: 'Deluxe Enterprises Website',
    image: require('../assets/deluxenterprise.png'),
    link: 'https://deluxenterprise.in/',
    tags: ['E-com', 'Inventory', 'Business'],
    description: 'Business website featuring product highlights, clean UI, and improved client engagement sections.'
  },
  {
    title: 'RCube Recycling Website',
    image: require('../assets/rcuberecycling.png'),
    link: 'https://rcuberecycling.com/',
    tags: ['Environment', 'Service', 'Corporate'],
    description: 'Recycling and waste-management website with structured layouts, info-based sections, and responsive design.'
  },
  {
    title: 'Creative Honchos Website',
    image: require('../assets/ch.png'),
    link: 'https://creativehonchos.com/',
    tags: ['Portfolio', 'Agency', 'UI'],
    description: 'Portfolio + agency website built with modern animations, fast loading, and SEO-friendly structure.'
  },
  {
    title: 'North Bombay Durga Puja Website',
    image: require('../assets/nbdp.png'),
    link: 'https://northbombaydurgapuja.com/',
    tags: ['Event', 'Cultural', 'Portfolio'],
    description: 'Event-based website featuring galleries, schedules, and an easy-to-navigate interface for visitors.'
  },
  {
    title: 'Kamroons Production Website',
    image: require('../assets/kamroons.png'),
    link: 'https://kamroonsproduction.com/',
    tags: ['Media', 'Gallery', 'Creative'],
    description: 'Film production website highlighting projects, behind-the-scenes content, and engaging visuals with responsive video sections.'
  },
  {
    title: 'Strivik Business Solutions Website',
    image: require('../assets/strivik.png'),
    link: 'https://strivik.com/',
    tags: ['Consulting', 'B2B', 'Corporate'],
    description: 'Corporate business consulting website with a clean professional interface, structured service modules, and an enhanced mobile-first user journey.'
  },
  {
    title: 'Basant Envelopes-N-Print Ltd Website',
    image: require('../assets/basantenvelopes.png'),
    link: 'https://basantenvelopes.com/',
    tags: ['Manufacturing', 'B2B', 'Industrial'],
    description: 'Corporate printing and packaging website featuring envelope manufacturing, product catalog display, and professional business layout.'
  }
];

export default function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.project-box');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">My Portfolio</span>
          <h2 className="section-title">Latest Professional Projects</h2>
          <p className="section-desc">
            I have developed a wide range of high-performance applications and websites, 
            focusing on solving real business problems with modern technology.
          </p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
            <div className="project-box" key={index}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">Full Preview</a>
                </div>
              </div>

              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <a href={project.link} className="visit-link" target="_blank" rel="noopener noreferrer">
                    Live Demo <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
