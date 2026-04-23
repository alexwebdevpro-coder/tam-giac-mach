# Tam Giác Mạch

> Showcase website for a fictional guesthouse in the highlands of Hà Giang, northern Vietnam. Personal learning project in Vue.js 3.

[🇫🇷 Version française](./README.md) · 🇬🇧 English

---

## Overview

![Home — Hero](./docs/screenshots/site-maison-dhote-vietnam.webp)

Tam Giác Mạch (meaning "buckwheat" in Vietnamese) is an imaginary guesthouse set in a restored Hmong house. The website presents the property, its three rooms, the experiences offered in the region, and lets visitors get in touch.

**🔗 Live demo**: [tam-giac-mach.vercel.app](https://tam-giac-mach.vercel.app/)

---

## Features

- **6 complete pages** with narrative content: home, about the house, rooms list, room detail, experiences, contact
- **Dynamic routing** for rooms (`/chambres/le-sarrasin`, `/chambres/le-bambou`, `/chambres/l-indigo`)
- **Contact form** with client-side validation
- **Experience modal** with fade transition
- **Responsive mobile menu** (burger with auto-close on navigation)
- **Scroll-triggered animations** via the Intersection Observer API
- **Full visual identity**: custom typography, 3 color palettes (sage, bamboo, driedbamboo)
- **Optimized images** (WebP, lazy loading, hero prioritization)
- **SEO and Open Graph metadata** for social sharing
- **Narrative 404 page** that preserves the site's universe

---

## Tech stack

| Area            | Technology                                   |
| --------------- | -------------------------------------------- |
| Framework       | Vue.js 3 (Composition API, `<script setup>`) |
| Build           | Vite                                         |
| Routing         | Vue Router                                   |
| Styling         | Tailwind CSS v4 (`@theme` directive)         |
| Typography      | Playfair Display + Inter (Google Fonts)      |
| Version control | Git + GitHub (feature branch + PR workflow)  |
| Quality         | ESLint + Prettier                            |

---

## Screenshots

### Home — Rooms section

![Rooms section](./docs/screenshots/accueil-nos-chambres.webp)

### About the house — Philosophy section

![Philosophy section](./docs/screenshots/maison-philosophie.webp)

### Rooms — Overview

![Rooms list](./docs/screenshots/liste-des-chambres.webp)

### Experiences — The 4 categories

![Experiences page](./docs/screenshots/experience.webp)

### Mobile menu

![Mobile menu](./docs/screenshots/mobile-menu.webp)

---

## Getting started

```bash
# Clone the repository
git clone https://github.com/alexwebdevpro-coder/tam-giac-mach.git
cd tam-giac-mach

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:5173`.

---

## Project structure

```
tam-giac-mach/
├── docs/
│ └── screenshots/ # Captures pour ce README
├── public/
│ └── images/
│ ├── brand/ # Logo et favicon
│ ├── rooms/ # Photos des 3 chambres
│ ├── experiences/ # Photos des 8 expériences
│ └── general/ # Photos d'ambiance pour les sections
├── src/
│ ├── assets/
│ │ └── main.css # Tailwind + @theme (fonts + palettes custom)
│ ├── components/
│ │ ├── layout/ # AppHeader, AppFooter
│ │ ├── ui/ # PageHero, DarkCallToAction, FadeIn
│ │ ├── home/ # ValueCard
│ │ ├── rooms/ # RoomCard
│ │ ├── experiences/ # ExperienceCard, ExperienceModal, CategorySection
│ │ └── contact/ # ContactForm
│ ├── views/ # Les 6 pages + NotFoundView
│ ├── data/ # rooms.js, experiences.js (données statiques)
│ ├── router/ # Configuration Vue Router
│ ├── App.vue
│ └── main.js
├── index.html
└── package.json
```

---

## What I learned

This project helped me deepen several key concepts of modern front-end development:

### Vue.js and Composition API

- Mastery of `ref`, `computed`, `defineProps`, `defineEmits`
- "Props down, events up" pattern for parent-child communication
- Use of lifecycle hooks (`onMounted`, `onBeforeUnmount`)
- Slots for building reusable wrapper components

### Vue Router

- Named routes and dynamic parameters
- Catch-all route handling for 404s
- Automatic `router-link-active` classes for conditional styling

### CSS and Tailwind v4

- Custom color palettes via the `@theme` directive
- Pseudo-elements for advanced animations (underline expanding from center)
- "Ghost element" technique with `attr()` to reserve space
- Responsive design with Tailwind breakpoints (`md:`, `lg:`)

### Native Web APIs

- `IntersectionObserver` for scroll animations without a library
- `loading="lazy"` and `fetchpriority="high"` for image optimization
- Respecting `prefers-reduced-motion` for accessibility

### Performance

- Image compression and resizing (Squoosh)
- Total page weight reduced from **9.1 MB to 4.6 MB (-49%)**
- Load time improved from **782 ms to 549 ms (-30%)**

### Professional Git workflow

- Consistent use of feature branches (`feat/`, `perf/`, `docs/`)
- Conventional Commits (prefixes `feat:`, `fix:`, `perf:`, `chore:`, etc.)
- Pull Requests with structured descriptions
- Clean, readable history

---

## Credits

- **Design and development**: [Lexart Studio](https://lexart-studio.fr/) — Alexis ZIRNHELT
- **Source code**: [GitHub](https://github.com/alexwebdevpro-coder/tam-giac-mach)
- **Images**: royalty-free illustrative photos
- **Project context**: fictional guesthouse created for educational purposes

---

## License

Personal project for educational purposes. The source code is free to read and draw inspiration from — please reach out for more extensive use.
