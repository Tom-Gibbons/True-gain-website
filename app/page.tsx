"use client";

import ClientPortalPreview from "../components/ClientPortalPreview";
import BookingSystem from "../components/BookingSystem";


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
    strapline: "Build strong foundations",
    outcome:
      "Ideal for clients who want expert one-to-one coaching, a clear plan and structured weekly accountability. Train gives you the guidance to improve technique, build confidence and make measurable progress while still allowing you to train independently between sessions.",
    features: [
      "Weekly one-to-one personal training",
      "Personalised strength programme",
      "Technique coaching and exercise progressions",
      "Monthly progress and goal review",
      "Training app access",
      "Ongoing guidance between sessions",
    ],
  },
  {
    name: "Recover",
    price: "£349",
    strapline: "Train consistently. Recover smarter.",
    outcome:
      "Everything in Train, enhanced with dedicated recovery support. Recover is designed for busy professionals and active adults who want to reduce stiffness, improve movement quality and stay consistent without allowing aches, fatigue or poor recovery to interrupt progress.",
    featured: true,
    features: [
      "Everything included in Train",
      "Monthly sports massage or recovery session",
      "Personalised mobility and recovery plan",
      "Support for muscular tension and movement quality",
      "Priority scheduling",
      "Closer coaching contact and accountability",
    ],
  },
  {
    name: "Perform",
    price: "£499",
    strapline: "The complete True Gain experience",
    outcome:
      "The flagship option for clients who want the highest level of coaching, accountability and support. Perform removes the guesswork by combining increased private coaching, personalised programming, recovery support and regular progress reviews into one complete long-term coaching service.",
    features: [
      "Everything included in Recover",
      "Two coached sessions each week",
      "Priority programme updates",
      "Regular performance and lifestyle reviews",
      "Direct coaching access",
      "Highest level of accountability and support",
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
    <main data-site-version="onboarding-v2" data-service-label-version="2">
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
          <a href="#case-studies" onClick={() => setMenuOpen(false)}>Results &amp; Progress</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="headerActions">
          <a className="memberLoginUtility" href="/member-login">
            Member Login
          </a>
          <a
            className="button desktopCta"
            href="#contact"
            onMouseEnter={(event) => event.currentTarget.classList.add("is-hovered")}
            onMouseLeave={(event) => event.currentTarget.classList.remove("is-hovered")}
          >
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          className="mobileMenuButton"
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
            Premium, evidence-led 1:1 coaching in a private studio in Bushmead, Luton. Helping adults build strength, move better and stay capable for life.
          </p>

          <div className="heroActions">
            <a className="button buttonOutline" href="#memberships">Explore memberships</a>
          </div>

          <div className="heroLocation">
            <span>Bushmead, Luton</span>
            <span>Bedfordshire & Hertfordshire</span>
          </div>
        </div>

        <div className="heroImage" aria-label="Individual pushing a weighted sled in the True Gain studio" />
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
          <h2>Strength that carries into everyday life.</h2>
        </div>
        <div className="manifestoCopy">
          <p>
            True Gain combines intelligent progression, individual attention and recovery support
            to help you become stronger, more confident and more capable in everyday life.
          </p>
          <p>
            Every plan is built around your current ability, lifestyle and long-term goals. Never a generic template.
          </p>
          <a className="inlineLink" href="#coach">Meet your coach →</a>
        </div>
      </section>

      <section className="pillars">
        <article className="pillarCard">
          <div className="pillarImage pillarTrainImage" aria-label="One-to-one barbell back squat coaching" />
          <div className="pillarContent">
            <p className="eyebrow">01 / Train</p>
            <h3>Build useful strength</h3>
            <p>
              Develop strength that carries into everyday life through structured,
              progressive coaching tailored to your current ability, training history and goals.
            </p>
          </div>
        </article>

        <article className="pillarCard">
          <div className="pillarImage pillarRecoverImage" aria-label="Professional sports massage treatment" />
          <div className="pillarContent">
            <p className="eyebrow">02 / Recover</p>
            <h3>Move and feel better</h3>
            <p>
              Support your training with focused sports massage, mobility work and recovery
              strategies designed to reduce tension, improve movement and maintain consistency.
            </p>
          </div>
        </article>

        <article className="pillarCard">
          <div className="pillarImage pillarPerformImage" aria-label="Client performing a powerful dumbbell swing" />
          <div className="pillarContent">
            <p className="eyebrow">03 / Perform</p>
            <h3>Stay capable for life</h3>
            <p>
              Build the physical confidence, resilience and work capacity needed to perform well,
              remain independent and stay active for the long term.
            </p>
          </div>
        </article>
      </section>
      <section className="section servicesSection" id="services">
        <div className="servicesHero">
          <div className="servicesHeroCopy">
            <p className="eyebrow">Services</p>
            <h2>Three services. One personal standard.</h2>
            <p>
              Evidence-led coaching, recovery and accountability built around your
              goals, lifestyle and long-term physical capability.
            </p>
          </div>
          <div className="servicesHeroStat">
            <strong>1:1</strong>
            <span>Private coaching in Bushmead, Luton</span>
          </div>
        </div>

        <div className="serviceFeature serviceFeatureTrain">
          <div className="serviceFeatureImage" aria-label="One-to-one strength coaching" />
          <div className="serviceFeatureCopy">
            <p className="serviceNumber">01 / Train</p>
            <h3>Build strength with purpose.</h3>
            <p>
              Personal training designed around your current ability, training history
              and long-term goals. Every session is structured, progressive and focused
              on helping you become stronger and more confident.
            </p>
            <ul>
              <li>Individual assessment</li>
              <li>Personalised programme</li>
              <li>Technique coaching</li>
              <li>Progress tracking</li>
            </ul>
            <a className="button buttonOutline" href="#contact">Book personal training</a>
          </div>
        </div>

        <div className="serviceFeature serviceFeatureRecover reverse">
          <div className="serviceFeatureImage" aria-label="Professional sports massage and recovery" />
          <div className="serviceFeatureCopy">
            <p className="serviceNumber">02 / Recover</p>
            <h3>Move better. Recover properly.</h3>
            <p>
              Focused sports massage and recovery support to reduce tension, improve
              movement and help you train consistently. Treatment is practical,
              professional and tailored to your needs.
            </p>
            <ul>
              <li>30- or 60-minute treatment</li>
              <li>Targeted soft-tissue work</li>
              <li>Mobility guidance</li>
              <li>Recovery planning</li>
            </ul>
            <a className="button buttonOutline" href="#contact">Book recovery</a>
          </div>
        </div>

        <div className="serviceFeature serviceFeaturePerform">
          <div className="serviceFeatureImage" aria-label="Complete coaching and accountability" />
          <div className="serviceFeatureCopy">
            <p className="serviceNumber">03 / Perform</p>
            <h3>Complete coaching for long-term results.</h3>
            <p>
              Training, recovery, programming and accountability working together.
              This is the most complete True Gain experience for clients who want
              consistent support and meaningful long-term progress.
            </p>
            <ul>
              <li>Private coached sessions</li>
              <li>Individual programming</li>
              <li>Recovery support</li>
              <li>Ongoing accountability</li>
            </ul>
            <a className="button buttonGold" href="#memberships">Explore memberships</a>
          </div>
        </div>

        <div className="servicesComparison">
          <article>
            <p className="planStrap">Coach</p>
            <h3>Personal training</h3>
            <p>Expert one-to-one coaching for strength, movement and confidence.</p>
            <span>From £55/session</span>
          </article>
          <article>
            <p className="planStrap">Treat</p>
            <h3>Sports massage</h3>
            <p>Focused treatment and recovery support to help you move and feel better.</p>
            <span>From £35/session</span>
          </article>
          <article className="featured">
            <p className="planStrap">Transform</p>
            <h3>Complete coaching</h3>
            <p>Training, recovery and accountability combined into one premium service.</p>
            <span>From £279/month</span>
          </article>
        </div>

        <div className="servicesWhy">
          <div><strong>Evidence-led</strong><span>Sound coaching principles and individual progression.</span></div>
          <div><strong>Private studio</strong><span>No crowds, waiting or distractions.</span></div>
          <div><strong>Long-term focus</strong><span>Strength and confidence that lasts beyond a short programme.</span></div>
        </div>

        <div className="servicesCta">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h3>Arrange your consultation.</h3>
            <p>We will discuss your goals, current challenges and the most suitable True Gain service for you.</p>
          </div>
        </div>
      </section>
      <section className="section membershipsSection" id="memberships">
        <div className="membershipHero">
          <div className="membershipHeroCopy">
            <p className="eyebrow">Memberships</p>
            <h2>Choose the support your goals require.</h2>
            <p>
              Three levels of coaching built around one standard: individual attention,
              clear progression and long-term results.
            </p>
          </div>

          <div className="membershipHeroNote">
            <p className="planStrap">Every membership includes</p>
            <strong>Assessment. Programme. Progression.</strong>
            <span>Begin with a free 30-minute consultation. Your complimentary initial assessment is arranged only after membership purchase and is separate from your weekly coaching allocation.</span>
          </div>
        </div>

        <div className="membershipShowcase">
          {memberships.map((plan, index) => (
            <article
              className={plan.featured ? "membershipPlan featured" : "membershipPlan"}
              key={plan.name}
            >
              <div className="membershipPlanTop">
                <div>
                  <p className="planIndex">0{index + 1}</p>
                  <p className="planStrap">{plan.strapline}</p>
                </div>
                {plan.featured ? <span className="membershipBadge">Most popular</span> : null}
              </div>

              <h3>{plan.name}</h3>

              <div className="membershipPriceRow">
                <p className="price">{plan.price}<span>/month</span></p>
              </div>

              <p className="membershipOutcome">{plan.outcome}</p>

              <div className="membershipDivider" />

              <p className="membershipIncludes">What is included</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="membershipIdealFor">
                <span>Ideal for</span>
                <p>
                  {plan.name === "Train" && "Clients who are motivated to train independently but want expert structure, technique coaching and consistent weekly accountability."}
                  {plan.name === "Recover" && "Busy professionals and active adults who value strength, longevity and recovering properly between training sessions."}
                  {plan.name === "Perform" && "Clients committed to achieving the strongest possible long-term result with maximum guidance, convenience and accountability."}
                </p>
              </div>

              <a
                className={plan.featured ? "button buttonGold" : "button buttonOutline"}
                href="#contact"
              >
                Start with a consultation
              </a>
            </article>
          ))}
        </div>

        <div className="membershipComparison">
          <div className="comparisonIntro">
            <p className="eyebrow">Compare memberships</p>
            <h3>Find the right level of support.</h3>
            <p>
              The best option depends on how frequently you want to train, how much
              accountability you need and whether recovery support is a priority.
            </p>
          </div>

          <div className="comparisonTable" role="table" aria-label="Membership comparison">
            <div className="comparisonRow comparisonHead" role="row">
              <span role="columnheader">Included</span>
              <span role="columnheader">Train</span>
              <span role="columnheader">Recover</span>
              <span role="columnheader">Perform</span>
            </div>

            <div className="comparisonRow" role="row">
              <span role="cell">Private coaching</span>
              <span role="cell">Weekly</span>
              <span role="cell">Weekly</span>
              <span role="cell">Twice weekly</span>
            </div>

            <div className="comparisonRow" role="row">
              <span role="cell">Personal programme</span>
              <span role="cell">✓</span>
              <span role="cell">✓</span>
              <span role="cell">✓</span>
            </div>

            <div className="comparisonRow" role="row">
              <span role="cell">Progress reviews</span>
              <span role="cell">Monthly</span>
              <span role="cell">Monthly</span>
              <span role="cell">Priority</span>
            </div>

            <div className="comparisonRow" role="row">
              <span role="cell">Recovery support</span>
              <span role="cell">—</span>
              <span role="cell">Monthly</span>
              <span role="cell">Included</span>
            </div>

            <div className="comparisonRow" role="row">
              <span role="cell">Priority scheduling</span>
              <span role="cell">—</span>
              <span role="cell">✓</span>
              <span role="cell">✓</span>
            </div>

            <div className="comparisonRow comparisonPrice" role="row">
              <span role="cell">Monthly price</span>
              <span role="cell">£279</span>
              <span role="cell">£349</span>
              <span role="cell">£499</span>
            </div>
          </div>
        </div>

        <div className="membershipPromise">
          <div>
            <p className="eyebrow">The True Gain promise</p>
            <h3>No generic plans. No crowded gym floor.</h3>
            <p>
              Every membership is delivered privately, adapted to your progress and
              designed to support your life outside the studio.
            </p>
          </div>

          <div className="membershipPromisePoints">
            <span>Private 1:1 coaching</span>
            <span>Individual programming</span>
            <span>Evidence-led progression</span>
            <span>Long-term support</span>
          </div>
        </div>

        <div className="membershipCta">
          <div>
            <p className="eyebrow">Not sure which membership fits?</p>
            <h3>Start with a free consultation.</h3>
            <p>
              We will discuss your goals, availability and preferred level of support,
              then recommend the most suitable membership.
            </p>
          </div>
        </div>
      </section>

      <section className="section oneOffSection">
        <div className="sectionIntro centered">
          <p className="eyebrow">Pay as you go</p>
          <h2>Flexible one-off sessions.</h2>
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
      <section className="section studioSection studioExperienceSection" id="studio">
        <div className="studioExperienceHero">
          <div className="studioExperienceCopy">
            <p className="eyebrow">The studio experience</p>
            <h2>Private by design. Built for progress.</h2>
            <p>
              A purpose-built, appointment-only coaching studio in Bushmead, Luton,
              designed for focused one-to-one training, recovery and complete personal attention.
            </p>
          </div>

          <div className="studioExperienceHeroAside">
            <div className="studioExperienceBadge">
              <strong>1:1</strong>
              <span>One coach. One client. Full focus.</span>
            </div>

            <div className="studioExperienceBenefits">
              <div><span className="benefitIcon">◎</span><strong>No crowds.</strong></div>
              <div><span className="benefitIcon">◴</span><strong>No waiting.</strong></div>
              <div><span className="benefitIcon">◇</span><strong>No distractions.</strong></div>
            </div>
          </div>
        </div>

        <div className="studioExperienceGallery">
          <div className="studioExperienceMain">
            <span className="imageLabel">Complete private studio</span>
          </div>

          <div className="studioExperienceSide">
            <div className="studioExperienceStrength">
              <span className="imageLabel">Strength equipment</span>
            </div>
            <div className="studioExperienceRecovery">
              <span className="imageLabel">Recovery area</span>
            </div>
          </div>
        </div>

        <div className="studioFeatureGrid">
          <article>
            <span>01</span>
            <h3>Private coaching space</h3>
            <p>
              Every appointment is focused entirely on you, without the interruption,
              noise or pressure of a busy commercial gym.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Purposeful equipment</h3>
            <p>
              Carefully selected strength, conditioning and mobility equipment supports
              effective training without unnecessary clutter.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Integrated recovery</h3>
            <p>
              Training and recovery can work together in one setting, with dedicated space
              for sports massage, mobility and movement support.
            </p>
          </article>
        </div>

        <div className="studioEquipmentPanel">
          <div className="studioEquipmentIntro">
            <p className="eyebrow">Equipment and training zones</p>
            <h3>Everything needed for focused, progressive coaching.</h3>
            <p>
              The studio is designed around the work that matters most: building strength,
              improving movement, developing confidence and supporting long-term consistency.
            </p>
          </div>

          <div className="studioEquipmentList">
            <div>
              <strong>Strength zone</strong>
              <span>Power rack, barbell training, adjustable bench and free weights.</span>
            </div>
            <div>
              <strong>Functional zone</strong>
              <span>Cable training, kettlebells, resistance bands, sled and turf work.</span>
            </div>
            <div>
              <strong>Recovery zone</strong>
              <span>Sports massage, mobility work and guided recovery sessions.</span>
            </div>
            <div>
              <strong>Progress zone</strong>
              <span>Assessments, coaching reviews and individual programme planning.</span>
            </div>
          </div>
        </div>

        <div className="studioJourney">
          <div>
            <p className="eyebrow">Your studio experience</p>
            <h3>Calm, structured and entirely personal.</h3>
          </div>

          <ol>
            <li>
              <span>01</span>
              <div>
                <h4>Arrive</h4>
                <p>Enter a private environment prepared specifically for your session.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h4>Train</h4>
                <p>Follow a clear session plan with continuous coaching and technique support.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h4>Review</h4>
                <p>Track progress, discuss feedback and adjust the next stage of your programme.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h4>Recover</h4>
                <p>Use mobility or recovery support where appropriate to stay consistent.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="studioLocationFeature">
          <div>
            <p className="planStrap">Private studio location</p>
            <h3>Bushmead, Luton</h3>
            <p>
              Conveniently positioned for clients travelling from across Bedfordshire
              and Hertfordshire.
            </p>
          </div>

          <a className="button buttonGold" href="#contact">
            Arrange a studio consultation
          </a>
        </div>
      </section>
      <section className="section coachSection" id="coach">
        <div className="coachVisual">
          <div className="coachImage">
            <span className="coachImageLabel">Founder & Coach</span>
          </div>

          <div className="coachQualificationCard">
            <p className="planStrap">Qualified coaching</p>
            <strong>BSc</strong>
            <span>Strength & Conditioning</span>
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
              outside the studio.
            </p>
            <p>
              Sessions are structured, personal and focused on long-term results, without the
              intimidation, noise or generic approach often found on a commercial gym floor.
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
                <p>Your programme, progression and support are built around your needs, not a template.</p>
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
              <span>Strength & Conditioning</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Private coaching</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>Adult-focused approach</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section resultsSection" id="results">
        <div className="resultsHero">
          <div>
            <p className="eyebrow">Client results</p>
            <h2>Progress that improves life outside the studio.</h2>
            <p>
              True Gain is built around practical outcomes: becoming stronger, moving with
              more confidence, recovering better and staying capable for the long term.
            </p>
          </div>

          <div className="resultsHeroNote">
            <p className="planStrap">What progress can look like</p>
            <strong>Strength. Confidence. Consistency.</strong>
            <span>
              Every client's journey is different, but meaningful progress should always be expected. Every programme is tailored to your body, your goals and your lifestyle.
            </span>
          </div>
        </div>

        <div className="resultsGrid">
          <article className="resultCard">
            <p className="resultNumber">01</p>
            <h3>Stronger everyday movement</h3>
            <p>
              Improved strength and movement quality can make daily tasks, hobbies and
              activities feel easier and more manageable.
            </p>
          </article>

          <article className="resultCard">
            <p className="resultNumber">02</p>
            <h3>Greater training confidence</h3>
            <p>
              Clear coaching and better technique help clients understand what they are
              doing and why, reducing uncertainty in the gym.
            </p>
          </article>

          <article className="resultCard">
            <p className="resultNumber">03</p>
            <h3>Better long-term consistency</h3>
            <p>
              A structured plan, regular reviews and accountability create a more
              sustainable approach than relying on motivation alone.
            </p>
          </article>
        </div>

        <div className="testimonialShowcase">
          <div className="testimonialIntro">
            <p className="eyebrow">Client experience</p>
            <h3>What clients can expect from True Gain.</h3>
            <p>
              These statements are placeholders until approved client testimonials are
              added before launch.
            </p>
          </div>

          <div className="testimonialCards">
            <blockquote>
              <p>
                “I feel stronger, move better and finally have a clear structure to follow.”
              </p>
              <footer>
                <strong>Client testimonial placeholder</strong>
                <span>Strength and confidence</span>
              </footer>
            </blockquote>

            <blockquote>
              <p>
                “Professional, encouraging and completely focused on long-term progress.”
              </p>
              <footer>
                <strong>Client testimonial placeholder</strong>
                <span>Coaching experience</span>
              </footer>
            </blockquote>

            <blockquote>
              <p>
                “The coaching gave me confidence to train properly again.”
              </p>
              <footer>
                <strong>Client testimonial placeholder</strong>
                <span>Return to training</span>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="resultsTimeline">
          <div>
            <p className="eyebrow">How progress is measured</p>
            <h3>A clear process from consultation to long-term results.</h3>
          </div>

          <ol>
            <li>
              <span>01</span>
              <div>
                <h4>Consultation</h4>
                <p>Discuss goals, training history, current challenges and priorities.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h4>Assessment after joining</h4>
                <p>Complete a complimentary initial assessment once your membership has begun. This is separate from your weekly coaching sessions.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h4>Progression</h4>
                <p>Follow a structured plan that develops as your ability improves.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h4>Review</h4>
                <p>Measure progress, adjust the plan and keep momentum moving forward.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="resultsCta">
          <div>
            <p className="eyebrow">Your progress starts here</p>
            <h3>Build strength with a plan designed around you.</h3>
            <p>
              Arrange your consultation to discuss what you want to improve and how True
              Gain can support your next stage.
            </p>
          </div>
        </div>
      </section>
      
      
      <ClientPortalPreview />

      <section className="section caseStudiesSection" id="case-studies">
        <div className="caseStudiesHero">
          <div className="caseStudiesHeroCopy">
            <p className="eyebrow">Results and progress</p>
            <h2>Real progress. Measured properly.</h2>
            <p>
              True Gain focuses on outcomes that matter beyond appearance: improved strength,
              better movement, greater confidence, fewer limitations and long-term consistency.
            </p>
          </div>

          <div className="caseStudiesHeroCard">
            <span>Before launch</span>
            <strong>Real client stories will be added here</strong>
            <p>Only approved testimonials, photographs and measurable results will be published.</p>
          </div>
        </div>

        <div className="caseStudyGrid">
          <article className="caseStudyCard">
            <div className="caseStudyImage caseStudyImageStrength">
              <span>Client story coming soon</span>
            </div>
            <div className="caseStudyContent">
              <p className="planStrap">Strength</p>
              <h3>Build confidence under load.</h3>
              <p>
                A future case study will show how structured coaching can improve technique,
                increase strength and help a client feel more capable in everyday life.
              </p>
              <div className="caseStudyMetrics">
                <span>Technique</span>
                <span>Strength</span>
                <span>Confidence</span>
              </div>
            </div>
          </article>

          <article className="caseStudyCard">
            <div className="caseStudyImage caseStudyImageMovement">
              <span>Client story coming soon</span>
            </div>
            <div className="caseStudyContent">
              <p className="planStrap">Movement</p>
              <h3>Move with greater freedom.</h3>
              <p>
                This space will highlight meaningful improvements in mobility, movement quality
                and confidence returning to activities that previously felt difficult.
              </p>
              <div className="caseStudyMetrics">
                <span>Mobility</span>
                <span>Control</span>
                <span>Independence</span>
              </div>
            </div>
          </article>

          <article className="caseStudyCard">
            <div className="caseStudyImage caseStudyImageConsistency">
              <span>Client story coming soon</span>
            </div>
            <div className="caseStudyContent">
              <p className="planStrap">Consistency</p>
              <h3>Make progress sustainable.</h3>
              <p>
                A future client story will demonstrate how individual programming, accountability
                and recovery support can turn short-term effort into long-term consistency.
              </p>
              <div className="caseStudyMetrics">
                <span>Routine</span>
                <span>Accountability</span>
                <span>Longevity</span>
              </div>
            </div>
          </article>
        </div>

        <div className="milestonePanel">
          <div className="milestoneIntro">
            <p className="eyebrow">How results are tracked</p>
            <h3 className="milestoneHeadline">
              Progress is more than a before <span>&amp;</span> after photo.
            </h3>
            <p>
              Results are reviewed using measures that reflect each client’s goals, starting point
              and lifestyle. The aim is to show genuine improvement without unrealistic claims.
            </p>
          </div>

          <div className="milestoneGrid">
            <article>
              <span>01</span>
              <h4>Strength markers</h4>
              <p>Improved load, control, repetitions and exercise confidence.</p>
            </article>

            <article>
              <span>02</span>
              <h4>Movement markers</h4>
              <p>Better mobility, balance, range of motion and quality of movement.</p>
            </article>

            <article>
              <span>03</span>
              <h4>Lifestyle markers</h4>
              <p>More energy, consistency, independence and confidence outside the studio.</p>
            </article>

            <article>
              <span>04</span>
              <h4>Recovery markers</h4>
              <p>Improved readiness, reduced stiffness and better training continuity.</p>
            </article>
          </div>
        </div>

        <div className="caseStudiesCta">
          <div>
            <p className="eyebrow">Create your own progress story</p>
            <h3>Start with a plan built around you.</h3>
            <p>
              Book a free consultation to discuss the outcomes that matter most to you and
              how they can be measured over time.
            </p>
          </div>

          <a className="button buttonGold" href="#booking">
            Book a Consultation
          </a>
        </div>
      </section>

      <section className="section bookingSection" id="booking">
        <div className="bookingHero">
          <div className="bookingHeroCopy">
            <p className="eyebrow">Free consultation</p>
            <h2>Your journey starts with a conversation.</h2>
            <p>
              Arrange a free 30-minute consultation to discuss your goals, training
              history, current challenges and the type of coaching support that would
              suit you best. There is no exercise, assessment or pressure to join.
            </p>
          </div>

          <div className="bookingHeroCard">
            <span>Consultation length</span>
            <strong>30 minutes</strong>
            <p>Private conversation · No obligation</p>
          </div>
        </div>

        <div className="bookingValueGrid">
          <article>
            <span>01</span>
            <h3>Clear direction</h3>
            <p>
              Identify the most important priorities and the type of support that could
              help you move forward.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Personal recommendation</h3>
            <p>
              Receive an honest recommendation based on your goals, availability and
              preferred level of coaching.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>No hard sell</h3>
            <p>
              Use the consultation to ask questions and decide whether True Gain feels
              like the right fit for you.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>A clear next step</h3>
            <p>
              Leave knowing exactly what happens next if you decide to begin a membership.
            </p>
          </article>
        </div>

        <div className="bookingProcess">
          <div className="bookingProcessIntro">
            <p className="eyebrow">What the consultation covers</p>
            <h3>A structured 30-minute conversation.</h3>
            <p>
              The consultation is designed to understand your situation before any
              recommendation is made.
            </p>
          </div>

          <ol className="bookingTimeline">
            <li>
              <span>01</span>
              <div>
                <h4>Welcome</h4>
                <p>Brief introduction to True Gain and how private coaching works.</p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <h4>Goals and lifestyle</h4>
                <p>Discuss what you want to improve and what currently gets in the way.</p>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <h4>Training history</h4>
                <p>Review your experience, confidence, injuries and previous approaches.</p>
              </div>
            </li>

            <li>
              <span>04</span>
              <div>
                <h4>Recommended pathway</h4>
                <p>Identify the membership or service that best matches your needs.</p>
              </div>
            </li>

            <li>
              <span>05</span>
              <div>
                <h4>Questions and next steps</h4>
                <p>Ask anything you need and decide whether you would like to continue.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bookingPanel">
          <div className="bookingPanelCopy">
            <p className="planStrap">Live booking integration</p>
            <h3>Choose a consultation time.</h3>
            <p>
              This panel is ready to connect to Calendly, Google Calendar or another
              booking platform before launch. Until then, use the enquiry form below
              to request a suitable time.
            </p>

            <div className="bookingTrust">
              <span>Private studio</span>
              <span>1:1 coaching</span>
              <span>Bushmead, Luton</span>
              <span>Response within 24 hours</span>
            </div>
          </div>

          <div className="bookingPlaceholder">
            <span className="bookingPlaceholderIcon">◷</span>
            <strong>Booking calendar coming soon</strong>
            <p>Request your preferred consultation time using the form below.</p>
          </div>
        </div>

        <div className="bookingFinalCta">
          <div>
            <p className="eyebrow">Ready to take the first step?</p>
            <h3>Your future progress starts with one conversation.</h3>
          </div>
          <a className="button buttonGold" href="#contact">
            Arrange my consultation
          </a>
        </div>
      </section>

      <BookingSystem />

      <section className="section contactSection contactExperienceSection" id="contact">
        <div className="contactExperienceHero">
          <div>
            <p className="eyebrow">Book a consultation</p>
            <h2>Start with a conversation.</h2>
            <p>
              Your first step is a free 30-minute consultation to discuss your goals,
              training history, current challenges and the level of support that would
              suit you best.
            </p>
          </div>

          <div className="contactResponseCard">
            <span>Typical response time</span>
            <strong>Within 24 hours</strong>
            <p>Monday to Saturday</p>
          </div>
        </div>

        <div className="contactExperienceGrid">
          <div className="contactJourneyPanel">
            <p className="planStrap">What happens next</p>
            <h3>A clear, pressure-free process.</h3>

            <ol>
              <li>
                <span>01</span>
                <div>
                  <h4>Send your enquiry</h4>
                  <p>Share your goals, preferred contact details and any useful background information.</p>
                </div>
              </li>

              <li>
                <span>02</span>
                <div>
                  <h4>Free consultation</h4>
                  <p>Have a 30-minute conversation about your goals and whether True Gain is the right fit.</p>
                </div>
              </li>

              <li>
                <span>03</span>
                <div>
                  <h4>Choose your membership</h4>
                  <p>Select the most suitable level of coaching support with no pressure to decide on the call.</p>
                </div>
              </li>

              <li>
                <span>04</span>
                <div>
                  <h4>Initial assessment</h4>
                  <p>
                    Once you join, your complimentary assessment is arranged separately
                    and does not count towards your weekly coaching sessions.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <form className="contactForm" action="mailto:hello@truegainperformance.co.uk" method="post" encType="text/plain">
            <div className="contactFormHeading">
              <p className="planStrap">Consultation enquiry</p>
              <h3>Tell me what you want to improve.</h3>
              <p>
                Complete the form below and I will respond personally to arrange your consultation.
              </p>
            </div>

            <div className="contactFields">
              <label>
                <span>Full name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>

              <label>
                <span>Email address</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>

              <label>
                <span>Phone number</span>
                <input type="tel" name="phone" placeholder="Optional" />
              </label>

              <label>
                <span>Preferred service</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Sports Massage">Sports Massage</option>
                  <option value="Complete Coaching">Complete Coaching</option>
                  <option value="Not Sure">Not sure yet</option>
                </select>
              </label>

              <label className="contactFieldWide">
                <span>What would you like help with?</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your goals, current challenges and training experience."
                  required
                />
              </label>
            </div>

            <button className="button buttonGold contactSubmit" type="submit">
              Request free consultation
            </button>

            <p className="contactPrivacy">
              Your details will only be used to respond to your enquiry.
            </p>
          </form>
        </div>

        <div className="contactDetailsRow">
          <article>
            <span>Location</span>
            <strong>Bushmead, Luton</strong>
            <p>Private, appointment-only coaching studio.</p>
          </article>

          <article>
            <span>Consultations</span>
            <strong>Free · 30 minutes</strong>
            <p>A conversation only. No exercise or assessment takes place.</p>
          </article>

          <article>
            <span>Availability</span>
            <strong>By appointment</strong>
            <p>Session times are agreed around membership availability.</p>
          </article>
        </div>

        <div className="contactFaq">
          <div>
            <p className="eyebrow">Before you enquire</p>
            <h3>Common questions.</h3>
          </div>

          <div className="contactFaqList">
            <details>
              <summary>Do I need training experience?</summary>
              <p>No. Coaching is adapted to your current ability, experience and confidence level.</p>
            </details>

            <details>
              <summary>Does the consultation include an assessment?</summary>
              <p>
                No. The free consultation is a conversation. The complimentary assessment
                is completed only after a membership has been purchased.
              </p>
            </details>

            <details>
              <summary>Does the assessment use one of my weekly sessions?</summary>
              <p>
                No. It is arranged separately, so your full weekly coaching allocation remains available.
              </p>
            </details>

            <details>
              <summary>Can I visit the studio before joining?</summary>
              <p>
                Studio visits can be arranged as part of the consultation process where appropriate.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="/true-gain-logo.png" alt="True Gain Performance" />
        <p>Strength. Recovery. Longevity.</p>
        <span>© 2026 True Gain Performance</span>
      </footer>
    </main>
  );
}