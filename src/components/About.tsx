"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function About() {
  const education = [
    {
      degree: "BCA @ Manipal University Jaipur",
      school: "Bachelor of Computer Applications",
      year: "9.2 CGPA"
    },
    {
      degree: "Class 12: BS College, Karua, Samastipur",
      school: "Intermediate Education",
      year: "Completed"
    },
    {
      degree: "Class 10: DAV Public School, Gevra",
      school: "Secondary Education",
      year: "Completed"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left / Graphic side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl glass p-2 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-transparent opacity-50 z-10 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                alt="Developer Coding" 
                className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 z-20 glass px-6 py-4 rounded-xl border border-neon-cyan/50 animate-glow">
                <div className="text-3xl font-bold text-white">Full</div>
                <div className="text-neon-cyan text-sm uppercase tracking-wider font-semibold">Stack Dev</div>
              </div>
            </div>
          </motion.div>

          {/* Right / Content side */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
                The <span className="text-neon-cyan text-glow-cyan">Journey</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A passionate developer specializing in cutting-edge Next.js architecture and robust full-stack solutions. Dedicated to creating seamless user experiences that blend aesthetics with high-performance functionality.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My approach combines cinematic design principles with modern technology, ensuring every project is not just a tool, but an experience. From scalable backends to pixel-perfect frontends, I build for the future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-neon-cyan" size={24} />
                <h3 className="text-xl font-bold tracking-widest uppercase text-white">Education</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-cyan before:to-transparent">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-black group-hover:bg-neon-cyan group-hover:border-neon-cyan transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 mr-6 md:mx-0 shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] z-10" />
                    <div className="glass p-6 rounded-xl w-full md:w-[calc(50%-2rem)] border-l-4 border-l-transparent group-hover:border-l-neon-cyan transition-all hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                        <h4 className="font-bold text-white text-lg">{item.degree}</h4>
                        <span className="text-xs font-semibold px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full w-fit">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
