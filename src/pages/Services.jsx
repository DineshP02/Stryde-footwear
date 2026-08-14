import { useState } from 'react'

import {
  WrenchScrewdriverIcon,
  UserGroupIcon,
  SwatchIcon,
  TruckIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

/* =========================================================
   SERVICES
========================================================= */

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

/* =========================================================
   PROCESS
========================================================= */

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

/* =========================================================
   INCLUDED
========================================================= */

const INCLUDED = [
  'Dedicated account contact',
  'Flexible sizing & re-order support',
  'Custom branding on request',
  'Consolidated invoicing for teams',
  'Production timeline visibility',
  'Tracked delivery support',
]

/* =========================================================
   AUDIENCES
========================================================= */

const AUDIENCES = [
  {
    icon: BuildingOffice2Icon,
    title: 'Businesses & Teams',
    desc: 'Create a consistent footwear solution for employees, hospitality teams, retail staff, or corporate events.',
  },
  {
    icon: ShoppingBagIcon,
    title: 'Retail & Resellers',
    desc: 'Build a footwear assortment around your customers with flexible quantities, selected colourways, and reliable fulfilment.',
  },
  {
    icon: SparklesIcon,
    title: 'Events & Launches',
    desc: 'Need footwear for a campaign, activation, collaboration, or launch? We can coordinate the order from start to finish.',
  },
]

/* =========================================================
   FAQS
========================================================= */

const FAQS = [
  {
    question: 'What is the minimum quantity for bulk orders?',
    answer:
      'Our corporate and bulk ordering service is designed for orders of 20+ pairs. If you have a smaller requirement, contact our team and we can discuss the best option.',
  },
  {
    question: 'Can I request custom colours or materials?',
    answer:
      'Yes. Custom colourways and selected material finishes can be discussed with our design team depending on the product and order quantity.',
  },
  {
    question: 'How long does a service order take?',
    answer:
      'Timelines depend on quantity, customisation, production requirements, and delivery location. After your enquiry, we provide a tailored estimate before production begins.',
  },
  {
    question: 'Do you support repeat orders?',
    answer:
      'Yes. We keep your requirements on file so repeat orders can be handled more efficiently, including sizing and colourway preferences.',
  },
]

/* =========================================================
   SERVICES COMPONENT
========================================================= */

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null)

  /* =========================================================
     FAQ CLICK HANDLER
  ========================================================= */

  const handleFaqClick = (index) => {
    setOpenFaq((current) => {
      if (current === index) {
        return null
      }

      return index
    })
  }

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy py-24 text-white md:py-32">
        <img
          src="https://images.unsplash.com/photo-1614253429340-98120bd6d753?w=2000&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />

        <div className="absolute inset-0 bg-navy-dark/20" />

        <div className="section-container relative z-10 flex w-full justify-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="eyebrow !text-amber-dark">
              What we offer
            </span>

            <h1 className="heading-xl mt-4 max-w-4xl !text-white">
              Services built around how you actually order footwear.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Beyond the collection, our team supports fittings, custom
              finishes, repairs, and bulk fulfilment — so you get the right
              shoe, at the right scale, every time.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#enquiry"
                className="btn-primary !bg-amber !text-navy-dark hover:!bg-amber-dark"
              >
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
        </div>
      </section>

      {/* =====================================================
          OUR SERVICES
      ====================================================== */}

      <section className="section-container pb-20 pt-20 md:pb-24 md:pt-24">
        <div className="mb-12 flex flex-col items-center border-b border-dashed border-gray-300 pb-6 text-center dark:border-border-dark">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Our services
            </span>

            <h2 className="heading-lg mt-2">
              Support at every stage of ownership.
            </h2>
          </div>

          <span className="mt-4 font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
            04 offerings
          </span>
        </div>

        <div>
          {SERVICES.map(
            ({ icon: Icon, tag, title, desc }, i) => (
              <article
                key={title}
                className="
                  group
                  relative
                  grid
                  grid-cols-[auto_1fr]
                  items-start
                  gap-x-6
                  gap-y-4
                  border-b
                  border-dashed
                  border-gray-300
                  py-8
                  transition-colors
                  first:pt-0
                  last:border-b-0
                  dark:border-border-dark
                  sm:grid-cols-[3rem_auto_1fr]
                  sm:items-center
                  sm:gap-x-8
                "
              >
                <span className="hidden font-mono text-xs text-gray-400 dark:text-gray-500 sm:block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-amber/40
                    text-amber
                    transition-colors
                    group-hover:border-amber
                    group-hover:bg-amber
                    group-hover:text-navy-dark
                    dark:text-amber-dark
                    dark:group-hover:text-navy-dark
                  "
                >
                  <Icon className="h-5 w-5" />
                </span>

                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    sm:min-h-[112px]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="max-w-md">
                    <span
                      className="
                        font-mono
                        text-[11px]
                        uppercase
                        tracking-widest
                        text-amber
                        dark:text-amber-dark
                      "
                    >
                      {tag}
                    </span>

                    <h3 className="heading-sm mt-1 !text-lg">
                      {title}
                    </h3>

                    <p className="body-text mt-2 text-sm">
                      {desc}
                    </p>
                  </div>

                  <ArrowUpRightIcon
                    className="
                      hidden
                      h-5
                      w-5
                      shrink-0
                      text-gray-300
                      transition-all
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-amber
                      dark:text-gray-600
                      dark:group-hover:text-amber-dark
                      sm:block
                    "
                  />
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          WHY STRYDE
      ====================================================== */}

      <section
        className="
          border-y
          border-gray-200
          bg-cream
          py-20
          dark:border-border-dark
          dark:bg-white/[0.03]
          md:py-24
        "
      >
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              Why STRYDE
            </span>

            <h2 className="heading-lg mt-2">
              Simple service. Thoughtful footwear.
            </h2>

            <p className="body-text mx-auto mt-5 max-w-2xl">
              We believe ordering footwear should not feel like managing a
              complicated supply chain. Our service model keeps communication
              clear, choices practical, and every order focused on what you
              actually need.
            </p>
          </div>

          {/* =================================================
              EVEN 4-COLUMN CARDS
          ================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              border
              border-gray-200
              bg-gray-200
              sm:grid-cols-2
              lg:grid-cols-4
              dark:border-border-dark
              dark:bg-border-dark
            "
          >
            {[
              {
                number: '01',
                title: (
                  <>
                    Clear
                    <br />
                    communication
                  </>
                ),
                text: (
                  <>
                    One point of contact
                    <br />
                    from enquiry through delivery.
                  </>
                ),
              },
              {
                number: '02',
                title: (
                  <>
                    Flexible
                    <br />
                    solutions
                  </>
                ),
                text: (
                  <>
                    Options built around
                    <br />
                    your quantities and requirements.
                  </>
                ),
              },
              {
                number: '03',
                title: (
                  <>
                    Built for repeat
                    <br />
                    orders
                  </>
                ),
                text: (
                  <>
                    Your specifications can
                    <br />
                    be carried forward for future orders.
                  </>
                ),
              },
              {
                number: '04',
                title: (
                  <>
                    Long-term
                    <br />
                    care
                  </>
                ),
                text: (
                  <>
                    Support does not stop
                    <br />
                    once your shoes arrive.
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  bg-white
                  p-7
                  dark:bg-navy-dark
                "
              >
                <span
                  className="
                    font-mono
                    text-xs
                    text-amber
                    dark:text-amber-dark
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-5
                    min-h-[52px]
                    font-heading
                    text-lg
                    font-semibold
                    leading-6
                    text-navy
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    min-h-[48px]
                    text-sm
                    leading-6
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE HELP
      ====================================================== */}

      <section className="section-container py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            Built for different needs
          </span>

          <h2 className="heading-lg mt-2">
            One service team. Different ways to work together.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCES.map(
            ({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="
                  group
                  flex
                  min-h-[390px]
                  flex-col
                  border
                  border-gray-200
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber
                  hover:shadow-lg
                  dark:border-border-dark
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-navy
                    text-white
                    transition-colors
                    group-hover:bg-amber
                    group-hover:text-navy-dark
                    dark:bg-white/10
                  "
                >
                  <Icon className="h-5 w-5" />
                </span>

                {/* =================================================
                    ALL TITLES = EXACTLY 2 LINES
                ================================================== */}

                <h3
                  className="
                    mt-6
                    min-h-[56px]
                    font-heading
                    text-xl
                    font-semibold
                    leading-7
                    text-navy
                    dark:text-white
                  "
                >
                  {title}
                </h3>

                {/* =================================================
                    ALL DESCRIPTIONS = SAME HEIGHT
                ================================================== */}

                <p
                  className="
                    mt-3
                    min-h-[140px]
                    text-sm
                    leading-7
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {desc}
                </p>

                <Link
                  to="/contact"
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-6
                    text-sm
                    font-semibold
                    text-navy
                    transition-colors
                    hover:text-amber
                    dark:text-white
                    dark:hover:text-amber-dark
                  "
                >
                  Talk to us

                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-navy py-20 text-white dark:bg-black/40 md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow !text-amber-dark">
              How it works
            </span>

            <h2 className="heading-lg mt-2 !text-white">
              From enquiry to delivery, in four steps.
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-y-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {PROCESS.map((item) => (
              <div
                key={item.step}
                className="
                  min-h-[190px]
                  border-s-2
                  border-amber
                  ps-5
                  text-center
                "
              >
                <span className="font-heading text-3xl font-bold">
                  {item.step}
                </span>

                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-white/60
                  "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE DETAILS
      ====================================================== */}

      <section className="section-container py-20 md:py-24">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >
          <div>
            <span className="eyebrow">
              Designed around you
            </span>

            <h2 className="heading-lg mt-2">
              From one pair to an entire team.
            </h2>

            <p className="body-text mt-5">
              Every order has different requirements. That is why our team
              works with you to understand the purpose, quantity, timeline,
              sizing, and finish before recommending the right route.
            </p>

            <p className="body-text mt-4">
              Need a straightforward bulk order? We can keep it simple. Need
              something more considered? We can help with colourways,
              materials, fulfilment, and ongoing support.
            </p>

            <Link
              to="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-navy
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-amber
                hover:text-navy-dark
                dark:bg-white
                dark:text-navy-dark
                dark:hover:bg-amber
              "
            >
              Discuss your requirements

              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&q=80"
              alt="STRYDE footwear"
              className="h-[420px] w-full object-cover"
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-navy/70
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                p-7
                text-white
              "
            >
              <span
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-widest
                  text-amber
                "
              >
                STRYDE SERVICES
              </span>

              <p
                className="
                  mt-2
                  max-w-sm
                  font-heading
                  text-xl
                  font-semibold
                "
              >
                Practical support for footwear that works harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT'S INCLUDED
      ====================================================== */}

      <section
        id="enquiry"
        className="
          border-y
          border-gray-200
          bg-cream
          py-20
          dark:border-border-dark
          dark:bg-white/[0.03]
          md:py-24
        "
      >
        <div className="section-container">
          <div
            className="
              grid
              grid-cols-1
              gap-12
              md:grid-cols-[1fr_1fr]
              md:items-center
            "
          >
            <div>
              <span className="eyebrow">
                Included with every service order
              </span>

              <h2 className="heading-lg mt-2">
                Straightforward, every time.
              </h2>

              <p className="body-text mt-5 max-w-lg">
                We keep the process clear so you know what is happening at
                every stage of your order.
              </p>

              <div className="mt-7 space-y-3">
                {INCLUDED.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber
                        text-navy-dark
                      "
                    >
                      <CheckIcon className="h-4 w-4" />
                    </span>

                    <span
                      className="
                        text-sm
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                relative
                border
                border-navy/15
                bg-white
                px-8
                py-10
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <div
                className="
                  absolute
                  inset-x-8
                  top-0
                  flex
                  -translate-y-1/2
                  justify-between
                "
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="
                      h-3
                      w-3
                      rounded-full
                      border-2
                      border-amber
                      bg-cream
                      dark:bg-navy-dark
                    "
                  />
                ))}
              </div>

              <span
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-amber
                  dark:text-amber-dark
                "
              >
                Next step
              </span>

              <h3
                className="
                  mt-2
                  font-heading
                  text-xl
                  font-semibold
                  text-navy
                  dark:text-white
                "
              >
                Ready to get started?
              </h3>

              <p className="body-text mt-3 text-sm">
                Reach out with your requirements and our team will follow up
                with next steps and a tailored quote.
              </p>

              <Link
                to="/contact"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-navy
                  transition-colors
                  hover:text-amber
                  dark:text-white
                  dark:hover:text-amber-dark
                "
              >
                Contact our services team

                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUESTIONS & ENQUIRIES
      ====================================================== */}

      <section className="section-container py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span
              className="
                eyebrow
                inline-flex
                items-center
                justify-center
                gap-2
              "
            >
              <QuestionMarkCircleIcon className="h-4 w-4" />

              Questions & Enquiries
            </span>

            <h2 className="heading-lg mt-3">
              Before you enquire.
            </h2>

            <p
              className="
                body-text
                mx-auto
                mt-5
                max-w-2xl
              "
            >
              Still unsure which service is right for you? Browse the
              questions below or get in touch with our team.
            </p>
          </div>

          <div
            className="
              mt-12
              overflow-hidden
              border-y
              border-gray-200
              dark:border-border-dark
            "
          >
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className="
                    border-b
                    border-gray-200
                    last:border-b-0
                    dark:border-border-dark
                  "
                >
                  <button
                    type="button"
                    onClick={() => handleFaqClick(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      gap-6
                      px-2
                      py-6
                      text-left
                      font-heading
                      text-base
                      font-semibold
                      text-navy
                      transition-colors
                      hover:text-amber
                      dark:text-white
                      dark:hover:text-amber-dark
                    "
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className="
                          font-mono
                          text-xs
                          font-normal
                          text-amber
                          dark:text-amber-dark
                        "
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span>
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`
                        relative
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? `
                              border-amber
                              bg-amber
                              text-navy-dark
                            `
                            : `
                              border-gray-300
                              text-gray-500
                            `
                        }

                        dark:border-border-dark
                        dark:text-gray-400

                        ${
                          isOpen
                            ? `
                              dark:border-amber-dark
                              dark:bg-amber-dark
                              dark:text-navy-dark
                            `
                            : ''
                        }
                      `}
                    >
                      <span
                        className="
                          absolute
                          h-px
                          w-3
                          bg-current
                        "
                      />

                      <span
                        className={`
                          absolute
                          h-3
                          w-px
                          bg-current
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? 'rotate-90'
                              : 'rotate-0'
                          }
                        `}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out

                      ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          overflow-hidden
                          px-2
                          pb-6
                          ps-[3.25rem]
                          sm:px-4
                          sm:ps-[4.5rem]
                        "
                      >
                        <p
                          className="
                            max-w-2xl
                            text-sm
                            leading-7
                            text-gray-500
                            dark:text-gray-400
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-navy
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-amber
                hover:text-navy-dark
                dark:bg-white
                dark:text-navy-dark
                dark:hover:bg-amber
              "
            >
              Ask our team

              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-navy py-20 text-white md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow !text-amber-dark">
              Let&apos;s work together
            </span>

            <h2 className="heading-lg mt-3 !text-white">
              Have a footwear requirement?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-white/60
              "
            >
              Tell us what you are planning, how many pairs you need, and
              when you need them. We will take it from there.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              <Link
                to="/contact"
                className="
                  btn-primary
                  !bg-amber
                  !text-navy-dark
                  hover:!bg-amber-dark
                "
              >
                Start an enquiry

                <ArrowRightIcon className="h-4 w-4" />
              </Link>

              <Link
                to="/shop"
                className="
                  btn-secondary
                  !border-white/20
                  !text-white
                  hover:!bg-white
                  hover:!text-navy-dark
                "
              >
                Explore footwear
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}