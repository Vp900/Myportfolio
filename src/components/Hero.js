import './Hero.css';
import heroImage from '../assets/vikaspic.png'; // आपकी फोटो यहाँ रखें
import { useEffect, useState } from 'react';

export default function Hero() {
  const banners = [
    {
      subheading: 'WE DESIGN & BUILD BRANDS',
      heading: 'Hi, I am Vikas Pal',
      description: 'This is my favorite work.',
    },
    {
      subheading: 'WE DESIGN & BUILD BRANDS',
      heading: 'Hi, I am Vikas Pal',
      description: 'Designing impactful digital experiences.',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subheading">{banners[current].subheading}</p>
        <h1 className="hero-heading">{banners[current].heading}</h1>
        <p className="hero-description">{banners[current].description}</p>
        <div className="hero-buttons">
          <button className="btn filled">Hire me</button>
          <button className="btn outlined">Download CV</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Vikas Pal" />
      </div>
    </section>
  );
}
