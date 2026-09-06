import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Accordion({ title, children, isOpen, onClick }) {
  return (
    <div className="border-b border-slate/20">
      <button
        type="button"
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-display font-bold text-ink">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate ml-4 shrink-0"
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}