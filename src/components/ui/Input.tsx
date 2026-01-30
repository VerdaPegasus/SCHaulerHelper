import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-xs text-[var(--text-secondary)] font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder:text-[var(--text-secondary)]/50 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
