import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanishq | Software Engineer & AI Systems",
  description: "Software Engineer | Backend & AI Systems | Performance Optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

