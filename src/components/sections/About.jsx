export default function About() {
  return (
    <section className="w-full py-24 bg-white" aria-label="About NOVA">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="aspect-video bg-canvas rounded-xl border border-slate/20 flex items-center justify-center p-8">
            {/* Styled Mock Workspace Visual */}
            <div className="w-full h-full bg-white rounded-lg shadow-sm border border-slate/10 overflow-hidden flex flex-col">
              <div className="h-8 bg-slate/5 border-b border-slate/10 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="w-3/4 h-3 bg-slate/10 rounded-full"></div>
                <div className="w-1/2 h-3 bg-slate/10 rounded-full"></div>
                <div className="mt-auto w-full h-24 bg-accent/5 rounded-md border border-accent/10 flex items-center justify-center text-accent/40 text-sm font-medium">
                  AI Co-pilot Active
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-display font-bold text-ink mb-6">A new primitive for human-AI collaboration.</h2>
          <p className="text-lg text-slate mb-6 leading-relaxed">
            We didn't just bolt an AI chat window onto a legacy project manager. NOVA was built from the ground up to treat artificial intelligence as a co-creator, not a command-line utility. 
          </p>
          <p className="text-lg text-slate leading-relaxed">
            By understanding your team's context, NOVA shifts the burden of organization, tracking, and reporting from humans to machines—giving you back the time to do what you do best: create.
          </p>
        </div>
      </div>
    </section>
  )
}