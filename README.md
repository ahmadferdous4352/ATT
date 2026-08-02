# Afghanistan Tales & Trails

A premium, editorial homepage for a visual production studio operating across Afghanistan — built with React 18, TypeScript, Tailwind CSS, Framer Motion, and React Router, with a built-in content editor (Decap CMS) so you can update text, images, and projects from a browser without touching code.

## Getting started

Requires Node.js v20.x.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## What's fully built

- Homepage: Navbar, editorial intro, hero image, showreel placeholder, services, "Why ATT," featured work, contact CTA, footer — all sections from the spec, in order.
- Routing for `/`, `/work`, `/work/:slug`, `/services`, `/about`, `/contact`, `/ethics`, all sharing the persistent Navbar/Footer.
- `/services`, `/ethics`, and `/contact` are fully written out. `/work` lists all projects (no category filter yet). `/about` has a real brand-story section and an honest placeholder for team bios rather than invented names.
- Mobile menu: escape-to-close, body-scroll lock, 44px tap targets.
- Reduced-motion support throughout (a global CSS safety net plus `useReducedMotion()` disabling the hero parallax specifically).
- A content editor at `/admin` (see setup below) for projects, the hero image, logo, services, and contact details — no git required for day-to-day edits.

## Setting up the content editor (one-time, ~2 minutes)

The editor is already built into this codebase. Three steps, all in your Netlify dashboard, and all must be done by you (I can't click these on your behalf):

1. **Site settings → Identity → Enable Identity.**
2. **Site settings → Identity → Services → Git Gateway → Enable Git Gateway.** This is what lets the editor commit changes to your repo without you needing to give it your own GitHub password.
3. **Site settings → Identity → Registration → set to "Invite only."** Then, on the main Identity tab, click **Invite users** and invite your own email address. You'll get an email with a link — click it, set a password, and you're in.

After that, go to `yoursite.com/admin` any time, log in, and you'll see a WordPress-style dashboard:

- **Projects** — add, edit, or delete a project, including dragging in a cover image and pasting a Vimeo/YouTube link for a short intro video. This writes to `src/content/projects/`.
- **Site Settings → General** — swap the hero photo, upload a logo (leave it empty to keep the default "ATT" text mark), update your contact email/WhatsApp link, and set the homepage showreel video + poster image.
- **Site Settings → Services** — edit the six service titles/descriptions.

Video works by link, not upload: paste a Vimeo or YouTube URL into the relevant field, and it plays in a click-to-start embed (no autoplay-with-sound on page load, matches the spec). Uploading a video file directly isn't offered, on purpose — git repos and Netlify's static hosting aren't built for large binary files or video streaming, so a dedicated video host is the right tool here, same as almost every professional site.

Every save there is a real commit to your GitHub repo behind the scenes, which triggers Netlify to rebuild automatically — same as if you'd pushed the change yourself, just without opening GitHub.

## What's still placeholder, and needs your input either way

- **Hero and project photography:** I didn't source or generate photos — real photos of real people need the same consent process the Ethical Filming Policy page describes, so that call belongs to the studio, not this build. Upload real images through `/admin` once you have them; until then, the layout degrades gracefully (a clean category label instead of a broken image).
- **Contact form backend:** `ContactPage.tsx` has the full field set and a working local submit state, but isn't wired to a real email/backend service yet (Formspree, a serverless function, etc. — a small follow-up).
- **Showreel:** `ShowreelSection.tsx` shows a "coming soon" state; swap it for an embedded Vimeo player once a reel exists.
- **Social links:** Instagram/YouTube icons in the footer still link to `#` — real URLs weren't provided, so I didn't guess at them.

## Design tokens

Colors are used directly via Tailwind's arbitrary-value syntax (e.g. `bg-[#0E0E0E]`) to match the spec exactly; `tailwind.config.js` only adds `font-sans: Inter` and the `sand` accent color as named tokens.
