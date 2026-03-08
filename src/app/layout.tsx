import type { Metadata } from "next";
import { Geist, Geist_Mono, Rosarivo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rosarivo = Rosarivo({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Leadle | AI Outreach Engine for Home Services",
  description: "Automate your cold email and SMS reactivation pipelines with true AI personalization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rosarivo.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-foreground/10 selection:text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
