import { useState, useEffect } from 'react'
import styles from '../styles/SailorMoonImages.module.css'

// Sailor Moon character data with placeholder images
// Replace these URLs with actual Sailor Moon images
const sailorCharacters = {
  moon: {
    name: "Sailor Moon",
    planet: "Moon",
    color: "#FFB6D9",
    placeholder: "🌙",
    imageUrl: "/images/sailor-moon/sailor-moon-portrait.png",
    description: "Guardian of Love and Justice"
  },
  mercury: {
    name: "Sailor Mercury",
    planet: "Mercury",
    color: "#40E0D0",
    placeholder: "💧",
    imageUrl: "/images/sailor-moon/sailor-mercury-portrait.png",
    description: "Guardian of Wisdom"
  },
  mars: {
    name: "Sailor Mars",
    planet: "Mars",
    color: "#FF6B6B",
    placeholder: "🔥",
    imageUrl: "/images/sailor-moon/sailor-mars-portrait.png",
    description: "Guardian of Passion"
  },
  jupiter: {
    name: "Sailor Jupiter",
    planet: "Jupiter",
    color: "#90EE90",
    placeholder: "⚡",
    imageUrl: "/images/sailor-moon/sailor-jupiter-portrait.png",
    description: "Guardian of Strength"
  },
  venus: {
    name: "Sailor Venus",
    planet: "Venus",
    color: "#FFD700",
    placeholder: "💛",
    imageUrl: "/images/sailor-moon/sailor-venus-portrait.png",
    description: "Guardian of Beauty"
  }
}

export function SailorPortrait({ character, size = "medium", showDescription = false }) {
  const [imageError, setImageError] = useState(false)
  const char = sailorCharacters[character]
  
  if (!char) return null
  
  const sizeClasses = {
    small: styles.portraitSmall,
    medium: styles.portraitMedium,
    large: styles.portraitLarge
  }
  
  return (
    <div className={`${styles.portrait} ${sizeClasses[size]}`}>
      {!imageError ? (
        <img 
          src={char.imageUrl}
          alt={char.name}
          className={styles.characterImage}
          onError={() => setImageError(true)}
          style={{ borderColor: char.color }}
        />
      ) : (
        <div 
          className={styles.placeholderCircle}
          style={{ backgroundColor: char.color }}
        >
          <span className={styles.placeholderEmoji}>{char.placeholder}</span>
        </div>
      )}
      {showDescription && (
        <div className={styles.characterInfo}>
          <h4 style={{ color: char.color }}>{char.name}</h4>
          <p>{char.description}</p>
        </div>
      )}
    </div>
  )
}

export function SailorMoonHero() {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className={styles.heroImageContainer}>
      {!imageError ? (
        <img 
          src="/images/sailor-moon/sailor-moon-hero.png"
          alt="Sailor Moon"
          className={styles.heroImage}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.heroPlaceholder}>
          <div className={styles.moonCrescent}>🌙</div>
          <p className={styles.heroText}>In the name of the moon!</p>
        </div>
      )}
    </div>
  )
}

export function LunaArtemisGuide({ message }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className={styles.guideContainer}>
      {!imageError ? (
        <img 
          src="/images/sailor-moon/luna-artemis.png"
          alt="Luna and Artemis"
          className={styles.guideImage}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.guidePlaceholder}>
          <span>🐱</span>
          <span>🐱</span>
        </div>
      )}
      {message && (
        <div className={styles.speechBubble}>
          <p>{message}</p>
        </div>
      )}
    </div>
  )
}

export function TransformationScene() {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className={styles.transformationContainer}>
      {!imageError ? (
        <img 
          src="/images/sailor-moon/transformation-sequence.png"
          alt="Transformation Sequence"
          className={styles.transformationImage}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.transformationPlaceholder}>
          <div className={styles.sparkles}>
            <span>✨</span>
            <span>⭐</span>
            <span>💫</span>
          </div>
          <p>Moon Prism Power, Make Up!</p>
        </div>
      )}
    </div>
  )
}

export function RomanticScene() {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className={styles.romanticContainer}>
      {!imageError ? (
        <img 
          src="/images/sailor-moon/romantic-scene.png"
          alt="Sailor Moon and Tuxedo Mask"
          className={styles.romanticImage}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.romanticPlaceholder}>
          <div className={styles.hearts}>
            <span>💕</span>
            <span>🌹</span>
            <span>💕</span>
          </div>
          <p>A love written in the stars</p>
        </div>
      )}
    </div>
  )
}