import { useUIStore } from '@/stores/uiStore';
import { useMissionStore } from '@/stores/missionStore';
import { SHIPS, THEMES } from '@/data';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ShipSelect } from './ShipSelect';

export function Header() {
  const { theme, setTheme } = useUIStore();
  const { selectedShip, setShip, clearMissions, clearAll } =
    useMissionStore();

  return (
    <header className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] px-4 py-3">
      <div className="flex flex-wrap items-end gap-3 sm:gap-4">
        {/* Ship selector */}
        <ShipSelect ships={SHIPS} value={selectedShip} onChange={setShip} />

        {/* Spacer */}
        <div className="flex-1 min-w-0" />

        {/* Right side: actions + theme */}
        <div className="flex flex-wrap items-end gap-3 sm:gap-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" onClick={clearMissions}>
              Clear Missions
            </Button>
            <Button variant="secondary" size="sm" onClick={clearAll}>
              Reset All
            </Button>
          </div>

          {/* Theme selector */}
          <Select
            label="Theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value as typeof theme)}
          >
            {THEMES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </header>
  );
}
