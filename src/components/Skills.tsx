import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  DraftingCompass, 
  Layers, 
  BarChart3, 
  PenTool, 
  Box, 
  FileSpreadsheet, 
  Brain, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case '2D CAD Drawing':
        return <DraftingCompass className="w-5 h-5 text-blue-600" />;
      case '3D CAD Drawing':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Data Visualization':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'AutoCAD':
        return <PenTool className="w-5 h-5 text-indigo-600" />;
      case 'SolidWorks':
        return <Box className="w-5 h-5 text-indigo-600" />;
      case 'Power BI':
        return <BarChart3 className="w-5 h-5 text-amber-600" />;
      case 'Microsoft Excel':
      case 'Excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'Critical Thinking':
        return <Brain className="w-5 h-5 text-purple-600" />;
      case 'Diligence':
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      default:
        return <DraftingCompass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Competency Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Skills & Tools
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              Grounded in mechanical drafting conventions, parametric CAD assemblies, data visualization dashboards, and workshop diligence.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Displayed by Category */}
        <div className="space-y-12">
          {filteredCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="text-left">
              <div className="mb-5 flex items-baseline justify-between border-b border-slate-200/80 pb-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {group.category}
                </h3>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                  {group.description}
                </span>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Skill Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wide">
                            {skill.name === 'Power BI' || skill.name === 'Data Visualization'
                              ? 'Basic Knowledge'
                              : group.category === 'Software & Tools'
                              ? 'Tool'
                              : 'Core Ability'}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {skill.levelDescription}
                      </p>
                    </div>

                    {/* Applied In: Clean Unboxed Metadata */}
                    {skill.applications && (
                      <div className="pt-3 border-t border-slate-200/60 text-xs">
                        <span className="text-[11px] font-mono text-blue-600 font-semibold block mb-0.5">
                          Applied In:
                        </span>
                        <p className="text-[12px] text-slate-700 font-medium leading-snug">
                          {skill.applications}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
