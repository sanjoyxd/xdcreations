import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Globe, Layout, Search, Smartphone, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '@/lib/constants';
import CTABanner from '@/components/ui/CTABanner';
import styles from '../service.module.css';

export const metadata: Metadata = {
  title: 'Website Development — XD Creations',
  description: 'Professional website development services — landing pages, business sites, portfolios, and CMS-driven websites that rank and convert.',
};

const features = [
  { icon: <Layout size={20} />, title: 'Pixel-Perfect Design', desc: 'Every detail crafted to look stunning across all screen sizes.' },
  { icon: <Zap size={20} />, title: 'Performance Optimised', desc: '90+ Lighthouse scores, fast load times, optimized assets.' },
  { icon: <Search size={20} />, title: 'SEO Built-in', desc: 'Proper meta tags, structured data, semantic HTML for search rankings.' },
  { icon: <Smartphone size={20} />, title: 'Mobile-First', desc: 'Responsive layouts that look great on every device.' },
  { icon: <Globe size={20} />, title: 'CMS Integration', desc: 'Easy content management so you can update without touching code.' },
  { icon: <CheckCircle size={20} />, title: 'Ongoing Support', desc: 'Post-launch support, updates, and feature additions.' },
];

const useCases = [
  { type: 'Personal', items: ['Portfolio sites', 'Personal blogs', 'CV/resume websites', 'Artist showcases'] },
  { type: 'Business', items: ['Product landing pages', 'Corporate websites', 'Restaurant & service sites', 'Event/conference sites'] },
];

export default function WebDevPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} style={{ '--color': '#6C63FF' } as React.CSSProperties}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroIcon}><Globe size={32} /></div>
            <div className="section-label">Service</div>
            <h1 className={styles.heroTitle}>Website <span className="gradient-text">Development</span></h1>
            <p className={styles.heroSub}>We build beautiful, high-performance websites that rank on Google, convert visitors, and grow with your business.</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Request a Quote <ArrowRight size={18} /></Link>
              <Link href="/portfolio" className="btn btn-outline">See Examples</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What&apos;s Included</div>
            <h2 className="section-title">Everything You <span className="gradient-text">Get</span></h2>
          </div>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ '--color': '#6C63FF' } as React.CSSProperties}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
                    <li key={item} className={styles.useCaseItem}>
                      <CheckCircle size={16} color="#6C63FF" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Demo Preview</div>
            <h2 className="section-title">See What We <span className="gradient-text">Build</span></h2>
            <p className="section-subtitle">A glimpse of the quality and attention to detail in every project.</p>
          </div>
          <div className={styles.demoContainer}>
            <div className={styles.demoBar}>
              <div className={styles.demoDots}><span /><span /><span /></div>
              <div className={styles.demoUrl}>xdcreations.dev/demo</div>
            </div>
            <div className={styles.demoContent}>
              <div className={styles.demoNav}>
                {['Home', 'About', 'Services', 'Contact'].map(n => (
                  <span key={n} className={styles.demoNavItem}>{n}</span>
                ))}
              </div>
              <div className={styles.demoHero}>
                <div className={styles.demoHeroText}>
                  <div className={styles.demoH1} />
                  <div className={styles.demoH2} />
                  <div className={styles.demoCTA} />
                </div>
                <div className={styles.demoImage} />
              </div>
              <div className={styles.demoCards}>
                {[...Array(3)].map((_, i) => <div key={i} className={styles.demoCard} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        label="Get Started"
        title="Ready to Launch Your Website?"
        subtitle="Tell us about your vision and we'll bring it to life."
        primaryCta={{ label: 'Start My Project', href: '/contact' }}
        secondaryCta={{ label: 'WhatsApp Us', href: `https://wa.me/${BRAND_INFO.whatsapp}` }}
      />
    </>
  );
}
