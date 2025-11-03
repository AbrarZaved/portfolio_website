import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Abrar Javed Sorafi - Backend Developer & Python Expert",
  description: "Full-stack developer specializing in Django, Python, and scalable backend systems. Building secure, intelligent, and high-performance web applications.",
  keywords: ["Abrar Javed Sorafi", "Backend Developer", "Django", "Python", "Full Stack Developer", "Web Developer", "API Development", "Database Design"],
  authors: [{ name: "Abrar Javed Sorafi", url: "https://github.com/AbrarZaved" }],
  creator: "Abrar Javed Sorafi",
  openGraph: {
    title: "Abrar Javed Sorafi - Backend Developer & Python Expert",
    description: "Full-stack developer specializing in Django, Python, and scalable backend systems.",
    url: "https://abrarjaved.dev",
    siteName: "Abrar Javed Sorafi Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abrar Javed Sorafi - Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abrar Javed Sorafi - Backend Developer & Python Expert",
    description: "Full-stack developer specializing in Django, Python, and scalable backend systems.",
    images: ["/images/og-image.jpg"],
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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-inter antialiased bg-animated text-white min-h-screen`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
