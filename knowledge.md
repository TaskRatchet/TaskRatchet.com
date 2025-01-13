# TaskRatchet.com Knowledge

## Project Overview

- Marketing website for TaskRatchet built with Astro
- Uses Svelte for interactive components
- PNPM as package manager

## Development

- Run `pnpm install` to install dependencies
- Run `pnpm run dev` to start development server (never run dev, as it is will timeout under normal function)
- Run `pnpm run build` to build for production
- Run `pnpm run preview` to preview production build

## Project Structure

- `/src` - Main content directory
  - `/pages` - Astro pages (file-based routing)
  - `/layouts` - Reusable layouts
  - `/components` - Reusable components (Astro and Svelte)
  - `/styles` - Global CSS files

## Troubleshooting

- If PNPM fails with EPERM errors, try:
  1. Remove node_modules: `rm -rf node_modules`
  2. Create fresh directory: `mkdir node_modules`
  3. Set permissions: `chmod 755 node_modules`
  4. Reinstall: `pnpm install`

## Styling Guidelines

- Keep styles in component files unless they are truly global
- Global styles should be limited to:
  - CSS variables
  - Reset styles
  - Base typography
  - Utility classes (like .container)
- Use `<style is:global>` for styles that need to apply across multiple elements
- Use regular `<style>` for component-specific styles that should be scoped
- Set base background color on `main` element, only override for specific sections
- Use gray-100 for card backgrounds to ensure sufficient contrast against white
- For hero background images:
  - Use background-position to control focal point
  - Prefer cropping less interesting parts of image when aspect ratio changes
  - Use absolute (not fixed) positioning for overlaid headers to allow scrolling

- Keep styles in component files unless they are truly global
- Global styles should be limited to:
  - CSS variables
  - Reset styles
  - Base typography
  - Utility classes (like .container)
- Use `<style is:global>` for styles that need to apply across multiple elements
- Use regular `<style>` for component-specific styles that should be scoped
- Set base background color on `main` element, only override for specific sections
- Use gray-100 for card backgrounds to ensure sufficient contrast against white
- For hero background images:
  - Use background-position to control focal point
  - Prefer cropping less interesting parts of image when aspect ratio changes

- Keep styles in component files unless they are truly global
- Global styles should be limited to:
  - CSS variables
  - Reset styles
  - Base typography
  - Utility classes (like .container)
- Use `<style is:global>` for styles that need to apply across multiple elements
- Use regular `<style>` for component-specific styles that should be scoped
- Set base background color on `main` element, only override for specific sections
- Use gray-100 for card backgrounds to ensure sufficient contrast against white
- Use CSS variables for theme colors to support dark mode

## Theme System
- Use `data-theme` attribute on html element for theme switching
- Store theme preference in localStorage
- Default to system color scheme preference
- Provide variables for both light and dark themes in :root
- Use semantic color names in variables (e.g., --bg-main, --text-primary)
- Use `is:inline` for critical theme setup in head
- Keep theme toggle logic simple with inline handlers
- Apply theme styles to html[data-theme="dark"] instead of using media queries
- Always provide fallback for when data-theme isn't set
- Add smooth transitions for theme changes:
  - Set transitions on html element instead of universal selector for smoother theme changes
  - Define transition timing in CSS variables for consistency
  - Keep duration around 0.3s for best UX
  - Exclude interactive elements from theme transitions
- Dark mode contrast guidelines:
  - Use lighter grays (gray-50) for primary text
  - Keep darker grays (gray-800) for card backgrounds
  - Maintain consistent card backgrounds across components
  - Provide specific variables for different text roles (headings, body, etc.)

## Common Issues
- If styles flash and disappear, check if they need to be global with `is:global`
- Avoid setting height: 100vh on body, use min-height on main instead to prevent scroll issues
