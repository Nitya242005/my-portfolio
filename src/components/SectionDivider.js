"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-4 relative z-20">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-1/3 md:w-1/4 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent relative flex items-center justify-center"
      >
        <motion.div 
          initial={{ rotate: -45, opacity: 0 }}
          whileInView={{ rotate: 45, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute w-2 h-2 border border-accent bg-background"
        />
      </motion.div>
    </div>
  );
}
