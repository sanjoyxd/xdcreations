'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { BRAND_INFO } from '@/lib/constants';
import styles from './page.module.css';

const services = ['Website Development', 'Web Application', 'SaaS Product', 'Graphic Design', 'Other'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1 className={styles.heroTitle}>Start Your <span className="gradient-text">Project</span></h1>
          <p className={styles.heroSub}>Tell us about your idea and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Let's Build Something Great</h2>
              <p className={styles.infoText}>
                Whether you need a website, a web app, a brand identity, or something completely custom — we're here to help. Reach out via the form or directly through WhatsApp or email.
              </p>

              <div className={styles.contactMethods}>
                <a href={`https://wa.me/${BRAND_INFO.whatsapp}`} target="_blank" rel="noreferrer" className={styles.method}>
                  <div className={styles.methodIcon} style={{ background: 'rgba(0,229,160,0.12)', borderColor: 'rgba(0,229,160,0.25)' }}>
                    <MessageCircle size={20} color="#00E5A0" />
                  </div>
                  <div>
                    <div className={styles.methodLabel}>WhatsApp</div>
                    <div className={styles.methodValue}>Quick replies, usually instant</div>
                  </div>
                </a>
                <a href={`mailto:${BRAND_INFO.email}`} className={styles.method}>
                  <div className={styles.methodIcon}>
                    <Mail size={20} color="#6C63FF" />
                  </div>
                  <div>
                    <div className={styles.methodLabel}>Email</div>
                    <div className={styles.methodValue}>{BRAND_INFO.email}</div>
                  </div>
                </a>
                <div className={styles.method}>
                  <div className={styles.methodIcon} style={{ background: 'rgba(0,212,255,0.12)', borderColor: 'rgba(0,212,255,0.25)' }}>
                    <Clock size={20} color="#00D4FF" />
                  </div>
                  <div>
                    <div className={styles.methodLabel}>Response Time</div>
                    <div className={styles.methodValue}>Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}><CheckCircle size={40} /></div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">Your Name</label>
                      <input id="name" name="name" type="text" className={styles.input} placeholder="Sanjoy Das" required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" className={styles.input} placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="service">Service Needed</label>
                    <select id="service" name="service" className={styles.input}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">Project Details</label>
                    <textarea
                        id="message"
                        name="message"
                        className={`${styles.input} ${styles.textarea}`}
                      placeholder="Tell us about your project, goals, timeline, and budget..."
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                    {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
