// src/components/TrialCTA.jsx
export default function TrialCTA() {
  return (
    <section
      className="mt-10 w-full"
      style={{
        background:
          "linear-gradient(135deg, #6C5CE7 0%, #2F6BFF 50%, #9B6CFF 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
        <h3 className="text-3xl font-semibold md:text-4xl">
          Start your trial. Reclaim your time.
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          No setup. No contracts. Just clarity.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2F6BFF] shadow-sm hover:bg-white/90">
            Join Waitlist
          </button>
          <button className="rounded-full bg-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/40">
            Coming Soon
          </button>
        </div>

        <p className="mt-3 text-xs text-white/80">
          Reserve your spot for early access
        </p>
      </div>
    </section>
  );
}
