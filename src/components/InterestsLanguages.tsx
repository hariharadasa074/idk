import React from 'react';
import { interestsData, languagesData } from '../data/portfolioData';
import { Wrench, Car, Microscope, Globe2 } from 'lucide-react';

export const InterestsLanguages: React.FC = () => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Car':
        return <Car className="w-5 h-5 text-blue-600" />;
      case 'Microscope':
        return <Microscope className="w-5 h-5 text-blue-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Areas of Interest */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Specialization Domains</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Areas of Interest
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Technical domains where theoretical principles meet industrial mechanical application.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {interestsData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs w-fit mb-3.5">
                      {getInterestIcon(item.icon)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Communication</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Languages
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Proficiency across multilingual regional and professional environments.
                </p>
              </div>

              <div className="space-y-3">
                {languagesData.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900">
                          {lang.language}
                        </h4>
                        {lang.nativeScript && (
                          <span className="text-xs text-slate-500 font-medium">
                            ({lang.nativeScript})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {lang.proficiency}
                      </p>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-blue-900 block mb-0.5">
                Multilingual Capability:
              </span>
              Comfortable working in technical teams across English technical documentation, Bengali native communication, and Hindi shop-floor coordination.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
