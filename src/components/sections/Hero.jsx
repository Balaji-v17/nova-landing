import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-32 overflow-hidden flex flex-col md:flex-row items-center">
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[60%] z-10"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold text-ink dark:text-white leading-tight mb-6 transition-colors duration-300">
          Build productivity tools that work for you.
        </h1>
        <p className="text-lg md:text-xl text-slate dark:text-slate-300 mb-8 max-w-lg transition-colors duration-300">
          NOVA is the AI productivity platform designed to adapt to your workflow, not the other way around. Workspace, not billboard.
        </p>
        <div className="flex gap-4">
          <button className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-ink dark:hover:bg-white dark:hover:text-ink transition-colors">
            Start for free
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent text-ink dark:text-white border border-slate/30 dark:border-slate/70 px-6 py-3 rounded-md font-medium hover:bg-slate/10 dark:hover:bg-slate-800 transition-colors"
          >
            Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block absolute right-[-5%] md:right-[-10%] top-10 w-full md:w-[50%]"
      >
        <div className="bg-white dark:bg-surface p-6 rounded-2xl shadow-sm border border-slate/20 dark:border-slate/70 transform rotate-[-2deg] flex gap-4 transition-colors duration-300">
          <div className="w-1/3 h-48 bg-canvas dark:bg-ink rounded-lg border border-slate/10 dark:border-slate/70 transition-colors duration-300"></div>
          <div className="w-1/3 h-64 bg-canvas dark:bg-ink rounded-lg border border-slate/10 dark:border-slate/70 relative -top-4 shadow-sm transition-colors duration-300"></div>
          <div className="w-1/3 h-40 bg-canvas dark:bg-ink rounded-lg border border-slate/10 dark:border-slate/70 transition-colors duration-300"></div>
        </div>
      </motion.div>

      {/* Demo Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-canvas dark:bg-surface w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-ink dark:text-white hover:text-accent z-10 font-bold">Close</button>
            <div className="aspect-video bg-slate/10 flex items-center justify-center text-slate dark:text-slate-300 font-medium">
              [Product Demo Video Player]
            </div>
          </div>
        </div>
      )}
    </section>
  )
}