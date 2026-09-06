import { stats } from '../../data/stats';
import { useCountUp } from '../../hooks/useCountUp';

function StatItem({ end, suffix, label }) {
  const { count, ref } = useCountUp(end, 2000);
  
  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-5xl md:text-6xl font-display font-bold text-ember mb-2">
        {count}{suffix}
      </div>
      <p className="text-canvas/70 font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="w-full bg-ink py-20" aria-label="Platform Statistics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate/20">
          {stats.map((stat) => (
            <StatItem key={stat.id} end={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}