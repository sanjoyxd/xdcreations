import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, AppWindow, Cpu, Palette, ArrowRight, CheckCircle } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services — XD Creations',
  description: 'Explore XD Creations services: Website Development, Web Applications, SaaS Products, and Graphic Design.',
};

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Website Development',
    shortDesc: 'Beautiful, high-performance websites that rank and convert.',
    features: ['Landing pages & portfolios', 'CMS-powered business sites', 'SEO-optimised structure', 'Mobile-first responsive'],
    href: '/services/web-development',
    color: '#6C63FF',
  },
  {
    icon: <AppWindow size={32} />,
    title: 'Web Applications',
    shortDesc: 'Scalable, feature-rich apps with real-time data and modern UX.',
    features: ['Dashboards & admin panels', 'Authentication & roles', 'REST / real-time APIs', 'Cloud deployment'],
    href: '/services/web-apps',
    color: '#00D4FF',
  },
  {
    icon: <Cpu size={32} />,
    title: 'SaaS Products',
    shortDesc: 'Full-stack SaaS with billing, multi-tenancy, and analytics.',
    features: ['Subscription billing', 'Multi-tenant architecture', 'Analytics & reporting', 'Onboarding flows'],
    href: '/services/saas',
    color: '#00E5A0',
  },
  {
    icon: <Palette size={32} />,
    title: 'Graphic Design',
    shortDesc: 'Brand identities and visuals that make a lasting impression.',
    features: ['Logo & brand kits', 'Banners & social media', 'Posters & flyers', 'Business cards & print'],
    href: '/services/graphic-design',
    color: '#FF6584',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="section-label">Our Services</div>
          <h1 className={styles.heroTitle}>Everything You Need to <span className="gradient-text">Build & Grow</span></h1>
          <p className={styles.heroSub}>Four core disciplines under one roof — from concept to launch, we cover every layer of your digital presence.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardHeader} style={{ '--color': s.color } as React.CSSProperties}>
                  <div className={styles.iconBox} style={{ '--color': s.color } as React.CSSProperties}>{s.icon}</div>
                  <h2 className={styles.cardTitle}>{s.title}</h2>
                  <p className={styles.cardDesc}>{s.shortDesc}</p>
                </div>
                <ul className={styles.features}>
                  {s.features.map(f => (
                    <li key={f} className={styles.feature}>
                      <CheckCircle size={16} style={{ color: s.color, flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className={styles.cta} style={{ '--color': s.color } as React.CSSProperties}>
                  Explore {s.title} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        label="Ready?"
        title="Not Sure Which Service You Need?"
        subtitle="Tell us your goal and we'll recommend the perfect solution for you."
        primaryCta={{ label: 'Get Free Consultation', href: '/contact' }}
        secondaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
      />
    </>
  );
}
