import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'webapp', label: 'Web Apps & Portals' },
  { id: 'ecommerce', label: 'E-Commerce & Retail' },
  { id: 'corporate', label: 'Corporate & Industrial' },
  { id: 'events', label: 'Events & Media' }
];

const projects = [
  {
    title: 'TechX CBT Online Exam & Quiz System',
    category: 'webapp',
    image: require('../assets/techxquiz.jpg'),
    link: 'https://techx-2026.vercel.app/',
    tags: ['React.js', 'Supabase', 'PostgreSQL', 'Admin Panel'],
    description: 'A full-featured Computer Based Test (CBT) portal for Maharishi University – TechX 2026. Built with React.js, Supabase (PostgreSQL), RESTful APIs, Admin Panel with login/logout/session management, real-time scorecard generation, fullscreen lock mode, and instant result evaluation.'
  },
  {
    title: 'NotifyNow Platform',
    category: 'webapp',
    image: require('../assets/notifynow.png'),
    link: 'https://notifynow.in/',
    tags: ['React.js', 'Node.js', 'REST API', 'CPaaS'],
    description: 'A comprehensive CPaaS platform for bulk messaging (SMS, WhatsApp, RCS) with high-volume queue management and real-time event processing.'
  },
  {
    title: 'Ila Fashion Ecommerce',
    category: 'ecommerce',
    image: require('../assets/ivafashion.png'),
    link: 'https://iva-fashion-1.onrender.com/',
    tags: ['React.js', 'Tailwind', 'E-Commerce'],
    description: 'A premium fashion ecommerce website with modern UI, product filtering, shopping cart, and a seamless checkout experience built for speed and responsiveness.'
  },
  {
    title: 'Pal Classes Educational Portal',
    category: 'webapp',
    image: require('../assets/palclasses.png'),
    link: 'https://palclasses.com/',
    tags: ['React.js', 'CSS3', 'Education'],
    description: 'A modern educational platform for coaching classes, featuring course details, student registration, online presence, and interactive learning tools.'
  },
  {
    title: 'Uvita Nutrition Brand',
    category: 'ecommerce',
    image: require('../assets/uvita.png'),
    link: 'https://uvitanutrition.com/',
    tags: ['Shopify', 'SEO', 'Brand'],
    description: 'A modern and responsive nutrition brand website built on Shopify with clean UI, product collections, speed optimization, and user-friendly product navigation.'
  },
  {
    title: 'Ila Homes Real Estate & Stays',
    category: 'corporate',
    image: require('../assets/ilahomes.png'),
    link: 'https://ilahomes.com/',
    tags: ['Booking', 'Real Estate', 'UI/UX'],
    description: 'A premium villa and room booking platform designed with an elegant layout, property showcases, and a seamless, mobile-friendly user experience.'
  },
  {
    title: 'Kem Cards Packaging & Print',
    category: 'corporate',
    image: require('../assets/kemcards.png'),
    link: 'https://kemcards.in/',
    tags: ['Showcase', 'SEO', 'Design'],
    description: 'A manufacturing, printing and packaging website for premium playing cards with clean product catalog showcasing and smooth order enquiries.'
  },
  {
    title: 'The Glamorholic News & Blog',
    category: 'events',
    image: require('../assets/theglamorholic.png'),
    link: 'https://theglamorholic.com/',
    tags: ['Blog & CMS', 'SEO', 'Publishing'],
    description: 'Daily news and blog website featuring article publishing, category management, search, and dynamic content updates with speed optimization.'
  },
  {
    title: 'INDET Concrete Industrial Portal',
    category: 'corporate',
    image: require('../assets/ind-etctpl.png'),
    link: 'https://ind-etctpl.com/',
    tags: ['Industrial', 'Corporate', 'B2B'],
    description: 'Corporate industrial website built with a professional layout, service showcase, enquiry forms, and fast-loading architecture.'
  },
  {
    title: 'Deluxe Enterprises',
    category: 'ecommerce',
    image: require('../assets/deluxenterprise.png'),
    link: 'https://deluxenterprise.in/',
    tags: ['WordPress', 'WooCommerce', 'Business'],
    description: 'Business website built on WordPress featuring product highlights, clean UI, WooCommerce integration, and improved client engagement sections.'
  },
  {
    title: 'RCube Recycling Management',
    category: 'corporate',
    image: require('../assets/rcuberecycling.png'),
    link: 'https://rcuberecycling.com/',
    tags: ['Services', 'Corporate', 'Eco'],
    description: 'Recycling and waste-management corporate website with structured service modules, enquiry forms, and responsive design.'
  },
  {
    title: 'Creative Honchos Digital Agency',
    category: 'events',
    image: require('../assets/ch.png'),
    link: 'https://creativehonchos.com/',
    tags: ['Portfolio', 'Agency', 'UI/UX'],
    description: 'Portfolio and creative agency website built with modern interactive animations, fast loading, and SEO-friendly structure.'
  },
  {
    title: 'North Bombay Durga Puja Portal',
    category: 'events',
    image: require('../assets/nbdp.png'),
    link: 'https://northbombaydurgapuja.com/',
    tags: ['Event Portal', 'Cultural', 'Gallery'],
    description: 'Event-based web platform featuring galleries, event schedules, visitor information, and an easy-to-navigate interface.'
  },
  {
    title: 'Kamroons Production Media',
    category: 'events',
    image: require('../assets/kamroons.png'),
    link: 'https://kamroonsproduction.com/',
    tags: ['Film & Media', 'Gallery', 'Creative'],
    description: 'Film production website highlighting video projects, behind-the-scenes content, and engaging visuals with responsive streaming sections.'
  },
  {
    title: 'Strivik Business Solutions',
    category: 'corporate',
    image: require('../assets/strivik.png'),
    link: 'https://strivik.com/',
    tags: ['Consulting', 'B2B', 'ERP'],
    description: 'Corporate business consulting website with a clean professional interface, structured service modules, and an enhanced mobile-first user journey.'
  },
  {
    title: 'Basant Envelopes & Print Ltd',
    category: 'corporate',
    image: require('../assets/basantenvelopes.png'),
    link: 'https://basantenvelopes.com/',
    tags: ['Manufacturing', 'B2B', 'Industrial'],
    description: 'Corporate printing and packaging website featuring envelope manufacturing, product catalog display, and professional business layout.'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const gridRef = useRef(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.project-box');
      gsap.fromTo(cards, 
        { opacity: 0, y: 25, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out'
        }
      );
    }
  }, [selectedCategory]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">My Portfolio</span>
          <h2 className="section-title">Types of Websites & Applications Developed</h2>
          <p className="section-desc">
            A diverse showcase of 15+ real-world web applications, e-commerce stores, ERP & business management
            systems, educational platforms, and corporate portals.
          </p>
        </div>

        {/* Category Filters */}
        <div className="tools-filter-bar" style={{ marginBottom: '40px' }}>
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" ref={gridRef}>
          {filteredProjects.map((project, index) => (
            <div className="project-box" key={index}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">Preview</a>
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
