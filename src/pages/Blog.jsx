import { useMemo, useState } from 'react'

import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  BookOpenIcon,
  RssIcon,
  FireIcon,
  CameraIcon,
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
 * TOPICS
 * =========================================================
 */

const TOPICS = Object.keys(TAG_STYLES).map((tag) => ({
  tag,
  count: POSTS.filter((post) => post.tag === tag).length,
}))

/*
 * =========================================================
 * TRENDING
 * =========================================================
 */

const TRENDING = [
  {
    rank: '01',
    tag: 'Releases',
    title: 'Holiday 2026 Release Calendar',
    date: 'Sep 2, 2026',
  },

  {
    rank: '02',
    tag: 'Culture',
    title: 'How Skateboarders Saved the Dunk',
    date: 'Sep 14, 2026',
  },

  {
    rank: '03',
    tag: 'Sneaker News',
    title: 'The Evolution of the Chunky Sole: A Retrospective',
    date: 'Oct 12, 2026',
  },

  {
    rank: '04',
    tag: 'Care Guide',
    title: 'The Ultimate Guide to Suede Restoration',
    date: 'Sep 20, 2026',
  },
]

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

function PostCard({ post }) {
  return (
    <article className="group flex flex-col border-b-4 border-transparent transition-colors hover:border-yellow-400">
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

        <a
          href="#"
          className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-navy px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white dark:border-white dark:text-white dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-navy"
        >
          View Blog

          <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
        </a>
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
        <a
          href="#"
          className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 dark:border-border-dark lg:grid-cols-2"
        >
          {/* FEATURED IMAGE */}

          <div className="relative overflow-hidden">
            <img
              src={FEATURED_POST.image}
              alt={FEATURED_POST.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
              loading="lazy"
            />

            <span className="absolute start-4 top-4 rounded-md bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              Editor&rsquo;s Pick
            </span>
          </div>

          {/* FEATURED CONTENT */}

          <div className="flex flex-col justify-center gap-4 bg-navy p-8 sm:p-10">
            <span
              className={`w-fit rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                TAG_STYLES[FEATURED_POST.tag] ||
                'bg-white text-navy'
              }`}
            >
              {FEATURED_POST.tag}
            </span>

            <h2 className="font-heading text-2xl font-bold uppercase leading-snug text-white sm:text-3xl">
              {FEATURED_POST.title}
            </h2>

            <p className="text-sm leading-relaxed text-white/70">
              {FEATURED_POST.excerpt}
            </p>

            <div className="flex items-center gap-3 text-xs font-medium text-white/50">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-3.5 w-3.5" />

                {FEATURED_POST.date}
              </span>

              <span>·</span>

              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-3.5 w-3.5" />

                {FEATURED_POST.read}
              </span>
            </div>

            <span className="mt-2 flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wide text-yellow-400">
              Read the Feature

              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </span>
          </div>
        </a>
      </section>

      {/* =================================================
          BROWSE BY TOPIC
      ================================================= */}

      <section className="border-y border-gray-200 bg-cream py-14 dark:border-border-dark dark:bg-white/5">
        <div className="section-container">
          <h2 className="text-center font-heading text-2xl font-bold uppercase text-navy dark:text-white sm:text-3xl">
            Browse by Topic
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {TOPICS.map(({ tag, count }) => (
              <button
                key={tag}
                type="button"
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:-translate-y-0.5 hover:shadow-md ${
                  TAG_STYLES[tag] || 'bg-navy text-white'
                }`}
              >
                {tag}

                <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs">
                  {count}
                </span>
              </button>
            ))}
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
            <PostCard key={post.id} post={post} />
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
          TRENDING NOW
      ================================================= */}

      <section className="bg-navy py-16 sm:py-20">
        <div className="section-container">
          <div className="mb-10 flex items-center gap-3">
            <FireIcon className="h-6 w-6 text-yellow-400" />

            <h2 className="font-heading text-2xl font-bold uppercase text-white sm:text-3xl">
              Trending This Week
            </h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:gap-x-8 lg:grid-cols-4">
            {TRENDING.map((item) => (
              <a
                key={item.rank}
                href="#"
                className="group flex flex-col gap-3 py-6 sm:py-0"
              >
                <span className="font-heading text-4xl font-black text-white/15 transition-colors group-hover:text-yellow-400/40">
                  {item.rank}
                </span>

                <span
                  className={`w-fit rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    TAG_STYLES[item.tag] ||
                    'bg-white text-navy'
                  }`}
                >
                  {item.tag}
                </span>

                <h3 className="font-heading text-sm font-bold uppercase leading-snug text-white transition-colors group-hover:text-yellow-400">
                  {item.title}
                </h3>

                <span className="text-xs text-white/40">
                  {item.date}
                </span>
              </a>
            ))}
          </div>
        </div>
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
    </div>
  )
}