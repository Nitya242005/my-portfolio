"use client";
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

export default function ThreeTest() {
  useEffect(() => {
    console.log("Three.js Revision:", THREE.REVISION);
  }, []);
  return null;
}
