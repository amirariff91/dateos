import Navigation from './Navigation'
import SkipToContent from './SkipToContent'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <SkipToContent />
      <Navigation />
      
      <main id="main-content" className={styles.main} role="main" aria-label="Main content">
        {children}
      </main>
      
      <footer className={styles.footer} role="contentinfo" aria-label="Footer">
        <div className="container">
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              Made with <span className={styles.heart} role="img" aria-label="love">♥</span> by Amir for Ayunni
            </p>
            <p className={styles.footerSubtext}>
              Moon Prism Power, Make Up!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}