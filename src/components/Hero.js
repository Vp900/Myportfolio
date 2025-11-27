import './Hero.css';

import heroImage from '../assets/vikaspic.png'; 

import { useEffect, useState } from 'react';

export default function Hero() {
const banners = [
  {
    subheading: 'Full Stack Website Developer • MERN Stack',
    heading: 'Hi, I am Vikas Pal',
    description: 'I develop modern, responsive and high-performance websites.',
  },
  {
    subheading: 'Front-End & Back-End Web Development',
    heading: 'Hi, I am Vikas Pal',
    description: 'Building clean UI/UX, dynamic functionality and smooth web experiences.',
  },
  {
    subheading: 'WordPress • Shopify • Custom MERN Websites',
    heading: 'Hi, I am Vikas Pal',
    description: 'Creating business, portfolio and e-commerce websites with quality and precision.',
  },
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subheading">{banners[current].subheading}</p>
        <h1 className="hero-heading">{banners[current].heading}</h1>
        <p className="hero-description">{banners[current].description}</p>
        <div className="hero-buttons">

          <button className="btn filled"><a href="#projects">Projects</a></button>

          <a href="/Vikas_Pal_FullStack_Developer_Resume.pdf" download className="btn outlined">Download CV</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Vikas Pal" />
      </div>
    </section>
  );
}
