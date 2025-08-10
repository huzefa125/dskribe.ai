import React, { useState } from "react";

const InfoBanner = () => (
  <div className="bg-indigo-50 text-indigo-700 p-3 rounded-lg text-sm font-medium">
    Please fill out the form below and we’ll get back to you as soon as possible.
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with your API call)
    setTimeout(() => {
      alert(`Thank you, ${form.name}! Your message has been sent.`);
      setLoading(false);
      setForm({
        name: "",
        email: "",
        role: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <header className="text-center mt-6 mb-10">
        <h1 className="text-4xl font-semibold text-slate-900">Let&apos;s Connect</h1>
        <p className="mt-3 text-slate-600">
          Have questions, feedback, or want to join our clinical network? Reach out below.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] p-5 sm:p-6">
            <InfoBanner />
            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Enter your full name"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Enter your email address"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">I am a...</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select your role</option>
                  <option>Clinician</option>
                  <option>Product Partner</option>
                  <option>EHR Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-medium hover:bg-indigo-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contacts */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] p-5 sm:p-6">
            <h3 className="text-slate-900 font-semibold text-lg">Other Ways to Reach Us</h3>
            <p className="mt-2 text-sm text-slate-700">Team Contacts:</p>
            <ul className="mt-2 space-y-1 text-indigo-600 text-sm">
              <li>
                <a href="mailto:nelanchelvan@dSkribe.ai" className="hover:underline">
                  nelanchelvan@dSkribe.ai
                </a>
              </li>
              <li>
                <a href="mailto:hsingh@dSkribe.ai" className="hover:underline">
                  hsingh@dSkribe.ai
                </a>
              </li>
              <li>
                <a href="mailto:imusunuri@dSkribe.ai" className="hover:underline">
                  imusunuri@dSkribe.ai
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-indigo-50 text-slate-700 text-sm">
              We’re currently recruiting clinicians, product testers, and EHR partners. If you’re interested, mention it in your message or reach out directly!
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] p-5 sm:p-6">
            <h3 className="text-slate-900 font-semibold text-lg">Where We Work From</h3>
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <div className="text-indigo-600 text-2xl">📍</div>
              <p className="mt-2 text-slate-700">Remote-first – Based in California</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient promo band */}
      <section className="mt-10">
        <div className="rounded-3xl px-6 py-10 text-center text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow-[0_8px_32px_rgba(79,70,229,0.35)]">
          <h4 className="text-xl sm:text-2xl font-semibold">Want to see dSkribe in action? Try it free.</h4>
          <button
            type="button"
            disabled
            className="mt-4 inline-flex items-center rounded-full bg-white/30 text-white backdrop-blur px-4 py-2 text-sm font-medium cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </section>

      <div className="h-10" />
    </>
  );
};

export default Contact;
