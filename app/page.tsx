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

      <section className="heroSplit" id="top">
        <div className="heroPanel">
          <p className="eyebrow">Strength. Movement. Recovery. Longevity.</p>
          <h1>
            Build strength.
            <span>Move with confidence.</span>
            Stay capable for life.
          </h1>
          <p className="heroText">
            Premium, evidence-led 1:1 coaching in a private studio in Bushmead, Luton. Helping adults build strength, move better and stay capable for life.
          </p>

          <div className="heroActions">
            <a className="button buttonGold" href="#contact">Book a free consultation</a>
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
            Every plan is built around your current ability, lifestyle and long-term goals—not a generic template.
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
            <p className="planStrap">Train</p>
            <h3>Personal training</h3>
            <p>Expert one-to-one coaching for strength, movement and confidence.</p>
            <span>From £55/session</span>
          </article>
          <article>
            <p className="planStrap">Recover</p>
            <h3>Sports massage</h3>
            <p>Focused treatment and recovery support to help you move and feel better.</p>
            <span>From £35/session</span>
          </article>
          <article className="featured">
            <p className="planStrap">Perform</p>
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
            <h3>Book a free consultation.</h3>
            <p>We will discuss your goals, current challenges and the most suitable True Gain service for you.</p>
          </div>
          <a className="button buttonGold" href="#contact">Book free consultation</a>
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
            <span>Start with a free 30-minute consultation. Once a membership is purchased, you will receive a complimentary initial assessment before regular coaching begins.</span>
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

        
        <div className="onboardingNotice">
          <div>
            <p className="eyebrow">Your onboarding process</p>
            <h3>Consult first. Assess after joining. Then begin coaching.</h3>
            <p>
              The free consultation is a conversation about your goals, training history,
              current challenges and the most suitable membership. No exercise takes place.
            </p>
          </div>

          <div className="onboardingSteps">
            <article>
              <span>01</span>
              <div>
                <h4>Free consultation</h4>
                <p>Discuss your goals, ask questions and decide whether True Gain is the right fit.</p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h4>Membership begins</h4>
                <p>Choose the level of support that best suits your goals, availability and preferences.</p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h4>Complimentary assessment</h4>
                <p>
                  Once you have joined, complete a full initial assessment covering movement,
                  mobility, strength, training history and programme planning.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h4>Regular coaching starts</h4>
                <p>
                  Your assessment is separate and does not count towards your weekly coaching
                  sessions, so you still receive your full session allocation.
                </p>
              </div>
            </article>
          </div>
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
          <a className="button buttonGold" href="#contact">Book free consultation</a>
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

      <section className="section studioSection" id="studio">
        <div className="studioCopy">
          <p className="eyebrow">Private studio experience</p>
          <h2>Private studio. Complete focus.</h2>
          <p>
            A purpose-built, appointment-only coaching space on Bushmead, Luton,
            created for focused one-to-one training without the noise and distraction of a commercial gym.
          </p>

          <div className="studioStats">
            <div>
              <strong>1:1</strong>
              <span>Private coaching</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Personal attention</span>
            </div>
            <div>
              <strong>Local</strong>
              <span>Bedfordshire & Hertfordshire</span>
            </div>
          </div>

          <div className="studioPoints">
            <span>Strength training</span>
            <span>Recovery and mobility</span>
            <span>Premium equipment</span>
            <span>Calm, professional environment</span>
          </div>

          <a className="button buttonOutline studioCta" href="#contact">
            Arrange a studio consultation
          </a>
        </div>

        <div className="studioVisual">
          <div className="studioGallery">
            <div className="studioMain" aria-label="Wide view of the complete True Gain studio">
              <span className="imageLabel">Studio as a whole</span>
            </div>
            <div className="studioSmall studioTwo" aria-label="Premium strength equipment in the True Gain studio">
              <span className="imageLabel">Strength equipment</span>
            </div>
            <div className="studioSmall studioThree" aria-label="Dedicated sports massage and recovery area">
              <span className="imageLabel">Recovery area</span>
            </div>
          </div>

          <div className="studioLocationCard">
            <div className="locationInfo">
              <p className="planStrap">Location</p>
              <p>
                Conveniently positioned for clients travelling from across
                Bedfordshire and Hertfordshire.
              </p>
            </div>

            <div className="locationContent">
              <h3>Bushmead, Luton</h3>
            </div>
          </div>
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
              Sessions are structured, personal and focused on long-term results—without the
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
                <p>Your programme, progression and support are built around your needs—not a template.</p>
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

          <a className="button buttonGold coachCta" href="#contact">
            Book a free consultation
          </a>
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
              Results will vary, but every programme is designed around measurable,
              meaningful progress.
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
              Book a free consultation to discuss what you want to improve and how True
              Gain can support your next stage.
            </p>
          </div>
          <a className="button buttonGold" href="#contact">Book free consultation</a>
        </div>
      </section>
      <section className="section contactSection" id="contact">
        <div className="contactIntro">
          <p className="eyebrow">Your next step</p>
          <h2>Start with a conversation.</h2>
          <p>
            Book a free 30-minute consultation to discuss your goals, training history and the most suitable way to work together. If you join, your complimentary initial assessment will be arranged separately before regular coaching begins.
          </p>

          <div className="contactHighlights">
            <div>
              <strong>30 min</strong>
              <span>Free consultation</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Private coaching</span>
            </div>
            <div>
              <strong>Luton</strong>
              <span>Bushmead studio</span>
            </div>
          </div>

          <div className="contactLocation">
            <p className="planStrap">Studio location</p>
            <h3>Bushmead, Luton</h3>
            <p>Serving clients across Bedfordshire and Hertfordshire.</p>
          </div>
        </div>

        <div className="contactPanel">
          <div className="contactPanelHeader">
            <p className="planStrap">Consultation request</p>
            <h3>Tell me what you want to achieve.</h3>
            <p>
              Share a few details below and I’ll be in touch to arrange the next step.
            </p>
          </div>

          <form className="contactForm">
            <div className="twoCol">
              <label>
                <span>Full name</span>
                <input aria-label="Full name" placeholder="Your name" />
              </label>
              <label>
                <span>Email address</span>
                <input aria-label="Email address" type="email" placeholder="you@email.com" />
              </label>
            </div>

            <div className="twoCol">
              <label>
                <span>Phone number</span>
                <input aria-label="Phone number" placeholder="Your phone number" />
              </label>
              <label>
                <span>Service interest</span>
                <select aria-label="Coaching interest" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Train membership</option>
                  <option>Recover membership</option>
                  <option>Perform membership</option>
                  <option>One-off personal training</option>
                  <option>30-minute sports massage</option>
                  <option>1-hour sports massage</option>
                </select>
              </label>
            </div>

            <label>
              <span>Your main goal</span>
              <textarea
                aria-label="Goals"
                rows={5}
                placeholder="What would you most like to improve?"
              />
            </label>

            <div className="contactConsent">
              <input id="contact-consent" type="checkbox" />
              <label htmlFor="contact-consent">
                I agree to be contacted about my consultation request.
              </label>
            </div>

            <button className="button buttonGold" type="button">
              Request consultation
            </button>

            <small>
              This form is currently a visual placeholder and will be connected before launch.
            </small>
          </form>
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
