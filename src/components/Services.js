import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';
import { 
  FaWordpress, 
  FaShoppingCart, 
  FaTools, 
  FaTachometerAlt,
  FaGraduationCap,
  FaCogs
} from 'react-icons/fa';

// Import 3D Icons
import webIcon from '../assets/services/web.png';
import aiIcon from '../assets/services/ai.png';
import designIcon from '../assets/services/design.png';

gsap.registerPlugin(ScrollTrigger);

const featuredServices = [
  {
    icon: webIcon,
    title: 'Full-Stack Web Development',
    description: 'Engineering responsive, scalable web applications using React.js, Node.js, Express.js, and Python with clean architecture and modern UX.',
    theme: 'cyan'
  },
  {
    icon: aiIcon,
    title: 'Database & API Architecture',
    description: 'Designing robust database solutions with MongoDB, PostgreSQL, and Supabase, integrated with secure RESTful APIs and authentication.',
    theme: 'violet'
  },
  {
    icon: designIcon,
    title: 'CMS & E-Commerce Stores',
    description: 'Customizing high-converting WordPress, WooCommerce, and Shopify platforms with responsive layouts, payment gateways, and custom plugins.',
    theme: 'teal'
  }
];

const specialistServices = [
  {
    icon: <FaWordpress />,
    title: 'WordPress & Shopify',
    description: 'Custom theme & plugin customization with Elementor.'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce Solutions',
    description: 'Shopping carts, checkout flows, and payment integration.'
  },
  {
    icon: <FaGraduationCap />,
    title: 'Quiz & Exam Systems',
    description: 'Interactive timed quizzes with admin analytics dashboards.'
  },
  {
    icon: <FaCogs />,
    title: 'ERP & Business Systems',
    description: 'Inventory, production planning, and management portals.'
  },
  {
    icon: <FaTools />,
    title: 'SEO & Speed Optimization',
    description: 'On-page SEO, speed boosting, and mobile responsiveness.'
  },
  {
    icon: <FaTachometerAlt />,
    title: 'RESTful API Integration',
    description: 'Third-party API integration, JSON, and secure endpoints.'
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const featuredCards = sectionRef.current.querySelectorAll('.featured-card');
    const specialistCards = sectionRef.current.querySelectorAll('.specialist-card');
    
    // Entrance for Featured
    gsap.fromTo(featuredCards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Entrance for Specialist Grid
    gsap.fromTo(specialistCards,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.specialist-grid',
          start: 'top 85%',
        }
      }
    );

    // Continuous Floating Animation for 3D Icons
    featuredCards.forEach(card => {
      const img = card.querySelector('.service-3d-icon');
      gsap.to(img, {
        y: -10,
        x: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, []);

  return (
    <section className="services-section-v2" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header-v2">
          <span className="subtitle-v2">Professional Solutions</span>
          <h2 className="main-title-v2">Services & Offerings</h2>
          <p className="description-v2">
            Delivering end-to-end web development solutions — from high-performance full-stack applications 
            and database architecture to custom CMS and e-commerce platforms.
          </p>
        </div>

        {/* Top Tier: Featured Services */}
        <div className="featured-services-row">
          {featuredServices.map((service, index) => (
            <div className={`featured-card ${service.theme}`} key={index}>
              <div className="icon-3d-box">
                <img src={service.icon} alt={service.title} className="service-3d-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Tier: Specialist Grid */}
        <div className="specialist-grid">
          {specialistServices.map((service, index) => (
            <div className="specialist-card" key={index}>
              <div className="spec-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
