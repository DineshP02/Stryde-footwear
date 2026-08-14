import { useEffect, useState } from 'react'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { Link, useLocation } from 'react-router-dom'

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  LanguageIcon,
  UserIcon,
  XCircleIcon,
  LockClosedIcon,
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

import Logo from './Logo.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { useDirection } from '../context/DirectionContext.jsx'

/* =========================================================
   NAVIGATION LINKS
========================================================= */

const NAV_LINKS = [
  { name: 'Blog', href: '/blog' },
  { name: 'Services', href: '/services' },
]

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const { dark, toggleDark } = useTheme()
  const { isRTL, toggleDir } = useDirection()
  const location = useLocation()

  const [showLogin, setShowLogin] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [resetSent, setResetSent] = useState(false)

  /* =========================================================
     SCROLL TO TOP WHEN PAGE CHANGES
========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname])

  /* =========================================================
     ACTIVE PAGES
========================================================= */

  const isAboutPage = location.pathname === '/about'

  const isCategoryPage = location.pathname === '/category'

  const isHomePage =
    location.pathname === '/' ||
    location.pathname === '/home-2'

  const isContactPage = location.pathname === '/contact'

  /* =========================================================
     DESKTOP ACTIVE CLASSES
========================================================= */

  const activeClasses = (isActive) =>
    isActive
      ? 'bg-cream text-navy dark:bg-white/5 dark:text-white'
      : 'text-navy hover:bg-cream dark:text-white dark:hover:bg-white/5'

  /* =========================================================
     MOBILE ACTIVE CLASSES
========================================================= */

  const mobileActiveClasses = (isActive) =>
    isActive
      ? 'bg-cream text-navy dark:bg-white/5 dark:text-white'
      : 'text-navy hover:bg-cream dark:text-white dark:hover:bg-white/5'

  /* =========================================================
     LOGIN
========================================================= */

  const openLogin = () => {
    setIsNewUser(false)
    setShowLogin(true)
    setShowForgotPassword(false)
    setShowPassword(false)
    setResetSent(false)
  }

  /* =========================================================
     SIGNUP
========================================================= */

  const openSignup = () => {
    setIsNewUser(true)
    setShowLogin(true)
    setShowForgotPassword(false)
    setShowPassword(false)
    setResetSent(false)
  }

  /* =========================================================
     CLOSE LOGIN
========================================================= */

  const closeLogin = () => {
    setShowLogin(false)
    setShowPassword(false)
  }

  /* =========================================================
     FORGOT PASSWORD
========================================================= */

  const openForgotPassword = () => {
    setShowLogin(false)
    setShowForgotPassword(true)
    setResetSent(false)
  }

  const closeForgotPassword = () => {
    setShowForgotPassword(false)
    setForgotEmail('')
    setResetSent(false)
  }

  const handleResetPassword = (e) => {
    e.preventDefault()

    if (!forgotEmail.trim()) return

    setResetSent(true)
  }

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="w-full"
    >

      {/* =====================================================
          MAIN NAVBAR

          IMPORTANT:
          FIXED NAVBAR — ALWAYS VISIBLE WHILE SCROLLING
      ===================================================== */}

      <Disclosure
        as="header"
        className="
          fixed
          inset-x-0
          top-0
          z-[9999]
          w-full
          border-b
          border-gray-200
          bg-white/95
          backdrop-blur
          dark:border-border-dark
          dark:bg-navy-dark/95
        "
      >

        {({ open, close }) => (
          <>

            {/* =================================================
                MAIN NAVBAR CONTAINER
            ================================================= */}

            <div
              className="
                section-container
                flex
                min-h-16
                items-center
                justify-between
                gap-2
                py-3
                sm:min-h-[72px]
                sm:py-4
              "
            >

              {/* =================================================
                  LOGO
              ================================================= */}

              <div className="min-w-0 shrink-0">
                <Link
                  to="/"
                  onClick={close}
                >
                  <Logo />
                </Link>
              </div>


              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">

                {/* HOME DROPDOWN */}

                <Menu
                  as="div"
                  className="relative"
                >

                  <MenuButton
                    className={`
                      flex
                      items-center
                      gap-1
                      whitespace-nowrap
                      rounded-full
                      px-3
                      py-2
                      text-sm
                      font-medium
                      transition
                      xl:px-4
                      ${activeClasses(isHomePage)}
                    `}
                  >

                    <span>Home</span>

                    <ChevronDownIcon className="h-4 w-4 shrink-0" />

                  </MenuButton>


                  <MenuItems
                    transition
                    className="
                      absolute
                      start-0
                      z-[10000]
                      mt-2
                      w-44
                      origin-top
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      p-1
                      shadow-lg
                      transition
                      duration-150
                      ease-out
                      data-closed:-translate-y-1
                      data-closed:opacity-0
                      dark:border-border-dark
                      dark:bg-surface-dark
                    "
                  >

                    {/* HOME 1 */}

                    <MenuItem>

                      <Link
                        to="/"
                        className={`
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          font-normal
                          data-focus:bg-cream
                          dark:data-focus:bg-white/5
                          ${
                            location.pathname === '/'
                              ? 'bg-cream font-semibold text-navy dark:bg-white/5 dark:text-white'
                              : 'text-navy dark:text-gray-200'
                          }
                        `}
                      >
                        Home 1
                      </Link>

                    </MenuItem>


                    {/* HOME 2 */}

                    <MenuItem>

                      <Link
                        to="/home-2"
                        className={`
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          font-normal
                          data-focus:bg-cream
                          dark:data-focus:bg-white/5
                          ${
                            location.pathname === '/home-2'
                              ? 'bg-cream font-semibold text-navy dark:bg-white/5 dark:text-white'
                              : 'text-navy dark:text-gray-200'
                          }
                        `}
                      >
                        Home 2
                      </Link>

                    </MenuItem>

                  </MenuItems>

                </Menu>


                {/* ABOUT */}

                <Link
                  to="/about"
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition
                    xl:px-4
                    ${activeClasses(isAboutPage)}
                  `}
                >
                  About Us
                </Link>


                {/* CATEGORY */}

                <Link
                  to="/category"
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition
                    xl:px-4
                    ${activeClasses(isCategoryPage)}
                  `}
                >
                  Category
                </Link>


                {/* BLOG + SERVICES */}

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`
                      whitespace-nowrap
                      rounded-full
                      px-3
                      py-2
                      text-sm
                      font-medium
                      transition
                      xl:px-4
                      ${activeClasses(
                        location.pathname === link.href
                      )}
                    `}
                  >
                    {link.name}
                  </Link>
                ))}


                {/* CONTACT */}

                <Link
                  to="/contact"
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition
                    xl:px-4
                    ${activeClasses(isContactPage)}
                  `}
                >
                  Contact
                </Link>

              </nav>


              {/* =================================================
                  RIGHT SIDE ACTIONS
              ================================================= */}

              <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">

                {/* RTL / LTR */}

                <button
                  type="button"
                  onClick={toggleDir}
                  aria-label="Toggle right-to-left layout"
                  title={isRTL ? 'Switch to LTR' : 'Switch to RTL'}
                  className="
                    flex
                    h-10
                    items-center
                    gap-1
                    rounded-full
                    p-2
                    text-navy
                    transition
                    hover:bg-cream
                    dark:text-white
                    dark:hover:bg-white/5
                    sm:px-2.5
                  "
                >

                  <LanguageIcon className="h-5 w-5 shrink-0" />

                  <span className="hidden text-[11px] font-semibold uppercase sm:inline">
                    {isRTL ? 'RTL' : 'LTR'}
                  </span>

                </button>


                {/* DARK MODE */}

                <button
                  type="button"
                  onClick={toggleDark}
                  aria-label="Toggle dark mode"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    text-navy
                    transition
                    hover:bg-cream
                    dark:text-white
                    dark:hover:bg-white/5
                  "
                >

                  {dark ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}

                </button>


                {/* LOGIN */}

                <button
                  type="button"
                  onClick={openLogin}
                  className="
                    hidden
                    h-10
                    items-center
                    gap-2
                    rounded-full
                    bg-navy
                    px-4
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-navy/90
                    hover:shadow-lg
                    dark:bg-yellow-400
                    dark:text-navy
                    dark:hover:bg-yellow-300
                    lg:inline-flex
                    xl:px-5
                  "
                >

                  <UserIcon className="h-4 w-4 shrink-0" />

                  <span>Login</span>

                </button>


                {/* MOBILE MENU */}

                <DisclosureButton
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    text-navy
                    transition
                    hover:bg-cream
                    dark:text-white
                    dark:hover:bg-white/5
                    lg:hidden
                  "
                  aria-label={
                    open ? 'Close menu' : 'Open menu'
                  }
                >

                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}

                </DisclosureButton>

              </div>

            </div>


            {/* =====================================================
                MOBILE / TABLET MENU
            ===================================================== */}

            <DisclosurePanel
              transition
              className="
                overflow-hidden
                border-t
                border-gray-200
                bg-white
                transition
                duration-200
                ease-out
                data-closed:-translate-y-2
                data-closed:opacity-0
                dark:border-border-dark
                dark:bg-navy-dark
                lg:hidden
              "
            >

              <div
                className="
                  section-container
                  flex
                  flex-col
                  gap-1
                  px-4
                  py-4
                  sm:px-6
                "
              >

                <Link
                  to="/"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(
                      location.pathname === '/'
                    )}
                  `}
                >
                  Home 1
                </Link>


                <Link
                  to="/home-2"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(
                      location.pathname === '/home-2'
                    )}
                  `}
                >
                  Home 2
                </Link>


                <Link
                  to="/about"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(isAboutPage)}
                  `}
                >
                  About Us
                </Link>


                <Link
                  to="/category"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(isCategoryPage)}
                  `}
                >
                  Category
                </Link>


                <Link
                  to="/blog"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(
                      location.pathname === '/blog'
                    )}
                  `}
                >
                  Blog
                </Link>


                <Link
                  to="/services"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(
                      location.pathname === '/services'
                    )}
                  `}
                >
                  Services
                </Link>


                <Link
                  to="/contact"
                  onClick={close}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition
                    ${mobileActiveClasses(isContactPage)}
                  `}
                >
                  Contact
                </Link>


                {/* MOBILE LOGIN */}

                <button
                  type="button"
                  onClick={() => {
                    close()
                    openLogin()
                  }}
                  className="
                    mt-2
                    flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-navy
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-navy/90
                    dark:bg-yellow-400
                    dark:text-navy
                    dark:hover:bg-yellow-300
                  "
                >

                  <UserIcon className="h-4 w-4" />

                  Login

                </button>

              </div>

            </DisclosurePanel>

          </>
        )}

      </Disclosure>


      {/* =====================================================
          NAVBAR SPACE
          
          Because navbar is fixed, reserve its height.
      ===================================================== */}

      <div className="h-[72px] w-full" />


      {/* =====================================================
          LOGIN / SIGNUP MODAL
          
          ONLY THIS SECTION HAS BEEN REDUCED IN SIZE.
          CONTENT IS KEPT.
      ===================================================== */}

      {showLogin && (
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className="
            fixed
            inset-0
            z-[10000]
            flex
            items-start
            justify-center
            overflow-y-auto
            bg-navy/70
            p-3
            backdrop-blur-sm
            sm:items-center
            sm:p-4
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeLogin()
            }
          }}
        >

          <div
            className="
              relative
              my-3
              w-full
              max-w-sm
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              text-navy
              shadow-2xl
              dark:border-white/10
              dark:bg-[#111827]
              dark:text-white
              sm:my-5
              sm:rounded-2xl
              sm:p-5
            "
          >

            {/* TOP YELLOW LINE */}

            <div className="absolute inset-x-0 top-0 h-1 bg-yellow-400" />


            {/* CLOSE */}

            <button
              type="button"
              onClick={closeLogin}
              aria-label="Close login"
              className="
                absolute
                end-2.5
                top-2.5
                rounded-full
                p-1.5
                text-gray-500
                transition
                hover:bg-gray-100
                hover:text-navy
                dark:text-gray-300
                dark:hover:bg-white/10
                dark:hover:text-white
              "
            >
              <XCircleIcon className="h-5 w-5" />
            </button>


            {/* HEADER */}

            <div className="pe-7">

              <div
                className="
                  mb-3
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-400
                  text-navy
                "
              >
                <UserIcon className="h-4.5 w-4.5" />
              </div>


              <h2
                className="
                  text-lg
                  font-bold
                  text-navy
                  sm:text-xl
                  dark:text-white
                "
              >
                {isNewUser
                  ? 'Create your account'
                  : 'Welcome back'}
              </h2>


              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-gray-600
                  sm:text-sm
                  dark:text-gray-300
                "
              >
                {isNewUser
                  ? 'Create an account to save your preferences and make shopping easier.'
                  : 'Login to your STRYDE account to continue.'}
              </p>

            </div>


            {/* SOCIAL LOGIN */}

            <div className="mt-4 grid grid-cols-3 gap-2">

              {/* GOOGLE */}

              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  transition
                  hover:bg-gray-50
                  hover:shadow-md
                  dark:border-white/15
                  dark:bg-white/[0.06]
                  dark:text-white
                  dark:hover:bg-white/10
                "
                aria-label="Continue with Google"
              >
                <span className="text-base font-bold text-[#4285F4]">
                  G
                </span>
              </button>


              {/* FACEBOOK */}

              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  transition
                  hover:bg-gray-50
                  hover:shadow-md
                  dark:border-white/15
                  dark:bg-white/[0.06]
                  dark:text-white
                  dark:hover:bg-white/10
                "
                aria-label="Continue with Facebook"
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#1877F2]
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  f
                </span>
              </button>


              {/* APPLE */}

              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  transition
                  hover:bg-gray-50
                  hover:shadow-md
                  dark:border-white/15
                  dark:bg-white/[0.06]
                  dark:text-white
                  dark:hover:bg-white/10
                "
                aria-label="Continue with Apple"
              >

                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.07-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25C11.88 5.02 13.69 3.18 15.79 3c.29 2.58-2.34 4.5-3.76 4.25z" />
                </svg>

              </button>

            </div>


            {/* DIVIDER */}

            <div className="my-4 flex items-center gap-2">

              <div className="h-px flex-1 bg-gray-200 dark:bg-white/15" />

              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-500
                  dark:text-gray-300
                "
              >
                Or continue with email
              </span>

              <div className="h-px flex-1 bg-gray-200 dark:bg-white/15" />

            </div>


            {/* LOGIN FORM */}

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                closeLogin()
              }}
            >

              {/* FULL NAME */}

              {isNewUser && (
                <div>

                  <label
                    htmlFor="login-name"
                    className="
                      mb-1.5
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-600
                      dark:text-gray-200
                    "
                  >
                    Full name
                  </label>

                  <input
                    id="login-name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="
                      min-h-10
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      py-2
                      text-sm
                      text-navy
                      outline-none
                      transition
                      placeholder:text-gray-500
                      focus:border-yellow-400
                      focus:bg-white
                      focus:ring-2
                      focus:ring-yellow-400/20
                      dark:border-white/15
                      dark:bg-white/[0.06]
                      dark:text-white
                      dark:placeholder:text-gray-300
                      dark:focus:border-yellow-400
                      dark:focus:bg-white/[0.08]
                    "
                  />

                </div>
              )}


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="login-email"
                  className="
                    mb-1.5
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-gray-600
                    dark:text-gray-200
                  "
                >
                  Email address
                </label>

                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="
                    min-h-10
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    px-3
                    py-2
                    text-sm
                    text-navy
                    outline-none
                    transition
                    placeholder:text-gray-500
                    focus:border-yellow-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-yellow-400/20
                    dark:border-white/15
                    dark:bg-white/[0.06]
                    dark:text-white
                    dark:placeholder:text-gray-300
                    dark:focus:border-yellow-400
                    dark:focus:bg-white/[0.08]
                  "
                />

              </div>


              {/* PASSWORD */}

              <div>

                <div className="mb-1.5 flex items-center justify-between gap-2">

                  <label
                    htmlFor="login-password"
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-600
                      dark:text-gray-200
                    "
                  >
                    Password
                  </label>


                  {!isNewUser && (
                    <button
                      type="button"
                      onClick={openForgotPassword}
                      className="
                        text-[10px]
                        font-semibold
                        text-navy
                        transition
                        hover:text-yellow-500
                        dark:text-yellow-400
                        dark:hover:text-yellow-300
                      "
                    >
                      Forgot password?
                    </button>
                  )}

                </div>


                <div className="relative">

                  <LockClosedIcon
                    className="
                      pointer-events-none
                      absolute
                      start-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-gray-500
                      dark:text-gray-300
                    "
                  />

                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    className="
                      min-h-10
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      py-2
                      ps-10
                      pe-10
                      text-sm
                      text-navy
                      outline-none
                      transition
                      placeholder:text-gray-500
                      focus:border-yellow-400
                      focus:bg-white
                      focus:ring-2
                      focus:ring-yellow-400/20
                      dark:border-white/15
                      dark:bg-white/[0.06]
                      dark:text-white
                      dark:placeholder:text-gray-300
                      dark:focus:border-yellow-400
                      dark:focus:bg-white/[0.08]
                    "
                  />


                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                    title={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                    className="
                      absolute
                      end-2
                      top-1/2
                      flex
                      h-7
                      w-7
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-md
                      text-gray-500
                      transition
                      hover:bg-gray-200
                      hover:text-navy
                      dark:text-gray-300
                      dark:hover:bg-white/10
                      dark:hover:text-white
                    "
                  >

                    {showPassword ? (
                      <EyeSlashIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}

                  </button>

                </div>

              </div>


              {/* REMEMBER ME */}

              {!isNewUser && (
                <label className="flex cursor-pointer items-center gap-2 py-0.5">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="peer sr-only"
                  />

                  <span
                    className={`
                      flex
                      h-4
                      w-4
                      shrink-0
                      items-center
                      justify-center
                      rounded
                      border
                      transition
                      ${
                        rememberMe
                          ? 'border-yellow-400 bg-yellow-400 text-navy'
                          : 'border-gray-300 bg-gray-50 text-transparent dark:border-gray-500 dark:bg-white/[0.06]'
                      }
                    `}
                  >
                    <CheckIcon className="h-3 w-3" />
                  </span>

                  <span className="text-xs text-gray-600 dark:text-gray-200">
                    Remember me
                  </span>

                </label>
              )}


              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  mt-1
                  flex
                  min-h-10
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-yellow-400
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-navy
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-300
                  hover:shadow-[0_8px_25px_rgba(250,204,21,0.3)]
                  active:translate-y-0
                "
              >
                {isNewUser ? 'Create account' : 'Login'}
              </button>

            </form>


            {/* SWITCH LOGIN / SIGNUP */}

            <div
              className="
                mt-4
                text-center
                text-xs
                text-gray-600
                dark:text-gray-300
              "
            >

              {isNewUser
                ? 'Already have an account?'
                : "Don't have an account?"}

              <button
                type="button"
                onClick={() => {
                  if (isNewUser) {
                    openLogin()
                  } else {
                    openSignup()
                  }
                }}
                className="
                  ms-1
                  font-semibold
                  text-navy
                  underline
                  decoration-yellow-400
                  decoration-2
                  underline-offset-4
                  transition
                  hover:text-yellow-500
                  dark:text-yellow-400
                  dark:hover:text-yellow-300
                "
              >
                {isNewUser ? 'Login' : 'Create one'}
              </button>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          FORGOT PASSWORD POPUP
          
          ALSO REDUCED SLIGHTLY.
          NAVBAR IS NOT CHANGED HERE.
      ===================================================== */}

      {showForgotPassword && (
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className="
            fixed
            inset-0
            z-[11000]
            flex
            items-start
            justify-center
            overflow-y-auto
            bg-navy/70
            p-3
            backdrop-blur-sm
            sm:items-center
            sm:p-4
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeForgotPassword()
            }
          }}
        >

          <div
            className="
              relative
              my-3
              w-full
              max-w-sm
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              text-navy
              shadow-2xl
              dark:border-white/10
              dark:bg-[#111827]
              dark:text-white
              sm:my-5
              sm:p-5
            "
          >

            {/* TOP LINE */}

            <div className="absolute inset-x-0 top-0 h-1 bg-yellow-400" />


            {/* CLOSE */}

            <button
              type="button"
              onClick={closeForgotPassword}
              aria-label="Close forgot password"
              className="
                absolute
                end-2.5
                top-2.5
                rounded-full
                p-1.5
                text-gray-500
                transition
                hover:bg-gray-100
                hover:text-navy
                dark:text-gray-300
                dark:hover:bg-white/10
                dark:hover:text-white
              "
            >
              <XCircleIcon className="h-5 w-5" />
            </button>


            {!resetSent ? (
              <>

                {/* ICON */}

                <div
                  className="
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400
                    text-navy
                  "
                >
                  <LockClosedIcon className="h-5 w-5" />
                </div>


                <div className="pe-7">

                  <h2
                    className="
                      text-lg
                      font-bold
                      text-navy
                      sm:text-xl
                      dark:text-white
                    "
                  >
                    Forgot your password?
                  </h2>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-gray-600
                      sm:text-sm
                      dark:text-gray-300
                    "
                  >
                    No worries. Enter your email address
                    and we&apos;ll send you a link to reset
                    your password.
                  </p>

                </div>


                {/* RESET FORM */}

                <form
                  onSubmit={handleResetPassword}
                  className="mt-4 space-y-3"
                >

                  <div>

                    <label
                      htmlFor="forgot-email"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-gray-600
                        dark:text-gray-200
                      "
                    >
                      Email address
                    </label>


                    <div className="relative">

                      <EnvelopeIcon
                        className="
                          pointer-events-none
                          absolute
                          start-3
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-gray-500
                          dark:text-gray-300
                        "
                      />

                      <input
                        id="forgot-email"
                        type="email"
                        value={forgotEmail}
                        onChange={(e) =>
                          setForgotEmail(e.target.value)
                        }
                        placeholder="you@example.com"
                        required
                        autoFocus
                        className="
                          min-h-10
                          w-full
                          rounded-lg
                          border
                          border-gray-200
                          bg-gray-50
                          py-2
                          ps-10
                          pe-3
                          text-sm
                          text-navy
                          outline-none
                          transition
                          placeholder:text-gray-500
                          focus:border-yellow-400
                          focus:bg-white
                          focus:ring-2
                          focus:ring-yellow-400/20
                          dark:border-white/15
                          dark:bg-white/[0.06]
                          dark:text-white
                          dark:placeholder:text-gray-300
                          dark:focus:border-yellow-400
                          dark:focus:bg-white/[0.08]
                        "
                      />

                    </div>

                  </div>


                  {/* SEND RESET LINK */}

                  <button
                    type="submit"
                    className="
                      flex
                      min-h-10
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-yellow-400
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-navy
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-yellow-300
                      hover:shadow-[0_8px_25px_rgba(250,204,21,0.3)]
                      active:translate-y-0
                    "
                  >

                    <EnvelopeIcon className="h-4 w-4" />

                    Send reset link

                  </button>

                </form>


                {/* BACK TO LOGIN */}

                <button
                  type="button"
                  onClick={openLogin}
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    text-xs
                    font-semibold
                    text-navy
                    transition
                    hover:text-yellow-500
                    dark:text-yellow-400
                    dark:hover:text-yellow-300
                  "
                >
                  Back to login
                </button>

              </>

            ) : (

              /* =================================================
                 RESET SENT
              ================================================= */

              <div className="py-2 text-center sm:py-4">

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                    text-green-600
                    dark:bg-green-500/10
                    dark:text-green-400
                  "
                >
                  <CheckIcon className="h-7 w-7" />
                </div>


                <h2
                  className="
                    mt-4
                    text-lg
                    font-bold
                    text-navy
                    sm:text-xl
                    dark:text-white
                  "
                >
                  Check your email
                </h2>


                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-sm
                    text-xs
                    leading-5
                    text-gray-600
                    sm:text-sm
                    dark:text-gray-300
                  "
                >
                  We&apos;ve sent a password reset link
                  to{' '}

                  <span className="font-semibold text-navy dark:text-white">
                    {forgotEmail}
                  </span>
                  .
                </p>


                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-gray-500
                    dark:text-gray-300
                  "
                >
                  If you don&apos;t see the email, please
                  check your spam or junk folder.
                </p>


                <button
                  type="button"
                  onClick={closeForgotPassword}
                  className="
                    mt-5
                    flex
                    min-h-10
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-yellow-400
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-navy
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-yellow-300
                    hover:shadow-[0_8px_25px_rgba(250,204,21,0.3)]
                  "
                >

                  <ArrowPathIcon className="h-4 w-4" />

                  Back to website

                </button>

              </div>

            )}

          </div>

        </div>
      )}

    </div>
  )
}