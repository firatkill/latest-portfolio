// All site copy lives here so it can be edited without touching layout code.
//
// Client work from Vizio AI is described by what the product does, not who it
// is for: no client names, links or screenshots. Add a name only once that
// client has agreed to be listed.

export const profile = {
  name: "Fırat Kıl",
  role: "Full-Stack Developer",
  location: "Ankara, Türkiye",
  email: "firatkill.is@gmail.com",
  github: "https://github.com/firatkill",
  linkedin: "https://linkedin.com/in/firatkill",
  youtube: "https://youtube.com/@workssonlocal",
};

export const work = [
  {
    title: "AI legal research platform",
    year: "2025 – 2026",
    role: "Lead web developer",
    summary:
      "Lawyers ask questions in plain Turkish and get answers that cite the court decisions and statutes they come from.",
    points: [
      "Built the full product: team workspaces with roles and MFA, streaming chat with cited sources, petition drafting and credit-based billing.",
      "Connected it to a hybrid-search RAG service (vector + full-text + reranking) over millions of court decisions through a signed, retryable job API.",
      "Wrote the crawler that keeps the corpus fresh: idempotent queue jobs, retries, adaptive throttling and rotating proxies.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "pgvector", "OpenAI", "Stripe", "Node.js"],
  },
  {
    title: "AI recruiting platform",
    year: "2026",
    role: "Sole developer",
    summary:
      "An applicant tracking system where companies post jobs, run their own hiring pipeline and interview candidates by video or chat.",
    points: [
      "Multi-tenant ATS with custom pipeline stages, AI-scored candidate evaluations and AI-written job descriptions.",
      "Video interviews, two-way candidate email with reply routing, Indeed and LinkedIn job feeds, and a white-label careers site per company.",
    ],
    stack: ["Next.js", "Supabase", "Vercel AI SDK", "Daily.co", "Resend", "Stripe"],
  },
  {
    title: "AI customer-support platform",
    year: "2026",
    role: "Lead web developer",
    summary:
      "Support teams turn their documents, inboxes and meeting notes into a knowledge base, and get AI-drafted replies to tickets.",
    points: [
      "Built the web app: white-label help centres and ticket portals, AI replies and article generation, team billing.",
      "Wrote a queue worker that streams very large mailbox exports (PST, mbox, Gmail, Office 365) into structured data in chunks.",
    ],
    stack: ["Next.js", "Supabase", "Azure Queues", "Azure OpenAI", "Cloudflare"],
  },
  {
    title: "Live auction marketplace",
    year: "2026",
    role: "Backend + admin console",
    summary:
      "A mobile marketplace that sells liquidation stock through timed auctions, with payments and pickup handled in the app.",
    points: [
      "NestJS backend with idempotent bidding, anti-sniping, automatic closing, second-chance offers and account freezes for unpaid wins.",
      "Core rules live in Postgres functions so they hold under concurrent bids; covered by unit and end-to-end tests.",
      "Staff console for auctions, orders, returns and audit logs, with live updates over server-sent events.",
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Supabase Realtime", "Paystack", "FCM"],
  },
  {
    title: "Training credential platform",
    year: "2026",
    role: "Sole developer",
    summary:
      "Hospitality staff earn a portable training record that employers can verify; venues invite staff and track compliance.",
    points: [
      "Provider-neutral LMS integration with scheduled sync and renewals, plus a deterministic mock for testing.",
      "Stripe entitlements applied only from verified webhooks; database rules proven with pgTAP and flows with Playwright.",
    ],
    stack: ["Next.js", "Supabase", "Stripe", "pgTAP", "Playwright"],
  },
  {
    title: "Document translation & speech pipeline",
    year: "2025",
    role: "Sole developer",
    summary:
      "Upload a document, get it back in several languages, plus narrated audio for each one.",
    points: [
      "Background workers chunk long texts and retry each chunk with backoff, so one bad request never fails a whole job.",
      "Containerised the app and workers and deployed them to Azure Container Apps.",
    ],
    stack: ["Next.js", "BullMQ", "Redis", "OpenAI", "Gemini", "Google TTS", "Docker"],
  },
];

export const freelance = [
  {
    title: "Websites and CMS for two accounting firms",
    year: "2024 – 2026",
    summary:
      "Public sites with a custom admin panel for circulars, announcements, blog and Q&A. Later moved from MongoDB to Supabase with row-level security, and added an editor with autosaved drafts, conflict detection and Word import.",
    links: [
      { label: "verdeymm.com", href: "https://verdeymm.com" },
      { label: "bagciymm.com", href: "https://bagciymm.com" },
    ],
  },
];

export const personal = [
  {
    title: "FX difference calculator",
    summary:
      "Reads Turkish e-invoice archives in the browser, matches payments to invoices first-in-first-out and reports exchange-rate differences.",
    href: "https://github.com/firatkill/d-viz_farki",
  },
  {
    title: "Bulk e-invoice processor",
    summary: "Upload a ZIP of invoices; BullMQ workers parse each one with retries and live progress.",
    href: "https://github.com/firatkill/ymm-invoice-app",
  },
  {
    title: "DevLink",
    summary: "Spring Boot API with JWT security for developer link pages. I recorded the build on YouTube.",
    href: "https://github.com/firatkill/devlink-app",
  },
];

export const experience = [
  {
    company: "Vizio AI",
    title: "Full-Stack Developer",
    period: "Sep 2025 – now",
    note: "AI product studio. I build client SaaS products, usually as the lead or only developer.",
  },
  {
    company: "RNX Teknoloji",
    title: "Full-Stack Developer",
    period: "Jul – Sep 2025",
    note: "Multilingual task and staff management for a multi-office firm.",
  },
  {
    company: "Medyanes360",
    title: "Project Lead",
    period: "Oct 2024 – Mar 2025",
    note: "Ran planning for several teams and built an operations system for a furniture manufacturer.",
  },
  {
    company: "Medyanes360",
    title: "Full-Stack Intern",
    period: "Aug – Oct 2024",
    note: "Promoted to team lead within three months.",
  },
  {
    company: "Paramount Students",
    title: "Frontend Intern",
    period: "Mar – Jun 2023",
    note: "UI work in a distributed international team.",
  },
];

export const stack = [
  { group: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS, TanStack Query, Vue" },
  { group: "Backend", items: "Node.js, NestJS, Express, Spring Boot, REST, SSE, WebSockets" },
  { group: "Data", items: "PostgreSQL & Supabase (RLS, SQL functions), pgvector, MongoDB, Prisma, Redis" },
  { group: "AI", items: "OpenAI, Azure OpenAI, Gemini, Vercel AI SDK, RAG, streaming chat, TTS" },
  { group: "Infra", items: "Vercel, Azure Container Apps, AWS, Cloudflare, Docker, BullMQ, Stripe" },
  { group: "Testing", items: "Playwright, Vitest, Jest, pgTAP, Sentry" },
];
