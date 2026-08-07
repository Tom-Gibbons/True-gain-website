const portalFeatures = [
  {
    title: "Personalised programme",
    subtitle: "",
    text: "Your training, progression and coaching notes in one place.",
    image: "/portal-programme.webp",
    icon: "programme",
  },
  {
    title: "Progress tracking",
    subtitle: "",
    text: "Track strength, recovery, mobility and long-term progress.",
    image: "/portal-progress.webp",
    icon: "progress",
  },
  {
    title: "Coach support",
    subtitle: "",
    text: "Check-ins, feedback and direct support between sessions.",
    image: "/portal-support.webp",
    icon: "support",
  },
];

function PortalIcon({ type }: { type: string }) {
  if (type === "progress") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18V6M4 18h16M7 15l4-4 3 2 5-6" />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8M9 2h6v4H9zM6 5h12a2 2 0 0 1 2 2v14H4V7a2 2 0 0 1 2-2Z" />
      <path d="M8 10h8M8 14h8M8 18h5" />
    </svg>
  );
}


function AccessIcon({ type }: { type: "phone" | "lock" | "graph" | "calendar" }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;

  if (type === "lock") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v2" />
      </svg>
    );
  }

  if (type === "graph") {
    return (
      <svg {...commonProps}>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
        <path d="M16 7h3v3" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 5h4M11 19h2" />
    </svg>
  );
}


export default function ClientPortalPreview() {
  return (
    <section className="section portalShowcase" id="client-portal">
      <div className="portalShowcaseInner">
        <div className="portalShowcaseHero">
          <div className="portalShowcaseCopy">
            <p className="eyebrow">Member portal</p>
            <h2>Your coaching.<br />One portal.</h2>
            <span className="portalGoldLine" aria-hidden="true" />
            <p className="portalLead">
              Everything you need to train, track progress and stay accountable—all in one place.
            </p>
          </div>

          <div className="portalDeviceStage" aria-label="Preview of the True Gain member portal">
            <div className="portalLaptop">
              <div className="portalLaptopScreen">
                <img src="/portal-dashboard-preview.webp" alt="True Gain member portal dashboard preview" />
              </div>
              <div className="portalLaptopBase" />
            </div>
            <div className="portalPhone">
              <img src="/portal-dashboard-preview.webp" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="portalFeaturesPanel">
          <div className="portalFeaturesHeading">
            <p className="eyebrow">Built for your results</p>
            <h3>Everything you need. All in one place.</h3>
            <p>Powerful features to help you train smarter and stay on track.</p>
          </div>

          <div className="portalFeatureCards">
            {portalFeatures.map((feature) => (
              <article className="portalFeatureCard" key={feature.title}>
                <div className={`portalFeatureImage portalFeatureImage--${feature.icon}`}>
                  <img src={feature.image} alt={`${feature.title} preview`} />
                </div>
                <span className="portalFeatureIcon"><PortalIcon type={feature.icon} /></span>
                <h4>{feature.title}</h4>
                {feature.subtitle && <p className="portalFeatureSubtitle">{feature.subtitle}</p>}
                <span className="portalFeatureDivider" aria-hidden="true" />
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <div className="portalAccessPanel">
            <div className="portalAccessVisual">
              <div className="portalAccessLaptop">
                <img src="/portal-dashboard-preview.webp" alt="Member portal shown on a laptop" />
              </div>
              <div className="portalAccessPhone">
                <img src="/portal-dashboard-preview.webp" alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="portalAccessCopy">
              <p className="eyebrow">All in one place</p>
              <h3>Access your portal<br />anytime, anywhere.</h3>
              <div className="portalAccessBenefits">
                <div><span><AccessIcon type="phone" /></span><p>Mobile<br />friendly</p></div>
                <div><span><AccessIcon type="lock" /></span><p>Secure<br />& private</p></div>
                <div><span><AccessIcon type="graph" /></span><p>Upload & track<br />your progress</p></div>
                <div><span><AccessIcon type="calendar" /></span><p>Manage sessions<br />& appointments</p></div>
              </div>
            </div>
          </div>

          <p className="portalIncludedLine">Included with every Complete Coaching membership.</p>
        </div>
      </div>
    </section>
  );
}
