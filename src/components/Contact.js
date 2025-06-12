import React, { useState } from 'react';
import './Contact.css';
import contactImg from '../assets/contact.png'; // make sure this image exists

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
     <form  onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="84449af3-9ad9-4b1c-a0c1-3df7753f1907"/>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="tel" name="mobile" placeholder="Mobile Number" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            {submitted && <p className="success-message">✅ Thank you! Your message has been sent.</p>}
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
