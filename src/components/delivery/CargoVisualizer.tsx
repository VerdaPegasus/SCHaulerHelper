import { useMemo } from 'react';
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useDeliveryStore } from '@/stores/deliveryStore';
import { useUIStore } from '@/stores/uiStore';
import { useMissionStore } from '@/stores/missionStore';
import { BoxBreakdownIcons } from './BoxBreakdownIcons';
import { calculateBoxBreakdown } from '@/utils/box-breakdown';
import type { CargoGroup } from '@/types';

interface DraggableCargoCardProps {
  location: string;
  group: CargoGroup;
  onOpenColorPicker: (location: string) => void;
}

function DraggableCargoCard({
  location,
  group,
  onOpenColorPicker,
}: DraggableCargoCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({ id: location });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
    borderColor: group.color,
  };

  const deliveries = group.items.filter((i) => i.type === 'delivery');
  const pickups = group.items.filter((i) => i.type === 'pickup');

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border rounded-lg p-2 bg-[var(--bg-secondary)] h-full"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            type="button"
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs shrink-0 touch-none"
            title="Drag to reorder"
          >
            &#x2630;
          </button>
          <span
            className="text-xs font-semibold truncate"
            style={{ color: group.color }}
          >
            {group.label}
          </span>
          <span className="text-[10px] text-[var(--text-secondary)] shrink-0">
            {group.totalSCU} SCU
          </span>
        </div>
        <button
          type="button"
          onClick={() => onOpenColorPicker(location)}
          className="w-4 h-4 rounded-full shrink-0 border border-white/20 cursor-pointer hover:scale-110 transition-transform"
          style={{ backgroundColor: group.color }}
          title="Change color"
        />
      </div>

      {deliveries.length > 0 && (
        <div className="mb-1">
          <div className="text-[9px] font-bold uppercase text-green-400 mb-0.5">
            Drop off
          </div>
          {deliveries.map((item, i) => {
            const breakdown = calculateBoxBreakdown(item.quantity, item.maxBoxSize);
            return (
              <div
                key={i}
                className="flex items-center justify-between text-xs text-[var(--text-secondary)] py-0.5"
              >
                <span className="truncate">
                  <span className="text-[10px] font-semibold text-[var(--text-highlight)]">
                    M{item.missionNum}
                  </span>{' '}
                  {item.commodity}
                </span>
                <span className="flex items-center gap-1 shrink-0 ml-1">
                  <span>{item.quantity}</span>
                  <BoxBreakdownIcons breakdown={breakdown} />
                </span>
              </div>
            );
          })}
        </div>
      )}

      {pickups.length > 0 && (
        <div>
          <div className="text-[9px] font-bold uppercase text-blue-400 mb-0.5">
            Pick up
          </div>
          {pickups.map((item, i) => {
            const breakdown = calculateBoxBreakdown(item.quantity, item.maxBoxSize);
            return (
              <div
                key={i}
                className="flex items-center justify-between text-xs text-[var(--text-secondary)] py-0.5"
              >
                <span className="truncate">
                  <span className="text-[10px] font-semibold text-[var(--text-highlight)]">
                    M{item.missionNum}
                  </span>{' '}
                  {item.commodity}
                </span>
                <span className="flex items-center gap-1 shrink-0 ml-1">
                  <span>{item.quantity}</span>
                  <BoxBreakdownIcons breakdown={breakdown} />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface DroppableCellProps {
  cellIndex: number;
  children?: React.ReactNode;
}

function DroppableCell({ cellIndex, children }: DroppableCellProps) {
  const { setNodeRef, isOver } = useDroppable({ id: `cell-${cellIndex}` });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-16 rounded-lg transition-colors ${
        children
          ? ''
          : `border border-dashed border-[var(--border-color)]/30 ${
              isOver ? 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/50' : ''
            }`
      }`}
    >
      {children}
    </div>
  );
}

export function CargoVisualizer() {
  const cargoGroupPositions = useDeliveryStore((s) => s.cargoGroupPositions);
  const cargoGridLayout = useDeliveryStore((s) => s.cargoGridLayout);
  const setGridLayout = useDeliveryStore((s) => s.setGridLayout);
  const moveCargoGroup = useDeliveryStore((s) => s.moveCargoGroup);
  const getComputedCargoGroups = useDeliveryStore((s) => s.getComputedCargoGroups);
  const openColorPicker = useUIStore((s) => s.openColorPicker);
  const missions = useMissionStore((s) => s.missions);

  const computedCargoGroups = useMemo(
    () => getComputedCargoGroups(missions),
    [getComputedCargoGroups, missions],
  );

  const totalCells = cargoGridLayout.cols * cargoGridLayout.rows;

  const cellToLocation: Record<number, string> = {};
  for (const [location, cellIndex] of Object.entries(cargoGroupPositions)) {
    if (location in computedCargoGroups && cellIndex < totalCells) {
      cellToLocation[cellIndex] = location;
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const location = active.id as string;
    const targetId = over.id as string;

    if (!targetId.startsWith('cell-')) return;
    const toCellIndex = parseInt(targetId.replace('cell-', ''), 10);

    if (cargoGroupPositions[location] !== toCellIndex) {
      moveCargoGroup(location, toCellIndex);
    }
  };

  const hasGroups = Object.keys(computedCargoGroups).length > 0;

  return (
    <div className="space-y-3 p-3">
      <div className="flex items-center gap-3">
        <label className="text-xs text-[var(--text-secondary)]">Cols:</label>
        <input
          type="number"
          min={1}
          max={4}
          value={cargoGridLayout.cols}
          onChange={(e) =>
            setGridLayout({
              ...cargoGridLayout,
              cols: parseInt(e.target.value, 10) || 1,
            })
          }
          className="w-14 bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 py-1 text-sm"
        />
        <label className="text-xs text-[var(--text-secondary)]">Rows:</label>
        <input
          type="number"
          min={1}
          max={10}
          value={cargoGridLayout.rows}
          onChange={(e) =>
            setGridLayout({
              ...cargoGridLayout,
              rows: parseInt(e.target.value, 10) || 1,
            })
          }
          className="w-14 bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded px-2 py-1 text-sm"
        />
      </div>

      {!hasGroups ? (
        <p className="text-sm text-[var(--text-secondary)] text-center py-4">
          Add missions with destinations to see cargo groups.
        </p>
      ) : (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${cargoGridLayout.cols}, 1fr)`,
            }}
          >
            {Array.from({ length: totalCells }, (_, i) => {
              const location = cellToLocation[i];
              return (
                <DroppableCell key={i} cellIndex={i}>
                  {location ? (
                    <DraggableCargoCard
                      location={location}
                      group={computedCargoGroups[location]}
                      onOpenColorPicker={openColorPicker}
                    />
                  ) : undefined}
                </DroppableCell>
              );
            })}
          </div>
        </DndContext>
      )}
    </div>
  );
}
