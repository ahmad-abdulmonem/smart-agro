import type { Metadata } from "next";
import { Livvic, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-livvic",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Smart Agro",
  description: "Smart Agro Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${livvic.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}