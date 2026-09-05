"use client";

import { useMemo, useState } from "react";

type BookingOption = {
  id: string;
  label: string;
  description: string;
  tag: string;
};

export default function BookingSystem() {
  const [activeTab, setActiveTab] = useState<"consultation" | "strength" | "massage">("consultation");

  const options = useMemo<Record<typeof activeTab, BookingOption[]>>(
    () => ({
      consultation: [
        { id: "general-consultation", label: "General consultation", description: "A complimentary conversation by phone/video or in an agreed neutral setting to discuss your goals and the most suitable next step.", tag: "30 minutes · Free" },
        { id: "studio-consultation", label: "Studio consultation", description: "A complimentary conversation at the private True Gain studio, with the opportunity to see the space and discuss your options.", tag: "30 minutes · Free" },
      ],
      strength: [
        { id: "strength-45", label: "45-minute strength coaching", description: "£47.50 single · £213.75 for five · £403.75 for ten. Blocks require two appointments per week.", tag: "From £40.38 per session" },
        { id: "strength-60", label: "60-minute strength coaching", description: "£65 single · £292.50 for five · £552.50 for ten. Blocks require two appointments per week.", tag: "From £55.25 per session" },
      ],
      massage: [
        { id: "massage-30", label: "30-minute sports massage", description: "£35 single · £157.50 for five · £297.50 for ten. Blocks require one appointment per fortnight.", tag: "From £29.75 per treatment" },
        { id: "massage-60", label: "60-minute sports massage", description: "£60 single · £270 for five · £510 for ten. Blocks require one appointment per fortnight.", tag: "From £51 per treatment" },
      ],
    }),
    []
  );

  return (
    <section className="section liveBookingSection" id="live-booking">
      <div className="liveBookingIntro">
        <div>
          <p className="eyebrow">Enquiries &amp; booking</p>
          <h2>Choose your next step.</h2>
          <p>Review the available appointments, then use the enquiry form to arrange a consultation, single session or prepaid block directly with True Gain.</p>
        </div>
        <div className="liveBookingSecurity">
          <span>Simple booking</span>
          <strong>Arranged personally</strong>
          <p>No client app or monthly membership is required.</p>
        </div>
      </div>

      <div className="bookingTabs" role="tablist" aria-label="Booking options">
        <button type="button" className={activeTab === "consultation" ? "active" : ""} onClick={() => setActiveTab("consultation")} role="tab" aria-selected={activeTab === "consultation"}>Consultation</button>
        <button type="button" className={activeTab === "strength" ? "active" : ""} onClick={() => setActiveTab("strength")} role="tab" aria-selected={activeTab === "strength"}>Strength coaching</button>
        <button type="button" className={activeTab === "massage" ? "active" : ""} onClick={() => setActiveTab("massage")} role="tab" aria-selected={activeTab === "massage"}>Sports massage</button>
      </div>

      <div className="bookingOptionGrid">
        {options[activeTab].map((option) => (
          <article className="bookingOptionCard" key={option.id}>
            <div><span className="bookingOptionTag">{option.tag}</span><h3>{option.label}</h3><p>{option.description}</p></div>
            <a className="button buttonGold" href="#contact">Enquire now</a>
          </article>
        ))}
      </div>

      <div className="bookingSystemNote">
        <strong>Block attendance</strong>
        <p>Five-session blocks save 10% and ten-session blocks save 15%. Strength blocks require two appointments per week; massage blocks require one appointment every fortnight. Single appointments remain available for clients wanting more flexibility.</p>
      </div>
    </section>
  );
}
