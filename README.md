# Rise at Seven mobile homepage clone starter

This is a mobile-first Next.js + TypeScript + Tailwind CSS starter for recreating only the Rise at Seven homepage.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 and test at mobile widths first: 375px, 390px, 414px, and 430px.

## Matching checklist

1. Capture the live mobile homepage screenshot.
2. Replace placeholder image/logo blocks with exact permitted assets in `public/assets`.
3. Inspect live computed typography and update `src/app/globals.css`.
4. Tune section padding, heading line-height, tracking, card radius, and menu overlay timing.
5. Compare screenshots at 375x812, 390x844, and 430x932 until the pixel drift is low.

## Important files

- `src/app/page.tsx` wires homepage sections.
- `src/components/layout/Header.tsx` contains hamburger mobile behavior.
- `src/data/site.ts` contains menus, services, cards, and news content.
- `src/app/globals.css` contains theme tokens and global animation utilities.
