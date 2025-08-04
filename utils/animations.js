// Ultra UI/UX Animation Utilities

// Ripple Effect on Click
export function addRippleEffect(element) {
  element.classList.add('ripple')
  
  element.addEventListener('click', function(e) {
    const ripple = document.createElement('span')
    ripple.classList.add('ripple-effect')
    
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    
    this.appendChild(ripple)
    
    setTimeout(() => ripple.remove(), 600)
  })
}

// Scroll Reveal Animation
export function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal')
  
  const revealOnScroll = () => {
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed')
      }
    })
  }
  
  window.addEventListener('scroll', revealOnScroll)
  revealOnScroll() // Check on init
}

// Parallax Effect
export function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-layer')
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    
    parallaxElements.forEach((element, index) => {
      const speed = element.dataset.speed || 0.5
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  })
}

// 3D Card Tilt Effect
export function add3DTilt(card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  })
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
  })
}

// Sparkle Cursor Trail
export function initSparkleCursor() {
  const sparkleContainer = document.createElement('div')
  sparkleContainer.className = 'sparkle-cursor-container'
  sparkleContainer.style.position = 'fixed'
  sparkleContainer.style.pointerEvents = 'none'
  sparkleContainer.style.zIndex = '9999'
  sparkleContainer.style.top = '0'
  sparkleContainer.style.left = '0'
  sparkleContainer.style.width = '100%'
  sparkleContainer.style.height = '100%'
  document.body.appendChild(sparkleContainer)
  
  let mouseX = 0
  let mouseY = 0
  let sparkleTimer
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    
    clearTimeout(sparkleTimer)
    sparkleTimer = setTimeout(() => {
      createSparkle(mouseX, mouseY)
    }, 50)
  })
  
  function createSparkle(x, y) {
    const sparkle = document.createElement('div')
    sparkle.className = 'sparkle'
    sparkle.style.left = x + 'px'
    sparkle.style.top = y + 'px'
    sparkle.style.setProperty('--sparkle-delay', Math.random() * 0.5 + 's')
    
    sparkleContainer.appendChild(sparkle)
    
    setTimeout(() => sparkle.remove(), 3000)
  }
}

// Stagger Animation for Lists
export function staggerAnimation(container, itemSelector) {
  const items = container.querySelectorAll(itemSelector)
  
  items.forEach((item, index) => {
    item.classList.add('stagger-item')
    item.style.setProperty('--stagger-delay', index)
  })
}

// Count Up Animation
export function countUp(element, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    element.textContent = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

// Initialize All Effects
export function initUltraEffects() {
  // Add ripple to all buttons
  document.querySelectorAll('.btn, button').forEach(btn => {
    addRippleEffect(btn)
  })
  
  // Initialize scroll reveals
  initScrollReveal()
  
  // Initialize parallax
  if (window.innerWidth > 768) {
    initParallax()
  }
  
  // Add 3D tilt to cards
  document.querySelectorAll('.card, .tilt-card').forEach(card => {
    add3DTilt(card)
  })
  
  // Initialize sparkle cursor on desktop
  if (window.innerWidth > 1024 && !('ontouchstart' in window)) {
    initSparkleCursor()
  }
  
  // Stagger animations
  document.querySelectorAll('[data-stagger]').forEach(container => {
    staggerAnimation(container, '[data-stagger-item]')
  })
  
  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}