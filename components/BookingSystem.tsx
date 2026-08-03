"use client";

import { useMemo, useState } from "react";

type BookingOption = {
  id: string;
  label: string;
  description: string;
  href: string;
  tag: string;
};

const links = {
  consultation:
    process.env.NEXT_PUBLIC_BOOKING_CONSULTATION_URL ??
    "https://calendly.com/replace-me/consultation",
  massage30:
    process.env.NEXT_PUBLIC_BOOKING_MASSAGE_30_URL ??
    "https://calendly.com/replace-me/massage-30",
  massage60:
    process.env.NEXT_PUBLIC_BOOKING_MASSAGE_60_URL ??
    "https://calendly.com/replace-me/massage-60",
  train:
    process.env.NEXT_PUBLIC_STRIPE_TRAIN_URL ??
    "https://buy.stripe.com/replace-train",
  recover:
    process.env.NEXT_PUBLIC_STRIPE_RECOVER_URL ??
    "https://buy.stripe.com/replace-recover",
  perform:
    process.env.NEXT_PUBLIC_STRIPE_PERFORM_URL ??
    "https://buy.stripe.com/replace-perform",
  massageDeposit:
    process.env.NEXT_PUBLIC_STRIPE_MASSAGE_DEPOSIT_URL ??
    "https://buy.stripe.com/replace-massage-deposit",
};

function isPlaceholder(url: string) {
  return url.includes("replace-") || url.includes("replace-me");
}

export default function BookingSystem() {
  const [activeTab, setActiveTab] = useState<"book" | "memberships" | "deposits">("book");

  const bookingOptions = useMemo<BookingOption[]>(
    () => [
      {
        id: "consultation",
        label: "Free consultation",
        description:
          "Book a 30-minute conversation to discuss your goals and the most suitable coaching option.",
        href: links.consultation,
        tag: "30 minutes",
      },
      {
        id: "massage30",
        label: "Sports massage",
        description:
          "Book a focused 30-minute treatment for a specific area or short recovery appointment.",
        href: links.massage30,
        tag: "30 minutes",
      },
      {
        id: "massage60",
        label: "Sports massage",
        description:
          "Book a full 60-minute treatment for broader recovery, mobility and soft-tissue work.",
        href: links.massage60,
        tag: "60 minutes",
      },
    ],
    []
  );

  const membershipOptions = useMemo<BookingOption[]>(
    () => [
      {
        id: "train",
        label: "Train membership",
        description:
          "Weekly one-to-one coaching, personalised programming and structured progress reviews.",
        href: links.train,
        tag: "Monthly",
      },
      {
        id: "recover",
        label: "Recover membership",
        description:
          "Everything in Train, enhanced with dedicated recovery support and priority scheduling.",
        href: links.recover,
        tag: "Monthly",
      },
      {
        id: "perform",
        label: "Perform membership",
        description:
          "The complete True Gain experience with increased coaching contact and premium support.",
        href: links.perform,
        tag: "Monthly",
      },
    ],
    []
  );

  const depositOptions = useMemo<BookingOption[]>(
    () => [
      {
        id: "massageDeposit",
        label: "Massage deposit",
        description:
          "Secure a sports-massage appointment with a deposit before the booking is confirmed.",
        href: links.massageDeposit,
        tag: "Secure payment",
      },
    ],
    []
  );

  const currentOptions =
    activeTab === "book"
      ? bookingOptions
      : activeTab === "memberships"
      ? membershipOptions
      : depositOptions;

  function openExternal(url: string) {
    if (isPlaceholder(url)) {
      window.alert(
        "This button is ready, but the live Calendly or Stripe link still needs to be added in Vercel."
      );
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section liveBookingSection" id="live-booking">
      <div className="liveBookingIntro">
        <div>
          <p className="eyebrow">Online booking & payments</p>
          <h2>Book, join or pay securely online.</h2>
          <p>
            Choose the action you need below. Appointments open through your live booking
            calendar, while memberships and deposits use secure Stripe checkout.
          </p>
        </div>

        <div className="liveBookingSecurity">
          <span>Secure checkout</span>
          <strong>Calendly + Stripe</strong>
          <p>No card details are stored on this website.</p>
        </div>
      </div>

      <div className="bookingTabs" role="tablist" aria-label="Booking options">
        <button
          type="button"
          className={activeTab === "book" ? "active" : ""}
          onClick={() => setActiveTab("book")}
          role="tab"
          aria-selected={activeTab === "book"}
        >
          Book appointments
        </button>

        <button
          type="button"
          className={activeTab === "memberships" ? "active" : ""}
          onClick={() => setActiveTab("memberships")}
          role="tab"
          aria-selected={activeTab === "memberships"}
        >
          Purchase memberships
        </button>

        <button
          type="button"
          className={activeTab === "deposits" ? "active" : ""}
          onClick={() => setActiveTab("deposits")}
          role="tab"
          aria-selected={activeTab === "deposits"}
        >
          Pay deposits
        </button>
      </div>

      <div className="bookingOptionGrid">
        {currentOptions.map((option) => (
          <article className="bookingOptionCard" key={option.id}>
            <div>
              <span className="bookingOptionTag">{option.tag}</span>
              <h3>{option.label}</h3>
              <p>{option.description}</p>
            </div>

            <button
              type="button"
              className="button buttonGold"
              onClick={() => openExternal(option.href)}
            >
              {activeTab === "book"
                ? "Choose a time"
                : activeTab === "memberships"
                ? "Continue to checkout"
                : "Pay deposit"}
            </button>
          </article>
        ))}
      </div>

      <div className="bookingSystemNote">
        <strong>Assessment policy</strong>
        <p>
          The free consultation is a conversation only. Once a membership is purchased,
          the complimentary initial assessment is arranged separately and does not count
          towards weekly coaching sessions.
        </p>
      </div>
    </section>
  );
}
