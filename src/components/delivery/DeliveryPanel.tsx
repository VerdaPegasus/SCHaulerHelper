import { useUIStore } from '@/stores/uiStore';
import { TabBar } from '@/components/ui/TabBar';
import { RoutePlanner } from './RoutePlanner';
import { CargoVisualizer } from './CargoVisualizer';
import type { DeliveryTab } from '@/types';

const TABS = [
  { id: 'route', label: 'Route Planner' },
  { id: 'cargo', label: 'Cargo Visualizer' },
];

export function DeliveryPanel() {
  const activeTab = useUIStore((s) => s.activeDeliveryTab);
  const setActiveTab = useUIStore((s) => s.setActiveDeliveryTab);

  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] overflow-hidden">
      <TabBar
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={(id) => setActiveTab(id as DeliveryTab)}
      />

      {activeTab === 'route' ? <RoutePlanner /> : <CargoVisualizer />}
    </div>
  );
}
