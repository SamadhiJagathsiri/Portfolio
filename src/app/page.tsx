import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ContactSection from '@/app/components/ContactSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Samadhi Jagathsiri — Full-Stack & AI Software Engineer | Internship Portfolio',
  description: 'Final year Computer Science undergraduate at University of Kelaniya. AI-driven applications, full-stack systems, and machine learning. 5 shipped projects, GPA 3.541.',
  keywords: ['software engineer', 'full-stack developer', 'AI engineer', 'machine learning', 'React developer', 'Spring Boot', 'Python', 'internship', 'computer science student', 'Sri Lanka'],
  openGraph: {
    title: 'Samadhi Jagathsiri — Full-Stack & AI Software Engineer',
    description: 'Final year CS undergraduate at University of Kelaniya. Building AI-driven full-stack systems. 5 shipped projects, seeking internships.',
    type: 'website',
  },
};

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Subtle grid lines background */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <ScrollRevealInit />
      </main>
    </>
  );
}