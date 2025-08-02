import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Plans from '../components/Plans'
import Picker from '../components/Picker'
import Wishlist from '../components/Wishlist'
import Memories from '../components/Memories'
import LoveNote from '../components/LoveNote'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  if (!data) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.5rem',
        color: '#FFB6D9'
      }}>
        Loading magical moments... ✨
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>DateOS - Amir & Ayunni's Magical Love Story</title>
        <meta name="description" content="From Bumble to WhatsApp, from long texts to green flags - our Sailor Moon themed journey of love" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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