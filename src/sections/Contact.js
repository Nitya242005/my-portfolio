"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Subtle tilt for the main contact card (2-3 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

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
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10 px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary font-serif">Get in <span className="text-accent">Touch</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 text-lg">
            Open to new opportunities and exciting technical challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="glass-card max-w-2xl mx-auto p-8 md:p-16 border border-border hover:border-accent/40 transition-colors duration-500 relative group flex flex-col items-center gap-10 shadow-lg"
        >
          {/* Subtle gold highlight overlay on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-sm"
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.03) 50%, rgba(212,175,55,0) 100%)",
              transform: "translateZ(1px)"
            }}
          />

          <motion.div style={{ transform: "translateZ(20px)" }} className="relative z-20">
            <a
              href="mailto:nityasri242005@gmail.com"
              className="text-2xl md:text-4xl font-bold text-accent hover:text-text-primary transition-colors block text-center break-all"
            >
              nityasri242005@gmail.com
            </a>
            <div className="h-[1px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-6"></div>
          </motion.div>

          <motion.div 
            style={{ transform: "translateZ(30px)" }} 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-20 w-full"
          >
            <motion.a
              href="https://github.com/Nitya242005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4, rotateX: 4, rotateY: 2, z: 10 }}
              whileTap={{ scale: 0.95, y: 2, z: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group/btn flex items-center justify-center gap-3 px-8 py-4 border border-border bg-card rounded-sm shadow-md hover:border-accent/50 hover:shadow-accent/10 transition-all duration-300 flex-1 w-full sm:w-auto"
            >
              <FaGithub size={20} className="text-text-secondary group-hover/btn:text-accent transition-colors" />
              <span className="font-bold font-serif text-lg text-text-primary group-hover/btn:text-accent transition-colors">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/a-nityasri-b92256294/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4, rotateX: 4, rotateY: -2, z: 10 }}
              whileTap={{ scale: 0.95, y: 2, z: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group/btn flex items-center justify-center gap-3 px-8 py-4 border border-border bg-card rounded-sm shadow-md hover:border-accent/50 hover:shadow-accent/10 transition-all duration-300 flex-1 w-full sm:w-auto"
            >
              <FaLinkedin size={20} className="text-text-secondary group-hover/btn:text-accent transition-colors" />
              <span className="font-bold font-serif text-lg text-text-primary group-hover/btn:text-accent transition-colors">LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
