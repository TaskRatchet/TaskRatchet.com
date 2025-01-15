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
    - Each component should be in its own file
    - Use Svelte for interactive components
    - Use Astro for static components
  - `/styles` - Global CSS files

## Troubleshooting

- If PNPM fails with EPERM errors, try:
  1. Remove node_modules: `rm -rf node_modules`
  2. Create fresh directory: `mkdir node_modules`
  3. Set permissions: `chmod 755 node_modules`
  4. Reinstall: `pnpm install`

## Styling Guidelines

- Keep styles in component files unless they are truly global
- When splitting components:
  - Move related styles into the component file
  - Use `<style>` blocks in Svelte components
  - Keep only theme variables and utility classes in global.css
  - Use `:global()` in Svelte components when styles need to apply across component boundaries
  - Be careful with transitions and animations when using scoped styles
=======
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

### Transitions
- Disable all transitions during initial page load with `.no-transitions`
- Enable transitions after page load with small delay
- Use CSS variables to maintain consistent transition properties
- Apply transitions only to specific properties that need them
- Keep transition duration around 300ms for optimal UX
- Include -webkit-text-fill-color in theme transitions for consistent text fading
- Apply transitions to both container elements and their text children
- Use explicit transition properties for card-like elements to ensure smooth background changes

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

## Hero Section Guidelines
- Use subtle background patterns with low opacity (0.05-0.1) for depth
- Implement responsive typography with clamp()
- Add perspective transforms for subtle 3D effects
- Keep animations subtle and smooth (0.2-0.3s)
- Use grid layouts for flexible content arrangement
- Ensure dark mode has reduced pattern opacity
- Maintain readability with sufficient contrast
- Scale down effects on mobile for better performance

## Spacing Guidelines
- Use asymmetric padding for sections: 2.5rem top, 4rem bottom
- Center section headings visually with 1.5rem top margin, 2.5rem bottom margin
- Section headings should be 2.25rem
- Reduce spacing on mobile by ~25%
- Keep consistent vertical rhythm between sections
- Use negative margins sparingly, only for overlapping effects

## Preventing Flash of Unstyled Content (FOUC)
- Put critical theme variables in inline styles in Layout.astro
- Include essential layout styles inline (container widths, critical positioning)
- Add font-family declaration inline to prevent text reflow
- Set data-theme attribute before page renders using inline script
- Use aspect-ratio and object-fit on images to prevent layout shift
- Hide body initially with opacity and fade in after styles load
- Set minimum heights on containers that will have dynamic content
- Disable pointer-events on interactive elements until mounted
- Use visibility/opacity to hide tooltips and popups during load
