# LaneLines

LaneLines is a polished React Router + Cloudflare Workers starter that ships with a production-ready marketing site, an authenticated app shell, and Supabase-ready auth flows. It’s designed to help swim clubs manage attendance, meet logistics, and athlete communications from one workspace.

## What’s included

- Marketing site with hero, pricing, about, and contact pages
- App dashboard layout for internal operations views
- Supabase auth callback + password reset routes
- Tailwind CSS styling with Inter type
- Cloudflare Workers + Vite integration

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Environment configuration

Supabase is loaded via the global script tag in `app/root.tsx` and expects the following environment variables:

```bash
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

You can also use the Vite-prefixed equivalents in local development:

```bash
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Production build

Build the app:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

