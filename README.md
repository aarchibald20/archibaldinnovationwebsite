# Archibald Innovations — Website

A React-based marketing site for Archibald Innovations, featuring:
- AI Consulting, Website Design, and App Development services
- Animated hero section with stat cards
- Services grid with hover effects
- Process section with orbital diagram
- Why Us section with code window visual
- Full contact/reach out form with service chips
- Responsive design for mobile & desktop

## Tech Stack

- **React 18** (Create React App)
- **CSS Modules** (plain CSS per component — no Tailwind, no styled-components)
- **Google Fonts** — Cormorant Garamond, DM Mono, Syne
- **IntersectionObserver** for scroll reveal animations

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx   / Hero.css
│   ├── Services.jsx / Services.css
│   ├── Process.jsx  / Process.css
│   ├── WhyUs.jsx    / WhyUs.css
│   ├── Contact.jsx  / Contact.css
│   └── Footer.jsx   / Footer.css
├── hooks/
│   └── useReveal.js        ← scroll animation hook
├── styles/
│   └── global.css          ← CSS variables, resets, shared utilities
├── App.jsx
└── index.js
```

## Getting Started

```bash
npm install
npm start
```

The app will open at http://localhost:3000

## Build for Production

```bash
npm run build
```

Output goes to the `/build` folder — ready to deploy to Netlify, Vercel, or any static host.

## Customization

- **Colors** — edit CSS variables in `src/styles/global.css`
- **Content** — each section's data is defined as a constant at the top of its component file
- **Email** — update `hello@archibaldinnov.com` in `Contact.jsx` and `Footer.jsx`
- **Contact form** — currently front-end only; wire up to EmailJS, Resend, or a backend endpoint in `Contact.jsx`'s `handleSubmit` function
