"use client";
import { useState, type FormEvent } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryNotice, setEnquiryNotice] = useState("");
  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Online coaching consultation enquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:hello@truegainperformance.co.uk?subject=${encodeURIComponent("Online coaching consultation enquiry")}&body=${encodeURIComponent(body)}`;
    setEnquiryNotice("Your email app has been requested. This website has not submitted your enquiry; please send the draft email, or use the address above.");
  }
  return (
    <main data-site-version="online-coaching-v1">
      <header className="tgHeaderExact">
        <a className="tgHeaderLogo" href="#top" aria-label="True Gain home">
          <img src="/true-gain-logo.png" alt="True Gain Performance" />
        </a>

        <nav className={menuOpen ? "tgHeaderNav is-open" : "tgHeaderNav"} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#online-coaching" onClick={() => setMenuOpen(false)}>Online coaching</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          
          <a href="#coach" onClick={() => setMenuOpen(false)}>Coach</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="tgHeaderConsultation" href="#contact">
          Book a Consultation
        </a>

        <button
          type="button"
          className="tgHeaderMenu"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="heroSplit" id="top">
        <div className="heroPanel">
          <p className="eyebrow">Strength. Movement. Longevity.</p>
          <h1>
            Build strength.
            <span>Move with confidence.</span>
            Stay capable for life.
          </h1>
          <p className="heroText">
            Personalised online strength coaching for adults 30+. Train at your gym or at home, with a clear programme, weekly check-ins and individual technique feedback from your coach.
          </p>

          <div className="heroActions">
            <a className="button buttonOutline" href="#pricing">Explore online coaching</a>
          </div>

          <div className="heroLocation">
            <span>Online coaching</span>
            <span>At your gym or at home</span>
          </div>
        </div>

        <div className="heroImage" aria-label="Strength training illustration" />
      </section>


      <section className="section proofStrip" aria-label="True Gain standards">
        <div><strong>BSc</strong><span>Sports Science, Strength &amp; Conditioning</span></div>
        <div><strong>1:1</strong><span>Individual online coaching</span></div>
        <div><strong>Weekly</strong><span>Progress check-ins</span></div>
        <div><strong>30+</strong><span>Adult-focused training</span></div>
      </section>
      <section className="section manifesto" id="about">
        <div className="sectionIntro"><p className="eyebrow">The True Gain standard</p><h2>Strength that carries into everyday life.</h2></div>
        <div className="manifestoCopy"><p>Build strength, confidence and consistency through a programme designed around you. True Gain combines purposeful training with regular coaching feedback to help you make progress wherever you train.</p><p>You complete your sessions independently. Your coach reviews your progress, answers questions and adjusts the plan as your needs change.</p><a className="inlineLink" href="#coach">Meet your coach →</a></div>
      </section>
      <section className="section onlineSection" id="online-coaching">
        <p className="eyebrow">Online coaching</p><h2>A personal plan.<br />A coach behind it.</h2>
        <p className="onlineLead">For adults who want structured strength training and individual guidance while training at their own gym or at home.</p>
        <div className="onlineGrid">
          <article className="onlineCard"><span className="planStrap">01 / Programme</span><h3>Built around you</h3><p>Personalised exercises, sets, repetitions and progression matched to your goals, training history, equipment and schedule. Adjustments are made as needed using your training feedback.</p></article>
          <article className="onlineCard"><span className="planStrap">02 / Check-ins</span><h3>Weekly progress reviews</h3><p>A short weekly check-in covering training, progress, recovery and difficulties, followed by individual coaching feedback. Check-ins are form-based; scheduled live calls are not included.</p></article>
          <article className="onlineCard"><span className="planStrap">03 / Technique</span><h3>Useful video feedback</h3><p>Submit up to 3 exercise videos per week. Each should show one working set of one exercise, ideally no longer than 60 seconds. Receive practical cues to apply in your next session.</p></article>
          <article className="onlineCard"><span className="planStrap">04 / Resilience</span><h3>Support how you move</h3><p>Targeted exercises, where appropriate, to support movement quality, physical resilience and reduce injury risk. Coaching does not include injury diagnosis or clinical rehabilitation and cannot guarantee injury prevention.</p></article>
          <article className="onlineCard"><span className="planStrap">05 / Support</span><h3>Ask your coach</h3><p>Use WhatsApp for training questions and technique submissions. Responses and video feedback are provided within 1–2 working days, Monday–Saturday. Support is asynchronous rather than live or 24-hour access.</p></article>
          <article className="onlineCard"><span className="planStrap">06 / Delivery</span><h3>Simple to access</h3><p>Your programme and training log are shared through Google Sheets, weekly check-ins use Google Forms, and communication takes place through WhatsApp. No paid coaching app subscription is required.</p></article>
        </div>
      </section>
      <section className="section onlinePricing" id="pricing">
        <div><p className="eyebrow">One complete coaching offer</p><h2>Invest in consistent progress.</h2><p className="onlineLead">Personalised programming and ongoing feedback, with clear expectations from the start.</p></div>
        <article className="onlinePriceCard"><p className="planStrap">True Gain online coaching</p><h3>Strength. Movement. Longevity.</h3><p className="onlinePrice">£150 <span>/ calendar month</span></p><p><strong>Initial 3-calendar-month commitment.</strong><br />£450 across three monthly payments, then monthly rolling.</p><ul><li>Personalised programme and adjustments</li><li>Weekly check-ins and individual feedback</li><li>Up to 3 technique videos per week</li><li>Movement quality and injury-risk reduction exercises where appropriate</li><li>WhatsApp support within 1–2 working days, Monday–Saturday</li></ul><a className="button buttonGold" href="#contact">Arrange a free consultation</a><p className="onlineSmall">Payments are made monthly in advance, starting when you join. See <a href="#terms">payment and cancellation details</a>.</p></article>
      </section>
      <section className="section onlineSection" id="how-it-works"><p className="eyebrow">Your next steps</p><h2>Clear from the start.</h2><div className="onlineGrid onlineSteps">
        <article className="onlineCard"><span className="planStrap">01 / Consult</span><h3>Have a conversation</h3><p>Start with a complimentary 30-minute phone or video consultation about your goals, training experience and whether online coaching suits you.</p></article>
        <article className="onlineCard"><span className="planStrap">02 / Prepare</span><h3>Set your starting point</h3><p>Complete health screening, consent and your coaching agreement. Confirm your available equipment, payment arrangements and preferred start date before programming begins.</p></article>
        <article className="onlineCard"><span className="planStrap">03 / Progress</span><h3>Train, review, adapt</h3><p>Log your sessions, complete your weekly check-in and send technique clips. Review progress with your coach before the initial commitment ends.</p></article>
      </div></section>
      <section className="section coachSection" id="coach">
        <div className="coachVisual">
          <div className="coachImage">
            <span className="coachImageLabel">Founder & Coach</span>
          </div>

          <div className="coachQualificationCard animatedQualificationCard">
            <span className="qualificationOrbit" aria-hidden="true" />
            <span className="qualificationPulse" aria-hidden="true" />
            <div className="qualificationContent">
              <p className="planStrap">Qualified coaching</p>
              <strong>BSc</strong>
              <span>Sports Science, Strength &amp; Conditioning</span>
              <small>Qualified S&C Coach</small>
            </div>
          </div>
        </div>

        <div className="coachCopy">
          <p className="eyebrow">Meet your coach</p>
          <h2>Expert coaching. Individual attention.</h2>
          <p className="coachLead">
            True Gain is built around one clear standard: every client receives thoughtful,
            evidence-led coaching designed around their body, goals and lifestyle.
          </p>

          <div className="coachStory">
            <p>
              My role is not simply to count repetitions. It is to help you understand how
              to train well, progress with confidence and build strength that supports your life
              outside your training sessions.
            </p>
            <p>
              Your programme is structured around your available equipment, schedule and training experience, with regular feedback to help you progress independently.
            </p>
          </div>

          <div className="coachPrinciples">
            <article>
              <span>01</span>
              <div>
                <h3>Evidence-led</h3>
                <p>Coaching decisions are guided by sound training principles and your individual response.</p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Personal</h3>
                <p>Your sessions and progression are shaped around your needs, not a template.</p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Long-term</h3>
                <p>The aim is lasting strength, confidence and physical capability—not short-term punishment.</p>
              </div>
            </article>
          </div>

          <div className="coachCredentials">
            <div>
              <strong>BSc</strong>
              <span>Sports Science, Strength &amp; Conditioning</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Individual coaching</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>Adult-focused approach</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section onlineSection" id="terms"><p className="eyebrow">Payment &amp; cancellation</p><h2>Expectations kept clear.</h2><div className="onlineTerms">
        <p>Coaching costs £150 per calendar month, paid in advance. The first payment is due when you join, with subsequent payments on the same date each month. Where that date does not exist, payment falls on the final day of the month.</p>
        <p>The initial commitment is three calendar months (£450 across three payments). After that, coaching continues monthly unless cancelled. To stop renewal, email at least seven calendar days before the next payment date. You can give notice during the initial commitment to end coaching when that commitment finishes. Ordinary late notice takes effect at the following renewal, and coaching continues to the end of the paid period.</p>
        <p>These terms do not restrict your statutory rights. Online service contracts generally carry a 14-day cooling-off period from signup. If you want coaching to begin within that period, we will obtain your express request and explain any proportionate charge for services delivered if you cancel. Starting coaching does not automatically remove that cancellation right.</p>
        <p>Full coaching terms and privacy information are provided before you enter the agreement or pay.</p>
      </div></section>
      <section className="section onlineSection" id="faq"><p className="eyebrow">Before you enquire</p><h2>Your questions answered.</h2><div className="onlineFaq">
        <details><summary>Do I need a gym?</summary><p>No. Your programme can be built around suitable equipment at home or in a gym. We discuss what is available and whether it supports your goals during the consultation.</p></details>
        <details><summary>How quickly will I receive a reply?</summary><p>Messages and exercise videos receive responses within 1–2 working days, Monday–Saturday. Sunday is not a working day. Messages can be sent at any time, but coaching support is not live or available 24 hours a day.</p></details>
        <details><summary>How do weekly check-ins work?</summary><p>You complete a short Google Form on an agreed day each week. Your coach reviews it alongside your training log and provides feedback. Weekly live calls are not included.</p></details>
        <details><summary>How many exercise videos can I submit?</summary><p>Up to 3 each week, showing one working set of one exercise per clip, ideally no longer than 60 seconds. Your coach may request an additional clip when clarification is needed.</p></details>
        <details><summary>Can you coach me with an existing injury?</summary><p>Suitability is considered through screening. Some circumstances require assessment or guidance from a physiotherapist or other appropriate clinician before training is adapted. Online coaching is not injury diagnosis or clinical rehabilitation.</p></details>
        <details><summary>Is private studio coaching available?</summary><p>Private studio services are planned for the future and are not currently available to book. This website currently offers online coaching only.</p></details>
        <details><summary>How do I cancel?</summary><p>Email at least seven calendar days before your next payment date. Ordinary cancellation takes effect no earlier than the end of the initial three-calendar-month commitment. Your statutory cooling-off and other consumer rights are preserved.</p></details>
      </div></section>
      <section className="section contactSection" id="contact"><div className="sectionIntro"><p className="eyebrow">Free 30-minute consultation</p><h2>Start with a conversation.</h2><p className="onlineLead">Discuss your goals and find out whether online coaching is right for you. Consultations take place by phone or video, with no exercise assessment or obligation to join.</p></div>
      <form className="contactForm onlineEnquiry" onSubmit={handleEnquiry}><div className="contactFields">
        <label><span>Full name</span><input name="name" autoComplete="name" required /></label>
        <label><span>Email address</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="contactFieldWide"><span>What would you like help with?</span><textarea name="message" rows={5} placeholder="Briefly describe your training goals and preferred consultation times. Please leave detailed medical information for private screening." required /></label>
      </div><button type="submit" className="button buttonGold">Prepare consultation email</button><p className="onlineSmall">This opens your email app with a draft. Send the email there to complete your enquiry. If it does not open, email <a href="mailto:hello@truegainperformance.co.uk">hello@truegainperformance.co.uk</a> directly.</p><p className="onlineSmall" role="status">{enquiryNotice}</p><p className="onlineSmall">Enquiries receive a reply within 1–2 working days, Monday–Saturday.</p></form></section>
      <footer className="footer"><img className="footerBrandLogo" src="/true-gain-footer-logo.png" alt="True Gain Performance logo" /><p>Strength. Movement. Longevity.</p><nav className="onlineFooterLinks" aria-label="Footer"><a href="#online-coaching">Online coaching</a><a href="#terms">Payment &amp; cancellation</a><a href="#contact">Contact</a></nav><span>© 2026 True Gain Performance</span></footer>
    </main>
  );
}
