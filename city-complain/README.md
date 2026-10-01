# CivicDesk frontend deployment

## Vercel

Import this frontend as a separate Vercel project and set its **Root Directory** to `city-complain` (the directory containing this `package.json`). Vercel should use the Vite defaults: build command `npm run build` and output directory `dist`.

Add this environment variable in Vercel for Production (and Preview if you deploy previews):

```text
VITE_API_BASE_URL=https://YOUR-RENDER-SERVICE.onrender.com
```

Replace the value with the public HTTPS URL of the Render backend. Do not add a trailing slash or `/api`; frontend requests append their endpoint paths directly. Redeploy after changing a Vite environment variable because it is embedded during the build.

The Vite `/api` proxy in `vite.config.js` is only for local development and preview. It does not run in Vercel production.

## Backend CORS

In the separate Render backend service, set `CORS_ORIGINS` to the exact frontend origin(s), comma-separated, with no path. For example:

```text
CORS_ORIGINS=https://your-project.vercel.app,https://your-custom-domain.com
```

Add every Vercel Preview origin you intend to use. Keep the existing frontend and backend deployments separate.
