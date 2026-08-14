# Project Guide

## Overview

This repository contains the Web Maker Nepal corporate agency website. It is a single-page TanStack Start application focused on lead generation, service positioning, portfolio outcomes, and direct WhatsApp or Netlify Forms contact.

## Architecture

- `src/routes/index.tsx` contains the home page, content data, SVG logo, responsive navigation, visual mockups, and inquiry form state.
- `src/routes/__root.tsx` defines the HTML shell, metadata, favicon, and global stylesheet import.
- `src/styles.css` contains the full design system. It uses CSS custom properties for the dark palette, responsive breakpoints, reduced-motion support, and component-level classes.
- `public/contact-form.html` mirrors the React inquiry fields so Netlify can register the form at build time.
- `src/router.tsx` configures TanStack Router and scroll restoration.

## Conventions

- Use TypeScript and functional React components.
- Keep page content and small static datasets near the route until reuse justifies extraction.
- Use descriptive class names and existing CSS variables rather than introducing one-off colors.
- Preserve the dark editorial-tech direction, cyan/violet accent hierarchy, strong typography, and generous spacing.
- Maintain keyboard focus behavior, semantic sectioning, form labels, and reduced-motion support.
- Keep external contact links in one shared constant when possible.

## Netlify Forms

The visible form is named `project-inquiry` and submits URL-encoded data to `/contact-form.html`. Every submitted field must also exist in `public/contact-form.html`. If the form name or fields change, update both files together and rerun the Netlify Forms activation script.

## Commands

- `pnpm dev` starts the Vite development server.
- `pnpm build` creates the production build.
- `netlify dev --port 8889` runs the site with local Netlify emulation.

Do not commit generated build output or local Netlify state.
