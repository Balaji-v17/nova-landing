import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 border-t border-slate/20 bg-canvas" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold text-accent">NOVA</div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate">
          <a href="#" className="hover:text-ink transition-colors">Product</a>
          <a href="#" className="hover:text-ink transition-colors">Pricing</a>
          <a href="#" className="hover:text-ink transition-colors">Company</a>
          <a href="#" className="hover:text-ink transition-colors">Legal</a>
        </div>

        <div className="flex gap-6 text-slate">
          <a href="#" aria-label="Twitter" className="hover:text-ink transition-colors"><FiTwitter className="w-5 h-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-ink transition-colors"><FiGithub className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-ink transition-colors"><FiLinkedin className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Newsletter Signup with Validation */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate font-medium text-sm">
            Subscribe to our newsletter for product updates and workflow tips.
          </div>
          <form 
            className="flex flex-col sm:flex-row w-full md:w-auto max-w-md gap-2" 
            onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
          >
            <input 
              type="email" 
              required 
              placeholder="Enter your work email" 
              className="flex-1 px-4 py-2 rounded-md border border-slate/20 focus:outline-none focus:border-accent bg-white text-ink text-sm"
            />
            <button 
              type="submit" 
              className="bg-accent text-white px-6 py-2 rounded-md hover:bg-ink transition-colors font-medium text-sm shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left text-sm text-slate/50">
        &copy; {currentYear} NOVA Platforms Inc. All rights reserved.
      </div>
    </footer>
  )
}