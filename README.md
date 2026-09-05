# True Gain Website Master

This is the complete True Gain private-studio website using flexible single
appointments and prepaid strength and sports-massage blocks.

This version intentionally has no monthly memberships, client app, member
portal, independent programming or between-session coaching support.

## Main website files

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`

## Brand assets

- `public/true-gain-logo.png`
- `public/true-gain-sled-hero.webp`

## Coded design system

- `styles/design-tokens.css`
- `components/Button.tsx`
- `components/SectionHeading.tsx`
- `components/ServiceCard.tsx`

## Documentation

- `docs/BRAND-GUIDE.md`
- `docs/DESIGN-SYSTEM.md`

## Uploading to GitHub

Upload the contents of this folder to the root of your GitHub repository.

GitHub should show these folders on the first page:

- `app`
- `components`
- `docs`
- `public`
- `styles`

It should also show:

- `package.json`
- `tsconfig.json`
- `next-env.d.ts`

Vercel will redeploy automatically after the GitHub commit.

## Confirmed pricing

- 45-minute strength: £47.50 single / £213.75 for 5 / £403.75 for 10
- 60-minute strength: £65 single / £292.50 for 5 / £552.50 for 10
- 30-minute massage: £35 single / £157.50 for 5 / £297.50 for 10
- 60-minute massage: £60 single / £270 for 5 / £510 for 10

5-session blocks save 10%; 10-session blocks save 15%. Strength blocks
require twice-weekly attendance and massage blocks require fortnightly attendance.

Combined bundles:

- Strength + Reset: 5 × 60-minute strength sessions and 2 × 30-minute massages for £355.
- Strength + Recover: 10 × 60-minute strength sessions and 2 × 60-minute massages for £655.
