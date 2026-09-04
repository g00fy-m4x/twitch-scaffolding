# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack, localhost:3000)
npm run build    # production build (also uses Turbopack)
npm run start    # serve production build
npm run lint     # run ESLint
```

There are no tests configured yet.

## Architecture

This is a **Next.js 16** app using the **App Router** with TypeScript and Tailwind CSS v4.

- `app/` — all routes live here; `layout.tsx` is the root layout, `page.tsx` is the index route
- `public/` — static assets served at `/`

### Key Next.js 16 differences from prior versions

**Always read `node_modules/next/dist/docs/` before writing Next.js code** — APIs changed significantly in v16.

- **Turbopack is the default** — `next dev` and `next build` both use it; no flag needed.
- **`middleware.ts` → `proxy.ts`** — the `middleware` filename and export are deprecated. Rename the file to `proxy.ts` and the export to `proxy`. Note: `proxy` runs on the Node.js runtime only; use `middleware` if you need the edge runtime.
- **All request APIs are async** — `params`, `searchParams`, `cookies()`, `headers()`, and `draftMode()` must be awaited.
- **`PageProps` / `LayoutProps` are global type helpers** — no import needed. Use `LayoutProps<'/path'>` and `PageProps<'/path'>` for typed route props (see `app/layout.tsx` for an example).
- **React Compiler** is opt-in stable — enable with `reactCompiler: true` in `next.config.ts`.
- **PPR** — the `experimental_ppr` route-segment config is removed; PPR is now controlled at the config level.
