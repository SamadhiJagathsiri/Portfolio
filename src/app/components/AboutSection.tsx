import React from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
  { value: '5', label: 'Projects Shipped' },
  { value: '20+', label: 'Technologies' },
  { value: '3.541', label: 'GPA' },
  { value: '6', label: 'Certifications' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background blob */}
      <div
        className="blob-bg blob-accent absolute right-0 top-0 pointer-events-none"
        style={{ width: '500px', height: '500px' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <p className="section-label mb-12 reveal-up">About Me</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Photo */}
          <div className="lg:col-span-4 reveal-left">
            <div className="relative">
              {/* Decorative border */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-40"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #0066FF, #7B2FFF)'
                }} />
              
              
            </div>
          </div>

          {/* Right: Bio + Stats */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="reveal-right">
              <h2 className="text-section-lg font-extrabold tracking-tight text-foreground mb-6">
                Building things that{' '}
                <span className="text-gradient-cyan">actually work.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  I&apos;m Samadhi Jagathsiri, a final year B.Sc.(Hons) Computer Science undergraduate
                  at the University of Kelaniya, Sri Lanka, with a passion for software engineering,
                  AI-driven applications, and machine learning.
                </p>
                <p>
                  My stack spans{' '}
                  <span className="text-primary font-semibold">React, Next.js, Spring Boot, and FastAPI</span>{' '}
                  for full-stack development, with{' '}
                  <span className="text-primary font-semibold">Python, LangChain, and Scikit-Learn</span>{' '}
                  for AI and ML solutions. I care deeply about scalable architecture, clean APIs, and
                  data-driven decision making.
                </p>
                <p>
                  Looking for internship opportunities where I can ship real features, learn from
                  experienced engineers, and contribute to impactful software that solves real-world problems.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 reveal-up">
              {stats?.map((stat, i) => (
                <div
                  key={stat?.label}
                  className={`glass-card rounded-xl p-4 text-center stagger-${i + 1}`}>
                  <div className="text-2xl md:text-3xl font-extrabold text-gradient-cyan mb-1">
                    {stat?.value}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground tracking-wide">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal-style fun fact */}
            <div className="glass-card rounded-xl p-4 reveal-up">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="font-mono text-xs text-muted-foreground ml-2">terminal</span>
              </div>
              <div className="font-mono text-sm space-y-1">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> whoami
                </p>
                <p className="text-foreground">samadhi-jagathsiri · cs-undergraduate · builder</p>
                <p className="text-muted-foreground mt-2">
                  <span className="text-primary">$</span> cat interests.txt
                </p>
                <p className="text-foreground">
                  ai-applications, full-stack-systems, machine-learning, open-source, system-design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}