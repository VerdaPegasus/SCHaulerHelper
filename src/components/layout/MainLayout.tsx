import { Header } from './Header';
import { StatsPanel } from './StatsPanel';
import { MissionPanel } from '@/components/missions/MissionPanel';
import { DeliveryPanel } from '@/components/delivery/DeliveryPanel';
import { ColorPickerModal } from '@/components/modals/ColorPickerModal';

declare const __BUILD_TIME__: string;

export function MainLayout() {

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
 
      {/* App Banner */}
      <div className="text-center pt-6 pb-1 px-4">
        <h1 className="text-3xl font-bold tracking-widest text-[var(--text-primary)]">
          HAULER HELPER
        </h1>
        <div className="text-sm text-[var(--text-secondary)] mt-1">
          Your Cargo Manifest for Star Citizen
        </div>
        <div
          className="w-full h-[2px] mt-5 mb-6"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          }}
        />
      </div>

      <Header />

      {/*
        Responsive layout matching the old app's breakpoints:
        - >= 1200px: 3 columns (missions | delivery | stats sidebar)
        - 900-1199px: 2 columns (missions | delivery), stats below spanning full width
        - < 900px: single column stack
      */}
      <main className="p-5 max-sm:p-2.5 max-w-[1800px] mx-auto">
        {/* 3-column layout for large screens */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1200px]:grid-cols-[1fr_1fr_280px] min-[1400px]:grid-cols-[1fr_1fr_300px] gap-[15px] min-[1400px]:gap-5">
          {/* Left column: Missions */}
          <MissionPanel />

          {/* Middle column: Delivery (Route + Cargo) */}
          <DeliveryPanel />

          {/* Right column: Stats — spans full width on 2-col layout */}
          <div className="min-[900px]:col-span-2 min-[1200px]:col-span-1">
            <StatsPanel />
          </div>
        </div>
      </main>

      {/* All modals */}
      <ColorPickerModal />
    </div>
  );
}
