import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aura Shop UI",
    category: "Shop UI",
    description: "A sleek, responsive shop interface featuring item previews, dynamic grids, and smooth purchase animations.",
    gradient: "from-purple-500 to-indigo-600",
    wireframe: "grid"
  },
  {
    title: "Battle HUD",
    category: "HUD",
    description: "Minimalist combat heads-up display with animated health bars, cooldown indicators, and kill feeds.",
    gradient: "from-red-500 to-orange-600",
    wireframe: "bars"
  },
  {
    title: "Vault Inventory",
    category: "Inventory",
    description: "Drag-and-drop enabled inventory system with rarity filters, item tooltips, and sorting logic.",
    gradient: "from-emerald-500 to-teal-500",
    wireframe: "grid"
  },
  {
    title: "Void Loader",
    category: "Loading Screen",
    description: "Atmospheric loading screen with custom tweened transitions, tip rotation, and progress tracking.",
    gradient: "from-slate-800 to-gray-900",
    wireframe: "center"
  },
  {
    title: "Nexus Hub",
    category: "Main Menu",
    description: "A comprehensive main menu featuring parallax backgrounds, settings sliders, and character selection.",
    gradient: "from-blue-600 to-cyan-500",
    wireframe: "split"
  },
  {
    title: "Rankings Board",
    category: "Leaderboard",
    description: "Real-time scrolling leaderboard with highlighted top players, distinct tier styling, and stat toggles.",
    gradient: "from-amber-500 to-orange-500",
    wireframe: "list"
  }
];

const WireframeVisual = ({ type, gradient }: { type: string, gradient: string }) => {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} p-4 md:p-6 opacity-80 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] z-0" />
      
      <div className="relative z-10 w-full h-full flex flex-col gap-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 p-4 shadow-2xl">
        {/* Mock Window Header */}
        <div className="h-6 w-full border-b border-white/10 flex items-center justify-between">
          <div className="h-2 w-1/3 bg-white/20 rounded-full" />
          <div className="h-4 w-4 bg-white/10 rounded-sm" />
        </div>

        {/* Dynamic Wireframe Content */}
        {type === 'grid' && (
          <div className="flex-1 grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded border border-white/5" />
            ))}
          </div>
        )}
        {type === 'bars' && (
          <div className="flex-1 flex flex-col justify-end gap-2 p-2">
            <div className="h-4 w-1/2 bg-green-500/50 rounded-sm border border-green-400/50" />
            <div className="h-2 w-1/3 bg-blue-500/50 rounded-sm border border-blue-400/50" />
            <div className="h-12 w-12 bg-white/10 rounded-full absolute bottom-4 right-4" />
          </div>
        )}
        {type === 'center' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="h-12 w-12 border-4 border-white/20 border-t-white rounded-full" />
            <div className="h-2 w-2/3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-white" />
            </div>
          </div>
        )}
        {type === 'split' && (
          <div className="flex-1 flex gap-4">
            <div className="w-1/3 flex flex-col gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-white/10 rounded-sm" />
              ))}
            </div>
            <div className="flex-1 bg-white/5 rounded-sm" />
          </div>
        )}
        {type === 'list' && (
          <div className="flex-1 flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-white/10 rounded-sm flex items-center px-3 gap-3">
                <div className="h-4 w-4 rounded-full bg-white/20" />
                <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                <div className="h-2 w-8 bg-white/10 rounded-full ml-auto" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export function Portfolio() {
  return (
    <section className="py-24 bg-black/20" id="portfolio">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">FEATURED WORK</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-white/5 glow-card relative"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-muted">
                <WireframeVisual type={project.wireframe} gradient={project.gradient} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-sm">
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-all">
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold font-display">{project.title}</h4>
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
