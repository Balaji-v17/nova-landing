export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Connect your tools", desc: "Link your codebase, design files, and comms in one click." },
    { number: "02", title: "Establish context", desc: "NOVA indexes your project history to understand your workflow." },
    { number: "03", title: "Co-create", desc: "NOVA works in the background, drafting updates and assigning tasks." }
  ];

  return (
    <section className="w-full py-24 bg-ink text-canvas" aria-label="How it works">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">How NOVA works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-display font-bold text-slate/20 mb-6">{step.number}</div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-slate">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}