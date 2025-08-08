import React from 'react';

const Clinical = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beyond Documentation: Active Clinical Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            dSkribe.ai doesn't just document—it actively supports your clinical practice with intelligent monitoring, 
            communication tools, and preventative care measures that work around the clock.
          </p>
        </div>

        {/* Pattern Recognition Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧠</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Pattern Recognition & Symptom Tracking</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI identifies subtle behavioral patterns and symptom changes that might go unnoticed, 
              providing deeper insights into client progress between sessions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Detects emerging patterns in client responses</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Tracks symptom progression over time</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Identifies behavioral changes behind closed doors</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Provides evidence-based insights for treatment planning</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Client Progress Insights</h3>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Live Analysis</span>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <div className="text-sm font-medium text-purple-700">• Pattern Detected</div>
                <div className="text-gray-800 mt-1">Anxiety scores decreasing 23% over 3 weeks</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <div className="text-sm font-medium text-yellow-700">• Behavioral Insight</div>
                <div className="text-gray-800 mt-1">Sleep quality improving on weekends</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Communication Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💬</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Enhanced Patient-Provider Communication</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bridge the gap between sessions with secure, AI-facilitated communication that maintains 
              therapeutic relationships and ensures continuity of care.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Secure messaging platform integrated with clinical notes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">AI-suggested check-in prompts based on treatment goals</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Real-time therapeutic insights and recommendations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Streamlined care coordination across providers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Secure Messages</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">2 New</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">🤖</span>
                  <span className="text-sm font-medium text-gray-700">AI Check-in Suggestion</span>
                </div>
                <div className="text-gray-800 italic">"How are you practicing the coping strategies we discussed?"</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Client Response</div>
                <div className="text-gray-800">"Much better this week, using breathing exercises daily."</div>
              </div>
            </div>
          </div>
        </div>

        {/* Suicide Prevention Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🛡️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Suicide Prevention & Automated Check-ins</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Proactive safety monitoring through intelligent automated check-ins and risk assessment, 
              helping prevent crises before they escalate.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Automated risk assessment and early warning systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Scheduled wellness check-ins with intelligent escalation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Crisis intervention protocols with immediate alerts</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Progress tracking for safety planning and coping strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Safety Dashboard</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">All Safe</span>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-sm font-medium text-green-800 mb-1">Wellness Check</div>
                <div className="text-gray-800">Daily check-in completed - positive mood indicators</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-sm font-medium text-blue-800 mb-1">Coping Strategy</div>
                <div className="text-gray-800">Safety plan accessed 3x this week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinical;
