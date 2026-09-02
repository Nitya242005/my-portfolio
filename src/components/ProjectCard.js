"use client";
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import TechIcon from '@/components/TechIcon';

export default function ProjectCard({ project, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Extremely subtle tilt (4-6 degrees as requested)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);
  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
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
      initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className="relative group w-full h-full flex flex-col max-w-[500px] mx-auto rounded-sm bg-card border border-border overflow-hidden transition-colors duration-500 hover:border-accent/40"
    >
      {/* Dynamic Gold Shine Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`
        }}
      />

      {/* Gold Base Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Container */}
      <div
        style={{ transform: "translateZ(20px)" }}
        className="h-full flex flex-col p-6 md:p-8 transition-transform duration-500 ease-out z-20 relative"
      >
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/5 px-3 py-1 rounded-sm border border-accent/20 shadow-sm flex-1">
            {project.category || 'Project'}
          </div>
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }} 
            className="text-text-secondary group-hover:text-accent transition-colors z-30 relative shrink-0"
          >
            <FaGithub size={24} />
          </motion.a>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent transition-colors duration-300 font-serif">
          {project.title}
        </h3>

        <div className="text-text-secondary font-medium mb-4">
          {project.desc}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-6 transition-all duration-300">
          {project.longDesc || project.desc}
        </p>

        {/* Metadata Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-semibold">Type</div>
            <div className="text-sm font-medium text-text-primary">{project.type}</div>
          </div>
          <div>
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-semibold">Role</div>
            <div className="text-sm font-medium text-text-primary">{project.role}</div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2 font-semibold">Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, idx) => (
              <motion.span 
                key={idx} 
                whileHover={{ y: -4, rotateX: 10, rotateY: -5, z: 15, scale: 1.05 }}
                style={{ transformStyle: "preserve-3d" }}
                className="px-2.5 py-1 text-xs font-medium bg-background border border-border rounded-sm text-text-secondary hover:border-accent/50 hover:text-text-primary transition-colors shadow-sm flex items-center gap-1.5 group/tag relative z-30"
              >
                <TechIcon name={tag} className="text-accent/70 group-hover/tag:text-accent transition-colors text-sm" />
                <span style={{ transform: "translateZ(2px)" }}>{tag}</span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* View Details Interactive Section */}
        {project.details && project.details.length > 0 && (
          <div className="mt-4 mb-6 relative z-30">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-text-primary transition-colors duration-300 focus:outline-none"
            >
              {isExpanded ? "Hide Details" : "View Details"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 border-l border-accent/20 pl-3 ml-1">
                    {project.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (idx * 0.05), duration: 0.3 }}
                        className="text-sm text-text-secondary flex items-start before:content-[''] before:w-1 before:h-1 before:bg-accent/50 before:rounded-full before:mt-1.5 before:mr-2 before:shrink-0"
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* mt-auto pushes this to the bottom for consistent heights */}
        <div className="mt-auto pt-4 relative z-30">
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2 font-semibold">Repository</div>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-3 bg-background border border-border rounded-sm text-text-primary font-semibold group-hover:border-accent group-hover:bg-accent/5 group-hover:text-accent transition-all duration-300 shadow-sm"
          >
            <FaGithub size={18} /> View on GitHub ↗
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
