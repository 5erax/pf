# Lagna Portfolio

Personal portfolio for Lagna / 5erax, focused on fullstack web development, React UI implementation, backend integration, and production-ready product interfaces.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- motion/react
- Radix UI primitives
- Paper shader background

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```txt
src/
  components/
    common/       shared UI behavior such as reveal, progress, cards
    layout/       navbar, footer, page shell
    sections/     portfolio page sections
    ui/           reusable UI primitives
  data/           profile, project, skills, site metadata
  hooks/          section visibility and active-section hooks
  lib/            utilities and scroll helpers
```

## Editing Content

- Update profile links, current focus, email, and social URLs in `src/data/profile.ts`.
- Update global site metadata in `src/data/site.ts` and keep `index.html` aligned for SEO/social tags.
- Update skills in `src/data/skills.ts`.
- Update project case studies, tech stacks, source links, and live demo links in `src/data/projects.ts`.
- Use `liveUrl: "#"` only when a demo is not available; the UI will show `Demo coming soon` instead of a dead link.

## Motion Guidelines

- Use `motion/react` only. Do not reintroduce `framer-motion`.
- Prefer `opacity`, `transform`, and small scale changes.
- Avoid animating layout properties such as `height`, `width`, `top`, `left`, and `flex-grow`.
- Keep reveal timing consistent through `src/components/common/Reveal.tsx`.
- Respect `prefers-reduced-motion`.
- Below-fold sections are lazy-loaded behind Suspense fallbacks. Keep hash navigation and case-study access working when changing this flow.

## SEO & Social Assets

- `public/robots.txt` and `public/sitemap.xml` describe the deployed static site.
- `public/og-image.png` is used by Open Graph and Twitter cards.
- `public/apple-touch-icon.png` is used for mobile saved-site previews.
- Keep `src/data/site.ts` and `index.html` aligned when changing canonical URLs or social preview assets.

## QA Notes

- Phase 13 responsive QA covers mobile `390x844`, tablet `768x1024`, desktop `1440x900`, and wide `1920x1080`.
- Keyboard QA checks skip link order, visible focus, and case-study drawer open/close behavior.
- Deploy preview validation still needs to be repeated on the hosted Vercel URL after push.

## Deployment

This app is a static Vite build. Production output is generated in `dist/`:

```bash
npm run build
```

Deploy the generated build to Vercel or any static hosting provider.
