import styles from '../styles/Memories.module.css'
import { HeartIcon, MoonIcon, StarIcon, CosmicHeartCompact, TransformationBrooch } from '../utils/icons'

export default function Memories({ memoriesData }) {
  return (
    <section id="memories" className={styles.memories} aria-labelledby="memories-heading">
      <div className="container">
        <div className={styles.header}>
          <CosmicHeartCompact size={60} />
          <h2 id="memories-heading" className="prism-text">Our Timeline of Love</h2>
        </div>
        <div className="star-divider"></div>
        
        <p className={styles.subtitle}>Every moment is a precious gem in our story</p>
        
        <div className={styles.timeline} role="list" aria-label="Relationship timeline">
          <div className={styles.timelineLine}></div>
          
          {memoriesData.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right} scroll-reveal`}
              style={{ '--delay': `${index * 0.2}s` }}
              role="listitem"
            >
              <div className={styles.timelineMarker}>
                <TransformationBrooch size={36} primaryColor="white" accentColor="#FFD700" />
              </div>
              
              <div className={styles.memoryCard}>
                <div className={styles.memoryDate}>
                  {new Date(memory.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                
                <h3 className={styles.memoryTitle}>{memory.title}</h3>
                
                {memory.photo && (
                  <div className={styles.photoContainer}>
                    <img 
                      src={memory.photo} 
                      alt={`Photo from ${memory.title}`}
                      className={styles.photo}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={styles.photoPlaceholder} style={{ display: 'none' }}>
                      <StarIcon size={48} color="#FFD700" filled />
                      <p>Our magical moment captured in time</p>
                    </div>
                  </div>
                )}
                
                <div className={styles.captions}>
                  <div className={styles.caption}>
                    <h4 className={styles.captionTitle} id={`amir-caption-${memory.id}`}>
                      <MoonIcon size={20} color="var(--navy-main)" />
                      Amir's Take
                    </h4>
                    <p className={styles.captionText} aria-labelledby={`amir-caption-${memory.id}`}>{memory.amirCaption}</p>
                  </div>
                  
                  <div className={styles.caption}>
                    <h4 className={styles.captionTitle} id={`ayunni-caption-${memory.id}`}>
                      <MoonIcon size={20} color="var(--moon-pink)" />
                      Ayunni's Take
                    </h4>
                    <p className={styles.captionText} aria-labelledby={`ayunni-caption-${memory.id}`}>{memory.ayunniCaption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className={styles.timelineEnd}>
            <div className={styles.endMarker}>
              <HeartIcon size={32} color="#FFB6D9" filled />
            </div>
            <p className={styles.endText}>Forever writing our love story in the stars...</p>
          </div>
        </div>
      </div>
    </section>
  )
}