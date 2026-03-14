"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import React, { useRef } from "react";

const projectsList = [
  {
    title: "Myntra Clone",
    tech: "React, CSS, JavaScript",
    description: "A full-fledged UI clone of the Myntra e-commerce application.",
  },
  {
    title: "MERN Ecommerce",
    tech: "MongoDB, Express, React, Node.js",
    description: "Full Stack Ecommerce Website with user authentication and cart system.",
  },
  {
    title: "Weather Website",
    tech: "JavaScript, HTML, CSS, REST API",
    description: "Real-time weather application fetching dynamic data globally.",
  },
  {
    title: "Calculator Website",
    tech: "React, UI/UX",
    description: "A sleek, fully functional calculator web app.",
  },
  {
    title: "Restaurant Website",
    tech: "Full Stack MERN",
    description: "Full Stack Restaurant Website for managing menus and orders.",
  },
  {
    title: "Food Delivery Website",
    tech: "Next.js, Tailwind, MongoDB",
    description: "Responsive Food Delivery platform for immediate order processing.",
  }
];

// Reusable 3D Tilt Card Component
function TiltCard({ project }: { project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Rotate 20 degrees based on mouse position
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass p-8 rounded-2xl flex flex-col h-full transform transition-transform duration-200 ease-out group"
    >
      <div className="w-12 h-12 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <MonitorPlay size={24} />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-neon-cyan text-sm mb-4 uppercase tracking-wider font-semibold">{project.tech}</p>
      <p className="text-gray-400 mb-8 flex-grow">{project.description}</p>
      
      <div className="flex items-center gap-4 mt-auto">
        <button className="flex items-center gap-2 text-sm text-white hover:text-neon-cyan transition-colors">
          <Github size={18} /> Code
        </button>
        <button className="flex items-center gap-2 text-sm text-white hover:text-neon-cyan transition-colors">
          <ExternalLink size={18} /> Live Demo
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              Featured <span className="text-neon-cyan text-glow-cyan">Works</span>
            </h2>
            <p className="text-gray-400">Cinematic applications built with full-stack excellence.</p>
          </motion.div>
          <a href="#projects" className="text-neon-cyan hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wide text-sm font-bold">
            All Projects &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projectsList.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
