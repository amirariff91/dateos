import { useState, useEffect } from 'react'
import styles from '../styles/Plans.module.css'
import { CalendarIcon, MoonIcon, SparkleIcon, TransformationBrooch, CosmicHeartCompact } from '../utils/icons'
import { LunaArtemisGuide } from './SailorMoonImages'

export default function Plans({ nextDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(`${nextDate.date}T${nextDate.time}:00`)
      const now = new Date()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [nextDate])

  return (
    <section id="plans" className={styles.plans}>
      <div className="container">
        <div className={styles.header}>
          <TransformationBrooch size={60} primaryColor="#FFB6D9" />
          <h2 className="prism-text">Our Next Chapter</h2>
        </div>
        <div className="star-divider"></div>
        
        <LunaArtemisGuide message="Your next magical adventure awaits! Luna and Artemis are here to guide you!" />
        
        <div className={`${styles.dateCard} crystal-bg`}>
          <div className={styles.broochCorner}>
            <CosmicHeartCompact size={48} />
          </div>
          <div className={styles.sparkles}>
            <SparkleIcon size={24} color="#FFD700" />
            <SparkleIcon size={20} color="#FFB6D9" />
            <SparkleIcon size={18} color="#86CEEB" />
          </div>
          
          <h3 className={styles.dateTitle}>{nextDate.title}</h3>
          
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.days}</span>
              <span className={styles.countdownLabel}>Days</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.hours}</span>
              <span className={styles.countdownLabel}>Hours</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
              <span className={styles.countdownLabel}>Minutes</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{timeLeft.seconds}</span>
              <span className={styles.countdownLabel}>Seconds</span>
            </div>
          </div>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <strong>Date:</strong> {new Date(`${nextDate.date}T${nextDate.time}:00`).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className={styles.detailItem}>
              <strong>Time:</strong> {nextDate.time}
            </div>
            <div className={styles.detailItem}>
              <strong>Budget:</strong> {nextDate.budget}
            </div>
            <div className={styles.detailItem}>
              <strong>Dress Code:</strong> {nextDate.dressCode}
            </div>
            <div className={styles.detailItem}>
              <strong>Location:</strong> 
              <a href={nextDate.locationUrl} target="_blank" rel="noopener noreferrer" className={styles.locationLink}>
                {nextDate.location} 📍
              </a>
            </div>
          </div>
          
          <div className={styles.moonPower}>
            <MoonIcon size={24} color="#FFD700" />
            <span className={styles.transformPhrase}>Moon Prism Power, Make Up!</span>
            <MoonIcon size={24} color="#FFD700" />
          </div>
          
          <div className={styles.ribbonDecoration}>
            <div className={styles.ribbon}></div>
          </div>
        </div>
      </div>
    </section>
  )
}