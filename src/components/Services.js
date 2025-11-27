import './Services.css';
import { 
  FaLaptopCode, 
  FaPaintBrush, 
  FaWordpress, 
  FaShoppingCart, 
  FaRedo, 
  FaFileAlt, 
  FaTools, 
  FaServer, 
  FaTachometerAlt 
} from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Front-End Development',
    description: 'High-quality, responsive web interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap with clean UI/UX.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Custom Website Design',
    description: 'Modern, brand-focused, and user-centric designs crafted to provide an engaging and seamless experience.',
  },
  {
    icon: <FaWordpress />,
    title: 'WordPress & CMS Development',
    description: 'Custom WordPress themes, Elementor setups, CMS panels, and fully manageable websites for easy updates.',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce Development',
    description: 'Shopify & WooCommerce stores with product setup, payment gateways, cart functionality, and smooth checkout.',
  },
  {
    icon: <FaRedo />,
    title: 'Website Redesign & Revamp',
    description: 'Transform outdated websites into modern, fast, and mobile-friendly versions with improved UI/UX.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Landing Page Development',
    description: 'High-conversion landing pages designed for marketing campaigns, lead generation, or product promotions.',
  },
  {
    icon: <FaTools />,
    title: 'Maintenance, Support & Bug Fixes',
    description: 'Regular updates, troubleshooting, security fixes, and continuous support for smooth performance.',
  },
  {
    icon: <FaServer />,
    title: 'Backend & API Development',
    description: 'Node.js, Express.js APIs, MongoDB database setup, CRUD systems, and secure server-side functionality.',
  },
  {
    icon: <FaTachometerAlt />,
    title: 'Performance & Speed Optimization',
    description: 'Improve loading speed with caching, minification, image optimization, and performance monitoring.',
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-heading">
        <h2>My Services</h2>

        <p>
          I provide end-to-end website development solutions — from design and
          front-end to backend, CMS customization, API integration, and deployment.
          My goal is to deliver professional, scalable, and performance-driven
          websites that help businesses grow and stand out online.
        </p>

      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
