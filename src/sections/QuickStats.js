"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '9.95/10', label: 'CGPA' },
  { value: '2', label: 'Internship Experiences' },
  { value: '3', label: 'Featured Projects' },
  { value: '2023–2027', label: 'B.Tech' },
];

export default function QuickStats() {
  return (
    <section className="py-12 bg-background border-y border-border/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/30">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-center text-center px-4 ${idx === 0 || idx === 2 ? 'border-l-0 md:border-l' : ''} ${idx === 0 ? 'md:border-l-0' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
