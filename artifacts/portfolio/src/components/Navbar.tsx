import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-display font-bold text-2xl tracking-wider flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-primary/20 border border-primary rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_10px_#00d9ff]" />
          </div>
          <span>NEXUS<span className="text-primary glow-text">UI</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('about')} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo('portfolio')} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">Work</button>
          <button onClick={() => scrollTo('services')} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollTo('contact')} className="text-sm uppercase tracking-widest bg-primary text-primary-foreground px-6 py-2 rounded-sm font-semibold hover:bg-primary/90 transition-all shadow-[0_0_15px_-3px_#00d9ff]">Contact</button>
        </nav>
      </div>
    </motion.header>
  );
}
