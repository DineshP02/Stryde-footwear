import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="STRYDE Footwear — go to homepage"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="0.5" y="0.5" width="39" height="39" rx="10" className="fill-navy dark:fill-white" />
        {/* Stitched shoelace monogram forming an "S" */}
        <path
          d="M27 12C24 9.5 17 9.5 14 12.5C11.5 15 13 17.5 17 18C22 18.7 24.5 19.5 25 22C25.5 24.5 22.5 27 18 27C14 27 11.5 26 10 24"
          stroke="var(--color-amber)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M27 12C24 9.5 17 9.5 14 12.5C11.5 15 13 17.5 17 18C22 18.7 24.5 19.5 25 22C25.5 24.5 22.5 27 18 27C14 27 11.5 26 10 24"
          stroke="currentColor"
          className="text-white dark:text-navy"
          strokeWidth="0.6"
          strokeDasharray="1.5 3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight text-navy dark:text-white">
          STRYDE
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber dark:text-amber-dark">
          Footwear Co.
        </span>
      </span>
    </Link>
  )
}
