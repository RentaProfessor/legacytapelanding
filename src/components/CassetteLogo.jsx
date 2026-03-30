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
      {/* Outer shell */}
      <rect x="0" y="0" width="60" height="42" rx="4" fill="currentColor" />
      <rect x="1" y="1" width="58" height="40" rx="3.5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.08" />

      {/* Cassette window */}
      <rect x="8" y="5" width="44" height="22" rx="3" fill="#111" />
      <rect x="9" y="6" width="42" height="20" rx="2.5" fill="none" stroke="white" strokeWidth="0.3" opacity="0.1" />

      {/* Vintage color stripes inside window */}
      <rect x="9" y="22" width="42" height="1.5" fill="#C8804A" opacity="0.5" />
      <rect x="9" y="20.5" width="42" height="1.5" fill="#D4956A" opacity="0.35" />
      <rect x="9" y="23.5" width="42" height="1" fill="#B85C4E" opacity="0.3" />

      {/* Left reel */}
      <g style={reelAnimation} transform-origin="22 14">
        <circle cx="22" cy="14" r="6.5" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
        <circle cx="22" cy="14" r="5" fill="none" stroke="#C8804A" strokeWidth="0.8" opacity="0.5" />
        {/* Spokes */}
        <line x1="22" y1="8" x2="22" y2="10.5" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        <line x1="22" y1="17.5" x2="22" y2="20" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        <line x1="16.5" y1="14" x2="19" y2="14" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        <line x1="25" y1="14" x2="27.5" y2="14" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        {/* Hub */}
        <circle cx="22" cy="14" r="2.2" fill="#222" stroke="#C8804A" strokeWidth="0.8" />
        <circle cx="22" cy="14" r="0.8" fill="#C8804A" />
      </g>

      {/* Right reel */}
      <g style={reelAnimationReverse} transform-origin="38 14">
        <circle cx="38" cy="14" r="6.5" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
        <circle cx="38" cy="14" r="5" fill="none" stroke="#C8804A" strokeWidth="0.8" opacity="0.5" />
        {/* Spokes */}
        <line x1="38" y1="8" x2="38" y2="10.5" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        <line x1="38" y1="17.5" x2="38" y2="20" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        <line x1="32.5" y1="14" x2="35" y2="14" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        <line x1="41" y1="14" x2="43.5" y2="14" stroke="#C8804A" strokeWidth="0.6" opacity="0.7" />
        {/* Hub */}
        <circle cx="38" cy="14" r="2.2" fill="#222" stroke="#C8804A" strokeWidth="0.8" />
        <circle cx="38" cy="14" r="0.8" fill="#C8804A" />
      </g>

      {/* Tape path between reels */}
      <line x1="28.5" y1="14" x2="31.5" y2="14" stroke="#C8804A" strokeWidth="0.5" opacity="0.4" />

      {/* Label area */}
      <rect x="10" y="29" width="40" height="8" rx="1.5" fill="#C8804A" opacity="0.15" />
      <text x="30" y="35" textAnchor="middle" fill="#C8804A" opacity="0.5" fontSize="3.5" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.1em">
        LEGACY TAPE
      </text>

      {/* Screw holes */}
      <circle cx="5" cy="37" r="1.2" fill="#222" stroke="#333" strokeWidth="0.4" />
      <circle cx="55" cy="37" r="1.2" fill="#222" stroke="#333" strokeWidth="0.4" />

      {/* Top edge detail */}
      <rect x="24" y="1.5" width="12" height="2" rx="1" fill="white" opacity="0.04" />
    </svg>
  )
}
