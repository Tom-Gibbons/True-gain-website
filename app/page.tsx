const services = [
  ["01", "One-to-one personal training", "Fully coached sessions with expert guidance, clear progression and accountability."],
  ["02", "Hybrid coaching", "Combine in-person coaching with a structured programme to complete independently."],
  ["03", "Online coaching", "Personalised programming, weekly check-ins and form feedback wherever you train."],
  ["04", "Recovery and mobility", "Sports massage, mobility and recovery support to help you move and train consistently."],
];

const memberships = [
  {label:"Foundation",title:"Performance",price:"£279",copy:"For consistent coaching and structured weekly progress.",features:["Weekly personal training session","Personalised programme","Monthly progress review","App access and accountability"]},
  {label:"Most popular",title:"Performance + Recovery",price:"£349",copy:"Strength coaching combined with dedicated recovery support.",features:["Everything in Performance","Monthly massage or recovery session","Mobility and recovery plan","Priority support"],featured:true},
  {label:"Premium",title:"Elite",price:"£499",copy:"Maximum coaching, support and accountability.",features:["Two coached sessions each week","Priority scheduling","Recovery support included","Direct coaching access"]},
];

const oneOff = [
  ["1-hour PT session", "£55", "A focused one-to-one coaching session with no ongoing commitment."],
  ["30-minute massage", "£35", "Targeted sports massage to ease tension and support recovery."],
  ["1-hour massage", "£60", "A longer sports massage for more thorough recovery work."],
];

export default function Home() {
  return <main>
    <header className="header">
      <a href="#top" className="brand"><img src="/true-gain-logo.png" alt="True Gain Performance" /></a>
      <nav><a href="#about">About</a><a href="#services">Services</a><a href="#memberships">Memberships</a><a href="#one-off">One-off sessions</a><a href="#studio">Studio</a><a href="#contact">Contact</a></nav>
      <a className="button outline" href="#contact">Book a consultation</a>
    </header>

    <section className="hero" id="top">
      <div className="heroInner"><p className="eyebrow">Train. Recover. Perform.</p><h1>Build strength.<span>Move with confidence.</span>Stay capable for life.</h1><p className="heroText">Evidence-led personal training, recovery and longevity coaching for adults aged 30+ who want to feel stronger, move better and stay active.</p><div className="actions"><a className="button gold" href="#contact">Book a free consultation</a><a className="button outline" href="#services">Explore coaching</a></div></div>
      <div className="heroStats"><div><strong>01</strong><span>Strength coaching</span></div><div><strong>02</strong><span>Recovery support</span></div><div><strong>03</strong><span>Longevity focused</span></div><div><strong>04</strong><span>Personalised plans</span></div></div>
    </section>

    <section className="section intro" id="about"><div className="heading centered"><p className="eyebrow">Welcome to True Gain</p><h2>Coaching that makes a lasting difference</h2><p>True Gain combines structured strength training, movement coaching and recovery support to help you become stronger, more capable and more confident in everyday life.</p></div><div className="pillars">{[["Train","Personal training and progressive strength programmes built around your goals."],["Recover","Mobility, massage and recovery support designed to keep you moving well."],["Perform","Long-term coaching to improve strength, confidence and physical independence."]].map(([title,text],i)=><article className={`pillar p${i+1}`} key={title}><div><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="section dark" id="services"><div className="heading"><p className="eyebrow">How True Gain helps</p><h2>Coaching designed around real life</h2></div><div className="serviceGrid">{services.map(([n,t,x])=><article className="serviceCard" key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div></section>

    <section className="section" id="memberships"><div className="heading centered"><p className="eyebrow">Memberships</p><h2>Choose the level of support you need</h2></div><div className="pricingGrid">{memberships.map(plan=><article className={`priceCard ${plan.featured?"featured":""}`} key={plan.title}><p className="planLabel">{plan.label}</p><h3>{plan.title}</h3><p className="price">{plan.price}<span>/month</span></p><p>{plan.copy}</p><ul>{plan.features.map(f=><li key={f}>{f}</li>)}</ul><a className={`button ${plan.featured?"gold":"outline"}`} href="#contact">Enquire now</a></article>)}</div></section>

    <section className="section dark" id="one-off"><div className="heading centered"><p className="eyebrow">Pay as you go</p><h2>One-off sessions</h2></div><div className="pricingGrid">{oneOff.map(([title,price,copy])=><article className="priceCard" key={title}><p className="planLabel">No commitment</p><h3>{title}</h3><p className="price">{price}<span>/session</span></p><p>{copy}</p><a className="button outline" href="#contact">Enquire now</a></article>)}</div></section>

    <section className="section studio" id="studio"><div className="studioCopy"><p className="eyebrow">The private studio</p><h2>Focused coaching without the commercial gym atmosphere</h2><p>Train in a calm, appointment-only environment where the focus stays entirely on your progress.</p><div className="tags"><span>Private sessions</span><span>Premium equipment</span><span>Personal attention</span><span>Convenient local setting</span></div></div><div className="gallery"><div className="g1"/><div className="g2"/><div className="g3"/></div></section>

    <section className="section contact" id="contact"><div><p className="eyebrow">Start your True Gain journey</p><h2>Book your free consultation</h2><p>Tell me what you want to improve and what successful coaching would look like for you.</p></div><form><input placeholder="Full name"/><input placeholder="Email address" type="email"/><input placeholder="Phone number"/><select defaultValue=""><option value="" disabled>Coaching interest</option><option>Personal training</option><option>Hybrid coaching</option><option>Online coaching</option><option>Sports massage</option></select><textarea placeholder="What would you most like to improve?" rows={5}/><button className="button gold" type="button">Request consultation</button></form></section>

    <footer><img src="/true-gain-logo.png" alt="True Gain Performance"/><p>Strength, longevity and recovery coaching for adults aged 30+.</p><p>© 2026 True Gain Performance</p></footer>
  </main>;
}
