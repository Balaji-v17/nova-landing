import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="w-full p-6 border-b border-slate/20 dark:border-slate/80 bg-canvas dark:bg-ink sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-accent">NOVA</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate dark:text-slate-300">
          {links.map(link => (
            <a key={link.name} href={link.href} className="hover:text-ink dark:hover:text-white transition-colors">{link.name}</a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 hover:bg-slate/10 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-ink dark:hover:bg-white dark:hover:text-ink transition-colors">Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-ink dark:text-white" aria-label="Toggle Dark Mode">
            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          <button className="text-ink dark:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pt-6 pb-4">
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate dark:text-slate-300 font-medium">{link.name}</a>
          ))}
          <button className="bg-accent text-white w-full px-4 py-2 rounded-md">Get Started</button>
        </div>
      )}
    </nav>
  )
}