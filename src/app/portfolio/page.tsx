'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const categories = ['All', 'Logos', 'Banners', 'Posters', 'Websites', 'Web Apps'];

const items = [
  { id: 1, title: 'TechStart Logo', category: 'Logos', desc: 'Modern minimalist logo for a tech startup', color: '#6C63FF' },
  { id: 2, title: 'EduLearn Banner', category: 'Banners', desc: 'Social media campaign banner for an e-learning platform', color: '#00D4FF' },
  { id: 3, title: 'Music Event Poster', category: 'Posters', desc: 'Vibrant poster design for a local music event', color: '#FF6584' },
  { id: 4, title: 'Portfolio Site', category: 'Websites', desc: 'Personal developer portfolio with dark mode', color: '#6C63FF' },
  { id: 5, title: 'Result Management App', category: 'Web Apps', desc: 'School result system — marks, reports, analytics', color: '#00E5A0' },
  { id: 6, title: 'Café Brand Identity', category: 'Logos', desc: 'Warm, artisanal brand kit for a local café', color: '#FF6584' },
  { id: 7, title: 'SaaS Landing Page', category: 'Websites', desc: 'High-converting landing page with animated sections', color: '#00D4FF' },
  { id: 8, title: 'Restaurant Menu Banner', category: 'Banners', desc: 'Digital menu banner with premium food photography layout', color: '#FFD060' },
  { id: 9, title: 'Fitness App UI', category: 'Web Apps', desc: 'Dashboard for a fitness tracking web application', color: '#6C63FF' },
  { id: 10, title: 'Product Launch Poster', category: 'Posters', desc: 'Futuristic product reveal poster design', color: '#00E5A0' },
  { id: 11, title: 'Law Firm Logo', category: 'Logos', desc: 'Bold, trustworthy logo for a legal practice', color: '#8A96B0' },
  { id: 12, title: 'School Website', category: 'Websites', desc: 'Clean, informative site for a primary school', color: '#00D4FF' },
];

interface Item {
  id: number;
  title: string;
  category: string;
  desc: string;
  color: string;
}

function MockPreview({ color, category }: { color: string; category: string }) {
  const isDesign = ['Logos', 'Banners', 'Posters'].includes(category);
  return (
    <div className={styles.preview} style={{ '--color': color } as React.CSSProperties}>
      {isDesign ? (
        <div className={styles.designPreview}>
          <div className={styles.designShape} />
          <div className={styles.designText} />
          <div className={styles.designSubtext} />
        </div>
      ) : (
        <div className={styles.webPreview}>
          <div className={styles.webBar}>
            <span /><span /><span />
          </div>
          <div className={styles.webContent}>
            <div className={styles.webLine} style={{ width: '60%' }} />
            <div className={styles.webLine} style={{ width: '80%' }} />
            <div className={styles.webGrid}>
              <div className={styles.webBox} /><div className={styles.webBox} /><div className={styles.webBox} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Modal({ item, onClose }: { item: Item; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
          <MockPreview color={item.color} category={item.category} />
          <div className={styles.modalInfo}>
            <span className="tag">{item.category}</span>
            <h3 className={styles.modalTitle}>{item.title}</h3>
            <p className={styles.modalDesc}>{item.desc}</p>
            <a href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Request Similar Work <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<Item | null>(null);

  const filtered = active === 'All' ? items : items.filter(i => i.category === active);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-label">Our Portfolio</div>
          <h1 className={styles.heroTitle}>Work That <span className="gradient-text">Speaks</span></h1>
          <p className={styles.heroSub}>Browse through our curated showcase of websites, apps, and design work.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Filter tabs */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className={styles.grid} layout>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelected(item)}
              >
                <MockPreview color={item.color} category={item.category} />
                <div className={styles.cardOverlay}>
                  <span className="tag">{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
