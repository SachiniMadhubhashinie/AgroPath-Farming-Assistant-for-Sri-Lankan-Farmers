"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link" // Added Next.js Link import for proper routing
import "./home.css"
import "./about.css"

const About: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  return (
    <div className="about-page">
      {/* Navigation - Same as Home */}
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
              <Link href="/about" className="navbar__link navbar__link--active">
                About
              </Link>
              <Link href="/contact" className="navbar__link">
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

      {/* About Header */}
      <section className="about-header">
        <div className="about-header__container">
          <h1 className="about-header__title">About AgroPath</h1>
          <p className="about-header__description">
            Our mission is to empower Sri Lankan farmers with smart technology, providing real-time insights, crop
            suggestions, and disease detection to boost productivity and sustainability.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="about-video">
        <div className="about-video__container">
          <div className="about-video__wrapper">
            <iframe
              className="about-video__iframe"
              src="https://www.youtube.com/embed/tBFvblGPj-A"
              title="Biggest Organic Farm in Sri Lanka"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team__container">
          <h2 className="about-team__title">Meet the Team</h2>
          <div className="about-team__grid">
            <div className="team-card">
              <div className="team-card__content">
                <h3 className="team-card__name">Sachini Madhubhashinie</h3>
                <p className="team-card__role">Owner, UI/UX</p>
                <p className="team-card__title">Designer & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as Home */}
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

export default About
