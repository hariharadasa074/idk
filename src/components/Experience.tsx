import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Wrench, 
  Activity, 
  Cog, 
  Gauge, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Train,
  ArrowRight,
  Info
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const technicalDeepDives = [
    {
      title: 'Industrial Safety & PPE Compliance',
      subtitle: 'Zero-Accident Protocol & Heavy Workshop Norms',
      badge: 'Safety Standards',
      details: 'Strict enforcement of heavy workshop safety protocols including hard hats, high-visibility vest, steel-toed boots, eye protection during grinding/welding, and overhead load clearance rules during EOT crane traversal.',
      spec: 'Adhered to Indian Railways General & Subsidiary Rules (G&SR) for shop-floor hazard management.'
    },
    {
      title: 'Wagon Component Maintenance',
      subtitle: 'CASNUB Bogie, Air Brake DV & CBC Coupler',
      badge: 'Rolling Stock',
      details: 'Conducted detailed structural inspection on freight wagon components maintenance. Also inspected side frames, bolster assemblies, helical spring nests, center pivot pins, and CBC knuckle pins for fatigue or excessive wear.',
      spec: 'CASNUB 22W/22HS Bogies · Center Buffer Coupler (AAR Type E) · Air Brake Distributor Valve.'
    },
    {
      title: 'Braking & Mechanical Joints Analysis',
      subtitle: 'Pneumatic Actuation & Brake Rigging',
      badge: 'Mechanisms & Pneumatics',
      details: 'Studied the mechanical force transmission from the brake cylinder piston through the horizontal brake lever, floating lever, slack adjuster (SAB), and brake shoe hangers to the wheel tread surfaces.',
      spec: 'Brake cylinder pressure: 3.8 ± 0.1 kg/cm² · Twin pipe graduated release brake system.'
    },
    {
      title: 'Heavy Workshop Machinery Monitoring',
      subtitle: 'Underfloor Wheel Lathes & 25-Ton EOT Cranes',
      badge: 'Shop Equipment',
      details: 'Monitored the re-profiling of worn wheelsets using CNC/hydraulic surface wheel lathes to restore standard Worn Wheel Profile (WWP). Observed 25T EOT cranes handling wheelsets and hydraulic baling presses.',
      spec: 'Surface wheel lathe reprofiling accuracy within 0.1mm · EOT crane dual hoist synchronization.'
    },
    {
      title: 'Precision Wheelset Distance Calibration',
      subtitle: 'Flange-to-Flange Master Gauge Metrology',
      badge: 'Precision Metrology',
      details: 'Utilized certified railway master wheel distance gauges and micrometers to measure back-to-back wheel distance across 4 diametrically opposed positions. Verified allowable tolerance within 1600 (+2 / -1) mm.',
      spec: 'Nominal Wheel Diameter: 1000mm (new) / 906mm (condemning) · Back-to-back distance: 1600 +2/-1 mm.'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Cog':
        return <Cog className="w-5 h-5" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5" />;
      default:
        return <Train className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Industrial Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industrial Experience
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Hands-on vocational training at Indian Railways Routine Overhaul Depot, focusing on rolling-stock maintenance and heavy engineering diagnostics.
          </p>
        </div>

        {/* Main Experience Hero Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs mb-8 text-left">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-medium text-blue-600 uppercase">
                  Vocational Training
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500">Heavy Engineering</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {experienceData.organization}
              </h3>
              <p className="text-base font-semibold text-slate-700 mt-1">
                {experienceData.role}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{experienceData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>{experienceData.duration}</span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 py-6 leading-relaxed">
            {experienceData.summary}
          </p>

          {/* Interactive Technical Breakdown: Responsibilities & Technical Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Left side: Responsibilities list with active indicator */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Documented On-Site Responsibilities:
              </h4>

              {experienceData.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    activeTab === idx
                      ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors ${
                        activeTab === idx
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {getIcon(resp.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-slate-900 leading-snug">
                          {resp.title}
                        </h5>
                        {activeTab === idx && (
                          <span className="text-[10px] font-mono text-blue-600 font-semibold uppercase">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {resp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side: Detailed Engineering Inspector & Schematics */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs sticky top-24">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-900 uppercase">
                      Technical Deep-Dive
                    </span>
                  </div>
                  <span className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {technicalDeepDives[activeTab].badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  {technicalDeepDives[activeTab].title}
                </h4>
                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  {technicalDeepDives[activeTab].subtitle}
                </p>

                {/* SVG Technical Blueprint Illustration based on selected tab */}
                <div className="my-5 p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2 border-b border-slate-800 pb-1.5">
                    <span>SCHEMATIC_VIEW: MOD_0{activeTab + 1}</span>
                    <span>SCALE 1:10</span>
                  </div>

                  {/* SVG Drawing for Selected Railway System */}
                  <div className="h-36 w-full flex items-center justify-center">
                    {activeTab === 0 && (
                      <svg viewBox="0 0 300 120" className="w-full h-full">
                        <circle cx="150" cy="50" r="35" stroke="#3b82f6" strokeWidth="2" fill="none" />
                        <path d="M 125 50 Q 150 20 175 50" stroke="#60a5fa" strokeWidth="2" fill="none" />
                        <rect x="135" y="88" width="30" height="24" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
                        <text x="150" y="55" textAnchor="middle" fill="#93c5fd" fontSize="11" fontFamily="monospace">PPE_OK</text>
                        <path d="M 50 110 H 250" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
                        <text x="50" y="25" fill="#64748b" fontSize="9" fontFamily="monospace">ZONE: SHOP_SAFETY</text>
                      </svg>
                    )}

                    {activeTab === 1 && (
                      <svg viewBox="0 0 300 120" className="w-full h-full">
                        <rect x="60" y="50" width="180" height="20" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                        <circle cx="90" cy="70" r="22" stroke="#60a5fa" strokeWidth="2" fill="none" />
                        <circle cx="210" cy="70" r="22" stroke="#60a5fa" strokeWidth="2" fill="none" />
                        <circle cx="90" cy="70" r="8" fill="#38bdf8" />
                        <circle cx="210" cy="70" r="8" fill="#38bdf8" />
                        <line x1="150" y1="35" x2="150" y2="50" stroke="#f59e0b" strokeWidth="2" />
                        <circle cx="150" cy="30" r="5" fill="#f59e0b" />
                        <line x1="30" y1="92" x2="270" y2="92" stroke="#475569" strokeWidth="2" />
                        <text x="150" y="20" textAnchor="middle" fill="#fde68a" fontSize="10" fontFamily="monospace">CASNUB 22W BOGIE</text>
                      </svg>
                    )}

                    {activeTab === 2 && (
                      <svg viewBox="0 0 300 120" className="w-full h-full">
                        <rect x="70" y="40" width="50" height="35" rx="3" fill="#1e293b" stroke="#34d399" strokeWidth="1.5" />
                        <line x1="120" y1="58" x2="190" y2="58" stroke="#34d399" strokeWidth="3" />
                        <circle cx="190" cy="58" r="4" fill="#f59e0b" />
                        <line x1="190" y1="25" x2="190" y2="95" stroke="#60a5fa" strokeWidth="2" />
                        <rect x="205" y="45" width="12" height="28" rx="2" fill="#ef4444" />
                        <circle cx="235" cy="58" r="24" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        <text x="150" y="112" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="monospace">LEVER RIGGING RATIO 1:4</text>
                      </svg>
                    )}

                    {activeTab === 3 && (
                      <svg viewBox="0 0 300 120" className="w-full h-full">
                        <line x1="40" y1="20" x2="260" y2="20" stroke="#3b82f6" strokeWidth="3" />
                        <rect x="135" y="16" width="30" height="15" fill="#f59e0b" />
                        <line x1="150" y1="31" x2="150" y2="70" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                        <circle cx="150" cy="80" r="10" fill="#38bdf8" />
                        <line x1="40" y1="100" x2="260" y2="100" stroke="#475569" strokeWidth="1" />
                        <text x="150" y="112" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="monospace">EOT CRANE TROLLEY + PIT LATHE</text>
                      </svg>
                    )}

                    {activeTab === 4 && (
                      <svg viewBox="0 0 300 120" className="w-full h-full">
                        <rect x="75" y="30" width="15" height="60" rx="2" fill="#3b82f6" />
                        <rect x="210" y="30" width="15" height="60" rx="2" fill="#3b82f6" />
                        <line x1="90" y1="60" x2="210" y2="60" stroke="#94a3b8" strokeWidth="4" />
                        <line x1="90" y1="40" x2="210" y2="40" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                        <text x="150" y="35" textAnchor="middle" fill="#fcd34d" fontSize="9" fontFamily="monospace">1600 (+2 / -1) mm</text>
                        <text x="150" y="105" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">MASTER WHEEL GAUGE</text>
                      </svg>
                    )}
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {technicalDeepDives[activeTab].details}
                  </p>

                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-700 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Engineering Parameter:</span>
                      <span className="text-slate-600">{technicalDeepDives[activeTab].spec}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
