"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Scene3D } from "./Scene3D";
import { ArrowRight, Terminal } from "lucide-react";
import profilePic from "../../public/profile.png";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon-cyan/30 text-neon-cyan text-sm mb-6">
              <Terminal size={16} />
              <span>Available for New Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-sans uppercase leading-tight">
              Mangalam <br />
              <span className="text-glow-cyan text-neon-cyan">Kumar</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Full Stack Developer. Building future-ready web apps with <strong className="text-white">cinematic precision</strong> and scalable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-3 bg-neon-cyan text-black font-bold uppercase tracking-wide rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-3 glass hover:bg-white/10 text-white font-bold uppercase tracking-wide rounded-full transition-all">
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center h-full w-full"
        >
          {/* Glowing background shapes for depth */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-neon-cyan/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-600/20 rounded-full blur-[80px] translate-x-10 translate-y-10 mix-blend-screen" />
          
          {/* Glowing Image Wrapper */}
          <div 
            className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[2rem] p-[2px] bg-gradient-to-br from-neon-cyan/50 via-transparent to-purple-600/50 shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-sm z-10 transition-transform hover:scale-105 duration-500 overflow-hidden group"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black/40 relative flex justify-center items-center border border-white/10">
              {/* Profile Image */}
              <img 
                src={profilePic.src}
                alt="Mangalam Kumar" 
                className="w-full h-full object-cover transition-all duration-700 filter grayscale-[20%] contrast-125 brightness-110 group-hover:grayscale-0 group-hover:scale-105" 
              />
              
              {/* Cyberpunk Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase writing-vertical">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
