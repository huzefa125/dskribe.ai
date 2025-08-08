import React from 'react';

const Problem = () => {
  return (
    <section className="py-16 px-8" style={{backgroundColor: '#F9FAFB'}}>
      <div className="max-w-7xl mx-auto lg:ml-20 lg:mr-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Real Problem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mental health care is deeply human work trapped in inhuman systems
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - EMRs */}
          <div className="bg-white rounded-2xl p-6 relative shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* Warning Icon */}
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              EMRs were built for billing, not for therapy.
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Electronic health records prioritize insurance requirements over clinical insight, forcing therapists into rigid templates that don't capture the nuance of human connection and healing.
            </p>
          </div>

          {/* Card 2 - Therapists Burnout */}
          <div className="bg-white rounded-2xl p-6 relative shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* Warning Icon */}
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Therapists are burning out on documentation.
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Hours spent on notes after sessions drain the energy meant for patients. Documentation fatigue kills clinical creativity and steals time from what matters most - providing care.
            </p>
          </div>

          {/* Card 3 - Audits */}
          <div className="bg-white rounded-2xl p-6 relative shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* Warning Icon */}
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Audits punish human errors in subjective work.
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Insurance audits and compliance reviews treat therapy like a mechanical process, creating fear around natural human documentation patterns and subjective clinical judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
