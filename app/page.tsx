import PortalShell from "../../components/PortalShell";
import { checkInQuestions, memberSummary, programmeItems, progressItems } from "../../components/portalData";

export default function MemberPortalPage() {
  return (
    <PortalShell>
      <section className="portalDashboardHero">
        <div>
          <p className="eyebrow">Member dashboard</p>
          <h1>Welcome back.</h1>
          <p>Your programme, progress, check-ins and coaching feedback in one place.</p>
        </div>
        <div className="portalMembershipCard">
          <span>Active membership</span>
          <strong>{memberSummary.membership}</strong>
          <p>Billing connection pending Stripe setup.</p>
        </div>
      </section>

      <section className="portalStatsGrid">
        {progressItems.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="portalTwoColumn">
        <article className="portalContentCard">
          <div className="portalCardHeading">
            <div><p className="eyebrow">Programme</p><h2>This week</h2></div>
            <span>{memberSummary.programmeCompletion}% complete</span>
          </div>
          <div className="portalProgrammeList">
            {programmeItems.map((item) => (
              <div key={item.title}>
                <div><strong>{item.title}</strong><span>{item.detail}</span></div>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="portalContentCard">
          <p className="eyebrow">Weekly check-in</p>
          <h2>Recovery and readiness</h2>
          <div className="portalCheckInList">
            {checkInQuestions.map((question) => (
              <label key={question}>
                <span>{question}</span>
                <input type="range" min="1" max="10" defaultValue="7" />
              </label>
            ))}
          </div>
          <button className="button buttonOutline" type="button">Save preview check-in</button>
        </article>
      </section>

      <section className="portalThreeColumn">
        <article className="portalContentCard">
          <p className="eyebrow">Nutrition guidance</p>
          <h3>Three current priorities</h3>
          <ul><li>Protein with each main meal</li><li>Hydration target</li><li>Pre-training meal consistency</li></ul>
        </article>
        <article className="portalContentCard">
          <p className="eyebrow">File uploads</p>
          <h3>Secure member files</h3>
          <div className="portalDropzone">Upload area connects after secure storage setup.</div>
        </article>
        <article className="portalContentCard">
          <p className="eyebrow">Video analysis</p>
          <h3>Technique feedback</h3>
          <div className="portalDropzone">Exercise-video uploads connect after secure storage setup.</div>
        </article>
      </section>
    </PortalShell>
  );
}
