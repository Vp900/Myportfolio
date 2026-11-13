import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const infoCards = sectionRef.current.querySelectorAll('.support-node-v3');
    const formContainer = sectionRef.current.querySelector('.premium-contact-form-v3');

    // Make everything visible first — then animate in
    gsap.set(infoCards, { opacity: 1, x: 0, filter: 'blur(0px)' });
    if (formContainer) gsap.set(formContainer, { opacity: 1, scale: 1, y: 0 });

    if (infoCards.length > 0) {
      gsap.fromTo(infoCards,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }

    if (formContainer) {
      gsap.fromTo(formContainer,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formContainer,
            start: 'top 90%',
            once: true,
          }
        }
      );
    }

    // Floating background glow
    const bgGlows = sectionRef.current.querySelectorAll('.abstract-glow-v3');
    if (bgGlows.length > 0) {
      gsap.to(bgGlows, {
        x: 'random(-80, 80)',
        y: 'random(-80, 80)',
        duration: 'random(12, 20)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          e.target.reset();
          setError('');
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          setError('Something went wrong. Please try again.');
        }
      })
      .catch(() => setError('Something went wrong. Please try again.'))
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-perfection-section" id="contact" ref={sectionRef}>
      {/* Animated Background Glows */}
      <div className="abstract-glow-v3 glow-primary"></div>
      <div className="abstract-glow-v3 glow-secondary"></div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header-v3">
          <span className="shimmer-subtitle">Get In Touch</span>
          <h2 className="luxury-title">Let's Build Something Great</h2>
          <p className="luxury-description">
            I'm available for freelance projects, full-time roles, and collaborations.
            Reach out to discuss how I can help build your next digital product.
          </p>
        </div>

        {/* Grid */}
        <div className="contact-grid-v3">

          {/* LEFT: Contact Info */}
          <div className="support-nodes-container">

            {/* Phone */}
            <div className="support-node-v3">
              <div className="node-icon-wrapper">
                <Phone size={22} />
              </div>
              <div className="node-details">
                <span>Call Me</span>
                <p>+91 9004207813</p>
              </div>
              <div className="node-shimmer"></div>
            </div>

            {/* Email */}
            <div className="support-node-v3">
              <div className="node-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="node-details">
                <span>Email Me</span>
                <p>vikaspal9004@gmail.com</p>
              </div>
              <div className="node-shimmer"></div>
            </div>

            {/* Location */}
            <div className="support-node-v3">
              <div className="node-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div className="node-details">
                <span>Location</span>
                <p>Maharishi Nagar, IIM Road, Lucknow, UP – 226013</p>
              </div>
              <div className="node-shimmer"></div>
            </div>

            {/* Quick note */}
            <div className="contact-availability">
              <span className="avail-dot"></span>
              <span>Available for Full-Time & Freelance Projects</span>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="premium-contact-form-v3">
            <form onSubmit={handleSubmit} className="luxury-form">
              <input type="hidden" name="access_key" value="84449af3-9ad9-4b1c-a0c1-3df7753f1907" />

              <div className="form-title-area">
                <h3>Send a Message</h3>
                <div className="title-underline"></div>
              </div>

              <div className="form-row-v3">
                <div className="floating-input-group">
                  <input type="text" name="name" id="name" placeholder=" " required />
                  <label htmlFor="name"><User size={14} className="label-icon" /> Full Name</label>
                </div>
                <div className="floating-input-group">
                  <input type="tel" name="mobile" id="mobile" placeholder=" " required />
                  <label htmlFor="mobile"><Smartphone size={14} className="label-icon" /> Mobile Number</label>
                </div>
              </div>

              <div className="floating-input-group">
                <input type="email" name="email" id="email" placeholder=" " required />
                <label htmlFor="email"><Mail size={14} className="label-icon" /> Email Address</label>
              </div>

              <div className="floating-input-group textarea-group">
                <textarea name="message" id="message" placeholder=" " required></textarea>
                <label htmlFor="message"><MessageSquare size={14} className="label-icon" /> How can I help you?</label>
              </div>

              <input type="checkbox" name="botcheck" style={{ display: 'none' }} aria-hidden="true" />

              <button type="submit" className="luxury-submit-btn" disabled={loading}>
                <span className="btn-text">{loading ? 'Sending...' : 'Send Message'}</span>
                <span className="btn-icon"><Send size={18} /></span>
                <div className="btn-reflection"></div>
              </button>

              {submitted && <div className="p-success-message">✅ Message sent! I'll get back to you soon.</div>}
              {error && <div className="p-error-message">❌ {error}</div>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
