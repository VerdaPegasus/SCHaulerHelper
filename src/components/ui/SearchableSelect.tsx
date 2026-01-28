import { useState, useRef, useEffect, useId } from 'react';

interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}: SearchableSelectProps) {
  const [inputValue, setInputValue] = useState(value);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const hasValue = inputValue.length > 0;

  return (
    <div className={`relative ${className}`}>
      <input
        ref={inputRef}
        type="text"
        list={listId}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onFocus={() => {
          // Select all text on focus so the user can immediately type to
          // filter the datalist, or press Delete/Backspace to clear it.
          inputRef.current?.select();
        }}
        onBlur={() => {
          if (inputValue !== value) {
            onChange(inputValue);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChange(inputValue);
            inputRef.current?.blur();
          }
          if (e.key === 'Escape') {
            setInputValue('');
          }
        }}
        className="w-full bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md pl-2 pr-7 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder:text-[var(--text-secondary)]/50"
        autoComplete="off"
      />
      {hasValue && (
        <button
          type="button"
          tabIndex={-1}
          onClick={() => {
            setInputValue('');
            onChange('');
            // Re-focus the input so the datalist dropdown appears
            inputRef.current?.focus();
          }}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs leading-none px-1 py-0.5 cursor-pointer"
          title="Clear and select new location"
        >
          &#x2715;
        </button>
      )}
      <datalist id={listId}>
        {options.map((opt) => (
          <option key={opt} value={opt} />
        ))}
      </datalist>
    </div>
  );
}
