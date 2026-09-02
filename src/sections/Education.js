"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const educationData = [
  {
    institution: "SRM Institute of Science and Technology, Ramapuram",
    degree: "B.Tech in Computer Science and Engineering (Big Data Analytics)",
    period: "2023 – 2027",
    score: "CGPA: 9.95/10"
  },
  {
    institution: "Kendriya Vidyalaya DGQA",
    degree: "Class XII — CBSE (PCM)",
    period: "2023",
    score: "87.6%"
  },
  {
    institution: "Kendriya Vidyalaya DGQA",
    degree: "Class X — CBSE",
    period: "2021",
    score: "93.8%"
  }
];

function EduCard({ edu, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4 hover:border-accent/40 transition-colors duration-300"
    >
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl font-bold text-text-primary mb-1 font-serif">{edu.degree}</h3>
        <p className="text-text-secondary font-medium">{edu.institution}</p>
      </div>
      <div className="flex flex-col md:items-end gap-1" style={{ transform: "translateZ(15px)" }}>
        <span className="text-accent font-semibold">{edu.period}</span>
        <span className="text-text-primary bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm w-fit md:w-auto shadow-sm">
          {edu.score}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-serif">Education</h2>
            <div className="h-px bg-border flex-grow ml-4 hidden md:block"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <EduCard key={idx} edu={edu} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
