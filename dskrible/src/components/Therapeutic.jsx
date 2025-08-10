import React from 'react';
import { motion } from 'framer-motion';

const settings = [
  {
    id: 'schools',
    iconBg: '#10B981',
    title: 'School-Based Therapy',
    description:
      'Supporting K-12 therapists with IEP documentation, behavioral intervention tracking, and crisis response notes.',
    bullets: [
      'IEP-compliant documentation',
      'Behavioral data tracking',
      'Parent communication logs',
    ],
  },
  {
    id: 'college',
    iconBg: '#6366F1',
    title: 'College Counseling Centers',
    description:
      'Streamlining intake processes, crisis interventions, and referral documentation for campus mental health.',
    bullets: [
      'Crisis assessment protocols',
      'Referral tracking',
      'Group therapy notes',
    ],
  },
  {
    id: 'private',
    iconBg: '#A855F7',
    title: 'Private Practice',
    description:
      'Enhancing solo and group practices with efficient documentation, billing support, and treatment planning.',
    bullets: [
      'Treatment plan automation',
      'Progress note generation',
      'Billing code suggestions',
    ],
  },
  {
    id: 'community',
    iconBg: '#14B8A6',
    title: 'Community Mental Health',
    description:
      'Supporting high-volume community centers with standardized documentation and outcome tracking.',
    bullets: [
      'Outcome measurement',
      'Case management notes',
      'Team coordination tools',
    ],
  },
  {
    id: 'telehealth',
    iconBg: '#F59E0B',
    title: 'Telehealth Providers',
    description:
      'Supporting clinical training programs with structured supervision notes and learning objectives.',
    bullets: [
      'Virtual session notes',
      'Technology barrier tracking',
      'Remote assessment tools',
    ],
  },
  {
    id: 'training',
    iconBg: '#EF4444',
    title: 'Training & Supervision',
    description: 'Structured supervision notes and competency tracking.',
    bullets: [
      'Supervision documentation',
      'Competency tracking',
      'Learning outcome notes',
    ],
  },
];

export default function TherapeuticSettings() {
  return (
    <section className="bg-white">
      {/* Top: Title */}
      <div className="px-[20px] md:px-[32px]">
        <div className="max-w-[1120px] mx-auto pt-[56px] md:pt-[72px]">
          {/* Logo */}
          <div className="flex justify-center mb-[16px]">
            <img
              src="/logo.svg"
              alt="dSkribe.ai"
              className="h-[28px] md:h-[34px] w-auto"
            />
          </div>

          <h2 className="text-center text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-bold text-[#0F172A]">
            Therapeutic Settings We Serve
          </h2>
          <p className="mt-[12px] md:mt-[14px] text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#475569] max-w-[760px] mx-auto">
            dSkribe.ai adapts to a unique practice environment—schools, <br /> colleges, private practice, or community settings.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="px-[20px] md:px-[32px] pb-[48px] md:pb-[64px]">
        <div className="max-w-[1120px] mx-auto mt-[28px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px]">
          {settings.map((s, idx) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
              className="relative rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_6px_18px_rgba(2,6,23,0.05)] p-[20px] md:p-[22px] transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center"
                style={{ background: s.iconBg }}
              >
                <span className="w-[20px] h-[20px] rounded-[5px] bg-white/90" />
              </div>

              {/* Title */}
              <h3 className="mt-[14px] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-semibold text-[#0F172A]">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-[6px] text-[14px] md:text-[15px] leading-[22px] text-[#64748B]">
                {s.description}
              </p>

              {/* Bullets */}
              <ul className="mt-[10px] space-y-[8px] text-[14px] md:text-[15px] leading-[22px] text-[#475569]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-[8px]">
                    <span className="mt-[6px] inline-block w-[6px] h-[6px] rounded-full bg-[#3B82F6]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="px-[20px] md:px-[32px]">
        <div className="max-w-[1120px] mx-auto">
          <div className="rounded-[20px] bg-[#6D28D9] px-[20px] md:px-[40px] py-[40px] md:py-[48px] flex flex-col items-center text-center mb-[32px]">
            <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-[10px]">
              Don't see your setting?
            </h3>
            <p className="text-white/90 text-[12px] md:text-[15px] mb-[24px] max-w-[600px] flex-nowrap">
              We're actively expanding to support more therapeutic contexts. Share your needs with us.
            </p>
            <div className="flex flex-col md:flex-row gap-[14px] justify-center">
              <button className="h-[44px] px-[24px] rounded-[10px] bg-white text-[#1E293B] text-[15px] font-semibold shadow transition hover:bg-gray-100">
                Request Custom Solutions
              </button>
              <button className="h-[44px] px-[24px] rounded-[10px] border border-white text-white text-[15px] font-semibold bg-transparent transition hover:bg-white/10">
                Join Clinical Advisory Board
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence + HIPAA tiles */}
      <div className="mt-[18px] grid grid-cols-1 md:grid-cols-2 gap-[14px] lg:mr-25 lg:ml-25">
        <div className="rounded-[12px] border border-[#E2E8F0] p-[16px] md:p-[18px] bg-white">
          <h4 className="text-[#0F172A] text-[16px] md:text-[17px] font-semibold">
            Evidence-Based Documentation
          </h4>
          <p className="mt-[6px] text-[#475569] text-[14px] leading-[22px]">
            Templates and suggestions grounded in current best practices and regulatory requirements for each setting.
          </p>
        </div>
        <div className="rounded-[12px] border border-[#E2E8F0] p-[16px] md:p-[18px] bg-white">
          <h4 className="text-[#0F172A] text-[16px] md:text-[17px] font-semibold">
            HIPAA-Compliant by Design
          </h4>
          <p className="mt-[6px] text-[#475569] text-[14px] leading-[22px]">
            Privacy and security at the core, ensuring your documentation meets standards across settings.
          </p>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-[40px] md:h-[56px]" />
    </section>
  );
}
