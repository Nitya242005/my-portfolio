"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const principles = [
  {
    title: "BUILD",
    description: "Create scalable full-stack applications.",
    number: "01"
  },
  {
    title: "UNDERSTAND",
    description: "Turn complex data into useful user experiences.",
    number: "02"
  },
  {
    title: "IMPROVE",
    description: "Integrate intelligent capabilities where they create real value.",
    number: "03"
  }
];

function PrincipleCard({ principle, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
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
      className="relative group bg-card p-8 md:p-10 rounded-sm border border-border shadow-lg flex-1 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 text-7xl font-bold text-background opacity-40 group-hover:text-accent/10 transition-colors duration-500 font-serif leading-none -z-10 pointer-events-none select-none">
        {principle.number}
      </div>
      
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 font-serif tracking-widest">{principle.title}</h3>
        <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
          {principle.description}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export default function HowIBuild() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-8 items-stretch">
          
          <div className="md:w-1/4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-text-primary">How I <span className="text-accent">Build</span></h2>
              <div className="w-12 h-[2px] bg-accent mb-4"></div>
              <p className="text-text-secondary text-sm">
                The core principles guiding my development process.
              </p>
            </motion.div>
          </div>

          <div className="md:w-3/4 flex flex-col sm:flex-row gap-6">
            {principles.map((principle, idx) => (
              <PrincipleCard key={idx} principle={principle} idx={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
