import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

import {
  ABOUT_HERO,
  ABOUT_INTRO,
  ABOUT_STORY,
  VALUES,
  FEATURES,
  ABOUT_MISSION,
} from '../data/store.js'

export default function About() {
  return (
    <>
      {/* =====================================================
          HERO / FIRST SLIDE
      ====================================================== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy text-white dark:bg-black/40">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={ABOUT_HERO.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/80" />

        {/* Hero content - CENTERED */}
        <div className="section-container relative z-10 flex w-full justify-center py-24 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <span className="eyebrow !text-amber-dark">
              {ABOUT_HERO.eyebrow}
            </span>

            <h1 className="heading-xl mt-4 max-w-4xl !text-white">
              {ABOUT_HERO.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              {ABOUT_HERO.description}
            </p>

            {/* Optional Hero button */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/home-2#lineup"
                className="btn-primary !bg-amber !text-navy-dark hover:!bg-amber-dark"
              >
                Explore collection
                <ArrowRightIcon className="ms-2 h-4 w-4" />
              </Link>

              <Link
                to="/home-2#contact"
                className="btn-secondary !border-white/40 !text-white hover:!border-white hover:!bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">
              {ABOUT_INTRO.eyebrow}
            </span>

            <h2 className="heading-lg mt-2">
              {ABOUT_INTRO.title}
            </h2>

            {ABOUT_INTRO.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="body-text mt-5"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={ABOUT_INTRO.image}
              alt={ABOUT_INTRO.imageAlt}
              className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}
      <section className="bg-cream py-20 dark:bg-white/[0.02]">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              {ABOUT_STORY.eyebrow}
            </span>

            <h2 className="heading-lg mt-2">
              {ABOUT_STORY.title}
            </h2>

            <p className="body-text mt-5">
              {ABOUT_STORY.description}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ABOUT_STORY.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-7 dark:bg-surface-dark"
              >
                <p className="font-heading text-4xl font-bold text-amber">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="heading-sm mt-5">
                  {step.title}
                </h3>

                <p className="body-text mt-3 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="section-container py-20">
        <div className="mb-12">
          <span className="eyebrow">
            What matters to us
          </span>

          <h2 className="heading-lg mt-2">
            The STRYDE standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-border-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {VALUES.map(({ icon, title, description }) => {
            const Icon =
              icon === 'sparkles'
                ? SparklesIcon
                : icon === 'shield'
                  ? ShieldCheckIcon
                  : HeartIcon

            return (
              <div
                key={title}
                className="px-0 py-6 sm:px-8 sm:first:ps-0 sm:last:pe-0"
              >
                <Icon className="h-8 w-8 text-amber dark:text-amber-dark" />

                <h3 className="heading-sm mt-5">
                  {title}
                </h3>

                <p className="body-text mt-3 text-sm">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* =====================================================
          WHAT WE OFFER
      ====================================================== */}
      <section className="bg-navy py-20 text-white dark:bg-black/40">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="eyebrow !text-amber-dark">
                What we offer
              </span>

              <h2 className="heading-lg mt-2 !text-white">
                Something for every step.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/65">
                Our collection covers everyday essentials, refined styles,
                performance footwear, and custom solutions for teams and
                organisations.
              </p>

              <Link
                to="/home-2#lineup"
                className="btn-primary mt-7 inline-flex !bg-amber !text-navy-dark hover:!bg-amber-dark"
              >
                Explore the collection
                <ArrowRightIcon className="ms-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b border-white/10 py-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-navy-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>

                  <span className="text-sm text-white/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="section-container py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            {ABOUT_MISSION.eyebrow}
          </span>

          <h2 className="heading-lg mt-2">
            {ABOUT_MISSION.title}
          </h2>

          <p className="body-text mt-5">
            {ABOUT_MISSION.description}
          </p>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="border-t border-gray-200 py-20 dark:border-border-dark">
        <div className="section-container text-center">
          <span className="eyebrow">
            Ready to explore?
          </span>

          <h2 className="heading-lg mt-2">
            Find your next pair with STRYDE.
          </h2>

          <p className="body-text mx-auto mt-4 max-w-xl">
            Browse our collection or talk to us about custom and bulk
            footwear requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/home-2#lineup"
              className="btn-primary"
            >
              Shop the collection
            </Link>

            <Link
              to="/home-2#contact"
              className="btn-secondary"
            >
              Bulk enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}