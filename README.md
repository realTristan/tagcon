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

**Live URL for this repo:** [https://realtristan.github.io/tagcon/](https://realtristan.github.io/tagcon/)

1. Push this repo to GitHub (the repo name becomes the URL path, e.g. `https://<user>.github.io/tagcon/`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

### Site shows a blank page or requests `/src/main.tsx`?

GitHub Pages is serving the raw source instead of the built app. Fix:

1. **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
2. Re-run the workflow: **Actions → Deploy to GitHub Pages → Run workflow**.
3. Open **`https://<user>.github.io/tagcon/`** (include the `/tagcon/` path).

To preview the production build locally:

```bash
npm run preview:pages
```

If your GitHub repo name is not `tagcon`, update `REPO_NAME` in the `preview:pages` script, or rely on CI which sets it from `github.event.repository.name`.

## Project structure

- `src/components/ui/` — shadcn/ui components
- `src/lib/utils.ts` — `cn()` helper for Tailwind class merging
- `src/index.css` — Tailwind + shadcn theme tokens
