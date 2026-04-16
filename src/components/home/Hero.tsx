'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const words = ['Websites', 'Web Apps', 'SaaS Products', 'Graphic Design'];

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    let timeout: NodeJS.Timeout;

    const cycle = () => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      timeout = setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % words.length;
        el.textContent = words[indexRef.current];
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        timeout = setTimeout(cycle, 2400);
      }, 400);
    };

    el.textContent = words[0];
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    timeout = setTimeout(cycle, 2400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridBg} />

      <div className="container">
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge" style={{ marginBottom: '1.5rem' }}>Available for projects</div>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.studio}>XD Creations</span>
            <br />
            <span className={styles.building}>Building Digital</span>
            <br />
            <span className={styles.rotating}>
              <span ref={wordRef} className={styles.rotatingWord} />
            </span>
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            From pixel-perfect websites to powerful SaaS platforms — we craft premium digital solutions for individuals & businesses that want to stand out.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/portfolio" className="btn btn-primary">
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-outline">
              <Sparkles size={16} /> Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: '50+', label: 'Projects Done' },
              { value: '30+', label: 'Happy Clients' },
              { value: '4+', label: 'Years Exp.' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <span /><span /><span />
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupLine} style={{ width: '60%' }} />
              <div className={styles.mockupLine} style={{ width: '80%' }} />
              <div className={styles.mockupLine} style={{ width: '45%' }} />
              <div className={styles.mockupGrid}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={styles.mockupCard} style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
              <div className={styles.mockupLine} style={{ width: '35%' }} />
            </div>
          </div>
          {/* Floating tags */}
          <div className={`${styles.floatTag} ${styles.tag1}`}>
            <Play size={12} fill="currentColor" /> Live Demo
          </div>
          <div className={`${styles.floatTag} ${styles.tag2}`}>
            ✦ Premium Design
          </div>
          <div className={`${styles.floatTag} ${styles.tag3}`}>
            ⚡ Fast & Optimized
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
