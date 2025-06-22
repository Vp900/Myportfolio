import './Services.css';
import { FaLaptopCode, FaPaintBrush, FaWordpress, FaShoppingCart, FaRedo, FaFileAlt, FaTools, FaServer, FaTachometerAlt } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Front-End Development',
    description: 'Pixel-perfect websites using HTML, CSS, JavaScript, and React.js with responsive layouts.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Custom Website Design',
    description: 'Unique, brand-focused, and user-friendly designs tailored for your business needs.',
  },
  {
    icon: <FaWordpress />,
    title: 'WordPress Development',
    description: 'Dynamic websites with easy content management using WordPress and Elementor.',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce Development',
    description: 'Online stores built with Shopify or WooCommerce, including Razorpay integration.',
  },
  {
    icon: <FaRedo />,
    title: 'Website Redesign',
    description: 'Revamp your old website into a modern, fast, and mobile-friendly experience.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Landing Page Design',
    description: 'Single-page high-conversion designs perfect for campaigns and promotions.',
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Bug Fixes',
    description: 'Regular updates, issue fixing, and reliable support for smooth performance.',
  },
  {
    icon: <FaServer />,
    title: 'Domain & Hosting Setup',
    description: 'Assistance with domain, hosting, SSL, and email configuration for your site.',
  },
  {
    icon: <FaTachometerAlt />,
    title: 'Speed Optimization',
    description: 'Improve loading time with image optimization, minified files, and lazy loading.',
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-heading">
        <h2>My Services</h2>
        <p>I offer a wide range of website design and development services to help bring your digital presence to life.</p>
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
