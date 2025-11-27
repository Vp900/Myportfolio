import React, { useState } from 'react';
import './Contact.css';
import contactImg from '../assets/contact.png'; // make sure this path is correct

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          setError('Something went wrong. Please try again.');
        }
      })
      .catch(() => setError('Something went wrong. Please try again.'))
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>I’d be happy to connect with you! Please share your details below, and I’ll reach out to you as soon as possible.</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="84449af3-9ad9-4b1c-a0c1-3df7753f1907" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="tel" name="mobile" placeholder="Mobile Number" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Your Message" required></textarea>

            {/* Honeypot */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} aria-hidden="true" />

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && <p className="success-message">✅ Thank you! Your message has been sent.</p>}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>

        <div className="contact-image">
          <img src={contactImg} alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
