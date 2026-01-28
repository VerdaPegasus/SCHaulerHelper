import { useUIStore } from '@/stores/uiStore';
import { useMissionStore } from '@/stores/missionStore';
import { Modal, ModalBody, ModalFooter } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { exportJSON, exportCSV } from '@/utils/export';

export function ExportModal() {
  const isOpen = useUIStore((s) => s.exportModalOpen);
  const closeModal = useUIStore((s) => s.closeExportModal);

  const missions = useMissionStore((s) => s.missions);
  const ship = useMissionStore((s) => s.selectedShip);
  const system = useMissionStore((s) => s.selectedSystem);
  const category = useMissionStore((s) => s.selectedCategory);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Export Data" size="sm">
      <ModalBody>
        <div className="space-y-3">
          <p className="text-sm text-[var(--text-secondary)]">
            Export your current session data.
          </p>
          <div className="flex flex-col gap-2">
            <Button
              variant="primary"
              onClick={() => {
                exportJSON(missions, ship, system, category);
                closeModal();
              }}
              disabled={missions.length === 0}
            >
              Download JSON
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                exportCSV(missions, ship);
                closeModal();
              }}
              disabled={missions.length === 0}
            >
              Download CSV
            </Button>
          </div>
          {missions.length === 0 && (
            <p className="text-xs text-[var(--text-secondary)]">
              Add missions to enable export.
            </p>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
