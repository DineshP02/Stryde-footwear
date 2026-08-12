import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

import ContactForm from '../components/ContactForm.jsx'

const CONTACT_INFO = [
  {
    icon: MapPinIcon,
    title: 'Visit us',
    text: 'STRYDE Footwear Studio',
    detail: 'Your Street Address, Chennai, Tamil Nadu, India',
  },
  {
    icon: PhoneIcon,
    title: 'Call us',
    text: '+91 98765 43210',
    detail: 'Mon–Sat, 9:00 AM–6:00 PM',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email us',
    text: 'hello@stryde.com',
    detail: 'We usually reply within one business day.',
  },
  {
    icon: ClockIcon,
    title: 'Opening hours',
    text: 'Monday – Saturday',
    detail: '9:00 AM – 6:00 PM',
  },
]

const CONTACT_FEATURES = [
  'Product and sizing assistance',
  'Bulk and corporate enquiries',
  'Custom colourway requests',
  'Order and delivery support',
]

export default function Contact() {
  return (
    <>
      {/* =========================================================
          1. HERO
      ========================================================= */}

      <section className="bg-cream py-16 dark:bg-white/[0.02] md:py-24">
        <div className="section-container">
          <div className="rounded-[2.5rem] bg-amber/25 p-3 dark:bg-amber/10 sm:p-4">
            <div className="grid grid-cols-1 items-center gap-10 rounded-[2rem] bg-white p-8 dark:bg-surface-dark sm:p-10 md:grid-cols-[1fr_1fr] md:gap-12 md:p-14">
              {/* HERO CONTENT */}
              <div>
                <span className="eyebrow">
                  Get in touch
                </span>

                <h1 className="heading-xl mt-4 max-w-md">
                  Let&apos;s talk about your next pair.
                </h1>

                <p className="body-text mt-5 max-w-md text-sm leading-6">
                  Have a question about sizing, products, bulk orders, or
                  custom requirements? Our team is here to help you find the
                  right footwear and make every step straightforward.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact-form"
                    className="btn-primary inline-flex items-center"
                  >
                    Send an enquiry
                    <ArrowRightIcon className="ms-2 h-4 w-4" />
                  </a>

                  <a
                    href="#location"
                    className="btn-secondary"
                  >
                    Find us
                  </a>
                </div>

                {/* Pagination dots */}
                <div className="mt-8 flex gap-1.5">
                  <span className="h-1.5 w-4 rounded-full bg-amber" />
                  <span className="h-1.5 w-1.5 rounded-full bg-navy/15 dark:bg-white/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-navy/15 dark:bg-white/15" />
                </div>

                {/* STATS */}
                <div className="mt-10 grid max-w-md grid-cols-2 gap-5 border-t border-gray-200 pt-6 dark:border-border-dark sm:grid-cols-4">
                  <div>
                    <p className="font-heading text-xl font-bold text-navy dark:text-white">
                      1 day
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Typical reply
                    </p>
                  </div>

                  <div>
                    <p className="font-heading text-xl font-bold text-navy dark:text-white">
                      20+
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Bulk pairs
                    </p>
                  </div>

                  <div>
                    <p className="font-heading text-xl font-bold text-navy dark:text-white">
                      3
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Collections
                    </p>
                  </div>

                  <div>
                    <p className="font-heading text-xl font-bold text-navy dark:text-white">
                      6 days
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Open weekly
                    </p>
                  </div>
                </div>
              </div>

              {/* HERO ILLUSTRATION */}
              <div className="relative flex items-center justify-center">
                <svg
                  viewBox="0 0 400 300"
                  className="h-auto w-full max-w-sm"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Contact support illustration"
                  role="img"
                >
                  {/* Soft background circle */}
                  <circle
                    cx="200"
                    cy="150"
                    r="130"
                    className="fill-cream dark:fill-white/5"
                  />

                  {/* Envelope */}
                  <g transform="translate(48 150) rotate(-6)">
                    <rect
                      x="0"
                      y="0"
                      width="120"
                      height="82"
                      rx="10"
                      className="fill-navy dark:fill-white/10"
                    />

                    <path
                      d="M4 8 L60 52 L116 8"
                      fill="none"
                      className="stroke-amber"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  {/* Magnifying glass */}
                  <g transform="translate(150 50)">
                    <circle
                      cx="30"
                      cy="30"
                      r="28"
                      fill="none"
                      className="stroke-amber"
                      strokeWidth="7"
                    />

                    <line
                      x1="50"
                      y1="50"
                      x2="72"
                      y2="72"
                      className="stroke-amber"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="30"
                      cy="30"
                      r="12"
                      className="fill-navy dark:fill-white/20"
                    />
                  </g>

                  {/* Phone mockup */}
                  <g transform="translate(230 65)">
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="180"
                      rx="18"
                      className="fill-white stroke-navy dark:fill-surface-dark dark:stroke-white/20"
                      strokeWidth="4"
                    />

                    <rect
                      x="14"
                      y="26"
                      width="55"
                      height="14"
                      rx="7"
                      className="fill-amber/70"
                    />

                    <rect
                      x="14"
                      y="50"
                      width="72"
                      height="14"
                      rx="7"
                      className="fill-navy/15 dark:fill-white/15"
                    />

                    <rect
                      x="30"
                      y="74"
                      width="56"
                      height="14"
                      rx="7"
                      className="fill-amber"
                    />

                    <circle
                      cx="50"
                      cy="160"
                      r="6"
                      className="fill-navy/20 dark:fill-white/20"
                    />
                  </g>

                  {/* Decorative dots */}
                  <circle
                    cx="90"
                    cy="55"
                    r="5"
                    className="fill-amber"
                  />

                  <circle
                    cx="335"
                    cy="205"
                    r="6"
                    className="fill-navy/20 dark:fill-white/20"
                  />

                  <circle
                    cx="65"
                    cy="235"
                    r="4"
                    className="fill-amber/60"
                  />
                </svg>

                {/* Floating support card */}
                <div className="absolute -bottom-4 end-0 max-w-[13rem] rounded-2xl bg-navy p-5 text-white shadow-xl dark:bg-amber dark:text-navy-dark sm:-bottom-6 sm:end-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber dark:text-navy-dark/60">
                    STRYDE support
                  </p>

                  <p className="mt-2 font-heading text-sm font-semibold leading-snug">
                    From one pair to an entire team, we&apos;re here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CONTACT INFORMATION
      ========================================================= */}

      <section className="section-container py-20 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">
            Reach out
          </span>

          <h2 className="heading-lg mt-2">
            However you prefer to connect.
          </h2>

          <p className="body-text mt-5">
            Whether you want to visit us, send an email, make a quick call,
            or submit an enquiry online, choose whatever works best for you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-lg dark:border-border-dark dark:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber text-navy">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="heading-sm mt-5 !text-lg">
                  {item.title}
                </h3>

                {item.title === 'Email us' ? (
                  <a
                    href="mailto:hello@stryde.com"
                    className="mt-3 block text-sm font-semibold text-navy hover:text-amber dark:text-white dark:hover:text-amber"
                  >
                    {item.text}
                  </a>
                ) : item.title === 'Call us' ? (
                  <a
                    href="tel:+919876543210"
                    className="mt-3 block text-sm font-semibold text-navy hover:text-amber dark:text-white dark:hover:text-amber"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-semibold text-navy dark:text-white">
                    {item.text}
                  </p>
                )}

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {item.detail}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      {/* =========================================================
          3. CONTACT FORM + SUPPORT
      ========================================================= */}

      <section
        id="contact-form"
        className="bg-navy py-20 text-white dark:bg-black/40 md:py-24"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* LEFT CONTENT */}
            <div>
              <span className="eyebrow !text-amber">
                Send an enquiry
              </span>

              <h2 className="heading-lg mt-2 !text-white">
                Tell us what you need.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
                Looking for a particular size, planning a corporate order,
                or interested in a custom colourway? Send us the details
                and our team will get back to you.
              </p>

              <div className="mt-8 space-y-4">
                {CONTACT_FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber text-navy-dark">
                      <CheckCircleIcon className="h-4 w-4" />
                    </span>

                    <span className="text-sm text-white/75">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* BULK ORDERS */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                  Bulk orders
                </p>

                <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                  Outfitting a team?
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Tell us your estimated quantity, sizes, preferred
                  styles, and delivery requirements. We can help with
                  planning and custom options.
                </p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="rounded-2xl bg-white p-6 text-navy shadow-2xl sm:p-8 md:p-10">
              <div className="mb-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                  Contact form
                </span>

                <h3 className="mt-2 font-heading text-2xl font-semibold">
                  Start a conversation.
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Share a few details and we&apos;ll take it from there.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. MAP / LOCATION
      ========================================================= */}

      <section
        id="location"
        className="border-y border-gray-200 bg-cream py-20 dark:border-border-dark dark:bg-white/[0.02] md:py-24"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            {/* LOCATION CONTENT */}
            <div>
              <span className="eyebrow">
                Find us
              </span>

              <h2 className="heading-lg mt-2">
                Come and see STRYDE in person.
              </h2>

              <p className="body-text mt-5 max-w-lg">
                Prefer to see the collection up close? Visit our studio
                and speak with the team about sizing, materials, styles,
                and bulk requirements.
              </p>

              <div className="mt-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-amber dark:bg-amber dark:text-navy-dark">
                  <MapPinIcon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy dark:text-white">
                    STRYDE Footwear Studio
                  </h3>

                  <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Your Street Address,
                    <br />
                    Chennai, Tamil Nadu,
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* GOOGLE MAPS BUTTON */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai%2C%20Tamil%20Nadu%2C%20India"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy/90 dark:bg-amber dark:text-navy-dark dark:hover:bg-amber/90"
              >
                Open in Google Maps
                <ArrowRightIcon className="ms-2 h-4 w-4" />
              </a>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-border-dark dark:bg-surface-dark">
              <iframe
                title="STRYDE location map"
                src="https://www.google.com/maps?q=Chennai%2C%20Tamil%20Nadu%2C%20India&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FINAL CTA
      ========================================================= */}

      <section className="section-container py-20 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white sm:px-10 md:py-20">
          {/* Decorative blobs */}
          <div className="absolute -end-20 -top-20 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />

          <div className="absolute -bottom-20 -start-20 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="eyebrow !text-amber">
              Still deciding?
            </span>

            <h2 className="heading-lg mt-3 !text-white">
              We&apos;re happy to help you choose.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
              Tell us what you&apos;re looking for and we&apos;ll point you
              towards the right collection, style, and fit.
            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-navy-dark transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Contact STRYDE
              <ArrowRightIcon className="ms-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}