import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-32 overflow-hidden flex flex-col md:flex-row items-center">
      {/* Left Column - 60% width */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[60%] z-10"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight mb-6">
          Build productivity tools that work for you.
        </h1>
        <p className="text-lg md:text-xl text-slate mb-8 max-w-lg">
          NOVA is the AI productivity platform designed to adapt to your workflow, not the other way around. Workspace, not billboard.
        </p>
        <div className="flex gap-4">
          <button className="bg-accent text-canvas px-6 py-3 rounded-md font-medium hover:bg-ink transition-colors">
            Start for free
          </button>
          <button className="bg-transparent text-ink border border-slate/30 px-6 py-3 rounded-md font-medium hover:bg-slate/10 transition-colors">
            Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Right Column - Abstract Workflow Card bleeding off right edge */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block absolute right-[-5%] md:right-[-10%] top-10 w-full md:w-[50%]"
      >
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate/20 transform rotate-[-2deg] flex gap-4">
          <div className="w-1/3 h-48 bg-canvas rounded-lg border border-slate/10"></div>
          <div className="w-1/3 h-64 bg-canvas rounded-lg border border-slate/10 relative -top-4 shadow-sm"></div>
          <div className="w-1/3 h-40 bg-canvas rounded-lg border border-slate/10"></div>
        </div>
      </motion.div>
    </section>
  )
}