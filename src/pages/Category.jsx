import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/* =========================================================
   KIDS IMAGES
========================================================= */

import kidsCasual1 from '../images/kids causal 1.jpg'
import kidsCasual2 from '../images/kids causal 2.webp'
import kidsCasual3 from '../images/kids causal 3.avif'
import kidsCasual4 from '../images/kids causal 4.avif'

import kidsFormal1 from '../images/kids formal1.jpg'
import kidsFormal2 from '../images/kids formal 2.webp'
import kidsFormal3 from '../images/kids formal 3.jfif'
import kidsFormal4 from '../images/kids formal 4.jpg'

import kidsSport1 from '../images/kids sports 1.webp'
import kidsSport2 from '../images/kids sports 2.webp'
import kidsSport3 from '../images/kids sport 3.avif'
import kidsSport4 from '../images/kids sport 4.webp'

/* =========================================================
   MEN IMAGES
========================================================= */

import menCasual1 from '../images/men causal 1.webp'
import menCasual2 from '../images/men causal 2.jpg'
import menCasual3 from '../images/men causal 3.webp'
import menCasual4 from '../images/men causal 4.jpg'

import menFormal1 from '../images/men formal 1.jpg'
import menFormal2 from '../images/men formal 2.jpg'
import menFormal3 from '../images/men formal 3.jpg'
import menFormal4 from '../images/men formal 4.webp'

import menSport1 from '../images/men sport 1.jpg'
import menSport2 from '../images/men sports 2.webp'
import menSport4 from '../images/men sport 4.jpeg'

/* =========================================================
   WOMEN IMAGES
========================================================= */

import womenCasual1 from '../images/women causal 1.jpg'
import womenCasual2 from '../images/women causal 2.jpg'
import womenCasual3 from '../images/womens causal 3.webp'
import womenCasual4 from '../images/women causal 4.avif'

import womenFormal1 from '../images/women formal 1.jpg'
import womenFormal2 from '../images/women formal 2.webp'
import womenFormal3 from '../images/women formal 3.avif'
import womenFormal4 from '../images/women formal 4.webp'

import womenSport1 from '../images/women sport 1.jpg'
import womenSport2 from '../images/women sport 2.jpg'
import womenSport3 from '../images/women sport 3.jpg'
import womenSport4 from '../images/women-sport-4.webp'

/* =========================================================
   SIZES
========================================================= */

const MEN_WOMEN_SIZES = [10, 11, 12]
const KIDS_SIZES = [6, 8, 9]

/* =========================================================
   STYLE TABS
========================================================= */

const TYPES = [
  {
    key: 'casual',
    label: 'Casual',
    icon: (
      <path d="M3 16c1.5-3 3-4 5-4 1.6 0 2 1 3.5 1s2.4-1.2 4-1.2c2.4 0 3.7 1.7 5.5 2.7V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z" />
    ),
  },
  {
    key: 'formal',
    label: 'Formal',
    icon: (
      <path d="M2.5 17.5c2-4.5 4-6.5 7-6.8.9-.1 1.3.8 2.2.9 2 .3 4-1.6 6.3-1.1 2 .4 3 2.4 3.5 4.5V18a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2v-.5Z" />
    ),
  },
  {
    key: 'sports',
    label: 'Sports',
    icon: (
      <path d="M2.5 15.5 6 12l2 1.5L11 10l2.5 2L17 8l4 3.5V18a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2v-2.5Z" />
    ),
  },
]

/* =========================================================
   AUDIENCES
========================================================= */

const AUDIENCES = ['Men', 'Women', 'Kids']

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
      id: 'men-casual-4',
      img: menCasual4,
      audience: 'Men',
      brand: 'LOOP',
      name: 'Urban Classic',
      price: 70,
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
      img: womenCasual2,
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
      id: 'women-casual-4',
      img: womenCasual4,
      audience: 'Women',
      brand: 'STRIDER',
      name: 'Daily Runner',
      price: 69,
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
    {
      id: 'kids-casual-4',
      img: kidsCasual4,
      audience: 'Kids',
      brand: 'LITTLE STRIDE',
      name: 'Happy Runner',
      price: 44,
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
      id: 'men-formal-4',
      img: menFormal4,
      audience: 'Men',
      brand: 'OXFORD & CO',
      name: 'Executive Loafer',
      price: 108,
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
      id: 'women-formal-4',
      img: womenFormal4,
      audience: 'Women',
      brand: 'HEIRLOOM',
      name: 'Classic Court',
      price: 102,
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
    {
      id: 'kids-formal-4',
      img: kidsFormal4,
      audience: 'Kids',
      brand: 'LITTLE OXFORD',
      name: 'Smart Loafer',
      price: 60,
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
      img: menSport1,
      audience: 'Men',
      brand: 'SURGE',
      name: 'Sprint Knit',
      price: 76,
      tag: 'New',
    },
    {
      id: 'men-sport-4',
      img: menSport4,
      audience: 'Men',
      brand: 'SURGE',
      name: 'Active Runner',
      price: 84,
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
      id: 'women-sport-4',
      img: womenSport4,
      audience: 'Women',
      brand: 'PACE',
      name: 'Motion Trainer',
      price: 80,
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
    {
      id: 'kids-sport-4',
      img: kidsSport4,
      audience: 'Kids',
      brand: 'SURGE KIDS',
      name: 'Active Bounce',
      price: 50,
    },
  ],
}

/* =========================================================
   EXTRA CONTENT
========================================================= */

const TESTIMONIAL = {
  quote:
    'I run 30km a week and switch shoes constantly — the PACE Trail Runner is the first pair that still feels new after three months. Half my running club has switched over.',
  name: 'Meera K.',
  role: 'Marathon Runner, 4x STRYDE customer',
}

const HERO_STATS = [
  { value: '12K+', label: 'Pairs Shipped' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '11', label: 'Countries Served' },
]

const STANDARD_STEPS = [
  {
    title: 'Comfort first',
    copy:
      'Cushioning and fit are tested for everyday movement, not just the first five minutes in a showroom.',
  },
  {
    title: 'Style that lasts',
    copy:
      'Clean silhouettes and versatile colours make each pair easy to wear across different parts of your day.',
  },
  {
    title: 'Daily Comfort',
    copy:
      'From morning commutes to weekend plans, It is built to keep pace with whatever your day brings.',
  },
]

/* =========================================================
   SHARED CONTAINER
========================================================= */

const CONTAINER =
  'mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 lg:px-12'

/* =========================================================
   COMPONENT
========================================================= */

export default function Category() {
  const navigate = useNavigate()

  const [type, setType] = useState('casual')
  const [audience, setAudience] = useState('Men')
  const [selected, setSelected] = useState(null)
  const [showOrderPopup, setShowOrderPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [trayVisible, setTrayVisible] = useState(false)

  const gridRef = useRef(null)
  const newsletterRef = useRef(null)

  const allProducts = PRODUCTS_BY_TYPE[type] || []

  const products = allProducts.filter(
    (product) => product.audience === audience
  )

  const sizes =
    audience === 'Kids'
      ? KIDS_SIZES
      : MEN_WOMEN_SIZES

  const selectedProduct = selected
    ? allProducts.find((product) => product.id === selected.id)
    : null

  /* =========================================================
     SELECTED PRODUCT TRAY
  ========================================================= */

  useEffect(() => {
    if (selectedProduct) {
      const t = setTimeout(() => setTrayVisible(true), 20)

      return () => clearTimeout(t)
    }

    setTrayVisible(false)
  }, [selectedProduct])

  /* =========================================================
     TYPE / AUDIENCE CHANGE
  ========================================================= */

  const handleTypeChange = (nextType) => {
    setType(nextType)
    setShowOrderPopup(false)
    setSelected(null)
  }

  const handleAudienceChange = (nextAudience) => {
    setAudience(nextAudience)
    setShowOrderPopup(false)
    setSelected(null)
  }

  /* =========================================================
     SIZE SELECT
  ========================================================= */

  const handleSizeSelect = (productId, size) => {
    setSelected({
      id: productId,
      size,
    })

    setShowOrderPopup(false)
  }

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

  const handleOrder = () => setShowOrderPopup(true)

  const closeOrderPopup = () => setShowOrderPopup(false)

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
    <div className="min-h-screen overflow-x-hidden bg-[#EDE7DA] font-[Inter,ui-sans-serif,system-ui] text-[#1B1B18] transition-colors duration-300 dark:bg-navy-dark dark:text-white">

      {/* =====================================================
          FONTS + ANIMATIONS
      ===================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap');

        .font-display {
          font-family: 'Bebas Neue', 'Inter', sans-serif;
          letter-spacing: 0.01em;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.5s ease-out both;
        }

        @keyframes trayIn {
          0% {
            transform: translateY(110%);
          }

          100% {
            transform: translateY(0);
          }
        }

        .tray-in {
          animation: trayIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* =====================================================
           RESPONSIVE SAFETY
        ===================================================== */

        @media (max-width: 374px) {
          .category-style-button {
            padding-left: 0.55rem !important;
            padding-right: 0.55rem !important;
            font-size: 9px !important;
          }

          .category-style-button svg {
            width: 0.7rem !important;
            height: 0.7rem !important;
          }

          .audience-button {
            padding-left: 0.65rem !important;
            padding-right: 0.65rem !important;
            font-size: 8px !important;
          }
        }

        @media (min-width: 375px) and (max-width: 639px) {
          .category-style-button {
            padding-left: 0.7rem !important;
            padding-right: 0.7rem !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="relative flex min-h-[500px] w-full items-center bg-cover bg-center sm:min-h-[540px] md:min-h-[72vh] md:max-h-[820px] lg:min-h-[92vh]"
          style={{
            backgroundImage: `url(${menSport1})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div
            className={`relative z-10 py-16 sm:py-20 md:py-24 ${CONTAINER}`}
          >
            <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C49A3A]/50 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#D6B45A] backdrop-blur-sm sm:mb-5 sm:px-4 sm:text-[11px] sm:tracking-[0.32em]">
              New Season Arrivals
            </p>

            <h1 className="font-display max-w-3xl text-5xl font-normal uppercase leading-[0.95] text-white sm:text-7xl md:text-8xl">
              Step into
              <span className="block text-[#C49A3A]">
                Comfort.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
              From street-ready sneakers to boardroom-sharp formals —
              shoes for men, women and kids, tested on real streets
              before they ever reach yours.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row">
              <button
                type="button"
                onClick={scrollToGrid}
                className="w-full rounded-full bg-[#C49A3A] px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#b48a2e] hover:shadow-xl sm:w-auto sm:px-8"
              >
                Shop the Collection
              </button>

              <button
                type="button"
                onClick={scrollToNewsletter}
                className="w-full rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/20 sm:w-auto sm:px-8"
              >
                Get 10% Off First Order
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/15 pt-5 sm:mt-14 sm:gap-x-10 sm:pt-6">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-white sm:text-3xl md:text-4xl">
                    {stat.value}
                  </p>

                  <p className="text-[10px] uppercase tracking-wide text-white/60 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY BAR
          NOT STICKY
      ===================================================== */}

      <div className="relative z-30 border-b border-black/5 bg-[#EDE7DA]/90 backdrop-blur-md dark:border-white/5 dark:bg-navy-dark/90">
        <div
          className={`${CONTAINER} flex flex-col items-center gap-2.5 py-3 sm:gap-3 sm:py-4`}
        >

          {/* =================================================
              ROW 1 - CASUAL / FORMAL / SPORTS
              ALWAYS ONE ROW ON MOBILE
          ================================================= */}

          <div
            className="flex w-full flex-nowrap items-center justify-center gap-1 sm:gap-2"
            role="tablist"
            aria-label="Shoe style"
          >
            {TYPES.map((item) => {
              const isActive = type === item.key

              return (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTypeChange(item.key)}
                  className={`
                    category-style-button
                    flex shrink-0 items-center justify-center gap-1
                    rounded-xl border
                    px-2 py-1.5
                    text-[10px] font-semibold uppercase tracking-wide
                    transition-all duration-200
                    min-[375px]:px-2.5
                    min-[375px]:text-[10px]
                    sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm
                    ${
                      isActive
                        ? 'border-black bg-black text-white shadow-md dark:border-white dark:bg-white dark:text-black'
                        : 'border-black/15 bg-white/70 text-slate-700 hover:border-[#C49A3A] hover:bg-[#F7F0DF] dark:border-white/15 dark:bg-slate-800/70 dark:text-slate-200'
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 shrink-0 opacity-80 sm:h-4 sm:w-4"
                  >
                    {item.icon}
                  </svg>

                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* =================================================
              ROW 2 - MEN / WOMEN / KIDS
              CENTERED ON ALL SCREEN SIZES
          ================================================= */}

          <div className="flex w-full items-center justify-center">
            <div className="flex items-center justify-center gap-0.5 rounded-full border border-black/10 bg-white/70 p-0.5 dark:border-white/10 dark:bg-slate-800/70">

              {AUDIENCES.map((a) => {
                const isActive = audience === a

                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => handleAudienceChange(a)}
                    className={`
                      audience-button
                      rounded-full
                      px-2 py-1
                      text-[8px] font-semibold uppercase tracking-wide
                      transition-all duration-200
                      min-[375px]:px-2.5
                      min-[375px]:text-[9px]
                      sm:px-4 sm:py-1.5 sm:text-xs
                      ${
                        isActive
                          ? 'bg-[#C49A3A] text-black shadow-sm'
                          : 'text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
                      }
                    `}
                  >
                    {a}
                  </button>
                )
              })}

            </div>
          </div>

        </div>
      </div>

      {/* =====================================================
          PAGE BODY
      ===================================================== */}

      <div className={`${CONTAINER} py-8 sm:py-10 md:py-14`}>

        <div
          ref={gridRef}
          className="mb-7 scroll-mt-20 text-center sm:mb-8"
        >
          <div className="flex flex-col items-center gap-3">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49A3A] sm:text-xs sm:tracking-[0.3em]">
                STRYDE Collection
              </p>

              <h2 className="font-display text-3xl uppercase text-black sm:text-4xl md:text-5xl dark:text-white">
                {type} · {audience}
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 dark:text-slate-400">
              {products.length}{' '}
              {products.length === 1 ? 'pair' : 'pairs'} in this
              view. Pick a size to add it to your fitting tray.
            </p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
              const productSelected =
                selected && selected.id === product.id

              return (
                <div
                  key={product.id}
                  className={`
                    group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-slate-800
                    ${
                      productSelected
                        ? 'border-[#C49A3A] ring-2 ring-[#C49A3A]/40'
                        : 'border-black/5 dark:border-white/5'
                    }
                  `}
                >
                  <div className="relative aspect-square overflow-hidden bg-[#F5F1E6] dark:bg-slate-700">
                    <img
                      src={product.img}
                      alt={`${product.audience} ${product.brand} ${product.name}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute right-2.5 top-2.5 z-10 rounded-full bg-black/85 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-white sm:right-3 sm:top-3 sm:px-2.5 sm:text-[10px]">
                      {product.audience}
                    </span>

                    {product.tag && (
                      <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-[#C49A3A] px-2.5 py-1 text-[10px] font-bold text-black shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-[11px]">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-[10px] uppercase tracking-[0.1em] text-slate-400 sm:text-[11px] sm:tracking-[0.12em] dark:text-slate-500">
                          {product.brand}
                        </p>

                        <h3 className="mt-1 truncate text-sm font-semibold text-black sm:text-base dark:text-white">
                          {product.name}
                        </h3>
                      </div>

                      <p className="whitespace-nowrap text-sm font-semibold text-black sm:text-base dark:text-white">
                        ${product.price}
                      </p>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[10px] uppercase tracking-wide text-slate-400 sm:text-[11px] dark:text-slate-500">
                          Size
                        </p>

                        {productSelected && (
                          <p className="truncate text-[10px] font-medium text-[#A47D21] sm:text-[11px] dark:text-[#D6B45A]">
                            {selected.size} selected
                          </p>
                        )}
                      </div>

                      <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2">
                        {sizes.map((size) => {
                          const isActive =
                            productSelected &&
                            selected.size === size

                          return (
                            <button
                              key={size}
                              type="button"
                              onClick={() =>
                                handleSizeSelect(product.id, size)
                              }
                              className={`
                                h-9 rounded-lg border text-xs font-medium transition-all duration-200 sm:h-10 sm:text-sm
                                ${
                                  isActive
                                    ? 'border-black bg-black text-white shadow-md dark:border-white dark:bg-white dark:text-black'
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
        ) : (
          <div className="rounded-2xl border border-dashed border-black/15 py-16 text-center sm:py-20 dark:border-white/15">
            <p className="text-lg font-semibold text-black dark:text-white">
              No products found
            </p>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try a different style or audience filter.
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          OUR CRAFT
      ===================================================== */}

      <section className={`${CONTAINER} mt-12 sm:mt-16`}>
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49A3A] sm:text-xs sm:tracking-[0.3em]">
              Since 2014
            </p>

            <h2 className="font-display mt-3 text-3xl uppercase leading-[0.95] text-black sm:text-4xl md:text-5xl dark:text-white">
              Built by people who actually walk to work
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-400">
              STRYDE started in a two-person workshop testing soles on
              the same cracked pavement every single day. That habit
              never left us — every prototype still does a month on
              real streets before it earns a size chart. It's slower
              than lab testing, but it's why our reviews talk about
              mile 20, not just mile one.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5 sm:mt-8 sm:gap-x-10">
              {[
                {
                  value: '180+',
                  label: 'Street tests per design',
                },
                {
                  value: '11',
                  label: 'Countries we ship to',
                },
                {
                  value: '9 yrs',
                  label: "Average founder's own pair lasted",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-black sm:text-3xl dark:text-white">
                    {stat.value}
                  </p>

                  <p className="max-w-[9rem] text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-black">
            <img
              src={menSport1}
              alt="A pair of STRYDE shoes being tested outdoors"
              className="h-64 w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 sm:h-72 md:h-96"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 sm:p-6">
              <p className="text-sm font-medium text-white/90">
                "We don't ship a shoe until it's failed on our own feet first."
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-wide text-white/60 sm:text-xs">
                — STRYDE Design Team
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          THE FINER DETAILS
      ===================================================== */}

      <section className={`${CONTAINER} mt-12 sm:mt-16`}>
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">

          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border-4 border-[#C49A3A] p-2 shadow-lg shadow-black/10 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <img
              src={menFormal3}
              alt="Close-up of hand-finished STRYDE stitching and sole detail"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49A3A] sm:text-xs sm:tracking-[0.3em]">
              The Finer Details
            </p>

            <h2 className="font-display mt-3 text-3xl uppercase leading-[0.95] text-black sm:text-4xl md:text-5xl dark:text-white">
              Craft you can feel in every stitch
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-400">
              We believe a shoe should be as considered on the inside
              as it is on the outside. Every seam is hand-checked,
              every sole is heat-pressed for even flex, and every
              lace-hole is reinforced so it survives years of daily
              wear, not just one season.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-400">
              From the first cut of leather to the final polish, our
              finishing team inspects each pair by hand before it ever
              reaches a box. That's the difference between a shoe that
              looks good on day one and one that still holds up on day
              one thousand.
            </p>

            <button
              type="button"
              onClick={scrollToGrid}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#A47D21] px-5 py-2.5 text-sm font-semibold text-[#7C5C16] transition-all duration-200 hover:bg-[#A47D21] hover:text-white sm:mt-7 sm:px-6 sm:py-3 dark:border-[#D6B45A] dark:text-[#D6B45A] dark:hover:bg-[#D6B45A] dark:hover:text-black"
            >
              See the collection
              <span className="text-lg">→</span>
            </button>
          </div>

        </div>
      </section>

      {/* =====================================================
          THE STRYDE STANDARD
      ===================================================== */}

      <section className={`${CONTAINER} mt-16 sm:mt-20`}>
        <div className="overflow-hidden rounded-[28px] border border-[#C49A3A]/30 bg-[#F5EAD2] px-5 py-10 sm:rounded-[32px] sm:px-6 sm:py-12 md:px-14 md:py-14 dark:border-[#C49A3A]/20 dark:bg-[#252B2A]">

          <div className="grid grid-cols-1 gap-9 sm:gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:items-center">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A47D21] sm:text-xs sm:tracking-[0.3em] dark:text-[#D6B45A]">
                The STRYDE Standard
              </p>

              <h2 className="font-display mt-4 text-4xl uppercase leading-[0.95] text-[#252525] sm:text-5xl dark:text-white">
                Designed around
                <span className="block text-[#A47D21] dark:text-[#D6B45A]">
                  real life.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:leading-7 dark:text-slate-300">
                We believe a great shoe should disappear into your day.
                No unnecessary details. No complicated choices. Just
                comfort, confidence and thoughtful design from the
                first step to the last.
              </p>

              <button
                type="button"
                onClick={scrollToGrid}
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#A47D21] px-5 py-2.5 text-sm font-semibold text-[#7C5C16] transition-all duration-200 hover:bg-[#A47D21] hover:text-white sm:mt-7 sm:px-6 sm:py-3 dark:border-[#D6B45A] dark:text-[#D6B45A] dark:hover:bg-[#D6B45A] dark:hover:text-black"
              >
                Explore the collection
                <span className="text-lg">→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">

              {STANDARD_STEPS.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[#A47D21]/25 bg-white/40 p-4 sm:p-5 dark:border-white/15 dark:bg-white/5"
                >
                  <h3
                    className="
                      text-base font-bold text-[#252525] sm:text-lg dark:text-white
                      sm:min-h-[56px]
                      sm:flex sm:items-start
                      lg:min-h-0
                      lg:flex-none
                    "
                  >
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {step.copy}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <section className={`${CONTAINER} mt-12 sm:mt-16`}>
        <div className="relative overflow-hidden rounded-3xl bg-[#28312F] px-5 py-12 text-center sm:px-6 sm:py-14 md:px-16 md:py-20">

          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#C49A3A]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#C49A3A]/10 blur-3xl" />

          <svg
            className="mx-auto mb-5 h-9 w-9 text-[#C49A3A] sm:mb-6 sm:h-10 sm:w-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.17 6C4.87 8.1 3.5 10.85 3.5 14.2c0 3.15 1.9 5.3 4.35 5.3 2.15 0 3.7-1.65 3.7-3.7 0-1.9-1.3-3.35-3.05-3.6-.2-.03-.35-.03-.5-.03.35-1.9 1.95-3.5 3.85-4.35L10.4 6c-1.1.4-2.3 1-3.23 0zm10.1 0c-2.3 2.1-3.67 4.85-3.67 8.2 0 3.15 1.9 5.3 4.35 5.3 2.15 0 3.7-1.65 3.7-3.7 0-1.9-1.3-3.35-3.05-3.6-.2-.03-.35-.03-.5-.03.35-1.9 1.95-3.5 3.85-4.35L20.5 6c-1.1.4-2.3 1-3.23 0z" />
          </svg>

          <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-white sm:text-lg sm:leading-8 md:text-2xl">
            {TESTIMONIAL.quote}
          </p>

          <p className="mt-5 text-sm font-semibold text-white sm:mt-6">
            {TESTIMONIAL.name}
          </p>

          <p className="text-[10px] uppercase tracking-wide text-white/50 sm:text-xs">
            {TESTIMONIAL.role}
          </p>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section
        ref={newsletterRef}
        className={`${CONTAINER} mt-12 scroll-mt-20 pb-20 sm:mt-16 sm:pb-24`}
      >
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#C49A3A]/40 bg-[#F7F0DF] px-5 py-8 sm:px-6 sm:py-10 md:flex-row md:px-12 dark:border-[#C49A3A]/20 dark:bg-slate-800">

          <div className="w-full text-center md:text-left">
            <h2 className="font-display text-2xl uppercase text-black sm:text-3xl dark:text-white">
              Get first pick of new drops
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
              Join the list and we'll email you 48 hours before a new
              colorway goes live — plus a 10% code the day you sign up.
            </p>
          </div>

          {subscribed ? (
            <p className="w-full rounded-full bg-[#28312F] px-6 py-3 text-center text-sm font-semibold text-white md:w-auto">
              You're on the list. Watch your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full min-w-0 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-[#C49A3A] dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />

              <button
                type="submit"
                className="w-full whitespace-nowrap rounded-full bg-[#28312F] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3A4542] sm:w-auto"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* =====================================================
          FITTING TRAY
      ===================================================== */}

      {selectedProduct && (
        <div
          className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-slate-900/95 ${
            trayVisible
              ? 'tray-in'
              : 'translate-y-full'
          }`}
        >
          <div
            className={`${CONTAINER} flex flex-col gap-3 py-3 sm:gap-4 sm:py-3.5`}
          >

            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-[#F5F5F5] sm:h-14 sm:w-14 dark:bg-slate-700">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] uppercase tracking-[0.1em] text-slate-400 sm:text-[11px] sm:tracking-[0.12em]">
                  {selectedProduct.brand}
                </p>

                <p className="truncate text-xs font-bold text-black sm:text-sm dark:text-white">
                  {selectedProduct.name}

                  <span className="ml-1 font-normal text-slate-500 sm:ml-2 dark:text-slate-400">
                    {selectedProduct.audience} · Size {selected.size} · $
                    {selectedProduct.price}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex w-full gap-2 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleChangeShoe}
                className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-[#C49A3A] hover:bg-[#F7F0DF] sm:flex-none sm:px-5 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              >
                Change
              </button>

              <button
                type="button"
                onClick={handleOrder}
                className="flex-1 rounded-full bg-[#C49A3A] px-5 py-2.5 text-sm font-bold text-black shadow-md transition-all duration-200 hover:bg-[#b48a2e] sm:flex-none sm:px-6"
              >
                Order Now
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =====================================================
          ORDER POPUP
      ===================================================== */}

      {showOrderPopup && selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeOrderPopup()
            }
          }}
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-5 text-center shadow-2xl sm:p-6 dark:bg-slate-800">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C49A3A]/15 text-[#C49A3A]">
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

            <p className="mt-2 break-words text-sm text-slate-500 dark:text-slate-400">
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
                className="w-full rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-[#C49A3A] hover:bg-[#F7F0DF] dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:border-[#C49A3A] dark:hover:bg-slate-700 sm:w-auto"
              >
                Keep Browsing
              </button>

              <button
                type="button"
                onClick={handleDone}
                className="w-full rounded-full bg-[#28312F] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3A4542] sm:w-auto"
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