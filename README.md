# Gita Daily — website

Marketing landing page + **Privacy Policy** and **Support** pages for the Gita Daily app,
built with [Astro](https://astro.build) for fast, static, SEO-friendly output.

## Pages
- `/` — landing page
- `/privacy` — privacy policy (required for the Google Play listing)
- `/support` — FAQ + contact

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # preview the built site
```

## Deploy — GitHub Pages (CI/CD)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
deploys it to GitHub Pages. **One-time setup:** in the repo, go to
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site then publishes to `https://<user>.github.io/gita-daily-web/`.

### Using a custom domain later
1. Add the domain in **Settings → Pages** (creates a `CNAME`).
2. In `astro.config.mjs`, set `site` to your domain and `base` to `'/'`.
3. Update the `Sitemap:` URL in `public/robots.txt`.

> Prefer Vercel/Netlify instead? Import the repo there for auto-deploys and set
> `base: '/'` in `astro.config.mjs`.

## TODO before launch
- Replace the placeholder contact email `hello@gitadaily.app` (in `src/pages/privacy.astro`
  and `src/pages/support.astro`) with a real, monitored address — Google Play requires a
  reachable support email.
- Swap the Play Store "Coming soon" button on the landing page for the real listing link.
- Optionally add app screenshots to the landing page.
