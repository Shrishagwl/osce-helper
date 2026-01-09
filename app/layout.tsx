import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "./components/TopNav";
import { scenarios } from "./lib/scenarios";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSCE Helper",
  description:
    "Modern OSCE practice with realistic simulated patients, clear feedback, and structured study workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${manrope.variable} ${newsreader.variable} antialiased min-h-full text-slate-900`}
      >
        <div className="min-h-screen">
          <TopNav defaultScenarioId={scenarios[0]?.id} />
          <main>{children}</main>
          <footer className="border-t border-slate-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-medium text-slate-600">OSCE Helper</p>
              <p>
                Educational role-play only. Not for real patient care or medical advice.
              </p>
              <Link href="/about" className="text-slate-600 hover:text-slate-900">
                Our mission
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
