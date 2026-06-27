# tagcon

Vite + React + TypeScript + Tailwind CSS v4 + shadcn/ui, configured for GitHub Pages deployment.

## Development

```bash
npm install
npm run dev
```

## Add shadcn components

```bash
npx shadcn@latest add card
```

## GitHub Pages deployment

1. Push this repo to GitHub (the repo name becomes the URL path, e.g. `https://<user>.github.io/tagcon/`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

To preview the production build locally:

```bash
npm run preview:pages
```

If your GitHub repo name is not `tagcon`, update `REPO_NAME` in the `preview:pages` script, or rely on CI which sets it from `github.event.repository.name`.

## Project structure

- `src/components/ui/` — shadcn/ui components
- `src/lib/utils.ts` — `cn()` helper for Tailwind class merging
- `src/index.css` — Tailwind + shadcn theme tokens
