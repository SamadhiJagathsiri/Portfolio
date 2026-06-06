import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Samadhi Jagathsiri — Full-Stack & AI Software Engineer | Internship Portfolio',
  description: 'Final year Computer Science undergraduate at University of Kelaniya. Passionate about AI-driven applications, full-stack systems, and machine learning. 5 shipped projects, GPA 3.541.',
  keywords: ['software engineer', 'full-stack developer', 'AI engineer', 'machine learning', 'React developer', 'Spring Boot', 'Python', 'internship', 'computer science student', 'Sri Lanka', 'University of Kelaniya'],
  authors: [{ name: 'Samadhi Jagathsiri' }],
  creator: 'Samadhi Jagathsiri',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'Samadhi Jagathsiri — Full-Stack & AI Software Engineer',
    description: 'Final year CS undergraduate at University of Kelaniya. Building AI-driven full-stack systems. 5 shipped projects, seeking internships.',
    images: [{
      url: '/assets/images/app_logo.png',
      width: 1200,
      height: 630,
      alt: 'DevFolio - Samadhi Jagathsiri Software Engineering Portfolio'
    }],
    siteName: 'DevFolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samadhi Jagathsiri — Full-Stack & AI Software Engineer',
    description: 'Final year CS undergraduate. Building AI-driven full-stack systems. Seeking internships.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Person Schema for Samadhi Jagathsiri
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Samadhi Jagathsiri',
    url: baseUrl,
    image: `${baseUrl}/assets/images/app_logo.png`,
    jobTitle: 'Software Engineer',
    description: 'Final year Computer Science undergraduate at University of Kelaniya. Passionate about AI-driven applications, full-stack systems, and machine learning.',
    email: 'anusarasamm@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Matara',
      addressCountry: 'LK',
    },
    sameAs: [
      'https://github.com/samadhi-jagathsiri',
      'https://linkedin.com/in/samadhi-jagathsiri',
    ],
    knowsAbout: ['React', 'Spring Boot', 'FastAPI', 'Python', 'Java', 'LangChain', 'Machine Learning', 'Docker', 'MongoDB', 'MySQL'],
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: baseUrl,
    name: 'DevFolio',
    description: 'Samadhi Jagathsiri — Full-Stack & AI Software Engineer Portfolio',
    creator: {
      '@type': 'Person',
      name: 'Samadhi Jagathsiri',
    },
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
</head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}