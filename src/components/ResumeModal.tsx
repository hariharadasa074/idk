import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const avatarImg = typeof window !== 'undefined' ? localStorage.getItem('suman_portfolio_avatar') : null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-start justify-center p-2 sm:p-4 md:p-6">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-300 flex flex-col text-left my-2 sm:my-6 max-h-[94vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="px-5 py-3 bg-slate-900 text-white flex items-center justify-between print:hidden shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-slate-200">Suman_Das_Resume.pdf</span>
            <span className="hidden sm:inline-block text-slate-400">· Official ATS Standard Template</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet - Clean, Non-Clipping, Full-Width Responsive Document */}
        <div className="overflow-y-auto flex-1 bg-white p-5 sm:p-10 md:p-12 text-slate-900 font-sans text-[13px] leading-normal selection:bg-blue-100">
          <div className="w-full max-w-full">
            
            {/* 1. Header: Name & Contact Information */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 pb-3 border-b border-transparent">
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-2">
                  Suman Das
                </h1>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-xs sm:text-[13px] text-black">
                  <span>Purba Medinipur, West Bengal</span>
                  <span className="text-slate-400">|</span>
                  <span>+91-9832108788</span>
                  <span className="text-slate-400">|</span>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    {personalInfo.email}
                  </a>
                  <span className="text-slate-400">|</span>
                  <a 
                    href="https://www.linkedin.com/in/suman-das44/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-[#0A66C2] hover:text-[#004182] transition-colors group cursor-pointer"
                    title="LinkedIn: https://www.linkedin.com/in/suman-das44/"
                    aria-label="LinkedIn profile"
                  >
                    <svg 
                      className="w-4 h-4 fill-[#0A66C2] group-hover:fill-[#004182] transition-colors inline-block shrink-0" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span className="text-blue-600 group-hover:underline font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Passport Photo Slot (Matches Suman Photo For Resume Only) */}
              {avatarImg && (
                <div className="w-20 h-24 sm:w-22 sm:h-28 rounded-md border border-slate-300 p-0.5 bg-white shadow-xs shrink-0 overflow-hidden">
                  <img
                    src={avatarImg}
                    alt="Suman Das Formal Photo"
                    className="w-full h-full object-cover object-top rounded-sm"
                  />
                </div>
              )}
            </div>

            {/* 2. Professional Summary */}
            <div className="mt-3">
              <div className="border-b border-black pb-0.5 mb-2">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  PROFESSIONAL SUMMARY
                </h2>
              </div>
              <p className="text-justify text-black leading-relaxed">
                Detail-oriented Mechanical Engineering student with a solid foundation combining practical technical education and hands-on industrial training. Proven experience in mechanical diagnostics and safety compliance from an Indian Railway internship, alongside proficiency in 2D/3D AutoCAD, SolidWorks modeling and data analytics with Power BI. Eager to leverage strong analytical skills and manufacturing knowledge in a challenging entry-level engineering role.
              </p>
            </div>

            {/* 3. Education */}
            <div className="mt-4">
              <div className="border-b border-black pb-0.5 mb-2.5">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  EDUCATION
                </h2>
              </div>

              {/* B.Tech */}
              <div className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2 font-bold text-black">
                  <span className="min-w-0">Ramkrishna Mahato Government Engineering College, Purulia | Maulana Abul Kalam Azad University of Technology</span>
                  <span className="shrink-0 font-bold sm:text-right">2024 – 2027</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2 text-black mt-0.5">
                  <span className="min-w-0">Bachelor of Technology in Mechanical Engineering</span>
                  <span className="shrink-0 sm:text-right">West Bengal, India</span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-black">
                  <li>Expected First Class</li>
                  <li>Relevant coursework: Manufacturing Process Workshop, CAD, Automobile Engineering, Fluid Mechanics Lab, Industrial Engineering</li>
                </ul>
              </div>

              {/* Diploma */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2 font-bold text-black">
                  <span className="min-w-0">Contai Polytechnic | West Bengal State Council of Technical Education</span>
                  <span className="shrink-0 font-bold sm:text-right">2021 – 2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2 text-black mt-0.5">
                  <span className="min-w-0">Diploma in Mechanical Engineering</span>
                  <span className="shrink-0 sm:text-right">West Bengal, India</span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-black">
                  <li>CGPA: 8.0/10</li>
                </ul>
              </div>
            </div>

            {/* 4. Projects */}
            <div className="mt-4">
              <div className="border-b border-black pb-0.5 mb-2">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  PROJECTS
                </h2>
              </div>

              <div>
                <h3 className="font-bold text-black mb-1">
                  Diploma Project
                </h3>
                <ul className="list-disc pl-5 text-black">
                  <li>Designed and fabricated a Single Acting Reciprocating Pump by utilising a slider-crank mechanism.</li>
                </ul>
              </div>
            </div>

            {/* 5. Technical Skills & Certifications */}
            <div className="mt-4">
              <div className="border-b border-black pb-0.5 mb-2">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  TECHNICAL SKILLS & CERTIFICATIONS
                </h2>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-black">
                <li><strong className="font-bold text-black">Technical:</strong> 2D-3D CAD Drawing, Data Visualization</li>
                <li><strong className="font-bold text-black">Tools:</strong> AutoCAD, SolidWorks, Power BI, Excel</li>
                <li><strong className="font-bold text-black">Certifications:</strong> Tata Data Visualization</li>
              </ul>
            </div>

            {/* 6. Experience */}
            <div className="mt-4">
              <div className="border-b border-black pb-0.5 mb-2">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  EXPERIENCE
                </h2>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2 font-bold text-black">
                  <span className="min-w-0">Indian Railway Internship</span>
                  <span className="shrink-0 sm:text-right font-normal">ROH, Jharkhand</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2 text-black mt-0.5">
                  <span className="min-w-0">Vocational Training</span>
                  <span className="shrink-0 sm:text-right font-normal">28/07/2026 – 09/08/2026</span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-black">
                  <li>Practiced industrial safety protocols with proper PPE compliance.</li>
                  <li>Documented maintenance of wagon components including bogies, distribution valves, and CBC systems.</li>
                  <li>Analysed mechanical operation of joints and braking system of train.</li>
                  <li>Monitored the operation of surface wheel lathes, EOT cranes, and hydraulic baling presses.</li>
                  <li>Calibrated wheel distances using a master wheel and distance gauges.</li>
                </ul>
              </div>
            </div>

            {/* 7. Languages */}
            <div className="mt-4">
              <div className="border-b border-black pb-0.5 mb-2">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  LANGUAGES
                </h2>
              </div>

              <ul className="list-disc pl-5 space-y-0.5 text-black">
                <li>English (Fluent)</li>
                <li>Hindi (Fluent)</li>
                <li>Bengali (Native)</li>
              </ul>
            </div>

            {/* 8. Soft Skills & Interests */}
            <div className="mt-4">
              <div className="border-b border-black pb-0.5 mb-2">
                <h2 className="text-xs sm:text-[13px] font-bold text-[#2563EB] uppercase tracking-wide">
                  SOFT SKILLS & INTERESTS
                </h2>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-black">
                <li><strong className="font-bold text-black">Soft Skills:</strong> Critical Thinking, Diligence</li>
                <li><strong className="font-bold text-black">Interests:</strong> Mechanical Maintenance, Automobile, Research</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center print:hidden shrink-0">
          <span className="text-xs font-mono text-slate-500">
            Official Curriculum Vitae · Suman Das
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
