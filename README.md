# Himanshu Swami — Portfolio

Comic-sticker themed freelance portfolio. Static site: **HTML + Tailwind CSS + jQuery**. Responsive from 320px phones to wide desktops, with an app-style bottom tab bar on mobile.

## Run it

No build needed to view: open `index.html` in a browser, or serve the folder:

```bash
npx serve .        # or: python3 -m http.server 8080
```

## Edit styles (Tailwind)

`assets/css/output.css` is already compiled and minified. To change styles:

```bash
npm install
npm run dev     # watches index.html + JS and rebuilds output.css
npm run build   # minified production build
```

- Theme tokens (colors, fonts, comic shadows): `tailwind.config.js`
- Reusable components (`.btn-red`, `.panel`, `.chip`, `.field`, `.tag`, `.burst`, `.halftone`…): `src/input.css`

## Edit content (no HTML needed)

`assets/js/data.js` holds everything that changes often:

- `contact.email`, `contact.linkedin`
- `contact.whatsapp`: digits with country code, e.g. `919876543210`. While empty, the WhatsApp buttons stay hidden.
- `projects`: add, remove or reorder. Set `image: 'assets/img/projects/<name>.jpg'` to show a real screenshot (16:10 works best). Otherwise the illustrated placeholder is shown.
- `filters`: filter chips, matched against each project's `categories`

## Structure

```
portfolio/
├── index.html              # markup (semantic, accessible)
├── assets/
│   ├── css/output.css      # compiled Tailwind (do not edit by hand)
│   ├── js/data.js          # content + config
│   ├── js/main.js          # jQuery modules: Projects, Reveal, Nav, Contact
│   ├── img/                # portrait, sticker portrait, favicon
│   └── vendor/jquery.min.js  # jQuery 3, stored locally (no CDN)
├── src/input.css           # Tailwind source + component layer
├── tailwind.config.js
└── package.json
```

## Features

- Projects rendered from data, with filter chips (Websites, Mobile apps, E-commerce)
- Scroll-reveal animations, switched off for users who choose reduced motion
- Mobile: hamburger menu plus a bottom tab bar that highlights the current section
- Contact form with client-side validation; opens the email app or WhatsApp with the message pre-filled (no backend needed)
- Accessibility: skip link, labelled controls, `aria-pressed` filter chips, 44px+ touch targets, visible focus rings
- Performance: one CSS file, one small JS bundle, lazy-loaded project images, high fetch priority on the hero image

## Deploy

Upload the folder to any static host: Vercel, Netlify, GitHub Pages or cPanel. Only `index.html`, `assets/` and the favicon are needed in production; `src/`, `node_modules/` and the config files are for development.
