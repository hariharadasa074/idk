import React, { useState, useEffect } from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, X, FileCheck, Upload } from 'lucide-react';
import { TataCertificateView } from './TataCertificateView';

export const Certifications: React.FC = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certImage, setCertImage] = useState<string | null>(null);
  const cert = certificationsData[0];

  useEffect(() => {
    // Check localStorage
    const stored = localStorage.getItem('tata_forage_cert_img');
    if (stored) {
      setCertImage(stored);
    } else {
      // Test if Screenshot (452).png is in public
      const testImg = new Image();
      testImg.src = './Screenshot (452).png';
      testImg.onload = () => {
        setCertImage('./Screenshot (452).png');
      };
    }
  }, []);

  const handleUploadCert = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        try {
          localStorage.setItem('tata_forage_cert_img', dataUrl);
        } catch {
          // ignore storage quota error
        }
        setCertImage(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Compact Certification Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs text-slate-500">
                  <span className="font-semibold text-blue-600 font-mono">{cert.issuer}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{cert.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Industry Credential
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center md:flex-col justify-between md:justify-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
              <button
                onClick={() => setShowCertificateModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <FileCheck className="w-4 h-4" />
                <span>View Certificate</span>
              </button>
              <span className="text-[10px] font-mono text-slate-500">
                ID: {cert.credentialId}
              </span>
            </div>
          </div>

          {/* Competencies Covered */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-700 block mb-2">
              Key Competencies Demonstrated:
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
              {cert.skillsCovered.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal - Showing the Authentic Certificate Image */}
      {showCertificateModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
          onClick={() => setShowCertificateModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    Official Certificate of Completion
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Tata Group & Forage · ID: {cert.credentialId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close Certificate Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image Canvas */}
            <div className="p-3 sm:p-6 bg-slate-100/70 max-h-[80vh] overflow-y-auto">
              <TataCertificateView
                imageSrc={certImage}
                onUploadImage={handleUploadCert}
              />
            </div>

            {/* Modal Bottom Controls */}
            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px]">
                  Enrolment Code: <strong className="text-slate-800 font-semibold">{cert.credentialId}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
