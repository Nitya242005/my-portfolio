"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolio';
import TechIcon from '@/components/TechIcon';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ perspective: 1000 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Core <span className="text-accent">Skills</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            The technologies and tools I use to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {Object.entries(skillsData).map(([category, items], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              style={{ perspective: 1000 }}
              className="glass-card p-6 md:p-8 border-t-2 border-t-accent/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-text-primary flex items-center gap-3 font-serif">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 10, rotateX: 5 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + sIdx * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.08, y: -4, rotateX: 10, rotateY: -5, z: 15, boxShadow: "0px 10px 20px rgba(212, 175, 55, 0.15)" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="px-4 py-2 rounded-sm border border-border bg-background shadow-md flex items-center gap-2 text-text-secondary hover:text-accent hover:border-accent/50 transition-colors cursor-default group"
                  >
                    <TechIcon name={skill} className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(4px)" }} />
                    <span className="font-medium text-sm text-text-primary" style={{ transform: "translateZ(2px)" }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-full -z-10 pointer-events-none opacity-10">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
