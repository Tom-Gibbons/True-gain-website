"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  age: string;
  focus: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I'd tried gyms for years but never stayed consistent. The structure and accountability finally made training part of my routine.",
    name: "James T.",
    age: "Age 47",
    focus: "Consistency & accountability",
  },
  {
    quote:
      "I feel stronger, move with more confidence and no longer worry about everyday aches holding me back.",
    name: "Sarah M.",
    age: "Age 54",
    focus: "Strength & confidence",
  },
  {
    quote:
      "Every session has a purpose. I've become noticeably stronger without feeling beaten up after training.",
    name: "David R.",
    age: "Age 49",
    focus: "Sustainable progress",
  },
  {
    quote:
      "The private studio made me feel comfortable from day one. I never felt judged and always knew what I was working towards.",
    name: "Emma C.",
    age: "Age 45",
    focus: "Private coaching",
  },
  {
    quote:
      "My mobility has improved massively. I'm back hiking with my family without stiffness limiting me.",
    name: "Mark H.",
    age: "Age 58",
    focus: "Mobility & lifestyle",
  },
  {
    quote:
      "The coaching is personal, encouraging and completely tailored to me. It doesn't feel like a generic gym programme.",
    name: "Claire P.",
    age: "Age 43",
    focus: "Personalised coaching",
  },
  {
    quote:
      "I wanted to stay active as I got older. I now feel stronger and more capable than I did ten years ago.",
    name: "Andrew W.",
    age: "Age 61",
    focus: "Longevity & capability",
  },
  {
    quote:
      "The biggest difference has been consistency. Having someone genuinely invested in my progress keeps me accountable.",
    name: "Lisa B.",
    age: "Age 52",
    focus: "Long-term support",
  },
  {
    quote:
      "The attention to technique and long-term health gave me confidence to train properly again after years away.",
    name: "Michael S.",
    age: "Age 46",
    focus: "Return to training",
  },
];

function shuffledTestimonials(): Testimonial[] {
  const copy = [...testimonials];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy.slice(0, 3);
}

export default function RotatingTestimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>(
    testimonials.slice(0, 3)
  );

  useEffect(() => {
    setVisibleTestimonials(shuffledTestimonials());
  }, []);

  return (
    <div className="testimonialCards">
      {visibleTestimonials.map((testimonial, index) => (
        <blockquote
          className="rotatingTestimonialCard"
          key={`${testimonial.name}-${index}`}
          style={{ animationDelay: `${index * 140}ms` }}
        >
          <p>“{testimonial.quote}”</p>

          <footer>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.age}</span>
            </div>
            <span>{testimonial.focus}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
