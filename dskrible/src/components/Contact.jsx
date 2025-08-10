import React, { useState } from "react";

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);

const BulbBadge = () => (
  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(`Thank you, ${form.name || "there"}! Your message has been sent.`);
      setLoading(false);
      setForm({ name: "", email: "", role: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">dSkribe.ai</div>
          <div className="flex items-center space-x-5">
            <a href="/" className="text-gray-600 hover:text-gray-800 font-medium">
              Back to Home
            </a>
            <button className="text-gray-600 hover:text-gray-800" aria-label="Share">
              <MailIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Let&apos;s Connect</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or want to join our clinical network? Reach out below.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>

            {/* Info banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <BulbBadge />
                </div>
                <p className="text-sm text-blue-800">
                  Joining our waitlist? Select &apos;Join Waitlist&apos; below and tell us about your practice. We&apos;ll
                  notify you when early access opens!
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={onChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select your role</option>
                  <option value="clinician">Clinician</option>
                  <option value="product-partner">Product Partner</option>
                  <option value="ehr-partner">EHR Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Other Ways to Reach Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Ways to Reach Us</h2>

              <div className="space-y-1 mb-5">
                <p className="text-sm font-medium text-gray-700">Team Contacts:</p>
                <a className="block text-blue-600 hover:underline break-all" href="mailto:nelanchelvan@dSkribe.ai">
                  nelanchelvan@dSkribe.ai
                </a>
                <a className="block text-blue-600 hover:underline break-all" href="mailto:hsingh@dSkribe.ai">
                  hsingh@dSkribe.ai
                </a>
                <a className="block text-blue-600 hover:underline break-all" href="mailto:imusunuri@dSkribe.ai">
                  imusunuri@dSkribe.ai
                </a>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  We&apos;re currently recruiting clinicians, product testers, and EHR partners. If you&apos;re
                  interested, mention it in your message or reach out directly!
                </p>
              </div>
            </div>

            {/* Where We Work From */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Where We Work From</h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-blue-600 text-3xl mb-3">📍</div>
                <p className="text-gray-700 font-medium">Remote-first – Based in California</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Want to see dSkribe in action? Try it free.</h3>
            <button
              disabled
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
