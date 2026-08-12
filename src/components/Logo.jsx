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
        {/* Badge background */}
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="10"
          className="fill-navy transition-colors duration-300 group-hover:fill-navy/90 dark:fill-white dark:group-hover:fill-white/90"
        />

        {/* "Stride" mark — three forward-leaning bars of increasing height,
            suggesting motion / a footstep cadence */}
        <rect
          x="10"
          y="21"
          width="5"
          height="9"
          rx="1.5"
          transform="rotate(-18 10 21)"
          className="fill-amber dark:fill-amber-dark"
        />
        <rect
          x="16.5"
          y="15"
          width="5"
          height="15"
          rx="1.5"
          transform="rotate(-18 16.5 15)"
          className="fill-amber dark:fill-amber-dark"
        />
        <rect
          x="23"
          y="9"
          width="5"
          height="21"
          rx="1.5"
          transform="rotate(-18 23 9)"
          className="fill-white dark:fill-navy"
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