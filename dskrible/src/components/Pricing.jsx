// src/components/Pricing.jsx
const features = {
  starter: [
    "Up to 50 sessions per month",
    "Auto-drafted notes",
    "Basic coding suggestions",
    "Email support",
    "EMR integration (1 system)",
  ],
  team: [
    "Unlimited sessions",
    "Advanced insight flagging",
    "Team analytics dashboard",
    "Priority support",
    "Multiple EMR integrations",
    "Compliance reporting",
  ],
  enterprise: [
    "Everything in Team",
    "Custom integrations",
    "Dedicated success manager",
    "Advanced security & compliance",
    "Training & onboarding",
    "SLA guarantee",
  ],
};

function PlanCard({
  title,
  subtitle,
  priceLabel,
  ctaLabel,
  features,
  highlight = false,
  darkCTA = false,
}) {
  return (
    <div
      className={[
        "relative flex w-full max-w-sm flex-col rounded-2xl border bg-white px-8 pb-8 pt-10 shadow-sm",
        highlight ? "border-[#2F6BFF] ring-1 ring-[#2F6BFF]/30" : "border-gray-200",
      ].join(" ")}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2F6BFF] px-3 py-1 text-xs font-semibold text-white shadow">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>

      <div className="mt-5 text-2xl font-semibold text-gray-900">{priceLabel}</div>

      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 13.5 3.75 9.75l1.5-1.5L7.5 10.5l7.25-7.25 1.5 1.5L7.5 13.5Z"
                fill="#22C55E"
              />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={[
          "mt-8 w-full rounded-full px-4 py-3 text-sm font-semibold shadow-sm transition",
          darkCTA
            ? "bg-black text-white hover:bg-gray-900"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200",
          highlight ? "bg-[#E8F0FF] text-[#2F6BFF] hover:bg-[#dbe6ff]" : "",
        ].join(" ")}
        disabled={!darkCTA && !highlight}
      >
        {ctaLabel}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-14 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Flexible plans for every setting
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Choose the plan that fits your practice size and needs
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <PlanCard
          title="Starter"
          subtitle="For individual therapists"
          priceLabel="Affordable"
          ctaLabel="Coming Soon"
          features={features.starter}
        />

        <PlanCard
          title="Team"
          subtitle="For clinics and group practices"
          priceLabel="Scalable"
          ctaLabel="Coming Soon"
          features={features.team}
          highlight
        />

        <PlanCard
          title="Enterprise"
          subtitle="For health systems"
          priceLabel="Custom"
          ctaLabel="Contact Sales"
          features={features.enterprise}
          darkCTA
        />
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-6 text-center text-sm text-gray-500">
        Join the waitlist to be notified when dSkribe.ai launches.
      </p>
    </section>
  );
}
