# SEO Setup (Google + Seznam)

## 1) Verification tags

In `index.html`, replace placeholders:

- `REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN`
- `REPLACE_WITH_SEZNAM_VERIFICATION_TOKEN`

Sources:
- Google Search Console ownership verification:
  https://support.google.com/webmasters/answer/9008080
- Seznam Webmaster verification:
  https://o-seznam.cz/napoveda/vyhledavani/seznam-webmaster/

## 2) Indexation signals

Already configured:

- `meta name="robots" content="index, follow, max-image-preview:large"`
- `meta name="googlebot" ...`
- canonical URL
- hreflang (`cs-CZ`, `x-default`)
- sitemap: `https://vyzivne.vercel.app/sitemap.xml`
- robots: `https://vyzivne.vercel.app/robots.txt`

## 3) Submit to tools

1. Google Search Console:
   - add URL-prefix property `https://vyzivne.vercel.app/`
   - verify ownership
   - submit sitemap URL

2. Seznam Webmaster (`reporter.seznam.cz`):
   - add web
   - verify via meta tag or file
   - keep verification permanently on site
   - submit sitemap URL if requested in interface

## 4) Important Seznam note

If you need to **block indexing** of a page, use HTML meta robots on that page.
Do not rely on `X-Robots-Tag` for SeznamBot.

Source:
https://o-seznam.cz/napoveda/vyhledavani/seznambot/meta-tag-robots/
