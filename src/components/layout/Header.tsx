import { useMissionStore } from '@/stores/missionStore';
import { SHIPS } from '@/data';
import { Button } from '@/components/ui/Button';
import { ShipSelect } from './ShipSelect';

export function Header() {
  const { selectedShip, setShip, clearMissions, clearAll } =
    useMissionStore();

  return (
    <header className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] px-4 py-2">
      <div className="flex items-center justify-between gap-2">
        <div className="w-[280px] min-w-0">
          <ShipSelect ships={SHIPS} value={selectedShip} onChange={setShip} />
        </div>
        <div className="flex-1 min-w-0" />
        <div className="flex flex-wrap gap-2 shrink-0">
          <Button variant="secondary" size="sm" onClick={clearMissions}>
            Clear Missions
          </Button>
          <Button variant="secondary" size="sm" onClick={clearAll}>
            Reset All
          </Button>
        </div>
      </div>
    </header>
  );
}
