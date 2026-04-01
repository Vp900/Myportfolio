import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';
import { Briefcase, Smile, Calendar, Zap } from 'lucide-react';

const statsData = [
  { icon: <Briefcase />, value: 50, label: 'Projects Completed', suffix: '+' },
  { icon: <Smile />, value: 45, label: 'Happy Clients', suffix: '+' },
  { icon: <Calendar />, value: 3, label: 'Years Experience', suffix: '+' },
  { icon: <Zap />, value: 20, label: 'Tools Mastered', suffix: '+' },
];

const StatItem = ({ icon, value, label, suffix }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds for a smoother feel
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const incrementValue = end / totalSteps;

    const timer = setInterval(() => {
      start += incrementValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div className="stat-card" ref={countRef}>
      <div className="stat-icon-wrapper">
        {icon}
        <div className="icon-glow"></div>
      </div>
      <div className="stat-info">
        <h3 className="stat-number">{count}{suffix}</h3>
        <p className="stat-name">{label}</p>
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
