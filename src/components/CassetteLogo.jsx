export default function CassetteLogo({ size = 32, className = '', animated = false }) {
  const reelAnimation = animated
    ? { animation: 'spin 3s linear infinite' }
    : {}
  const reelAnimationReverse = animated
    ? { animation: 'spin 3s linear infinite reverse' }
    : {}

  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 60 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer shell — light warm taupe */}
      <rect x="0" y="0" width="60" height="42" rx="4" fill="#A8998A" />
      <rect x="1" y="1" width="58" height="40" rx="3.5" fill="none" stroke="white" strokeWidth="0.6" opacity="0.25" />

      {/* Cassette window */}
      <rect x="8" y="5" width="44" height="22" rx="3" fill="#3A3330" />
      <rect x="9" y="6" width="42" height="20" rx="2.5" fill="none" stroke="#E8A55A" strokeWidth="0.4" opacity="0.3" />

      {/* Vintage color stripes */}
      <rect x="9" y="19.5" width="42" height="2.2" fill="#F0B865" opacity="0.7" />
      <rect x="9" y="21.7" width="42" height="1.8" fill="#E8824A" opacity="0.6" />
      <rect x="9" y="23.5" width="42" height="1.2" fill="#D9604A" opacity="0.5" />

      {/* Left reel */}
      <g style={reelAnimation} transform-origin="22 13">
        <circle cx="22" cy="13" r="6.5" fill="#4A4240" stroke="#6B5F58" strokeWidth="0.5" />
        <circle cx="22" cy="13" r="5" fill="none" stroke="#F0B865" strokeWidth="0.9" opacity="0.7" />
        {/* Spokes */}
        <line x1="22" y1="7" x2="22" y2="9.5" stroke="#F0B865" strokeWidth="0.8" />
        <line x1="22" y1="16.5" x2="22" y2="19" stroke="#F0B865" strokeWidth="0.8" />
        <line x1="16.5" y1="13" x2="19" y2="13" stroke="#F0B865" strokeWidth="0.8" />
        <line x1="25" y1="13" x2="27.5" y2="13" stroke="#F0B865" strokeWidth="0.8" />
        {/* Hub */}
        <circle cx="22" cy="13" r="2.2" fill="#5A504A" stroke="#F0B865" strokeWidth="1" />
        <circle cx="22" cy="13" r="0.8" fill="#F0B865" />
      </g>

      {/* Right reel */}
      <g style={reelAnimationReverse} transform-origin="38 13">
        <circle cx="38" cy="13" r="6.5" fill="#4A4240" stroke="#6B5F58" strokeWidth="0.5" />
        <circle cx="38" cy="13" r="5" fill="none" stroke="#F0B865" strokeWidth="0.9" opacity="0.7" />
        {/* Spokes */}
        <line x1="38" y1="7" x2="38" y2="9.5" stroke="#F0B865" strokeWidth="0.8" />
        <line x1="38" y1="16.5" x2="38" y2="19" stroke="#F0B865" strokeWidth="0.8" />
        <line x1="32.5" y1="13" x2="35" y2="13" stroke="#F0B865" strokeWidth="0.8" />
        <line x1="41" y1="13" x2="43.5" y2="13" stroke="#F0B865" strokeWidth="0.8" />
        {/* Hub */}
        <circle cx="38" cy="13" r="2.2" fill="#5A504A" stroke="#F0B865" strokeWidth="1" />
        <circle cx="38" cy="13" r="0.8" fill="#F0B865" />
      </g>

      {/* Tape path between reels */}
      <line x1="28.5" y1="13" x2="31.5" y2="13" stroke="#F0B865" strokeWidth="0.6" opacity="0.6" />

      {/* Label area */}
      <rect x="10" y="29" width="40" height="8" rx="1.5" fill="#F0B865" opacity="0.25" />
      <text x="30" y="34.8" textAnchor="middle" fill="#5A4030" fontSize="3.8" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.12em">
        LEGACY TAPE
      </text>

      {/* Screw holes */}
      <circle cx="5" cy="37" r="1.2" fill="#8A7B6E" stroke="#9E8E80" strokeWidth="0.4" />
      <circle cx="55" cy="37" r="1.2" fill="#8A7B6E" stroke="#9E8E80" strokeWidth="0.4" />

      {/* Top edge highlight */}
      <rect x="20" y="1.5" width="20" height="1.5" rx="0.75" fill="white" opacity="0.15" />
    </svg>
  )
}
