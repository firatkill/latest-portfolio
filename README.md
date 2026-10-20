# latest-portfolio

Source code for [firatkil.com](https://www.firatkil.com), the personal site of Fırat Kıl, a full-stack developer in Ankara who builds AI-powered SaaS products with Next.js, TypeScript and PostgreSQL. It is a single page built with Next.js 15 and plain CSS, with a small API route that handles the contact form.

## What is on the site

- **Intro**: a short summary of what I do, with links to email, GitHub and LinkedIn.
- **Selected work**: four client products (a legal research assistant, a recruiting platform, an auction marketplace and a support knowledge base), each with its role, year, stack, key points and a mock-up of the product.
- **Approach**: a short statement on building with AI agents, database-enforced rules and testing.
- **More projects**: smaller client products, freelance sites and personal tools.
- **Experience**: work history, education and the tools I use.
- **Contact**: a form that sends a message straight to my inbox.

The old multi-page URLs (`/about`, `/projects`, `/stack`, `/contact`) permanently redirect to the single page (see `next.config.mjs`).

## How it is built

- **Next.js 15 App Router.** The page and layout are server components. Only two components run in the browser:
  - `AuctionMock` plays a short loop showing the auction's anti-sniping rule (a late bid extends the clock). It only runs while visible and shows the end state at once when the visitor prefers reduced motion.
  - `ContactForm` posts to the API route and shows sending, sent and error states.
- **Plain CSS.** All styles are in `app/globals.css`, built on CSS custom properties for colour, type, spacing and easing. Dark mode redefines those tokens under `prefers-color-scheme: dark`. There is no CSS framework.
- **Fonts.** Schibsted Grotesk and JetBrains Mono are loaded with `next/font/google` and exposed as CSS variables.
- **Mock-ups instead of screenshots.** Most of the work shown is client work, so the product pictures are small mock-ups written in markup with invented sample data. No client names, designs or data appear on the site.
- **Contact form route.** `app/api/send-mail/route.js` accepts a JSON POST and:
  - trims and length-limits each field and checks the email format;
  - escapes HTML in the message before building the email body;
  - drops submissions that fill a hidden honeypot field;
  - sets the visitor's address as `reply-to`, so replying goes straight to them;
  - sends through Gmail SMTP with Nodemailer (`lib/nodemailer/index.js`).

## Project structure

```
app/
  layout.js             fonts, metadata, theme colour
  page.js               the single page
  globals.css           design tokens, dark mode, all styles
  api/send-mail/
    route.js            contact form endpoint
components/
  mocks.jsx             product mock-ups (server)
  AuctionMock.jsx       animated auction mock-up (client)
  ContactForm.jsx       contact form (client)
lib/
  content.js            all site copy
  nodemailer/index.js   SMTP transporter
public/
  profile.jpeg          portrait
next.config.mjs         redirects from the old page URLs
```

## Run locally

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

The contact form needs two environment variables. Put them in `.env.local` (it is ignored by git):

```bash
SENDER_EMAIL=you@gmail.com
SENDER_EMAIL_PASSWORD=your-app-password
```

`SENDER_EMAIL` is the Gmail account that sends the message, and `SENDER_EMAIL_PASSWORD` is a Google [app password](https://support.google.com/accounts/answer/185833) for that account, not its normal password. The recipient address is set in `app/api/send-mail/route.js`. The rest of the site works without these variables.

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # run Next.js lint
```

## Editing content

All copy lives in `lib/content.js`: profile links, featured projects, smaller projects, experience and the tools list. Change text there without touching layout code. Each featured project names its mock-up with a `mock` key, which `components/mocks.jsx` maps to a component.

## Deployment

The site is hosted on Vercel. Every push to `main` deploys to production. Set `SENDER_EMAIL` and `SENDER_EMAIL_PASSWORD` in the Vercel project's environment variables.
