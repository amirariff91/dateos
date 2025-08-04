import styles from '../styles/SkipToContent.module.css'

export default function SkipToContent() {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Skip to main content
    </a>
  )
}