import React from 'react';
import { ArrowRight, Download, Mail, Box } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { AvatarContainer } from './AvatarContainer';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> =  ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Precision CAD Drafting Grid Background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

      {/* Decorative Corner Accent Lines */}
      <div className="absolute top-20 left-6 sm:left-12 w-24 h-24 border-t border-l border-blue-200/60 pointer-events-none" />
      <div className="absolute bottom-12 right-6 sm:right-12 w-24 h-24 border-b border-r border-slate-200 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small label: unboxed clean text with bullet */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>MECHANICAL ENGINEERING STUDENT</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-4 text-balance">
              {personalInfo.name}
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-5 leading-snug">
              {personalInfo.headline}
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Detail-oriented engineer pursuing B.Tech at{' '}
              <span className="text-slate-900 font-medium">Ramkrishna Mahato Government Engineering College</span>{' '}
              with practical industrial vocational training at{' '}
              <span className="text-slate-900 font-medium">Indian Railways (ROH Depot)</span>, 
              solid foundation in 2D/3D CAD design (AutoCAD, SolidWorks), mechanical diagnostics, and basic data visualization.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Physical Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>

              <a
                href="#cad-drawings"
                className="inline-flex items-center justify-center gap-2 px-4.5 py-3.5 text-sm font-semibold text-cyan-700 bg-cyan-50/90 hover:bg-cyan-100 border border-cyan-200 hover:border-cyan-300 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
              >
                <Box className="w-4 h-4 text-cyan-600" />
                <span>CAD Drawings</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quiet Quick Metrics Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">Education</span>
                <span className="text-sm font-bold text-slate-900 block font-display">B.Tech Mechanical</span>
                <span className="text-[11px] text-slate-500 font-mono">MAKAUT (2024–27)</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">Industrial Training</span>
                <span className="text-sm font-bold text-slate-900 block font-display">Indian Railways</span>
                <span className="text-[11px] text-slate-500 font-mono">ROH Rolling-Stock</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">Primary Tools</span>
                <span className="text-sm font-bold text-slate-900 block font-display">CAD & Basic Data Visualisation</span>
                <span className="text-[11px] text-slate-500 font-mono">SolidWorks / Power BI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture & Engineering Accents */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Background Circular Tech Ornamentation */}
              <div className="absolute -inset-10 sm:-inset-16 rounded-full bg-gradient-to-tr from-blue-100/50 via-slate-100/40 to-transparent blur-xl pointer-events-none" />
              
              {/* Clean Subtle Ring Overlay */}
              <div className="absolute -inset-6 sm:-inset-8 pointer-events-none">
                <svg className="w-full h-full text-slate-200" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
                </svg>
              </div>

              {/* Profile Picture */}
              <AvatarContainer size="lg" showBadge={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
