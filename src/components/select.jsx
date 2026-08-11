import { ChevronDownIcon } from '@heroicons/react/24/outline'

/**
 * A native <select> styled to look consistent in both light and dark mode.
 * Sets `color-scheme` explicitly in dark mode so the browser's native
 * option list renders with a dark background and light text instead of
 * defaulting to a white/unreadable dropdown panel.
 */
export default function Select({ label, options, className = '', ...props }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-medium text-navy dark:text-gray-200">
          {label}
        </span>
      )}
      <div className="relative">
        <select
          {...props}
          className={`w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm font-normal text-navy outline-none transition focus:border-amber focus:ring-2 focus:ring-amber/30 dark:border-border-dark dark:bg-surface-dark dark:text-white dark:[color-scheme:dark] dark:focus:border-amber-dark ${className}`}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="dark:bg-surface-dark dark:text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      </div>
    </label>
  )
}
