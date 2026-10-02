# Newsprint Portfolio

A vintage-newspaper-inspired portfolio / landing page built with Next.js 16, styled like a classic printed broadsheet — serif mastheads, drop caps, hard shadows, and a breaking-news ticker.

## Features

- **Newspaper masthead** — sticky header with edition metadata and serif masthead typography
- **Breaking-news ticker** — CSS-only marquee ticker with breaking badges
- **Broadsheet hero** — asymmetric 8/4 grid, drop cap, massive serif headline
- **Features section** — asymmetric 5/7 grid with icon boxes
- **Inverted "How It Works"** — black background, white text, red step numbers
- **Stats bar** — monospace KPI values
- **Testimonials** — pull quotes with hard-shadow hover
- **Newsletter CTA** — bottom-border-only inputs
- **Latest articles** — 4-column article grid
- Newsprint design tokens: custom colors, `radius=0`, serif fonts (Playfair Display, Lora, Inter, JetBrains Mono)

## Tech stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, tailwindcss-animate
- **UI:** shadcn/ui components, lucide-react icons
- **Data:** Prisma + SQLite scaffold (`prisma/schema.prisma`, `db/custom.db`) — optional, not required for the static site

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev        # development server
npm run build      # static export -> out/
```

The production build is a fully static export (`output: "export"` in `next.config.ts`), so the site can be hosted on any static host — no server required.

## Project structure

```
├── src/
│   ├── app/            # App Router pages (page.tsx, layout.tsx, globals.css)
│   ├── components/ui/  # shadcn/ui components
│   ├── hooks/          # use-mobile, use-toast
│   └── lib/            # utils, db (Prisma client scaffold)
├── prisma/             # schema.prisma (SQLite)
├── db/                 # local SQLite database file
├── public/             # static assets
├── next.config.ts      # static-export config
└── worklog.md          # build notes
```

## Deploy notes

Statically exported — deploy `out/` to GitHub Pages, Cloudflare Pages, or any static host. The bundled `Caddyfile` is for self-hosting the static output with Caddy.

## Author

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
