export default function CTA() {
  return (
    <section className="w-full py-32 bg-ink text-canvas text-center" aria-label="Call to Action">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-display font-bold mb-6">Ready to upgrade your workflow?</h2>
        <p className="text-xl text-slate mb-10 max-w-2xl mx-auto">
          Join thousands of teams already building the future of work with NOVA. Get started for free today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-ink transition-colors">
            Start for free
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-slate/30 text-white px-8 py-4 rounded-md font-bold hover:bg-slate/80 transition-colors">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  )
}