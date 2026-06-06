'use client';

import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: '', email: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    (async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });

        if (res.ok) {
          setSubmitted(true);
          setForm(INITIAL_STATE);
        } else {
          const data = await res.json().catch(() => ({}));
          const msg = data?.error || 'Failed to send message. Please try again later.';
          alert(msg);
        }
      } catch (err) {
        console.error(err);
        alert('Failed to send message. Check your network or try again later.');
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div
        className="blob-bg blob-primary absolute -right-40 bottom-0 pointer-events-none"
        style={{ width: '600px', height: '600px' }}
      />
      <div
        className="blob-bg blob-accent absolute -left-40 top-1/2 pointer-events-none"
        style={{ width: '400px', height: '400px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-label mb-4 reveal-up">Contact</p>
        <h2 className="text-section-lg font-extrabold tracking-tight text-foreground mb-4 reveal-up">
          Let&apos;s build something{' '}
          <span className="text-gradient-cyan">together</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl reveal-up">
          I&apos;m actively looking for internship opportunities in software engineering and AI.
          If you&apos;re hiring or just want to chat about tech, my inbox is open.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-4 flex flex-col gap-6 reveal-left">
            {/* Contact cards */}
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                value: 'anusarasamm@gmail.com',
                href: 'mailto:anusarasamm@gmail.com',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
                label: 'GitHub',
                value: 'github.com',
                href: 'https://github.com/SamadhiJagathsiri',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'linkedin.com',
                href: 'https://www.linkedin.com/in/samadhi-jagathsiri-566931314/',
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="glass-card-hover rounded-xl p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{contact.label}</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 font-semibold tracking-wider">AVAILABLE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to internship opportunities in SE . Based in Kadawatha, Sri Lanka. Response time: usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-8 reveal-right">
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL_STATE); }}
                  className="btn-outline mt-6"
                >
                  <span>Send another</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-muted-foreground block mb-2 tracking-wider">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-muted-foreground block mb-2 tracking-wider">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-mono text-xs text-muted-foreground block mb-2 tracking-wider">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the role, team, and what you're building..."
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}