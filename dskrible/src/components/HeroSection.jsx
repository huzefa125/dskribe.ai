import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16"
      style={{
        background: 'linear-gradient(135deg, #F2F8FF 20%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:ml-20 lg:mr-20 lg:mt-25">

        {/* Left Content */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Capture what matters. Forget what doesn't.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            A third brain for therapists — AI-powered documentation, built for awareness, not just compliance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-full transition-colors duration-200"
            >
              Join Waitlist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto font-medium px-8 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200 text-blue-300"
            >
              Coming Soon
            </motion.button>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Be the first to experience AI-powered therapy documentation
          </motion.p>
        </motion.div>

        {/* Right Content - Card */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="rounded-3xl p-4 sm:p-6 shadow-xl mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            style={{ backgroundColor: '#E2EAFF' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 w-full max-w-sm sm:max-w-md lg:max-w-lg">

                {/* Session Header */}
                <motion.div
                  className="flex items-center space-x-3 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                    Dr
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">Session in progress...</h3>
                    <p className="text-xs text-gray-500 truncate">Dr. Smith & Patient</p>
                  </div>
                </motion.div>

                {/* AI Insight */}
                <motion.div
                  className="bg-blue-50 rounded-lg p-2 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-xs font-medium text-blue-600 flex-shrink-0">AI Insight:</span>
                    <span className="text-xs text-gray-700 leading-relaxed">Patient showing improved coping strategies</span>
                  </div>
                </motion.div>

                {/* Billing Code */}
                <motion.div
                  className="bg-green-50 rounded-lg p-2 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-xs font-medium text-green-700 flex-shrink-0">Billing Code:</span>
                    <span className="text-xs text-gray-700 leading-relaxed">90834 - Psychotherapy (45 min)</span>
                  </div>
                </motion.div>

                {/* Pattern */}
                <motion.div
                  className="bg-blue-50 rounded-lg p-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-xs font-medium text-blue-700 flex-shrink-0">Pattern:</span>
                    <span className="text-xs text-gray-700 leading-relaxed">Anxiety levels decreasing over 3 sessions</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
