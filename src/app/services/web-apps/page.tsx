import type { Metadata } from 'next';
import Link from 'next/link';
import { AppWindow, CheckCircle, Database, Shield, Activity, Users, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import styles from '../service.module.css';

export const metadata: Metadata = {
  title: 'Web App Development — XD Studios',
  description: 'Custom web application development with dashboards, auth, real-time data, and cloud deployment.',
};

const features = [
  { icon: <AppWindow size={20} />, title: 'Interactive Dashboards', desc: 'Data-rich dashboards with charts, filters, and real-time updates.' },
  { icon: <Shield size={20} />, title: 'Authentication & Roles', desc: 'Secure login, role-based access control, and session management.' },
  { icon: <Database size={20} />, title: 'Database Design', desc: 'Optimised schemas, migrations, and efficient queries.' },
  { icon: <Activity size={20} />, title: 'Real-time Features', desc: 'Live notifications, collaborative editing, and streaming data.' },
  { icon: <Users size={20} />, title: 'Multi-user Support', desc: 'Team workspaces, invites, and permission systems.' },
  { icon: <ArrowRight size={20} />, title: 'API Integration', desc: 'Connect third-party services, payment gateways, and more.' },
];

const useCases = [
  { type: 'Personal', items: ['Task managers', 'Personal finance trackers', 'Note-taking apps', 'Habit trackers'] },
  { type: 'Business', items: ['CRM systems', 'Inventory management', 'HR portals', 'School management tools'] },
];

export default function WebAppsPage() {
  return (
    <>
      <section className={styles.hero} style={{ '--color': '#00D4FF' } as React.CSSProperties}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroIcon}><AppWindow size={32} /></div>
            <div className="section-label">Service</div>
            <h1 className={styles.heroTitle}>Web <span style={{ color: '#00D4FF' }}>Applications</span></h1>
            <p className={styles.heroSub}>Custom web apps with powerful backends, beautiful interfaces, and everything your users need to get things done.</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Request a Demo <ArrowRight size={18} /></Link>
              <Link href="/projects/result-management" className="btn btn-outline">See Live Project</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Features</div>
            <h2 className="section-title">What&apos;s <span className="gradient-text">Included</span></h2>
          </div>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ '--color': '#00D4FF' } as React.CSSProperties}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Use Cases</div>
            <h2 className="section-title">Who Is This <span className="gradient-text">For?</span></h2>
          </div>
          <div className={styles.useCaseGrid}>
            {useCases.map(u => (
              <div key={u.type} className={styles.useCaseCard}>
                <h3 className={styles.useCaseType}>{u.type}</h3>
                <ul className={styles.useCaseList}>
                  {u.items.map(item => (
                    <li key={item} className={styles.useCaseItem}><CheckCircle size={16} color="#00D4FF" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Featured Example</div>
            <h2 className="section-title">Result Management <span className="gradient-text">System</span></h2>
            <p className="section-subtitle">A complete school result management app built with XD Studios — see it in action.</p>
          </div>
          <div className={styles.demoContainer}>
            <div className={styles.demoBar}>
              <div className={styles.demoDots}><span /><span /><span /></div>
              <div className={styles.demoUrl}>result-system.xdstudios.dev</div>
            </div>
            <div className={styles.demoContent}>
              <div className={styles.demoNav}>
                {['Dashboard', 'Students', 'Marks', 'Reports', 'Settings'].map(n => (
                  <span key={n} className={styles.demoNavItem}>{n}</span>
                ))}
              </div>
              <div className={styles.demoHero} style={{ flexDirection: 'column', gap: '1rem' }}>
                <div className={styles.demoCards}>
                  {[...Array(3)].map((_, i) => <div key={i} className={styles.demoCard} />)}
                </div>
                <div className={styles.demoImage} style={{ flex: 'none', width: '100%', height: '120px' }} />
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/projects/result-management" className="btn btn-primary">
              View Full Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        label="Get Started"
        title="Have an App Idea? Let&apos;s Build It."
        subtitle="From concept to deployment, we handle everything."
        primaryCta={{ label: 'Discuss My App', href: '/contact' }}
      />
    </>
  );
}
