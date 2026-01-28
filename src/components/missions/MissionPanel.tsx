import { useEffect } from 'react';
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
} from '@dnd-kit/sortable';
import { useMissionStore } from '@/stores/missionStore';
import { useDeliveryStore } from '@/stores/deliveryStore';
import { MissionCard } from './MissionCard';
import { Button } from '@/components/ui/Button';

export function MissionPanel() {
  const missions = useMissionStore((s) => s.missions);
  const addMission = useMissionStore((s) => s.addMission);
  const reorderMissions = useMissionStore((s) => s.reorderMissions);
  const generateRoute = useDeliveryStore((s) => s.generateRoute);

  // Regenerate route when missions change
  useEffect(() => {
    generateRoute(missions);
  }, [missions, generateRoute]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = missions.findIndex((m) => m.id === active.id);
      const newIndex = missions.findIndex((m) => m.id === over.id);
      const reordered = arrayMove(missions, oldIndex, newIndex);
      reorderMissions(reordered.map((m) => m.id));
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
          Missions
        </h2>
        <Button variant="success" size="sm" onClick={addMission}>
          + Add Mission
        </Button>
      </div>

      <div className="space-y-3 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
        {missions.length === 0 ? (
          <div className="text-center py-8 text-[var(--text-secondary)]">
            <p>No missions yet.</p>
            <p className="text-xs mt-1">Click "+ Add Mission" to get started.</p>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={missions.map((m) => m.id)}
              strategy={verticalListSortingStrategy}
            >
              {missions.map((mission, index) => (
                <MissionCard key={mission.id} mission={mission} index={index} />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}
