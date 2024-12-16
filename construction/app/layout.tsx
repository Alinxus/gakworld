import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gakworld Constructions",
  description: "Building the future with innovative construction and engineering solutions.",
  openGraph: {
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Gakworld+Constructions",
        width: 1200,
        height: 630,
        alt: "Gakworld Constructions Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
