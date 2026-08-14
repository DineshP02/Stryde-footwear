import { useMemo, useState } from 'react'

import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  BookOpenIcon,
  RssIcon,
  CameraIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

/*
 * =========================================================
 * BLOG CONTENT
 * =========================================================
 */

const TAG_STYLES = {
  'Sneaker News': 'bg-navy text-white',
  'Style Guide': 'bg-yellow-400 text-navy',
  Interviews: 'bg-slate-800 text-white',
  'Care Guide': 'bg-navy text-white',
  Culture: 'bg-yellow-400 text-navy',
  Releases: 'bg-slate-800 text-white',
}

/*
 * =========================================================
 * BLOG POSTS
 * =========================================================
 */

const POSTS = [
  {
    id: 1,
    tag: 'Sneaker News',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    date: 'Oct 12, 2026',
    read: '5 min read',
    title: 'The Evolution of the Chunky Sole: A Retrospective',
    excerpt:
      "From the 90s dad-shoe phenomenon to today's high-fashion runways — how exaggerated midsoles became a streetwear staple.",
    content:
      'The chunky sole has travelled from performance footwear to one of the defining shapes of modern streetwear. Its exaggerated proportions changed how designers thought about balance, comfort, and visual identity.',
  },

  {
    id: 2,
    tag: 'Style Guide',
    image:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    date: 'Oct 5, 2026',
    read: '4 min read',
    title: 'How to Style High-Tops for Autumn Weather',
    excerpt:
      'Layering is key. We break down the best ways to pair retro high-tops with heavy coats, loose denim, and autumn tones.',
    content:
      'High-tops are one of the easiest silhouettes to transition into cooler weather. The key is to balance the height of the shoe with relaxed layers and heavier seasonal fabrics.',
  },

  {
    id: 3,
    tag: 'Interviews',
    image:
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
    date: 'Sep 28, 2026',
    read: '8 min read',
    title: 'In the Studio: Designing the Next Big Silhouette',
    excerpt:
      'We sat down with industry-leading designers to talk materials, 3D printing, and the future of sneaker architecture.',
    content:
      'The next generation of footwear is being shaped by a combination of traditional craftsmanship and digital manufacturing. Designers are experimenting with structures that would have been impossible to produce a decade ago.',
  },

  {
    id: 4,
    tag: 'Care Guide',
    image:
      'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80',
    date: 'Sep 20, 2026',
    read: '6 min read',
    title: 'The Ultimate Guide to Suede Restoration',
    excerpt:
      "Ruined your favorite pair in the rain? Don't panic — our care team shares their methods for brushing and reviving dead suede.",
    content:
      'Suede rewards patience. With the correct brush, controlled cleaning, and enough drying time, tired-looking footwear can often be restored without damaging its texture.',
  },

  {
    id: 5,
    tag: 'Culture',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80',
    date: 'Sep 14, 2026',
    read: '7 min read',
    title: 'How Skateboarders Saved the Dunk',
    excerpt:
      'A deep dive into the early 2000s, when skate culture adopted a dying basketball silhouette and turned it into a global icon.',
    content:
      'Skateboarding gave the Dunk a second life. What began as a basketball silhouette became a cultural symbol through customization, community, and the creativity of skaters.',
  },

  {
    id: 6,
    tag: 'Releases',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    date: 'Sep 2, 2026',
    read: '3 min read',
    title: 'Holiday 2026 Release Calendar',
    excerpt:
      "Mark your dates. We've compiled the full list of confirmed drops, collaborations, and surprise releases this winter.",
    content:
      'The holiday season is shaping up to be one of the busiest periods of the year. Here is a closer look at the releases and collaborations worth watching.',
  },
]

/*
 * =========================================================
 * FEATURED POST
 * =========================================================
 */

const FEATURED_POST = {
  tag: 'Interviews',
  image:
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&q=80',
  date: 'Oct 18, 2026',
  read: '9 min read',
  title: 'Inside the Archive: 30 Years of Sole Innovation',
  excerpt:
    'We got rare access to a private design archive spanning three decades of sneaker engineering — from the first air-cushioned midsoles to today’s knit uppers. A conversation with the people who built the shoes on your feet.',
}

/*
 * =========================================================
 * EDITORIAL TEAM
 * =========================================================
 */

const EDITORS = [
  {
    name: 'Maya Okafor',
    role: 'Editor-in-Chief',
    bio: 'Covers culture and the stories behind the drops.',
  },

  {
    name: 'Leo Bianchi',
    role: 'Style Editor',
    bio: 'Breaks down fits, colourways, and seasonal trends.',
  },

  {
    name: 'Priya Menon',
    role: 'Staff Writer',
    bio: 'Runs our interviews and studio-visit features.',
  },

  {
    name: 'Sam Torres',
    role: 'Care & Craft',
    bio: 'Writes the restoration and maintenance guides.',
  },
]

/*
 * =========================================================
 * HELPERS
 * =========================================================
 */

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

/*
 * =========================================================
 * SOCIAL POSTS
 * =========================================================
 */

const SOCIAL_POSTS = [
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80',
  'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80',
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',
]

const PAGE_SIZE = 6

/*
 * =========================================================
 * POST CARD
 * =========================================================
 */

function PostCard({ post, onOpen }) {
  return (
    <article className="group flex flex-col border-b-4 border-transparent">
      {/* IMAGE */}

      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <span
          className={`absolute start-4 top-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            TAG_STYLES[post.tag] || 'bg-navy text-white'
          }`}
        >
          {post.tag}
        </span>
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col gap-3 rounded-b-xl border border-t-0 border-gray-200 bg-white p-5 dark:border-border-dark dark:bg-surface-dark">
        {/* DATE + READ TIME */}

        <div className="flex items-center gap-3 text-xs font-medium text-gray-400 dark:text-gray-500">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5" />
            {post.date}
          </span>

          <span>·</span>

          <span className="flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5" />
            {post.read}
          </span>
        </div>

        {/* TITLE */}

        <h3 className="font-heading text-lg font-bold uppercase leading-snug text-navy dark:text-white">
          {post.title}
        </h3>

        {/* EXCERPT */}

        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {post.excerpt}
        </p>

        {/* BUTTON */}

        <button
          type="button"
          onClick={() => onOpen(post)}
          className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-navy px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy"
        >
          View Blog

          <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
        </button>
      </div>
    </article>
  )
}

/*
 * =========================================================
 * BLOG PAGE
 * =========================================================
 */

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedPost, setSelectedPost] = useState(null)
  const [isFeatureOpen, setIsFeatureOpen] = useState(false)

  const visiblePosts = useMemo(
    () => POSTS.slice(0, visibleCount),
    [visibleCount]
  )

  const hasMore = visibleCount < POSTS.length

  return (
    <div className="bg-white dark:bg-navy-dark">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-navy/75" />
        </div>

        <div className="section-container relative flex flex-col gap-10 py-20 sm:py-28 lg:flex-row lg:items-end lg:justify-between">
          {/* HERO CONTENT */}

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400 backdrop-blur">
              <BookOpenIcon className="h-4 w-4" />

              Editorial &amp; News
            </span>

            <h1 className="mt-5 font-heading text-5xl font-black italic uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              The Culture
              <br />

              <span className="text-yellow-400">Chronicles.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Dive into the latest streetwear trends, exclusive drop news,
              behind-the-scenes interviews, and in-depth styling guides
              straight from our editorial team.
            </p>

            {/* HERO BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#latest"
                className="flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
              >
                Read Latest

                <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
              </a>

              <a
                href="#newsletter"
                className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/15"
              >
                <EnvelopeIcon className="h-4 w-4" />

                Subscribe Now
              </a>
            </div>
          </div>

          {/* STATS CARD */}

          <div className="w-full max-w-xs rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-navy">
                <BookOpenIcon className="h-5 w-5" />
              </div>

              <div>
                <p className="font-heading text-base font-bold text-white">
                  The Magazine
                </p>

                <p className="text-xs text-white/60">
                  Your daily dose of style
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Articles
                </p>

                <p className="mt-1 font-heading text-2xl font-black text-white">
                  500
                  <span className="text-yellow-400">+</span>
                </p>

                <p className="text-[11px] text-white/40">Posts</p>
              </div>

              <div className="rounded-lg bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Readers
                </p>

                <p className="mt-1 font-heading text-2xl font-black text-white">
                  100k
                </p>

                <p className="text-[11px] text-yellow-400">Monthly</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/60">
              <RssIcon className="h-4 w-4 text-yellow-400" />

              New drops covered weekly
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURED STORY
      ================================================= */}

      <section className="section-container py-16 sm:py-20">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-border-dark dark:bg-surface-dark lg:grid-cols-2">
          {/* FEATURED IMAGE */}

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
            <img
              src={FEATURED_POST.image}
              alt={FEATURED_POST.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

            <span className="absolute start-5 top-5 rounded-full bg-yellow-400 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-navy">
              Editor&rsquo;s Pick
            </span>

            <div className="absolute bottom-6 start-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Featured Story
              </p>
            </div>
          </div>

          {/* FEATURED CONTENT */}

          <div className="flex flex-col justify-center bg-navy px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <span className="w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-400">
              {FEATURED_POST.tag}
            </span>

            <h2 className="mt-6 max-w-xl font-heading text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              {FEATURED_POST.title}
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base">
              {FEATURED_POST.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-xs font-medium tracking-wide text-slate-400">
              <span className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-yellow-400" />
                {FEATURED_POST.date}
              </span>

              <span className="text-slate-600">•</span>

              <span className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-yellow-400" />
                {FEATURED_POST.read}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsFeatureOpen(true)}
              className="mt-8 flex w-fit items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-yellow-400"
            >
              Read the Feature

              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* =================================================
          POST GRID
      ================================================= */}

      <section
        id="latest"
        className="section-container py-16 sm:py-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onOpen={setSelectedPost}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) => count + PAGE_SIZE)
              }
              className="rounded-lg bg-yellow-400 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
            >
              Load More Articles
            </button>
          </div>
        )}
      </section>

      {/* =================================================
          MEET THE EDITORS
      ================================================= */}

      <section className="section-container py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-500">
            The Team
          </span>

          <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-navy dark:text-white sm:text-3xl">
            Meet the Editors
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EDITORS.map((editor) => (
            <div
              key={editor.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-md dark:border-border-dark"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-white dark:bg-yellow-400 dark:text-navy">
                {getInitials(editor.name)}
              </span>

              <h3 className="font-heading text-base font-bold uppercase text-navy dark:text-white">
                {editor.name}
              </h3>

              <p className="text-xs font-bold uppercase tracking-wide text-yellow-500">
                {editor.role}
              </p>

              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {editor.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          FOLLOW THE CULTURE
      ================================================= */}

      <section className="border-t border-gray-200 py-16 dark:border-border-dark sm:py-20">
        <div className="section-container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-500">
                <CameraIcon className="h-4 w-4" />
                On Instagram
              </span>

              <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-navy dark:text-white sm:text-3xl">
                Follow the Culture
              </h2>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:text-yellow-500 dark:text-white"
            >
              @strydefootwear

              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {SOCIAL_POSTS.map((src, index) => (
              <a
                key={index}
                href="#"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={src}
                  alt="Instagram post"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/50">
                  <CameraIcon className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          NEWSLETTER
      ================================================= */}

      <section
        id="newsletter"
        className="border-t border-gray-200 bg-cream dark:border-border-dark dark:bg-white/5"
      >
        <div className="section-container flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white dark:bg-yellow-400 dark:text-navy">
            <EnvelopeIcon className="h-6 w-6" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-navy dark:text-white sm:text-3xl">
            Never miss a drop
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Join 100k readers getting the culture, care tips, and release
            calendar in their inbox every week.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="min-h-11 w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm text-navy outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 dark:border-border-dark dark:bg-navy-dark dark:text-white dark:placeholder:text-gray-500"
            />

            <button
              type="submit"
              className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-yellow-400 dark:text-navy dark:hover:bg-yellow-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* =================================================
          BLOG POST POPUP
      ================================================= */}

      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/50 px-4 py-6 backdrop-blur-sm dark:bg-navy/80 sm:px-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-rose-200 bg-rose-50 shadow-2xl dark:border-yellow-400/20 dark:bg-[#101827]">

            {/* TOP LINE */}
            <div className="h-1 w-full bg-yellow-400" />

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="Close blog"
              className="absolute end-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-rose-100 text-gray-500 transition hover:bg-rose-200 hover:text-navy dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {/* CONTENT */}
            <div className="overflow-y-auto">
              <div className="px-7 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12 lg:px-14">

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] ${
                      TAG_STYLES[selectedPost.tag] ||
                      'bg-navy text-white dark:bg-white dark:text-navy'
                    }`}
                  >
                    {selectedPost.tag}
                  </span>

                  <span className="text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-slate-500">
                    STRYDE JOURNAL
                  </span>
                </div>

                <h2 className="mt-7 max-w-2xl font-heading text-3xl font-black uppercase leading-[1.05] text-navy sm:text-4xl dark:text-white">
                  {selectedPost.title}
                </h2>

                <div className="mt-6 flex flex-wrap gap-5 border-y border-rose-200 py-5 text-xs uppercase tracking-[0.12em] text-gray-500 dark:border-white/10 dark:text-slate-400">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
                    {selectedPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
                    {selectedPost.read}
                  </span>
                </div>

                <div className="mt-8 border-l-2 border-yellow-400 pl-5 sm:pl-7">
                  <p className="text-base font-medium leading-7 text-gray-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                    {selectedPost.excerpt}
                  </p>
                </div>

                <div className="mt-10 space-y-6 text-[15px] leading-8 text-gray-600 dark:text-slate-300 sm:text-base">
                  <p>
                    {selectedPost.content}
                  </p>

                  <p>
                    Great footwear stories are rarely about one product
                    alone. They are about the people, places, materials, and
                    ideas that shape the way we experience style.
                  </p>

                  <p>
                    Every detail matters — from the proportions of the
                    silhouette to the texture of the upper and the way the
                    sole meets the ground. These small decisions are what
                    eventually give a design its personality.
                  </p>

                  <blockquote className="my-10 border-y border-yellow-400/30 py-8">
                    <p className="font-heading text-2xl font-black uppercase leading-tight text-yellow-600 dark:text-yellow-400 sm:text-3xl">
                      Good design does not simply follow culture. It becomes
                      part of it.
                    </p>
                  </blockquote>

                  <p>
                    That relationship between design and culture continues to
                    evolve. New materials, changing tastes, and different
                    communities keep giving familiar footwear new meaning.
                  </p>

                  <p>
                    This is why the most interesting stories are often found
                    beyond the product itself — in the process, the people,
                    and the ideas that make the final result possible.
                  </p>
                </div>

                <div className="mt-10 border-t border-rose-200 pt-7 dark:border-white/10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-400">
                    STRYDE Editorial
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-500">
                    Culture, style, craftsmanship and the stories behind
                    footwear.
                  </p>
                </div>
              </div>

              <div className="flex justify-end border-t border-rose-200 px-7 py-5 dark:border-white/10 sm:px-10">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="rounded-lg border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-navy transition hover:bg-rose-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          FEATURED STORY POPUP
      ================================================= */}

      {isFeatureOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-navy/50 px-4 py-6 backdrop-blur-sm dark:bg-navy/80 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="feature-title"
        >
          <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-rose-200 bg-rose-50 shadow-2xl dark:border-yellow-400/20 dark:bg-[#101827]">

            {/* TOP ACCENT */}
            <div className="h-1 w-full bg-yellow-400" />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsFeatureOpen(false)}
              aria-label="Close feature"
              className="absolute end-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-rose-100 text-gray-500 transition hover:bg-rose-200 hover:text-navy dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {/* SCROLLABLE CONTENT */}
            <div className="overflow-y-auto">

              {/* EDITORIAL HEADER */}
              <div className="px-7 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-12 lg:px-14 lg:pb-12 lg:pt-14">

                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

                  {/* NUMBER */}
                  <div className="flex items-start gap-4">
                    <span className="font-heading text-6xl font-black leading-none text-yellow-600 dark:text-yellow-400 sm:text-7xl">
                      01
                    </span>

                    <div className="pt-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-slate-500">
                        STRYDE EDITORIAL
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-slate-400">
                        Featured Archive
                      </p>
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <span className="w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-400">
                    {FEATURED_POST.tag}
                  </span>
                </div>

                {/* TITLE */}
                <h2
                  id="feature-title"
                  className="mt-10 max-w-3xl font-heading text-3xl font-black uppercase leading-[1.02] tracking-tight text-navy sm:text-4xl dark:text-white lg:text-5xl"
                >
                  {FEATURED_POST.title}
                </h2>

                {/* INTRO */}
                <div className="mt-8 max-w-3xl border-l-2 border-yellow-400 pl-5 sm:pl-7">
                  <p className="text-base font-medium leading-7 text-gray-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                    {FEATURED_POST.excerpt}
                  </p>
                </div>

                {/* META */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-rose-200 py-5 text-xs uppercase tracking-[0.12em] text-gray-500 dark:border-white/10 dark:text-slate-400">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
                    {FEATURED_POST.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
                    {FEATURED_POST.read}
                  </span>

                  <span className="text-yellow-600 dark:text-yellow-400">
                    STRYDE JOURNAL
                  </span>
                </div>
              </div>

              {/* ARTICLE */}
              <article className="border-t border-rose-200 bg-rose-100 px-7 py-10 dark:border-white/10 dark:bg-[#0c1422] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                <div className="max-w-3xl">

                  {/* ARTICLE INTRO */}
                  <p className="font-heading text-xl font-bold uppercase leading-relaxed text-navy dark:text-white sm:text-2xl">
                    Footwear has never been just about getting from one
                    place to another. The best designs become part of the
                    culture around us.
                  </p>

                  <div className="mt-8 space-y-6 text-[15px] leading-8 text-gray-600 dark:text-slate-300 sm:text-base">

                    <p>
                      For three decades, sneaker design has moved far beyond
                      function. What began as a conversation about cushioning,
                      traction, and durability gradually became a language of
                      identity, creativity, and movement.
                    </p>

                    <p>
                      Inside the archive, every silhouette tells a different
                      story. Sketches sit beside material samples, early
                      prototypes reveal the experiments that never reached
                      production, and worn test pairs show how ideas changed
                      once they met the street.
                    </p>

                    <p>
                      The evolution of the modern sneaker is really a story
                      about constant experimentation. Designers have worked
                      with foam, rubber, mesh, leather, knit structures,
                      engineered fabrics, and increasingly precise
                      manufacturing techniques to create footwear that feels
                      lighter, stronger, and more expressive.
                    </p>

                    {/* PULL QUOTE */}
                    <blockquote className="my-10 border-y border-yellow-400/30 py-8">
                      <p className="font-heading text-2xl font-black uppercase leading-tight text-yellow-600 dark:text-yellow-400 sm:text-3xl">
                        The most memorable silhouettes are the ones that make
                        technology feel invisible.
                      </p>
                    </blockquote>

                    <p>
                      One of the most interesting changes has been the
                      relationship between performance and everyday style.
                      Features originally developed for athletes eventually
                      found their way into everyday footwear, changing what
                      people expected from a sneaker.
                    </p>

                    <p>
                      Today, designers are asking a different set of
                      questions. How can a shoe reduce unnecessary material?
                      How can production become more responsible? How can a
                      familiar silhouette feel completely new without losing
                      the character that made it successful?
                    </p>

                    <p>
                      Those questions continue to shape the next generation
                      of footwear. And if the archive tells us anything, it
                      is that innovation rarely happens in a straight line.
                      The strongest ideas often come from revisiting old ones
                      and seeing them through a completely different lens.
                    </p>
                  </div>

                  {/* CLOSING */}
                  <div className="mt-12 border-t border-rose-200 pt-8 dark:border-white/10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-400">
                      From the STRYDE Archive
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 dark:text-slate-400">
                      A closer look at the people, ideas, materials, and
                      experiments that continue to influence the footwear we
                      wear today.
                    </p>
                  </div>
                </div>
              </article>

              {/* POPUP FOOTER */}
              <div className="flex flex-col gap-4 border-t border-rose-200 px-7 py-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-400 dark:text-slate-500">
                  STRYDE / Culture Chronicles
                </p>

                <button
                  type="button"
                  onClick={() => setIsFeatureOpen(false)}
                  className="w-full rounded-lg border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-navy transition hover:bg-rose-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5 sm:w-auto"
                >
                  Close Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}