const portalFeatures = [
  {
    title: "Personalised programme",
    subtitle: "A training plan built specifically for your goals.",
    text: "Follow your personalised workouts with sets, reps, coaching notes and progression built into every session.",
    image: "/portal-programme.webp",
    icon: "programme",
  },
  {
    title: "Progress tracking",
    subtitle: "See your improvements over time.",
    text: "Monitor strength, recovery, mobility and overall progress so you always know how far you have come.",
    image: "/portal-progress.webp",
    icon: "progress",
  },
  {
    title: "Coach support",
    subtitle: "Stay connected between sessions.",
    text: "Complete weekly check-ins, message your coach, upload videos for feedback and manage appointments from one place.",
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

const benefits = [
  "Access anywhere, anytime",
  "Built for results and accountability",
  "Direct communication with your coach",
  "Secure, private and personalised",
];

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
            <p className="portalIntro">
              Designed to keep you focused, informed and supported every step of the way.
            </p>
            <ul className="portalBenefitList">
              {benefits.map((benefit) => (
                <li key={benefit}><span>✓</span>{benefit}</li>
              ))}
            </ul>
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
                <p className="portalFeatureSubtitle">{feature.subtitle}</p>
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
                <div><span>▣</span><p>Mobile<br />friendly</p></div>
                <div><span>⌑</span><p>Secure<br />& private</p></div>
                <div><span>⇧</span><p>Upload & track<br />your progress</p></div>
                <div><span>□</span><p>Manage sessions<br />& appointments</p></div>
              </div>
            </div>
          </div>

          <p className="portalIncludedLine">Included with every Complete Coaching membership.</p>
        </div>
      </div>
    </section>
  );
}
