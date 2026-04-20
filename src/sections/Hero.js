"use client";
import React from 'react';
import { motion } from 'framer-motion';
import FloatingBlob from '@/components/FloatingBlob';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/Nitya242005' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/a-nityasri-b92256294/' },
    { Icon: FaInstagram, href: 'https://instagram.com/nitya_unstoppable' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 md:pt-20 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-accent font-medium tracking-widest text-sm uppercase"
          >
            Full Stack Developer | AI & ML
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm <span className="gradient-text">Nityasri</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-secondary font-medium tracking-tight leading-snug">
              Full Stack Developer specializing in AI-driven and data-focused applications
            </h2>
          </div>

          <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
            I specialize in building intelligent systems that bridge the gap between complex 
            data and user-centric experiences. From AI speech analysis to smart automation.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore My Work
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social icons */}
          <div className="flex gap-8 mt-4">
            {socialLinks.map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, color: '#06B6D4' }}
                className="text-text-secondary transition-all"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center order-1 md:order-2"
        >
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] scale-150 -z-10 animate-pulse" />
          
          <div className="relative group max-w-[320px] md:max-w-full">
            {/* Gradient Border Frame */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-violet-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-2">
              <img 
                src="/Nitya.jpg" 
                alt="Nityasri" 
                className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Decorative Floating Elements (Behind Image) */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] -z-10" />
    </section>
  );
}
