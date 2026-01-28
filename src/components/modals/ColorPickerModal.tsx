import { useState, useEffect } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { useDeliveryStore } from '@/stores/deliveryStore';
import { THEME_COLOR_PALETTES } from '@/data';
import { Modal, ModalBody, ModalFooter } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export function ColorPickerModal() {
  const { colorPickerModal, closeColorPicker, theme } = useUIStore();
  const { cargoGroups, updateCargoGroupColor } = useDeliveryStore();

  const [selectedColor, setSelectedColor] = useState('#4dd4ac');
  const palette = THEME_COLOR_PALETTES[theme] ?? THEME_COLOR_PALETTES.stardust;
  const location = colorPickerModal.targetLocation;

  useEffect(() => {
    if (location && cargoGroups[location]) {
      setSelectedColor(cargoGroups[location].color);
    }
  }, [location, cargoGroups]);

  const handleConfirm = () => {
    if (location) {
      updateCargoGroupColor(location, selectedColor);
    }
    closeColorPicker();
  };

  return (
    <Modal
      isOpen={colorPickerModal.isOpen}
      onClose={closeColorPicker}
      title="Choose Color"
      size="sm"
    >
      <ModalBody>
        <div className="space-y-4">
          {/* Preset palette */}
          <div className="grid grid-cols-8 gap-2">
            {palette.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 cursor-pointer ${
                  selectedColor === color
                    ? 'border-white scale-110'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Custom color input */}
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border-none"
            />
            <input
              type="text"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="flex-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md px-2 py-1.5 text-sm"
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={closeColorPicker}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Apply
        </Button>
      </ModalFooter>
    </Modal>
  );
}
