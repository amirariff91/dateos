import { useEffect, useRef } from 'react'

export default function SparkleEffect({ children, density = 5 }) {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const createSparkle = () => {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle-particle'
      sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #FFD700 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: sparkle-animation ${2 + Math.random() * 3}s ease-in-out;
      `
      
      container.appendChild(sparkle)
      
      sparkle.addEventListener('animationend', () => {
        sparkle.remove()
      })
    }
    
    // Create initial sparkles
    for (let i = 0; i < density; i++) {
      setTimeout(createSparkle, i * 200)
    }
    
    // Continue creating sparkles
    const interval = setInterval(createSparkle, 1000)
    
    return () => clearInterval(interval)
  }, [density])
  
  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {children}
      <style jsx>{`
        @keyframes sparkle-animation {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}