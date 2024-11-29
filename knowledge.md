# TaskRatchet.com

Website for TaskRatchet built with Astro.

## Project Setup

- Package manager: pnpm (based on .npmrc and shell config)
- Framework: Astro with TypeScript and Tailwind CSS
- Node version managed by .nvmrc

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev        # Runs at localhost:4321

# Build for production 
pnpm build      # Outputs to ./dist/

# Preview build
pnpm preview
```

## Key Technologies

- Astro
- TypeScript (strict mode)
- Tailwind CSS
- VS Code recommended extensions:
  - astro-build.astro-vscode

## Project Structure

Standard Astro project layout:
- `/src/pages/` - Page components and routes
- `/src/layouts/` - Reusable layouts
- `/src/components/` - UI components
- `/public/` - Static assets

## Style Guide

- Use TypeScript strict mode
- Format with Prettier (default config)
- Use Tailwind for styling
