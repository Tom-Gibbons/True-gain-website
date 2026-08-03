"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

type Tab = "dashboard" | "programme" | "progress" | "nutrition" | "checkins" | "uploads" | "analysis" | "billing";

const tabs: { id: Tab; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "programme", label: "Programme" },
  { id: "progress", label: "Progress" },
  { id: "nutrition", label: "Nutrition" },
  { id: "checkins", label: "Check-ins" },
  { id: "uploads", label: "Files" },
  { id: "analysis", label: "Video analysis" },
  { id: "billing", label: "Membership & billing" },
];

export default function PortalShell({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  return (
    <main className="portalAppPage">
      <aside className="portalAppSidebar">
        <Link href="/" className="portalAppBrand">TRUE GAIN</Link>
        <p className="portalAppLabel">Member portal foundation</p>

        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="portalAppSidebarFooter">
          <span>Preview mode</span>
          <p>Authentication will be connected before launch.</p>
          <Link href="/member-login">Return to login</Link>
        </div>
      </aside>

      <section className="portalAppMain">
        <header className="portalAppTopbar">
          <div>
            <span>True Gain Performance</span>
            <strong>{tabs.find((tab) => tab.id === activeTab)?.label}</strong>
          </div>
          <div className="portalAppUser">TG</div>
        </header>

        <div className="portalAppContent" data-active-tab={activeTab}>
          {children}
        </div>
      </section>
    </main>
  );
}
