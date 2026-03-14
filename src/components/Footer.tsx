import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 relative z-10 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center">
              <span className="text-neon-cyan font-bold text-sm">M</span>
            </div>
            <span className="text-white font-bold tracking-widest uppercase">Mangalam</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mangalam Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
