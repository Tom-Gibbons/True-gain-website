"use client";

import { useState } from "react";

const features = [
  ["Exercise programmes", "Weekly sessions, instructions, sets, reps and coaching notes."],
  ["Progress tracking", "Strength, movement, habits and milestone tracking."],
  ["Nutrition guidance", "Practical targets and habits built around the individual."],
  ["Check-ins", "Recovery, energy, sleep and readiness feedback."],
  ["File uploads", "Private files, photographs and coaching resources."],
  ["Video analysis", "Exercise uploads with detailed coaching feedback."],
];

export default function ClientPortalPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="section clientPortalPremiumSection" id="client-portal">
      <div className="clientPortalPremiumHero">
        <div>
          <p className="eyebrow">Client portal</p>
          <h2>Everything you need. One secure place.</h2>
          <p>
            A private digital coaching space for active True Gain members. Programmes,
            progress, nutrition guidance, check-ins, uploads and technique feedback will
            sit alongside the in-person coaching experience.
          </p>
        </div>
        <div className="clientPortalLaunchCard">
          <span>Future development</span>
          <strong>Launching later</strong>
          <p>Planned as part of the long-term premium membership experience.</p>
        </div>
      </div>

      <div className="clientPortalAppShell">
        <aside className="clientPortalAppNav">
          <div className="clientPortalBrandMark">
            <span>TG</span>
            <div><strong>True Gain</strong><small>Member portal</small></div>
          </div>
          <div className="clientPortalNavButtons">
            {features.map(([label], index) => (
              <button
                key={label}
                type="button"
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
              </button>
            ))}
          </div>
          <div className="clientPortalMemberCard">
            <span>Active membership</span>
            <strong>Recover</strong>
            <small>Private coaching access</small>
          </div>
        </aside>

        <div className="clientPortalDashboard">
          <div className="clientPortalDashboardTopbar">
            <div><span>Welcome back</span><strong>Member dashboard</strong></div>
            <a className="clientPortalLoginButton" href="/member-login">
              Member Login
            </a>
            <div className="clientPortalAvatar">TG</div>
          </div>

          <div className="clientPortalDashboardBody">
            <div className="clientPortalPrimaryPanel">
              <p className="planStrap">Member feature</p>
              <h3>{features[active][0]}</h3>
              <p>{features[active][1]}</p>

              <div className="clientPortalStats">
                <article><strong>4</strong><span>Sessions</span></article>
                <article><strong>82%</strong><span>Complete</span></article>
                <article><strong>2</strong><span>Coach updates</span></article>
              </div>

              <div className="clientPortalAnalytics">
                <div className="clientPortalChartCard">
                  <div className="clientPortalChartHeading">
                    <div>
                      <span>Training progress</span>
                      <strong>9-week trend</strong>
                    </div>
                    <span className="clientPortalTrendBadge">+18%</span>
                  </div>

                  <div className="clientPortalCombinedChart" aria-label="Animated training progress chart">
                    <div className="clientPortalChartGrid" aria-hidden="true" />

                    <div className="clientPortalBars" aria-hidden="true">
                      {[34,48,43,61,72,67,84].map((height, i) => (
                        <span
                          key={i}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 90}ms`,
                          }}
                        />
                      ))}
                    </div>

                    <svg
                      className="clientPortalLineChart"
                      viewBox="0 0 700 220"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="tgLineFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(229,189,114,.28)" />
                          <stop offset="100%" stopColor="rgba(229,189,114,0)" />
                        </linearGradient>
                        <filter id="tgLineGlow">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <path
                        className="clientPortalLineArea"
                        d="M20 168 L128 145 L236 154 L344 112 L452 90 L560 100 L680 55 L680 220 L20 220 Z"
                      />
                      <path
                        className="clientPortalLinePath"
                        d="M20 168 L128 145 L236 154 L344 112 L452 90 L560 100 L680 55"
                        pathLength="1"
                      />
                      {[["20","168"],["128","145"],["236","154"],["344","112"],["452","90"],["560","100"],["680","55"]].map(([cx, cy], i) => (
                        <circle
                          key={i}
                          className="clientPortalLinePoint"
                          cx={cx}
                          cy={cy}
                          r="6"
                          style={{ animationDelay: `${650 + i * 85}ms` }}
                        />
                      ))}
                    </svg>

                    <div className="clientPortalChartLabels" aria-hidden="true">
                      <span>W1</span>
                      <span>W2</span>
                      <span>W3</span>
                      <span>W4</span>
                      <span>W5</span>
                      <span>W6</span>
                      <span>W7</span>
                    </div>
                  </div>
                </div>

                <div className="clientPortalDonutCard">
                  <div>
                    <span>Weekly completion</span>
                    <strong>Consistency</strong>
                  </div>

                  <div className="clientPortalDonut" aria-label="82 percent weekly completion">
                    <svg viewBox="0 0 120 120" aria-hidden="true">
                      <circle className="clientPortalDonutTrack" cx="60" cy="60" r="48" />
                      <circle className="clientPortalDonutValue" cx="60" cy="60" r="48" />
                    </svg>
                    <div>
                      <strong>82%</strong>
                      <span>Complete</span>
                    </div>
                  </div>

                  <div className="clientPortalDonutLegend">
                    <span><i /> Completed sessions</span>
                    <span><i /> Remaining work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="clientPortalSidePanels">
              <article><span>Next action</span><strong>Complete weekly check-in</strong><p>Recovery, sleep, energy and readiness.</p></article>
              <article><span>Coach feedback</span><strong>2 new updates</strong><p>Programme notes and video feedback.</p></article>
              <article><span>Secure uploads</span><strong>Files and exercise videos</strong><p>Protected behind member login.</p></article>
            </div>
          </div>
        </div>
      </div>

      <div className="clientPortalFeatureGrid">
        {features.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="clientPortalPremiumFooter">
        <div>
          <p className="eyebrow">Included with memberships</p>
          <h3>Coaching that continues between sessions.</h3>
        </div>
        <span>Secure member login planned for a later development phase.</span>
      </div>
    </section>
  );
}
