import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "./structured-data";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Tanishq Somani | Software Engineer & AI Systems",
  description: "Software Engineer specializing in Backend & AI Systems, Performance Optimization, and HPC. Portfolio showcasing projects in machine learning, computer vision, and high-performance computing.",
  keywords: ["Software Engineer", "AI Systems", "Backend Development", "Performance Optimization", "Machine Learning", "HPC", "Computer Vision"],
  authors: [{ name: "Tanishq Somani" }],
  openGraph: {
    title: "Tanishq Somani | Software Engineer & AI Systems",
    description: "Software Engineer specializing in Backend & AI Systems, Performance Optimization, and HPC.",
    type: "website",
    locale: "en_US",
    url: "https://t-tanishqs.vercel.app",
    siteName: "Tanishq Somani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Somani | Software Engineer & AI Systems",
    description: "Software Engineer specializing in Backend & AI Systems, Performance Optimization, and HPC.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

