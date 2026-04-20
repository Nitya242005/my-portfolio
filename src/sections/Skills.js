"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative bg-white/5 backdrop-blur-sm overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core <span className="gradient-text">Skills</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: '#06B6D4'
              }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="px-6 py-3 rounded-2xl border border-border bg-card/40 flex items-center gap-3 transition-colors cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-accent group-hover:animate-pulse" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none opacity-20">
         <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
