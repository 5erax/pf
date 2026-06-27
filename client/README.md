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

## Deployment

This app is a static Vite build. Production output is generated in `dist/`:

```bash
npm run build
```

Deploy the generated build to Vercel or any static hosting provider.
