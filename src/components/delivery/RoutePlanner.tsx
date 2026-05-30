import { useMemo } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
  arrayMove,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDeliveryStore, itemKey } from '@/stores/deliveryStore';
import { useUIStore } from '@/stores/uiStore';
import { useMissionStore } from '@/stores/missionStore';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { BoxBreakdownIcons } from './BoxBreakdownIcons';
import { calculateBoxBreakdown, formatDistance } from '@/utils/box-breakdown';
import { travelCost } from '@/data/location-graph';
import { shortName } from '@/utils/short-name';
import type { RouteStop, RouteViewMode } from '@/types';

function isStepDone(
  completion: Record<string, boolean>,
  index: number,
  stop: RouteStop,
): boolean {
  const totalItems = stop.deliveries.length + stop.pickups.length;
  if (totalItems === 0) return false;
  let done = 0;
  for (let di = 0; di < stop.deliveries.length; di++) {
    if (completion[itemKey(index, 'del', di)]) done++;
  }
  for (let pi = 0; pi < stop.pickups.length; pi++) {
    if (completion[itemKey(index, 'pick', pi)]) done++;
  }
  return done === totalItems;
}

interface GroupedSection {
  label: string;
  location: string;
  color: string;
  totalSCU: number;
    items: Array<{
      key: string;
      missionNum: number;
      commodity: string;
      quantity: number;
      maxBoxSize: 1 | 2 | 4 | 8 | 16 | 24 | 32;
      isInvalid?: boolean;
      done: boolean;
      groupKey: string;
      groupLabel: string;
      groupColor: string;
    }>;
}

function groupItemsByLocation(
  items: RouteStop['deliveries'],
  stopIndex: number,
  prefix: 'del' | 'pick',
  completion: Record<string, boolean>,
  invalidItems: Set<string>,
  keyBy: 'to' | 'from',
  cargoGroups: Record<string, { label: string; color: string }>,
  stopLocation: string,
): GroupedSection[] {
  const FALLBACK_PALETTE = ['#4dd4ac', '#ec4899', '#fbbf24', '#8b5cf6', '#3b82f6', '#f97316', '#84cc16', '#06b6d4'];
  const groups = new Map<string, GroupedSection>();
  let colorIdx = Object.keys(cargoGroups).length;
  items.forEach((item, idx) => {
    const loc = item[keyBy];
    if (!groups.has(loc)) {
      const existing = cargoGroups[loc];
      groups.set(loc, {
        label: existing?.label ?? shortName(loc),
        location: loc,
        color: existing?.color ?? FALLBACK_PALETTE[colorIdx++ % FALLBACK_PALETTE.length],
        totalSCU: 0,
        items: [],
      });
    }
    const group = groups.get(loc)!;
    const key = itemKey(stopIndex, prefix, idx);
    const isInvalid = invalidItems.has(`${item.missionNum}:${item.commodity}:${item.quantity}`);
    group.totalSCU += item.quantity;
    const groupKey = prefix === 'del' ? stopLocation : item.to;
    const grp = cargoGroups[groupKey];
    group.items.push({
      key,
      missionNum: item.missionNum,
      commodity: item.commodity,
      quantity: item.quantity,
      maxBoxSize: item.maxBoxSize,
      isInvalid,
      done: completion[key] ?? false,
      groupKey,
      groupLabel: grp?.label ?? shortName(groupKey),
      groupColor: grp?.color ?? FALLBACK_PALETTE[colorIdx % FALLBACK_PALETTE.length],
    });
  });
  return Array.from(groups.values());
}

interface SortableRouteStopProps {
  stop: RouteStop;
  stopIndex: number;
  completion: Record<string, boolean>;
  invalidItems: Set<string>;
  outOfOrderDeliveries: Set<string>;
  stopDistances: number[];
  cargoGroups: Record<string, { label: string; color: string }>;
  onToggleStep: (index: number, stop: RouteStop) => void;
  onToggleItem: (key: string) => void;
}

function SortableRouteStop({
  stop,
  stopIndex,
  completion,
  invalidItems,
  outOfOrderDeliveries,
  stopDistances,
  cargoGroups,
  onToggleStep,
  onToggleItem,
}: SortableRouteStopProps) {
  const openColorPicker = useUIStore((s) => s.openColorPicker);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `stop-${stopIndex}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  const done = isStepDone(completion, stopIndex, stop);

  const deliveryGroups = useMemo(
    () => groupItemsByLocation(stop.deliveries, stopIndex, 'del', completion, invalidItems, 'to', cargoGroups, stop.location),
    [stop.deliveries, stopIndex, completion, invalidItems, cargoGroups, stop.location],
  );

  const pickupGroups = useMemo(
    () => groupItemsByLocation(stop.pickups, stopIndex, 'pick', completion, invalidItems, 'from', cargoGroups, stop.location),
    [stop.pickups, stopIndex, completion, invalidItems, cargoGroups, stop.location],
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`border border-[var(--border-color)] rounded-lg p-3 transition-all ${
        done ? 'opacity-40' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <button
            type="button"
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-1 py-0.5 touch-none shrink-0"
            title="Drag to reorder"
          >
            &#x2630;
          </button>
          <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
            {stop.location}
          </span>
          <span className="text-xs text-[var(--text-secondary)] whitespace-nowrap">
            {stop.cargoBeforeStop} &rarr; {stop.cargoAfterStop} SCU
          </span>
          {stopDistances[stopIndex] >= 0 && (
            <span className="text-xs text-[var(--text-secondary)] whitespace-nowrap">
              &middot; {formatDistance(stopDistances[stopIndex])} next
            </span>
          )}
        </div>
        <button
          onClick={() => onToggleStep(stopIndex, stop)}
          className={`w-5 h-5 rounded border-2 transition-colors cursor-pointer shrink-0 ${
            done
              ? 'bg-[var(--color-success)] border-[var(--color-success)]'
              : 'border-[var(--border-color)] hover:border-[var(--color-primary)]'
          }`}
        />
      </div>

      {deliveryGroups.length > 0 && (
        <div className="mb-2 space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-[var(--color-success)] font-bold tracking-wider">&#9660; DELIVERY</span>
          </div>
          {deliveryGroups.flatMap((group) =>
            group.items.map((item, ri) => {
              const breakdown = calculateBoxBreakdown(item.quantity, item.maxBoxSize);
              return (
                <div
                  key={item.key}
                  className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs py-1 pl-3 ml-5 border-l-[3px] ${
                    ri % 2 === 1 ? 'bg-[var(--bg-tertiary)]/40' : ''
                  } ${item.isInvalid ? 'bg-red-500/10' : ''} ${
                    outOfOrderDeliveries.has(item.key) ? 'bg-orange-500/20' : ''
                  }`}
                  style={{ borderColor: item.groupColor }}
                >
                  <button
                    onClick={() => onToggleItem(item.key)}
                    className={`w-3.5 h-3.5 rounded border-2 transition-colors cursor-pointer shrink-0 ${
                      item.done
                        ? 'bg-[var(--color-success)] border-[var(--color-success)]'
                        : 'border-[var(--border-color)]'
                    }`}
                  />
                  <span className="font-semibold text-[var(--color-primary)] shrink-0 min-w-[65px]">
                    Mission {item.missionNum}:
                  </span>
                  <span className="truncate text-[var(--text-primary)] min-w-[40px] max-w-[160px]">
                    {item.commodity}
                  </span>
                  <span className="text-[var(--text-secondary)] tabular-nums shrink-0 min-w-[55px]">
                    {item.quantity} SCU
                  </span>
                  <span
                    className="flex items-center gap-1 cursor-pointer shrink-0"
                    onClick={() => openColorPicker(item.groupKey)}
                    title="Edit group"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.groupColor }}
                    />
                    <span
                      className="font-semibold truncate max-w-[80px]"
                      style={{ color: item.groupColor }}
                    >
                      {item.groupLabel}
                    </span>
                  </span>
                  <BoxBreakdownIcons breakdown={breakdown} />
                </div>
              );
            }),
          )}
        </div>
      )}

      {pickupGroups.length > 0 && (
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-[var(--color-warning)] font-bold tracking-wider">&#9650; PICKUP</span>
          </div>
          {pickupGroups.flatMap((group) =>
            group.items.map((item, ri) => {
              const breakdown = calculateBoxBreakdown(item.quantity, item.maxBoxSize);
              return (
                <div
                  key={item.key}
                  className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs py-1 pl-3 ml-5 border-l-[3px] ${
                    ri % 2 === 1 ? 'bg-[var(--bg-tertiary)]/40' : ''
                  }`}
                  style={{ borderColor: item.groupColor }}
                >
                  <button
                    onClick={() => onToggleItem(item.key)}
                    className={`w-3.5 h-3.5 rounded border-2 transition-colors cursor-pointer shrink-0 ${
                      item.done
                        ? 'bg-[var(--color-success)] border-[var(--color-success)]'
                        : 'border-[var(--border-color)]'
                    }`}
                  />
                  <span className="font-semibold text-[var(--color-primary)] shrink-0 min-w-[65px]">
                    Mission {item.missionNum}:
                  </span>
                  <span className="truncate text-[var(--text-primary)] min-w-[40px] max-w-[160px]">
                    {item.commodity}
                  </span>
                  <span className="text-[var(--text-secondary)] tabular-nums shrink-0 min-w-[55px]">
                    {item.quantity} SCU
                  </span>
                  <span
                    className="flex items-center gap-1 cursor-pointer shrink-0"
                    onClick={() => openColorPicker(item.groupKey)}
                    title="Edit group"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.groupColor }}
                    />
                    <span
                      className="font-semibold truncate max-w-[80px]"
                      style={{ color: item.groupColor }}
                    >
                      {item.groupLabel}
                    </span>
                  </span>
                  <BoxBreakdownIcons breakdown={breakdown} />
                </div>
              );
            }),
          )}
        </div>
      )}
    </div>
  );
}

export function RoutePlanner() {
  const routeStops = useDeliveryStore((s) => s.routeStops);
  const routeStepCompletion = useDeliveryStore((s) => s.routeStepCompletion);
  const routeViewMode = useDeliveryStore((s) => s.routeViewMode);
  const toggleStep = useDeliveryStore((s) => s.toggleStep);
  const toggleRouteItem = useDeliveryStore((s) => s.toggleRouteItem);
  const resetSteps = useDeliveryStore((s) => s.resetSteps);
  const setRouteViewMode = useDeliveryStore((s) => s.setRouteViewMode);
  const reorderStops = useDeliveryStore((s) => s.reorderStops);
  const getInvalidItems = useDeliveryStore((s) => s.getInvalidItems);
  const missions = useMissionStore((s) => s.missions);

  const currentStepIndex = useMemo(() => {
    for (let i = 0; i < routeStops.length; i++) {
      if (!isStepDone(routeStepCompletion, i, routeStops[i])) return i;
    }
    return routeStops.length - 1;
  }, [routeStops, routeStepCompletion]);

  const visibleStops = useMemo(() => {
    const withIndex = routeStops.map((s, i) => ({ stop: s, index: i }));
    if (routeViewMode === 'current') {
      const cur = withIndex.find((item) => item.index === currentStepIndex);
      return cur ? [cur] : [];
    }
    if (routeViewMode === 'current-next') {
      const startIdx = withIndex.findIndex((item) => item.index === currentStepIndex);
      if (startIdx === -1) return [];
      return withIndex.slice(startIdx, startIdx + 2);
    }
    if (routeViewMode === 'remaining') {
      return withIndex.filter(
        (item) => !isStepDone(routeStepCompletion, item.index, item.stop),
      );
    }
    return withIndex;
  }, [routeStops, routeViewMode, currentStepIndex, routeStepCompletion]);

  const cargoGroups = useDeliveryStore((s) => s.cargoGroups);

  const invalidItems = useMemo(() => getInvalidItems(missions), [getInvalidItems, missions]);

  const outOfOrderDeliveries = useMemo(() => {
    const pickupIndex = new Map<string, number>();
    routeStops.forEach((stop, si) => {
      stop.pickups.forEach((item) => {
        pickupIndex.set(`${item.missionNum}:${item.commodity}:${item.to}`, si);
      });
    });
    const outOfOrder = new Set<string>();
    routeStops.forEach((stop, si) => {
      stop.deliveries.forEach((item, di) => {
        const key = `${item.missionNum}:${item.commodity}:${item.to}`;
        const pickupAt = pickupIndex.get(key);
        if (pickupAt !== undefined && pickupAt > si) {
          outOfOrder.add(itemKey(si, 'del', di));
        }
      });
    });
    return outOfOrder;
  }, [routeStops]);

  const stopDistances = useMemo(() => {
    return routeStops.map((stop, i) => {
      if (i === 0) return -1;
      return travelCost(routeStops[i - 1].location, stop.location);
    });
  }, [routeStops]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = routeStops.findIndex(
        (_, i) => `stop-${i}` === active.id,
      );
      const newIndex = routeStops.findIndex(
        (_, i) => `stop-${i}` === over.id,
      );
      if (oldIndex !== -1 && newIndex !== -1) {
        reorderStops(arrayMove(routeStops, oldIndex, newIndex));
      }
    }
  };

  return (
    <div className="space-y-3 p-3">
      <div className="flex items-center justify-between gap-2">
        <Select
          value={routeViewMode}
          onChange={(e) => setRouteViewMode(e.target.value as RouteViewMode)}
          className="text-xs"
        >
          <option value="all">All Stops</option>
          <option value="current">Current Only</option>
          <option value="current-next">Current + Next</option>
          <option value="remaining">Remaining</option>
        </Select>
        <Button variant="secondary" size="sm" onClick={resetSteps}>
          Reset
        </Button>
      </div>

      {visibleStops.length === 0 ? (
        <p className="text-sm text-[var(--text-secondary)] text-center py-4">
          {routeStops.length === 0
            ? 'Add missions with locations to generate a route.'
            : 'All stops completed!'}
        </p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={visibleStops.map((_, i) => `stop-${visibleStops[i].index}`)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {visibleStops.map((item) => (
                <SortableRouteStop
                  key={`stop-${item.index}`}
                  stop={item.stop}
                  stopIndex={item.index}
                  completion={routeStepCompletion}
                  invalidItems={invalidItems}
                  outOfOrderDeliveries={outOfOrderDeliveries}
                  stopDistances={stopDistances}
                  cargoGroups={cargoGroups}
                  onToggleStep={toggleStep}
                  onToggleItem={toggleRouteItem}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}
