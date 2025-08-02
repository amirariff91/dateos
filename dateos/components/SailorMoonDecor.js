export default function SailorMoonDecor() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Moon */}
      <circle cx="100" cy="100" r="80" fill="#FFE0EC"/>
      <path d="M100 20 C60 20, 20 60, 20 100 C20 140, 60 180, 100 180 C80 160, 60 130, 60 100 C60 70, 80 40, 100 20Z" fill="#FFB6D9"/>
      
      {/* Stars */}
      <path d="M40 40 L45 50 L55 50 L47 57 L50 67 L40 60 L30 67 L33 57 L25 50 L35 50 Z" fill="#FFD700"/>
      <path d="M160 40 L165 50 L175 50 L167 57 L170 67 L160 60 L150 67 L153 57 L145 50 L155 50 Z" fill="#FFD700"/>
      <path d="M100 150 L105 160 L115 160 L107 167 L110 177 L100 170 L90 177 L93 167 L85 160 L95 160 Z" fill="#FFD700"/>
      
      {/* Heart Crystal */}
      <g transform="translate(100, 100)">
        <path d="M0 -20 C-11 -32, -32 -32, -32 -20 C-32 -8, -16 8, 0 20 C16 8, 32 -8, 32 -20 C32 -32, 11 -32, 0 -20Z" 
              fill="#FF91C7" 
              stroke="#FFD700" 
              strokeWidth="2"/>
        <circle cx="0" cy="-10" r="8" fill="#FFE0EC" opacity="0.8"/>
      </g>
    </svg>
  )
}

export function MoonSilhouette({ className }) {
  return (
    <svg className={className} width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sailor Moon Silhouette */}
      <path d="M150 50 C120 50, 90 70, 90 100 L90 150 C90 180, 100 200, 110 210 L100 300 C100 320, 120 340, 150 340 C180 340, 200 320, 200 300 L190 210 C200 200, 210 180, 210 150 L210 100 C210 70, 180 50, 150 50Z" 
            fill="url(#moonGradient)" 
            opacity="0.1"/>
      
      {/* Hair buns */}
      <circle cx="110" cy="60" r="20" fill="url(#moonGradient)" opacity="0.1"/>
      <circle cx="190" cy="60" r="20" fill="url(#moonGradient)" opacity="0.1"/>
      
      {/* Skirt */}
      <path d="M110 210 L90 250 L100 300 L200 300 L210 250 L190 210 Z" 
            fill="url(#moonGradient)" 
            opacity="0.1"/>
      
      <defs>
        <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB6D9" />
          <stop offset="100%" stopColor="#FF91C7" />
        </linearGradient>
      </defs>
    </svg>
  )
}