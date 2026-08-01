type MembershipCardProps = {
  name: string;
  price: string;
  strapline: string;
  features: string[];
  featured?: boolean;
};

export default function MembershipCard({
  name,
  price,
  strapline,
  features,
  featured = false,
}: MembershipCardProps) {
  return (
    <article className={featured ? "membershipCard featured" : "membershipCard"}>
      {featured ? <div className="popular">Most popular</div> : null}
      <p className="planStrap">{strapline}</p>
      <h3>{name}</h3>
      <p className="price">
        {price}
        <span>/month</span>
      </p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a
        className={featured ? "button buttonGold" : "button buttonOutline"}
        href="#contact"
      >
        Start with a consultation
      </a>
    </article>
  );
}
