"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Personal training",
    text: "Private one-to-one coaching focused on strength, movement quality and long-term progress.",
  },
  {
    number: "02",
    title: "Hybrid coaching",
    text: "In-person coaching combined with structured independent training and ongoing accountability.",
  },
  {
    number: "03",
    title: "Sports massage",
    text: "Targeted recovery treatment to reduce tension, improve movement and support consistency.",
  },
];

const memberships = [
  {
    name: "Train",
    price: "£279",
    strapline: "Structured weekly coaching",
    features: [
      "Weekly one-to-one session",
      "Personalised programme",
      "Monthly progress review",
      "Training app access",
    ],
  },
  {
    name: "Recover",
    price: "£349",
    strapline: "Complete coaching support",
    featured: true,
    features: [
      "Everything in Train",
      "Monthly recovery session",
      "Mobility and recovery plan",
      "Priority coaching support",
    ],
  },
  {
    name: "Perform",
    price: "£499",
    strapline: "Maximum accountability",
    features: [
      "Two coached sessions each week",
      "Priority scheduling",
      "Recovery support included",
      "Direct coaching access",
    ],
  },
];

const oneOff = [
  ["1-hour PT session", "£55", "A focused one-to-one coaching session with no monthly commitment."],
  ["30-minute sports massage", "£35", "Targeted treatment for a specific area of tension, stiffness or fatigue."],
  ["1-hour sports massage", "£60", "A more comprehensive recovery session with assessment and aftercare guidance."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="True Gain home">
          <img src="/true-gain-logo.png" alt="True Gain Performance" />
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#memberships" onClick={() => setMenuOpen(false)}>Memberships</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="#coach" onClick={() => setMenuOpen(false)}>Coach</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="button buttonOutline desktopCta" href="#contact">Book consultation</a>

        <button
          className="menuButton"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Private 1:1 coaching</p>
          <h1>
            Become stronger.
            <span>Move better.</span>
            Perform for life.
          </h1>
          <p className="heroText">
            Premium evidence-led coaching in a private studio on Ringwood Road, Luton,
            serving clients across Bedfordshire and Hertfordshire.
          </p>
          <div className="heroActions">
            <a className="button buttonGold" href="#contact">Book a free consultation</a>
            <a className="button buttonGlass" href="#memberships">Explore memberships</a>
          </div>
        </div>

        <div className="heroRail">
          <div><strong>01</strong><span>Strength</span></div>
          <div><strong>02</strong><span>Movement</span></div>
          <div><strong>03</strong><span>Recovery</span></div>
          <div><strong>04</strong><span>Longevity</span></div>
        </div>
      </section>

      <section className="section proofStrip" aria-label="True Gain standards">
        <div><strong>BSc</strong><span>Strength & Conditioning</span></div>
        <div><strong>1:1</strong><span>Private coaching</span></div>
        <div><strong>30+</strong><span>Adult-focused training</span></div>
        <div><strong>Local</strong><span>Bedfordshire & Hertfordshire</span></div>
      </section>

      <section className="section manifesto" id="about">
        <div className="sectionIntro">
          <p className="eyebrow">The True Gain standard</p>
          <h2>Training should improve your life outside the gym.</h2>
        </div>
        <div className="manifestoCopy">
          <p>
            True Gain combines intelligent progression, individual attention and recovery support
            to help you become stronger, more confident and more capable in everyday life.
          </p>
          <p>
            Every plan is built around your current ability, lifestyle and long-term goals—not a generic template.
          </p>
          <a className="inlineLink" href="#coach">Meet your coach →</a>
        </div>
      </section>

      <section className="pillars">
        <article className="pillar train">
          <div>
            <p className="eyebrow">01 / Train</p>
            <h3>Build useful strength</h3>
            <p>Progressive coaching built around your current ability and future goals.</p>
          </div>
        </article>
        <article className="pillar recover">
          <div>
            <p className="eyebrow">02 / Recover</p>
            <h3>Move and feel better</h3>
            <p>Recovery, mobility and massage support to keep you training consistently.</p>
          </div>
        </article>
        <article className="pillar perform">
          <div>
            <p className="eyebrow">03 / Perform</p>
            <h3>Stay capable for life</h3>
            <p>Long-term coaching that supports confidence, independence and performance.</p>
          </div>
        </article>
      </section>

      <section className="section servicesSection" id="services">
        <div className="sectionIntro centered">
          <p className="eyebrow">Services</p>
          <h2>One coaching standard. Three focused services.</h2>
          <p className="subcopy">Choose the level of support that fits your goals and lifestyle.</p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact">Enquire →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section membershipsSection" id="memberships">
        <div className="sectionIntro centered">
          <p className="eyebrow">Memberships</p>
          <h2>Train. Recover. Perform.</h2>
          <p className="subcopy">All memberships begin with a consultation and individual assessment.</p>
        </div>

        <div className="membershipGrid">
          {memberships.map((plan) => (
            <article className={plan.featured ? "membershipCard featured" : "membershipCard"} key={plan.name}>
              {plan.featured ? <div className="popular">Most popular</div> : null}
              <p className="planStrap">{plan.strapline}</p>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}<span>/month</span></p>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className={plan.featured ? "button buttonGold" : "button buttonOutline"} href="#contact">
                Start with a consultation
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section oneOffSection">
        <div className="sectionIntro centered">
          <p className="eyebrow">Pay as you go</p>
          <h2>One-off sessions</h2>
        </div>
        <div className="oneOffGrid">
          {oneOff.map(([title, price, text]) => (
            <article className="oneOffCard" key={title}>
              <p className="planStrap">No monthly commitment</p>
              <h3>{title}</h3>
              <p className="price">{price}<span>/session</span></p>
              <p className="oneOffText">{text}</p>
              <a className="button buttonOutline" href="#contact">Enquire now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section studioSection" id="studio">
        <div className="studioCopy">
          <p className="eyebrow">Private studio experience</p>
          <h2>Focused coaching. No crowded gym floor.</h2>
          <p>
            An appointment-only studio on Ringwood Road, Luton, designed for purposeful training,
            individual attention and complete focus on your progress.
          </p>
          <div className="studioPoints">
            <span>Private sessions</span>
            <span>Premium equipment</span>
            <span>Individual programming</span>
            <span>Calm environment</span>
          </div>
          <a className="inlineLink" href="#contact">Arrange a studio consultation →</a>
        </div>
        <div className="studioGallery">
          <div className="studioMain" />
          <div className="studioSmall studioTwo" />
          <div className="studioSmall studioThree" />
        </div>
      </section>

      <section className="section coachSection" id="coach">
        <div className="coachImage" />
        <div className="coachCopy">
          <p className="eyebrow">Meet your coach</p>
          <h2>Evidence-led coaching with a personal standard.</h2>
          <p>
            True Gain is led by a BSc-qualified Strength and Conditioning coach focused on helping adults
            train intelligently, progress safely and build lasting physical confidence.
          </p>
          <div className="credentialGrid">
            <div><strong>BSc</strong><span>Strength & Conditioning</span></div>
            <div><strong>1:1</strong><span>Individual attention</span></div>
            <div><strong>30+</strong><span>Adult-focused coaching</span></div>
          </div>
        </div>
      </section>

      <section className="section testimonialSection">
        <div className="sectionIntro centered">
          <p className="eyebrow">Client experience</p>
          <h2>Progress people can feel.</h2>
        </div>
        <div className="testimonialGrid">
          <blockquote>
            “I feel stronger, move better and finally have a clear structure to follow.”
            <footer>Client testimonial placeholder</footer>
          </blockquote>
          <blockquote>
            “Professional, encouraging and completely focused on long-term progress.”
            <footer>Client testimonial placeholder</footer>
          </blockquote>
          <blockquote>
            “The coaching gave me confidence to train properly again.”
            <footer>Client testimonial placeholder</footer>
          </blockquote>
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <div className="contactCopy">
          <p className="eyebrow">Your next step</p>
          <h2>Book your free consultation.</h2>
          <p>
            A focused 30-minute conversation about your goals, current challenges and the most suitable way to work together.
          </p>
          <div className="contactDetails">
            <span>Private studio on Ringwood Road, Luton</span>
            <span>Serving Bedfordshire and Hertfordshire</span>
          </div>
        </div>

        <form className="contactForm">
          <div className="twoCol">
            <input aria-label="Full name" placeholder="Full name" />
            <input aria-label="Email address" type="email" placeholder="Email address" />
          </div>
          <div className="twoCol">
            <input aria-label="Phone number" placeholder="Phone number" />
            <select aria-label="Coaching interest" defaultValue="">
              <option value="" disabled>Coaching interest</option>
              <option>Personal training</option>
              <option>Hybrid coaching</option>
              <option>30-minute sports massage</option>
              <option>1-hour sports massage</option>
            </select>
          </div>
          <textarea aria-label="Goals" rows={5} placeholder="What would you most like to improve?" />
          <button className="button buttonGold" type="button">Request consultation</button>
          <small>Form connection will be added before launch.</small>
        </form>
      </section>

      <footer className="footer">
        <img src="/true-gain-logo.png" alt="True Gain Performance" />
        <p>Strength. Recovery. Longevity.</p>
        <span>© 2026 True Gain Performance</span>
      </footer>
    </main>
  );
}
