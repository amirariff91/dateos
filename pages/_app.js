import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/animations.css'

function DateOS({ Component, pageProps }) {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('Service Worker registration successful:', registration.scope);
          },
          (error) => {
            console.log('Service Worker registration failed:', error);
          }
        );
      });
    }
  }, []);
  
  return <Component {...pageProps} />
}

export default DateOS