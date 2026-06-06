import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface TimelineItem {
  type: 'education' | 'experience' | 'achievement';
  title: string;
  org: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  icon: string;
  iconImage?: string;
}

const timeline: TimelineItem[] = [
  {
    type: 'education',
    title: 'G.C.E. Advanced Level — Physical Science',
    org: 'Sujatha Vidyalaya, Matara',
    period: '2019 – 2021',
    location: 'Matara, Sri Lanka',
    description: [
      'Completed Advanced Level in Physical Science stream.',
      'President of Science Society (2020–2022).',
      'Member of Student Parliament (2018–2021) and Model United Nations Club.',
    ],
    tags: ['Physics', 'Mathematics', 'Science', 'Leadership'],
    icon: '📚',
    iconImage: '/assets/images/Sujatha.jpg',
  },
  {
    type: 'education',
    title: 'B.Sc. (Hons) Computer Science',
    org: 'University of Kelaniya, Sri Lanka',
    period: '2023 – Present',
    location: 'Kelaniya, Sri Lanka',
    description: [
      'GPA: 3.541 / 4.0 — Pursuing Honours degree in Computer Science.',
      'Vice Secretary of Statistics & Computer Science Students\' Association (SCSSA) 2024–2025.',
      'Project Coordinator & Member of Rotaract Club, University of Kelaniya.',
      'Finalist & Merit Award at Stat Bee Quiz Competition, SCSSA (2025).',
    ],
    tags: ['CS Core', 'AI & ML', 'System Design', 'Algorithms'],
    icon: '🏫',
    iconImage: '/assets/images/Kelaniya.png',
  },
  {
    type: 'education',
    title: 'Diploma in Information Technology (DIT) ',
    org: 'University of Colombo School of Computing (UCSC)',
    period: '2024 – 2025',
    location: 'Colombo, Sri Lanka',
    description: [
      'Completed the Diploma in Information Technology (DIT) at the University of Colombo School of Computing as part of the Bachelor of Information Technology (BIT) program, gaining foundational and practical knowledge in software development, databases, web technologies, programming, and IT systems',
    ],
    tags: ['Information Technology', 'Software Systems'],
    icon: '🎓',
    iconImage: '/assets/images/UCSC.png',
  },
  {
    type: 'achievement',
    title: 'Certifications & Achievements',
    org: 'Multiple Institutions',
    period: '2023 – 2025',
    location: 'Sri Lanka',
    description: [
      'AWS Cloud Practitioner — DataCamp.',
      'Full Stack Development — University of Moratuwa (UOM).',
      'Python Programming — University of Moratuwa (UOM).',
      'Information Security — HashX.',
      'AI/ML Engineer — SLIIT.',
      'Merit Award — Astronomy & Astrophysics Olympiad (2016).',
    ],
    tags: ['AWS', 'Full Stack', 'Python', 'AI/ML', 'Security'],
    icon: '🏆',
  },
];

const TYPE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  experience: { bg: 'bg-primary/15', text: 'text-primary', label: 'Experience' },
  education: { bg: 'bg-accent/15', text: 'text-accent', label: 'Education' },
  achievement: { bg: 'bg-yellow-400/15', text: 'text-yellow-400', label: 'Achievement' },
};

export default function ExperienceSection() {
  const renderTimelineIcon = (item: TimelineItem) => {
    if (item.iconImage) {
      return (
        <AppImage
          src={item.iconImage}
          alt={item.org}
          fill
          className="object-contain p-3"
          sizes="64px"
        />
      );
    }

    return item.icon;
  };

  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div
        className="blob-bg blob-accent absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
        style={{ width: '700px', height: '400px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-label mb-4 reveal-up">Experience & Education</p>
        <h2 className="text-section-lg font-extrabold tracking-tight text-foreground mb-12 reveal-up">
          Where I&apos;ve{' '}
          <span className="text-gradient-cyan">been & learned</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const typeStyle = TYPE_STYLES[item.type] || TYPE_STYLES.education;
              return (
                <div
                  key={`${item.org}-${i}`}
                  className={`relative flex gap-6 md:gap-10 reveal-up stagger-${i + 1}`}
                >
                  {/* Icon dot */}
                  <div className="relative shrink-0 sm:block hidden">
                    <div className="w-16 h-16 rounded-xl glass-card border border-border flex items-center justify-center text-2xl z-10 relative overflow-hidden">
                      {renderTimelineIcon(item)}
                    </div>
                    {/* Connector dot */}
                    <div className="absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card-hover rounded-2xl p-6 md:p-7">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="sm:hidden relative w-6 h-6 inline-flex overflow-hidden">{renderTimelineIcon(item)}</span>
                          <span
                            className={`font-mono text-xs px-2 py-0.5 rounded uppercase tracking-wider font-semibold ${typeStyle.bg} ${typeStyle.text}`}
                          >
                            {typeStyle.label}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-primary font-semibold text-sm">{item.org}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                        <p className="font-mono text-xs text-muted-foreground/70">{item.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {item.description.map((point, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-0.5 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}