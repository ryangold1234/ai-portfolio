# ai-portfolio

Ryan Goldstein's AI portfolio — projects, tools, and AI consulting for small businesses.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Develop

```bash
npm install
npm run dev
```

## Content

Project case studies live in a single source of truth: `lib/projects.ts`. Add a project there and it appears on the home page, the projects index, and gets its own case-study page at `/projects/[slug]`.

## Deploy

Pushes to `main` deploy automatically via the Vercel GitHub integration.
