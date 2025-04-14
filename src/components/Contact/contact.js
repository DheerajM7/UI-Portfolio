import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ke5jqi8', 'template_csm2r6g', form.current, {
        publicKey: 'ifnzjZP1o_bcsY0CC'
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Email Sent !");
        },
      );
  };

  return (
    <section id="contactPage">
      <div className="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            aria-label="Your Name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            aria-label="Your Email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          />
          <button className="submitBtn" type="submit">Submit</button>
          <div className="links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn" className="link" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={WhatsappIcon} alt="WhatsApp" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
