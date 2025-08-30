"use client"

import type React from "react"
import { useState } from "react"
import "./contact.css"
import Link from "next/link" // Added Next.js Link import for proper routing

const Contact: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="contact-page">
      {/* Navigation - Same as home page */}
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__content">
            <div className="navbar__logo">
              <span className="navbar__logo-text">AgroPath</span>
            </div>
            <div className="navbar__menu">
              <Link href="/" className="navbar__link">
                Home
              </Link>
              <Link href="/about" className="navbar__link">
                About
              </Link>
              <Link href="/contact" className="navbar__link navbar__link--active">
                Contact
              </Link>
              <div className="navbar__dropdown">
                <button
                  className="navbar__link navbar__dropdown-trigger"
                  onClick={() => setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)}
                >
                  Features
                  <svg className="navbar__dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isFeaturesDropdownOpen && (
                  <div className="navbar__dropdown-menu">
                    <Link href="/crop-suggestion" className="navbar__dropdown-item">
                      Crop Suggestion
                    </Link>
                    <Link href="/market" className="navbar__dropdown-item">
                      Market Price
                    </Link>
                    <Link href="/disease-detection" className="navbar__dropdown-item">
                      Disease Detection
                    </Link>
                    <Link href="/weather" className="navbar__dropdown-item">
                      Weather
                    </Link>
                  </div>
                )}
              </div>
              <div className="navbar__dropdown">
                <button
                  className="navbar__link navbar__dropdown-trigger"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                >
                  {selectedLanguage}
                  <svg className="navbar__dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLanguageDropdownOpen && (
                  <div className="navbar__dropdown-menu">
                    <button className="navbar__dropdown-item" onClick={() => handleLanguageSelect("English")}>
                      English
                    </button>
                    <button className="navbar__dropdown-item" onClick={() => handleLanguageSelect("සිංහල")}>
                      සිංහල
                    </button>
                    <button className="navbar__dropdown-item" onClick={() => handleLanguageSelect("தமிழ்")}>
                      தமிழ்
                    </button>
                  </div>
                )}
              </div>
              <Link href="/login" className="navbar__cta-button">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-header__container">
          <h1 className="contact-header__title">Get In Touch</h1>
          <p className="contact-header__description">
            Have questions about smart farming? We're here to help you grow better crops with AI-powered insights.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-main__container">
          <div className="contact-main__grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-card">
                <h2 className="contact-form__title">Send us a Message</h2>
                <p className="contact-form__description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="contact-form__input"
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="contact-form__input"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="contact-form__select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="contact-form__field">
                    <textarea
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="contact-form__textarea"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-form__submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <h2 className="contact-info__title">Contact Information</h2>
                <p className="contact-info__description">Reach out to us using any of these channels:</p>

                <div className="contact-info__item">
                  <div className="contact-info__icon contact-info__icon--address">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1 1 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">Address</h3>
                    <p className="contact-info__text">
                      123 Agriculture Street
                      <br />
                      Colombo 07, Western Province
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon contact-info__icon--phone">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">Phone</h3>
                    <p className="contact-info__text">
                      +94 11 234 5678
                      <br />
                      +94 77 123 4567
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon contact-info__icon--email">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">Email</h3>
                    <p className="contact-info__text">
                      info@agropath.lk
                      <br />
                      support@agropath.lk
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon contact-info__icon--hours">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">Business Hours</h3>
                    <p className="contact-info__text">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="contact-info__social">
                  <h3 className="contact-info__social-title">Follow Us</h3>
                  <div className="contact-info__social-links">
                    <a href="#" className="contact-info__social-link contact-info__social-link--facebook">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="contact-info__social-link contact-info__social-link--twitter">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="contact-info__social-link contact-info__social-link--instagram">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.385-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297 1.297 0 2.448.49 3.323 1.297.807.875 1.297 2.026 1.297 3.323 0 1.297-.385 2.448-1.297 3.323-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-2.448 0-4.262-1.814-4.262-4.262s1.814-4.262 4.262-4.262 4.262 1.814 4.262 4.262-1.814 4.262-4.262 4.262z" />
                      </svg>
                    </a>
                    <a href="#" className="contact-info__social-link contact-info__social-link--linkedin">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="contact-map">
            <div className="contact-map__placeholder">
              <div className="contact-map__icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <p className="contact-map__text">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <svg className="footer__logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="footer__logo-text">AgroPath</span>
          </div>
          <p className="footer__description">
            Empowering farmers with intelligent solutions for sustainable agriculture and enhanced productivity.
          </p>
          <div className="footer__bottom">
            <p>&copy; 2024 AgroPath. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
