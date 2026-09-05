import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Gain Performance | Strength, Recovery & Longevity",
  description:
    "Private 1:1 strength coaching and sports massage for adults aged 30+ in Bushmead, Luton, with flexible single appointments and prepaid session blocks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
