import React from "react";

const Card = ({ bgColor, icon, title, description }) => {
  return (
    <div
      className={`${bgColor} rounded-3xl shadow-lg p-6 h-72 flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-snug">{description}</p>
    </div>
  );
};

const Designed = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for where it hurts most
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Built for the real people doing the hardest work in healthcare
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            bgColor="bg-[#CFE8FF]"
            icon={
              <div className="flex items-center space-x-1">
                <div className="w-2.5 h-6 bg-red-500 rounded-sm"></div>
                <div className="w-2.5 h-5 bg-red-400 rounded-sm"></div>
                <div className="w-2.5 h-4 bg-red-300 rounded-sm"></div>
              </div>
            }
            title="County Clinic Therapist"
            description="Overwhelmed by volume, overburdened by audits, struggling to maintain quality care while meeting productivity demands."
          />

          <Card
            bgColor="bg-[#CFFFE0]"
            icon={
              <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            }
            title="Private Practice Owner"
            description="Managing quality + compliance solo, balancing clinical excellence with business sustainability and regulatory requirements."
          />

          <Card
            bgColor="bg-[#E8D9FF]"
            icon={
              <div className="w-6 h-6 bg-white border border-gray-200 rounded-lg p-0.5">
                <div className="w-full h-1.5 bg-purple-500 rounded-sm mb-0.5"></div>
                <div className="w-3/4 h-1 bg-gray-300 rounded-sm"></div>
              </div>
            }
            title="Billing/Admin Staff"
            description="Ensuring codes match notes, reducing insurance rejections, and maintaining the financial health of the practice."
          />

          <Card
            bgColor="bg-[#FFE4C7]"
            icon={
              <div className="flex items-center space-x-0.5">
                <div className="w-3 h-10 bg-white border border-gray-200 rounded-sm"></div>
                <div className="w-3 h-10 bg-white border border-gray-200 rounded-sm"></div>
              </div>
            }
            title="Clinical Director"
            description="Wants scalable oversight, not more meetings. Seeking efficient ways to ensure quality across multiple providers."
          />
        </div>
      </div>
    </div>
  );
};

export default Designed;
