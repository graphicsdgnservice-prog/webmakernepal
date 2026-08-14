# Web Maker Nepal

A modern corporate agency website for Web Maker Nepal, a web design, development, branding, and B2B SEO agency led by Pratik Kumar Singh. The site presents the agency's capabilities, industry experience, performance standards, selected outcomes, and direct contact options in a responsive dark-mode interface.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom global design system
- Lucide React icons
- Netlify Forms for project inquiries
- Netlify deployment through the TanStack Start Vite plugin

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The application runs at `http://localhost:3000` by default. For local Netlify platform emulation, use:

```bash
netlify dev --port 8889
```

Netlify Forms submissions are registered from `public/contact-form.html` and should be tested on a deployed preview.

## Project Structure

- `src/routes/index.tsx` — Complete one-page agency experience and contact form logic
- `src/routes/__root.tsx` — Document shell and search metadata
- `src/styles.css` — Responsive visual system, layouts, motion, and component styling
- `public/contact-form.html` — Static form detector for Netlify Forms
- `public/favicon.svg` — Custom WMN favicon
- `netlify.toml` — Netlify build and local development configuration
