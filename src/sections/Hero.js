"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', Icon: FaGithub, href: 'https://github.com/Nitya242005' },
    { name: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/a-nityasri-b92256294/' },
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "I'm Nityasri";
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    // Respect reduced motion by skipping the typing delay
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedText(fullText);
      setIsTyping(false);
      return;
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setIsTyping(false), 400); // fade out cursor after a short pause
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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

  // Base delay calculated from typing time: ~12 chars * 80ms = 960ms + 400ms = 1.36s
  const introDelay = 1.4;

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 md:pt-20 px-6 relative overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10 pointer-events-none">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center gap-8 order-2 md:order-1 h-full pointer-events-auto" style={{ perspective: 1200 }}>
          <motion.div 
            className="flex flex-col gap-2 relative"
            initial={{ rotateX: 0, z: 0 }}
            animate={!isTyping ? { rotateX: 4, rotateY: -2, z: 20 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-text-primary font-serif" style={{ transform: "translateZ(20px)" }}>
              {typedText}
              <motion.span 
                animate={{ opacity: isTyping ? [1, 0] : 0 }}
                transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0 }}
                className="inline-block w-[3px] h-[0.8em] bg-accent ml-2 align-middle"
              />
            </h1>
            
            {/* Subtle gold glow after typing finishes */}
            {!isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-accent/5 blur-3xl -z-10 rounded-full"
                style={{ transform: "translateZ(-10px)" }}
              />
            )}
          </motion.div>

          {/* Staggered Role Title with animated drawing line */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: introDelay }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-accent font-semibold tracking-widest text-sm md:text-base uppercase flex items-center gap-4"
          >
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: introDelay + 0.3 }}
              className="w-12 h-[2px] bg-accent origin-left"
            />
            <span style={{ transform: "translateZ(5px)" }}>Full-Stack Developer | AI & ML</span>
          </motion.div>

          {/* Buttons with physical 3D interaction */}
          <motion.div 
            initial={{ opacity: 0, y: 15, rotateX: 5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: introDelay + 0.3 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, y: -4, rotateX: 4, rotateY: -2, z: 10, boxShadow: "0px 15px 25px rgba(212, 175, 55, 0.2)" }}
              whileTap={{ scale: 0.95, y: 2, rotateX: -2, z: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="btn-primary flex items-center justify-center border border-accent bg-accent text-background hover:bg-background hover:text-accent hover:border-accent shadow-md transition-all duration-300"
            >
              <span style={{ transform: "translateZ(5px)" }} className="block">View Projects</span>
            </motion.a>
            <motion.a
              href="https://github.com/Nitya242005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -4, rotateX: 5, rotateY: 2, z: 10 }}
              whileTap={{ scale: 0.95, y: 2, z: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group flex flex-col justify-center px-5 py-2.5 border border-border bg-card rounded-sm shadow-md hover:border-accent/50 hover:shadow-accent/10 transition-all duration-300 flex-1 min-w-[200px]"
            >
              <div style={{ transform: "translateZ(8px)" }} className="flex items-center gap-2 text-text-primary mb-0.5 group-hover:text-accent transition-colors">
                <FaGithub size={16} className="group-hover:-translate-y-0.5 group-hover:rotate-6 transition-transform" />
                <span className="font-bold font-serif text-base">GitHub</span>
              </div>
              <span style={{ transform: "translateZ(4px)" }} className="block text-[11px] text-text-secondary group-hover:text-text-primary/90 transition-colors uppercase tracking-wider">Explore my repositories ↗</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/a-nityasri-b92256294/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -4, rotateX: 5, rotateY: -2, z: 10 }}
              whileTap={{ scale: 0.95, y: 2, z: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group flex flex-col justify-center px-5 py-2.5 border border-border bg-card rounded-sm shadow-md hover:border-accent/50 hover:shadow-accent/10 transition-all duration-300 flex-1 min-w-[200px]"
            >
              <div style={{ transform: "translateZ(8px)" }} className="flex items-center gap-2 text-text-primary mb-0.5 group-hover:text-accent transition-colors">
                <FaLinkedin size={16} className="group-hover:-translate-y-0.5 group-hover:-rotate-6 transition-transform" />
                <span className="font-bold font-serif text-base">LinkedIn</span>
              </div>
              <span style={{ transform: "translateZ(4px)" }} className="block text-[11px] text-text-secondary group-hover:text-text-primary/90 transition-colors uppercase tracking-wider">Connect with me ↗</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Layered 3D Profile Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isMobile ? 0.2 : introDelay + 0.3 }}
          className="relative flex items-center justify-center order-1 md:order-2 h-[450px] md:h-[600px] w-full pointer-events-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          {/* Subtle glow behind the frame */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] scale-125 -z-10" />
          
          <div className="relative w-[280px] h-[360px] md:w-[380px] md:h-[480px]">
            <div className="absolute inset-0 rounded-sm overflow-hidden shadow-2xl border border-accent/40 bg-card z-10 flex items-center justify-center relative">
              <img 
                src="/Nitya.png" 
                alt="Nityasri" 
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.src = "/Nitya.jpg"; }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
