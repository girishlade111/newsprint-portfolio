'use client'

import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  Bookmark,
  Search,
  Mail,
  Globe,
  Newspaper,
  PenTool,
  Type,
  LayoutGrid,
  Zap,
  Star,
  ChevronRight,
} from 'lucide-react'

/* ─── Data ─── */
const NAV_LINKS = ['World', 'Business', 'Technology', 'Opinion', 'Culture', 'Science']

const TICKER_ITEMS = [
  'MARKETS: S&P 500 +2.4% ▲',
  'BREAKING: New AI Model Surpasses Human Benchmarks',
  'TECH: Quantum Computing Milestone Achieved',
  'CULTURE: Literary Awards Announced for 2026',
  'SCIENCE: Mars Rover Discovers Organic Compounds',
  'OPINION: The Future of Print in a Digital Age',
]

const FEATURES = [
  {
    icon: PenTool,
    title: 'Editorial Precision',
    description: 'Every pixel placed with the care of a typesetter arranging lead blocks. Nothing accidental, everything intentional.',
  },
  {
    icon: Type,
    title: 'Typographic Hierarchy',
    description: 'Massive serif headlines command attention while body text delivers clarity. Information flows with natural rhythm.',
  },
  {
    icon: LayoutGrid,
    title: 'Grid-Based Structure',
    description: 'Visible borders celebrate structure rather than hiding it. Columns create rhythm and guide the eye naturally.',
  },
  {
    icon: Zap,
    title: 'Snappy Interactions',
    description: 'Fast, mechanical transitions. No bounce, no float. Elements snap into place with hard shadows and sharp edges.',
  },
  {
    icon: Newspaper,
    title: 'Information Density',
    description: 'High density layouts honor the reader\'s time. Tight padding and efficient space usage deliver maximum content.',
  },
  {
    icon: Globe,
    title: 'Timeless Authority',
    description: 'The aesthetic of record. Serious, trustworthy, and confident—like holding a fresh morning newspaper.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Set the Type',
    description: 'Choose your typographic scale with massive headlines and legible body text. Establish hierarchy through size and weight contrast.',
  },
  {
    step: '02',
    title: 'Draw the Grid',
    description: 'Lay out your columns with explicit borders. Celebrate structure. Let visible grid lines create visual rhythm and order.',
  },
  {
    step: '03',
    title: 'Ink the Page',
    description: 'Apply high-contrast black on off-white. Use editorial red sparingly. Add textures for depth. Ship with authority.',
  },
]

const TESTIMONIALS = [
  {
    quote: "The newsprint aesthetic rejects modern web trends of soft shadows and rounded corners. Instead, it embraces stark geometry, high information density, and typographic drama.",
    author: 'Editorial Design Quarterly',
    role: 'Design Publication',
  },
  {
    quote: "A masterclass in restraint. The deliberate use of only black, white, and a single accent color creates an experience that feels both timeless and urgent.",
    author: 'The Typographic Review',
    role: 'Type Foundry Journal',
  },
]

/* ─── Component ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#F9F9F7',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23111111' fill-opacity='0.04' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      {/* ═══════════ HEADER ═══════════ */}
      <header
        className={`sticky top-0 z-40 border-b-4 border-[#111111] bg-[#F9F9F7] transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_2px_0_0_#111111]' : ''
        }`}
      >
        {/* Edition metadata bar */}
        <div className="border-b border-[#111111]">
          <div className="mx-auto max-w-screen-xl px-4 py-2 flex items-center justify-between">
            <span
              className="font-mono text-xs uppercase tracking-widest text-[#737373]"
            >
              Vol. I &middot; No. 1
            </span>
            <span
              className="font-mono text-xs uppercase tracking-widest text-[#737373] hidden sm:block"
            >
              {today}
            </span>
            <span
              className="font-mono text-xs uppercase tracking-widest text-[#737373]"
            >
              San Francisco Edition
            </span>
          </div>
        </div>

        {/* Masthead */}
        <div className="border-b border-[#111111]">
          <div className="mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bookmark className="h-5 w-5 text-[#CC0000]" strokeWidth={1.5} />
              <h1
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9]"
              >
                THE DAILY
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="h-10 w-10 flex items-center justify-center border border-[#111111] hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-200 sharp-corners"
                aria-label="Search"
              >
                <Search className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                className="h-10 w-10 flex items-center justify-center border border-[#111111] hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-200 sharp-corners md:hidden"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Menu className="h-4 w-4" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-b border-[#111111]" aria-label="Main navigation">
          <div className="mx-auto max-w-screen-xl px-4">
            <ul className="flex items-center">
              {NAV_LINKS.map((link, i) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="inline-block px-5 py-3 font-sans text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#CC0000] hover:bg-neutral-100 transition-colors duration-200 border-r border-[#111111] last:border-r-0"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-b border-[#111111] bg-[#F9F9F7]" aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block px-4 py-3 font-sans text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#CC0000] hover:bg-neutral-100 transition-colors duration-200 border-b border-[#E5E5E0] last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* ═══════════ MARQUEE TICKER ═══════════ */}
      <div className="bg-[#111111] text-[#F9F9F7] border-b-4 border-[#CC0000] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-8 font-mono text-xs uppercase tracking-widest flex items-center gap-3"
            >
              {item.startsWith('BREAKING') ? (
                <>
                  <span className="bg-[#CC0000] text-[#F9F9F7] px-2 py-0.5 text-[10px] font-bold">
                    BREAKING
                  </span>
                  <span>{item.replace('BREAKING: ', '')}</span>
                </>
              ) : (
                item
              )}
              <span className="text-[#737373]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <main className="flex-1">
        {/* ──── HERO SECTION ──── */}
        <section className="border-b-4 border-[#111111] newsprint-texture">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Main headline — 8 columns */}
              <div className="lg:col-span-8 p-6 lg:p-10 lg:border-r border-[#111111]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="bg-[#CC0000] text-[#F9F9F7] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest font-bold">
                    Lead Story
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                    Front Page
                  </span>
                </div>
                <h2
                  className="font-serif text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-6"
                >
                  All the News That&apos;s Fit to Print
                </h2>
                <div className="border-t-4 border-[#111111] pt-6">
                  <p className="font-body text-base lg:text-lg leading-relaxed text-[#404040] drop-cap text-justify">
                    The newsprint aesthetic rejects modern web trends of soft shadows, blurred
                    backgrounds, and rounded corners. Instead, it embraces stark geometry, high
                    information density, and typographic drama. Every element serves a purpose.
                    Every border tells a story. This is design with editorial authority—serious,
                    timeless, and trustworthy. Like holding a fresh morning newspaper, crisp and
                    organized and information-rich.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4 flex-wrap">
                  <button className="bg-[#111111] text-[#F9F9F7] px-8 py-3 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#111111] hover:border-[#111111] border border-transparent transition-all duration-200 sharp-corners min-h-[44px] flex items-center gap-2">
                    Read Full Story
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </button>
                  <button className="border border-[#111111] bg-transparent px-8 py-3 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-200 sharp-corners min-h-[44px]">
                    View Archive
                  </button>
                </div>
              </div>

              {/* Sidebar stories — 4 columns */}
              <div className="lg:col-span-4 flex flex-col">
                {/* Story 1 */}
                <a
                  href="#"
                  className="group p-6 border-b border-[#111111] lg:border-b hover:bg-neutral-100 transition-colors duration-200"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CC0000] font-bold">
                    Technology
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold mt-2 mb-2 leading-tight group-hover:text-[#CC0000] transition-colors duration-200">
                    Quantum Computing Achieves New Milestone in Error Correction
                  </h3>
                  <p className="font-body text-sm text-[#737373] leading-relaxed">
                    Researchers demonstrate fault-tolerant operations at scale, bringing practical
                    quantum computing closer to reality.
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] mt-3 block">
                    4 min read
                  </span>
                </a>

                {/* Story 2 */}
                <a
                  href="#"
                  className="group p-6 border-b border-[#111111] lg:border-b hover:bg-neutral-100 transition-colors duration-200"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CC0000] font-bold">
                    Culture
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold mt-2 mb-2 leading-tight group-hover:text-[#CC0000] transition-colors duration-200">
                    The Renaissance of Editorial Design in Digital Media
                  </h3>
                  <p className="font-body text-sm text-[#737373] leading-relaxed">
                    Why leading publications are returning to grid-based, typography-first design
                    principles.
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] mt-3 block">
                    6 min read
                  </span>
                </a>

                {/* Story 3 with image placeholder */}
                <a
                  href="#"
                  className="group p-6 hover:bg-neutral-100 transition-colors duration-200 flex-1"
                >
                  <div
                    className="w-full h-40 mb-4 img-newsprint"
                    style={{
                      background: 'radial-gradient(#000 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      opacity: 0.8,
                    }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CC0000] font-bold">
                    Opinion
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold mt-2 mb-2 leading-tight group-hover:text-[#CC0000] transition-colors duration-200">
                    Why Print Design Principles Still Matter in 2026
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] mt-3 block">
                    8 min read
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ──── FEATURES SECTION ──── */}
        <section className="border-b border-[#111111]">
          <div className="mx-auto max-w-screen-xl">
            {/* Section header */}
            <div className="border-b border-[#111111] p-6 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold">
                  Section II
                </span>
                <div className="flex-1 h-px bg-[#111111]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                  Principles
                </span>
              </div>
              <h2
                className="font-serif text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] mt-6"
              >
                The Pillars of<br />Editorial Design
              </h2>
            </div>

            {/* Features grid — asymmetric */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left column — feature list (5 cols) */}
              <div className="lg:col-span-5 border-r-0 lg:border-r border-[#111111]">
                {FEATURES.slice(0, 3).map((feature, i) => (
                  <div
                    key={feature.title}
                    className={`p-6 lg:p-8 border-b border-[#111111] hover:bg-neutral-100 transition-colors duration-200 group ${
                      i === 2 ? 'lg:border-b-0' : ''
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="border border-[#111111] h-12 w-12 flex items-center justify-center shrink-0 group-hover:bg-[#111111] group-hover:text-[#F9F9F7] transition-all duration-200 sharp-corners">
                        <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="font-body text-sm text-[#525252] leading-relaxed text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column — halftone image + features (7 cols) */}
              <div className="lg:col-span-7">
                {/* Halftone placeholder */}
                <div
                  className="border-b border-[#111111] p-6 lg:p-10"
                >
                  <div
                    className="w-full h-64 lg:h-80 img-newsprint relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(#000 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      opacity: 0.7,
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#F9F9F7] border-t border-[#111111]">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                        Fig. 1.1
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] ml-4">
                        — The Newsprint Grid System
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom features */}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {FEATURES.slice(3).map((feature, i) => (
                    <div
                      key={feature.title}
                      className={`p-6 lg:p-8 border-b border-[#111111] hover:bg-neutral-100 transition-colors duration-200 group ${
                        i === 0 ? 'sm:border-r border-[#111111]' : ''
                      } ${i === 1 ? 'sm:border-b-0 border-b-0 sm:border-b' : ''}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="border border-[#111111] h-10 w-10 flex items-center justify-center shrink-0 group-hover:bg-[#111111] group-hover:text-[#F9F9F7] transition-all duration-200 sharp-corners">
                          <feature.icon className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-bold mb-1.5">{feature.title}</h3>
                          <p className="font-body text-sm text-[#525252] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──── ORNAMENTAL DIVIDER ──── */}
        <div className="border-b border-[#111111] py-8 text-center font-serif text-2xl text-[#A3A3A3] tracking-[1em]">
          ✧ ✧ ✧
        </div>

        {/* ──── HOW IT WORKS — INVERTED SECTION ──── */}
        <section className="bg-[#111111] text-[#F9F9F7] border-b-4 border-[#CC0000]">
          <div className="mx-auto max-w-screen-xl">
            {/* Section header */}
            <div className="border-b border-[#404040] p-6 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold">
                  Section III
                </span>
                <div className="flex-1 h-px bg-[#404040]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                  Methodology
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] mt-6">
                How It Works
              </h2>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {HOW_IT_WORKS.map((item, i) => (
                <div
                  key={item.step}
                  className={`p-6 lg:p-10 border-b border-[#404040] md:border-b-0 hover:bg-[#1a1a1a] transition-colors duration-200 ${
                    i < 2 ? 'md:border-r md:border-[#404040]' : ''
                  }`}
                >
                  <span className="font-serif text-6xl lg:text-7xl font-black text-[#CC0000] leading-none">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#A3A3A3] leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── STATS BAR ──── */}
        <section className="border-b border-[#111111]">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: '9xl', label: 'Max Headline Size' },
                { value: '0px', label: 'Border Radius' },
                { value: '99%', label: 'Black & White' },
                { value: '3', label: 'Font Families' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 lg:p-8 border-b border-[#E5E5E0] md:border-b-0 hover:bg-neutral-100 transition-colors duration-200 ${
                    i < 3 ? 'md:border-r md:border-[#111111]' : ''
                  }`}
                >
                  <span className="font-mono text-3xl lg:text-4xl font-bold text-[#111111]">
                    {stat.value}
                  </span>
                  <span className="block font-sans text-xs uppercase tracking-widest text-[#737373] mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── TESTIMONIALS ──── */}
        <section className="border-b border-[#111111]">
          <div className="mx-auto max-w-screen-xl">
            <div className="border-b border-[#111111] p-6 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold">
                  Section IV
                </span>
                <div className="flex-1 h-px bg-[#111111]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                  Critical Acclaim
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <blockquote
                  key={i}
                  className={`p-6 lg:p-10 border-b border-[#111111] md:border-b-0 hover:bg-neutral-100 transition-colors duration-200 hard-shadow-hover ${
                    i === 0 ? 'md:border-r md:border-[#111111]' : ''
                  }`}
                >
                  <Star className="h-5 w-5 text-[#CC0000] mb-4" strokeWidth={1.5} />
                  <p className="font-serif text-xl lg:text-2xl font-semibold leading-snug mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-[#E5E5E0] pt-4">
                    <cite className="not-italic">
                      <span className="font-sans text-sm font-semibold block text-[#111111]">
                        {testimonial.author}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                        {testimonial.role}
                      </span>
                    </cite>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ──── ORNAMENTAL DIVIDER ──── */}
        <div className="border-b border-[#111111] py-8 text-center font-serif text-2xl text-[#A3A3A3] tracking-[1em]">
          ✧ ✧ ✧
        </div>

        {/* ──── NEWSLETTER CTA ──── */}
        <section className="border-b-4 border-[#111111]">
          <div className="mx-auto max-w-screen-xl p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
              {/* Left — CTA text (7 cols) */}
              <div className="lg:col-span-7 lg:pr-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#CC0000] font-bold">
                  Subscribe
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] mt-3 mb-4">
                  Get the Morning Edition
                </h2>
                <p className="font-body text-base text-[#525252] leading-relaxed text-justify">
                  Delivered to your inbox every morning. No algorithms, no engagement hacking—just
                  carefully curated design insights, typographic inspiration, and editorial
                  craftsmanship. Free, forever.
                </p>
              </div>

              {/* Right — Form (5 cols) */}
              <div className="lg:col-span-5 lg:border-l lg:border-[#111111] lg:pl-10">
                <div className="space-y-5">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-[#F0F0F0] focus-visible:outline-none transition-colors duration-200"
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-[#F0F0F0] focus-visible:outline-none transition-colors duration-200"
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                  <button className="w-full md:w-auto bg-[#111111] text-[#F9F9F7] px-8 py-3 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#111111] hover:border-[#111111] border border-transparent transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2 sharp-corners">
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Subscribe Now
                  </button>
                  <p className="font-mono text-[10px] text-[#A3A3A3] leading-relaxed">
                    No spam. Unsubscribe anytime. We respect your inbox as much as we respect the
                    printed page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──── LATEST ARTICLES GRID ──── */}
        <section className="border-b border-[#111111]">
          <div className="mx-auto max-w-screen-xl">
            <div className="border-b border-[#111111] p-6 lg:p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold">
                    Section V
                  </span>
                  <div className="flex-1 h-px bg-[#111111] w-16" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                    Latest
                  </span>
                </div>
                <a
                  href="#"
                  className="font-sans text-xs uppercase tracking-widest font-semibold text-[#111111] underline-offset-4 decoration-2 decoration-[#CC0000] hover:underline flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                </a>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] mt-6">
                Latest Dispatches
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  category: 'Design',
                  title: 'The Case Against Rounded Corners',
                  time: '3 min read',
                },
                {
                  category: 'Typography',
                  title: 'Why Serif Fonts Are Making a Comeback',
                  time: '5 min read',
                },
                {
                  category: 'Technology',
                  title: 'CSS Grid: The Newspaper Layout Engine',
                  time: '7 min read',
                },
                {
                  category: 'Culture',
                  title: 'Letterpress Printing in the Digital Age',
                  time: '4 min read',
                },
              ].map((article, i) => (
                <a
                  key={article.title}
                  href="#"
                  className={`group p-6 lg:p-8 border-b border-[#E5E5E0] sm:border-b hover:bg-neutral-100 transition-colors duration-200 hard-shadow-hover ${
                    i < 3 ? 'lg:border-r lg:border-[#111111]' : ''
                  } ${
                    i < 2 ? 'sm:border-r sm:border-[#111111]' : ''
                  }`}
                >
                  <div
                    className="w-full h-32 mb-4 img-newsprint"
                    style={{
                      background: 'radial-gradient(#000 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                      opacity: 0.6,
                    }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CC0000] font-bold">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold mt-2 mb-2 leading-tight group-hover:text-[#CC0000] transition-colors duration-200">
                    {article.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3]">
                    {article.time}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t-4 border-[#111111] bg-[#F9F9F7] mt-auto">
        <div className="mx-auto max-w-screen-xl">
          {/* Top section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 border-b border-[#111111]">
            {/* Brand column */}
            <div className="lg:col-span-4 p-6 lg:p-10 lg:border-r border-[#111111] border-b sm:border-b-0">
              <h3 className="font-serif text-3xl font-black tracking-tighter mb-3">THE DAILY</h3>
              <p className="font-body text-sm text-[#525252] leading-relaxed mb-6 text-justify">
                An ode to the golden age of print journalism, reimagined for the web. Absolute
                clarity, hierarchy, and structure through high-contrast typography and grid-based
                layouts.
              </p>
              <div className="flex gap-2">
                {['X', 'Li', 'Gh', 'Rd'].map((social) => (
                  <span
                    key={social}
                    className="border border-[#111111] h-10 w-10 flex items-center justify-center font-mono text-xs font-bold hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-200 cursor-pointer"
                    style={{ borderRadius: 0 }}
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>

            {/* Sections column */}
            <div className="lg:col-span-2 p-6 lg:p-10 lg:border-r border-[#111111] border-b sm:border-b-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold block mb-4">
                Sections
              </span>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-sans text-sm text-[#525252] hover:text-[#CC0000] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div className="lg:col-span-2 p-6 lg:p-10 lg:border-r border-[#111111] border-b sm:border-b-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold block mb-4">
                Company
              </span>
              <ul className="space-y-2.5">
                {['About', 'Careers', 'Contact', 'Legal', 'Privacy'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-[#525252] hover:text-[#CC0000] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Edition info column */}
            <div className="lg:col-span-4 p-6 lg:p-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold block mb-4">
                Edition Info
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#737373]">Edition:</span>
                  <span className="font-mono text-xs text-[#111111] font-bold">Vol 1.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#737373]">Printed in:</span>
                  <span className="font-mono text-xs text-[#111111] font-bold">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#737373]">ISSN:</span>
                  <span className="font-mono text-xs text-[#111111] font-bold">0000-0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#737373]">Status:</span>
                  <span className="bg-[#CC0000] text-[#F9F9F7] px-2 py-0.5 font-mono text-[10px] uppercase font-bold">
                    In Print
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3]">
              © {new Date().getFullYear()} The Daily. All rights reserved.
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3]">
              Set in Playfair Display, Lora, Inter & JetBrains Mono
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
