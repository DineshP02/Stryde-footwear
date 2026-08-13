import { useState } from 'react'

import {
  TruckIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

import {
  CATEGORIES,
  BRANDS,
  TESTIMONIALS,
  FEATURE_HIGHLIGHTS,
} from '../data/store.js'

import { useDirection } from '../context/DirectionContext.jsx'

// =========================================================
// VALUE PROPS
// =========================================================

const VALUE_PROPS = [
  {
    icon: TruckIcon,
    title: 'Fast delivery',
    desc: 'Dispatched within 2 business days, tracked door to door.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Easy exchanges',
    desc: '30-day window to swap sizes at no extra cost.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality checked',
    desc: 'Every pair inspected before it leaves the warehouse.',
  },
  {
    icon: SparklesIcon,
    title: 'Custom finishes',
    desc: 'Colourway and material options for bulk orders.',
  },
]

// =========================================================
// SHOP FOR
// =========================================================

const SHOP_FOR = [
  {
    label: 'Men',
    img: 'https://cdn.asianlive.in/digital-website/Mens-DEsktop%20(1)_63108146987774068295.png?tr=w-400',
    to: '/home-2#lineup',
  },
  {
    label: 'Women',
    img: 'https://cdn.asianlive.in/digital-website/Women-Desktop%20(1)_48705733039165876847.png?tr=w-400',
    to: '/home-2#lineup',
  },
  {
    label: 'Kids',
    img: 'https://cdn.asianlive.in/digital-website/KidsDesktop%20(1)_66819036114439138921.png?tr=w-400',
    to: '/home-2#lineup',
  },
]

// =========================================================
// INITIALS
// =========================================================

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

// =========================================================
// HOME 1
// =========================================================

export default function Home1() {
  const { isRTL } = useDirection()

  const [quoteIndex, setQuoteIndex] = useState(0)
  const [featureIndex, setFeatureIndex] = useState(0)

  const quote = TESTIMONIALS[quoteIndex]
  const feature = FEATURE_HIGHLIGHTS[featureIndex]

  /*
   * IMPORTANT
   *
   * LTR:
   * normal array order
   *
   * RTL:
   * reverse array order
   *
   * We use a new array with [...array] so the original
   * imported data is never mutated.
   */

  const displayedShopFor = isRTL
    ? [...SHOP_FOR].reverse()
    : SHOP_FOR

  const displayedCategories = isRTL
    ? [...CATEGORIES].reverse()
    : CATEGORIES

  const displayedValueProps = isRTL
    ? [...VALUE_PROPS].reverse()
    : VALUE_PROPS

  const displayedBrands = isRTL
    ? [...BRANDS.filter((brand) => brand !== 'All')].reverse()
    : BRANDS.filter((brand) => brand !== 'All')

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=2000&q=80"
          alt="Premium footwear collection"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />

        <div className="section-container flex w-full justify-center py-24 text-center text-white">
          <div className="flex max-w-3xl flex-col items-center">
            <span className="eyebrow !text-amber-dark">
              New season · Fall collection
            </span>

            <h1 className="heading-xl mt-4 !text-white">
              Footwear for every step of your day.
            </h1>

            <p className="body-text mt-5 max-w-2xl !text-white/75">
              Discover everyday footwear designed around comfort, quality, and
              timeless style. From casual essentials to formal and performance
              styles, find your next favourite pair.
            </p>

            {/* HERO BUTTONS */}

            <div
              className={`mt-8 flex flex-wrap justify-center gap-3 ${
                isRTL ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <a
                href="#categories"
                className="btn-primary !bg-amber !text-navy-dark hover:!bg-amber-dark"
              >
                Explore categories
              </a>

              <Link
                to="/home-2"
                className="btn-secondary !border-white/40 !text-white hover:!border-white hover:!bg-white/10"
              >
                Discover our story
              </Link>
            </div>

            {/* HERO STATS */}

            <div
              className={`mt-14 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-6 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div>
                <p className="font-heading text-2xl font-semibold">
                  12k+
                </p>

                <p className="text-xs text-white/60">
                  Pairs shipped
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl font-semibold">
                  4.8/5
                </p>

                <p className="text-xs text-white/60">
                  Customer rating
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl font-semibold">
                  30 days
                </p>

                <p className="text-xs text-white/60">
                  Free exchanges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHOP FOR
      ========================================================= */}

      <section className="section-container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy dark:text-white sm:text-3xl">
            Shop for
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {displayedShopFor.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group flex flex-col items-center"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-cream dark:bg-white/[0.03]">
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <span className="mt-4 font-heading text-lg font-semibold text-navy dark:text-white">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          SPOTLIGHT
      ========================================================= */}

      <section className="section-container py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow">
            In the spotlight
          </span>

          <h2 className="heading-lg mt-2">
            The Ronnie, in grey.
          </h2>
        </div>

        <div className="mx-auto w-full overflow-hidden rounded-2xl sm:w-[90%] lg:w-[75%]">
          <img
            src="https://www.shoetree.io/cdn/shop/files/Ronnie_Grey_3_850X850_93e046db-dde7-4301-9a3e-bba6261e5094.jpg?v=1738222289&width=3840"
            srcSet="
              https://www.shoetree.io/cdn/shop/files/Ronnie_Grey_3_850X850_93e046db-dde7-4301-9a3e-bba6261e5094.jpg?v=1738222289&width=640 640w,
              https://www.shoetree.io/cdn/shop/files/Ronnie_Grey_3_850X850_93e046db-dde7-4301-9a3e-bba6261e5094.jpg?v=1738222289&width=1024 1024w,
              https://www.shoetree.io/cdn/shop/files/Ronnie_Grey_3_850X850_93e046db-dde7-4301-9a3e-bba6261e5094.jpg?v=1738222289&width=1600 1600w,
              https://www.shoetree.io/cdn/shop/files/Ronnie_Grey_3_850X850_93e046db-dde7-4301-9a3e-bba6261e5094.jpg?v=1738222289&width=2400 2400w
            "
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 75vw"
            alt="Ronnie sneaker in grey"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="section-container py-20">
        <div
          className={`mx-auto flex max-w-3xl flex-col ${
            isRTL
              ? 'items-end text-right'
              : 'items-start text-left'
          }`}
        >
          <span className="eyebrow">
            Welcome to STRYDE
          </span>

          <h2 className="heading-lg mt-2">
            Shoes made for real life.
          </h2>

          <p className="body-text mt-5 max-w-2xl leading-relaxed">
            We believe good footwear should look right, feel right, and keep
            up with the way you live. STRYDE brings together dependable
            everyday styles, refined formal footwear, and performance-ready
            designs under one roof.
          </p>

          <Link
            to="/about"
            className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-amber dark:text-white dark:hover:text-amber ${
              isRTL ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <span>Learn more about us</span>

            <ArrowRightIcon
              className={`h-4 w-4 ${
                isRTL ? 'rotate-180' : ''
              }`}
            />
          </Link>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}

      <section
        id="categories"
        className="bg-cream py-20 dark:bg-white/[0.02]"
      >
        <div className="section-container">
          <div
            className={`mx-auto mb-12 max-w-3xl ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            <span className="eyebrow">
              Shop by category
            </span>

            <h2 className="heading-lg mt-2">
              Find the pair that fits your day.
            </h2>

            <p className="body-text mt-4 max-w-xl">
              From relaxed weekends to important meetings, explore footwear
              designed for different moments and different ways of moving.
            </p>
          </div>

          {/* =====================================================
              CATEGORY CARDS

              LTR:
              Casual | Formal | Performance

              RTL:
              Performance | Formal | Casual

              AND inside each card:

              LTR:
              01
              Casual
              Description
              Explore collection →

              RTL:
                                   01
                               Casual
                       Description
                         ← Explore collection
          ===================================================== */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {displayedCategories.map((category, index) => (
              <Link
                key={category.name}
                to="/home-2#lineup"
                dir={isRTL ? 'rtl' : 'ltr'}
                className={`group relative overflow-hidden rounded-2xl ${
                  isRTL
                    ? 'text-right'
                    : 'text-left'
                }`}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 p-6 text-white ${
                    isRTL
                      ? 'flex flex-col items-end text-right'
                      : 'flex flex-col items-start text-left'
                  }`}
                >
                  <span
                    className={`font-heading text-5xl font-bold text-white/20 ${
                      isRTL
                        ? 'self-end text-right'
                        : 'self-start text-left'
                    }`}
                  >
                    {category.no || `0${index + 1}`}
                  </span>

                  <h3 className="font-heading text-2xl font-semibold">
                    {category.name}
                  </h3>

                  <p
                    className={`mt-2 max-w-sm text-sm text-white/70 ${
                      isRTL
                        ? 'text-right'
                        : 'text-left'
                    }`}
                  >
                    {category.desc}
                  </p>

                  <span
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${
                      isRTL
                        ? 'flex-row-reverse'
                        : 'flex-row'
                    }`}
                  >
                    <span>
                      Explore collection
                    </span>

                    <ArrowRightIcon
                      className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                        isRTL ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE HIGHLIGHT
      ========================================================= */}

      <section className="relative overflow-hidden bg-cream py-20 dark:bg-white/[0.02]">
        <div className="section-container">
          <div
            className={`grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr] ${
              isRTL ? 'md:[direction:rtl]' : ''
            }`}
          >
            {/* TITLE */}

            <div
              className={
                isRTL
                  ? 'text-right'
                  : 'text-left'
              }
            >
              <h2 className="font-heading text-4xl font-bold uppercase leading-[1.05] text-navy dark:text-white sm:text-5xl">
                {feature?.title || 'Featured footwear'}
              </h2>
            </div>

            {/* IMAGE */}

            <div className="relative flex justify-center py-6 md:py-0">
              {feature?.img && (
                <img
                  src={feature.img}
                  alt={feature.title || 'Featured footwear'}
                  className={`h-56 w-56 object-contain drop-shadow-2xl transition-transform duration-500 sm:h-72 sm:w-72 ${
                    isRTL ? '-rotate-3' : 'rotate-3'
                  }`}
                />
              )}
            </div>

            {/* DESCRIPTION */}

            <div
              className={`${
                isRTL
                  ? 'text-right md:pr-4'
                  : 'text-left md:pl-4'
              }`}
            >
              <p className="body-text max-w-xs text-sm">
                {feature?.desc ||
                  'Discover our latest footwear collection.'}
              </p>
            </div>
          </div>

          {/* FEATURE CONTROLS */}

          {FEATURE_HIGHLIGHTS.length > 0 && (
            <div
              className={`mt-12 flex items-center justify-center gap-4 ${
                isRTL ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <button
                type="button"
                aria-label="Previous highlight"
                onClick={() =>
                  setFeatureIndex(
                    (index) =>
                      (index - 1 + FEATURE_HIGHLIGHTS.length) %
                      FEATURE_HIGHLIGHTS.length,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-navy transition hover:bg-white dark:border-border-dark dark:text-white dark:hover:bg-white/5"
              >
                <ChevronLeftIcon
                  className="h-4 w-4"
                />
              </button>

              <div
                className={`flex gap-1.5 ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}
              >
                {FEATURE_HIGHLIGHTS.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      index === featureIndex
                        ? 'bg-amber'
                        : 'bg-gray-300 dark:bg-border-dark'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next highlight"
                onClick={() =>
                  setFeatureIndex(
                    (index) =>
                      (index + 1) %
                      FEATURE_HIGHLIGHTS.length,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-navy transition hover:bg-white dark:border-border-dark dark:text-white dark:hover:bg-white/5"
              >
                <ChevronRightIcon
                  className="h-4 w-4"
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          WHY STRYDE
      ========================================================= */}

      <section className="section-container py-20">
        <div
          className={`mx-auto mb-12 max-w-3xl ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          <span className="eyebrow">
            Why STRYDE
          </span>

          <h2 className="heading-lg mt-2">
            Built around a better experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-border-dark sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {displayedValueProps.map(
            ({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`flex flex-col gap-3 py-6 sm:px-6 sm:py-0 ${
                  isRTL
                    ? 'items-end text-right'
                    : 'items-start text-left'
                } ${
                  index === 0
                    ? isRTL
                      ? 'sm:pe-0'
                      : 'sm:ps-0'
                    : ''
                }`}
              >
                <Icon className="h-7 w-7 text-amber dark:text-amber-dark" />

                <h3 className="heading-sm !text-base">
                  {title}
                </h3>

                <p className="body-text text-sm">
                  {desc}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* =========================================================
          BRAND STRIP
      ========================================================= */}

      <section className="border-y border-gray-200 py-12 dark:border-border-dark">
        <div className="section-container">
          <div
            className={`text-center`}
          >
            <span className="eyebrow">
              Our selection
            </span>

            <h2 className="heading-lg mt-2">
              Brands you can count on.
            </h2>
          </div>

          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 ${
              isRTL ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {displayedBrands.map((brand) => (
              <span
                key={brand}
                className="cursor-pointer font-heading text-xl font-semibold text-navy/40 transition-all duration-300 hover:scale-105 hover:text-amber dark:text-white/30 dark:hover:text-amber"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================= */}

      <section className="section-container py-20">
        <div
          className={`grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1.5fr] md:items-center ${
            isRTL ? 'md:[direction:rtl]' : ''
          }`}
        >
          {/* LEFT / RIGHT INTRO */}

          <div
            className={
              isRTL
                ? 'text-right'
                : 'text-left'
            }
          >
            <span className="eyebrow">
              Customer stories
            </span>

            <h2 className="heading-lg mt-2">
              Loved by people on the move.
            </h2>

            <p className="body-text mt-4">
              Real experiences from customers who rely on STRYDE every day.
            </p>
          </div>

          {/* QUOTE */}

          {quote && (
            <div
              className={`border-amber ${
                isRTL
                  ? 'border-e-2 pe-8 text-right'
                  : 'border-s-2 ps-8 text-left'
              }`}
            >
              <p className="font-heading text-2xl leading-snug text-navy dark:text-white sm:text-3xl">
                “{quote.quote}”
              </p>

              <div
                className={`mt-6 flex items-center gap-3 ${
                  isRTL
                    ? 'flex-row-reverse justify-end'
                    : 'flex-row justify-start'
                }`}
              >
                {quote.avatar ? (
                  <img
                    src={quote.avatar}
                    alt={quote.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-sm font-semibold text-amber-dark dark:bg-amber/20 dark:text-amber"
                  >
                    {getInitials(quote.name)}
                  </span>
                )}

                <div
                  className={
                    isRTL
                      ? 'text-right'
                      : 'text-left'
                  }
                >
                  <p className="text-sm font-semibold text-navy dark:text-white">
                    {quote.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    {quote.role}
                  </p>
                </div>
              </div>

              {TESTIMONIALS.length > 0 && (
                <div
                  className={`mt-8 flex items-center gap-4 ${
                    isRTL
                      ? 'flex-row-reverse justify-end'
                      : 'flex-row justify-start'
                  }`}
                >
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() =>
                      setQuoteIndex(
                        (index) =>
                          (index - 1 + TESTIMONIALS.length) %
                          TESTIMONIALS.length,
                      )
                    }
                    className="rounded-full border border-gray-200 p-2 transition hover:bg-cream dark:border-border-dark dark:hover:bg-white/5"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </button>

                  <div
                    className={`flex gap-1.5 ${
                      isRTL
                        ? 'flex-row-reverse'
                        : ''
                    }`}
                  >
                    {TESTIMONIALS.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 w-1.5 rounded-full transition ${
                          index === quoteIndex
                            ? 'bg-amber'
                            : 'bg-gray-300 dark:bg-border-dark'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() =>
                      setQuoteIndex(
                        (index) =>
                          (index + 1) %
                          TESTIMONIALS.length,
                      )
                    }
                    className="rounded-full border border-gray-200 p-2 transition hover:bg-cream dark:border-border-dark dark:hover:bg-white/5"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-navy py-20 text-white dark:bg-black/40">
        <div className="section-container">
          <div
            className={`grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center ${
              isRTL
                ? 'md:[direction:rtl]'
                : ''
            }`}
          >
            <div
              className={
                isRTL
                  ? 'text-right'
                  : 'text-left'
              }
            >
              <span className="eyebrow !text-amber-dark">
                Looking for something special?
              </span>

              <h2 className="heading-lg mt-2 !text-white">
                Explore the craft behind every pair.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
                Discover how our footwear is developed, finished, and prepared
                for customers and bulk orders.
              </p>
            </div>

            <Link
              to="/home-2"
              className="btn-primary !bg-amber !text-navy-dark hover:!bg-amber-dark"
            >
              Explore Home 2
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}