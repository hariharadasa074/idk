import React from 'react';
import { featuredProject } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Fabrication & Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Physical Projects
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Hands-on machine fabrication, fluid calculations, and physical mechanism prototyping.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden transition-all text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Project Details & Meta */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
              <div>
                {/* Scope & Category */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-600 font-mono">
                    {featuredProject.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredProject.scope}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {featuredProject.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Technical Tags: Clean unboxed metadata with separators */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-700 block mb-2">
                    Core Technical Competencies:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600 font-mono">
                    {featuredProject.tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <span className="hover:text-blue-600 transition-colors">
                          {tag}
                        </span>
                        {idx < featuredProject.tags.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenProjectModal(featuredProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <div className="text-xs font-mono text-slate-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Fabrication Verified</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Specifications & Key Assemblies */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-slate-50/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs mb-5">
                  <span className="text-slate-700 font-mono uppercase tracking-wider font-semibold">
                    Technical Specifications
                  </span>
                  <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80 font-semibold">
                    Working Model
                  </span>
                </div>

                {/* Specs List */}
                <dl className="space-y-3">
                  {featuredProject.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2.5 border-b border-slate-200/60 last:border-b-0 text-xs gap-1"
                    >
                      <dt className="text-slate-500 font-medium">{spec.label}</dt>
                      <dd className="font-semibold text-slate-800 font-mono sm:text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
