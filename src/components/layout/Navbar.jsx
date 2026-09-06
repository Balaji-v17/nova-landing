export default function Navbar() {
  return (
    <nav className="w-full p-6 border-b border-slate/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-accent">NOVA</div>
        <button className="bg-accent text-canvas px-4 py-2 rounded-md hover:bg-ink transition-colors">Get Started</button>
      </div>
    </nav>
  )
}