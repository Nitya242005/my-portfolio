"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BrainCircuit, Server, Network, LayoutDashboard } from 'lucide-react';

const buildAreas = [
  {
    title: "Full Stack Development",
    description: "Building responsive, highly interactive web applications from frontend to database.",
    Icon: Layers
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating intelligent models, multimodal AI, and NLP capabilities into digital products.",
    Icon: BrainCircuit
  },
  {
    title: "Backend & APIs",
    description: "Designing robust, scalable server architectures and secure RESTful interfaces.",
    Icon: Server
  },
  {
    title: "Data-Centric Applications",
    description: "Engineering systems that handle, process, and visualize complex datasets efficiently.",
    Icon: Network
  },
  {
    title: "Intelligent Platforms",
    description: "Creating comprehensive digital environments that combine user workflows with automated insights.",
    Icon: LayoutDashboard
  }
];

export default function WhatIBuild() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-text-primary">What I <span className="text-accent">Build</span></h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {buildAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
              style={{ perspective: 1000 }}
              className="group relative glass-card p-6 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)] flex flex-col items-center text-center cursor-default transition-all duration-300 border border-border hover:border-accent/50 hover:shadow-accent/10"
            >
              <div className="mb-4 p-4 rounded-full bg-background border border-border text-accent group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <area.Icon size={28} className="relative z-10 group-hover:-rotate-6 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 font-serif">{area.title}</h3>
              <p className="text-sm text-text-secondary group-hover:text-text-primary/90 transition-colors duration-300 leading-relaxed">
                {area.description}
              </p>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent/80 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
