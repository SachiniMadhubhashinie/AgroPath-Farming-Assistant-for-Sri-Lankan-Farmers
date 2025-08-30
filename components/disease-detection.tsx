"use client"

import type React from "react"
import { useState } from "react"
import "./disease-detection.css"

const DiseaseDetection: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="disease-detection-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__content">
            <div className="navbar__logo">
              <span className="navbar__logo-text">AgroPath</span>
            </div>
            <div className="navbar__menu">
              <a href="/" className="navbar__link">
                Home
              </a>
              <a href="/about" className="navbar__link">
                About
              </a>
              <a href="/contact" className="navbar__link">
                Contact
              </a>
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
                    <a href="/crop-suggestion" className="navbar__dropdown-item">
                      Crop Suggestion
                    </a>
                    <a href="/market" className="navbar__dropdown-item">
                      Market Price
                    </a>
                    <a href="/disease-detection" className="navbar__dropdown-item">
                      Disease Detection
                    </a>
                    <a href="/weather" className="navbar__dropdown-item">
                      Weather
                    </a>
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
              <a href="/login" className="navbar__cta-button">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="disease-detection__main">
        <div className="disease-detection__container">
          {/* Header */}
          <div className="disease-detection__header">
            <h1 className="disease-detection__title">AI Disease Detection</h1>
            <p className="disease-detection__subtitle">
              Upload a photo of your crop to detect diseases and get treatment recommendations
            </p>
          </div>

          {/* Upload Section */}
          <div className="disease-detection__upload-section">
            <div
              className={`disease-detection__upload-area ${dragActive ? "drag-active" : ""} ${selectedFile ? "has-file" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {selectedFile ? (
                <div className="disease-detection__file-preview">
                  <svg className="disease-detection__file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="disease-detection__file-name">{selectedFile.name}</p>
                  <button
                    className="disease-detection__analyze-button"
                    onClick={() => {
                      /* Add analysis logic here */
                    }}
                  >
                    Analyze Image
                  </button>
                </div>
              ) : (
                <>
                  <svg className="disease-detection__upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="disease-detection__upload-text">Drag & Drop Your Image Here</p>
                  <p className="disease-detection__upload-subtext">or click to browse files</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="disease-detection__file-input"
                  />
                  <button className="disease-detection__upload-button">Upload Image</button>
                </>
              )}
            </div>
          </div>

          {/* Tips Section */}
          <div className="disease-detection__tips-section">
            <h2 className="disease-detection__tips-title">Tips for Better Detection</h2>
            <div className="disease-detection__tips-grid">
              <div className="disease-detection__tip-card">
                <div className="disease-detection__tip-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="disease-detection__tip-title">Clear Photos</h3>
                <p className="disease-detection__tip-description">
                  Take high-resolution photos with good lighting for accurate detection
                </p>
              </div>

              <div className="disease-detection__tip-card">
                <div className="disease-detection__tip-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="disease-detection__tip-title">Close-up Shots</h3>
                <p className="disease-detection__tip-description">
                  Focus on affected areas and symptoms clearly visible
                </p>
              </div>

              <div className="disease-detection__tip-card">
                <div className="disease-detection__tip-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="disease-detection__tip-title">Multiple Angles</h3>
                <p className="disease-detection__tip-description">
                  Take photos from different angles to show all symptoms
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DiseaseDetection
