import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Plans from '../components/Plans'
import Picker from '../components/Picker'
import Wishlist from '../components/Wishlist'
import Memories from '../components/Memories'
import LoveNote from '../components/LoveNote'
import { FullPageSkeleton } from '../components/LoadingSkeleton'
import { initUltraEffects } from '../utils/animations'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulate minimum loading time for better UX
    const loadData = async () => {
      const startTime = Date.now()
      
      try {
        const res = await fetch('/data.json')
        const jsonData = await res.json()
        
        // Ensure minimum 800ms loading time
        const elapsed = Date.now() - startTime
        const delay = Math.max(0, 800 - elapsed)
        
        await new Promise(resolve => setTimeout(resolve, delay))
        setData(jsonData)
      } catch (error) {
        console.error('Failed to load data:', error)
      }
    }
    
    loadData()
  }, [])
  
  useEffect(() => {
    // Initialize ultra effects after data loads
    if (data) {
      setTimeout(() => {
        initUltraEffects()
      }, 100)
    }
  }, [data])

  if (!data) {
    return (
      <>
        <Head>
          <title>DateOS - Loading...</title>
          <meta name="description" content="Loading magical moments..." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <FullPageSkeleton />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>DateOS - Amir & Ayunni's Magical Love Story</title>
        <meta name="description" content="From Bumble to WhatsApp, from long texts to green flags - our Sailor Moon themed journey of love. A special dating website celebrating every magical moment together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dateos.love/" />
        <meta property="og:title" content="DateOS - Amir & Ayunni's Magical Love Story" />
        <meta property="og:description" content="From Bumble to WhatsApp, from long texts to green flags - our Sailor Moon themed journey of love." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dateos.love/" />
        <meta property="twitter:title" content="DateOS - Amir & Ayunni's Magical Love Story" />
        <meta property="twitter:description" content="From Bumble to WhatsApp, from long texts to green flags - our Sailor Moon themed journey of love." />
        <meta property="twitter:image" content="/og-image.png" />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="love story, dating, Sailor Moon, romantic, couples, relationship timeline" />
        <meta name="author" content="Amir & Ayunni" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dateos.love/" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DateOS",
              "description": "Amir & Ayunni's Magical Love Story",
              "url": "https://dateos.love/",
              "author": {
                "@type": "Person",
                "name": "Amir"
              },
              "dateCreated": "2025-08-03",
              "inLanguage": "en-US"
            })
          }}
        />
      </Head>
      
      <Layout>
        <Hero nextDate={data.nextDate} />
        <Picker pickerOptions={data.pickerOptions} />
        <Wishlist wishlistData={data.wishlist} />
        <Memories memoriesData={data.memories} />
        <LoveNote />
      </Layout>
    </>
  )
}