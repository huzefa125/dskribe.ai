// src/components/SiteFooter.jsx
export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0F172A] text-white">
      {/* top gradient strip */}
      

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand/Blurb */}
          <div>
            <div className="text-xl font-semibold">dSkribe.ai</div>
            <p className="mt-2 text-sm text-gray-300">AI for Better Care</p>
            <p className="mt-4 max-w-md text-sm text-gray-400">
              Empowering therapists with intelligent documentation that preserves
              the human connection at the heart of healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-3 text-sm">
              {["Product", "Careers", "Blog", "Terms", "Privacy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-300 transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-sm font-semibold">Get in Touch</div>
            <div className="mt-3 text-xs uppercase text-gray-400">Team:</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="mailto:nelanchelvan@dSkribe.ai" className="text-gray-300 hover:text-white">
                  nelanchelvan@dSkribe.ai
                </a>
              </li>
              <li>
                <a href="mailto:hsingh@dSkribe.ai" className="text-gray-300 hover:text-white">
                  hsingh@dSkribe.ai
                </a>
              </li>
              <li>
                <a href="mailto:imusunuri@dSkribe.ai" className="text-gray-300 hover:text-white">
                  imusunuri@dSkribe.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* bottom row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-gray-400 md:flex-row md:items-center">
          <div>© 2025 dSkribe.ai. All rights reserved.</div>
          <div>HIPAA Compliant • SOC 2 Type II • ISO 27001</div>
        </div>
      </div>
    </footer>
  );
}
