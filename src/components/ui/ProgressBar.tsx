interface ProgressBarProps {
  current: number;
  max: number;
  label?: string;
}

export function ProgressBar({ current, max, label }: ProgressBarProps) {
  const percentage = max > 0 ? Math.min((current / max) * 100, 100) : 0;
  const isOver = current > max;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1">
          <span>{label}</span>
          <span className={isOver ? 'text-[var(--color-danger)] font-bold' : ''}>
            {current} / {max} SCU
          </span>
        </div>
      )}
      <div className="w-full h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden border border-[var(--border-color)]">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isOver
              ? 'bg-[var(--color-danger)] animate-pulse'
              : 'bg-[var(--color-primary)]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
