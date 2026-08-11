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
} from '../data/store.js'

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

export default function Home1() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  const quote = TESTIMONIALS[quoteIndex]

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=2000&q=80"
          alt="Premium footwear collection"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />

        <div className="section-container py-24 text-white">
          <span className="eyebrow !text-amber-dark">
            New season · Fall collection
          </span>

          <h1 className="heading-xl mt-4 max-w-2xl !text-white">
            Footwear for every step of your day.
          </h1>

          <p className="body-text mt-5 max-w-md !text-white/75">
            Discover everyday footwear designed around comfort, quality, and
            timeless style. From casual essentials to formal and performance
            styles, find your next favourite pair.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/20 pt-6">
            <div>
              <p className="font-heading text-2xl font-semibold">12k+</p>
              <p className="text-xs text-white/60">Pairs shipped</p>
            </div>

            <div>
              <p className="font-heading text-2xl font-semibold">4.8/5</p>
              <p className="text-xs text-white/60">Customer rating</p>
            </div>

            <div>
              <p className="font-heading text-2xl font-semibold">30 days</p>
              <p className="text-xs text-white/60">Free exchanges</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <span className="eyebrow">Welcome to STRYDE</span>

            <h2 className="heading-lg mt-2">
              Shoes made for real life.
            </h2>
          </div>

          <div>
            <p className="body-text max-w-2xl">
              We believe good footwear should look right, feel right, and keep
              up with the way you live. STRYDE brings together dependable
              everyday styles, refined formal footwear, and performance-ready
              designs under one roof.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-white"
            >
              Learn more about us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="bg-cream py-20 dark:bg-white/[0.02]"
      >
        <div className="section-container">
          <div className="mb-12">
            <span className="eyebrow">Shop by category</span>

            <h2 className="heading-lg mt-2">
              Find the pair that fits your day.
            </h2>

            <p className="body-text mt-4 max-w-xl">
              From relaxed weekends to important meetings, explore footwear
              designed for different moments and different ways of moving.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CATEGORIES.map((category, index) => (
              <Link
                key={category.name}
                to="/home-2#lineup"
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="font-heading text-5xl font-bold text-white/20">
                    {category.no || `0${index + 1}`}
                  </span>

                  <h3 className="font-heading text-2xl font-semibold">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-white/70">
                    {category.desc}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore collection
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STRYDE */}
      <section className="section-container py-20">
        <div className="mb-12">
          <span className="eyebrow">Why STRYDE</span>

          <h2 className="heading-lg mt-2">
            Built around a better experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-border-dark sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {VALUE_PROPS.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className={`flex flex-col gap-3 py-6 sm:px-6 sm:py-0 ${
                index === 0 ? 'sm:ps-0' : ''
              }`}
            >
              <Icon className="h-7 w-7 text-amber dark:text-amber-dark" />

              <h3 className="heading-sm !text-base">{title}</h3>

              <p className="body-text text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-y border-gray-200 py-12 dark:border-border-dark">
        <div className="section-container">
          <div className="text-center">
            <span className="eyebrow">Our selection</span>

            <h2 className="heading-lg mt-2">
              Brands you can count on.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {BRANDS.filter((brand) => brand !== 'All').map((brand) => (
              <span
                key={brand}
                className="font-heading text-xl font-semibold text-navy/40 transition hover:text-navy/70 dark:text-white/30 dark:hover:text-white/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1.5fr] md:items-center">
          <div>
            <span className="eyebrow">Customer stories</span>

            <h2 className="heading-lg mt-2">
              Loved by people on the move.
            </h2>

            <p className="body-text mt-4">
              Real experiences from customers who rely on STRYDE every day.
            </p>
          </div>

          <div className="border-s-2 border-amber ps-8">
            <p className="font-heading text-2xl leading-snug text-navy dark:text-white sm:text-3xl">
              “{quote.quote}”
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-navy dark:text-white">
                {quote.name}
              </p>

              <p className="text-xs text-gray-400">{quote.role}</p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
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
                <ChevronLeftIcon className="h-4 w-4 rtl:rotate-180" />
              </button>

              <div className="flex gap-1.5">
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
                aria-label="Next testimonial"
                onClick={() =>
                  setQuoteIndex(
                    (index) => (index + 1) % TESTIMONIALS.length,
                  )
                }
                className="rounded-full border border-gray-200 p-2 transition hover:bg-cream dark:border-border-dark dark:hover:bg-white/5"
              >
                <ChevronRightIcon className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-20 text-white dark:bg-black/40">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
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
    </>
  )
}