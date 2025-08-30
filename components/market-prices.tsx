"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link" // Added Next.js Link import for proper routing
import "./market-prices.css"

interface CropData {
  id: number
  name: string
  category: string
  pricePerKg: number
  location: string
  market: string
  lastUpdated: string
  district: string
  icon: string
}

const MarketPrices: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchTerm, setSearchTerm] = useState("")

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
  }

  // Sample crop data
  const cropData: CropData[] = [
    {
      id: 1,
      name: "Tomato",
      category: "Vegetables",
      pricePerKg: 280,
      location: "Dambulla",
      market: "Dambulla Economic Centre",
      lastUpdated: "2 hours ago",
      district: "Matale",
      icon: "🍅",
    },
    {
      id: 2,
      name: "Rice",
      category: "Grains",
      pricePerKg: 120,
      location: "Colombo",
      market: "Colombo Manning Market",
      lastUpdated: "1 hour ago",
      district: "Colombo",
      icon: "🌾",
    },
    {
      id: 3,
      name: "Banana",
      category: "Fruits",
      pricePerKg: 150,
      location: "Kegalle",
      market: "Kegalle Wholesale Market",
      lastUpdated: "30 minutes ago",
      district: "Kegalle",
      icon: "🍌",
    },
    {
      id: 4,
      name: "Onion",
      category: "Vegetables",
      pricePerKg: 200,
      location: "Kandy",
      market: "Kandy Central Market",
      lastUpdated: "45 minutes ago",
      district: "Kandy",
      icon: "🧅",
    },
    {
      id: 5,
      name: "Coconut",
      category: "Fruits",
      pricePerKg: 80,
      location: "Kurunegala",
      market: "Kurunegala Market",
      lastUpdated: "1.5 hours ago",
      district: "Kurunegala",
      icon: "🥥",
    },
    {
      id: 6,
      name: "Cabbage",
      category: "Vegetables",
      pricePerKg: 100,
      location: "Nuwara Eliya",
      market: "Nuwara Eliya Market",
      lastUpdated: "3 hours ago",
      district: "Nuwara Eliya",
      icon: "🥬",
    },
    {
      id: 7,
      name: "Papaya",
      category: "Fruits",
      pricePerKg: 120,
      location: "Galle",
      market: "Galle Fish Market",
      lastUpdated: "2.5 hours ago",
      district: "Galle",
      icon: "🥭",
    },
    {
      id: 8,
      name: "Carrot",
      category: "Vegetables",
      pricePerKg: 180,
      location: "Badulla",
      market: "Badulla Market",
      lastUpdated: "4 hours ago",
      district: "Badulla",
      icon: "🥕",
    },
    {
      id: 9,
      name: "Mango",
      category: "Fruits",
      pricePerKg: 250,
      location: "Jaffna",
      market: "Jaffna Market",
      lastUpdated: "3 hours ago",
      district: "Jaffna",
      icon: "🥭",
    },
    {
      id: 10,
      name: "Green Beans",
      category: "Vegetables",
      pricePerKg: 220,
      location: "Anuradhapura",
      market: "Anuradhapura Market",
      lastUpdated: "2 hours ago",
      district: "Anuradhapura",
      icon: "🫘",
    },
  ]

  const districts = ["All Districts", ...Array.from(new Set(cropData.map((crop) => crop.district)))]
  const categories = ["All Categories", ...Array.from(new Set(cropData.map((crop) => crop.category)))]

  const filteredCrops = useMemo(() => {
    return cropData.filter((crop) => {
      const matchesDistrict = selectedDistrict === "All Districts" || crop.district === selectedDistrict
      const matchesCategory = selectedCategory === "All Categories" || crop.category === selectedCategory
      const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesDistrict && matchesCategory && matchesSearch
    })
  }, [selectedDistrict, selectedCategory, searchTerm])

  return (
    <div className="market-prices-page">
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

      {/* Header Section */}
      <section className="market-header">
        <div className="market-header__container">
          <h1 className="market-header__title">Daily Market Prices</h1>
          <p className="market-header__subtitle">Stay updated on crop prices across Sri Lanka</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="market-filters">
        <div className="market-filters__container">
          <div className="market-filters__row">
            <div className="market-filters__group">
              <select
                className="market-filters__select"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="market-filters__group">
              <select
                className="market-filters__select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="market-filters__group">
              <input
                type="text"
                placeholder="Search by crop name..."
                className="market-filters__search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="market-filters__results">
            <span className="market-filters__count">Showing {filteredCrops.length} results</span>
            <span className="market-filters__updated">Last updated: Just now</span>
          </div>
        </div>
      </section>

      {/* Market Table */}
      <section className="market-table-section">
        <div className="market-table__container">
          <div className="market-table__wrapper">
            <table className="market-table">
              <thead className="market-table__header">
                <tr>
                  <th className="market-table__th">Crop Name</th>
                  <th className="market-table__th">Category</th>
                  <th className="market-table__th">Price per kg (LKR)</th>
                  <th className="market-table__th">Location/Market</th>
                  <th className="market-table__th">Last Updated</th>
                </tr>
              </thead>
              <tbody className="market-table__body">
                {filteredCrops.map((crop) => (
                  <tr key={crop.id} className="market-table__row">
                    <td className="market-table__td">
                      <div className="market-table__crop">
                        <span className="market-table__icon">{crop.icon}</span>
                        <span className="market-table__name">{crop.name}</span>
                      </div>
                    </td>
                    <td className="market-table__td">
                      <span className={`market-table__category market-table__category--${crop.category.toLowerCase()}`}>
                        {crop.category}
                      </span>
                    </td>
                    <td className="market-table__td">
                      <span className="market-table__price">Rs. {crop.pricePerKg}</span>
                    </td>
                    <td className="market-table__td">
                      <div className="market-table__location">
                        <span className="market-table__market">{crop.market}</span>
                        <span className="market-table__district">{crop.location}</span>
                      </div>
                    </td>
                    <td className="market-table__td">
                      <span className="market-table__time">{crop.lastUpdated}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketPrices
