'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedCounters.module.css';

const counters = [
  { value: 50, suffix: '+', label: 'Projects Delivered', description: 'Across websites, apps & design work' },
  { value: 30, suffix: '+', label: 'Happy Clients', description: 'Individuals and businesses served' },
  { value: 4, suffix: '+', label: 'Years of Experience', description: 'Building digital products' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', description: 'Commitment to quality results' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, value);
            setCount(Math.round(current));
            if (current >= value) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={styles.value}>
      {count}{suffix}
    </div>
  );
}

export default function AnimatedCounters() {
  return (
    <section className={`section section-alt ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={c.value} suffix={c.suffix} />
              <div className={styles.label}>{c.label}</div>
              <div className={styles.desc}>{c.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
