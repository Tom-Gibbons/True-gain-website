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
  pt60:
    process.env.NEXT_PUBLIC_BOOKING_PT_60_URL ??
    "https://calendly.com/replace-me/pt-60",
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
  ptDeposit:
    process.env.NEXT_PUBLIC_STRIPE_PT_DEPOSIT_URL ??
    "https://buy.stripe.com/replace-pt-deposit",
  massage30Deposit:
    process.env.NEXT_PUBLIC_STRIPE_MASSAGE_30_DEPOSIT_URL ??
    "https://buy.stripe.com/replace-massage-30-deposit",
  massage60Deposit:
    process.env.NEXT_PUBLIC_STRIPE_MASSAGE_60_DEPOSIT_URL ??
    "https://buy.stripe.com/replace-massage-60-deposit",
};

function isPlaceholder(url: string) {
  return url.includes("replace-") || url.includes("replace-me");
}

export default function BookingSystem() {
  const [activeTab, setActiveTab] = useState<"book" | "memberships" | "deposits">("book");

  const bookingOptions = useMemo<BookingOption[]>(
    () => [
      {
        id: "pt60",
        label: "One-off 1:1 personal training",
        description:
          "Book a 60-minute one-to-one coaching session. A 50% deposit is required to secure the appointment.",
        href: links.pt60,
        tag: "60 minutes · £55",
      },
      {
        id: "massage30",
        label: "Sports massage",
        description:
          "Book a focused 30-minute treatment. A 50% deposit is required to secure the appointment.",
        href: links.massage30,
        tag: "30 minutes · £35",
      },
      {
        id: "massage60",
        label: "Sports massage",
        description:
          "Book a full 60-minute treatment for broader recovery, mobility and soft-tissue work. A 50% deposit is required to secure the appointment.",
        href: links.massage60,
        tag: "60 minutes · £60",
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
        id: "ptDeposit",
        label: "1:1 PT deposit",
        description:
          "Secure a one-off 60-minute personal training appointment. The £27.50 deposit is 50% of the £55 session fee.",
        href: links.ptDeposit,
        tag: "£27.50 deposit",
      },
      {
        id: "massage30Deposit",
        label: "30-minute massage deposit",
        description:
          "Secure a 30-minute sports massage appointment. The £17.50 deposit is 50% of the £35 session fee.",
        href: links.massage30Deposit,
        tag: "£17.50 deposit",
      },
      {
        id: "massage60Deposit",
        label: "60-minute massage deposit",
        description:
          "Secure a 60-minute sports massage appointment. The £30 deposit is 50% of the £60 session fee.",
        href: links.massage60Deposit,
        tag: "£30 deposit",
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
        <strong>One-off appointment deposits</strong>
        <p>
          A 50% deposit is required for every one-off Personal Training or Sports Massage
          appointment. As availability is limited, this protects valuable coaching and
          treatment times that could otherwise be reserved for membership clients. The
          deposit is deducted from the full session price, with the remaining balance
          payable on the day. Consultations remain free, and memberships require the first
          monthly payment rather than a deposit.
        </p>
      </div>
    </section>
  );
}
