import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen, Check } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Formal technical education combining degree-level engineering analysis with polytechnic mechanical engineering fundamentals.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200/80 space-y-12 ml-2 sm:ml-4">
          {educationData.map((item, index) => (
            <div key={index} className="relative group text-left">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
              </div>

              {/* Education Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    {/* Degree Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {item.degree}
                    </h3>
                    {/* Institution */}
                    <p className="text-base font-semibold text-blue-600 mt-0.5">
                      {item.institution}
                    </p>
                    {/* Affiliation */}
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.affiliation}
                    </p>
                  </div>

                  {/* Year & Grade Column */}
                  <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-1 shrink-0 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.duration}
                    </span>
                    {item.grade && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mt-1">
                        <Award className="w-3.5 h-3.5" />
                        {item.grade}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Coursework / Labs */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>Curriculum Focus & Core Laboratories:</span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {item.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
