import { useMissionStore } from '@/stores/missionStore';
import { useDeliveryStore } from '@/stores/deliveryStore';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { formatPayoutShorthand, formatDistance } from '@/utils/box-breakdown';
import { travelCost } from '@/data/location-graph';

export function StatsPanel() {
  const getTotalPayout = useMissionStore((s) => s.getTotalPayout);
  const getTotalSCU = useMissionStore((s) => s.getTotalSCU);
  const selectedShip = useMissionStore((s) => s.selectedShip);
  const routeStops = useDeliveryStore((s) => s.routeStops);

  const totalPayout = getTotalPayout();
  const totalSCU = getTotalSCU();
  const capacity = selectedShip?.capacity ?? 0;
  const capacityPct = capacity > 0 ? Math.min(100, Math.round((totalSCU / capacity) * 100)) : 0;
  const isOverCapacity = capacity > 0 && totalSCU > capacity;

  // Estimate total distance using travelCost between consecutive stops
  const totalDistance = routeStops.reduce((sum, stop, i) => {
    if (i === 0) return 0;
    return sum + travelCost(routeStops[i - 1].location, stop.location);
  }, 0);

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

      {/* Capacity meter with overload detection */}
      {capacity > 0 && (
        <div>
          <ProgressBar current={totalSCU} max={capacity} label="Cargo Capacity" />
          {isOverCapacity && (
            <div className="mt-1 text-xs font-semibold text-red-400">
              Over capacity by {totalSCU - capacity} SCU!
            </div>
          )}
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            {capacityPct}% used
          </div>
        </div>
      )}

      {/* Route distance */}
      {routeStops.length > 1 && (
        <div>
          <div className="text-xs text-[var(--text-secondary)] mb-1">
            Route Distance
          </div>
          <div className="text-lg font-semibold text-[var(--text-primary)]">
            {formatDistance(totalDistance)}
          </div>
        </div>
      )}
    </div>
  );
}
