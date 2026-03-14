"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  TerminalSquare, 
  Database,
  MonitorSmartphone
} from "lucide-react";

const allSkills = {
  Frontend: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  Other: ["Cloud Computing Basics", "Full Stack with AI", "Git", "REST APIs"],
};

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            Core <span className="text-neon-cyan text-glow-cyan">Arsenal</span>
          </h2>
          <p className="text-gray-400">Mastering the technologies that power the modern web ecosystem.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(allSkills).map(([category, skills], index) => {
            const icons = [MonitorSmartphone, TerminalSquare, Database, Code2];
            const Icon = icons[index];

            return (
              <motion.div
                key={category}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border-t-4 border-t-neon-cyan/50 hover:border-t-neon-cyan transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-neon-cyan/10 text-neon-cyan rounded-lg group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={item}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] text-gray-300 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
