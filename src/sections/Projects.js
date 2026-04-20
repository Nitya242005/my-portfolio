"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of my recent works across Frontend Development, Machine Learning, and Enterprise Systems.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
