import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section className="w-full py-32 bg-canvas overflow-hidden" aria-label="Testimonials">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-8xl font-display font-bold text-slate/20 leading-none mb-8">"</div>
        
        <div className="relative min-h-[250px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <p className="text-2xl md:text-4xl font-display font-bold text-ink leading-tight mb-8">
                {testimonials[current].quote}
              </p>
              <div>
                <div className="font-bold text-ink text-lg">{testimonials[current].author}</div>
                <div className="text-slate">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full border border-slate/30 text-ink hover:bg-slate/10 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-accent w-6' : 'bg-slate/30'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            aria-label="Next testimonial"
            className="p-3 rounded-full border border-slate/30 text-ink hover:bg-slate/10 transition-colors"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}