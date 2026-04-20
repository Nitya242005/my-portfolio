"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/Nitya242005' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/a-nityasri-b92256294/' },
    { Icon: FaInstagram, href: 'https://instagram.com/nitya_unstoppable' },
  ];

  return (
    <footer id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact <span className="gradient-text">Me</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 text-lg">
            Let's connect and build something amazing together.
          </p>
          
          <motion.a 
            href="mailto:nityasri242005@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold text-accent hover:text-cyan-400 transition-colors block mb-12"
          >
            nityasri242005@gmail.com
          </motion.a>
        </motion.div>

        {/* Social Icons - Focused & Minimal */}
        <div className="flex justify-center gap-10 mb-16">
          {socialLinks.map(({ Icon, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.2, color: '#06B6D4' }}
              className="text-text-secondary transition-all"
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-12 opacity-50 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary gap-4">
           <p>© 2026 Nityasri. Developed with precision & passion.</p>
           <div className="flex gap-8">
              <a href="https://github.com/Nitya242005" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/a-nityasri-b92256294/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
           </div>
        </div>
      </div>

      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
    </footer>
  );
}
