import { SiRoblox, SiDiscord, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/60">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="font-display font-bold text-xl tracking-wider flex items-center gap-2 opacity-50">
          <div className="w-6 h-6 bg-primary/20 border border-primary rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-sm" />
          </div>
          <span>NEXUS<span className="text-primary">UI</span></span>
        </div>

        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Nexus UI. Not affiliated with Roblox Corporation.
        </p>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <SiRoblox className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-[#5865F2] hover:text-white transition-all">
            <SiDiscord className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white hover:text-black transition-all">
            <SiX className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
