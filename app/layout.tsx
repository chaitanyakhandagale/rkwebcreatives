import type { Metadata } from "next";

import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
 import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "RK Web Creatives — Freelance Web Design & Development Studio",
  description:
    "RK Web Creatives is a freelance studio building WordPress websites, custom React/Node/Next.js applications, digital marketing, and static site hosting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}