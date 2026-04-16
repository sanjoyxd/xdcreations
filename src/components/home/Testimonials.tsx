'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStart India',
    review: 'XD Creations delivered beyond expectations. Our landing page now converts 3x better and the design is absolutely stunning. Sanjoy truly understands what modern brands need.',
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Mehta',
    role: 'Principal, Green Valley School',
    review: 'The Result Management System transformed how we handle student records. What used to take days now takes minutes. The software is intuitive and reliable.',
    rating: 5,
    avatar: 'PM',
  },
  {
    name: 'Ankit Verma',
    role: 'E-commerce Entrepreneur',
    review: 'My brand logo and business card design got more compliments than my products did at the expo! The branding work from XD Creations is top-tier.',
    rating: 5,
    avatar: 'AV',
  },
];

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Client Love</div>
          <h2 className="section-title">What People <span className="gradient-text">Say</span></h2>
          <p className="section-subtitle">Don't just take our word for it — hear it directly from the people we've worked with.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className={styles.quoteIcon}><Quote size={20} /></div>
              <p className={styles.review}>{t.review}</p>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#FFD060" color="#FFD060" />
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
