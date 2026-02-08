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
  title: {
    default: "Fork - All-in-One Workforce Management Platform",
    template: "%s | Fork",
  },
  description: "All-in-one workforce management platform for scheduling, time tracking, HR onboarding, and engagement. Built for teams in Restaurants & Cafés, Retail Stores, Hotels & Hospitality, Healthcare Clinics, Fitness & Gyms, and Franchises.",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://forkhr.com'),
  openGraph: {
    title: "Fork - All-in-One Workforce Management Platform",
    description: "All-in-one workforce management platform for scheduling, time tracking, HR onboarding, and engagement. Built for teams in Restaurants & Cafés, Retail Stores, Hotels & Hospitality, Healthcare Clinics, Fitness & Gyms, and Franchises.",
    images: ['/og-image.png'],
    type: 'website',
    siteName: 'Fork',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fork - All-in-One Workforce Management Platform",
    description: "All-in-one workforce management platform for scheduling, time tracking, HR onboarding, and engagement. Built for teams in Restaurants & Cafés, Retail Stores, Hotels & Hospitality, Healthcare Clinics, Fitness & Gyms, and Franchises.",
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
        <div className="relative flex min-h-screen flex-col bg-background">
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
