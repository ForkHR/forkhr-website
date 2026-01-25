import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import BlobBackground from "@/components/visual/BlobBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fork - Workforce Management Made Easy",
  description: "Workforce management made easy with scheduling, time tracking, staff HR, and engagement tools.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Fork - Workforce Management Made Easy",
    description: "Workforce management made easy with scheduling, time tracking, staff HR, and engagement tools.",
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fork - Workforce Management Made Easy",
    description: "Workforce management made easy with scheduling, time tracking, staff HR, and engagement tools.",
    images: ['/og-image.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col bg-background px-2 md:px-0">
          <BlobBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
