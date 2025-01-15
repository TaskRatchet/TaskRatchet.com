# TaskRatchet.com

Marketing website for TaskRatchet built with Astro and Svelte.

## Development

Install dependencies:
```sh
pnpm install
```

Start development server:
```sh
pnpm run dev
```

Build for production:
```sh
pnpm run build
```

Preview production build:
```sh
pnpm run preview
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Svelte components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Astro pages
│   └── styles/      # Global styles
└── package.json
```

## Deployment

The site is deployed to [taskratchet.com](https://taskratchet.com) via Render. Deployments are triggered automatically when changes are pushed to the main branch.

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Svelte](https://svelte.dev) - Component framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
