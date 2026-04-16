'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  label?: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({ label, title, subtitle, primaryCta, secondaryCta }: CTABannerProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glow} />
          <div className={styles.content}>
            {label && <div className="section-label" style={{ marginBottom: '1rem' }}>{label}</div>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.ctas}>
              <Link href={primaryCta.href} className="btn btn-primary">
                {primaryCta.label} <ArrowRight size={18} />
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn-outline">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
