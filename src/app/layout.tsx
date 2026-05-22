import type { Metadata } from "next";
import { Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "En construction",
  description: "Page en construction - cette page arrive bientôt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
