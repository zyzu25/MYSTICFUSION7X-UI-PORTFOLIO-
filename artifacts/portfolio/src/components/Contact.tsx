import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="py-24" id="contact">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Start a Project</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">READY TO UPGRADE?</h3>
          <p className="text-muted-foreground text-lg">
            Currently accepting new commissions. Fill out the form below or reach out directly on Discord.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 md:p-10 rounded-xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                <Input placeholder="John Doe" className="bg-background border-white/10 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Roblox Username</label>
                <Input placeholder="Player123" className="bg-background border-white/10 h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Discord Tag</label>
              <Input placeholder="username#0000" className="bg-background border-white/10 h-12" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
              <Textarea 
                placeholder="Tell me about your game and what UI you need..." 
                className="bg-background border-white/10 min-h-[150px] resize-none"
              />
            </div>

            <Button className="w-full h-14 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-lg hover:bg-primary/90">
              Send Request <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
