'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'Java', level: 85, category: 'Language', icon: 'JV', color: '#F89820' },
  { name: 'Python', level: 88, category: 'Language', icon: 'PY', color: '#3776AB' },
  { name: 'JavaScript', level: 82, category: 'Language', icon: 'JS', color: '#F7DF1E' },
  { name: 'C#', level: 72, category: 'Language', icon: 'C#', color: '#9B4F96' },
  { name: 'R', level: 65, category: 'Language', icon: 'R', color: '#276DC3' },
  { name: 'React.js', level: 85, category: 'Frontend', icon: '⚛', color: '#61DAFB' },
  { name: 'Next.js', level: 78, category: 'Frontend', icon: '▲', color: '#E8F4FD' },
  { name: 'React Native', level: 70, category: 'Frontend', icon: '📱', color: '#61DAFB' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend', icon: '~', color: '#06B6D4' },
  { name: 'Spring Boot', level: 82, category: 'Backend', icon: '🍃', color: '#6DB33F' },
  { name: 'FastAPI', level: 80, category: 'Backend', icon: 'FA', color: '#009688' },
  { name: 'Node.js', level: 75, category: 'Backend', icon: '⬡', color: '#339933' },
  { name: 'Flask', level: 72, category: 'Backend', icon: 'FL', color: '#7A9CC4' },
  { name: 'MongoDB', level: 78, category: 'Database', icon: '🍃', color: '#47A248' },
  { name: 'MySQL', level: 80, category: 'Database', icon: 'MY', color: '#4479A1' },
  { name: 'SQL Server', level: 72, category: 'Database', icon: 'SQL', color: '#CC2927' },
  { name: 'LangChain', level: 78, category: 'AI & Data', icon: '🔗', color: '#1C3C3C' },
  { name: 'Scikit-Learn', level: 82, category: 'AI & Data', icon: 'SK', color: '#F7931E' },
  { name: 'NLP', level: 75, category: 'AI & Data', icon: 'NL', color: '#9C27B0' },
  { name: 'Power BI', level: 70, category: 'AI & Data', icon: 'BI', color: '#F2C811' },
  { name: 'Docker', level: 72, category: 'DevOps', icon: '🐳', color: '#2496ED' },
  { name: 'Git & GitHub', level: 88, category: 'DevOps', icon: '⑂', color: '#F05032' },
  { name: 'AWS', level: 68, category: 'DevOps', icon: '☁', color: '#FF9900' },
  { name: 'Vercel', level: 80, category: 'DevOps', icon: '▲', color: '#E8F4FD' },
];

const CATEGORIES = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'AI & Data', 'DevOps'];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [barsAnimated, setBarsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setBarsAnimated(false);

    const revealTimer = window.requestAnimationFrame(() => {
      setBarsAnimated(true);

      sectionRef.current
        ?.querySelectorAll<HTMLElement>('.reveal-up')
        .forEach((element) => {
          element.classList.add('revealed');
        });
    });

    return () => window.cancelAnimationFrame(revealTimer);
  }, [activeCategory]);

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden">
      <div
        className="blob-bg blob-primary absolute -left-40 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: '600px', height: '600px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-label mb-4 reveal-up">Skills & Stack</p>
        <h2 className="text-section-lg font-extrabold tracking-tight text-foreground mb-4 reveal-up">
          Tools I{' '}
          <span className="text-gradient-cyan">build with</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl reveal-up">
          Technologies I use to build full-stack systems, AI applications, and data-driven solutions.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12 reveal-up">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground font-bold'
                  : 'border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-card-hover rounded-xl p-5 reveal-up revealed stagger-${Math.min(i + 1, 12)}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{skill.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-primary font-bold">{skill.level}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="skill-bar-fill"
                  style={{ width: barsAnimated ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}