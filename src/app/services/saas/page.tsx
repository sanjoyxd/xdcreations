import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, CheckCircle, CreditCard, BarChart2, Users, Layers, Settings, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import styles from '../service.module.css';

export const metadata: Metadata = {
  title: 'SaaS Products — XD Studios',
  description: 'End-to-end SaaS development with billing, multi-tenancy, analytics, and admin panels.',
};

const features = [
  { icon: <CreditCard size={20} />, title: 'Subscription Billing', desc: 'Stripe-powered billing with plans, trials, and invoices.' },
  { icon: <Layers size={20} />, title: 'Multi-tenancy', desc: 'Isolated workspaces for each customer organisation.' },
  { icon: <BarChart2 size={20} />, title: 'Analytics & Reporting', desc: 'Usage metrics, revenue dashboards, and growth tracking.' },
  { icon: <Users size={20} />, title: 'Team Management', desc: 'Invite members, set roles, and manage permissions.' },
  { icon: <Settings size={20} />, title: 'Admin Panel', desc: 'Super-admin tools to manage users, plans, and data.' },
  { icon: <Cpu size={20} />, title: 'API-first Architecture', desc: 'Clean REST APIs for integrations and mobile clients.' },
];

const useCases = [
  { type: 'Personal Projects', items: ['Indie SaaS products', 'Micro-SaaS tools', 'Niche community platforms', 'Subscription content sites'] },
  { type: 'Business Solutions', items: ['B2B productivity tools', 'Vertical SaaS for industries', 'Internal tooling platforms', 'White-label products'] },
];

export default function SaaSPage() {
  return (
    <>
      <section className={styles.hero} style={{ '--color': '#00E5A0' } as React.CSSProperties}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroIcon}><Cpu size={32} /></div>
            <div className="section-label">Service</div>
            <h1 className={styles.heroTitle}>SaaS <span style={{ color: '#00E5A0' }}>Products</span></h1>
            <p className={styles.heroSub}>We build full-stack SaaS platforms with everything needed to launch, scale, and monetise your software product.</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Start Building <ArrowRight size={18} /></Link>
              <Link href="/services" className="btn btn-outline">Compare Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Core Features</div>
            <h2 className="section-title">What Every SaaS <span className="gradient-text">Needs</span></h2>
          </div>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ '--color': '#00E5A0' } as React.CSSProperties}>{f.icon}</div>
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
            <h2 className="section-title">Who Should <span className="gradient-text">Build SaaS?</span></h2>
          </div>
          <div className={styles.useCaseGrid}>
            {useCases.map(u => (
              <div key={u.type} className={styles.useCaseCard}>
                <h3 className={styles.useCaseType}>{u.type}</h3>
                <ul className={styles.useCaseList}>
                  {u.items.map(item => (
                    <li key={item} className={styles.useCaseItem}><CheckCircle size={16} color="#00E5A0" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        label="Launch Your SaaS"
        title="Ready to Turn Your Idea into a Product?"
        subtitle="We'll help you build, launch, and grow it."
        primaryCta={{ label: 'Let's Talk', href: '/contact' }}
      />
    </>
  );
}
