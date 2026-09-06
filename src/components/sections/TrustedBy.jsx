export default function TrustedBy() {
  const partners = ['Aura', 'Nexus', 'Velocity', 'Lumina', 'Foresight'];

  return (
    <section className="w-full border-t border-slate/10 py-10" aria-label="Trusted by innovative companies">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium text-slate text-center md:text-left mb-6">
          TRUSTED BY INNOVATIVE TEAMS AT
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {partners.map((partner) => (
            <div 
              key={partner} 
              className="text-2xl font-display font-bold text-ink grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}