'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import styles from './FeaturedProjects.module.css';

const projects = [
  {
    title: 'Result Management System',
    category: 'Web Application',
    description: 'A comprehensive school result management system with student records, marks entry, grading, and automated report generation.',
    tags: ['Next.js', 'Database', 'Auth', 'Reports'],
    href: '/projects/result-management',
    featured: true,
    color: '#6C63FF',
  },
  {
    title: 'Brand Identity Package',
    category: 'Graphic Design',
    description: 'Complete brand kit including logo design, color system, typography guidelines, and business card templates.',
    tags: ['Branding', 'Logo', 'Identity'],
    href: '/portfolio',
    featured: false,
    color: '#FF6584',
  },
  {
    title: 'SaaS Dashboard UI',
    category: 'Web App',
    description: 'Analytics dashboard with real-time data visualization, custom charts, and a dark-mode-first design system.',
    tags: ['React', 'Charts', 'Dark Mode'],
    href: '/portfolio',
    featured: false,
    color: '#00D4FF',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Real work, real results. Here's a glimpse of what we've built.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Mock preview */}
              <div className={styles.preview} style={{ '--color': project.color } as React.CSSProperties}>
                <div className={styles.previewBar}>
                  <div className={styles.previewDots}><span /><span /><span /></div>
                  {project.featured && <span className={styles.featuredBadge}><Star size={11} fill="currentColor" /> Featured</span>}
                </div>
                <div className={styles.previewContent}>
                  {[0.7, 0.4, 0.6].map((w, idx) => (
                    <div key={idx} className={styles.previewLine} style={{ width: `${w * 100}%` }} />
                  ))}
                  <div className={styles.previewBoxes}>
                    {[...Array(project.featured ? 4 : 2)].map((_, idx) => (
                      <div key={idx} className={styles.previewBox} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <span className="tag">{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <Link href={project.href} className={styles.cta}>
                  {project.featured ? 'View Project' : 'See Details'}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/portfolio" className="btn btn-outline">
            View All Work <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
