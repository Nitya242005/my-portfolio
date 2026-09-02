"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import TechIcon from '@/components/TechIcon';

const experiences = [
  {
    year: "2026",
    company: "Central Institute of Classical Tamil (CICT)",
    role: "Web Developer Intern",
    period: "Apr 2026 – Present",
    tag: "Central Government project — currently under deployment stage",
    docLink: "https://drive.google.com/file/d/12tw-5RJ3R_d2gJjMz8F5FQg1T6F-s27l/view?usp=drivesdk",
    docText: "Offer Letter ↗",
    areas: [
      {
        title: "Digital Library Platform",
        tags: ["OPAC", "Admin Portal", "Catalogue", "Backend APIs"],
        description: "Contributed to a full-stack digital library platform through Online Public Access Catalogue (OPAC), admin portal, catalogue features, UI components, website pages, and backend APIs."
      },
      {
        title: "Semmozhi AI Librarian",
        tags: ["AI Retrieval", "Data Indexing", "Entity Matching", "Conversational Context"],
        description: "Developed the Semmozhi AI Librarian chatbot with dynamic retrieval, library-data indexing, entity matching, catalogue/publication retrieval, source-aware navigation, and conversational context."
      },
      {
        title: "SUVADI Platform",
        tags: ["Manuscript Search", "E-books", "Digital Assets", "AI Assistant"],
        description: "Enhanced the SUVADI website with manuscript search/viewing, e-books, critical editions, SUVADI Assistant chatbot, PDF/digital asset integration, dynamic data handling, and responsive UI."
      }
    ]
  },
  {
    year: "2025",
    company: "Airports Authority of India — Southern Region HQ",
    role: "Project Intern",
    period: "Jul 2025 – Aug 2025",
    project: "IT Consumables Monitoring System",
    technologies: ["React.js", "Django"],
    docLink: "https://drive.google.com/file/d/1FcBSuz9qHjhCjnQhQo-UmcB-0PzfQMph/view?usp=drivesdk",
    docText: "Internship Certificate ↗",
    bullets: [
      "Developed an IT Consumables Monitoring System using React.js and Django for inventory tracking, request management, and approval workflows.",
      "Implemented centralized inventory visibility with consumable requests, stock monitoring, and approval management.",
      "Integrated frontend interfaces with backend APIs to streamline consumable tracking and operational workflows."
    ]
  }
];

function ExpCard({ exp, idx }) {
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
    <div className="relative">
      {/* Year Marker */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-0 -top-8 md:top-0 md:-left-[85px] bg-background px-2 text-xl font-bold font-serif text-accent"
      >
        {exp.year}
      </motion.div>

      {/* Timeline Dot */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute -left-[21px] md:-left-[69px] top-2.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ perspective: 1000, rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-card p-6 md:p-8 border border-border hover:border-accent/30 transition-all duration-300 relative group"
      >
        <div style={{ transform: "translateZ(10px)" }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-text-primary font-serif group-hover:text-accent transition-colors duration-300">{exp.role}</h3>
            <span className="text-text-secondary font-medium mt-1 md:mt-0 text-sm md:text-base">{exp.period}</span>
          </div>
          <h4 className="text-xl text-text-secondary font-medium mb-4">{exp.company}</h4>

          {exp.tag && (
            <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-sm px-4 py-1.5 rounded-sm mb-6 w-fit shadow-sm">
              {exp.tag}
            </div>
          )}

          {exp.project && (
            <div className="text-lg font-semibold text-text-primary mb-3 font-serif">Project: {exp.project}</div>
          )}
        </div>

        {exp.areas && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6" style={{ transform: "translateZ(15px)" }}>
            {exp.areas.map((area, areaIdx) => (
              <motion.div 
                key={areaIdx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + (areaIdx * 0.1) }}
                whileHover={{ y: -2, rotateX: 2, rotateY: -2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-background/50 border border-border/50 p-5 rounded-sm hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <h5 className="text-md font-bold text-text-primary mb-2 font-serif">{area.title}</h5>
                <p className="text-xs text-text-secondary mb-4 leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-[10px] uppercase tracking-wider font-semibold bg-accent/5 border border-accent/10 text-accent px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {exp.bullets && (
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ transform: "translateZ(10px)" }}
            className="space-y-3 mb-6 text-sm md:text-base text-text-secondary leading-relaxed border-l-2 border-accent/20 pl-4 ml-1"
          >
            {exp.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start">
                <span>{bullet}</span>
              </li>
            ))}
          </motion.ul>
        )}

        {exp.technologies && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ transform: "translateZ(20px)" }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {exp.technologies.map((tech, tIdx) => (
              <motion.span 
                key={tIdx} 
                whileHover={{ y: -2, rotateX: 5, rotateY: -2, scale: 1.05 }}
                className="text-xs text-text-secondary bg-background border border-border px-3 py-1.5 rounded-sm shadow-sm flex items-center gap-1.5 hover:border-accent/50 hover:text-text-primary transition-all duration-300"
              >
                <TechIcon name={tech} className="text-accent/80" />
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}

        {exp.docLink && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{ transform: "translateZ(25px)" }}
            className="mt-6 inline-block"
          >
            <motion.a
              href={exp.docLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2, rotateX: 2, rotateY: -1, z: 5, boxShadow: "0px 8px 15px rgba(212, 175, 55, 0.15)" }}
              whileTap={{ scale: 0.98, y: 1, rotateX: -1, z: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-background border border-accent/30 rounded-sm shadow-sm text-text-primary text-sm font-semibold hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
            >
              <span style={{ transform: "translateZ(2px)" }} className="block">{exp.docText}</span>
            </motion.a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ perspective: 1000 }}
          className="flex items-center gap-4 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-serif">Experience</h2>
          <div className="h-px bg-border flex-grow ml-4"></div>
        </motion.div>

        <div className="relative border-l-2 border-border/40 ml-4 md:ml-12 pl-4 md:pl-16 space-y-24 md:space-y-20">
          {/* Animated Line that draws down as you scroll */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[-2px] top-0 w-[2px] bg-accent transform origin-top"
          />

          {experiences.map((exp, idx) => (
            <ExpCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
