import { useMissionStore } from '@/stores/missionStore';
import { LOCATIONS, COMMODITIES } from '@/data';
import { SearchableSelect } from '@/components/ui/SearchableSelect';
import { Button } from '@/components/ui/Button';
import type { CommodityRow as CommodityRowType } from '@/types';

interface CommodityRowProps {
  missionId: string;
  commodity: CommodityRowType;
  showRemove: boolean;
}

export function CommodityRow({ missionId, commodity, showRemove }: CommodityRowProps) {
  const updateCommodityRow = useMissionStore((s) => s.updateCommodityRow);
  const removeCommodityRow = useMissionStore((s) => s.removeCommodityRow);

  return (
    <div className="grid grid-cols-[minmax(160px,1fr)_minmax(120px,1fr)_80px_100px_minmax(160px,1fr)_2rem] gap-2 items-center">
      {/* Pickup */}
      <SearchableSelect
        options={LOCATIONS}
        value={commodity.pickup}
        onChange={(v) => updateCommodityRow(missionId, commodity.id, 'pickup', v)}
        placeholder="Pickup"
      />

      {/* Commodity */}
      <select
        value={commodity.commodity}
        onChange={(e) =>
          updateCommodityRow(missionId, commodity.id, 'commodity', e.target.value)
        }
        className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
      >
        <option value="">Commodity</option>
        {COMMODITIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Quantity */}
      <input
        type="number"
        min={1}
        value={commodity.quantity || ''}
        placeholder="SCU"
        onChange={(e) =>
          updateCommodityRow(
            missionId,
            commodity.id,
            'quantity',
            parseInt(e.target.value, 10) || 0
          )
        }
        className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] w-full"
      />

      {/* Max Box Size */}
      <select
        value={commodity.maxBoxSize}
        onChange={(e) =>
          updateCommodityRow(
            missionId,
            commodity.id,
            'maxBoxSize',
            parseInt(e.target.value, 10) as 1 | 2 | 3 | 4
          )
        }
        className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
      >
        <option value={1}>Max: 1 SCU</option>
        <option value={2}>Max: 2 SCU</option>
        <option value={4}>Max: 4 SCU</option>
        <option value={8}>Max: 8 SCU</option>
        <option value={16}>Max: 16 SCU</option>
        <option value={24}>Max: 24 SCU</option>
        <option value={32}>Max: 32 SCU</option>
      </select>

      {/* Destination */}
      <SearchableSelect
        options={LOCATIONS}
        value={commodity.destination}
        onChange={(v) =>
          updateCommodityRow(missionId, commodity.id, 'destination', v)
        }
        placeholder="Dropoff"
      />

      {/* Remove button */}
      {showRemove ? (
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeCommodityRow(missionId, commodity.id)}
        >
          -
        </Button>
      ) : (
        <div className="w-8" />
      )}
    </div>
  );
}
