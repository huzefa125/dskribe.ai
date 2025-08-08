import React from 'react';

const Designed = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Designed for where it hurts most
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built for the real people doing the hardest work in healthcare
          </p>
        </div>

        {/* Four Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: County Clinic Therapist */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:scale-105 hover:border-blue-200 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-8 bg-red-500 rounded-sm"></div>
                <div className="w-3 h-6 bg-red-400 rounded-sm"></div>
                <div className="w-3 h-4 bg-red-300 rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
              County Clinic Therapist
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Overwhelmed by volume, overburdened by audits, struggling to maintain quality care while meeting productivity demands.
            </p>
          </div>

          {/* Card 2: Private Practice Owner */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:scale-105 hover:border-green-200 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
              <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-900 transition-colors duration-300">
              Private Practice Owner
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Managing quality + compliance solo, balancing clinical excellence with business sustainability and regulatory requirements.
            </p>
          </div>

          {/* Card 3: Billing/Admin Staff */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:scale-105 hover:border-purple-200 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg p-1">
                <div className="w-full h-2 bg-purple-500 rounded-sm mb-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-900 transition-colors duration-300">
              Billing/Admin Staff
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Ensuring codes match notes, reducing insurance rejections, and maintaining the financial health of the practice.
            </p>
          </div>

          {/* Card 4: Clinical Director */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:scale-105 hover:border-orange-200 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-6 bg-white border border-gray-200 rounded-sm"></div>
                <div className="w-4 h-6 bg-white border border-gray-200 rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-900 transition-colors duration-300">
              Clinical Director
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Wants scalable oversight, not more meetings. Seeking efficient ways to ensure quality across multiple providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designed;
