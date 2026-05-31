import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Ship } from '@/types';

interface ShipSelectProps {
  ships: Ship[];
  value: Ship | null;
  onChange: (ship: Ship | null) => void;
}

export function ShipSelect({ ships, value, onChange }: ShipSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  const filtered = search
    ? ships.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.manufacturer.toLowerCase().includes(search.toLowerCase())
      )
    : ships;

  useEffect(() => {
    if (open && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  }, [open, filtered.length]);

  return (
    <div className="flex flex-col gap-1" ref={ref}>
      <label className="text-xs text-[var(--text-secondary)] font-medium">Ship</label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={value ? value.name : 'Search ships...'}
          value={open ? search : value ? value.name : ''}
          onChange={(e) => {
            setSearch(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            setSearch('');
          }}
          onBlur={() => {
            setTimeout(() => {
              if (!open) {
                setSearch('');
              }
            }, 200);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false);
              setSearch('');
            }
            if (e.key === 'Enter' && filtered.length === 1) {
              onChange(filtered[0]);
              setOpen(false);
              setSearch('');
            }
          }}
          className="w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md pl-3 pr-7 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder:text-[var(--text-secondary)]/50"
          autoComplete="off"
        />
        {value && !open && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[var(--text-secondary)] font-semibold">
            {value.capacity} SCU
          </div>
        )}
      </div>
      {open && createPortal(
        <div style={dropdownStyle} className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md shadow-lg">
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-sm text-[var(--text-secondary)]">No ships match</div>
          ) : (
            filtered.map((ship) => (
              <button
                key={ship.id}
                type="button"
                onMouseDown={() => {
                  onChange(ship);
                  setOpen(false);
                  setSearch('');
                }}
                className={`w-full text-left px-3 py-2 text-sm cursor-pointer border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-tertiary)] transition-colors ${
                  value?.id === ship.id ? 'bg-[var(--bg-tertiary)]' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[var(--text-primary)] text-sm">{ship.name}</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">{ship.manufacturer}</div>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] font-semibold whitespace-nowrap ml-4">
                    {ship.capacity} SCU
                  </div>
                </div>
              </button>
            ))
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
