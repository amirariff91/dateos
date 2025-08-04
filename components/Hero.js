import { useState, useEffect } from 'react'
import styles from '../styles/Hero.module.css'
import { CalendarIcon, HeartIcon, StarIcon } from '../utils/icons'
import { MoonSilhouette } from './SailorMoonDecor'
import { SailorMoonHero } from './SailorMoonImages'

export default function Hero({ nextDate }) {
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
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backgroundPattern}></div>
      <MoonSilhouette className={styles.moonDecor} />
      
      <div className="container">
        <div className={styles.heroImageWrapper}>
          <SailorMoonHero />
        </div>
        <div className={styles.content}>
          <div className={styles.titleSection}>
            <div className={styles.moonIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-1.4-.3-2.7-.8-3.9-1.5 3.6-5 6.1-9.2 6.1-5.5 0-10-4.5-10-10 0-1.8.5-3.5 1.3-5C7.3 2.3 11.5 2 12 2z" 
                      fill="url(#moonGradient)" />
                <defs>
                  <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFB6D9" />
                    <stop offset="100%" stopColor="#FF91C7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 id="hero-heading" className={styles.title}>Our Next Magical Date</h1>
            <p className={styles.subtitle}>Every moment together is a new adventure</p>
          </div>

          <div className={styles.dateCard}>
            <div className={styles.dateInfo}>
              <h2 className={styles.eventTitle}>{nextDate.title}</h2>
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <CalendarIcon size={20} />
                  <span>{new Date(nextDate.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className={styles.detailItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label="Time">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{nextDate.time}</span>
                </div>
                <div className={styles.detailItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label="Location">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
                          fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
                  </svg>
                  <span>{nextDate.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.countdown} role="timer" aria-label={`Countdown to ${nextDate.title}`}>
              <h3 className={styles.countdownTitle}>Counting down the moments</h3>
              <div className={styles.timeGrid}>
                <div className={styles.timeUnit}>
                  <span className={styles.timeValue}>{timeLeft.days}</span>
                  <span className={styles.timeLabel} aria-label="Days">Days</span>
                </div>
                <div className={styles.timeUnit}>
                  <span className={styles.timeValue}>{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className={styles.timeLabel} aria-label="Hours">Hours</span>
                </div>
                <div className={styles.timeUnit}>
                  <span className={styles.timeValue}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className={styles.timeLabel} aria-label="Minutes">Minutes</span>
                </div>
                <div className={styles.timeUnit}>
                  <span className={styles.timeValue}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className={styles.timeLabel} aria-label="Seconds">Seconds</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#memories" className="btn btn-primary">
              <HeartIcon size={20} />
              View Our Memories
            </a>
            <a href="#wishlist" className="btn btn-secondary">
              <StarIcon size={20} />
              Browse Wishlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}