# PrintPop3D (Cloudflare Pages)

Live (Pages): https://printpop3d.pages.dev

## Local dev

```powershell
cd C:\\Users\\zd121\\Documents\\GitHub\\printpop3d
npx --yes wrangler pages dev public
```

## Deploy

```powershell
cd C:\\Users\\zd121\\Documents\\GitHub\\printpop3d
npx --yes wrangler pages deploy public --project-name printpop3d --branch main --commit-dirty=true
```

## Custom domain

In Cloudflare DNS for `printpop3d.com`, add:
- `CNAME` `@` -> `printpop3d.pages.dev` (proxied)

Then wait a couple minutes for the Pages custom domain status to go `active`.
