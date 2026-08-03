import Link from "next/link";

const clients = [
  ["Client A", "Recover", "Check-in due"],
  ["Client B", "Train", "Programme review"],
  ["Client C", "Perform", "Video uploaded"],
];

export default function CoachPortalPage() {
  return (
    <main className="coachPortalPage">
      <header className="coachPortalHeader">
        <div><p className="eyebrow">Coach administration</p><h1>Client management foundation.</h1></div>
        <Link href="/" className="button buttonOutline">Return to website</Link>
      </header>

      <section className="coachPortalStats">
        <article><strong>3</strong><span>Demo clients</span></article>
        <article><strong>2</strong><span>Check-ins to review</span></article>
        <article><strong>1</strong><span>Video awaiting feedback</span></article>
      </section>

      <section className="coachPortalGrid">
        <article className="portalContentCard">
          <p className="eyebrow">Client list</p>
          <h2>Active members</h2>
          <div className="coachClientList">
            {clients.map(([name, membership, action]) => (
              <div key={name}>
                <div><strong>{name}</strong><span>{membership}</span></div>
                <button type="button">{action}</button>
              </div>
            ))}
          </div>
        </article>

        <article className="portalContentCard">
          <p className="eyebrow">Administration modules</p>
          <h2>Planned tools</h2>
          <ul className="coachModuleList">
            <li>Create and edit programmes</li>
            <li>Review weekly check-ins</li>
            <li>Record progress and milestones</li>
            <li>Review files and exercise videos</li>
            <li>Add coaching feedback</li>
            <li>Control membership access</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
