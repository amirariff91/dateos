import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Error.module.css'
import { MoonIcon, StarIcon } from '../utils/icons'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Lost in Space | DateOS</title>
        <meta name="description" content="Oops! This page has drifted into space. Let's navigate back to our love story." />
      </Head>
      
      <Layout>
        <div className={styles.errorPage}>
          <div className={styles.starField}>
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className={styles.star}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className={styles.content}>
            <div className={styles.moonIcon}>
              <MoonIcon size={120} color="#FFB6D9" />
            </div>
            
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorTitle}>Lost in the Cosmos</h2>
            
            <p className={styles.errorMessage}>
              Looks like this page has drifted off into space! 
              Even Sailor Moon can't find it among the stars.
            </p>
            
            <div className={styles.actions}>
              <Link href="/" className={`btn btn-primary ${styles.homeButton}`}>
                <StarIcon size={20} />
                Return to Earth
              </Link>
            </div>
            
            <div className={styles.floatingElements}>
              <div className={styles.planet}></div>
              <div className={styles.comet}></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}