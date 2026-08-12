import {
  WrenchScrewdriverIcon,
  UserGroupIcon,
  SwatchIcon,
  TruckIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: UserGroupIcon,
    tag: 'Teams',
    title: 'Corporate & Bulk Orders',
    desc: 'Outfit your entire team with consistent sizing, custom colourways, and dedicated account support for orders of 20+ pairs.',
  },
  {
    icon: SwatchIcon,
    tag: 'Finish',
    title: 'Custom Colourways',
    desc: 'Work with our design team to select finishes, materials, and colour combinations tailored to your brand or event.',
  },
  {
    icon: WrenchScrewdriverIcon,
    tag: 'Aftercare',
    title: 'Repair & Care',
    desc: 'Resoling, leather conditioning, and stitch repair to keep your favourite pair going for years, not seasons.',
  },
  {
    icon: TruckIcon,
    tag: 'Logistics',
    title: 'Priority Fulfilment',
    desc: 'Expedited production and shipping for time-sensitive corporate, event, or retail launch orders.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Tell us what you need',
    desc: 'Share your quantities, sizing spread, and any custom requirements through the enquiry form.',
  },
  {
    step: '02',
    title: 'Get a tailored quote',
    desc: 'Our team responds within one business day with pricing, timelines, and material options.',
  },
  {
    step: '03',
    title: 'Approve & produce',
    desc: 'Once confirmed, your order moves into production with regular status updates.',
  },
  {
    step: '04',
    title: 'Track to delivery',
    desc: 'Every shipment is tracked door to door, with support available throughout.',
  },
]

const INCLUDED = [
  'Dedicated account contact',
  'Flexible sizing & re-order support',
  'Custom branding on request',
  'Consolidated invoicing for teams',
]

export default function Services() {
  return (
    <>
      {/* HERO */}
<section className="relative overflow-hidden bg-navy py-24 md:py-32">
  {/* background photo */}
  <img
    src="https://images.unsplash.com/photo-1614253429340-98120bd6d753?w=2000&q=80"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />
  {/* navy gradient overlay for legibility */}
  <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
  <div className="absolute inset-0 bg-navy-dark/20" />

  <div className="section-container relative">
    <span className="eyebrow !text-amber-dark">What we offe</span>

    <h1 className="heading-xl mt-4 max-w-2xl !text-white">
      Services built around how you actually order footwear.
    </h1>

    <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
      Beyond the collection, our team supports fittings, custom finishes,
      repairs, and bulk fulfilment — so you get the right shoe, at the
      right scale, every time.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a href="#enquiry" className="btn-primary">
        Start an enquiry
      </a>

      <Link
        to="/contact"
        className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-navy-dark"
      >
        Talk to our team
      </Link>
    </div>
  </div>
</section>

      {/* SERVICE MANIFEST — stitched ticket list, no cards */}
      <section className="section-container py-20 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-dashed border-gray-300 pb-6 dark:border-border-dark">
          <div className="max-w-xl">
            <span className="eyebrow">Our services</span>
            <h2 className="heading-lg mt-2">Support at every stage of ownership.</h2>
          </div>
          <span className="hidden shrink-0 font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 sm:block">
            04 offerings
          </span>
        </div>

        <div>
          {SERVICES.map(({ icon: Icon, tag, title, desc }, i) => (
            <article
              key={title}
              className="group relative grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-4 border-b border-dashed border-gray-300 py-8 transition-colors first:pt-0 last:border-b-0 dark:border-border-dark sm:grid-cols-[3rem_auto_1fr] sm:items-center sm:gap-x-8"
            >
              {/* index tag */}
              <span className="hidden font-mono text-xs text-gray-400 dark:text-gray-500 sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* icon medallion */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber/40 text-amber transition-colors group-hover:border-amber group-hover:bg-amber group-hover:text-navy-dark dark:text-amber-dark dark:group-hover:text-navy-dark">
                <Icon className="h-5 w-5" />
              </span>

              {/* content */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-amber dark:text-amber-dark">
                    {tag}
                  </span>
                  <h3 className="heading-sm mt-1 !text-lg">{title}</h3>
                  <p className="body-text mt-2 text-sm">{desc}</p>
                </div>

                <ArrowUpRightIcon className="hidden h-5 w-5 shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber dark:text-gray-600 dark:group-hover:text-amber-dark sm:block" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-navy py-20 text-white dark:bg-black/40 md:py-24">
        <div className="section-container">
          <span className="eyebrow !text-amber-dark">How it works</span>
          <h2 className="heading-lg mt-2 max-w-xl !text-white">
            From enquiry to delivery, in four steps.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <div key={item.step} className="border-s-2 border-amber ps-5">
                <span className="font-heading text-3xl font-bold">{item.step}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED + CTA */}
      <section id="enquiry" className="section-container py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="eyebrow">Included with every service order</span>
            <h2 className="heading-lg mt-2">Straightforward, every time.</h2>

            <div className="mt-6 space-y-3">
              {INCLUDED.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-navy-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* laced ticket panel instead of a plain rounded card */}
          <div className="relative border border-navy/15 bg-cream px-8 py-10 dark:border-white/10 dark:bg-white/[0.03]">
            {/* eyelet row, echoes a shoe's lace line */}
            <div className="absolute inset-x-8 top-0 flex -translate-y-1/2 justify-between">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="h-3 w-3 rounded-full border-2 border-amber bg-cream dark:bg-navy-dark"
                />
              ))}
            </div>

            <span className="font-mono text-[11px] uppercase tracking-widest text-amber dark:text-amber-dark">
              Next step
            </span>

            <h3 className="mt-2 font-heading text-xl font-semibold text-navy dark:text-white">
              Ready to get started?
            </h3>
            <p className="body-text mt-3 text-sm">
              Reach out with your requirements and our team will follow up with
              next steps and a tailored quote.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-amber dark:text-white dark:hover:text-amber-dark"
            >
              Contact our services team
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}