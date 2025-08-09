import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Session Captured',
    description:
      'Upload audio or use live transcription during your therapy session',
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z" fill="#374151"/>
        <path d="M12 8L12 24M20 8L20 24" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'AI Note Drafted',
    description:
      'AI drafts notes and flags insights while maintaining clinical authenticity',
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C16 4 12 6 12 10V14C12 16 14 18 16 18C18 18 20 16 20 14V10C20 6 16 4 16 4Z" fill="#374151"/>
        <path d="M16 18V22M12 22H20M16 26H16.01" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="12" r="1" fill="white"/>
        <circle cx="18" cy="12" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Billing-Ready',
    description:
      'Review → edit → push to EMR with confidence and compliance',
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="16" height="16" rx="2" fill="#22C55E"/>
        <path d="M12 16L14.5 18.5L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Therapist-Aware Layer',
    description:
      'See themes, patterns, and code suggestions across sessions',
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="14" rx="2" fill="none" stroke="#374151" strokeWidth="2"/>
        <path d="M10 10H22M10 14H18M10 18H20" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
        <rect x="20" y="22" width="6" height="4" rx="1" fill="#374151"/>
      </svg>
    ),
  },
];

export default function Alongside() {
  return (
    <section className="bg-[#F8FAFC] py-[24px] px-[24px] md:px-[40px]">
      <div className="mx-auto max-w-[1120px]">
        {/* Header */}
        <div className="text-center mb-[72px]">
          <h2 className="text-[40px] md:text-[48px] leading-[48px] md:leading-[56px] font-bold text-[#111827] tracking-tight">
            Here’s how dskribe thinks alongside you
          </h2>
          <p className="mt-[16px] text-[20px] leading-[30px] text-[#4B5563] max-w-[720px] mx-auto">
            A seamless workflow that respects your clinical process
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Gradient connector line behind icons with extra top offset (mt-6 feel) */}
          {/* Use top-[144px] for slightly less space (mt-5 feel) if needed */}
          <div
            className="
              hidden lg:block absolute left-1/2 -translate-x-1/2
              top-[152px]
              w-full max-w-[920px] h-[2px] z-0
              bg-gradient-to-r from-[#DBEAFE] via-[#93C5FD] to-[#DBEAFE]
            "
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] lg:gap-[24px] relative z-[1]">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                {/* Number badge (unchanged position) */}
                <div
                  className="mx-auto mb-[24px] w-[28px] h-[28px] rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-[16px] font-semibold lg:mr-3"
                >
                  {step.id}
                </div>

                {/* Icon circle */}
                <div className="mx-auto mb-[36px] w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center border-5 border-[#BFDBFE] shadow-[0_4px_24px_0_rgba(59,130,246,0.15)]">
                  {step.icon}
                </div>

                <h3 className="text-[22px] leading-[28px] font-semibold text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-[12px] text-[16px] leading-[24px] text-[#4B5563] max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
