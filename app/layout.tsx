import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import JsonLd from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Inline Studylinks | Premier Overseas Education Consultancy",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Inline Studylinks",
    "overseas education consultancy",
    "study abroad",
    "study in UK",
    "study in USA",
    "study in Canada",
    "study in Australia",
    "study in Europe",
    "study in Ireland",
    "university admissions",
    "student visa guidance",
    "scholarships for international students",
    "education consultant Kochi",
    "education consultant Kerala",
    "overseas university admission",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Inline Studylinks | Premier Overseas Education Consultancy",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/celebration.jpg",
        width: 1200,
        height: 630,
        alt: "Inline Studylinks - Build Skills & Study Abroad with Top Universities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inline Studylinks | Premier Overseas Education Consultancy",
    description: siteConfig.description,
    images: ["/images/hero/celebration.jpg"],
    creator: "@inlinestudylinks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
        {children}
      </body>
    </html>
  );
}
