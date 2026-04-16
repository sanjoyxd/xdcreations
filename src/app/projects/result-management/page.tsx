import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, FileText, BarChart2, Shield, BookOpen, Printer, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Result Management System — XD Creations',
  description: 'A comprehensive school result management system featuring student records, marks entry, grading, report generation, and analytics.',
};

const features = [
  { icon: <Users size={22} />, title: 'Student Records', desc: 'Store and manage complete student profiles including personal details, class, and enrollment history.' },
  { icon: <FileText size={22} />, title: 'Marks Entry', desc: 'Intuitive interface for teachers to enter subject-wise marks with validation and bulk import.' },
  { icon: <BarChart2 size={22} />, title: 'Grade Calculation', desc: 'Automated grading with customisable grade schemes — percentage, GPA, or letter grades.' },
  { icon: <Printer size={22} />, title: 'Report Cards', desc: 'Auto-generated PDF report cards with school branding, ready to print or share digitally.' },
  { icon: <Shield size={22} />, title: 'Role-based Access', desc: 'Admin, teacher, and student portals with appropriate permissions and data visibility.' },
  { icon: <BookOpen size={22} />, title: 'Subject Management', desc: 'Manage subjects, weightage, semesters, and exam types from a central dashboard.' },
];

const screenshots = [
  { title: 'Dashboard Overview', desc: 'At-a-glance stats for total students, pass rate, and upcoming exams', color: '#6C63FF' },
  { title: 'Marks Entry Panel', desc: 'Fast, validated input grid for entering subject marks class-by-class', color: '#00D4FF' },
  { title: 'Report Card Generator', desc: 'One-click PDF generation with school logo and signature fields', color: '#00E5A0' },
];

export default function ResultManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label">Featured Project</div>
            <h1 className={styles.heroTitle}>
              Result Management <span className="gradient-text">System</span>
            </h1>
            <p className={styles.heroSub}>
              A full-stack school result management application — built to streamline how schools handle student records, marks, and report generation.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Request Demo <ArrowRight size={18} /></Link>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">
                View on GitHub <ExternalLink size={16} />
              </a>
            </div>
            <div className={styles.heroTags}>
              {['Next.js', 'PostgreSQL', 'Prisma', 'PDF Generation', 'Role-based Auth'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">UI Preview</div>
            <h2 className="section-title">See It In <span className="gradient-text">Action</span></h2>
          </div>
          <div className={styles.screenshots}>
            {screenshots.map((s, i) => (
              <div key={s.title} className={styles.screenshot} style={{ '--color': s.color } as React.CSSProperties}>
                <div className={styles.screenshotBar}>
                  <div className={styles.screenshotDots}><span /><span /><span /></div>
                  <span className={styles.screenshotTitle}>{s.title}</span>
                </div>
                <div className={styles.screenshotContent}>
                  <div className={styles.screenshotSidebar}>
                    {['Dashboard', 'Students', 'Marks', 'Reports', 'Settings'].map(n => (
                      <div key={n} className={`${styles.sidebarItem} ${n === 'Dashboard' && i === 0 || n === 'Marks' && i === 1 || n === 'Reports' && i === 2 ? styles.sidebarActive : ''}`}>{n}</div>
                    ))}
                  </div>
                  <div className={styles.screenshotMain}>
                    <div className={styles.screenshotStats}>
                      {[0.6, 0.4, 0.7].map((w, j) => (
                        <div key={j} className={styles.statCard}>
                          <div className={styles.statCardTop} style={{ width: `${w * 100}%` }} />
                          <div className={styles.statCardBottom} />
                        </div>
                      ))}
                    </div>
                    <div className={styles.screenshotTable}>
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className={styles.tableRow}>
                          <div style={{ flex: 2 }} className={styles.tableCell} />
                          <div style={{ flex: 1 }} className={styles.tableCell} />
                          <div style={{ flex: 1 }} className={styles.tableCell} />
                          <div style={{ flex: 0.5, background: s.color, opacity: 0.3, borderRadius: 4, height: 8 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.screenshotCaption}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Key Features</div>
            <h2 className="section-title">Everything a School <span className="gradient-text">Needs</span></h2>
          </div>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        label="Interested?"
        title="Want This System for Your School?"
        subtitle="Get a personalised demo or a custom-built version tailored to your school's workflow."
        primaryCta={{ label: 'Request a Demo', href: '/contact' }}
        secondaryCta={{ label: 'View All Projects', href: '/portfolio' }}
      />
    </>
  );
}
