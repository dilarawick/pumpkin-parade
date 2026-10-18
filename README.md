# Pumpkin Parade — Immersive Halloween Experience

A fun little Halloween themed website filled with spooky vibes, creepy surprises, and a touch of magic. Built for **Vercel**.

## Features

- Animated night sky: twinkling stars, glowing moon, drifting clouds, fog
- Falling ember / leaf canvas particles in Halloween colours
- Live countdown to Halloween (Oct 31)
- Trick or Treat game — 12 doors + confetti
- Costume Lab — 6 vibes
- Spell Forge — potion chant maker
- Spooky stories + haunted zones
- Halloween palette: pumpkin orange, toxic green, blood red, witch violet

## Vercel-ready structure (Next.js 14 App Router)

```
app/layout.jsx, app/page.jsx, app/globals.css
components/ NightSky, EmberCanvas, Countdown, TrickOrTreat, CostumeGenerator, SpellMaker
lib/data.js
public/favicon.svg
next.config.mjs, vercel.json, jsconfig.json, package.json
```

## Deploy to Vercel

**Option A — Dashboard (easiest):**
1. Push repo to GitHub.
2. Go to vercel.com/new → Import `pumpkin-parade`.
3. Framework: Next.js (auto). Build: `next build`. Deploy!

**Option B — CLI:**
```powershell
npm i -g vercel
vercel
vercel --prod
```

## Local dev
```powershell
npm install
npm run dev
npm run build
```
Node 18.18+ required.
