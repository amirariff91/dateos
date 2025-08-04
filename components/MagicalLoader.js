import styles from '../styles/MagicalLoader.module.css'

export default function MagicalLoader({ show = true }) {
  if (!show) return null
  
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContent}>
        <div className={styles.moonContainer}>
          <div className={styles.moon}>
            <div className={styles.crater1}></div>
            <div className={styles.crater2}></div>
            <div className={styles.crater3}></div>
          </div>
          <div className={styles.moonGlow}></div>
        </div>
        
        <div className={styles.stars}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className={styles.textContainer}>
          <h2 className={styles.loadingText}>
            Loading Magical Moments
          </h2>
          <div className={styles.sparkles}>
            <span>✨</span>
            <span>💫</span>
            <span>⭐</span>
          </div>
        </div>
        
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </div>
  )
}