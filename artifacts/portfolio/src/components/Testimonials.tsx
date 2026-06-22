import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nexus completely transformed our game's feel. The UI went from feeling like a standard Roblox template to a standalone AAA title. Fast delivery and flawless scripting.",
    author: "xX_DragonSlayer_Xx",
    role: "Lead Dev, Fantasy Realm RPG"
  },
  {
    quote: "I've worked with many UI designers, but rarely do they understand the actual implementation. Nexus delivered pixel-perfect Figma files AND scripted them perfectly for mobile and PC.",
    author: "BloxCreator99",
    role: "Studio Owner"
  },
  {
    quote: "The animations on the inventory system alone increased our player retention. Players just love interacting with the menus now. Worth every single Robux.",
    author: "NeonViper",
    role: "Project Manager"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black/40 relative border-y border-white/5" id="testimonials">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwaDFNMCAzMGg0MGgxTTEwIDB2NDB2MU0zMCAwdjQwdjEiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] z-0" />
      
      <div className="container px-6 mx-auto relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-black mb-16 font-display">CLIENT FEEDBACK</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur p-8 rounded-xl border border-white/10 flex flex-col h-full"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-6" />
              <p className="text-muted-foreground flex-1 italic mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-background border border-white/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-primary to-secondary opacity-50" />
                </div>
                <div>
                  <h5 className="font-bold text-white">{t.author}</h5>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
