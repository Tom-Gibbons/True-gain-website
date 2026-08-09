TRUE GAIN — ESSENTIAL WEBSITE SOURCE ONLY

This package contains only the files needed to reproduce and deploy the website.

Included:
- app/               Next.js pages, routes and global CSS
- components/        Reusable website components
- public/            Images and static assets used by the site
- styles/            Shared design-token/style files
- package.json       Project dependencies and scripts
- package-lock.json  Locked dependency versions (if present)
- tsconfig.json      TypeScript configuration
- next-env.d.ts      Next.js TypeScript declarations (if present)
- next.config.*      Next.js configuration (if present)
- .gitignore         Git ignore rules (if present)

Not included:
- .next/ build output
- node_modules/
- Vercel build cache
- deployment logs
- generated static chunks
- old comparison ZIPs / update notes / backup files

To deploy:
1. Put these files in the root of the GitHub repository.
2. Vercel installs dependencies from package.json/package-lock.json.
3. Vercel builds the .next output automatically.

This is the cleaner source-code master to keep for the project.
