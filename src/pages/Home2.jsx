import { useState } from 'react'

import {
  CheckIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import {
  HOME2_HERO,
  WORKSHOP_STATS,
  PRODUCTS,
  CATEGORIES,
  MATERIALS,
  PROCESS_STEPS,
  LOOKBOOK,
  FAQS,
  BULK_ORDER_POINTS,
} from '../data/store.js'

import ContactForm from '../components/ContactForm.jsx'

export default function Home2() {
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES[0]?.name || '',
  )

  const [selectedSizes, setSelectedSizes] = useState({})

  const [selectedProductId, setSelectedProductId] = useState(null)

  const categoryProducts = PRODUCTS.filter(
    (product) => product.category === activeCategory,
  )

  const visibleProducts = selectedProductId
    ? categoryProducts.filter(
        (product) => product.id === selectedProductId,
      )
    : categoryProducts

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((previous) => ({
      ...previous,
      [productId]: size,
    }))

    setSelectedProductId(productId)
  }

  const handleChangeShoe = () => {
    setSelectedProductId(null)
    setSelectedSizes({})
  }

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName)
    setSelectedProductId(null)
    setSelectedSizes({})
  }

  return (
    <>
      {/* =========================================================
          1. EDITORIAL HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-cream dark:bg-white/[0.02]">
        <div className="section-container grid min-h-[720px] grid-cols-1 items-center gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">

          <div className="relative z-10">

            <span className="eyebrow">
              {HOME2_HERO.eyebrow}
            </span>

            <h1 className="heading-xl mt-4 max-w-2xl">
              {HOME2_HERO.title}
            </h1>

            <p className="body-text mt-6 max-w-xl">
              {HOME2_HERO.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#lineup"
                className="btn-primary"
              >
                {HOME2_HERO.primaryCta}
              </a>

              <a
                href="#craft"
                className="btn-secondary"
              >
                {HOME2_HERO.secondaryCta}
              </a>

            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gray-300 pt-6 dark:border-border-dark">

              {HOME2_HERO.stats.map((stat) => (
                <div key={stat.label}>

                  <p className="font-heading text-2xl font-bold text-navy dark:text-white">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">

              <img
                src={HOME2_HERO.image}
                alt={HOME2_HERO.imageAlt}
                className="h-[560px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-6 start-6 max-w-xs rounded-2xl bg-navy p-6 text-white shadow-xl dark:bg-amber dark:text-navy-dark md:start-0">

              <p className="text-xs uppercase tracking-[0.2em] text-amber-dark dark:text-navy-dark/60">
                {HOME2_HERO.cardLabel}
              </p>

              <p className="mt-2 font-heading text-xl font-semibold">
                {HOME2_HERO.cardText}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          2. DESIGN PHILOSOPHY
      ========================================================= */}

      <section
        id="philosophy"
        className="section-container py-20 md:py-28 lg:py-32"
      >

        <div className="mx-auto max-w-3xl text-center">

          <span className="eyebrow">
            The STRYDE edit
          </span>

          <h2 className="heading-lg mt-3">
            A different way to think about footwear.
          </h2>

          <p className="body-text mx-auto mt-5 max-w-2xl">
            We do not start with trends. We start with how a shoe will be
            worn, where it will go, and how it should feel after a full day.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <article className="flex min-h-[250px] flex-col rounded-2xl border border-gray-200 p-6 dark:border-border-dark">

            <span className="font-heading text-3xl font-bold text-amber">
              01
            </span>

            <h3 className="heading-sm mt-6 !text-base">
              Purpose first
            </h3>

            <p className="body-text mt-3 text-sm leading-6">
              Every silhouette begins with a real use case, from long
              workdays to relaxed weekends.
            </p>

          </article>

          <article className="flex min-h-[250px] flex-col rounded-2xl border border-gray-200 p-6 dark:border-border-dark">

            <span className="font-heading text-3xl font-bold text-amber">
              02
            </span>

            <h3 className="heading-sm mt-6 !text-base">
              Quiet details
            </h3>

            <p className="body-text mt-3 text-sm leading-6">
              We focus on proportions, finishes, textures, and construction
              instead of unnecessary decoration.
            </p>

          </article>

          <article className="flex min-h-[250px] flex-col rounded-2xl border border-gray-200 p-6 dark:border-border-dark">

            <span className="font-heading text-3xl font-bold text-amber">
              03
            </span>

            <h3 className="heading-sm mt-6 !text-base">
              Wear it often
            </h3>

            <p className="body-text mt-3 text-sm leading-6">
              The best pair is the one you keep reaching for, which is why
              versatility matters from day one.
            </p>

          </article>

        </div>

      </section>

      {/* =========================================================
          3. WORKSHOP NUMBERS
      ========================================================= */}

      <section className="bg-navy py-16 text-white dark:bg-black/40">

        <div className="section-container">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="eyebrow !text-amber-dark">
                Behind the collection
              </span>

              <h2 className="heading-lg mt-2 max-w-xl !text-white">
                Experience is built into every release.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-white/60">
              From sourcing to final inspection, every stage is considered
              before a style becomes part of the STRYDE collection.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4">

            {WORKSHOP_STATS.map((stat) => (

              <div
                key={stat.label}
                className="border-s-2 border-amber ps-5"
              >

                <p className="font-heading text-4xl font-bold">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-white/55">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          4. PRODUCT LINEUP
      ========================================================= */}

      <section
        id="lineup"
        className="bg-cream py-20 dark:bg-white/[0.02] md:py-24"
      >

        <div className="section-container">

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <span className="eyebrow">
                Current collection
              </span>

              <h2 className="heading-lg mt-2">
                Selected styles, not endless scrolling.
              </h2>

            </div>

            <p className="body-text max-w-md text-sm">
              A focused collection of everyday, formal, and performance
              footwear selected around versatility and long-term wear.
            </p>

          </div>

          {/* =====================================================
              CATEGORY BUTTONS

              SMALL BUTTONS
              SAME STYLE AS YOUR ORIGINAL CODE
          ===================================================== */}

          <div className="mt-10 flex flex-wrap gap-2">

            {CATEGORIES.map((category) => {

              const isActive =
                activeCategory === category.name

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category.name)
                  }
                  className={
                    isActive
                      ? 'rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition dark:bg-amber dark:text-navy-dark'
                      : 'rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10'
                  }
                >
                  {category.name}
                </button>
              )

            })}

          </div>

          {/* =====================================================
              SELECTED SHOE MESSAGE
          ===================================================== */}

          {selectedProductId && (

            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-amber/30 bg-amber/10 p-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-semibold text-navy dark:text-white">
                  Shoe selected
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Other shoes are hidden while you choose your size.
                </p>

              </div>

              <button
                type="button"
                onClick={handleChangeShoe}
                className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy/90 dark:bg-amber dark:text-navy-dark dark:hover:bg-amber/90"
              >
                Change shoe
              </button>

            </div>

          )}

          {/* =====================================================
              PRODUCTS

              320px  = 1
              640px  = 2
              768px  = 3
              1024px = 3
          ===================================================== */}

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

            {visibleProducts.length > 0 ? (

              visibleProducts.map((product) => {

                const selectedSize =
                  selectedProductId === product.id
                    ? selectedSizes[product.id]
                    : null

                return (

                  <article
                    key={product.id}
                    className="group min-w-0"
                  >

                    {/* PRODUCT IMAGE */}

                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark">

                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {product.tag && (

                        <span className="absolute start-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-navy dark:bg-navy-dark dark:text-white">
                          {product.tag}
                        </span>

                      )}

                    </div>

                    {/* PRODUCT DETAILS */}

                    <div className="mt-5">

                      <div className="flex items-start justify-between gap-4">

                        <div className="min-w-0">

                          <p className="text-xs uppercase tracking-wider text-gray-400">
                            {product.brand}
                          </p>

                          <h3 className="heading-sm mt-1 !text-lg">
                            {product.name}
                          </h3>

                        </div>

                        <span className="shrink-0 font-heading font-semibold text-navy dark:text-white">
                          {product.price}
                        </span>

                      </div>

                      {/* SIZE SELECTOR */}

                      <div className="mt-5">

                        <div className="mb-3 flex items-center justify-between gap-3">

                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                            Select a size
                          </p>

                          {selectedSize && (

                            <span className="text-xs font-medium text-amber">
                              Size {selectedSize} selected
                            </span>

                          )}

                        </div>

                        <div className="flex flex-wrap gap-2">

                          {product.sizes.map((size) => {

                            const isSelected =
                              selectedProductId === product.id &&
                              selectedSizes[product.id] === size

                            return (

                              <button
                                key={size}
                                type="button"
                                onClick={() =>
                                  handleSizeSelect(
                                    product.id,
                                    size,
                                  )
                                }
                                aria-label={`Select size ${size}`}
                                aria-pressed={isSelected}
                                className={
                                  isSelected
                                    ? 'flex h-10 min-w-10 items-center justify-center rounded-lg border border-navy bg-navy px-3 text-sm font-medium text-white shadow-sm transition-all duration-200 dark:border-amber dark:bg-amber dark:text-navy-dark'
                                    : 'flex h-10 min-w-10 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-navy hover:text-navy dark:border-border-dark dark:bg-white/5 dark:text-gray-300 dark:hover:border-amber dark:hover:text-amber'
                                }
                              >
                                {size}
                              </button>

                            )

                          })}

                        </div>

                      </div>

                    </div>

                  </article>

                )

              })

            ) : (

              <p className="text-sm text-gray-500">
                No products available in this category.
              </p>

            )}

          </div>

        </div>
      </section>

      {/* =========================================================
          5. MATERIAL LIBRARY
      ========================================================= */}

      <section className="section-container py-20 md:py-24">

        <div className="mx-auto max-w-3xl text-center">

          <span className="eyebrow">
            Material library
          </span>

          <h2 className="heading-lg mt-2">
            The feel starts with the material.
          </h2>

          <p className="body-text mx-auto mt-5 max-w-2xl">
            Different materials change the character of a shoe. We select
            finishes according to the purpose, expected wear, and look of
            each style.
          </p>

        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

          {MATERIALS.map((material) => (

            <article
              key={material.name}
              className="group overflow-hidden rounded-2xl bg-cream dark:bg-white/[0.03]"
            >

              <div className="overflow-hidden">

                <img
                  src={material.image}
                  alt={material.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="heading-sm !text-lg">
                    {material.name}
                  </h3>

                  <span className="text-xs font-semibold uppercase tracking-wider text-amber">
                    {material.type}
                  </span>

                </div>

                <p className="body-text mt-3 text-sm">
                  {material.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =========================================================
          6. CRAFT PROCESS
      ========================================================= */}

      <section
        id="craft"
        className="border-y border-gray-200 py-20 dark:border-border-dark md:py-24"
      >

        <div className="section-container">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <span className="eyebrow">
                Our craft
              </span>

              <h2 className="heading-lg mt-2">
                From first sketch to final check.
              </h2>

              <p className="body-text mt-5">
                A considered process keeps the finished shoe practical,
                consistent, and ready for everyday use.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">

              {PROCESS_STEPS.map((step, index) => (

                <article
                  key={step.step}
                  className={`border-gray-200 py-7 dark:border-border-dark ${
                    index % 2 === 0
                      ? 'sm:border-e sm:pe-8'
                      : 'sm:ps-8'
                  } ${
                    index < 2
                      ? 'border-b'
                      : index < PROCESS_STEPS.length
                        ? 'sm:border-b-0'
                        : ''
                  }`}
                >

                  <span className="font-heading text-sm font-bold text-amber">
                    {step.step}
                  </span>

                  <h3 className="heading-sm mt-3 !text-lg">
                    {step.title}
                  </h3>

                  <p className="body-text mt-2 text-sm">
                    {step.desc}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          7. LOOKBOOK
      ========================================================= */}

      <section className="section-container py-20 md:py-24">

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>

            <span className="eyebrow">
              The lookbook
            </span>

            <h2 className="heading-lg mt-2">
              One collection. Different rhythms.
            </h2>

          </div>

          <p className="body-text max-w-md text-sm">
            Explore how the same design philosophy translates from the
            weekday commute to formal occasions and weekend miles.
          </p>

        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">

          {LOOKBOOK.map((item, index) => (

            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0
                  ? 'md:col-span-7 md:row-span-2'
                  : 'md:col-span-5'
              }`}
            >

              <img
                src={item.img}
                alt={item.title}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                  index === 0
                    ? 'h-[560px]'
                    : 'h-[270px]'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">

                <p className="text-xs uppercase tracking-[0.2em] text-amber-dark">
                  {item.label}
                </p>

                <h3 className="mt-2 font-heading text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                  {item.desc}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =========================================================
          8. FAQ + BULK ENQUIRY
      ========================================================= */}

      <section
        id="contact"
        className="bg-navy py-20 text-white dark:bg-black/40 md:py-24"
      >

        <div className="section-container">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* QUESTIONS & ENQUIRIES */}

            <div>

              <span className="eyebrow !text-amber-dark">
                Questions & enquiries
              </span>

              <h2 className="heading-lg mt-2 !text-white">
                Need a little more detail?
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/60">
                Whether you're choosing your first pair or planning a larger
                order, our team can help you work through the details.
              </p>

              <div className="mt-8 space-y-3">

                {BULK_ORDER_POINTS.map((point) => (

                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-navy-dark">

                      <CheckIcon className="h-4 w-4" />

                    </span>

                    <span className="text-sm text-white/75">
                      {point}
                    </span>

                  </div>

                ))}

              </div>

              {/* FAQ */}

              <div className="mt-10">

                <h3 className="font-heading text-lg font-semibold">
                  Frequently asked
                </h3>

                <div className="mt-5 space-y-3">

                  {FAQS.map((faq) => (

                    <Disclosure
                      key={faq.q}
                      as="div"
                    >

                      {({ open }) => (

                        <div
                          className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                            open
                              ? 'border-amber/50 bg-white/[0.06]'
                              : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                          }`}
                        >

                          <DisclosureButton
                            className="flex w-full items-center justify-between gap-5 px-5 py-5 text-start"
                          >

                            <span
                              className={`text-sm font-medium leading-6 transition-colors ${
                                open
                                  ? 'text-amber'
                                  : 'text-white'
                              }`}
                            >
                              {faq.q}
                            </span>

                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                open
                                  ? 'border-amber bg-amber text-navy-dark'
                                  : 'border-white/20 text-amber'
                              }`}
                            >

                              <PlusIcon
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  open
                                    ? 'rotate-45'
                                    : ''
                                }`}
                              />

                            </span>

                          </DisclosureButton>

                          <DisclosurePanel
                            className="px-5 pb-5 text-sm leading-7 text-white/60"
                          >

                            <div className="border-t border-white/10 pt-4">
                              {faq.a}
                            </div>

                          </DisclosurePanel>

                        </div>

                      )}

                    </Disclosure>

                  ))}

                </div>

              </div>

            </div>

            {/* CONTACT FORM */}

            <div className="rounded-2xl bg-white p-6 text-navy sm:p-8">

              <div className="mb-6">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                  Bulk & custom orders
                </span>

                <h3 className="mt-2 font-heading text-2xl font-semibold">
                  Tell us what you're outfitting.
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Share your quantities, sizes, preferred styles, and any
                  custom requirement.
                </p>

              </div>

              <ContactForm />

            </div>

          </div>

        </div>
      </section>
    </>
  )
}