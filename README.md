# Aarav Mehta — Developer Portfolio

A modern, production-ready developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. Single-page scrolling layout with dark/light theming, smooth scroll-reveal animations, and fully responsive, mobile-first design.

## ✨ Features

- **Hero** — animated intro, profile art, floating stat cards, scrolling tech marquee
- **About** — bio, four pillar cards, personal info & education panels
- **Skills** — categorized, filterable skill cards with animated progress bars
- **Experience** — timeline layout with role, company, responsibilities & tech tags
- **Projects** — 6 demo projects with category filtering (All / React / Next.js / Full Stack), hover actions (Live Demo / GitHub)
- **Services** — 5 service cards with icons and tag chips
- **Certifications** — badge-style cards for credentials
- **Testimonials** — Swiper-powered autoplay slider with ratings
- **Contact** — contact details + UI-only form (no backend, by design)
- **Footer** — quick links, social links, copyright
- **Dark / Light mode** — via `next-themes`, defaults to dark
- **Animations** — Framer Motion fade-up, stagger, scale, hover, and scroll-reveal effects throughout
- **SEO** — Metadata API, Open Graph, Twitter Cards, `sitemap.ts`, `robots.ts`

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui primitives |
| Animation | Framer Motion |
| Icons | Lucide React + React Icons |
| Carousel | Swiper.js |
| Theming | next-themes |
| Fonts | Fraunces (display), JetBrains Mono (mono), Inter (sans) — self-hosted via `@fontsource` |

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx          # Assembles all sections
│   ├── globals.css       # Theme tokens, base styles, utilities
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── sections/         # Hero, About, Skills, Experience, Projects, Services, Certifications, Testimonials, Contact
│   ├── shared/            # Reveal/Stagger motion wrappers, SectionHeader, ProjectCard, SkillCard, GridBackdrop, ThemeToggle
│   └── ui/                # shadcn-style primitives (Button, Card, Input, Textarea, Label)
├── data/                  # profile.ts, skills.ts, services.ts, projects.ts, experience.ts, education.ts, certifications.ts, testimonials.ts
├── hooks/                 # use-active-section.ts, use-scrolled.ts
├── lib/                   # constants.ts, utils.ts, skill-icons.tsx
├── types/                 # Shared TypeScript interfaces
└── public/                 # SVG illustrations, favicon, placeholder resume.pdf
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

## ✏️ Customizing Your Content

All content lives in plain TypeScript objects under `/data` — no backend or CMS required:

- `data/profile.ts` — name, bio, contact info, social links, resume URL
- `data/skills.ts` — skills, categories, proficiency levels
- `data/services.ts` — services offered
- `data/projects.ts` — project cards (image, tags, links, category, status)
- `data/experience.ts` — work history timeline
- `data/education.ts` — degrees & institutions
- `data/certifications.ts` — credential cards
- `data/testimonials.ts` — client reviews

Replace the placeholder SVG illustrations in `/public` (avatar, project thumbnails, certification badges, testimonial avatars) with real photos/screenshots, and swap `public/resume.pdf` with your actual résumé.

## 📌 Notes

- The contact form is **UI only** — no backend/email service is wired up. Hook it up to a service like Resend, Formspree, or your own API route if you need real submissions.
- Fonts are self-hosted via `@fontsource` packages rather than `next/font/google`, so the project builds in network-restricted environments.
