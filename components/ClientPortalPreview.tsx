"use client";

import { useState } from "react";

type PortalTab =
  | "programme"
  | "progress"
  | "nutrition"
  | "checkins"
  | "uploads"
  | "analysis";

const portalItems = [
  {
    id: "programme" as PortalTab,
    label: "Exercise programmes",
    description:
      "View weekly sessions, exercise instructions, sets, repetitions and coaching notes.",
    icon: "01",
  },
  {
    id: "progress" as PortalTab,
    label: "Progress tracking",
    description:
      "Review strength markers, measurements, movement progress and completed milestones.",
    icon: "02",
  },
  {
    id: "nutrition" as PortalTab,
    label: "Nutrition guidance",
    description:
      "Access practical nutrition targets, habits and personalised guidance that supports training.",
    icon: "03",
  },
  {
    id: "checkins" as PortalTab,
    label: "Check-ins",
    description:
      "Complete regular check-ins covering training, recovery, energy, sleep and current priorities.",
    icon: "04",
  },
  {
    id: "uploads" as PortalTab,
    label: "File uploads",
    description:
      "Upload progress photographs, documents and relevant files securely for coaching review.",
    icon: "05",
  },
  {
    id: "analysis" as PortalTab,
    label: "Video analysis",
    description:
      "Submit exercise videos and receive detailed coaching feedback on technique and execution.",
    icon: "06",
  },
];

export default function ClientPortalPreview() {
  const [activeTab, setActiveTab] = useState<PortalTab>("programme");
  const activeItem = portalItems.find((item) => item.id === activeTab)!;

  return (
    <section className="section clientPortalSection" id="client-portal">
      <div className="clientPortalHero">
        <div>
          <p className="eyebrow">Future client portal</p>
          <h2>Your coaching. Organised in one place.</h2>
          <p>
            The True Gain client portal will give active members a private space to
            access their programme, review progress, complete check-ins and communicate
            more effectively between sessions.
          </p>
        </div>

        <div className="clientPortalStatus">
          <span>Development status</span>
          <strong>Planned for a later launch</strong>
          <p>
            This preview establishes the design and structure. Secure login, databases
            and file storage will be connected before clients receive access.
          </p>
        </div>
      </div>

      <div className="clientPortalShell">
        <div className="clientPortalSidebar" role="tablist" aria-label="Client portal features">
          {portalItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeTab === item.id ? "active" : ""}
              onClick={() => setActiveTab(item.id)}
              role="tab"
              aria-selected={activeTab === item.id}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="clientPortalPreviewPanel">
          <div className="portalPreviewTopbar">
            <div>
              <span>True Gain member</span>
              <strong>Portal preview</strong>
            </div>
            <span className="portalPreviewBadge">Private access</span>
          </div>

          <div className="portalPreviewContent">
            <span className="portalPreviewNumber">{activeItem.icon}</span>
            <p className="planStrap">Member feature</p>
            <h3>{activeItem.label}</h3>
            <p>{activeItem.description}</p>

            <div className="portalPreviewMock">
              <div />
              <div />
              <div />
            </div>

            <button type="button" className="button buttonOutline" disabled>
              Member login coming later
            </button>
          </div>
        </div>
      </div>

      <div className="clientPortalBenefits">
        <article>
          <span>Private</span>
          <h3>Secure member access</h3>
          <p>
            Each client will use their own protected account rather than receiving
            sensitive coaching information through public links.
          </p>
        </article>

        <article>
          <span>Connected</span>
          <h3>Coaching between sessions</h3>
          <p>
            Programmes, feedback and check-ins remain connected to the in-person
            coaching experience.
          </p>
        </article>

        <article>
          <span>Measurable</span>
          <h3>Clear evidence of progress</h3>
          <p>
            Clients can review completed work, milestones and meaningful changes over
            time.
          </p>
        </article>
      </div>
    </section>
  );
}
