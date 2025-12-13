import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Somani | Software Engineer & AI Systems",
    description: "Software Engineer specializing in Backend & AI Systems, Performance Optimization, and HPC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

