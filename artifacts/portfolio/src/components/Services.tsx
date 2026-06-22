import { motion } from "framer-motion";
import { LayoutTemplate, Code2, Sparkles, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "UI/UX Design",
    description: "Creating wireframes, mockups, and fully realized UI assets in Figma, tailored perfectly to your game's aesthetic."
  },
  {
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    title: "UI Scripting",
    description: "Bringing static designs to life with optimized Luau code. Handling state, client-server communication, and dynamic scaling."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Custom Animations",
    description: "Adding polish with smooth tweening, hover effects, transition screens, and satisfying click feedback."
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-secondary" />,
    title: "Responsive Scaling",
    description: "Ensuring your UI looks flawless on PC, mobile, and console by mastering anchor points, scale constraints, and aspect ratios."
  }
];

export function Services() {
  return (
    <section className="py-24" id="services">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-[0.3em] uppercase mb-4">Services</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">WHAT I DELIVER</h3>
          <p className="text-muted-foreground text-lg">
            I don't just draw pretty pictures. I deliver production-ready interface systems that plug directly into your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-xl bg-card border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4 scale-150">
                {service.icon}
              </div>
              <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary/50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold font-display mb-3">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
