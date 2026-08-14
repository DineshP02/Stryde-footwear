import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

/* =========================================================
   KIDS IMAGES
========================================================= */

import kidsCasual1 from '../images/kids causal 1.jpg'
import kidsCasual2 from '../images/kids causal 2.webp'
import kidsCasual3 from '../images/kids causal 3.avif'

import kidsFormal1 from '../images/kids formal1.jpg'
import kidsFormal2 from '../images/kids formal 2.webp'
import kidsFormal3 from '../images/kids formal 3.jfif'

import kidsSport1 from '../images/kids sports 1.webp'
import kidsSport2 from '../images/kids sports 2.webp'
import kidsSport3 from '../images/kids sport 3.avif'

/* =========================================================
   MEN IMAGES
========================================================= */

import menCasual1 from '../images/men causal 1.webp'
import menCasual2 from '../images/men causal 2.jpg'
import menCasual3 from '../images/men causal 3.webp'

import menFormal1 from '../images/men formal 1.jpg'
import menFormal2 from '../images/men formal 2.jpg'
import menFormal3 from '../images/men formal 3.jpg'

import menSport1 from '../images/men sport 1.jpg'
import menSport2 from '../images/men sports 2.webp'
import menSport3 from '../images/men sports 3.jpg'

/* =========================================================
   WOMEN IMAGES
========================================================= */

import womenCasual1 from '../images/women causal 1.jpg'
import womenCasual3 from '../images/womens causal 3.webp'

import womenFormal1 from '../images/women formal 1.jpg'
import womenFormal2 from '../images/women formal 2.webp'
import womenFormal3 from '../images/women formal 3.avif'

import womenSport1 from '../images/women sport 1.jpg'
import womenSport2 from '../images/women sport 2.jpg'
import womenSport3 from '../images/women sport 3.jpg'

/* =========================================================
   SIZES
========================================================= */

const SIZES = [6, 7, 8, 9]

/* =========================================================
   SHOE TYPE TABS
========================================================= */

const TYPES = [
  {
    key: 'casual',
    label: 'Casual',
  },
  {
    key: 'formal',
    label: 'Formal',
  },
  {
    key: 'sports',
    label: 'Sports',
  },
]

/* =========================================================
   PRODUCT DATA
========================================================= */

const PRODUCTS_BY_TYPE = {
  casual: [
    {
      id: 'men-casual-1',
      img: menCasual1,
      audience: 'Men',
      brand: 'STRIDER',
      name: 'Canvas Low',
      price: 74,
      tag: 'Best Seller',
    },
    {
      id: 'men-casual-2',
      img: menCasual2,
      audience: 'Men',
      brand: 'LOOP',
      name: 'Street Runner',
      price: 68,
    },
    {
      id: 'men-casual-3',
      img: menCasual3,
      audience: 'Men',
      brand: 'STRIDER',
      name: 'Retro Slip-On',
      price: 62,
      tag: 'New',
    },

    {
      id: 'women-casual-1',
      img: womenCasual1,
      audience: 'Women',
      brand: 'LOOP',
      name: 'Everyday Low',
      price: 64,
      tag: 'Best Seller',
    },
    {
      id: 'women-casual-2',
      img: womenCasual1,
      audience: 'Women',
      brand: 'STRIDER',
      name: 'Canvas Slip',
      price: 58,
    },
    {
      id: 'women-casual-3',
      img: womenCasual3,
      audience: 'Women',
      brand: 'LOOP',
      name: 'Woven Sneaker',
      price: 66,
      tag: 'New',
    },

    {
      id: 'kids-casual-1',
      img: kidsCasual1,
      audience: 'Kids',
      brand: 'LITTLE STRIDE',
      name: 'Play Low',
      price: 42,
      tag: 'Best Seller',
    },
    {
      id: 'kids-casual-2',
      img: kidsCasual2,
      audience: 'Kids',
      brand: 'LITTLE STRIDE',
      name: 'Canvas Buddy',
      price: 38,
    },
    {
      id: 'kids-casual-3',
      img: kidsCasual3,
      audience: 'Kids',
      brand: 'LOOP KIDS',
      name: 'Rainbow Slip',
      price: 40,
      tag: 'New',
    },
  ],

  formal: [
    {
      id: 'men-formal-1',
      img: menFormal1,
      audience: 'Men',
      brand: 'OXFORD & CO',
      name: 'Classic Derby',
      price: 98,
      tag: 'Best Seller',
    },
    {
      id: 'men-formal-2',
      img: menFormal2,
      audience: 'Men',
      brand: 'OXFORD & CO',
      name: 'Leather Oxford',
      price: 112,
    },
    {
      id: 'men-formal-3',
      img: menFormal3,
      audience: 'Men',
      brand: 'HEIRLOOM',
      name: 'Monk Strap',
      price: 104,
      tag: 'New',
    },

    {
      id: 'women-formal-1',
      img: womenFormal1,
      audience: 'Women',
      brand: 'HEIRLOOM',
      name: 'Pointed Flat',
      price: 92,
      tag: 'Best Seller',
    },
    {
      id: 'women-formal-2',
      img: womenFormal2,
      audience: 'Women',
      brand: 'OXFORD & CO',
      name: 'Block Heel Loafer',
      price: 108,
    },
    {
      id: 'women-formal-3',
      img: womenFormal3,
      audience: 'Women',
      brand: 'HEIRLOOM',
      name: 'Satin Mule',
      price: 96,
      tag: 'New',
    },

    {
      id: 'kids-formal-1',
      img: kidsFormal1,
      audience: 'Kids',
      brand: 'LITTLE HEIRLOOM',
      name: 'First Occasion',
      price: 54,
      tag: 'Best Seller',
    },
    {
      id: 'kids-formal-2',
      img: kidsFormal2,
      audience: 'Kids',
      brand: 'LITTLE HEIRLOOM',
      name: 'Buckle Derby',
      price: 58,
    },
    {
      id: 'kids-formal-3',
      img: kidsFormal3,
      audience: 'Kids',
      brand: 'LITTLE OXFORD',
      name: 'Patent Strap',
      price: 56,
      tag: 'New',
    },
  ],

  sports: [
    {
      id: 'men-sport-1',
      img: menSport1,
      audience: 'Men',
      brand: 'PACE',
      name: 'Trail Runner',
      price: 88,
      tag: 'Best Seller',
    },
    {
      id: 'men-sport-2',
      img: menSport2,
      audience: 'Men',
      brand: 'PACE',
      name: 'Court Flex',
      price: 82,
    },
    {
      id: 'men-sport-3',
      img: menSport3,
      audience: 'Men',
      brand: 'SURGE',
      name: 'Sprint Knit',
      price: 76,
      tag: 'New',
    },

    {
      id: 'women-sport-1',
      img: womenSport1,
      audience: 'Women',
      brand: 'SURGE',
      name: 'Flex Trainer',
      price: 78,
      tag: 'Best Seller',
    },
    {
      id: 'women-sport-2',
      img: womenSport2,
      audience: 'Women',
      brand: 'PACE',
      name: 'Cloud Runner',
      price: 84,
    },
    {
      id: 'women-sport-3',
      img: womenSport3,
      audience: 'Women',
      brand: 'SURGE',
      name: 'Studio Knit',
      price: 72,
      tag: 'New',
    },

    {
      id: 'kids-sport-1',
      img: kidsSport1,
      audience: 'Kids',
      brand: 'PACE KIDS',
      name: 'Bounce Runner',
      price: 46,
      tag: 'Best Seller',
    },
    {
      id: 'kids-sport-2',
      img: kidsSport2,
      audience: 'Kids',
      brand: 'SURGE KIDS',
      name: 'Playground Flex',
      price: 44,
    },
    {
      id: 'kids-sport-3',
      img: kidsSport3,
      audience: 'Kids',
      brand: 'PACE KIDS',
      name: 'Sprint Velcro',
      price: 48,
      tag: 'New',
    },
  ],
}

/* =========================================================
   EXTRA CONTENT
========================================================= */

const PROMISE_ITEMS = [
  {
    stat: '30-Day',
    label: 'Free Returns',
    copy: 'Wear them, walk in them, decide later — no questions asked.',
  },
  {
    stat: '2-Day',
    label: 'Express Shipping',
    copy: 'Ordered today, on your feet by the weekend.',
  },
  {
    stat: '12-Month',
    label: 'Craft Warranty',
    copy: 'Stitching and soles backed against everyday wear.',
  },
  {
    stat: '1%',
    label: 'For the Planet',
    copy: 'A slice of every sale funds local recycling programs.',
  },
]

const TESTIMONIAL = {
  quote:
    'I run 30km a week and switch shoes constantly — the PACE Trail Runner is the first pair that still feels new after three months. Half my running club has switched over.',
  name: 'Meera K.',
  role: 'Marathon Runner, 4x STRYDE customer',
}

const HERO_STATS = [
  {
    value: '12K+',
    label: 'Pairs Shipped',
  },
  {
    value: '4.8/5',
    label: 'Average Rating',
  },
  {
    value: '11',
    label: 'Countries Served',
  },
]

/* =========================================================
   COMPONENT
========================================================= */

export default function Category() {
  const navigate = useNavigate()

  const [type, setType] = useState('casual')
  const [selected, setSelected] = useState(null)
  const [showOrderPopup, setShowOrderPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const gridRef = useRef(null)
  const newsletterRef = useRef(null)

  const products = PRODUCTS_BY_TYPE[type] || []

  const selectedProduct = selected
    ? products.find((product) => product.id === selected.id)
    : null

  /* =========================================================
     TYPE CHANGE
  ========================================================= */

  const handleTypeChange = (nextType) => {
    setType(nextType)
    setSelected(null)
    setShowOrderPopup(false)
  }

  /* =========================================================
     SIZE SELECT
     
     Clicking a size:
     1. Selects the size.
     2. Moves smoothly to the selection section.
     3. The selection section animates upward.
  ========================================================= */

  const handleSizeSelect = (productId, size) => {
    setSelected({
      id: productId,
      size,
    })

    setShowOrderPopup(false)

    setTimeout(() => {
      document
        .getElementById('selected-shoe-section')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }, 100)
  }

  /* =========================================================
     CHANGE SHOE
  ========================================================= */

  const handleChangeShoe = () => {
    setSelected(null)
    setShowOrderPopup(false)

    setTimeout(() => {
      gridRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  /* =========================================================
     ORDER
  ========================================================= */

  const handleOrder = () => {
    setShowOrderPopup(true)
  }

  const closeOrderPopup = () => {
    setShowOrderPopup(false)
  }

  const handleDone = () => {
    setShowOrderPopup(false)
    setSelected(null)
    navigate('/')
  }

  /* =========================================================
     NEWSLETTER
  ========================================================= */

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    setSubscribed(true)
    setEmail('')
  }

  /* =========================================================
     SCROLL
  ========================================================= */

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#EDE7DA]
        transition-colors
        duration-300
        dark:bg-navy-dark
      "
    >
      {/* =====================================================
          CUSTOM ANIMATIONS + TABLET GRID FIX
      ===================================================== */}

      <style>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .product-grid > :last-child:nth-child(odd) {
            grid-column: 1 / -1;
            justify-self: center;
          }
        }

        @keyframes selectionSlideUp {
          0% {
            opacity: 0;
            transform: translateY(35px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .selection-slide-up {
          animation: selectionSlideUp 0.45s ease-out;
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="
            relative
            flex
            min-h-[560px]
            w-full
            items-center
            bg-cover
            bg-center
            md:min-h-[640px]
          "
          style={{
            backgroundImage: `url(${menSport3})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-7xl
              px-4
              py-24
              sm:px-6
              md:px-10
              lg:px-16
            "
          >
            <p
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#C49A3A]/50
                bg-black/30
                px-4
                py-1.5
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#D6B45A]
                backdrop-blur-sm
              "
            >
              New Season Arrivals
            </p>

            <h1
              className="
                max-w-2xl
                text-4xl
                font-extrabold
                leading-[1.1]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Step Into Comfort.
              <span className="block text-[#C49A3A]">
                Walk With Confidence.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-white/80
                md:text-lg
              "
            >
              From street-ready sneakers to boardroom-sharp formals — find
              shoes built for men, women and kids, tested on real streets
              before they ever reach yours.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToGrid}
                className="
                  w-full
                  rounded-full
                  bg-[#C49A3A]
                  px-8
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  shadow-lg
                  shadow-black/20
                  transition-all
                  duration-200
                  hover:bg-[#b48a2e]
                  hover:shadow-xl
                  sm:w-auto
                "
              >
                Shop the Collection
              </button>

              <button
                type="button"
                onClick={scrollToNewsletter}
                className="
                  w-full
                  rounded-full
                  border
                  border-white/40
                  bg-white/10
                  px-8
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-white
                  hover:bg-white/20
                  sm:w-auto
                "
              >
                Get 10% Off First Order
              </button>
            </div>

            <div
              className="
                mt-14
                flex
                flex-wrap
                gap-x-10
                gap-y-4
                border-t
                border-white/15
                pt-6
              "
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white md:text-3xl">
                    {stat.value}
                  </p>

                  <p className="text-xs uppercase tracking-wide text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToGrid}
            aria-label="Scroll to products"
            className="
              absolute
              bottom-6
              left-1/2
              z-10
              -translate-x-1/2
              text-white/70
              transition-colors
              duration-200
              hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 animate-bounce"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* =====================================================
          PAGE BODY
      ===================================================== */}

      <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">

        {/* =====================================================
            COLLECTION HEADER
        ===================================================== */}

        <div
          ref={gridRef}
          className="mb-8 scroll-mt-6 text-center"
        >
          <p
            className="
              mb-2
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#C49A3A]
            "
          >
            STRYDE COLLECTION
          </p>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-black
              md:text-4xl
              dark:text-white
            "
          >
            Find Your Perfect Pair
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              md:text-base
              dark:text-slate-400
            "
          >
            Choose a style and explore men's, women's and kids' shoes
            together.
          </p>
        </div>

        {/* =====================================================
            TYPE TABS
        ===================================================== */}

        <div className="mb-8">
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-slate-500
              dark:text-slate-400
            "
          >
            Style
          </p>

          <div className="flex flex-wrap gap-2">
            {TYPES.map((item) => {
              const isActive = type === item.key

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleTypeChange(item.key)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? 'bg-black text-white shadow-md hover:bg-slate-800'
                        : 'border border-slate-200 bg-white text-slate-700 hover:border-[#C49A3A] hover:bg-[#F7F0DF] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#C49A3A] dark:hover:bg-slate-700'
                    }
                  `}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        <div
          className="
            product-grid
            grid
            grid-cols-1
            gap-7
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {products.map((product) => {
            const productSelected =
              selected && selected.id === product.id

            return (
              <div
                key={product.id}
                className="
                  mx-auto
                  w-full
                  max-w-[285px]
                "
              >
                {/* PRODUCT IMAGE */}

                <div
                  className={`
                    relative
                    aspect-[1/0.75]
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    ${
                      productSelected
                        ? 'ring-2 ring-[#C49A3A] ring-offset-2'
                        : ''
                    }
                    hover:shadow-md
                    dark:bg-slate-800
                  `}
                >
                  <img
                    src={product.img}
                    alt={`${product.audience} ${product.brand} ${product.name}`}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/5" />

                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      rounded-full
                      bg-black/90
                      px-2.5
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    {product.audience}
                  </span>

                  {product.tag && (
                    <span
                      className="
                        absolute
                        left-3
                        top-3
                        z-10
                        rounded-full
                        bg-[#C49A3A]
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        text-black
                        shadow-sm
                      "
                    >
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* PRODUCT INFORMATION */}

                <div className="mt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.12em]
                          text-slate-400
                          dark:text-slate-500
                        "
                      >
                        {product.brand}
                      </p>

                      <h3 className="mt-1 font-semibold text-black dark:text-white">
                        {product.name}
                      </h3>
                    </div>

                    <p className="whitespace-nowrap font-semibold text-black dark:text-white">
                      ${product.price}
                    </p>
                  </div>

                  {/* SIZE SELECT */}

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wide
                          text-slate-400
                          dark:text-slate-500
                        "
                      >
                        Select a size
                      </p>

                      {productSelected && (
                        <p
                          className="
                            text-xs
                            font-medium
                            text-[#A47D21]
                            dark:text-[#D6B45A]
                          "
                        >
                          Size {selected.size} selected
                        </p>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {SIZES.map((size) => {
                        const isActive =
                          productSelected &&
                          selected.size === size

                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() =>
                              handleSizeSelect(
                                product.id,
                                size
                              )
                            }
                            className={`
                              h-11
                              w-11
                              rounded-lg
                              border
                              text-sm
                              font-medium
                              transition-all
                              duration-200
                              ${
                                isActive
                                  ? 'border-black bg-black text-white shadow-md'
                                  : 'border-slate-200 bg-white text-slate-700 hover:border-[#C49A3A] hover:bg-[#F7F0DF] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#C49A3A] dark:hover:bg-slate-700'
                              }
                            `}
                          >
                            {size}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* =====================================================
            SELECTED SHOE / ORDER SECTION

            SIZE CLICK NOW SCROLLS HERE + SLIDE ANIMATION
        ===================================================== */}

        {selectedProduct && (
          <section
            id="selected-shoe-section"
            key={`${selectedProduct.id}-${selected.size}`}
            className="
              selection-slide-up
              mt-12
              scroll-mt-24
            "
          >
            <div
              className="
                mx-auto
                max-w-4xl
                overflow-hidden
                rounded-3xl
                border-2
                border-[#C49A3A]
                bg-white
                shadow-xl
                dark:border-[#C49A3A]
                dark:bg-slate-800
              "
            >
              <div
                className="
                  border-b
                  border-[#C49A3A]/20
                  bg-[#F7F0DF]
                  px-6
                  py-4
                  dark:bg-slate-700
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#A47D21]
                    dark:text-[#D6B45A]
                  "
                >
                  Your Selection
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-extrabold
                    text-black
                    dark:text-white
                  "
                >
                  Ready to order?
                </h2>
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-6
                  p-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  md:p-8
                "
              >
                {/* SELECTED PRODUCT */}

                <div className="flex items-center gap-5">
                  <div
                    className="
                      h-24
                      w-24
                      flex-shrink-0
                      overflow-hidden
                      rounded-2xl
                      bg-[#F5F5F5]
                      dark:bg-slate-700
                    "
                  >
                    <img
                      src={selectedProduct.img}
                      alt={selectedProduct.name}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      {selectedProduct.brand}
                    </p>

                    <h3
                      className="
                        mt-1
                        text-lg
                        font-bold
                        text-black
                        dark:text-white
                      "
                    >
                      {selectedProduct.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {selectedProduct.audience} • Size{' '}
                      {selected.size}
                    </p>

                    <p
                      className="
                        mt-1
                        font-semibold
                        text-black
                        dark:text-white
                      "
                    >
                      ${selectedProduct.price}
                    </p>
                  </div>
                </div>

                {/* ACTION BUTTONS */}

                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    sm:min-w-[180px]
                  "
                >
                  <button
                    type="button"
                    onClick={handleOrder}
                    className="
                      w-full
                      rounded-full
                      bg-[#C49A3A]
                      px-7
                      py-3.5
                      text-sm
                      font-bold
                      text-black
                      shadow-md
                      transition-all
                      duration-200
                      hover:bg-[#b48a2e]
                      hover:shadow-lg
                    "
                  >
                    Order Now
                  </button>

                  <button
                    type="button"
                    onClick={handleChangeShoe}
                    className="
                      w-full
                      rounded-full
                      border
                      border-slate-300
                      bg-white
                      px-7
                      py-3
                      text-sm
                      font-medium
                      text-black
                      transition-all
                      duration-200
                      hover:border-[#C49A3A]
                      hover:bg-[#F7F0DF]
                      dark:border-slate-600
                      dark:bg-slate-800
                      dark:text-white
                      dark:hover:border-[#C49A3A]
                    "
                  >
                    Change Shoe
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {products.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold text-black dark:text-white">
              No products found
            </p>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Please select another category.
            </p>
          </div>
        )}

        {/* =====================================================
            STRYDE PROMISE
        ===================================================== */}

        <section className="mt-20">
          <div
            className="
              rounded-3xl
              border
              border-slate-300/60
              bg-white/70
              px-6
              py-10
              backdrop-blur-sm
              dark:border-slate-700/60
              dark:bg-slate-800/50
              md:px-12
              md:py-12
            "
          >
            <div
              className="
                mb-8
                flex
                flex-col
                gap-2
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#C49A3A]
                  "
                >
                  The Stryde Promise
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-extrabold
                    text-black
                    dark:text-white
                    md:text-3xl
                  "
                >
                  Buy with nothing to lose
                </h2>
              </div>

              <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
                Every pair ships with the same four guarantees — no fine print,
                no fuss.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                divide-y
                divide-slate-300/60
                dark:divide-slate-700/60
                sm:grid-cols-2
                sm:divide-x
                sm:divide-y-0
                lg:grid-cols-4
              "
            >
              {PROMISE_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="
                    px-0
                    py-6
                    first:pt-0
                    sm:px-6
                    sm:py-0
                  "
                >
                  <p className="text-3xl font-extrabold text-black dark:text-white">
                    {item.stat}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      uppercase
                      tracking-wide
                      text-[#A47D21]
                      dark:text-[#D6B45A]
                    "
                  >
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR CRAFT
        ===================================================== */}

        <section className="mt-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#C49A3A]
                "
              >
                Since 2014
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-black
                  dark:text-white
                  md:text-4xl
                "
              >
                Built by people who actually walk to work
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                STRYDE started in a two-person workshop testing soles on the
                same cracked pavement every single day. That habit never left
                us — every prototype still does a month on real streets before
                it earns a size chart. It's slower than lab testing, but it's
                why our reviews talk about mile 20, not just mile one.
              </p>

              <div className="mt-8 flex gap-10">
                <div>
                  <p className="text-2xl font-extrabold text-black dark:text-white">
                    180+
                  </p>

                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Street tests per design
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-black dark:text-white">
                    11
                  </p>

                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Countries we ship to
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-black dark:text-white">
                    9 yrs
                  </p>

                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Average founder's own pair lasted
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-black">
              <img
                src={menSport1}
                alt="A pair of STRYDE shoes being tested outdoors"
                className="
                  h-72
                  w-full
                  object-cover
                  opacity-90
                  transition-transform
                  duration-700
                  hover:scale-105
                  md:h-96
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/80
                  to-transparent
                  p-6
                "
              >
                <p className="text-sm font-medium text-white/90">
                  "We don't ship a shoe until it's failed on our own feet
                  first."
                </p>

                <p className="mt-1 text-xs uppercase tracking-wide text-white/60">
                  — STRYDE Design Team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            THE STRYDE STANDARD
        ===================================================== */}

        <section className="mt-20">
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-[#C49A3A]/30
              bg-[#F5EAD2]
              px-6
              py-12
              md:px-14
              md:py-14
              dark:border-[#C49A3A]/20
              dark:bg-[#252B2A]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-12
                lg:grid-cols-[0.9fr_1.5fr]
                lg:items-center
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#A47D21]
                    dark:text-[#D6B45A]
                  "
                >
                  The STRYDE Standard
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-extrabold
                    leading-tight
                    text-[#252525]
                    dark:text-white
                    md:text-5xl
                  "
                >
                  Designed around
                  <span className="block text-[#A47D21] dark:text-[#D6B45A]">
                    real life.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-lg
                    text-sm
                    leading-7
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  We believe a great shoe should disappear into your day.
                  No unnecessary details. No complicated choices. Just comfort,
                  confidence and thoughtful design from the first step to the
                  last.
                </p>

                <button
                  type="button"
                  onClick={scrollToGrid}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#A47D21]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-[#7C5C16]
                    transition-all
                    duration-200
                    hover:bg-[#A47D21]
                    hover:text-white
                    dark:border-[#D6B45A]
                    dark:text-[#D6B45A]
                    dark:hover:bg-[#D6B45A]
                    dark:hover:text-black
                  "
                >
                  Explore the collection
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div>
                <div className="border-t border-[#A47D21]/30 dark:border-white/20">

                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      border-b
                      border-[#A47D21]/30
                      py-6
                      dark:border-white/20
                      sm:flex-row
                      sm:items-start
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-bold
                        text-[#A47D21]
                        dark:text-[#D6B45A]
                        sm:w-12
                      "
                    >
                      01
                    </span>

                    <div>
                      <h3 className="text-lg font-bold text-[#252525] dark:text-white">
                        Comfort first
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Cushioning and fit are tested for everyday movement,
                        not just the first five minutes in a showroom.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      border-b
                      border-[#A47D21]/30
                      py-6
                      dark:border-white/20
                      sm:flex-row
                      sm:items-start
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-bold
                        text-[#A47D21]
                        dark:text-[#D6B45A]
                        sm:w-12
                      "
                    >
                      02
                    </span>

                    <div>
                      <h3 className="text-lg font-bold text-[#252525] dark:text-white">
                        Style that lasts
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Clean silhouettes and versatile colours make each pair
                        easy to wear across different parts of your day.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      py-6
                      sm:flex-row
                      sm:items-start
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-bold
                        text-[#A47D21]
                        dark:text-[#D6B45A]
                        sm:w-12
                      "
                    >
                      03
                    </span>

                    <div>
                      <h3 className="text-lg font-bold text-[#252525] dark:text-white">
                        Made to keep moving
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        From morning commutes to weekend plans, STRYDE is built
                        to keep pace with whatever your day brings.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TESTIMONIAL
        ===================================================== */}

        <section className="mt-16">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[#28312F]
              px-6
              py-14
              text-center
              md:px-16
              md:py-20
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-40
                w-40
                rounded-full
                bg-[#C49A3A]/20
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-10
                -right-10
                h-40
                w-40
                rounded-full
                bg-[#C49A3A]/10
                blur-3xl
              "
            />

            <svg
              className="mx-auto mb-6 h-10 w-10 text-[#C49A3A]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 6C4.87 8.1 3.5 10.85 3.5 14.2c0 3.15 1.9 5.3 4.35 5.3 2.15 0 3.7-1.65 3.7-3.7 0-1.9-1.3-3.35-3.05-3.6-.2-.03-.35-.03-.5-.03.35-1.9 1.95-3.5 3.85-4.35L10.4 6c-1.1.4-2.3 1-3.23 0zm10.1 0c-2.3 2.1-3.67 4.85-3.67 8.2 0 3.15 1.9 5.3 4.35 5.3 2.15 0 3.7-1.65 3.7-3.7 0-1.9-1.3-3.35-3.05-3.6-.2-.03-.35-.03-.5-.03.35-1.9 1.95-3.5 3.85-4.35L20.5 6c-1.1.4-2.3 1-3.23 0z" />
            </svg>

            <p
              className="
                mx-auto
                max-w-2xl
                text-lg
                font-medium
                leading-8
                text-white
                md:text-2xl
              "
            >
              {TESTIMONIAL.quote}
            </p>

            <p className="mt-6 text-sm font-semibold text-white">
              {TESTIMONIAL.name}
            </p>

            <p className="text-xs uppercase tracking-wide text-white/50">
              {TESTIMONIAL.role}
            </p>
          </div>
        </section>

        {/* =====================================================
            NEWSLETTER
        ===================================================== */}

        <section
          ref={newsletterRef}
          className="mb-4 mt-16 scroll-mt-6"
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-6
              rounded-3xl
              border
              border-[#C49A3A]/40
              bg-[#F7F0DF]
              px-6
              py-10
              dark:border-[#C49A3A]/20
              dark:bg-slate-800
              md:flex-row
              md:px-12
            "
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-extrabold text-black dark:text-white">
                Get first pick of new drops
              </h2>

              <p
                className="
                  mt-2
                  max-w-md
                  text-sm
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Join the list and we'll email you 48 hours before a new
                colorway goes live — plus a 10% code the day you sign up.
              </p>
            </div>

            {subscribed ? (
              <p
                className="
                  rounded-full
                  bg-[#28312F]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                You're on the list. Watch your inbox.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="
                  flex
                  w-full
                  max-w-md
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="
                    w-full
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    px-5
                    py-3
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-200
                    focus:border-[#C49A3A]
                    dark:border-slate-600
                    dark:bg-slate-900
                    dark:text-white
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    whitespace-nowrap
                    rounded-full
                    bg-[#28312F]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:bg-[#3A4542]
                    sm:w-auto
                  "
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      {/* =====================================================
          ORDER POPUP
      ===================================================== */}

      {showOrderPopup && selectedProduct && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeOrderPopup()
            }
          }}
        >
          <div
            className="
              relative
              w-full
              max-w-sm
              rounded-2xl
              bg-white
              p-6
              text-center
              shadow-2xl
              dark:bg-slate-800
            "
          >
            <div
              className="
                mx-auto
                mb-4
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#C49A3A]/15
                text-[#C49A3A]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-black dark:text-white">
              Your order is selected
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {selectedProduct.audience} • {selectedProduct.brand}{' '}
              {selectedProduct.name}
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Size {selected.size} • ${selectedProduct.price}
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={closeOrderPopup}
                className="
                  w-full
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-200
                  hover:border-[#C49A3A]
                  hover:bg-[#F7F0DF]
                  dark:border-slate-600
                  dark:bg-slate-800
                  dark:text-white
                  dark:hover:border-[#C49A3A]
                  dark:hover:bg-slate-700
                  sm:w-auto
                "
              >
                Keep Browsing
              </button>

              <button
                type="button"
                onClick={handleDone}
                className="
                  w-full
                  rounded-full
                  bg-[#28312F]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#3A4542]
                  sm:w-auto
                "
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}