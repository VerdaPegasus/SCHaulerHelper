import { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { LOCATION_GRAPH } from '@/data/location-graph';
import type { LocationType } from '@/data/location-graph';

const TYPE_LABELS: Record<LocationType, string> = {
  system: 'System',
  planet: 'Planet',
  moon: 'Moon',
  station: 'Station',
  city: 'City',
  outpost: 'Outpost',
  lagrange: 'Lagrange',
  gateway: 'Gateway',
  rest_stop: 'Rest Stop',
  asteroid_belt: 'Asteroid Belt',
};

interface LocationMeta {
  name: string;
  system: string;
  typeLabel: string;
}

let locationCache: LocationMeta[] | null = null;

function getLocationMeta(): LocationMeta[] {
  if (locationCache) return locationCache;
  const seen = new Set<string>();
  locationCache = [];
  for (const node of Object.values(LOCATION_GRAPH)) {
    if (seen.has(node.name)) continue;
    seen.add(node.name);
    locationCache.push({
      name: node.name,
      system: node.system,
      typeLabel: TYPE_LABELS[node.type],
    });
  }
  return locationCache;
}

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function LocationAutocomplete({
  value,
  onChange,
  placeholder = 'Search location...',
}: LocationAutocompleteProps) {
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

  const allLocations = useMemo(getLocationMeta, []);

  const filtered = useMemo(() => {
    if (!search) return [];
    const q = search.toLowerCase();
    return allLocations.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.system.toLowerCase().includes(q) ||
        loc.typeLabel.toLowerCase().includes(q),
    );
  }, [allLocations, search]);

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
    <div className="relative" ref={ref}>
      <input
        ref={inputRef}
        type="text"
        value={open ? search : value || ''}
        placeholder={placeholder}
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
            onChange(filtered[0].name);
            setOpen(false);
            setSearch('');
          }
        }}
        className="w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md pl-2 pr-7 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder:text-[var(--text-secondary)]/50"
        autoComplete="off"
      />
      {(search || value) && (
        <button
          type="button"
          tabIndex={-1}
          onClick={() => {
            onChange('');
            setSearch('');
            inputRef.current?.focus();
          }}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs leading-none px-1 py-0.5 cursor-pointer"
          title="Clear"
        >
          &#x2715;
        </button>
      )}
      {open && filtered.length > 0 && createPortal(
        <div style={dropdownStyle} className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md shadow-lg">
          {filtered.map((loc) => (
            <button
              key={loc.name}
              type="button"
              onMouseDown={() => {
                onChange(loc.name);
                setOpen(false);
                setSearch('');
              }}
              className={`w-full text-left px-3 py-2 text-sm cursor-pointer border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-tertiary)] transition-colors ${
                value === loc.name ? 'bg-[var(--bg-tertiary)]' : ''
              }`}
            >
              <div className="leading-tight font-medium text-[var(--text-primary)]">
                {loc.name}
              </div>
              <div className="text-[10px] leading-tight text-[var(--text-secondary)]">
                {loc.system} &middot; {loc.typeLabel}
              </div>
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
