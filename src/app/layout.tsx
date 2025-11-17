import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Roboto_Mono, Roboto } from "next/font/google";

const headingFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Adult App",
  description: "Adulting guides and community for young adults",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--color-bg)] text-[var(--color-text)]`}
      >
        {children}
      </body>
    </html>
  );
}
