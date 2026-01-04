// ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Purrfect Adoption! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="contact-container">
      {/* Header Section - matches your screenshot */}
      <header className="contact-header">
        {/* Header content removed as per your code */}
      </header>

      <main className="contact-main">
        {/* Main Title */}
        <h1 className="contact-title">Contact us</h1>
        
        {/* Description Text */}
        <div className="contact-description">
          <p>
            Have questions about adoption, volunteering, or donations? 
            Fill out the form below and our team will respond within 24 hours.
          </p>
        </div>

        <div className="divider"></div>

        {/* Contact Form - REMOVED RED STARS */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name {/* Removed: <span className="required">*</span> */}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email {/* Removed: <span className="required">*</span> */}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email address"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="divider"></div>
      </main>
    </div>
  );
}