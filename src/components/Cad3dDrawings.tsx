import React, { useState, useEffect } from 'react';
import { Box, Maximize2, X, Eye, Sparkles } from 'lucide-react';

interface CadModel {
  id: string;
  title: string;
  fileName: string;
  defaultSrc: string;
  storageKey: string;
  software: string;
  viewport: string;
  description: string;
  specs: { label: string; value: string }[];
}

const CAD_MODELS: CadModel[] = [
  {
    id: 'cad-wheel',
    title: 'Alloy Wheel Rim with Mounted Tire & Tread Assembly',
    fileName: 'Drawing3 by suman.dwg',
    defaultSrc: '/Screenshot (450).png',
    storageKey: 'suman_cad_wheel_screenshot',
    software: 'Autodesk AutoCAD 2027 - EDUCATION (NON COMMERCIAL)',
    viewport: '[-][Custom View][Realistic (Fast)]',
    description:
      '3D solid parametric modeling of an automotive/motorcycle alloy wheel rim and mounted pneumatic tire. Features 10 circular polar-arrayed alloy spokes, center hub axle bore with 5 lug nut pockets, recessed rim flange bead seats, and outer rubber tire torus with precision 3D radial tread grooves.',
    specs: [
      { label: 'File Name', value: 'Drawing3 by suman.dwg' },
      { label: 'Modeler / Author', value: 'hariharadasa074 (Suman Das)' },
      { label: 'Modeling Style', value: '3D Solid / Realistic (Fast)' },
      { label: 'Spoke Pattern', value: '10 Radial Split-Spokes' },
      { label: 'Operations', value: 'REVOLVE, ARRAYPOLAR, SUBTRACT, FILLETEDGE' }
    ]
  },
  {
    id: 'cad-gear',
    title: 'Precision Involute Spur Gear with Hub & Keyway',
    fileName: 'Drawing111.dwg',
    defaultSrc: '/Screenshot (451).png',
    storageKey: 'suman_cad_gear_screenshot',
    software: 'Autodesk AutoCAD 2027 - EDUCATION (NON COMMERCIAL)',
    viewport: '[-][SW Isometric][Shaded (Fast)]',
    description:
      '3D solid mechanical power transmission spur gear modeled in Autodesk AutoCAD. Designed with 18 precision involute teeth (20° pressure angle), central drive shaft bore, parallel rectangular keyway slot for positive torque transmission, raised cylindrical hub boss, and weight-reducing recessed web ring.',
    specs: [
      { label: 'File Name', value: 'Drawing111.dwg' },
      { label: 'Modeler / Author', value: 'hariharadasa074 (Suman Das)' },
      { label: 'Modeling Style', value: '3D Solid / Shaded (Fast)' },
      { label: 'Teeth Count (Z)', value: '18 Involute Teeth' },
      { label: 'Shaft Mount', value: 'Cylindrical Bore + Rectangular Keyway' }
    ]
  }
];

export const Cad3dDrawings: React.FC = () => {
  const [images, setImages] = useState<Record<string, string>>({
    'cad-wheel': '/Screenshot (450).png',
'cad-gear': '/Screenshot (451).png'
  });

  const [activeModalModel, setActiveModalModel] = useState<CadModel | null>(null);

  // Load any user-uploaded raw screenshots from localStorage
  useEffect(() => {
    const loaded: Record<string, string> = {};
    for (const model of CAD_MODELS) {
      const stored = localStorage.getItem(model.storageKey);
      if (stored) {
        loaded[model.id] = stored;
      }
    }
    setImages((prev) => ({ ...prev, ...loaded }));
  }, []);

  return (
    <section id="cad-drawings" className="py-20 lg:py-28 bg-[#0e1117] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background CAD Subtle Drafting Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase font-mono">
              <Box className="w-4 h-4 text-cyan-400" />
              <span>Autodesk AutoCAD 2027</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              CAD Drawings
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Original 3D solid parametric models designed and rendered in Autodesk AutoCAD 2027 by Suman Das.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Native 3D Solid Models</span>
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CAD_MODELS.map((model) => {
            const currentImg = images[model.id] || model.defaultSrc;

            return (
              <div
                key={model.id}
                className="group bg-[#151922] rounded-2xl border border-slate-800 hover:border-cyan-500/60 shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl"
              >
                {/* AutoCAD Screenshot Frame */}
                <div className="relative aspect-video w-full bg-[#12151c] border-b border-slate-800 overflow-hidden flex items-center justify-center">
                  <img
                    src={currentImg}
                    alt={model.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                    onClick={() => setActiveModalModel(model)}
                  />

                  {/* Top Overlay Controls */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalModel(model)}
                      className="p-1.5 rounded-lg bg-black/80 hover:bg-black text-cyan-300 hover:text-white border border-cyan-500/40 shadow-md backdrop-blur-sm cursor-pointer transition-colors"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/85 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                      {model.fileName}
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-black/75 border border-slate-700 text-slate-300 text-[10px] font-mono">
                      {model.viewport}
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="text-cyan-400 font-semibold">{model.fileName}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        AutoCAD 2027
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveModalModel(model)}
                      className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug mb-3"
                    >
                      {model.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {model.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {model.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="bg-[#101319] border border-slate-800/80 rounded-lg p-2.5 text-[11px]"
                        >
                          <span className="text-slate-400 block truncate text-[10px] font-mono uppercase">
                            {spec.label}
                          </span>
                          <span className="font-mono font-semibold text-slate-200 block truncate mt-0.5">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      Solid Model · {model.fileName}
                    </span>

                    <button
                      onClick={() => setActiveModalModel(model)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                    >
                      <span>Inspect Drawing</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Inspection Lightbox Modal */}
      {activeModalModel && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={() => setActiveModalModel(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#141822] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#10131a]">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                  <Box className="w-5 h-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {activeModalModel.fileName}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-mono">
                      {activeModalModel.viewport}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mt-0.5">
                    {activeModalModel.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalModel(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close CAD Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Resolution Screenshot Canvas */}
            <div className="p-3 sm:p-5 bg-[#0b0d12] flex items-center justify-center">
              <img
                src={images[activeModalModel.id] || activeModalModel.defaultSrc}
                alt={activeModalModel.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg border border-slate-800 shadow-2xl filter contrast-[1.01]"
              />
            </div>

            {/* Specs & Description in Modal */}
            <div className="p-6 bg-[#141822] border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
              <p className="leading-relaxed mb-4 text-slate-300">
                {activeModalModel.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeModalModel.specs.map((spec, idx) => (
                  <div key={idx} className="bg-[#0e1118] p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">{spec.label}</span>
                    <span className="font-semibold text-cyan-300 font-mono block truncate mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Close */}
            <div className="px-6 py-3.5 bg-[#10131a] border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Autodesk AutoCAD 2027 · Suman Das
              </span>
              <button
                onClick={() => setActiveModalModel(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
