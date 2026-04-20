"use client";
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[450px] w-full max-w-md mx-auto rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image / Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-full flex flex-col p-8 transition-transform duration-500 ease-out"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-2">
            {project.tags?.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-white/20 group-hover:text-accent transition-colors">
            <FaGithub size={24} />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed mb-auto">
          {project.desc}
        </p>

        {/* Action Buttons: Overlay on hover or at bottom */}
        <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <motion.a 
            href={project.github}
            target="_blank"
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/5"
          >
            <FaGithub size={16} /> Code
          </motion.a>
          {project.demo && (
            <motion.a 
              href={project.demo}
              target="_blank"
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 text-sm font-semibold bg-accent/80 hover:bg-accent px-4 py-2 rounded-lg transition-colors text-background"
            >
              <ExternalLink size={16} /> Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Subtle depth elements */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="absolute top-4 right-4 w-20 h-20 bg-accent/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-accent/20 transition-all duration-500" 
      />
    </motion.div>
  );
}
