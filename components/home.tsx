"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link" // Added Next.js Link import for proper routing
import "./home.css"

const Home: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  return (
    <div className="homepage">
      {/* Navigation */}
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
                {" "}
                {/* Updated About link to navigate to /about page */}
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
                      {" "}
                      {/* Updated to proper route */}
                      Crop Suggestion
                    </Link>
                    <Link href="/market" className="navbar__dropdown-item">
                      {" "}
                      {/* Updated to proper route */}
                      Market Price
                    </Link>
                    <Link href="/disease-detection" className="navbar__dropdown-item">
                      {" "}
                      {/* Updated to proper route */}
                      Disease Detection
                    </Link>
                    <Link href="/weather" className="navbar__dropdown-item">
                      {" "}
                      {/* Updated to proper route */}
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

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero__decoration hero__decoration--top"></div>
        <div className="hero__decoration hero__decoration--bottom"></div>
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Smart Farming for the
              <span className="hero__title-accent">Future</span>
            </h1>
            <p className="hero__description">
              Harness the power of AI to optimize your agricultural practices, increase yields, and make data-driven
              decisions for sustainable farming.
            </p>
            <button className="hero__cta-button">Start your journey with AgroPath today!</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="features-section__container">
          <div className="features-section__header">
            <h2 className="features-section__title">Our Smart Features</h2>
            <p className="features-section__description">
              Discover how AgroPath revolutionizes farming with cutting-edge technology
            </p>
          </div>
          <div className="features-grid">
            <div className="features-grid__card" id="crop-suggestions">
              <div className="features-grid__image-container">
                <img
                  src="/crop-suggestions-seedlings-plants.png"
                  alt="Crop Suggestions"
                  className="features-grid__image"
                />
                <div className="features-grid__overlay"></div>
                <div className="features-grid__icon-container">
                  <svg className="features-grid__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="features-grid__content">
                <h3 className="features-grid__title">Crop Suggestions</h3>
                <p className="features-grid__description">
                  AI-powered recommendations for optimal crop selection based on soil and climate data.
                </p>
              </div>
            </div>

            <div className="features-grid__card" id="market-price">
              <div className="features-grid__image-container">
                <img src="/market-analysis-charts.png" alt="Market Analysis" className="features-grid__image" />
                <div className="features-grid__overlay"></div>
                <div className="features-grid__icon-container">
                  <svg className="features-grid__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="features-grid__content">
                <h3 className="features-grid__title">Market Analysis</h3>
                <p className="features-grid__description">
                  Real-time pricing and market trend analysis to maximize your profits.
                </p>
              </div>
            </div>

            <div className="features-grid__card" id="disease-detection">
              <div className="features-grid__image-container">
                <img
                  src="/healthy-and-diseased-tomatoes.png"
                  alt="Disease Detection"
                  className="features-grid__image"
                />
                <div className="features-grid__overlay"></div>
                <div className="features-grid__icon-container">
                  <svg className="features-grid__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="features-grid__content">
                <h3 className="features-grid__title">Disease Detection</h3>
                <p className="features-grid__description">
                  Early disease identification and treatment recommendations using computer vision.
                </p>
              </div>
            </div>

            <div className="features-grid__card" id="weather">
              <div className="features-grid__image-container">
                <img src="/weather-monitoring-sky-clouds.png" alt="Weather Insights" className="features-grid__image" />
                <div className="features-grid__overlay"></div>
                <div className="features-grid__icon-container">
                  <svg className="features-grid__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
              </div>
              <div className="features-grid__content">
                <h3 className="features-grid__title">Weather Insights</h3>
                <p className="features-grid__description">
                  Precise weather forecasting for better planning and crop protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-section__container">
          <div className="about-section__grid">
            <div>
              <h2 className="about-section__title">Transforming Agriculture with Technology</h2>
              <div className="about-section__card">
                <div className="about-section__card-header">
                  <svg className="about-section__card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="about-section__card-title">Smart Solutions</h3>
                </div>
                <p className="about-section__card-description">
                  Our AI-powered platform combines satellite imagery and machine learning to provide
                  farmers with actionable insights for better crop management.
                </p>
                <div className="about-section__card-stats">
                  <svg className="about-section__stats-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="about-section__stats-text">Trusted by thousands of farmers</span>
                </div>
              </div>
            </div>
            <div className="about-section__image-container">
              <img
                src="/modern-farming-technology.png"
                alt="Smart farming technology"
                className="about-section__image"
              />
              <div className="about-section__image-overlay"></div>
              <div className="about-section__image-badge">
                <div className="about-section__badge-content">
                  <div className="about-section__badge-title">Innovation in Agriculture</div>
                  <div className="about-section__badge-subtitle">Leading the future of farming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-section__container">
          <h2 className="contact-section__title">Ready to Transform Your Farm?</h2>
          <p className="contact-section__description">
            Discover smart farming solutions trusted by thousands of Sri Lankan farmers.
          </p>
          <div className="contact-section__actions">
            <button className="contact-section__primary-button">Start your journey with AgroPath today!</button>
            <button className="contact-section__secondary-button">Learn More</button>
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

export default Home
