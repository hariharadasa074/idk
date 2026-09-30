import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Check, 
  Copy, 
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Interested in engineering, design, manufacturing, or technical collaboration? Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono uppercase text-slate-500 block">
                  Email Address
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block mt-1"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                <span>Send direct email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              {copiedField === 'email' && (
                <span className="text-xs font-mono text-emerald-600">Copied</span>
              )}
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono uppercase text-slate-500 block">
                  Direct Phone
                </span>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors font-mono block mt-1"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <span>Call Suman</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              {copiedField === 'phone' && (
                <span className="text-xs font-mono text-emerald-600">Copied</span>
              )}
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-sky-50 text-sky-600">
                  <Linkedin className="w-5 h-5" />
                </div>

                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Visit LinkedIn profile"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono uppercase text-slate-500 block">
                  Professional Network
                </span>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-1"
                >
                  {personalInfo.linkedIn}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
