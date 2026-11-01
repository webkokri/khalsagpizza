# Khalsa G Pizza — website (React + Vite)

A five-page restaurant site built with React 19, React Router and Vite.

| Page | Route | What's on it |
|---|---|---|
| Home | `/` | Hero with the static portrait on the right and an auto-rotating offers card on the left, category icons, menu with category tabs, signature pizza, why-us, family deal, visit us |
| Menu | `/menu` | Full menu with a "Jump to" sidebar, pizza size selector (prices update), Veg-only switch, build-your-own |
| Deals | `/deals` | Filterable deal cards with copy-to-clipboard promo codes, how-to-redeem steps |
| About us | `/about` | Story, values, kitchen process, catering call-to-action |
| Contact us | `/contact` | Contact cards, validated message form with success state, opening hours, FAQ accordion |

## Run it

You need Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Make it yours

Everything you'll want to edit lives in **`src/data.js`**:

- `STORE` — phone, email, address, delivery area, opening hours (currently `[PLACEHOLDERS]`)
- `MENU` — every item, description and price (prices are **samples**; pizza prices are for Large and shift by `SIZES`)
- `OFFERS` — the slides in the home-page carousel
- `DEALS` — the cards on the Deals page and their promo codes
- `FAQS` — questions on the Contact page

Other placeholders to replace:

- `src/pages/About.jsx` — `[FOUNDER NAME]`, `[YEAR]`, `[ADD YOUR OWN STORY HERE]`
- `src/pages/Home.jsx` and `src/pages/Contact.jsx` — `[MAP EMBED]` boxes (drop in a Google Maps `<iframe>`)
- `src/pages/Deals.jsx` — `[YOUR TERMS]`
- `src/assets/hero.jpeg` — the hero portrait (swap the file to change it)

Colours and fonts are CSS variables at the top of **`src/styles.css`**.

## Wiring up the real stuff

These are front-end only right now and marked with `TODO` comments:

- **Contact form** (`src/pages/Contact.jsx` → `submit`) — send to your backend or a service like Formspree / EmailJS.
- **Newsletter** (`src/components/Footer.jsx` → `subscribe`).
- **Cart** (`src/context/CartContext.jsx`) — the Add buttons collect items and show a counter in the header; connect it to your online-ordering or POS system for checkout.

## Deploying

`npm run build` produces static files in `dist/`. Because the site uses client-side routing, configure your host to serve `index.html` for unknown paths:

- **Netlify:** add a `public/_redirects` file containing `/*  /index.html  200`
- **Vercel:** works out of the box for Vite projects
- **Apache/Nginx:** add a fallback rule to `index.html`
# khalsagpizza
