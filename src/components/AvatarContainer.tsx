import React, { useState, useRef } from 'react';
import { Camera, RefreshCw, CheckCircle2 } from 'lucide-react';

interface AvatarContainerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  className = '',
  size = 'lg',
  showBadge = true
}) => {
  const [customImage, setCustomImage] = useState<string | null>(() => {
    return localStorage.getItem('suman_portfolio_avatar');
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomImage(result);
        localStorage.setItem('suman_portfolio_avatar', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    localStorage.removeItem('suman_portfolio_avatar');
  };

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-36 h-36',
    lg: 'w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84',
    xl: 'w-80 h-80 sm:w-96 sm:h-96'
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Clean Subtle Ring */}
      <div className="absolute -inset-2 rounded-full border border-slate-200/70 pointer-events-none" />

      {/* Main Avatar Container */}
      <div
        className={`${sizeClasses[size]} relative rounded-full overflow-hidden bg-gradient-to-b from-blue-50 via-slate-50 to-slate-100 shadow-xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]`}
      >
        {customImage ? (
          <img
            src={customImage}
            alt="Suman Das - Mechanical Engineering Student"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          /* High-detail SVG Portrait of Suman Das: Sharp, warm, professional Indian Mechanical Engineer */
          <div className="w-full h-full relative flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Suman Das Portrait"
            >
              <defs>
                {/* Background radial gradient */}
                <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#EFF6FF" />
                  <stop offset="60%" stopColor="#DBEAFE" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </radialGradient>

                {/* Skin tone gradient */}
                <linearGradient id="skinBase" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DEB18E" />
                  <stop offset="100%" stopColor="#C9976F" />
                </linearGradient>

                {/* Skin Shadow */}
                <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C28B62" />
                  <stop offset="100%" stopColor="#B37C55" />
                </linearGradient>

                {/* Hair gradient */}
                <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="70%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* Shirt gradient */}
                <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>

                <linearGradient id="collarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="100%" stopColor="#E2E8F0" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="400" height="400" fill="url(#bgGrad)" />

              {/* Engineering Drafting Grid Lines inside avatar */}
              <path
                d="M 50 0 V 400 M 100 0 V 400 M 150 0 V 400 M 200 0 V 400 M 250 0 V 400 M 300 0 V 400 M 350 0 V 400
                   M 0 50 H 400 M 0 100 H 400 M 0 150 H 400 M 0 200 H 400 M 0 250 H 400 M 0 300 H 400 M 0 350 H 400"
                stroke="#2563eb"
                strokeOpacity="0.08"
                strokeWidth="1"
              />

              {/* Shoulders & Torso with Crisp Semi-Formal Attire */}
              <path
                d="M 70 380 Q 120 310 200 308 Q 280 310 330 380 L 340 400 L 60 400 Z"
                fill="url(#shirtGrad)"
              />
              {/* Shirt inner collar / undershirt */}
              <path
                d="M 175 308 L 200 365 L 225 308 Z"
                fill="url(#collarGrad)"
              />
              {/* Collar Left */}
              <path
                d="M 148 308 L 195 345 L 182 308 Z"
                fill="#EFF6FF"
                stroke="#BFDBFE"
                strokeWidth="1"
              />
              {/* Collar Right */}
              <path
                d="M 252 308 L 205 345 L 218 308 Z"
                fill="#F8FAFC"
                stroke="#BFDBFE"
                strokeWidth="1"
              />
              {/* Placket line */}
              <line x1="200" y1="365" x2="200" y2="400" stroke="#1E40AF" strokeWidth="2" strokeDasharray="3 3" />

              {/* Neck */}
              <rect x="178" y="240" width="44" height="75" rx="8" fill="url(#skinShadow)" />
              {/* Adam's apple subtle shadow */}
              <path d="M 194 275 Q 200 280 206 275" stroke="#9A6945" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Ears */}
              <ellipse cx="140" cy="195" rx="14" ry="22" fill="#D3A27D" />
              <ellipse cx="260" cy="195" rx="14" ry="22" fill="#C9976F" />
              <path d="M 142 188 Q 136 195 142 204" stroke="#A87550" strokeWidth="2" fill="none" />
              <path d="M 258 188 Q 264 195 258 204" stroke="#A87550" strokeWidth="2" fill="none" />

              {/* Face Shape */}
              <path
                d="M 144 165 C 144 125 155 120 200 120 C 245 120 256 125 256 165 C 256 220 242 260 200 264 C 158 260 144 220 144 165 Z"
                fill="url(#skinBase)"
              />

              {/* Hair Base & Clean Professional Cut */}
              <path
                d="M 140 160 C 136 120 150 78 200 78 C 250 78 264 120 260 160 C 252 140 248 130 230 125 C 205 118 165 128 140 160 Z"
                fill="url(#hairGrad)"
              />
              {/* Hair Texture & Modern Side Parting */}
              <path
                d="M 152 125 Q 185 96 235 106 Q 248 120 254 140 Q 230 115 180 116 Q 155 124 152 125 Z"
                fill="#334155"
                opacity="0.6"
              />

              {/* Eyebrows */}
              <path
                d="M 160 166 Q 175 160 188 165"
                stroke="#1E293B"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 212 165 Q 225 160 240 166"
                stroke="#1E293B"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Eyes */}
              <ellipse cx="174" cy="180" rx="9" ry="6" fill="#FFFFFF" />
              <circle cx="175" cy="180" r="4.2" fill="#1E293B" />
              <circle cx="176.5" cy="178.5" r="1.5" fill="#FFFFFF" />

              <ellipse cx="226" cy="180" rx="9" ry="6" fill="#FFFFFF" />
              <circle cx="225" cy="180" r="4.2" fill="#1E293B" />
              <circle cx="226.5" cy="178.5" r="1.5" fill="#FFFFFF" />

              {/* Upper Eyelids */}
              <path d="M 165 178 Q 174 173 184 177" stroke="#334155" strokeWidth="2" fill="none" />
              <path d="M 216 177 Q 226 173 235 178" stroke="#334155" strokeWidth="2" fill="none" />

              {/* Nose */}
              <path
                d="M 200 178 L 197 206 Q 200 213 205 208"
                stroke="#9F6F4C"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <ellipse cx="193" cy="207" rx="3" ry="1.5" fill="#9F6F4C" opacity="0.6" />
              <ellipse cx="207" cy="207" rx="3" ry="1.5" fill="#9F6F4C" opacity="0.6" />

              {/* Mouth & Confident Warm Smile */}
              <path
                d="M 182 230 Q 200 244 218 230"
                stroke="#8C4F32"
                strokeWidth="3.2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Subtle teeth highlight */}
              <path
                d="M 188 231 Q 200 236 212 231"
                fill="#FFFFFF"
                opacity="0.8"
              />

              {/* Chin Accent */}
              <path
                d="M 194 252 Q 200 255 206 252"
                stroke="#B5815D"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}

        {/* Upload Overlay on Hover */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer p-4 text-center backdrop-blur-xs"
        >
          <Camera className="w-5 h-5" />
          <span className="text-[11px] font-medium leading-tight">
            {customImage ? 'Change Photo' : 'Upload Suman\'s Photo'}
          </span>
          <span className="text-[9px] text-slate-300">Click to upload personal picture</span>
          {customImage && (
            <button
              onClick={handleReset}
              className="mt-1 px-2 py-0.5 text-[10px] bg-red-600/80 hover:bg-red-700 text-white rounded flex items-center gap-1"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              Reset
            </button>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {/* Floating Status Badge */}
      {showBadge && (
        <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-2 select-none">
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
