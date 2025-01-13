# TaskRatchet.com Knowledge

## Project Overview
- Marketing website for TaskRatchet built with Astro
- Uses Svelte for interactive components
- PNPM as package manager

## Development
- Run `pnpm install` to install dependencies
- Run `pnpm run dev` to start development server
- Run `pnpm run build` to build for production
- Run `pnpm run preview` to preview production build

## Project Structure
- `/src` - Main content directory
  - `/pages` - Astro pages (file-based routing)
  - `/layouts` - Reusable layouts
  - `/components` - Reusable components (Astro and Svelte)

## Troubleshooting
- If PNPM fails with EPERM errors, try:
  1. Remove node_modules: `rm -rf node_modules`
  2. Create fresh directory: `mkdir node_modules`
  3. Set permissions: `chmod 755 node_modules`
  4. Reinstall: `pnpm install`
