import { BOX_SVG_ICONS } from '@/utils/box-icons';

export function BoxBreakdownIcons({
  breakdown,
}: {
  breakdown: Record<number, number>;
}) {
  const entries = Object.entries(breakdown).sort(
    ([a], [b]) => Number(b) - Number(a),
  );
  if (entries.length === 0) return null;

  return (
    <span className="inline-flex items-center gap-1.5 align-middle">
      {entries.map(([size, count]) => (
        <span
          key={size}
          className="inline-flex items-center gap-1"
          title={`${count} x ${size} SCU`}
        >
          <span className="text-[11px] font-semibold text-[var(--text-secondary)]">
            {count}x
          </span>
          <span
            className="inline-block size-5 shrink-0 text-[var(--text-highlight)]"
            dangerouslySetInnerHTML={{
              __html: BOX_SVG_ICONS[Number(size)] ?? BOX_SVG_ICONS[4],
            }}
          />
        </span>
      ))}
    </span>
  );
}
