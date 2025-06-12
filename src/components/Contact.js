import React, { useState } from 'react';
import './Contact.css';
import contactImg from '../assets/contact.png'; // make sure this path is correct

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          e.target.reset();
          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* Replace with your actual Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="84449af3-9ad9-4b1c-a0c1-3df7753f1907" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="tel" name="mobile" placeholder="Mobile Number" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Your Message" required></textarea>

            {/* Honeypot */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <button type="submit">Send Message</button>
            {submitted && <p className="success-message">✅ Thank you! Your message has been sent.</p>}
          </form>
        </div>

        <div className="contact-image">
          <img src={contactImg} alt="Contact Illustration" />
        </div>
      </div>
      <div className="contact-header">
<p>© 2025 | Developed with ❤️ using React.js by Vikas Pal</p>
      </div>  
    </section>
  );
};

export default Contact;
