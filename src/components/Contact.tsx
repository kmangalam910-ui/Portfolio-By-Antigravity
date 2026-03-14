"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/kmangalam910@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission from Portfolio!"
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              Let's <span className="text-neon-cyan text-glow-cyan">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Have a vision for a project? Let's turn it into reality with cutting-edge tech and design.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-colors group cursor-pointer">
                <div className="p-3 bg-neon-cyan/10 text-neon-cyan rounded-lg group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:kmangalam910@gmail.com" className="text-white font-medium hover:text-neon-cyan transition-colors">
                    kmangalam910@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-colors group">
                <div className="p-3 bg-neon-cyan/10 text-neon-cyan rounded-lg group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">Korba, Chhattisgarh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-white/10"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Message</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..." 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                status === "success" 
                  ? "bg-green-500 text-black cursor-default" 
                  : status === "loading"
                    ? "bg-neon-cyan/50 text-black cursor-not-allowed"
                    : "bg-neon-cyan text-black hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
              }`}
            >
              {status === "loading" ? (
                <>Sending <Loader2 size={18} className="animate-spin" /></>
              ) : status === "success" ? (
                <>Sent <CheckCircle size={18} /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-sm mt-4 text-center">Something went wrong. Please try again.</p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}
