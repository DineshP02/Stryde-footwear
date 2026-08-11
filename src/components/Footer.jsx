import Logo from './Logo.jsx'

const COLUMNS = [
  {
    title: 'Shop',
    links: ['Casual', 'Formal', 'Sports', 'New arrivals'],
  },
  {
    title: 'Company',
    links: ['About STRYDE', 'Bulk & custom orders', 'Store locator', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Size guide', 'Shipping & returns', 'Track an order', 'Contact us'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-border-dark dark:bg-navy-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Columns Grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Considered footwear for everyday wear and bulk orders, shipped from
              our warehouse floor to your door.
            </p>
          </div>

          {/* Footer Links Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / Email Input Section */}
        <div className="border-t border-gray-200 py-12 dark:border-border-dark">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Stay in the loop
            </p>
            <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
              Get the latest from STRYDE
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Get new drops, exclusive offers & updates delivered to your inbox.
            </p>

            {/* Email Input with Button */}
            <div className="mt-6 flex max-w-md mx-auto overflow-hidden rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-300 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200/50 dark:border-border-dark dark:bg-white/5 dark:focus-within:border-white/30">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 bg-transparent px-6 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
              />
              <button
                type="button"
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label="Subscribe to newsletter"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 10a.75.75 0 0 1 .75-.75h9.638l-3.181-3.18a.75.75 0 1 1 1.06-1.061l4.462 4.462a.75.75 0 0 1 0 1.06l-4.462 4.462a.75.75 0 0 1-1.06-1.06l3.18-3.183H4.25A.75.75 0 0 1 3.5 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 dark:border-border-dark">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} STRYDE Footwear Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}