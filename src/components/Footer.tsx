import React from 'react';

export default function Footer() {
  return (
    <footer
      className="border-t border-border py-8 px-6"
      style={{ backgroundColor: 'rgba(9,14,28,0.98)' }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Samadhi Jagathsiri</h3>
          <p className="text-sm text-muted-foreground">Software Engineering & AI Enthusiast</p>
        </div>

        <p className="max-w-2xl mx-auto text-sm text-muted-foreground">
          Interested in building impactful software and intelligent systems.
        </p>

        <nav className="flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <span className="text-border">|</span>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <span className="text-border">|</span>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <span className="text-border">|</span>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="https://github.com/samadhi-jagathsiri" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/samadhi-jagathsiri" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:anusarasamm@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>

        <p className="text-xs text-muted-foreground opacity-80">Built with React, Tailwind CSS & Framer Motion</p>

        <p className="font-mono text-sm text-muted-foreground">© 2026 Samadhi Jagathsiri</p>
      </div>
    </footer>
  );
}