"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

function CertCard({ cert }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]); // max 5 deg tilt
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const handleInnerMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  // Dynamically extract provider from name
  let certName = cert.name;
  let provider = null;
  if (cert.name === 'AWS Cloud Foundations') {
    provider = 'AWS';
  } else {
    const match = cert.name.match(/(.*)\((.*)\)/);
    if (match) {
      certName = match[1].trim();
      provider = match[2].trim();
    }
  }

  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleInnerMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-card p-6 rounded-sm border border-border shadow-md hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between block"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="flex flex-col gap-4">
        <div style={{ transform: "translateZ(10px)" }} className="relative z-10 w-10 h-10 flex items-center justify-center bg-background border border-border rounded-sm text-accent shadow-sm group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300">
          <Award size={20} />
        </div>

        <div style={{ transform: "translateZ(15px)" }} className="relative z-10">
          <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors leading-snug mb-1.5">{certName}</h3>
          {provider && <p className="text-[11px] text-text-secondary font-semibold uppercase tracking-wider">{provider}</p>}
        </div>
      </div>
      
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 mt-6 flex items-center justify-start text-xs font-semibold text-text-secondary group-hover:text-accent transition-colors">
        <span className="flex items-center gap-1.5">View Certificate <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /></span>
      </div>
    </motion.a>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-background overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: true }}
           className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-serif">Certifications</h2>
            <div className="h-px bg-border flex-grow ml-4 hidden md:block"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
