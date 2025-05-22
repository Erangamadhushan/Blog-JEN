# Astro-JEN

Astro-JEN is a modern static site built with [Astro](https://astro.build/), a fast and flexible framework for building content-focused websites. Astro enables you to write components using your favorite UI frameworks (like React, Vue, or Svelte) or just plain HTML, and ships zero JavaScript to the browser by default for optimal performance.

## Why Astro?

- **Performance First:** Astro generates static HTML for every page, resulting in lightning-fast load times.
- **Component-Based:** Build reusable UI components with scoped styles.
- **Framework Agnostic:** Use React, Vue, Svelte, or just HTML and CSS.
- **Developer Experience:** Enjoy built-in TypeScript support, fast refresh, and a simple project structure.

## Project Structure

```
/
├── public/              # Static assets (favicon, images, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout components for pages
│   └── pages/           # Page routes (file-based routing)
├── package.json         # Project metadata and scripts
└── astro.config.mjs     # Astro configuration
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

For more details, see the [Astro documentation](https://docs.astro.build/).
