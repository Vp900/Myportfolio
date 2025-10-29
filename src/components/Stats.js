import React, { useEffect, useState } from 'react';
import './Stats.css';
import { Briefcase, Smile, Coffee, Calendar } from 'lucide-react'; // npm install lucide-react

const statsData = [
  { icon: <Briefcase />, value: 50, label: 'Projects Completed' },
  { icon: <Smile />, value: 45, label: 'Happy Clients' },
<<<<<<< HEAD
 
=======
  { icon: <Coffee />, value: 500, label: 'Cups of Coffee' },
>>>>>>> 4ce24a08e72d30bd451793532c70ab6104df8b9f
  { icon: <Calendar />, value: 3, label: 'Years of Experience' },
];

const StatItem = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let incrementTime = 20;
    const totalDuration = 1000; // 1 second
    const steps = totalDuration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-item">
      <div className="icon-circle">{icon}</div>
      <div className="stat-text">
        <div className="stat-value">{count}+</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="stats-section">
      {statsData.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </section>
  );
}
