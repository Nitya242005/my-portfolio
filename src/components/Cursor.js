"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Springs for smoother movement
  const mouseX = useSpring(0, { damping: 20, stiffness: 100 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? '#7C3AED' : '#06B6D4',
        }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          left: 6,
          top: 6,
        }}
      />
    </>
  );
}
