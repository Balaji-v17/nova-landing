import { features } from '../../data/features';

export default function Features() {
  return (
    <section className="w-full py-24 bg-canvas" aria-label="Platform Features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:w-[60%]">
          <h2 className="text-4xl font-display font-bold text-ink mb-4">Everything you need. Nothing you don't.</h2>
          <p className="text-lg text-slate">Designed for focus. We stripped away the clutter so your team can do the best work of their lives.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="relative p-8 rounded-xl border border-slate/20 bg-white hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 bg-ember text-ink text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                {feature.tag}
              </div>
              <div className="text-accent mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-3">{feature.title}</h3>
              <p className="text-slate leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}