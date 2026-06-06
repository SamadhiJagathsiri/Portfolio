'use client';

import React, { useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  github: string;
  live: string;
  status: 'live' | 'wip' | 'archived';
  featured: boolean;
  stats: {label: string;value: string;}[];
}

const projects: Project[] = [
{
  id: 'highwaylink',
  title: 'HighwayLink',
  description: 'AI-integrated full-stack carpooling platform with real-time WebSocket updates and trip optimization.',
  longDescription:
  'Built a full-stack ride-sharing system with JWT authentication, RBAC, and real-time WebSocket updates. Integrated an AI assistant for trip optimization and external APIs for maps & weather intelligence. Deployed using containerized architecture with Docker, Vercel, and Railway CI/CD pipelines.',
  image: '/assets/images/HighwayLink.jpg',
  imageAlt: 'Carpooling platform dashboard with map view, route planning, and real-time ride matching interface on dark background',
  tags: ['React', 'Spring Boot', 'MongoDB', 'WebSockets', 'Google Gemini AI', 'Docker'],
  github: 'https://github.com/SamadhiJagathsiri/Highwaylink-Ride',
  live: 'https://highwaylink-ride.vercel.app/',
  status: 'live',
  featured: true,
  stats: [
  { label: 'Tech Stack', value: '10+' },
  { label: 'AI Powered', value: 'Yes' },
  { label: 'Real-time', value: 'WS' }]

},
{
  id: 'customer-retention-ai',
  title: 'Customer Retention AI',
  description: 'End-to-end ML system to predict customer churn and provide actionable retention insights.',
  longDescription:
  'Analyzes customer behavior to identify high-risk users, estimate revenue impact, and recommend targeted retention strategies using an ML pipeline & interactive dashboard.',
  image: '/assets/images/Customer Retention.jpg',
  imageAlt: 'Customer Retention AI dashboard with churn prediction charts and analytics visualizations',
  tags: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'Matplotlib'],
  github: 'https://github.com/SamadhiJagathsiri/Customer-Retention-AI',
  live: 'https://customer-retention-ai-a49c6n64ppesxeah9yptha.streamlit.app/',
  status: 'live',
  featured: false,
  stats: [
  { label: 'ML Pipeline', value: 'E2E' },
  { label: 'Framework', value: 'Streamlit' }]

},
{
  id: 'calmera-ai',
  title: 'Calmera AI',
  description: 'AI mental wellness chatbot with emotion detection, RAG, and sentiment analysis.',
  longDescription:
  'AI chatbot supporting mental wellness through intelligent conversation and emotion detection. Implemented sentiment analysis and Retrieval-Augmented Generation (RAG) using LangChain and FAISS.',
  image: '/assets/images/CalmEraAI.png',
  imageAlt: 'AI wellness chatbot interface with calming design, conversation bubbles, and emotion detection indicators on dark theme',
  tags: ['Python', 'LangChain', 'Cohere LLM', 'FAISS', 'NLP', 'Streamlit'],
  github: 'https://github.com/SamadhiJagathsiri/CalmeraAI_Chatbot/tree/master',
  live: 'https://calmeraaichatbot-nynkljrzdnee5hd9gcwiwq.streamlit.app/',
  status: 'live',
  featured: false,
  stats: [
  { label: 'RAG', value: 'FAISS' },
  { label: 'LLM', value: 'Cohere' }]

},
{
  id: 'invexaims',
  title: 'InvexaIMS',
  description: 'AI-powered inventory intelligence platform with demand forecasting and anomaly detection.',
  longDescription:
  'AI-driven inventory system that predicts product demand, detects sales anomalies, and provides real-time risk scoring for inventory optimization. Implements ML-based demand forecasting, anomaly detection (Isolation Forest & Z-score), and an event-driven backend for automated stock updates and alerts. Includes a role-based dashboard for inventory insights and decision making.',
  image: '/assets/images/InvexaIMs.png',
  imageAlt: 'Inventory management dashboard with demand forecasting charts, anomaly detection alerts, and role-based analytics on dark UI',
  tags: ['React', 'Spring Boot', 'Java 17', 'Python', 'FastAPI', 'Scikit-learn', 'MySQL'],
  github: 'https://github.com/SamadhiJagathsiri/AI-Inventory-System-Invexa',
  live: '#',
  status: 'live',
  featured: false,
  stats: [
  { label: 'ML Models', value: '2+' },
  { label: 'Role-based', value: 'RBAC' }]

}];

// Added project: Airline Aviate X
projects.push({
  id: 'airline-aviate-x',
  title: 'Airline Aviate X',
  description: 'Desktop airline management system supporting flight scheduling, booking management, and revenue reporting.',
  longDescription: 'Designed a desktop airline management system supporting flight scheduling, booking management, and revenue reporting.',
  image: '/assets/images/Airline.png',
  imageAlt: 'Airline management desktop application UI with flight schedules and reporting',
  tags: ['C#', '.NET', 'Windows Forms', 'SQL', 'RDLC'],
  github: 'https://github.com/SamadhiJagathsiri/Airline-Aviate-X',
  live: '#',
  status: 'archived',
  featured: false,
  stats: [
    { label: 'Type', value: 'Desktop' },
    { label: 'Reporting', value: 'RDLC' }
  ]
});


const STATUS_COLORS = {
  live: 'text-green-400',
  wip: 'text-yellow-400',
  archived: 'text-muted-foreground'
};

const STATUS_BG = {
  live: 'bg-green-400/10',
  wip: 'bg-yellow-400/10',
  archived: 'bg-muted/30'
};

const STATUS_LABELS = {
  live: '● Live',
  wip: '◐ In Progress',
  archived: '○ Archived'
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: x * -8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'scale(1.02)' : 'scale(1)'}`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'
      }}>
      {children}
    </div>);

}

export default function ProjectsSection() {
  const softwareApplicationSchemas = projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.longDescription,
    url: project.live,
    image: project.image,
    applicationCategory: 'WebApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    creator: {
      '@type': 'Person',
      name: 'Samadhi Jagathsiri'
    },
    keywords: project.tags.join(', ')
  }));

  return (
    <>
      {softwareApplicationSchemas.map((schema, idx) =>
      <script
        key={`schema-${idx}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      )}
      <section id="projects" className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div
          className="blob-bg blob-purple absolute right-0 bottom-0 pointer-events-none"
          style={{ width: '600px', height: '600px' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="section-label mb-4 reveal-up">Projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-section-lg font-extrabold tracking-tight text-foreground reveal-left">
              Things I&apos;ve{' '}
              <span className="text-gradient-cyan">actually shipped</span>
            </h2>
            <a href="https://github.com/SamadhiJagathsiri?tab=repositories" className="btn-outline text-sm shrink-0 reveal-right">
              <span>All on GitHub</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">

            {/* HighwayLink */}
            <TiltCard className="reveal-up stagger-1 h-full">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col min-h-[380px]">
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <AppImage
                    src={projects[0].image}
                    alt={projects[0].imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${STATUS_BG[projects[0].status]} ${STATUS_COLORS[projects[0].status]} font-semibold`}>
                      {STATUS_LABELS[projects[0].status]}
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5 sm:gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">{projects[0].title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{projects[0].description}</p>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {projects[0].stats.map((s) =>
                    <div key={s.label} className="text-center">
                        <p className="font-mono text-sm font-bold text-primary">{s.value}</p>
                        <p className="font-mono text-xs text-muted-foreground">{s.label}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tags.map((tag) =>
                    <span key={tag} className="font-mono text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-auto pt-2">
                    <a href={projects[0].github} className="btn-outline text-xs px-4 py-2 flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      <span>Code</span>
                    </a>
                    <a href={projects[0].live} className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5">
                      <span>Live Demo</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* InvexaIMS */}
            <TiltCard className="reveal-up stagger-4 h-full">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col min-h-[380px]">
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <AppImage
                    src={projects[3].image}
                    alt={projects[3].imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    {/* Status badge removed for InvexaIMS per request */}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5 sm:gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">{projects[3].title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{projects[3].description}</p>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {projects[3].stats.map((s) =>
                    <div key={s.label} className="text-center">
                        <p className="font-mono text-sm font-bold text-primary">{s.value}</p>
                        <p className="font-mono text-xs text-muted-foreground">{s.label}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[3].tags.map((tag) =>
                    <span key={tag} className="font-mono text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-auto pt-2">
                    <a href={projects[3].github} className="btn-outline text-xs px-4 py-2 flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Airline Aviate X */}
            <TiltCard className="reveal-up stagger-5 h-full">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col min-h-[380px]">
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <AppImage
                    src={projects[4].image}
                    alt={projects[4].imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`font-mono text-xs px-2 py-1 rounded-full ${STATUS_BG[projects[4].status]} ${STATUS_COLORS[projects[4].status]} font-semibold`}>
                      {STATUS_LABELS[projects[4].status]}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5 sm:gap-3">
                  <h3 className="text-lg font-bold text-foreground">{projects[4].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{projects[4].description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[4].tags.slice(0, 3).map((tag) =>
                    <span key={tag} className="font-mono text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <a href={projects[4].github} className="btn-outline text-xs px-4 py-2 flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Customer Retention AI */}
            <TiltCard className="reveal-up stagger-2 h-full">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col min-h-[380px]">
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <AppImage
                    src={projects[1].image}
                    alt={projects[1].imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`font-mono text-xs px-2 py-1 rounded-full ${STATUS_BG[projects[1].status]} ${STATUS_COLORS[projects[1].status]} font-semibold`}>
                      {STATUS_LABELS[projects[1].status]}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5 sm:gap-3">
                  <h3 className="text-lg font-bold text-foreground">{projects[1].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{projects[1].description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[1].tags.slice(0, 3).map((tag) =>
                    <span key={tag} className="font-mono text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <a href={projects[1].github} className="btn-outline text-xs px-4 py-2 flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      <span>Code</span>
                    </a>
                    <a href={projects[1].live} className="btn-primary text-xs px-3 py-1.5 flex items-center gap-1">
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Calmera AI */}
            <TiltCard className="reveal-up stagger-3 h-full">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col min-h-[380px]">
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <AppImage
                    src={projects[2].image}
                    alt={projects[2].imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`font-mono text-xs px-2 py-1 rounded-full ${STATUS_BG[projects[2].status]} ${STATUS_COLORS[projects[2].status]} font-semibold`}>
                      {STATUS_LABELS[projects[2].status]}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5 sm:gap-3">
                  <h3 className="text-lg font-bold text-foreground">{projects[2].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{projects[2].description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[2].tags.slice(0, 3).map((tag) =>
                    <span key={tag} className="font-mono text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <a href={projects[2].github} className="btn-outline text-xs px-4 py-2 flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      <span>Code</span>
                    </a>
                    <a href={projects[2].live} className="btn-primary text-xs px-3 py-1.5 flex items-center gap-1">
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>

            
          </div>
        </div>
      </section>
    </>);

}
