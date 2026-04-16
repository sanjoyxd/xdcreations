import type { Metadata } from 'next';
import Link from 'next/link';
import { Palette, CheckCircle, Pen, Image, Layers, FileText, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import styles from '../service.module.css';

export const metadata: Metadata = {
  title: 'Graphic Design — XD Studios',
  description: 'Professional graphic design: logos, brand identities, banners, posters, business cards, and social media graphics.',
};

const features = [
  { icon: <Pen size={20} />, title: 'Logo Design', desc: 'Unique, memorable logos that represent your brand identity.' },
  { icon: <Layers size={20} />, title: 'Brand Identity', desc: 'Complete brand kits with colors, typography, and usage guidelines.' },
  { icon: <Image size={20} />, title: 'Banners & Social Media', desc: 'Eye-catching graphics for web, social, and digital ads.' },
  { icon: <FileText size={20} />, title: 'Posters & Flyers', desc: 'Print-ready designs for events, promotions, and campaigns.' },
  { icon: <Palette size={20} />, title: 'Business Cards', desc: 'Professional cards that leave a lasting impression.' },
  { icon: <Image size={20} />, title: 'Custom Illustrations', desc: 'Unique illustrations and artwork tailored to your brand.' },
];

const useCases = [
  { type: 'Personal', items: ['Personal brand logos', 'Social media graphics', 'Event posters', 'Resume / portfolio design'] },
  { type: 'Business', items: ['Corporate brand identity', 'Marketing collateral', 'Product packaging', 'Merchandise & print materials'] },
];

export default function GraphicDesignPage() {
  return (
    <>
      <section className={styles.hero} style={{ '--color': '#FF6584' } as React.CSSProperties}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroIcon}><Palette size={32} /></div>
            <div className="section-label">Service</div>
            <h1 className={styles.heroTitle}>Graphic <span style={{ color: '#FF6584' }}>Design</span></h1>
            <p className={styles.heroSub}>Visuals that tell your story — logos, brand kits, banners, posters, and more, crafted with precision and creativity.</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Order a Design <ArrowRight size={18} /></Link>
              <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Design</div>
            <h2 className="section-title">Our Design <span className="gradient-text">Offerings</span></h2>
          </div>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ '--color': '#FF6584' } as React.CSSProperties}>{f.icon}</div>
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
            <h2 className="section-title">Who Needs <span className="gradient-text">Great Design?</span></h2>
          </div>
          <div className={styles.useCaseGrid}>
            {useCases.map(u => (
              <div key={u.type} className={styles.useCaseCard}>
                <h3 className={styles.useCaseType}>{u.type}</h3>
                <ul className={styles.useCaseList}>
                  {u.items.map(item => (
                    <li key={item} className={styles.useCaseItem}><CheckCircle size={16} color="#FF6584" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        label="Get Designed"
        title="Make Your Brand Unforgettable"
        subtitle="Great design is an investment, not an expense."
        primaryCta={{ label: 'Request a Design', href: '/contact' }}
        secondaryCta={{ label: 'See Portfolio', href: '/portfolio' }}
      />
    </>
  );
}
