import Logo from './Logo.jsx'

export default function Footer() {
  const handleLogoClick = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-gray-200 bg-cream dark:border-border-dark dark:bg-navy-dark">
      <div className="section-container grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="Go to top of page"
            className="inline-block cursor-pointer border-0 bg-transparent p-0"
          >
            <Logo />
          </button>

          <p className="body-text mt-4 max-w-xs text-sm">
            Casual, formal, and sports footwear — sized right, shipped fast, and
            available for custom or bulk orders.
          </p>
        </div>

        {/* Shop */}
        <div>
          <p className="heading-sm !text-sm uppercase tracking-wide">
            Shop
          </p>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#categories" className="body-text hover:text-amber">
                Casual
              </a>
            </li>

            <li>
              <a href="#categories" className="body-text hover:text-amber">
                Formal
              </a>
            </li>

            <li>
              <a href="#categories" className="body-text hover:text-amber">
                Sports
              </a>
            </li>

            <li>
              <a href="#shop" className="body-text hover:text-amber">
                All products
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="heading-sm !text-sm uppercase tracking-wide">
            Company
          </p>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#contact" className="body-text hover:text-amber">
                Bulk orders
              </a>
            </li>

            <li>
              <a href="#contact" className="body-text hover:text-amber">
                Custom orders
              </a>
            </li>

            <li>
              <a href="#faq" className="body-text hover:text-amber">
                FAQ
              </a>
            </li>

            <li>
              <a href="#contact" className="body-text hover:text-amber">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="heading-sm !text-sm uppercase tracking-wide">
            Get in touch
          </p>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="body-text">
              hello@stryde-footwear.com
            </li>

            <li className="body-text">
              +1 (555) 012-4489
            </li>

            <li className="body-text">
              Mon–Fri, 9am–6pm
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 dark:border-border-dark">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} STRYDE Footwear. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-amber">
              Privacy
            </a>

            <a href="#" className="hover:text-amber">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}