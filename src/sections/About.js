"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">About</h2>
            <div className="h-px bg-border flex-grow ml-4"></div>
          </div>

          <div className="text-lg md:text-xl text-text-secondary leading-relaxed space-y-6">
            <p>
              I build full-stack applications and AI/ML-driven systems, with hands-on experience across frontend development, backend APIs, databases, machine learning, data-centric applications, and intelligent user-facing features.
            </p>
            <p>
              My experience includes contributing to real-world government projects as well as developing independent and team-based technical projects.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 -z-10" />
    </section>
  );
}
