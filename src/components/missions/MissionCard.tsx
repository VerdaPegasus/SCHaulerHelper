import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMissionStore } from '@/stores/missionStore';
import { CommodityRow } from './CommodityRow';
import { Button } from '@/components/ui/Button';
import type { Mission } from '@/types';

interface MissionCardProps {
  mission: Mission;
  index: number;
}

export function MissionCard({ mission, index }: MissionCardProps) {
  const updatePayout = useMissionStore((s) => s.updatePayout);
  const removeMission = useMissionStore((s) => s.removeMission);
  const addCommodityRow = useMissionStore((s) => s.addCommodityRow);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: mission.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-3 space-y-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-1 py-0.5 touch-none"
            title="Drag to reorder"
          >
            &#x2630;
          </button>
          <span className="text-sm font-semibold text-[var(--color-primary)]">
            Mission {index + 1}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-xs text-[var(--text-secondary)]">Payout:</label>
            <input
              type="text"
              value={mission.payout}
              placeholder="e.g., 163.75k"
              onChange={(e) => updatePayout(mission.id, e.target.value)}
              onFocus={(e) => e.target.select()}
              className="bg-[var(--bg-tertiary)] text-[var(--text-highlight)] font-bold border border-[var(--border-color)] rounded-md px-2 py-1 text-sm w-28 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </div>
          <Button variant="danger" size="sm" onClick={() => removeMission(mission.id)}>
            Remove
          </Button>
        </div>
      </div>

      {/* Commodity rows */}
      <div className="space-y-2">
        {mission.commodities.map((commodity, cIndex) => (
          <CommodityRow
            key={commodity.id}
            missionId={mission.id}
            commodity={commodity}
            showRemove={cIndex > 0}
          />
        ))}
      </div>

      {/* Add commodity button */}
      {mission.commodities.length < 8 && (
        <Button
          variant="success"
          size="sm"
          onClick={() => addCommodityRow(mission.id)}
        >
          + Add Commodity
        </Button>
      )}
    </div>
  );
}
