import { useState } from 'react'

/* ---------- Kids images ---------- */
import kidsCasual1 from '../images/kids causal 1.jpg'
import kidsCasual2 from '../images/kids causal 2.webp'
import kidsCasual3 from '../images/kids causal 3.avif'

import kidsFormal1 from '../images/kids formal1.jpg'
import kidsFormal2 from '../images/kids formal 2.webp'
import kidsFormal3 from '../images/kids formal 3.jfif'

import kidsSport1 from '../images/kids sports 1.webp'
import kidsSport2 from '../images/kids sports 2.webp'
import kidsSport3 from '../images/kids sport 3.avif'

/* ---------- Men images ---------- */
import menCasual1 from '../images/men causal 1.webp'
import menCasual2 from '../images/men causal 2.jpg'
import menCasual3 from '../images/men causal 3.webp'

import menFormal1 from '../images/men formal 1.jpg'
import menFormal2 from '../images/men formal 2.jpg'
import menFormal3 from '../images/men formal 3.jpg'

import menSport1 from '../images/men sport 1.jpg'
import menSport2 from '../images/men sports 2.webp'
import menSport3 from '../images/men sports 3.jpg'

/* ---------- Women images ---------- */
import womenCasual1 from '../images/women causal 1.jpg'
import womenCasual2 from '../images/women causal 2.jpg'
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
   CATEGORY COMPONENT
========================================================= */

export default function Category() {
  const [type, setType] = useState('casual')
  const [selected, setSelected] = useState(null)
  const [showOrderPopup, setShowOrderPopup] = useState(false)

  const products = PRODUCTS_BY_TYPE[type] || []

  const selectedProduct = selected
    ? products.find((product) => product.id === selected.id)
    : null

  /* =========================================================
     CHANGE TYPE
  ========================================================= */

  const handleTypeChange = (nextType) => {
    setType(nextType)
    setSelected(null)
    setShowOrderPopup(false)
  }

  /* =========================================================
     SELECT SIZE
  ========================================================= */

  const handleSizeSelect = (productId, size) => {
    setSelected({
      id: productId,
      size,
    })
  }

  /* =========================================================
     CHANGE SHOE
  ========================================================= */

  const handleChangeShoe = () => {
    setSelected(null)
    setShowOrderPopup(false)
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

  return (
    <div
      className="
        min-h-screen
        bg-[#EDE7DA]
        px-4
        py-8
        transition-colors
        duration-300
        dark:bg-navy-dark
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="mb-10 text-center">

        <p
          className="
            mb-3
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#C49A3A]
            md:text-sm
          "
        >
          STRYDE COLLECTION
        </p>

        <h1
          className="
            text-3xl
            font-extrabold
            tracking-tight
            text-black
            md:text-5xl
            dark:text-white
          "
        >
          Find Your Perfect Pair
        </h1>

        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            text-sm
            leading-6
            text-slate-600
            md:text-base
            dark:text-slate-400
          "
        >
          Choose a style and explore men's, women's and kids' shoes together.
        </p>

      </div>

      {/* =====================================================
          TYPE TABS
      ===================================================== */}

      <div className="mb-10">

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
                      ? `
                        bg-black
                        text-white
                        shadow-md
                        hover:bg-slate-800
                      `
                      : `
                        border
                        border-slate-200
                        bg-white
                        text-slate-700
                        hover:border-[#C49A3A]
                        hover:bg-[#F7F0DF]
                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:hover:border-[#C49A3A]
                        dark:hover:bg-slate-700
                      `
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
          SELECTED SHOE BANNER
      ===================================================== */}

      {selectedProduct && (
        <div
          className="
            mb-8
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-slate-300
            bg-white/80
            px-5
            py-4
            shadow-sm
            backdrop-blur-sm
            dark:border-slate-700
            dark:bg-slate-800/80
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>
            <p className="font-semibold text-black dark:text-white">
              Shoe selected
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {selectedProduct.audience} • {selectedProduct.brand}{' '}
              {selectedProduct.name} • Size {selected.size}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">

            <button
              type="button"
              onClick={handleChangeShoe}
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
              Change Shoe
            </button>

            <button
              type="button"
              onClick={handleOrder}
              className="
                w-full
                rounded-full
                bg-[#C49A3A]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-200
                hover:bg-[#b48a2e]
                sm:w-auto
              "
            >
              Order Now
            </button>

          </div>

        </div>
      )}

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <div
        className={`
          grid
          gap-8
          ${
            selectedProduct
              ? 'grid-cols-1'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }
        `}
      >

        {(selectedProduct ? [selectedProduct] : products).map((product) => {

          const productSelected =
            selected && selected.id === product.id

          return (
            <div
              key={product.id}
              className={`
                ${
                  selectedProduct
                    ? 'mx-auto w-full max-w-lg'
                    : 'w-full'
                }
              `}
            >

              {/* =================================================
                  PRODUCT IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-md
                  dark:bg-slate-800
                "
              >

                {/* Full-area shoe image */}

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

                {/* Dark overlay for readability */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/5
                  "
                />

                {/* Audience badge */}

                <span
                  className="
                    absolute
                    right-4
                    top-4
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

                {/* Golden product tag */}

                {product.tag && (
                  <span
                    className="
                      absolute
                      left-4
                      top-4
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

              {/* =================================================
                  PRODUCT DETAILS
              ================================================= */}

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

                    <h2
                      className="
                        mt-1
                        font-semibold
                        text-black
                        dark:text-white
                      "
                    >
                      {product.name}
                    </h2>

                  </div>

                  <p
                    className="
                      whitespace-nowrap
                      font-semibold
                      text-black
                      dark:text-white
                    "
                  >
                    ${product.price}
                  </p>

                </div>

                {/* =================================================
                    SIZE SECTION
                ================================================= */}

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

                  {/* Size buttons */}

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
                            handleSizeSelect(product.id, size)
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
                                ? `
                                  border-black
                                  bg-black
                                  text-white
                                  shadow-md
                                `
                                : `
                                  border-slate-200
                                  bg-white
                                  text-slate-700
                                  hover:border-[#C49A3A]
                                  hover:bg-[#F7F0DF]
                                  dark:border-slate-700
                                  dark:bg-slate-800
                                  dark:text-slate-200
                                  dark:hover:border-[#C49A3A]
                                  dark:hover:bg-slate-700
                                `
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
          EMPTY STATE
      ===================================================== */}

      {products.length === 0 && (
        <div className="py-20 text-center">

          <p
            className="
              text-lg
              font-semibold
              text-black
              dark:text-white
            "
          >
            No products found
          </p>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Please select another category.
          </p>

        </div>
      )}

      {/* =====================================================
          ORDER CONFIRMATION POPUP
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

            {/* Success icon */}

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
                onClick={closeOrderPopup}
                className="
                  w-full
                  rounded-full
                  bg-black
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-slate-800
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