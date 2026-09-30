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
            <img src="/Suman Photo For Resume Only.png" alt="Suman Das" className="w-full h-full object-cover object-top" />
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
