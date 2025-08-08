import React from 'react';

const Clinical = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-medium text-gray-900">Pattern Recognition & Symptom Tracking</h2>
              </div>
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
          
          <div className="relative w-full">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-violet-400/20 via-fuchsia-400/20 to-blue-400/20 blur-2xl -z-10"></div>
            <div className="rounded-3xl bg-gradient-to-br from-violet-50 via-fuchsia-50 to-blue-50 p-1 shadow-xl">
              <div className="rounded-2xl bg-white p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Client Progress Insights</h3>
                  <span className="inline-flex items-center bg-purple-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">Live Analysis</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
                    <div className="flex items-center text-sm font-medium text-purple-700 mb-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-2 flex-shrink-0"></span>
                      Pattern Detected
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">Anxiety scores decreasing 23% over 3 weeks</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                    <div className="flex items-center text-sm font-medium text-amber-700 mb-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 flex-shrink-0"></span>
                      Behavioral Insight
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">Sleep quality improving on weekends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Communication Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative w-full">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-2xl -z-10"></div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-1 shadow-xl">
              <div className="rounded-2xl bg-white p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Secure Messages</h3>
                  <span className="inline-flex items-center bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">2 New</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">🤖</span>
                      <span className="text-sm font-medium text-gray-700">AI Check-in Suggestion</span>
                    </div>
                    <div className="text-gray-800 italic text-sm">"How are you practicing the coping strategies we discussed?"</div>
                  </div>
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Client Response</div>
                    <div className="text-gray-800 text-sm">"Much better this week, using breathing exercises daily."</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          <div className="relative w-full">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-2xl -z-10"></div>
            <div className="rounded-3xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-1 shadow-xl">
              <div className="rounded-2xl bg-white p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Safety Dashboard</h3>
                  <span className="inline-flex items-center bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">All Safe</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                    <div className="flex items-center text-sm font-medium text-green-700 mb-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 flex-shrink-0"></span>
                      Wellness Check
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">Daily check-in completed - positive mood indicators</p>
                  </div>
                  <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
                    <div className="flex items-center text-sm font-medium text-blue-700 mb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 flex-shrink-0"></span>
                      Coping Strategy
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">Safety plan accessed 3x this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Footer Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="bg-gradient-to-r from-purple-900 to-blue-800 rounded-3xl p-4 shadow-2xl">
          <div className="text-center">
            <h2 className="text-xl md:text-xl font-bold text-white mb-4">
              Ready to Transform Your Clinical Practice?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of therapy with AI that truly understands clinical care.
            </p>
            <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Coming Soon - Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinical;
