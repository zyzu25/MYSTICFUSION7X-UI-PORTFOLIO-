import { motion } from "framer-motion";

const skills = [
  "ScreenGuis", "Frames & Layouts", "UI Animations", 
  "Tweening", "Responsive Design", "Roblox Studio", 
  "Figma", "Iconography", "Luau UI Scripting"
];

export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative aspect-square max-w-md mx-auto rounded-full border border-white/10 bg-card/50 backdrop-blur overflow-hidden flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite] absolute" />
                <div className="w-3/4 h-3/4 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse] absolute" />
                <div className="text-center font-display">
                  <h3 className="text-4xl font-bold text-white mb-2">3+</h3>
                  <p className="text-muted-foreground uppercase tracking-widest text-sm">Years Exp</p>
                  <div className="h-px w-12 bg-white/20 mx-auto my-4" />
                  <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                  <p className="text-muted-foreground uppercase tracking-widest text-sm">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">ENGINEERING THE FEEL OF PLAY</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I specialize in bridging the gap between aesthetics and functionality. Every interface I design is built to feel intuitive, look stunning, and run flawlessly within the Roblox engine. From high-fantasy RPG HUDs to sleek sci-fi menus, I adapt to your game's soul.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={skill} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-sm font-medium tracking-wide"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
