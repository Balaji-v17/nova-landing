export default function Card({ children, variant = 'default', className = '' }) {
  // We use variants so Solutions cards look distinct from Features cards
  const baseStyle = "p-8 rounded-xl transition-all duration-300";
  const variants = {
    default: "border border-slate/20 bg-white hover:-translate-y-1",
    solid: "bg-canvas border border-transparent hover:bg-slate/10",
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}