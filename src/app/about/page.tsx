import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, Palette, Cpu, Globe, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — XD Creations',
  description: 'Learn about Sanjoy and XD Creations — the creator behind the digital solutions.',
};

const skills = [
  { label: 'Next.js / React', level: 95, color: '#6C63FF' },
  { label: 'Node.js / APIs', level: 88, color: '#00D4FF' },
  { label: 'UI/UX Design', level: 85, color: '#FF6584' },
  { label: 'Graphic Design', level: 90, color: '#FFD060' },
  { label: 'PostgreSQL / Prisma', level: 82, color: '#00E5A0' },
  { label: 'TypeScript', level: 90, color: '#6C63FF' },
];

const timeline = [
  { year: '2022', title: 'Started XD Creations', desc: 'Began freelancing web development and graphic design.' },
  { year: '2023', title: 'First 20 Clients', desc: 'Delivered 20+ projects across websites, apps, and branding.' },
  { year: '2024', title: 'SaaS & Web Apps', desc: 'Expanded into full-stack app development and SaaS products.' },
  { year: '2025', title: 'Result Management System', desc: 'Launched a school result management system now used by multiple schools.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className="section-label">The Creator</div>
              <h1 className={styles.heroTitle}>Hi, I'm <span className="gradient-text">Sanjoy</span></h1>
              <p className={styles.heroText}>
                I'm a full-stack developer and designer behind XD Creations. I build premium websites, web apps, SaaS products, and brand identities that help individuals and businesses stand out in the digital world.
              </p>
              <p className={styles.heroText}>
                With 4+ years of experience and 50+ projects delivered, I've worked with students, entrepreneurs, schools, cafés, and startups — each project crafted with care and attention to detail.
              </p>
              <div className={styles.heroCtas}>
                <a href="https://sanjoy.dev" target="_blank" rel="noreferrer" className="btn btn-primary">
                  Know More About Me <ExternalLink size={16} />
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Work With Me <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.avatar}>S</div>
              <div className={styles.avatarName}>Sanjoy</div>
              <div className={styles.avatarRole}>Full-stack Developer & Designer</div>
              <div className={styles.avatarStats}>
                <div className={styles.avatarStat}><span>50+</span><small>Projects</small></div>
                <div className={styles.avatarStat}><span>30+</span><small>Clients</small></div>
                <div className={styles.avatarStat}><span>4+</span><small>Years</small></div>
              </div>
              <div className={styles.services}>
                {[
                  { icon: <Globe size={14} />, label: 'Web Dev' },
                  { icon: <Cpu size={14} />, label: 'Web Apps' },
                  { icon: <Code2 size={14} />, label: 'SaaS' },
                  { icon: <Palette size={14} />, label: 'Design' },
                ].map(s => (
                  <span key={s.label} className={styles.serviceTag}>
                    {s.icon} {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Skills</div>
            <h2 className="section-title">Tools of the <span className="gradient-text">Trade</span></h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map(s => (
              <div key={s.label} className={styles.skill}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillLabel}>{s.label}</span>
                  <span className={styles.skillPct} style={{ color: s.color }}>{s.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{ width: `${s.level}%`, background: s.color, boxShadow: `0 0 8px ${s.color}60` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Journey</div>
            <h2 className="section-title">How It <span className="gradient-text">Started</span></h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={t.year} className={styles.timelineItem}>
                <div className={styles.timelineLine} />
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{t.year}</div>
                  <h3 className={styles.timelineTitle}>{t.title}</h3>
                  <p className={styles.timelineDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        label="Let's Connect"
        title="Interested in Working Together?"
        subtitle="I'm always open to new projects and collaborations."
        primaryCta={{ label: 'Start a Project', href: '/contact' }}
        secondaryCta={{ label: 'View My Work', href: '/portfolio' }}
      />
    </>
  );
}
