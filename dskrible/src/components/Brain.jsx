import React from 'react';

const Brain = () => {
  return (
    <>
      <section className="py-16 px-8"
        style={{
          background: 'linear-gradient(135deg, #F2F8FF 20%, #FFFFFF 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto lg:ml-20 lg:mr-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-gray-700 mb-4">
              Meet your third brain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI that thinks alongside you, not instead of you
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Auto-drafted Notes */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Auto-drafted Notes
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Transcribe, summarize, and structure therapy sessions automatically while preserving the therapeutic relationship and clinical nuance.
              </p>
            </div>

            {/* Feature 2 - Coding-Aware Summaries */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Coding-Aware Summaries
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Notes aligned with CPT billing logic and internal audit safeguards, reducing compliance anxiety while maintaining clinical authenticity.
              </p>
            </div>

            {/* Feature 3 - Insight Flags */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-yellow-600 group-hover:text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                Insight Flags
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Pull thematic insights across sessions to reveal deeper patterns, helping therapists track progress and identify breakthrough moments.
              </p>
            </div>

            {/* Feature 4 - Referral Integration */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-yellow-600 group-hover:text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                Referral Integration
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Automatically suggest PsychologyToday, Rula, or internal networks when care coordination becomes necessary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brain;
