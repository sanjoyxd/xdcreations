'use client';

import Link from 'next/link';
import { Zap, Terminal as Github, X as Twitter, Link2 as Linkedin, Mail, Heart } from 'lucide-react';
import { BRAND_INFO } from '@/lib/constants';
import styles from './Footer.module.css';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Web Applications', href: '/services/web-apps' },
    { label: 'SaaS Products', href: '/services/saas' },
    { label: 'Graphic Design', href: '/services/graphic-design' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Projects', href: '/projects/result-management' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topGradient} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}><Zap size={18} fill="currentColor" /></div>
              <span>XD <span className="gradient-text">Creations</span></span>
            </Link>
            <p className={styles.tagline}>
              Building premium digital solutions for individuals & businesses. Clean code, stunning design, real results.
            </p>
            <div className={styles.socials}>
              <a href={BRAND_INFO.socials.github} target="_blank" rel="noreferrer" className={styles.social} aria-label="GitHub"><Github size={18} /></a>
              <a href={BRAND_INFO.socials.twitter} target="_blank" rel="noreferrer" className={styles.social} aria-label="Twitter"><Twitter size={18} /></a>
              <a href={BRAND_INFO.socials.linkedin} target="_blank" rel="noreferrer" className={styles.social} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${BRAND_INFO.email}`} className={styles.social} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className={styles.link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4 className={styles.groupTitle}>Stay Updated</h4>
            <p className={styles.newsletterText}>Get notified about new projects and services.</p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className={styles.input} />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem', fontSize: '0.85rem' }}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} XD Creations. All rights reserved.</p>
          <p className={styles.madeWith}>
            Made with <Heart size={13} fill="#FF6584" color="#FF6584" /> by <strong>Sanjoy</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
