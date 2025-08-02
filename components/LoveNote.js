import styles from '../styles/LoveNote.module.css'
import { HeartIcon, StarIcon, MoonIcon, CrystalStarBrooch } from '../utils/icons'
import SailorMoonDecor from './SailorMoonDecor'
import { RomanticScene } from './SailorMoonImages'

export default function LoveNote() {
  return (
    <section className={styles.loveNote}>
      <div className="container">
        <div className={styles.header}>
          <CrystalStarBrooch size={60} />
          <h2 className="prism-text">A Special Message</h2>
        </div>
        <div className="star-divider"></div>
        
        <div className={styles.decorContainer}>
          <RomanticScene />
        </div>
        
        <div className={`${styles.noteCard} crystal-bg`}>
          <div className={styles.noteContent}>
            <p className={styles.noteText}>
              Dear Ayunni,
            </p>
            <p className={styles.noteText}>
              From that 12-hour KB-KL road trip that led me to Bumble, to our late-night conversations about Sarawak 
              and patung stories until 1 AM, every moment has been magical. Remember that morning of June 19th at 7:19 AM 
              when you said "Amir, i takut laa i suka u"? My heart has been yours since then. You said my 
              "again another sets of long texts 🤣🤣🤣" are a green flag, and I promise to keep them coming - consistently!
            </p>
            <p className={styles.noteText}>
              Thank you for taking things at your pace, for your "sorry spam WhatsApp 😅" messages that always make me smile, 
              for being bangga to show my picture to your friends, and for being the Sarawakian-approved girl who makes 
              every conversation feel like home. From our first Hala Bala movie date at Kepong (and that unexpected powerbank gift!), 
              to the Superman movie and bracelet, from flowers that remind me of you to becoming your phone wallpaper - 
              you're in my thoughts every 15 minutes.
            </p>
            <p className={styles.noteText}>
              Whether we're planning badminton rematches (best of 3!), having BBQTown or Sukiya dates, consulting ChatGPT 
              for relationship advice (our trusted third wheel 😂), or watching action movies (no romance - nanti awkward!), 
              I'm excited for all our future adventures. And now, meeting your family at Warong Din with Mak, Apak, and Mun - 
              another beautiful chapter in our story! Like you said, we'll take it one step at a time together. 
              In the name of the moon (and all the Sailor Guardians), let's keep writing our story together.
            </p>
            <p className={styles.signature}>
              Forever your consistent long-text sender,<br/>
              <span className={styles.name}>Amir</span>
            </p>
            <p className={styles.ps}>
              P.S. - Told you I'm not garang! 😊 And yes, that powerbank still reminds me of you every time I use it. 
              Thank you for all the thoughtful gifts - from powerbank to wallet, you always know how to make me smile! 🤍
            </p>
          </div>
          
          <div className={styles.decorations}>
            <HeartIcon size={24} color="#FFB6D9" filled />
            <MoonIcon size={24} color="#FFD700" />
            <StarIcon size={24} color="#FFA500" filled />
          </div>
        </div>
      </div>
    </section>
  )
}