import React, { useRef } from 'react';
import { Upload, CheckCircle2, ShieldCheck, Download, ZoomIn } from 'lucide-react';

interface TataCertificateViewProps {
  imageSrc?: string | null;
  onUploadImage?: (file: File) => void;
  className?: string;
}

export const TataCertificateView: React.FC<TataCertificateViewProps> = ({
  imageSrc,
  onUploadImage,
  className = ''
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && onUploadImage) {
      onUploadImage(e.target.files[0]);
    }
  };

  return (
    <div className={`relative w-full bg-white select-none ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* If raw uploaded screenshot is available, display it as-is */}
      {imageSrc ? (
        <div className="relative group w-full bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center p-2 sm:p-4">
          <img
            src={imageSrc}
            alt="Data Visualisation: Empowering Business with Effective Insights - Suman Das - Tata & Forage Certificate"
            className="w-full h-auto max-h-[75vh] object-contain rounded shadow-2xl filter contrast-[1.01]"
          />
          {onUploadImage && (
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-mono border border-slate-700 shadow-lg cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Replace Image</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* High-Resolution Vector Representation of Screenshot (452).png */
        <div className="relative w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden p-6 sm:p-12 text-slate-800 font-sans">
          {/* Top Right Blue Forage Ribbon / Banner */}
          <div className="absolute top-0 right-4 sm:right-8 w-44 sm:w-56 bg-[#3d67a9] text-white pt-5 pb-8 px-4 sm:px-6 shadow-md rounded-b-[2rem] flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              {/* Forage Origami Logo */}
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L4 9L16 16L28 9L16 2Z" fill="white" />
                <path d="M4 11L16 18L16 30L4 23L4 11Z" fill="#dbeafe" fillOpacity="0.9" />
                <path d="M28 11L16 18L16 30L28 23L28 11Z" fill="#bfdbfe" fillOpacity="0.75" />
              </svg>
              <span className="text-xl sm:text-2xl font-bold tracking-tight font-sans">Forage</span>
            </div>
            <p className="text-[10px] sm:text-xs text-blue-100 leading-tight">
              Inspiring and empowering future professionals
            </p>
          </div>

          {/* Top Left TATA Logo */}
          <div className="mb-12 sm:mb-16 pt-2">
            <div className="flex flex-col items-start">
              {/* Official Tata Emblem SVG */}
              <svg width="60" height="42" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="35" rx="46" ry="32" stroke="#00509E" strokeWidth="6" />
                <path d="M50 16 V54" stroke="#00509E" strokeWidth="6" strokeLinecap="round" />
                <path d="M30 24 H70" stroke="#00509E" strokeWidth="6" strokeLinecap="round" />
                <path d="M38 32 H62" stroke="#00509E" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
              <span className="text-[#00509E] font-black tracking-[0.25em] text-lg sm:text-xl mt-1">
                TATA
              </span>
            </div>
          </div>

          {/* Recipient Name */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Suman Das
            </h1>
          </div>

          {/* Certificate Course Title */}
          <div className="mb-6 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Data Visualisation: Empowering Business with Effective Insights
            </h2>
          </div>

          {/* Certificate of Completion & Date */}
          <div className="mb-8 pb-6 border-b border-slate-100">
            <h3 className="text-lg sm:text-xl font-normal text-slate-700">
              Certificate of Completion
            </h3>
            <p className="text-base text-slate-600 mt-1 font-medium">
              March 19th, 2026
            </p>
          </div>

          {/* Task Completion Body */}
          <div className="mb-10 text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
            <p className="mb-3 text-slate-600 font-medium">
              Over the period of March 2026, Suman Das has completed practical tasks in:
            </p>
            <ul className="space-y-1.5 pl-1 font-medium text-slate-800">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Framing the Business Scenario</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Choosing the Right Visuals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Creating Effective Visuals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Communicating Insights and Analysis</span>
              </li>
            </ul>
          </div>

          {/* Signature Block (Bottom Right) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4">
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono space-y-1">
              <div>Enrolment Verification Code: <span className="text-slate-600 font-semibold">gC24iPBEyuK6Tp96F</span></div>
              <div>User Verification Code: <span className="text-slate-600 font-semibold">69a828372d955c8bb6fd007d</span></div>
              <div>Issued by: <span className="text-slate-600 font-semibold">Forage</span></div>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              {/* Handwritten Signature SVG */}
              <svg width="150" height="48" viewBox="0 0 200 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700 mb-1">
                <path
                  d="M15 45 C 25 15, 35 10, 45 35 C 50 50, 60 55, 75 25 C 80 15, 90 20, 95 40 C 105 20, 120 15, 135 30 C 145 40, 160 30, 175 20 C 165 45, 180 50, 190 35"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="30" r="14" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6" />
                <path d="M85 30 Q 110 5 125 35" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <div className="text-sm font-bold text-slate-900">Tom Brunskill</div>
              <div className="text-xs text-slate-500">Co-Founder of Forage</div>
            </div>
          </div>

          {/* Quick upload trigger overlay button if user wants to swap to the raw Screenshot */}
          {onUploadImage && (
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Credential Replica
              </span>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Screenshot (452).png as-is</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
