# PrintPop3D (Cloudflare Pages)

Live (Pages): https://printpop3d.pages.dev

## Local dev

```powershell
cd C:\\Users\\zd121\\Documents\\GitHub\\printpop3d
npx --yes wrangler pages dev public
```

## Manual deploy

```powershell
cd C:\\Users\\zd121\\Documents\\GitHub\\printpop3d
npx --yes wrangler pages deploy public --project-name printpop3d --branch main --commit-dirty=true
```

## Auto deploy from GitHub

This repo includes `.github/workflows/cloudflare-pages-deploy.yml` so pushes to `main` can deploy automatically.

1. In GitHub, open this repo -> `Settings` -> `Secrets and variables` -> `Actions`.
2. Add repository secret `CLOUDFLARE_API_TOKEN`.
3. Use a Cloudflare API token that has Pages edit access for account `ceb8012dd77f17d2727c48bbe263c45a`.
4. Push to `main` (or run the workflow manually from the `Actions` tab).

## Custom domain

In Cloudflare DNS for `printpop3d.com`, add:
- `CNAME` `@` -> `printpop3d.pages.dev` (proxied)

Then wait a couple minutes for the Pages custom domain status to go `active`.
