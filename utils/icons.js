export const MoonIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="17" cy="9" r="1" fill={color} opacity="0.6"/>
    <circle cx="14" cy="15" r="0.5" fill={color} opacity="0.4"/>
    <circle cx="18" cy="13" r="0.5" fill={color} opacity="0.4"/>
  </svg>
);

export const MercuryIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="5" stroke={color} strokeWidth="2"/>
    <path d="M12 13V18M9 18H15M12 18V21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const VenusIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="9" r="6" stroke={color} strokeWidth="2"/>
    <path d="M12 15V21M9 18H15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MarsIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="14" r="6" stroke={color} strokeWidth="2"/>
    <path d="M15.5 8.5L20 4M20 4H16M20 4V8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const JupiterIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V21M7 7H17C17 7 17 12 12 12C7 12 7 7 7 7Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon = ({ size = 24, color = "currentColor", filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HeartIcon = ({ size = 24, color = "currentColor", filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={color} strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2"/>
  </svg>
);

export const SparkleIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill={color}/>
    <path d="M5 5L5.5 6.5L7 7L5.5 7.5L5 9L4.5 7.5L3 7L4.5 6.5L5 5Z" fill={color} opacity="0.6"/>
    <path d="M19 15L19.5 16.5L21 17L19.5 17.5L19 19L18.5 17.5L17 17L18.5 16.5L19 15Z" fill={color} opacity="0.6"/>
  </svg>
);

export const CrystalStarBrooch = ({ size = 48, color = "#FFD700" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB6D9" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FF6BB3" />
      </linearGradient>
    </defs>
    <path d="M50 5L61.9 39H96.9L69.5 59.1L81.4 93.1L50 73L18.6 93.1L30.5 59.1L3.1 39H38.1L50 5Z" fill="url(#crystalGrad)" stroke={color} strokeWidth="2"/>
    <circle cx="50" cy="50" r="20" fill="#FFB6D9" stroke={color} strokeWidth="2"/>
    <path d="M50 35L54 45H64L56 51L60 61L50 55L40 61L44 51L36 45H46L50 35Z" fill={color}/>
    <circle cx="50" cy="50" r="15" fill="none" stroke="#FFE0EC" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export const TransformationBrooch = ({ size = 48, primaryColor = "#FFB6D9", accentColor = "#FFD700" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="broochGrad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
        <stop offset="100%" stopColor={primaryColor} />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#broochGrad)" stroke={accentColor} strokeWidth="3"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.6"/>
    <path d="M50 15C50 15 45 25 35 30C25 35 15 35 15 35C15 35 25 35 30 45C35 55 35 65 35 65C35 65 35 55 45 50C55 45 65 45 65 45C65 45 55 45 50 35C45 25 50 15 50 15Z" fill={accentColor}/>
    <circle cx="30" cy="30" r="5" fill="#FF6BB3"/>
    <circle cx="70" cy="30" r="5" fill="#86CEEB"/>
    <circle cx="70" cy="70" r="5" fill="#90EE90"/>
    <circle cx="30" cy="70" r="5" fill="#FFA500"/>
  </svg>
);

export const CosmicHeartCompact = ({ size = 48, color = "#FF6BB3" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE0EC" />
        <stop offset="100%" stopColor="#FF6BB3" />
      </linearGradient>
    </defs>
    <path d="M50 25C50 25 30 5 15 20C0 35 15 55 50 85C85 55 100 35 85 20C70 5 50 25 50 25Z" fill="url(#heartGrad)" stroke={color} strokeWidth="3"/>
    <path d="M50 15L52 10L54 15L59 17L54 19L52 24L50 19L45 17L50 15Z" fill="#FFD700"/>
    <circle cx="50" cy="45" r="15" fill="#FFB6D9" stroke="#FFD700" strokeWidth="2"/>
    <path d="M50 38L52 43H57L53 46L55 51L50 48L45 51L47 46L43 43H48L50 38Z" fill="#FFD700"/>
  </svg>
);

export const MoonStick = ({ size = 48, color = "#FFD700" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="48" y="30" width="4" height="60" fill={color} rx="2"/>
    <circle cx="50" cy="20" r="15" fill="none" stroke={color} strokeWidth="3"/>
    <path d="M50 10C50 10 48 15 43 17C38 19 33 19 33 19C33 19 38 19 40 24C42 29 42 34 42 34C42 34 42 29 47 27C52 25 57 25 57 25C57 25 52 25 50 20C48 15 50 10 50 10Z" fill={color}/>
    <circle cx="50" cy="20" r="3" fill="#FF6BB3"/>
    <path d="M45 85L50 90L55 85" stroke={color} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const LunaIcon = ({ size = 32, color = "#1A2541" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="70" rx="25" ry="20" fill={color}/>
    <ellipse cx="35" cy="50" rx="15" ry="18" fill={color}/>
    <ellipse cx="65" cy="50" rx="15" ry="18" fill={color}/>
    <path d="M50 55C50 55 45 60 40 60C35 60 30 55 30 55" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M50 55C50 55 55 60 60 60C65 60 70 55 70 55" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M50 40C45 40 40 35 40 30C40 25 50 15 50 15C50 15 60 25 60 30C60 35 55 40 50 40Z" fill="#FFD700"/>
    <circle cx="40" cy="45" r="3" fill="white"/>
    <circle cx="60" cy="45" r="3" fill="white"/>
    <circle cx="41" cy="46" r="2" fill={color}/>
    <circle cx="61" cy="46" r="2" fill={color}/>
    <path d="M45 55C45 55 47 58 50 58C53 58 55 55 55 55" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

export const ArtemisIcon = ({ size = 32, color = "#FFFFFF" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="70" rx="25" ry="20" fill={color}/>
    <ellipse cx="35" cy="50" rx="15" ry="18" fill={color}/>
    <ellipse cx="65" cy="50" rx="15" ry="18" fill={color}/>
    <path d="M50 55C50 55 45 60 40 60C35 60 30 55 30 55" stroke="#1A2541" strokeWidth="2" fill="none"/>
    <path d="M50 55C50 55 55 60 60 60C65 60 70 55 70 55" stroke="#1A2541" strokeWidth="2" fill="none"/>
    <path d="M50 40C47 40 45 38 45 35C45 32 50 25 50 25C50 25 55 32 55 35C55 38 53 40 50 40Z" fill="#FFD700"/>
    <circle cx="40" cy="45" r="3" fill="#86CEEB"/>
    <circle cx="60" cy="45" r="3" fill="#86CEEB"/>
    <circle cx="41" cy="46" r="2" fill="#1A2541"/>
    <circle cx="61" cy="46" r="2" fill="#1A2541"/>
    <path d="M45 55C45 55 47 58 50 58C53 58 55 55 55 55" stroke="#1A2541" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);