# Accredian Enterprise — Partial Clone

**Assignment Submission — Full Stack Developer Intern**

| | |
|---|---|
| **Candidate** | Saviya |
| **Reference** | [enterprise.accredian.com](https://enterprise.accredian.com/) |
| **Repository** | https://github.com/Savith29/Accredian-Enterprise-Page |
| **Submitted** | 2026/07/23 |

> This project is an independent, partial recreation of the Accredian Enterprise landing page,
> built strictly for the purposes of this assignment. It is not affiliated with, endorsed by, or
> claiming ownership of Accredian's brand, content, or design assets.

---

## 1. Overview

This submission implements a fully responsive, component-based landing page for "Accredian
Enterprise" using Next.js and Tailwind CSS, along with a working lead-capture API as the bonus
deliverable. The sections below cover the tech stack, design approach, setup instructions,
AI-usage disclosure, and a list of improvements planned for a production iteration.

---

## 2. Tech Stack

- **Next.js 14** (App Router, functional components + hooks)
- **Tailwind CSS** for styling, with a custom design-token theme (`tailwind.config.js`)
- **Next.js API Routes** (`app/api/lead/route.js`) for the lead-capture bonus feature
- **next/font** for self-hosted Google Fonts (Fraunces, Inter, IBM Plex Mono)
- Deployed on **Vercel**

No external UI kit was used — every component is hand-built and reusable.

---

## 3. Design Approach

Rather than copy the source site's exact visuals, I built a distinct visual identity around the
same brief: an enterprise platform whose selling point is academic rigor (IIT/IIM partnerships)
and verifiable outcomes.

- **Palette:** deep ink navy background, brass/gold accent (credential + prestige), a seal-green
  secondary, and a warm parchment tone for light sections — evokes a certificate/transcript
  rather than a generic SaaS gradient.
- **Type:** Fraunces (serif, display) for headings paired with Inter (body/UI) and IBM Plex Mono
  for small "eyebrow" labels and data — a nod to the analytics/credentialing angle.
- **Signature element:** the "How It Works" section is styled like a ruled transcript ledger with
  roman-numeral entries, and the logo mark is a wax-seal motif — both tie back to the
  certification theme instead of using generic numbered cards.

## 4. Sections Built

1. **Navbar** — sticky, responsive, mobile hamburger menu, anchor-link navigation
2. **Hero** — headline, dual CTAs, animated seal mark, stat strip
3. **Trust bar** — academic/delivery partner strip
4. **Platform pillars** — 6-card feature grid (curriculum, mentorship, analytics, cohorts,
   customization, certification)
5. **Program tracks** — table of sample learning tracks
6. **How it works** — 4-step ledger-style process
7. **Success stories** — testimonial cards
8. **Lead capture form (bonus)** — client-side validated form that POSTs to `/api/lead`
9. **Footer** — sitemap links + credits

All sections are composed from small, reusable components in `/components`, and the page scrolls
smoothly between sections via anchor links (`#platform`, `#programs`, `#how-it-works`, etc.).

---

## 5. Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To create a production build locally:

```bash
npm run build
npm run start
```

> Building requires network access to fetch Google Fonts at build time (via `next/font/google`).
> This is normal — Vercel's build environment has this by default.

### Testing the lead-capture API directly

```bash
# Submit a lead
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@company.com","company":"Acme Inc","teamSize":"21–100","message":"Hi"}'

# List submitted leads (dev convenience only)
curl http://localhost:3000/api/lead
```

---

## 6. Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy — Vercel builds and hosts it automatically, including the `/api/lead` route as a
   serverless function.

---

## 7. AI Usage Disclosure

In line with the assignment's AI-usage requirement, this section discloses where AI tooling
(**Claude**, by Anthropic) was used during development, and what was reviewed or changed manually.

**Where AI helped:**
- Scaffolding the Next.js App Router project structure (`app/`, `components/`, API route).
- Generating the initial design-token system (color palette, type pairing) and first drafts of
  each component (`Hero`, `Navbar`, `Pillars`, `HowItWorks`, `LeadForm`, etc.) based on a brief
  I gave it about Accredian Enterprise's actual page content (via web search summaries, since I
  don't have direct access to the live site's markup).
- Writing the `/api/lead` route with request validation and the client-side form's
  fetch/error-handling logic.
- Drafting this README structure.

**What I modified/reviewed manually:**
- Adjusted the color tokens and section order to better match how I wanted the story to flow
  (Hero → Trust → Platform → Programs → Process → Proof → Contact).
- Rewrote several copy lines to sound less like AI-generated marketing filler and more specific.
- Verified the build compiles cleanly (`npm run build`) and fixed a lint error
  (`react/no-unescaped-entities`) that AI-generated JSX introduced.
- Reviewed the API route for basic security sense (input validation, no secrets committed) and
  documented that the in-memory lead store is a mock, not production-ready persistence.
- Checked responsiveness logic (grid breakpoints, mobile nav) by reasoning through the Tailwind
  classes rather than accepting them blindly.

---

## 8. Planned Improvements

- Replace the in-memory `leads` array in `/api/lead` with a real database (e.g. Postgres via
  Vercel Postgres, or MongoDB Atlas) so submissions persist across deploys/instances.
  Currently, it's not shared across serverless invocations and resets on redeploy.
- Add email notification on lead submission (e.g. via Resend or Nodemailer) to actually alert a
  sales team.
- Add proper page-level metadata for each in-view section (JSON-LD, richer `next/metadata`) and
  an `og:image` for social sharing.
- Add scroll-triggered reveal animations (respecting `prefers-reduced-motion`, which the base
  styles already account for) for a more polished feel on first load.
- Add automated tests (Playwright for the form flow, React Testing Library for components).
- Break the single page into real sub-routes (`/programs`, `/contact`) if the assignment scope
  called for multi-page navigation rather than a single scrolling landing page.
- Add a CMS layer (Sanity/Contentful) so copy and testimonials aren't hardcoded in components.

---

## 9. Project Structure

```
app/
  api/lead/route.js   # POST/GET lead capture endpoint
  layout.jsx          # Root layout, font loading
  page.jsx            # Assembles all sections
  globals.css         # Tailwind base + design tokens (ledger rule, seal spin, etc.)
components/
  Navbar.jsx
  Hero.jsx
  TrustBar.jsx
  Pillars.jsx
  ProgramTracks.jsx
  HowItWorks.jsx
  Testimonials.jsx
  LeadForm.jsx
  Footer.jsx
  Section.jsx          # shared section wrapper (reused by 6 sections)
  SealMark.jsx          # signature logo/seal SVG
tailwind.config.js       # color tokens, fonts, shadows
```

---

## Declaration

This project was built independently for the purposes of this assignment, with AI assistance
disclosed in Section 7 above. No proprietary Accredian source code, assets, or copyrighted
material were copied; the UI was recreated from publicly viewable page content.
