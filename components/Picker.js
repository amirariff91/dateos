import { useState } from 'react'
import styles from '../styles/Picker.module.css'
import { SailorPortrait } from './SailorMoonImages'

export default function Picker({ pickerOptions }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isRevealing, setIsRevealing] = useState(false)

  const planets = [
    { 
      id: 'moon', 
      name: 'Moon', 
      emoji: '🌙',
      color: 'var(--primary)', 
      description: 'Romantic & Dreamy',
      guardian: 'Sailor Moon'
    },
    { 
      id: 'mercury', 
      name: 'Mercury', 
      emoji: '💧',
      color: '#86CEEB', 
      description: 'Smart & Cultural',
      guardian: 'Sailor Mercury'
    },
    { 
      id: 'mars', 
      name: 'Mars', 
      emoji: '🔥',
      color: '#FF6B6B', 
      description: 'Active & Energetic',
      guardian: 'Sailor Mars'
    },
    { 
      id: 'jupiter', 
      name: 'Jupiter', 
      emoji: '⚡',
      color: '#4ECDC4', 
      description: 'Foodie Adventures',
      guardian: 'Sailor Jupiter'
    },
    { 
      id: 'venus', 
      name: 'Venus', 
      emoji: '💛',
      color: 'var(--accent)', 
      description: 'Relaxing & Cozy',
      guardian: 'Sailor Venus'
    }
  ]

  const selectPlanet = (planet) => {
    if (isRevealing) return
    
    setSelectedPlanet(planet)
    setIsRevealing(true)
    setSelectedOption(null)
    
    // Simulate thinking time
    setTimeout(() => {
      const options = pickerOptions[planet.id]
      const randomOption = options[Math.floor(Math.random() * options.length)]
      setSelectedOption(randomOption)
      setIsRevealing(false)
    }, 1000)
  }

  return (
    <section id="picker" className={styles.picker}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.icon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="7" r="2" fill="currentColor"/>
              <circle cx="7" cy="14" r="2" fill="currentColor"/>
              <circle cx="17" cy="14" r="2" fill="currentColor"/>
            </svg>
          </div>
          <h2 className={styles.title}>Planetary Date Picker</h2>
          <p className={styles.subtitle}>Choose a planet to guide your next adventure</p>
        </div>
        
        <div className={styles.planetsGrid}>
          {planets.map((planet) => (
            <button
              key={planet.id}
              className={`${styles.planetCard} ${selectedPlanet?.id === planet.id ? styles.selected : ''}`}
              onClick={() => selectPlanet(planet)}
              style={{ '--planet-color': planet.color }}
            >
              <div className={styles.portraitContainer}>
                <SailorPortrait 
                  character={planet.id} 
                  size="medium" 
                  showDescription={false}
                />
              </div>
              <h3 className={styles.planetName}>{planet.name}</h3>
              <p className={styles.planetDescription}>{planet.description}</p>
              <span className={styles.planetGuardian}>{planet.guardian}</span>
            </button>
          ))}
        </div>
        
        {selectedOption && (
          <div className={styles.result}>
            <div className={styles.resultHeader}>
              <span className={styles.resultEmoji}>{selectedPlanet.emoji}</span>
              <h3>{selectedPlanet.guardian} suggests:</h3>
            </div>
            <p className={styles.resultOption}>{selectedOption}</p>
            <p className={styles.resultTagline}>
              In the name of {selectedPlanet.name}, let's make it magical!
            </p>
          </div>
        )}
        
        {isRevealing && (
          <div className={styles.loading}>
            <div className={styles.loadingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>The planets are aligning...</p>
          </div>
        )}
      </div>
    </section>
  )
}