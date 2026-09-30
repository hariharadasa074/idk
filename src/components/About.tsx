import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { AvatarContainer } from './AvatarContainer';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative">
      {/* Subtle background drafting grid */}
      <div className="absolute inset-0 bg-dots-subtle opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Engineering foundation grounded in analytical mechanics, workshop fabrication, CAD modeling, and industrial railway inspection.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sophisticated Editorial Photo Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              {/* Profile Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Personal Profile</span>
                <span className="text-slate-500">{personalInfo.location}</span>
              </div>

              {/* Profile Avatar Container */}
              <div className="flex justify-center py-4">
                <AvatarContainer size="lg" showBadge={false} />
              </div>

              {/* Technical Profile Details Beneath Avatar */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2.5 text-xs text-left">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Academic Standing</span>
                  <span className="font-semibold text-slate-900">B.Tech Mechanical (Pursuing)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">College / Affiliation</span>
                  <span className="font-semibold text-slate-900 text-right truncate max-w-[210px]" title="Ramkrishna Mahato Govt. Engg. College / MAKAUT">
                    RKMGEC / MAKAUT
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Diploma</span>
                  <span className="font-semibold text-slate-900">Contai Polytechnic</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Industrial Training</span>
                  <span className="font-semibold text-slate-900">Indian Railways ROH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full text-left space-y-6">
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p className="text-lg text-slate-800 font-medium leading-normal">
                Hello! I'm <strong className="text-slate-900 font-semibold">Suman Das</strong>, a dedicated Mechanical Engineering student currently pursuing my Bachelor of Technology degree at Ramkrishna Mahato Government Engineering College, Purulia, affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT).
              </p>

              <p>
                My technical journey started with a 3-year <strong className="text-slate-900 font-medium">Diploma in Mechanical Engineering from Contai Polytechnic</strong>. During my diploma, I combined thermodynamic and fluid mechanics principles with hands-on fabrication to design and construct a functional Single Acting Reciprocating Pump.
              </p>

              <p>
                To bridge academic principles with real-world infrastructure, I undertook practical industrial vocational training with the <strong className="text-slate-900 font-medium">Indian Railways Routine Overhaul (ROH) Depot in Jharkhand</strong>. Working alongside certified railway engineers, I gained direct exposure to freight wagon bogie maintenance, center buffer couplers (CBC), pneumatic air brake distributor valves, master wheel flange distance gauge calibration, and heavy workshop equipment including pit-mounted surface wheel lathes and electric overhead traveling (EOT) cranes.
              </p>

              <p>
                Alongside basic knowledge of data visualization (<strong className="text-slate-900 font-medium">Power BI, Microsoft Excel</strong>), supplemented by a verified Data Visualization certificate from <strong className="text-slate-900 font-medium">Tata Forage</strong>.
              </p>
            </div>

            {/* Compact Statistics / Highlight Row */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 text-left">
                <span className="text-[11px] font-medium text-slate-500 block uppercase tracking-wider">
                  B.Tech
                </span>
                <span className="text-base font-bold text-slate-900 block font-display mt-0.5">
                  2024 – 2027
                </span>
                <span className="text-[11px] text-blue-600 block mt-0.5">Pursuing</span>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 text-left">
                <span className="text-[11px] font-medium text-slate-500 block uppercase tracking-wider">
                  CAD Modeling
                </span>
                <span className="text-base font-bold text-slate-900 block font-display mt-0.5">
                  AutoCAD / SolidWorks
                </span>
                <span className="text-[11px] text-blue-600 block mt-0.5">2D & 3D Design</span>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 text-left">
                <span className="text-[11px] font-medium text-slate-500 block uppercase tracking-wider">
                  Industrial Training
                </span>
                <span className="text-base font-bold text-slate-900 block font-display mt-0.5">
                  Indian Railways
                </span>
                <span className="text-[11px] text-blue-600 block mt-0.5">ROH Depot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
