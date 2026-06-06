'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '../../components/ui/AppImage';

const TYPING_ROLES = [
  'Full-Stack Developer',
  'AI & ML Enthusiast',
  'React & Spring Boot Builder',
  'CS Undergraduate @ UoK',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseAtEnd = 1800;
    const pauseAtStart = 400;

    if (!isDeleting && charIndex === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return;
    }
    if (isDeleting && charIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
      }, pauseAtStart);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(currentRole.slice(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden px-6 md:px-12 pb-16 md:pb-20 pt-24 md:pt-28">

      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_1cc7c93f3-1779107968230.png"
        alt="Dark code editor with syntax highlighted JavaScript, atmospheric blue-tinted monitor glow, dim moody developer workspace, deep shadows, low-key industrial lighting"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw" />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/60 to-background/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div
        className="blob-bg blob-primary absolute w-[600px] h-[600px] -top-20 -right-40 z-10"
        style={{ width: '600px', height: '600px' }} />

      <div
        className="blob-bg blob-accent absolute w-[400px] h-[400px] bottom-40 left-1/4 z-10"
        style={{ width: '400px', height: '400px' }} />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex justify-start mb-8 lg:mb-0">
          <div className="rounded-full p-1 bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden bg-[#0b1724] border-2 border-white/5">
              <AppImage
                src="/assets/images/profile1.png"
                alt="Samadhi portrait"
                fill
                priority={false}
                className="object-cover object-center"
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 240px"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-5 min-w-0 text-left w-full justify-center">
          <div>
            <p className="font-mono text-xs md:text-sm text-primary tracking-[0.25em] uppercase mb-3 opacity-80 break-words">
              // Hello, world. I&apos;m
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground break-words leading-tight sm:leading-snug md:leading-snug lg:leading-tight">
              Samadhi{' '}
              <span className="text-gradient-cyan cyan-glow-text">
                Jagathsiri
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-2 h-9 min-w-0 justify-start">
            <span className="font-mono text-lg md:text-xl font-bold text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              {displayText}
            </span>
            <span className="font-mono text-lg md:text-xl font-bold text-primary animate-blink flex-shrink-0">
              |
            </span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
           Final-year B.Sc. (Hons) Computer Science undergraduate with hands-on experience building full-stack applications using Java, Spring Boot, React, and Python. Delivered projects spanning REST API design, real-time systems, machine learning integration, and cloud deployment. Strong foundation in backend development with a focus on scalable, production-ready solutions.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-start">
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline">
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-1 justify-start">
            {[
              {
                label: 'GitHub',
                href: 'https://github.com/SamadhiJagathsiri',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/samadhi-jagathsiri-566931314/',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: 'Email',
                href: 'mailto:anusarasamm@gmail.com',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-11 h-11 md:w-12 md:h-12 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-3 justify-end">
          <div className="glass-card rounded-2xl p-6 w-full max-w-xs animate-float">
            <p className="font-mono text-xs text-primary mb-4 tracking-wider">// quick_stats.json</p>
            <div className="space-y-4">
              {[
                { key: 'projects_shipped', value: '5', color: 'text-primary' },
                { key: 'technologies', value: '20+', color: 'text-accent' },
                { key: 'gpa', value: '3.541 / 4.0', color: 'text-green-400' },
                { key: 'certifications', value: '6', color: 'text-purple-400' },
                { key: 'status', value: '"open_to_work"', color: 'text-yellow-400' },
              ].map(({ key, value, color }) => (
                <div key={key} className="flex items-center justify-between font-mono text-sm">
                  <span className="text-muted-foreground">{key}:</span>
                  <span className={`font-bold ${color}`}>{value},</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
