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

                  <div className="clientPortalCombinedChart" aria-label="Animated nine-week training progress chart">
                    <div className="clientPortalChartGrid" aria-hidden="true" />

                    <div className="clientPortalBars" aria-hidden="true">
                      {[18,34,29,55,46,72,61,82,74].map((height, i) => (
                        <span
                          key={i}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 110}ms`,
                          }}
                        />
                      ))}
                    </div>

                    <svg
                      className="clientPortalLineChart"
                      viewBox="0 0 900 220"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="tgLineFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(229,189,114,.2)" />
                          <stop offset="100%" stopColor="rgba(229,189,114,0)" />
                        </linearGradient>
                        <filter id="tgLineGlow">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <path className="clientPortalLineArea">
                        <animate
                          attributeName="d"
                          dur="6.8s"
                          repeatCount="indefinite"
                          values="
                            M20 210 L125 210 L230 210 L335 210 L440 210 L545 210 L650 210 L755 210 L880 210 L880 220 L20 220 Z;
                            M20 178 L125 148 L230 160 L335 105 L440 125 L545 72 L650 96 L755 48 L880 70 L880 220 L20 220 Z;
                            M20 178 L125 148 L230 160 L335 105 L440 125 L545 72 L650 96 L755 48 L880 70 L880 220 L20 220 Z
                          "
                          keyTimes="0;0.32;1"
                          calcMode="spline"
                          keySplines=".2 .8 .2 1;0 0 1 1"
                        />
                      </path>

                      <path className="clientPortalLinePath" pathLength="1">
                        <animate
                          attributeName="d"
                          dur="6.8s"
                          repeatCount="indefinite"
                          values="
                            M20 210 L125 210 L230 210 L335 210 L440 210 L545 210 L650 210 L755 210 L880 210;
                            M20 178 L125 148 L230 160 L335 105 L440 125 L545 72 L650 96 L755 48 L880 70;
                            M20 178 L125 148 L230 160 L335 105 L440 125 L545 72 L650 96 L755 48 L880 70
                          "
                          keyTimes="0;0.32;1"
                          calcMode="spline"
                          keySplines=".2 .8 .2 1;0 0 1 1"
                        />
                      </path>

                      {[
                        ["20","178"],["125","148"],["230","160"],["335","105"],["440","125"],
                        ["545","72"],["650","96"],["755","48"],["880","70"]
                      ].map(([cx, cy], i) => (
                        <circle key={i} className="clientPortalLinePoint" cx={cx} cy="210" r="5">
                          <animate
                            attributeName="cy"
                            dur="6.8s"
                            repeatCount="indefinite"
                            values={`210;${cy};${cy}`}
                            keyTimes="0;0.32;1"
                            calcMode="spline"
                            keySplines=".2 .8 .2 1;0 0 1 1"
                            begin={`${i * 0.08}s`}
                          />
                          <animate
                            attributeName="opacity"
                            dur="6.8s"
                            repeatCount="indefinite"
                            values="0;1;1"
                            keyTimes="0;0.32;1"
                            begin={`${i * 0.08}s`}
                          />
                        </circle>
                      ))}
                    </svg>

                    <div className="clientPortalChartLabels" aria-hidden="true">
                      <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
                      <span>W6</span><span>W7</span><span>W8</span><span>W9</span>
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
