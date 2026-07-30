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
  title: "Tanishq Somani | Full-Stack Engineer",
  description: "Full-stack engineer who ships real products end to end — a live consumer app with real users, a clinical NLP pipeline improved from 53% to 86% accuracy, and an open-source fix to uv in Rust. Portfolio of production systems, AI/LLM engineering, and machine learning.",
  keywords: ["Full-Stack Engineer", "Software Engineer", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Python", "Rust", "AI Systems", "LLM Engineering", "RAG", "Machine Learning"],
  authors: [{ name: "Tanishq Somani" }],
  openGraph: {
    title: "Tanishq Somani | Full-Stack Engineer",
    description: "Full-stack engineer who ships real products end to end — live consumer apps, clinical AI pipelines, and open-source contributions.",
    type: "website",
    locale: "en_US",
    url: "https://t-tanishqs.vercel.app",
    siteName: "Tanishq Somani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Somani | Full-Stack Engineer",
    description: "Full-stack engineer who ships real products end to end — live consumer apps, clinical AI pipelines, and open-source contributions.",
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

