import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "True Gain Performance | Personalised Online Strength Coaching",
  description: "Online strength coaching for adults 30+: personalised programming, weekly check-ins and technique feedback. £150 per calendar month with an initial three-month commitment.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
