import { useUIStore } from '@/stores/uiStore';
import { THEMES } from '@/data';
import { Header } from './Header';
import { StatsPanel } from './StatsPanel';
import { MissionPanel } from '@/components/missions/MissionPanel';
import { DeliveryPanel } from '@/components/delivery/DeliveryPanel';
import { ColorPickerModal } from '@/components/modals/ColorPickerModal';

declare const __BUILD_TIME__: string;

export function MainLayout() {
  const { theme, setTheme } = useUIStore();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
 
      {/* App Banner */}
      <div className="text-center pt-6 pb-1 px-4 relative">
        <div className="absolute top-4 right-4">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as typeof theme)}
            className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded px-2 py-1 text-xs text-[var(--text-secondary)] cursor-pointer"
          >
            {THEMES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <h1 className="text-3xl font-bold tracking-widest text-[var(--text-primary)]">
          HAULER HELPER
        </h1>
        <div className="text-xs text-[var(--text-secondary)] mt-1">
          by{' '}
          <a
            href="https://github.com/VerdaPegasus/SCHaulerHelper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline"
          >
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            VerdaPegasus
          </a>
          . Original project from{' '}
          <a
            href="https://github.com/wednesdaywoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline"
          >
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Wednesdaywoe
          </a>
          {' '}and{' '}
          <a
            href="https://github.com/loeken/SCHaulerHelper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline"
          >
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Loeken
          </a>
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

      <ColorPickerModal />
    </div>
  );
}
