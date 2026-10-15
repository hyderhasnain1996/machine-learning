# Team page — drop-in for the ERP / professor dashboard

A self-contained copy of the lab website's Team page, ready to paste into your
React / Next.js + Tailwind ERP. No i18n, no site-specific components — just
three files.

## Files
| File | What it is |
|------|-----------|
| `TeamPage.tsx` | The full page component (hero, faculty, post-docs, students, alumni, join-us). |
| `teamData.ts` | The data model + your member list. **Edit this** to change people. |
| `team.css` | Required CSS (flip cards, neon title, floating blobs). |

## Install (once)

1. **Copy the three files** into your ERP project, e.g. `src/team/`.

2. **Install the two dependencies** (skip any you already have):
   ```bash
   npm install framer-motion lucide-react
   ```
   Tailwind CSS is assumed to already be set up.

3. **Import the CSS once** — either in the page that renders the team, or in
   your global stylesheet:
   ```ts
   import './team.css'
   ```

4. **Render it** wherever the dashboard route lives:
   ```tsx
   import TeamPage from './team/TeamPage'
   export default function Page() { return <TeamPage /> }
   ```

## Customise

- **People:** edit `teamData.ts`. Members are grouped automatically:
  - role contains `"Professor"` → Faculty section
  - role contains `"Post-Doctoral"` → Post-Doc section
  - active + not the above → Students section
  - `alumniMembers` array → Alumni section
- **Photos:** set `image` to a URL or a path in your `public/` folder; if omitted
  it shows the person's initials.
- **Labels / hero image / CTA buttons:** plain English strings inside
  `TeamPage.tsx` — edit directly.

## Notes / gotchas

- **`'use client'`** is at the top of `TeamPage.tsx` (needed for framer-motion
  in the Next.js App Router). On the Pages Router or plain React you can remove
  that line.
- **Tailwind purge:** all colour classes are written as complete literals (no
  `bg-${x}` string building), so Tailwind's JIT will keep them. If your Tailwind
  `content` config doesn't already include this folder, add its path, e.g.
  `content: ['./src/**/*.{ts,tsx}']`.
- **Dark mode** works if your Tailwind config uses `darkMode: 'class'` (or media).
- Don't want the entrance animations? Remove the `framer-motion` import and
  change every `<motion.div …>` to a plain `<div>` (and drop the `initial` /
  `animate` props).
