import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';
import { 
  FaWordpress, 
  FaShoppingCart, 
  FaRedo, 
  FaFileAlt, 
  FaTools, 
  FaTachometerAlt 
} from 'react-icons/fa';

// Import New 3D Premium Icons
import webIcon from '../assets/services/web.png';
import aiIcon from '../assets/services/ai.png';
import designIcon from '../assets/services/design.png';

gsap.registerPlugin(ScrollTrigger);

const featuredServices = [
  {
    icon: webIcon,
    title: 'Full-Stack Web Solutions',
    description: 'Developing high-performance, scalable web applications with React.js, Node.js, and modern cloud architectures.',
    theme: 'cyan'
  },
  {
    icon: aiIcon,
    title: 'AI & Workflow Automation',
    description: 'Integrating OpenAI, custom chatbots, and automated bulk messaging systems to streamline business processes.',
    theme: 'violet'
  },
  {
    icon: designIcon,
    title: 'UI/UX & Creative Design',
    description: 'Crafting modern, brand-focused digital experiences that provide a seamless and engaging journey for users.',
    theme: 'teal'
  }
];

const specialistServices = [
  {
    icon: <FaWordpress />,
    title: 'WordPress & CMS',
    description: 'Custom themes and Elementor setups.'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce',
    description: 'Shopify & WooCommerce store setup.'
  },
  {
    icon: <FaRedo />,
    title: 'Website Revamp',
    description: 'Modernizing outdated web interfaces.'
  },
  {
    icon: <FaFileAlt />,
    title: 'Landing Pages',
    description: 'High-conversion marketing pages.'
  },
  {
    icon: <FaTools />,
    title: 'Speed Optimization',
    description: 'Boosting performance & SEO score.'
  },
  {
    icon: <FaTachometerAlt />,
    title: 'API Integration',
    description: 'Secure server-side CRUD logic.'
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
          <span className="subtitle-v2">Professional Excellence</span>
          <h2 className="main-title-v2">Specialized Digital Services</h2>
          <p className="description-v2">
            Delivering end-to-end web development solutions — from high-performance applications 
            to AI-driven automation and custom creative designs.
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
              <div className="specialist-icon">{service.icon}</div>
              <div className="specialist-info">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
