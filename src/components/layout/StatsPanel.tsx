import { useMissionStore } from '@/stores/missionStore';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { formatPayoutShorthand } from '@/utils/box-breakdown';

export function StatsPanel() {
  const getTotalPayout = useMissionStore((s) => s.getTotalPayout);
  const getTotalSCU = useMissionStore((s) => s.getTotalSCU);
  const selectedShip = useMissionStore((s) => s.selectedShip);

  const totalPayout = getTotalPayout();
  const totalSCU = getTotalSCU();
  const capacity = selectedShip?.capacity ?? 0;

  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] p-4 space-y-4">
      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
        Stats
      </h3>

      {/* Total Payout */}
      <div>
        <div className="text-xs text-[var(--text-secondary)] mb-1">
          Total Payout
        </div>
        <div className="text-2xl font-bold text-[var(--text-highlight)]">
          {totalPayout > 0 ? formatPayoutShorthand(totalPayout) : '0'}
        </div>
      </div>

      {/* Total SCU */}
      <div>
        <div className="text-xs text-[var(--text-secondary)] mb-1">
          Total SCU
        </div>
        <div className="text-xl font-semibold text-[var(--text-primary)]">
          {totalSCU}
        </div>
      </div>

      {/* Capacity meter */}
      {capacity > 0 && (
        <ProgressBar current={totalSCU} max={capacity} label="Cargo Capacity" />
      )}
    </div>
  );
}
