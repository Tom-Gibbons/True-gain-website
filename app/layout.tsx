import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Gain Performance | Strength, Longevity & Recovery",
  description: "Premium personal training, recovery and longevity coaching for adults aged 30+ in Luton and surrounding areas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
