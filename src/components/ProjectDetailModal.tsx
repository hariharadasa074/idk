import React from 'react';
import { X, FileText } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-200 flex items-start justify-between bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 mb-1">
              <span>{project.category}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{project.scope}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Procedure to Make This Idea into Reality: Single-Acting Reciprocating Pump
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Paragraph Writing Format (No Box Type) */}
        <div className="p-6 sm:p-10 space-y-7 overflow-y-auto text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Phase 1 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-blue-600 font-mono text-sm">1.</span>
              Mechanism & Cylinder Assembly
            </h4>
            <p className="text-slate-700 leading-relaxed">
              The pump operates on a classic slider-crank mechanism designed to convert rotary input motion into smooth, linear reciprocating displacement. The main cylinder barrel was fabricated from standard electrical wiring PVC pipe. To generate the internal vacuum required for suction, a syringe was repurposed to function as the reciprocating piston inside the cylinder bore. A sturdy nail served as the mechanical connecting pin, securely joining the piston assembly to the crank linkage to transmit force along the stroke length.
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Phase 2 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-blue-600 font-mono text-sm">2.</span>
              Valve Fabrication & Arc Welding
            </h4>
            <p className="text-slate-700 leading-relaxed">
              To ensure unidirectional fluid flow during pumping cycles, custom one-way check valves were fabricated in the workshop. The valve assemblies were created by fusing a metallic washer and bolt together using a workshop electric arc welding machine, producing a weighted, durable seating disc capable of sealing effectively against reverse fluid flow under hydrostatic pressure.
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Phase 3 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-blue-600 font-mono text-sm">3.</span>
              Mounting Challenge & Thermoplastic Solution
            </h4>
            <p className="text-slate-700 leading-relaxed mb-3">
              During vertical assembly, a primary engineering challenge was properly positioning and securing the heavy welded metal valve inside the smooth cylinder bore of the vertical pump configuration without causing fluid leakage or obstruction.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This was overcome by taking advantage of the thermoplastic properties of electrical wiring PVC pipe, which softens when heated with a lighter flame and permanently retains its new form once cooled. The pipe was carefully heated and molded inward to create a secure, form-fitting valve seat. Additional tailored PVC pipe segments were then integrated to lock the valve firmly in position inside the cylinder bore, guaranteeing tight alignment throughout repeated pressure cycles.
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Phase 4 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="text-blue-600 font-mono text-sm">4.</span>
              Motor Load Challenge & Manual Crank Solution
            </h4>
            <p className="text-slate-700 leading-relaxed mb-3">
              Upon final assembly, a subsequent operational challenge arose when testing prime mover propulsion: the combined load from the heavy welded metal valve, internal friction, and high volume of displaced water proved too heavy for the electric motor to pull water effectively, stalling the drive shaft.
            </p>
            <p className="text-slate-700 leading-relaxed">
              To solve this problem and validate the pump&apos;s hydraulic performance, a custom manual drive handle was engineered and fitted to rotate the crank disc (fabricated from layered, rigid cardboard). This manual crank gave the operator the necessary rotational leverage to cycle the slider-crank assembly smoothly, successfully pulling and discharging water in continuous single-acting strokes.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            CONTAI_POLYTECHNIC_DIPLOMA_PROJECT
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
