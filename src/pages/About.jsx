import {
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-screen bg-white text-navy dark:bg-navy-dark dark:text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="section-container py-16 md:py-20 lg:py-24">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div>

            <span className="eyebrow">
              About STRYDE
            </span>

            <h1 className="heading-xl mt-3">
              Footwear made for how you actually move.
            </h1>

            <p className="body-text mt-5 max-w-xl">
              What started with a passion for well-made footwear has grown
              into a collection designed for different lifestyles and
              different moments.
            </p>

            <p className="body-text mt-4 max-w-xl">
              We believe the best footwear should feel natural from the
              moment you put it on. That means thoughtful design, dependable
              materials, and comfort that lasts through the day.
            </p>

          </div>

          <div className="overflow-hidden rounded-2xl">

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80"
              alt="STRYDE footwear collection"
              className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section className="bg-cream py-20 dark:bg-white/[0.03] md:py-24">

        <div className="section-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="eyebrow">
              Our story
            </span>

            <h2 className="heading-lg mt-2">
              Built around comfort, quality, and movement.
            </h2>

            <p className="body-text mx-auto mt-4 max-w-2xl">
              What started with a passion for well-made footwear has grown
              into a collection designed for different lifestyles and
              different moments.
            </p>

          </div>


          {/* =====================================================
              MOBILE:
              1 COLUMN

              TABLET/DESKTOP:
              3 EQUAL COLUMNS
          ===================================================== */}

          <div className="mx-auto mt-12 w-full max-w-5xl">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-0">

              {/* CARD 01 */}

              <div className="min-w-0 px-0 md:px-3 lg:px-5">

                <div className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm dark:bg-navy-dark sm:p-6 md:p-5 lg:p-6">

                  <span className="font-heading text-3xl font-bold text-amber-dark">
                    01
                  </span>

                  <h3 className="mt-3 font-heading text-sm font-semibold leading-tight text-navy dark:text-white md:text-base">
                    Start with comfort
                  </h3>

                  <p className="mt-3 text-xs leading-[1.5] text-gray-500 dark:text-gray-400 md:text-sm">
                    A great-looking shoe means little if you don't want to
                    wear it. Comfort is part of the design from the beginning.
                  </p>

                </div>

              </div>


              {/* CARD 02 */}

              <div className="min-w-0 px-0 md:px-3 lg:px-5">

                <div className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm dark:bg-navy-dark sm:p-6 md:p-5 lg:p-6">

                  <span className="font-heading text-3xl font-bold text-amber-dark">
                    02
                  </span>

                  <h3 className="mt-3 font-heading text-sm font-semibold leading-tight text-navy dark:text-white md:text-base">
                    Choose quality
                  </h3>

                  <p className="mt-3 text-xs leading-[1.5] text-gray-500 dark:text-gray-400 md:text-sm">
                    We believe in materials, construction, and finishing that
                    make footwear worth reaching for again and again.
                  </p>

                </div>

              </div>


              {/* CARD 03 */}

              <div className="min-w-0 px-0 md:px-3 lg:px-5">

                <div className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm dark:bg-navy-dark sm:p-6 md:p-5 lg:p-6">

                  <span className="font-heading text-3xl font-bold text-amber-dark">
                    03
                  </span>

                  <h3 className="mt-3 font-heading text-sm font-semibold leading-tight text-navy dark:text-white md:text-base">
                    Keep moving
                  </h3>

                  <p className="mt-3 text-xs leading-[1.5] text-gray-500 dark:text-gray-400 md:text-sm">
                    From everyday errands to demanding workdays, our footwear
                    is designed to fit naturally into your routine.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          THE STRYDE STANDARD
      ========================================================= */}

      <section className="section-container py-20 md:py-24">

        <div className="mx-auto w-full max-w-5xl">

          {/* CENTERED HEADING */}

          <div className="mb-12 text-center">

            <span className="eyebrow">
              What matters to us
            </span>

            <h2 className="heading-lg mt-2">
              The STRYDE standard.
            </h2>

          </div>


          {/* =====================================================
              MOBILE:
              1 COLUMN / ONE AFTER ANOTHER

              TABLET/DESKTOP:
              3 EQUAL COLUMNS
          ===================================================== */}

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">

            {/* COLUMN 01 */}

            <div className="min-w-0 px-0 md:px-3 lg:px-5">

              <div className="flex h-full flex-col items-start">

                <SparklesIcon className="h-5 w-5 shrink-0 text-amber-dark" />

                <h3 className="mt-4 font-heading text-sm font-semibold leading-tight text-navy dark:text-white md:text-base">
                  Thoughtful design
                </h3>

                <p className="mt-3 text-xs leading-[1.5] text-gray-500 dark:text-gray-400 md:text-sm">
                  We focus on clean silhouettes, practical details, and
                  styles that remain relevant beyond a single season.
                </p>

              </div>

            </div>


            {/* COLUMN 02 */}

            <div className="min-w-0 border-0 px-0 md:border-s md:border-gray-200 md:px-3 lg:px-5 dark:md:border-border-dark">

              <div className="flex h-full flex-col items-start">

                <ShieldCheckIcon className="h-5 w-5 shrink-0 text-amber-dark" />

                <h3 className="mt-4 font-heading text-sm font-semibold leading-tight text-navy dark:text-white md:text-base">
                  Quality first
                </h3>

                <p className="mt-3 text-xs leading-[1.5] text-gray-500 dark:text-gray-400 md:text-sm">
                  Every pair is selected and checked with comfort,
                  construction, materials, and everyday durability in mind.
                </p>

              </div>

            </div>


            {/* COLUMN 03 */}

            <div className="min-w-0 border-0 px-0 md:border-s md:border-gray-200 md:px-3 lg:px-5 dark:md:border-border-dark">

              <div className="flex h-full flex-col items-start">

                <HeartIcon className="h-5 w-5 shrink-0 text-amber-dark" />

                <h3 className="mt-4 font-heading text-sm font-semibold leading-tight text-navy dark:text-white md:text-base">
                  Made for people
                </h3>

                <p className="mt-3 text-xs leading-[1.5] text-gray-500 dark:text-gray-400 md:text-sm">
                  Our collections are created around how people actually
                  live, work, travel, and move through their day.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SOMETHING FOR EVERY STEP
      ========================================================= */}

      <section className="bg-navy py-20 text-white dark:bg-black/40 md:py-24">

        <div className="section-container">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="eyebrow !text-amber-dark">
                What we offer
              </span>

              <h2 className="heading-lg mt-2 !text-white">
                Something for every step.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/65">
                Our collection brings together everyday casual footwear,
                formal styles, performance-ready options, and considered
                finishes for different moments and different needs.
              </p>

              <Link
                to="/category"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-navy-dark transition hover:bg-amber-dark"
              >
                Explore the collection

                <ArrowRightIcon className="h-4 w-4" />

              </Link>

            </div>


            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">

              {[
                'Everyday casual footwear',
                'Formal and occasion styles',
                'Performance-focused footwear',
                'Comfort-led essentials',
                'Custom colourways',
                'Reliable customer support',
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/10 pb-4"
                >

                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber text-navy-dark">

                    <CheckIcon className="h-3 w-3" />

                  </span>

                  <span className="text-sm text-white/80">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR APPROACH
      ========================================================= */}

      <section className="section-container py-20 md:py-24">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">

          <div>

            <span className="eyebrow">
              Our approach
            </span>

            <h2 className="heading-lg mt-2">
              Simple choices. Better footwear.
            </h2>

          </div>


          <div>

            <p className="body-text">
              We do not believe footwear needs to be complicated. Our
              approach is centred on practical design, dependable materials,
              and styles that can work naturally within everyday life.
            </p>

            <p className="body-text mt-5">
              From the first sketch to the finished pair, every decision is
              made with comfort, quality, and movement in mind.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-amber dark:text-white dark:hover:text-amber-dark"
            >
              Talk to our team

              <ArrowRightIcon className="h-4 w-4" />

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-cream py-20 dark:bg-white/[0.03] md:py-24">

        <div className="section-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="eyebrow">
              Find your next pair
            </span>

            <h2 className="heading-lg mt-2">
              Made to move with you.
            </h2>

            <p className="body-text mx-auto mt-5 max-w-2xl">
              Explore the STRYDE collection and discover footwear designed
              around comfort, quality, and everyday movement.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                to="/category"
                className="btn-primary"
              >
                Explore categories
              </Link>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Contact us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}