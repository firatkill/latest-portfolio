// All site copy lives here so it can be edited without touching layout code.
//
// Client work from Vizio AI is described by what the product does, not who it
// is for: no client names, links or real screens. The pictures next to each
// project are small mock-ups built in code with invented sample data. Add a
// name only once that client has agreed to be listed.

export const profile = {
  name: "Fırat Kıl",
  role: "Full-stack developer",
  location: "Ankara, Türkiye",
  email: "firatkill.is@gmail.com",
  github: "https://github.com/firatkill",
  linkedin: "https://linkedin.com/in/firatkill",
};

// Projects shown large, each with a mock-up (see components/mocks.jsx).
export const featured = [
  {
    mock: "legal",
    title: "Legal research assistant",
    summary:
      "Lawyers ask a question in plain Turkish and get an answer that cites the court decisions and statutes behind it.",
    role: "Lead web developer",
    year: "2025–26",
    stack: "Next.js, Supabase, pgvector, OpenAI, Stripe",
    points: [
      "Built the product around the search: team workspaces, streaming chat with sources, petition drafts and credit billing.",
      "Connected a hybrid vector and full-text search over millions of decisions, and wrote the crawler that keeps it current.",
    ],
  },
  {
    mock: "hiring",
    wide: true,
    title: "Recruiting platform",
    summary:
      "Companies post jobs, move candidates through their own pipeline and interview them by video, with AI scoring each application.",
    role: "Sole developer",
    year: "2026",
    stack: "Next.js, Supabase, Vercel AI SDK, Daily.co, Resend",
    points: [
      "Multi-tenant hiring pipelines with custom stages, AI evaluations and a careers site for every company.",
      "Video interviews, candidate email with reply routing, and job feeds to Indeed and LinkedIn.",
    ],
  },
  {
    mock: "auction",
    title: "Auction marketplace",
    summary:
      "A mobile marketplace that sells surplus stock in timed auctions. Payment and pickup happen in the app.",
    role: "Backend and admin console",
    year: "2026",
    stack: "NestJS, PostgreSQL, Supabase Realtime, Paystack",
    points: [
      "Bidding rules live in Postgres functions, so they hold when many people bid in the same second.",
      "A late bid extends the clock. An unpaid win goes to the runner-up and freezes the winner's account.",
    ],
  },
  {
    mock: "import",
    title: "Support knowledge base",
    summary:
      "Support teams upload old inboxes and meeting notes, and the product turns them into answers and drafted replies.",
    role: "Lead web developer",
    year: "2026",
    stack: "Next.js, Supabase, Azure Queues, Azure OpenAI",
    points: [
      "A queue worker streams very large mailbox exports (PST, mbox, Gmail) in chunks, so nothing has to fit in memory.",
      "Built the help centres, ticket portals and AI reply drafts on top of that data.",
    ],
  },
];

// Smaller projects, listed without a picture.
export const more = [
  {
    title: "Training credential platform",
    summary: "Hospitality staff carry a verified training record between jobs. LMS sync, Stripe, pgTAP tests.",
    meta: "Sole developer · 2026",
  },
  {
    title: "Document translation and narration",
    summary: "Documents come back in several languages with narrated audio. BullMQ workers, retries per chunk, Azure.",
    meta: "Sole developer · 2025",
  },
  {
    title: "Vendor risk and compliance",
    summary: "Assessments, findings and documents per tenant, with roles enforced in the database and a Jira hand-off.",
    meta: "Web developer · 2025–26",
  },
  {
    title: "Accounting firm websites",
    summary: "Sites and a CMS for two firms, with drafts, conflict checks and Word import.",
    meta: "Freelance · 2024–26",
    links: [
      { label: "verdeymm.com", href: "https://verdeymm.com" },
      { label: "bagciymm.com", href: "https://bagciymm.com" },
    ],
  },
  {
    title: "FX difference calculator",
    summary: "Reads Turkish e-invoices in the browser and works out exchange-rate differences for accountants.",
    meta: "Side project",
    links: [{ label: "GitHub", href: "https://github.com/firatkill/d-viz_farki" }],
  },
  {
    title: "Bulk e-invoice processor",
    summary: "Upload a ZIP of invoices and watch BullMQ workers parse them one by one.",
    meta: "Side project",
    links: [{ label: "GitHub", href: "https://github.com/firatkill/ymm-invoice-app" }],
  },
];

export const experience = [
  {
    company: "Vizio AI",
    title: "Full-stack developer",
    period: "Sep 2025 – now",
    note: "AI product studio. I build client products, usually as the lead or only developer.",
  },
  {
    company: "RNX Teknoloji",
    title: "Full-stack developer",
    period: "Jul – Sep 2025",
    note: "Task and staff management in three languages for a firm with several offices.",
  },
  {
    company: "Medyanes360",
    title: "Project lead",
    period: "Oct 2024 – Mar 2025",
    note: "Planned work for several teams and built an operations system for a furniture maker.",
  },
  {
    company: "Medyanes360",
    title: "Full-stack intern",
    period: "Aug – Oct 2024",
    note: "Promoted to team lead after three months.",
  },
  {
    company: "Paramount Students",
    title: "Frontend intern",
    period: "Mar – Jun 2023",
    note: "Interface work in a large international team.",
  },
];

export const stack = [
  ["Frontend", "Next.js, React, TypeScript, Tailwind CSS, TanStack Query"],
  ["Backend", "Node.js, NestJS, Express, Spring Boot"],
  ["Data", "PostgreSQL, Supabase, pgvector, MongoDB, Prisma, Redis"],
  ["AI", "OpenAI, Azure OpenAI, Gemini, Vercel AI SDK, retrieval and streaming"],
  ["Infra and tests", "Vercel, Azure, AWS, Docker, BullMQ, Stripe, Playwright, pgTAP"],
];
