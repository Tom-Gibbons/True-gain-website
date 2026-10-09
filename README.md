# True Gain — Online Coaching Launch

Adapted from the October 2026 studio website. Existing branding and assets are retained. The public homepage offers online coaching only; studio prices, bookings, images presented as premises, and illustrative testimonials are removed from the rendered page.

## Agreed offer
£150 per calendar month in advance. Initial three-calendar-month commitment (£450 across three payments), then monthly rolling. Seven calendar days’ email notice before renewal; statutory rights preserved. Personalised programming, weekly form-based check-ins, up to three technique clips weekly, WhatsApp replies within 1–2 working days Monday–Saturday, and suitable movement quality/injury-risk reduction exercises. Delivery: Google Sheets, Google Forms and WhatsApp.

## Run locally
`npm ci`, then `npm run dev`. Validate with `npm run build`.

## Studio preservation
`archive/studio-original/` contains exact original copies of the homepage, metadata, booking component, testimonials and original documentation as text files. These are not public routes. Original reusable assets remain in `public/`; they are not secret or access-protected, but unavailable studio sections are not rendered. Restore selectively when studio services are ready, keeping online coaching as its own offer.

## Before publishing
- Verify hello@truegainperformance.co.uk exists and receives email. The enquiry form deliberately prepares an email draft; visitors must send it from their email app. It is not a server-backed form. A future direct submission form needs an actual configured provider or backend.
- Confirm the exact BSc certificate wording; no Level 7 or postgraduate claim has been added.
- Finalise full coaching terms, privacy notice and onboarding paperwork, including health screening, appropriate handling/retention of health information and videos, and the cooling-off/early-start request process. The page contains a summary, not a complete legal agreement.
- Configure payments, month-end billing dates and cancellation handling. There is no checkout, recurring billing integration, client portal or live calendar in this ZIP.
- Create client-specific restricted programme sheets, the weekly check-in form, a private client tracker and a dedicated coaching WhatsApp channel. Share links privately after onboarding.
- Check whether bank holidays are excluded from working days and update the published promise if needed; the current agreed wording is Monday–Saturday with Sundays excluded.
- Check all imagery and qualifications are accurate and you have rights to use the retained assets. The existing training hero is used as illustrative training imagery, not proof of studio premises.

## Future studio launch
Reintroduce studio content from the archive only when services are available. Update navigation, service options, imagery, search metadata and consultation options together. Add genuine permission-approved testimonials when available.
