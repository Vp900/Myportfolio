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
    const infoCards = sectionRef.current.querySelectorAll('.support-node-v3');
    const formContainer = sectionRef.current.querySelector('.premium-contact-form-v3');
    const bgGlows = sectionRef.current.querySelectorAll('.abstract-glow-v3');

    gsap.fromTo(infoCards, 
      { opacity: 0, x: -50, filter: 'blur(10px)' },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(formContainer, 
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: formContainer,
          start: 'top 85%',
        }
      }
    );

    gsap.to(bgGlows, {
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      duration: 'random(15, 25)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
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
      {/* Dynamic Mesh Background */}
      <div className="abstract-glow-v3 glow-primary"></div>
      <div className="abstract-glow-v3 glow-secondary"></div>
      
      <div className="container">
        <div className="contact-header-v3">
          <span className="shimmer-subtitle">Get In Touch</span>
          <h2 className="luxury-title">Let's Build Something Great</h2>
          <p className="luxury-description">
            Experience premium digital craftsmanship. Reach out to discuss how we can 
            transform your vision into a world-class digital product.
          </p>
        </div>

        <div className="contact-grid-v3">
          
          {/* LEFT: Support Nodes */}
          <div className="support-nodes-container">
            <div className="support-node-v3">
              <div className="node-icon-wrapper">
                <Phone size={22} />
              </div>
              <div className="node-details">
                <span>Immediate Support</span>
                <p>+91 9004207813</p>
              </div>
              <div className="node-shimmer"></div>
            </div>

            <div className="support-node-v3">
              <div className="node-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="node-details">
                <span>Business Inquiries</span>
                <p>vikaspal9004@gmail.com</p>
              </div>
              <div className="node-shimmer"></div>
            </div>

            <div className="support-node-v3">
              <div className="node-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div className="node-details">
                <span>Head Office</span>
                <p>Wadala East, Mumbai, 400037</p>
              </div>
              <div className="node-shimmer"></div>
            </div>
          </div>

          {/* RIGHT: High-End Form */}
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
                <span className="btn-text">{loading ? 'Processing...' : 'Send Message'}</span>
                <span className="btn-icon"><Send size={18} /></span>
                <div className="btn-reflection"></div>
              </button>

              {submitted && <div className="p-success-message">Your message has been captured! Ready to build.</div>}
              {error && <div className="p-error-message">{error}</div>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
