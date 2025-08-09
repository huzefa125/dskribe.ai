// src/components/ClinicianHero.jsx
export default function ClinicianHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F5F8FF] to-white">
      {/* Top nav placeholder (brand + nav) */}
      

      {/* Body */}
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-10 text-center md:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Clinician Voices Coming Soon
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 md:mt-4 md:text-lg">
          We’re actively recruiting therapists, counselors, and mental health professionals to shape the
          future of dSkribe.ai.
        </p>

        {/* Card */}
        <div className="mt-10 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mx-auto max-w-xl text-gray-700">
            Want to help build the AI you wish you had? Reach out below to join our
            clinical advisor network.
          </p>

          <div className="mt-6">
            <button
              type="button"
              className="mx-auto inline-flex rounded-full bg-[#2F6BFF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2557cc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]/50"
            >
              Become an Early Contributor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
