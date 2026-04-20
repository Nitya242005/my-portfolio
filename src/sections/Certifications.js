"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

function CertCard({ cert }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x);
  const sy = useSpring(y);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);

  const handleInnerMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  return (
    <motion.div
      onMouseMove={handleInnerMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-card p-8 rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-colors duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-accent/10 rounded-xl text-accent">
            <Award size={24} />
          </div>
          <motion.a 
            href={cert.link}
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="text-text-secondary hover:text-accent"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{cert.name}</h3>
        <p className="text-accent/80 text-sm font-semibold mb-4 uppercase tracking-widest">{cert.company}</p>
        <p className="text-text-secondary text-sm leading-relaxed">{cert.desc}</p>
      </div>

      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all" />
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Honors & <span className="gradient-text">Certifications</span></h2>
          <p className="text-text-secondary max-w-2xl">
            My professional journey validated through global industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
