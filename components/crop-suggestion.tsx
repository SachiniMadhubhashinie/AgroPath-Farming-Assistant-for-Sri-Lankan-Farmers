"use client"

import type React from "react"
import { useState } from "react"
import "./crop-suggestion.css"

type Crop = {
  name: string
  scientificName: string
  icon: string
  difficulty: string
  demand: string
  description: string
  growingPeriod: string
  yield: string
  soilType: string
  benefits: string[]
}

const CropSuggestion: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedSeason, setSelectedSeason] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  const handleFilterChange = () => {
    if (selectedDistrict && selectedSeason) {
      setIsLoading(true)
      setTimeout(() => setIsLoading(false), 1500)
    }
  }

  // Define types for districts and seasons
  const districts = ["Colombo", "Kandy", "Galle", "Anuradhapura", "Kurunegala", "Ratnapura", "Matara", "Jaffna"] as const
  const seasons = ["Yala", "Maha"] as const
  
  type District = typeof districts[number]
  type Season = typeof seasons[number]
  
  // Sample crop data for different districts and seasons
  const cropData: Record<District, Record<Season, Crop[]>> = {
    Colombo: {
      Yala: [
        {
          name: "Tomato",
          scientificName: "Solanum lycopersicum",
          icon: "🍅",
          difficulty: "easy",
          demand: "high",
          description: "High-yield variety suitable for urban farming with excellent market demand.",
          growingPeriod: "90-120 days",
          yield: "25-30 tons/hectare",
          soilType: "Well-drained loamy soil",
          benefits: ["High market value", "Year-round cultivation", "Disease resistant varieties available"],
        },
        {
          name: "Lettuce",
          scientificName: "Lactuca sativa",
          icon: "🥬",
          difficulty: "easy",
          demand: "medium",
          description: "Fast-growing leafy green perfect for hydroponic systems and urban gardens.",
          growingPeriod: "45-65 days",
          yield: "15-20 tons/hectare",
          soilType: "Rich, well-drained soil",
          benefits: ["Quick harvest", "Low water requirement", "High nutritional value"],
        },
      ],
      Maha: [
        {
          name: "Cabbage",
          scientificName: "Brassica oleracea",
          icon: "🥬",
          difficulty: "medium",
          demand: "high",
          description: "Cool season crop ideal for Maha season with excellent storage properties.",
          growingPeriod: "90-120 days",
          yield: "40-50 tons/hectare",
          soilType: "Fertile, well-drained soil",
          benefits: ["Long storage life", "High demand", "Good export potential"],
        },
      ],
    },
    Kandy: {
      Yala: [
        {
          name: "Carrot",
          scientificName: "Daucus carota",
          icon: "🥕",
          difficulty: "medium",
          demand: "high",
          description: "Root vegetable thriving in Kandy's cool climate with excellent nutritional value.",
          growingPeriod: "70-80 days",
          yield: "20-25 tons/hectare",
          soilType: "Deep, loose, sandy loam",
          benefits: ["High vitamin A", "Good market price", "Export quality"],
        },
        {
          name: "Beans",
          scientificName: "Phaseolus vulgaris",
          icon: "🫘",
          difficulty: "easy",
          demand: "medium",
          description: "Nitrogen-fixing legume perfect for sustainable farming practices.",
          growingPeriod: "60-90 days",
          yield: "8-12 tons/hectare",
          soilType: "Well-drained fertile soil",
          benefits: ["Soil improvement", "High protein", "Multiple harvests"],
        },
      ],
      Maha: [
        {
          name: "Potato",
          scientificName: "Solanum tuberosum",
          icon: "🥔",
          difficulty: "medium",
          demand: "high",
          description: "Staple crop with high yield potential in Kandy's highland conditions.",
          growingPeriod: "90-120 days",
          yield: "25-35 tons/hectare",
          soilType: "Well-drained, fertile soil",
          benefits: ["High caloric value", "Storage capability", "Processing potential"],
        },
      ],
    },
    Anuradhapura: {
      Yala: [
        {
          name: "Rice",
          scientificName: "Oryza sativa",
          icon: "🌾",
          difficulty: "medium",
          demand: "high",
          description: "Traditional paddy cultivation with modern techniques for higher yields.",
          growingPeriod: "105-120 days",
          yield: "4-6 tons/hectare",
          soilType: "Clay loam with good water retention",
          benefits: ["Staple food crop", "Government support", "Established market"],
        },
        {
          name: "Chili",
          scientificName: "Capsicum annuum",
          icon: "🌶️",
          difficulty: "medium",
          demand: "high",
          description: "Spice crop with excellent market demand and export potential.",
          growingPeriod: "90-120 days",
          yield: "8-12 tons/hectare",
          soilType: "Well-drained sandy loam",
          benefits: ["High market value", "Export potential", "Processing industry demand"],
        },
      ],
      Maha: [
        {
          name: "Onion",
          scientificName: "Allium cepa",
          icon: "🧅",
          difficulty: "medium",
          demand: "high",
          description: "Essential vegetable crop with good storage properties and market demand.",
          growingPeriod: "90-120 days",
          yield: "15-25 tons/hectare",
          soilType: "Well-drained fertile soil",
          benefits: ["Long storage life", "Essential commodity", "Good market price"],
        },
      ],
    },
    Galle: {
      Yala: [
        {
          name: "Coconut",
          scientificName: "Cocos nucifera",
          icon: "🥥",
          difficulty: "medium",
          demand: "high",
          description: "High-demand crop with significant export potential.",
          growingPeriod: "12-18 months",
          yield: "50-70 nuts/tree/year",
          soilType: "Well-drained sandy loam",
          benefits: ["High market value", "Versatile uses", "Good export potential"],
        },
      ],
      Maha: [
        {
          name: "Mango",
          scientificName: "Mangifera indica",
          icon: "🥭",
          difficulty: "medium",
          demand: "high",
          description: "Popular fruit crop with high yield potential.",
          growingPeriod: "12-18 months",
          yield: "30-50 fruits/tree/year",
          soilType: "Well-drained loamy soil",
          benefits: ["High market value", "Good export potential", "Nutritious"],
        },
      ],
    },
    Kurunegala: {
      Yala: [
        {
          name: "Cucumber",
          scientificName: "Cucumis melo",
          icon: "🥒",
          difficulty: "easy",
          demand: "medium",
          description: "Fast-growing vegetable suitable for Yala season.",
          growingPeriod: "60-80 days",
          yield: "10-15 tons/hectare",
          soilType: "Well-drained fertile soil",
          benefits: ["Quick harvest", "High water content", "Good market price"],
        },
      ],
      Maha: [
        {
          name: "Pumpkin",
          scientificName: "Cucurbita pepo",
          icon: "🎃",
          difficulty: "easy",
          demand: "medium",
          description: "Versatile vegetable crop suitable for Maha season.",
          growingPeriod: "90-120 days",
          yield: "15-20 tons/hectare",
          soilType: "Well-drained loamy soil",
          benefits: ["Versatile uses", "Good market price", "Nutritious"],
        },
      ],
    },
    Ratnapura: {
      Yala: [
        {
          name: "Coffee",
          scientificName: "Coffea arabica",
          icon: "☕",
          difficulty: "medium",
          demand: "high",
          description: "High-value crop with significant export potential.",
          growingPeriod: "3-4 years",
          yield: "1000-1500 kg/hectare/year",
          soilType: "Well-drained, acidic soil",
          benefits: ["High market value", "Good export potential", "Sustainable"],
        },
      ],
      Maha: [
        {
          name: "Tea",
          scientificName: "Camellia sinensis",
          icon: "🍵",
          difficulty: "medium",
          demand: "high",
          description: "High-demand crop with significant export potential.",
          growingPeriod: "3-4 years",
          yield: "1500-2000 kg/hectare/year",
          soilType: "Well-drained, acidic soil",
          benefits: ["High market value", "Good export potential", "Sustainable"],
        },
      ],
    },
    Matara: {
      Yala: [
        {
          name: "Coconut",
          scientificName: "Cocos nucifera",
          icon: "🥥",
          difficulty: "medium",
          demand: "high",
          description: "High-demand crop with significant export potential.",
          growingPeriod: "12-18 months",
          yield: "50-70 nuts/tree/year",
          soilType: "Well-drained sandy loam",
          benefits: ["High market value", "Versatile uses", "Good export potential"],
        },
      ],
      Maha: [
        {
          name: "Mango",
          scientificName: "Mangifera indica",
          icon: "🥭",
          difficulty: "medium",
          demand: "high",
          description: "Popular fruit crop with high yield potential.",
          growingPeriod: "12-18 months",
          yield: "30-50 fruits/tree/year",
          soilType: "Well-drained loamy soil",
          benefits: ["High market value", "Good export potential", "Nutritious"],
        },
      ],
    },
    Jaffna: {
      Yala: [
        {
          name: "Paddy",
          scientificName: "Oryza sativa",
          icon: "🌾",
          difficulty: "medium",
          demand: "high",
          description: "Traditional paddy cultivation with modern techniques for higher yields.",
          growingPeriod: "105-120 days",
          yield: "4-6 tons/hectare",
          soilType: "Clay loam with good water retention",
          benefits: ["Staple food crop", "Government support", "Established market"],
        },
      ],
      Maha: [
        {
          name: "Brinjal",
          scientificName: "Solanum melongena",
          icon: "🍆",
          difficulty: "easy",
          demand: "medium",
          description: "Fast-growing vegetable suitable for Maha season.",
          growingPeriod: "60-90 days",
          yield: "10-15 tons/hectare",
          soilType: "Well-drained sandy loam",
          benefits: ["Quick harvest", "High market price", "Nutritious"],
        },
      ],
    },
  }

  // Helper to get crops for the selected district and season
  const getCurrentCrops = (): Crop[] => {
    if (!selectedDistrict || !selectedSeason) return []
    if (
      (districts as readonly string[]).includes(selectedDistrict) &&
      (seasons as readonly string[]).includes(selectedSeason)
    ) {
      return cropData[selectedDistrict as District][selectedSeason as Season] || []
    }
    return []
  }

  return (
    <div className="crop-suggestion-page">
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
              <button className="navbar__cta-button">Create Account</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Page Header */}
          <div className="page-header">
            <h1>Crop Suggestions</h1>
            <p>Get personalized crop recommendations based on your location and growing season</p>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-container">
              <div className="filter-group">
                <label>
                  <svg className="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Select District
                </label>
                <select
                  className="filter-select"
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value)
                    handleFilterChange()
                  }}
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>
                  <svg className="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Select Season
                </label>
                <select
                  className="filter-select"
                  value={selectedSeason}
                  onChange={(e) => {
                    setSelectedSeason(e.target.value)
                    handleFilterChange()
                  }}
                >
                  <option value="">Select Season</option>
                  {seasons.map((season) => (
                    <option key={season} value={season}>
                      {season}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedDistrict && selectedSeason && (
              <div className="selection-info">
                <p>
                  Showing recommendations for <strong>{selectedDistrict}</strong> district during{' '}
                  <strong>{selectedSeason}</strong> season
                </p>
              </div>
            )}
          </div>

          {/* Loading Section */}
          {isLoading && (
            <div className="loading-section">
              <div className="spinner-large"></div>
              <p>Analyzing soil and climate data for your selection...</p>
            </div>
          )}

          {/* Recommendations Section */}
          {!isLoading && getCurrentCrops().length > 0 && (
            <div className="recommendations-section">
              <h2>Recommended Crops ({getCurrentCrops().length} found)</h2>
              <div className="crop-cards">
                {getCurrentCrops().map((crop, index: number) => (
                  <div key={index} className="crop-card">
                    <div className="card-header">
                      <div className="crop-icon">{crop.icon}</div>
                      <div className="crop-title">
                        <h3>{crop.name}</h3>
                        <div className="scientific-name">{crop.scientificName}</div>
                      </div>
                      <div className="crop-badges">
                        <span className={`difficulty-badge difficulty-${crop.difficulty}`}>{crop.difficulty}</span>
                        <span className={`demand-badge demand-${crop.demand}`}>{crop.demand} demand</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="crop-description">{crop.description}</p>
                      <div className="crop-stats">
                        <div className="stat-item">
                          <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>
                            <div className="stat-label">Growing Period</div>
                            <div className="stat-value">{crop.growingPeriod}</div>
                          </div>
                        </div>
                        <div className="stat-item">
                          <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          <div>
                            <div className="stat-label">Expected Yield</div>
                            <div className="stat-value">{crop.yield}</div>
                          </div>
                        </div>
                      </div>
                      <div className="crop-benefits">
                        <h4>Key Benefits</h4>
                        <ul>
                          {crop.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="card-footer">
                        <div className="soil-info">
                          <strong>Soil:</strong> {crop.soilType}
                        </div>
                        <button className="learn-more-btn">Learn More</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {!isLoading && selectedDistrict && selectedSeason && getCurrentCrops().length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🌱</div>
              <h3>No recommendations found</h3>
              <p>Try selecting a different district or season combination.</p>
            </div>
          )}

          {/* Info Section */}
          <div className="info-section">
            <div className="info-card">
              <div className="info-header">
                <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2>How Our Crop Suggestion System Works</h2>
              </div>
              <div className="info-content">
                <div className="info-grid">
                  <div className="info-item">
                    <div className="info-number">1</div>
                    <div>
                      <h3>Climate Analysis</h3>
                      <p>
                        We analyze rainfall patterns, temperature ranges, and seasonal variations specific to your
                        district.
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-number">2</div>
                    <div>
                      <h3>Soil Compatibility</h3>
                      <p>
                        Our system considers soil types and drainage conditions common in different regions of Sri
                        Lanka.
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-number">3</div>
                    <div>
                      <h3>Market Demand</h3>
                      <p>We factor in current market prices, demand trends, and export potential for each crop.</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-number">4</div>
                    <div>
                      <h3>Seasonal Timing</h3>
                      <p>Recommendations are optimized for Yala (April-September) and Maha (October-March) seasons.</p>
                    </div>
                  </div>
                </div>
                <div className="info-note">
                  <p>
                    <strong>Note:</strong> These recommendations are based on general agricultural data. For specific
                    soil testing and detailed farming advice, consult with local agricultural extension officers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CropSuggestion
