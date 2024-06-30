import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const lunchtype = localFont({
  src: [
    {
      path: "./fonts/Lunchtype22-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lunchtype22-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-lunchtype",
});

export const metadata: Metadata = {
  title: "Sarah Zhang",
  description: "Sarah designs and codes for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lunchtype.variable} text-neutral-900`}>
      <body>{children}</body>
    </html>
  );
}
