# Deploy Portfolio to Vercel

This portfolio is designed to deploy without a database or paid service.

## Recommended flow

1. Sign in to Vercel with your GitHub account.
2. Choose **Add New → Project**.
3. Import this repository:
   - `bayupra7ama/kodekita`
4. Framework preset should be detected as **Next.js**.
5. Keep the default build settings.
6. Deploy.

## Optional environment variable

After the first deployment, copy the final Vercel URL and add:

```text
NEXT_PUBLIC_SITE_URL=https://YOUR-PROJECT.vercel.app
```

Then redeploy. This makes sitemap and canonical metadata use the final production URL.

## Recommended repository rename

For a cleaner public portfolio, rename the repository to:

```text
bayu-pratama-portfolio
```

GitHub will redirect the old repository URL after a rename.

## Custom domain later

A custom domain is optional. The free `.vercel.app` address is enough to launch the portfolio first.

## Before publishing

- verify all GitHub project links
- verify LinkedIn and email links
- check the site on mobile
- print /resume once to confirm PDF output
- set NEXT_PUBLIC_SITE_URL after deployment

## Updating the portfolio

Every push to the connected GitHub branch will trigger a new Vercel deployment automatically.
