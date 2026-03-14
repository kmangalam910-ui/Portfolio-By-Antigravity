"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-black text-white tracking-widest flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center animate-glow">
            <span className="text-neon-cyan text-lg">M</span>
          </div>
          <span className="text-glow-cyan text-neon-cyan">MANGALAM</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white hover:text-glow-cyan transition-all text-sm tracking-wide uppercase font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a 
          href="#contact"
          className="bg-transparent border border-neon-cyan text-neon-cyan px-5 py-2 rounded-full font-medium hover:bg-neon-cyan hover:text-black transition-all animate-glow hidden md:block text-sm uppercase tracking-wider"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
