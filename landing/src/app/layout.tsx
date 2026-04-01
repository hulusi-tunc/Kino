import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kino — Your AI Video Director",
  description:
    "Create cinematic videos from text prompts. Describe your vision, Kino directs the scene.",
  openGraph: {
    title: "Kino — Your AI Video Director",
    description:
      "Create cinematic videos from text prompts. Describe your vision, Kino directs the scene.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
