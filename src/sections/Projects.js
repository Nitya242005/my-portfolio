"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ perspective: 1000 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured <span className="text-accent">Projects</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch place-items-stretch">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
