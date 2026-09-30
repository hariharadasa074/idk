import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface TataCertificateViewProps {
  imageSrc?: string | null;
  className?: string;
}

export const TataCertificateView: React.FC<TataCertificateViewProps> = ({
  imageSrc = '/Screenshot(452).png',
  className = ''
}) => {
  return (
    <div className={`relative w-full bg-white select-none ${className}`}>
      {/* Certificate Frame Display */}
      <div className="relative w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl flex flex-col items-center justify-center p-2 sm:p-4">
        <img
          src={imageSrc || '/Screenshot(452).png'}
          alt="Data Visualisation: Empowering Business with Effective Insights - Suman Das - Tata & Forage Certificate"
          className="w-full h-auto max-h-[75vh] object-contain rounded filter contrast-[1.01]"
        />

        {/* Credential Verification Info Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between w-full px-2 gap-3 text-xs text-slate-600 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Tata Group & Forage · Verified Credential</span>
          </div>

          <span className="text-[11px] text-slate-500">
            Enrolment ID: gC24iPBEyuK6Tp96F
          </span>
        </div>
      </div>
    </div>
  );
};
