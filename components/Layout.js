import Navigation from './Navigation'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              Made with <span className={styles.heart}>♥</span> by Amir for Ayunni
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