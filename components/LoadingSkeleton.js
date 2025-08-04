import styles from '../styles/LoadingSkeleton.module.css'

export function HeroSkeleton() {
  return (
    <section className={styles.heroSkeleton}>
      <div className="container">
        <div className={styles.titleSection}>
          <div className={`${styles.skeleton} ${styles.icon}`}></div>
          <div className={`${styles.skeleton} ${styles.title}`}></div>
          <div className={`${styles.skeleton} ${styles.subtitle}`}></div>
        </div>
        <div className={styles.dateCard}>
          <div className={styles.dateInfo}>
            <div className={`${styles.skeleton} ${styles.eventTitle}`}></div>
            <div className={`${styles.skeleton} ${styles.detail}`}></div>
            <div className={`${styles.skeleton} ${styles.detail}`}></div>
            <div className={`${styles.skeleton} ${styles.detail}`}></div>
          </div>
          <div className={styles.countdown}>
            <div className={`${styles.skeleton} ${styles.countdownTitle}`}></div>
            <div className={styles.timeGrid}>
              <div className={`${styles.skeleton} ${styles.timeUnit}`}></div>
              <div className={`${styles.skeleton} ${styles.timeUnit}`}></div>
              <div className={`${styles.skeleton} ${styles.timeUnit}`}></div>
              <div className={`${styles.skeleton} ${styles.timeUnit}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PickerSkeleton() {
  return (
    <section className={styles.pickerSkeleton}>
      <div className="container">
        <div className={styles.header}>
          <div className={`${styles.skeleton} ${styles.icon}`}></div>
          <div className={`${styles.skeleton} ${styles.title}`}></div>
          <div className={`${styles.skeleton} ${styles.subtitle}`}></div>
        </div>
        <div className={styles.planetsGrid}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`${styles.skeleton} ${styles.planetCard}`}></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WishlistSkeleton() {
  return (
    <section className={styles.wishlistSkeleton}>
      <div className="container">
        <div className={styles.header}>
          <div className={`${styles.skeleton} ${styles.icon}`}></div>
          <div className={`${styles.skeleton} ${styles.title}`}></div>
          <div className={`${styles.skeleton} ${styles.subtitle}`}></div>
        </div>
        <div className={styles.wishlistGrid}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`${styles.skeleton} ${styles.wishlistCard}`}>
              <div className={`${styles.skeleton} ${styles.cardHeader}`}></div>
              <div className={`${styles.skeleton} ${styles.cardContent}`}></div>
              <div className={`${styles.skeleton} ${styles.cardFooter}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MemoriesSkeleton() {
  return (
    <section className={styles.memoriesSkeleton}>
      <div className="container">
        <div className={styles.header}>
          <div className={`${styles.skeleton} ${styles.icon}`}></div>
          <div className={`${styles.skeleton} ${styles.title}`}></div>
          <div className={`${styles.skeleton} ${styles.subtitle}`}></div>
        </div>
        <div className={styles.timeline}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={`${styles.skeleton} ${styles.timelineMarker}`}></div>
              <div className={`${styles.skeleton} ${styles.memoryCard}`}>
                <div className={`${styles.skeleton} ${styles.memoryDate}`}></div>
                <div className={`${styles.skeleton} ${styles.memoryTitle}`}></div>
                <div className={`${styles.skeleton} ${styles.memoryPhoto}`}></div>
                <div className={styles.captions}>
                  <div className={`${styles.skeleton} ${styles.caption}`}></div>
                  <div className={`${styles.skeleton} ${styles.caption}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FullPageSkeleton() {
  return (
    <div className={styles.fullPageSkeleton}>
      <HeroSkeleton />
      <PickerSkeleton />
      <WishlistSkeleton />
      <MemoriesSkeleton />
    </div>
  )
}