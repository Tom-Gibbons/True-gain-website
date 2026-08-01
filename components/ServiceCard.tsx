type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="serviceCard">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#contact">Enquire →</a>
    </article>
  );
}
