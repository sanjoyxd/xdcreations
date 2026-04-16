'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, AppWindow, Cpu, Palette, ArrowRight } from 'lucide-react';
import styles from './ServicesPreview.module.css';

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Website Development',
    description: 'Pixel-perfect, fast-loading websites that convert visitors into customers. From landing pages to full CMS-powered sites.',
    href: '/services/web-development',
    color: '#6C63FF',
    tags: ['Landing Pages', 'CMS', 'SEO'],
  },
  {
    icon: <AppWindow size={24} />,
    title: 'Web Applications',
    description: 'Powerful, scalable web apps with real-time features, authentication, databases, and smooth user experiences.',
    href: '/services/web-apps',
    color: '#00D4FF',
    tags: ['Dashboards', 'Real-time', 'Auth'],
  },
  {
    icon: <Cpu size={24} />,
    title: 'SaaS Products',
    description: 'End-to-end SaaS development — billing, multi-tenancy, analytics, admin panels, and everything in between.',
    href: '/services/saas',
    color: '#00E5A0',
    tags: ['Multi-tenant', 'Billing', 'Analytics'],
  },
  {
    icon: <Palette size={24} />,
    title: 'Graphic Design',
    description: 'Logos, brand kits, banners, posters, social media graphics, and business cards that make brands memorable.',
    href: '/services/graphic-design',
    color: '#FF6584',
    tags: ['Logos', 'Branding', 'Print'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Services Built for <span className="gradient-text">Impact</span></h2>
          <p className="section-subtitle">
            Four core disciplines, one studio. Everything you need to build and grow your digital presence.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <Link href={service.href} className={styles.card}>
                <div className={styles.cardGlow} style={{ '--glow': service.color } as React.CSSProperties} />
                <div className={styles.iconBox} style={{ '--color': service.color } as React.CSSProperties}>
                  {service.icon}
                </div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.description}</p>
                <div className={styles.tags}>
                  {service.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <div className={styles.cta}>
                  Explore Service <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
