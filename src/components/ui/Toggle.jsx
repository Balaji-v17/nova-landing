export default function Toggle({ enabled, onChange, labelLeft, labelRight }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`text-sm font-medium ${!enabled ? 'text-ink' : 'text-slate'}`}>{labelLeft}</span>
      <button
        type="button"
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-accent' : 'bg-slate/40'}`}
        onClick={() => onChange(!enabled)}
        aria-pressed={enabled}
        aria-label="Toggle pricing"
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-7' : 'translate-x-1'}`} />
      </button>
      <span className={`text-sm font-medium ${enabled ? 'text-ink' : 'text-slate'}`}>{labelRight}</span>
    </div>
  );
}