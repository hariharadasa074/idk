import React, { useState, useEffect } from 'react';

interface AvatarContainerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  className = '',
  size = 'lg',
  showBadge = false
}) => {
  const [customImage, setCustomImage] = useState<string | null>(() => {
    return localStorage.getItem('suman_portfolio_avatar');
  });

  // Sync avatar updates across components in the same tab
  useEffect(() => {
    const handleAvatarUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      setCustomImage(customEvent.detail ?? localStorage.getItem('suman_portfolio_avatar'));
    };

    window.addEventListener('suman_avatar_updated', handleAvatarUpdate);
    return () => {
      window.removeEventListener('suman_avatar_updated', handleAvatarUpdate);
    };
  }, []);

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-36 h-36',
    lg: 'w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84',
    xl: 'w-80 h-80 sm:w-96 sm:h-96'
  };

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Outer Glow & Technical Ring */}
      <div className="absolute -inset-2.5 rounded-full border border-blue-200/60 dark:border-blue-900/40 pointer-events-none" />
      <div className="absolute -inset-1 rounded-full border border-slate-200/80 pointer-events-none" />

      {/* Main Avatar Frame */}
      <div
        className={`${sizeClasses[size]} relative rounded-full overflow-hidden bg-slate-50 shadow-xl border-4 border-white transition-all duration-300 group-hover:shadow-2xl`}
      >
        {customImage ? (
          <img
            src={customImage}
            alt="Suman Das - Mechanical Engineering Profile"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          /* High-Fidelity Vector Portrait rendered strictly to match Suman's formal photo */
          <div className="w-full h-full relative flex items-center justify-center bg-[#F8FAFC]">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Suman Das Portrait"
            >
              <defs>
                {/* Background light gradient matching clean studio headshot */}
                <radialGradient id="sumanBg" cx="50%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="70%" stopColor="#F1F5F9" />
                  <stop offset="100%" stopColor="#E2E8F0" />
                </radialGradient>

                {/* Suman Skin Base */}
                <linearGradient id="sumanSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFAC84" />
                  <stop offset="100%" stopColor="#C48E66" />
                </linearGradient>

                {/* Skin Shadow */}
                <linearGradient id="sumanNeckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#B37C56" />
                  <stop offset="100%" stopColor="#9C643E" />
                </linearGradient>

                {/* Hair Gradient */}
                <linearGradient id="sumanHair" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="60%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* Suman Tie Pattern: Navy blue with diagonal maroon and white stripes */}
                <pattern id="sumanTiePattern" width="30" height="30" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                  <rect width="30" height="30" fill="#172554" />
                  <rect x="0" y="0" width="12" height="30" fill="#881337" />
                  <line x1="12" y1="0" x2="12" y2="30" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="0" y1="0" x2="0" y2="30" stroke="#FFFFFF" strokeWidth="1.5" />
                </pattern>
              </defs>

              {/* Background */}
              <rect width="400" height="400" fill="url(#sumanBg)" />

              {/* Crisp White Collared Dress Shirt Shoulders */}
              <path
                d="M 50 395 Q 110 320 190 318 L 210 318 Q 290 320 350 395 L 360 400 L 40 400 Z"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />

              {/* Shirt Shadow under Collar */}
              <path
                d="M 120 330 Q 200 365 280 330 L 285 350 Q 200 380 115 350 Z"
                fill="#CBD5E1"
                opacity="0.3"
              />

              {/* Neck & Shading */}
              <rect x="175" y="235" width="50" height="85" rx="8" fill="url(#sumanNeckShadow)" />

              {/* Adam's Apple subtle contour */}
              <path d="M 194 276 Q 200 282 206 276" stroke="#87532F" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Formal Tie: Navy with Maroon and White Diagonal Stripes */}
              {/* Tie Knot */}
              <path
                d="M 183 318 L 217 318 L 210 348 L 190 348 Z"
                fill="#172554"
                stroke="#0F172A"
                strokeWidth="1"
              />
              <path
                d="M 183 318 L 217 318 L 210 348 L 190 348 Z"
                fill="url(#sumanTiePattern)"
              />

              {/* Tie Body extending down */}
              <path
                d="M 190 348 L 210 348 L 222 400 L 178 400 Z"
                fill="#172554"
              />
              <path
                d="M 190 348 L 210 348 L 222 400 L 178 400 Z"
                fill="url(#sumanTiePattern)"
              />

              {/* Shirt Collar Leaves (Left & Right) */}
              {/* Left Collar */}
              <path
                d="M 152 316 L 202 344 L 180 316 Z"
                fill="#FFFFFF"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />
              {/* Right Collar */}
              <path
                d="M 248 316 L 198 344 L 220 316 Z"
                fill="#FFFFFF"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />

              {/* Ears */}
              <ellipse cx="140" cy="195" rx="13" ry="21" fill="#CA956E" />
              <ellipse cx="260" cy="195" rx="13" ry="21" fill="#BF8962" />
              <path d="M 141 188 Q 136 195 141 203" stroke="#9C643E" strokeWidth="2" fill="none" />
              <path d="M 259 188 Q 264 195 259 203" stroke="#9C643E" strokeWidth="2" fill="none" />

              {/* Face Shape */}
              <path
                d="M 145 160 C 145 120 156 115 200 115 C 244 115 255 120 255 160 C 255 224 242 264 200 268 C 158 264 145 224 145 160 Z"
                fill="url(#sumanSkin)"
              />

              {/* Hair Base */}
              <path
                d="M 141 155 C 137 110 152 70 200 70 C 248 70 263 110 259 155 C 252 135 246 122 228 116 C 200 108 162 120 141 155 Z"
                fill="url(#sumanHair)"
              />

              {/* Hair Texture & Clean Side Part */}
              <path
                d="M 150 118 Q 185 88 238 98 Q 252 115 255 138 Q 230 110 180 112 Q 155 118 150 118 Z"
                fill="#334155"
                opacity="0.7"
              />

              {/* Eyebrows */}
              <path
                d="M 158 162 Q 174 156 189 161"
                stroke="#0F172A"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 211 161 Q 226 156 242 162"
                stroke="#0F172A"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Eyes */}
              <ellipse cx="174" cy="176" rx="9.5" ry="6.5" fill="#FFFFFF" />
              <circle cx="174.5" cy="176" r="4.5" fill="#0F172A" />
              <circle cx="176" cy="174.5" r="1.5" fill="#FFFFFF" />

              <ellipse cx="226" cy="176" rx="9.5" ry="6.5" fill="#FFFFFF" />
              <circle cx="225.5" cy="176" r="4.5" fill="#0F172A" />
              <circle cx="227" cy="174.5" r="1.5" fill="#FFFFFF" />

              {/* Eyelids */}
              <path d="M 164 174 Q 174 169 184 173" stroke="#1E293B" strokeWidth="2.2" fill="none" />
              <path d="M 216 173 Q 226 169 236 174" stroke="#1E293B" strokeWidth="2.2" fill="none" />

              {/* Nose */}
              <path
                d="M 200 174 L 197 205 Q 200 212 205 207"
                stroke="#9C643E"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <ellipse cx="192" cy="207" rx="3.5" ry="1.8" fill="#9C643E" opacity="0.6" />
              <ellipse cx="208" cy="207" rx="3.5" ry="1.8" fill="#9C643E" opacity="0.6" />

              {/* Suman Das Signature Trimmed Mustache */}
              <path
                d="M 180 221 C 187 217 194 218 200 220 C 206 218 213 217 220 221 C 218 226 210 228 200 227 C 190 228 182 226 180 221 Z"
                fill="#0F172A"
              />

              {/* Subtle Natural Lip & Smile */}
              <path
                d="M 182 232 Q 200 240 218 232"
                stroke="#944E38"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* Chin Contour */}
              <path
                d="M 194 256 Q 200 259 206 256"
                stroke="#B37C56"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Floating Status Badge */}
      {showBadge && (
        <div className="absolute -bottom-2 -left-2 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-2 select-none">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-900 leading-tight">B.Tech Mechanical</p>
            <p className="text-[10px] text-slate-500">2024 – 2027</p>
          </div>
        </div>
      )}
    </div>
  );
};
