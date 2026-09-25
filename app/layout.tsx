import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { SITE_DESCRIPTION } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Fork — Run the whole business from one app";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Fork",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://forkhr.com'),
  openGraph: {
    title: siteTitle,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    type: 'website',
    siteName: 'Fork',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fork Workforce Inc.',
    url: 'https://forkhr.com',
    logo: 'https://forkhr.com/favicon.svg',
    brand: {
      '@type': 'Brand',
      name: 'Fork',
    },
  }

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fork',
    url: 'https://forkhr.com',
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
          />
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
