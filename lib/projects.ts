export type Kpi = {
  value: string;
  label: string;
};

export type Demo = {
  beforeTitle: string;
  before: string[];
  afterTitle: string;
  after: string[];
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: string;
  tech: string[];
  summary: string;
  problem: string;
  built: string[];
  howItWorks: string;
  pipeline: string[];
  demo?: Demo;
  results: string[];
  kpis: Kpi[];
  businessAngle: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "apex-supply",
    title: "Apex Supply",
    tagline: "Shopify catalog automation for a wholesale supply distributor",
    year: "2025",
    status: "Delivered — pipeline in use",
    tech: ["OpenAI GPT", "Shopify", "Matrixify", "Python", "Web scraping"],
    summary:
      "A GPT-powered pipeline that turns raw supplier data into publish-ready Shopify listings. It ingests Matrixify exports, cleans and normalizes the catalog, matches SKUs across supplier price files, and generates consistent, SEO-ready product descriptions — replacing hours of manual per-product work.",
    problem:
      "Apex Supply's Shopify catalog runs on supplier data that arrives as messy spreadsheets, price files, and inconsistent exports. Every product needed a clean, accurate, well-written listing — and doing that by hand across a wholesale catalog doesn't scale.",
    built: [
      "Matrixify export ingestion and cleaning — dedupe, normalize, and restructure raw catalog rows",
      "SKU matching across supplier price files to attach accurate pricing and image links",
      "GPT prompt system tuned for consistent product descriptions at catalog scale",
      "Supplier data scraping and normalization for missing product attributes",
      "Category taxonomy cleanup so the storefront stays organized as it grows",
    ],
    howItWorks:
      "Supplier files and Matrixify exports go in one end; clean, structured product data comes out the other. The pipeline matches each product to its supplier records, fills gaps from scraped data, and drafts the description with a tuned prompt system — so new and updated products flow to Shopify without manual rewriting.",
    pipeline: [
      "Matrixify export in",
      "Clean + dedupe",
      "SKU match vs supplier files",
      "Category + manufacturer detect",
      "Smart prompt select",
      "GPT descriptions",
      "Matrixify import out",
    ],
    demo: {
      beforeTitle: "Supplier spreadsheet row (in)",
      before: [
        "Handle: aquaforge-af2211-pulldown-faucet",
        "Title: AQUAFORGE AF-2211 BRUSHED NICKEL 1-HANDLE PULL-DOWN KITCHEN FAUCET HIGH ARC SPRAYER",
        "Body HTML: (empty)",
        "SEO Description: (empty)",
        "Category: (unassigned)",
      ],
      afterTitle: "Publish-ready listing (out)",
      after: [
        "Title: AquaForge AF-2211 Pull-Down Kitchen Faucet, Brushed Nickel",
        "Body HTML: Full product description, specs, and finish details — generated",
        "SEO Description: Search-ready meta description — generated",
        "Category: Kitchen › Faucets (auto-detected)",
        "Prompt type: fashion (style-forward fixture)",
      ],
      note: "Simplified example with synthetic data — the real catalog stays private.",
    },
    results: [
      "Initial automation draft delivered to the business in June 2025",
      "Catalog-wide pipeline: raw supplier files in, publish-ready listings out",
      "Turned repetitive per-product listing work into an automated flow",
    ],
    kpis: [
      { value: "5,000", label: "products in full-catalog pull" },
      { value: "4", label: "smart prompt types (fashion / standard / compliance / default)" },
      { value: "7", label: "pipeline stages, export to import" },
      { value: "≈800 hrs", label: "est. manual listing work automated" },
    ],
    businessAngle:
      "This is the ecommerce offer in miniature: messy product data in, sellable listings out. Any Shopify store sitting on supplier spreadsheets gets the same treatment — a catalog that maintains itself.",
    featured: true,
  },
  {
    slug: "eastcoast-studios",
    title: "EastCoastStudios",
    tagline: "Catalog-wide SEO rewrite for a wall-art e-commerce brand",
    year: "2026",
    status: "Delivered — catalog enriched",
    tech: ["OpenAI GPT", "Shopify", "Matrixify", "Python"],
    summary:
      "The same Shopify playbook, second client: a toolkit that rewrites an entire wall-art catalog for search. Concise SEO titles and meta descriptions generated from raw Shopify exports, then imported back via Matrixify — built so a non-technical owner can run the whole thing solo.",
    problem:
      "Tens of thousands of wall-art listings with long, inconsistent titles and missing SEO metadata. Search traffic was on the table, but rewriting the catalog by hand — one listing at a time — was never going to happen.",
    built: [
      "SEO title + meta description generation from raw Shopify CSV exports",
      "Strict title format enforced by prompt: city/landmark + subject + product type, 45–65 chars, no brand, no fluff",
      "Handle-deduped processing with 10 concurrent GPT workers, 3 automatic retries, and safe fallbacks that never block a run",
      "Test mode (15–50 listings) so output quality is confirmed before full-catalog runs",
      "Matrixify update-mode import flow — only SEO fields are touched, nothing else overwritten",
      "Non-coder documentation: setup, usage, troubleshooting, and glossary",
    ],
    howItWorks:
      "Export the catalog from Shopify as a CSV. The toolkit dedupes by product handle, rewrites each title and description against a strict SEO format with concurrent GPT calls, and writes the enriched CSV back. Import via Matrixify in update mode and only the SEO fields change. A small test batch runs first; safe fallbacks mean a failed API call never blocks the batch.",
    pipeline: [
      "Shopify CSV export",
      "Dedupe by handle",
      "Concurrent GPT rewrite",
      "Small-batch QA test",
      "Enriched CSV out",
      "Matrixify update import",
    ],
    demo: {
      beforeTitle: "Raw export row (in)",
      before: [
        "Handle: santorini-blue-domes-sunset-print",
        "Title: BEAUTIFUL HIGH QUALITY Santorini Greece Blue Domes Churches Caldera Sunset View Travel Photography Wall Art Print Poster Home Decor Gift",
        "SEO Title: (missing)",
        "SEO Description: (missing)",
      ],
      afterTitle: "Search-ready listing (out)",
      after: [
        "SEO Title: Santorini Blue Domes Sunset Wall Art Print",
        "SEO Description: Sunset over Santorini's iconic blue-domed churches — a striking travel photography print, museum-quality and ready to frame.",
        "Format: city + subject + product type · 42 characters · no brand · no fluff",
      ],
      note: "Simplified example with synthetic data — the real catalog stays private.",
    },
    results: [
      "≈30,000 product listings enriched with SEO titles + descriptions across 3 batched runs (March 2026)",
      "Full-catalog SEO coverage the team could never have produced by hand",
      "Handoff-ready: documented for a non-technical owner to operate alone",
    ],
    kpis: [
      { value: "~30,000", label: "listings enriched with SEO titles + descriptions" },
      { value: "3", label: "batched full-catalog runs" },
      { value: "10", label: "concurrent GPT workers per run" },
      { value: "≈1,000 hrs", label: "est. manual SEO work automated" },
    ],
    businessAngle:
      "Built once, deployed twice: the Apex pipeline's pattern, adapted to a totally different vertical. Any Shopify store with a big catalog has this exact problem — listings exist, but search can't find them.",
    featured: true,
  },
  {
    slug: "jlk",
    title: "JLK, Ltd.",
    tagline: "Back-office automation for a Dallas real estate company",
    year: "2024",
    status: "Completed — summer engagement",
    tech: ["Yardi", "Python", "Document automation"],
    summary:
      "Three months inside a Dallas real estate company's back office: organizing the deeds and ownership papers for about 20 properties, working in Yardi, and building file-automation scripts that turned a chaotic archive into a system the team could actually use.",
    problem:
      "Property records are the business — deeds, ownership papers, titles — but they lived in a disorganized archive where finding the right document meant digging. For a company managing around 20 properties, that friction touches every transaction.",
    built: [
      "Full audit and reorganization of deeds and ownership papers across ~20 properties",
      "Day-to-day work inside Yardi, the company's property-management system",
      "File-renaming and arranging scripts to standardize the document archive",
      "A repeatable organization system so new documents land in the right place",
    ],
    howItWorks:
      "Start with the mess: every deed, title policy, and ownership document accounted for. Then impose order — consistent naming, property-by-property structure, and scripts that do the repetitive arranging. The result isn't just a clean archive; it's a workflow the office keeps using.",
    pipeline: [
      "Audit the archive",
      "Property-by-property structure",
      "Naming standard",
      "Rename + arrange scripts",
      "Yardi cross-check",
      "Handoff: a system the office keeps",
    ],
    demo: {
      beforeTitle: "The archive (before)",
      before: [
        "scan0032.pdf",
        "IMG_20240712_143322.pdf",
        "Document (1).pdf",
      ],
      afterTitle: "The system (after)",
      after: [
        "deed_maple-st_2021-06-14.pdf",
        "title-policy_oak-ave_2022-03-02.pdf",
        "closing-statement_maple-st_2021-06-14.pdf",
      ],
      note: "Illustrative filenames — real property records stay private.",
    },
    results: [
      "Deeds and ownership papers for ~20 properties fully arranged and documented",
      "Formal recommendation letter from company leadership for the work",
      "Archive went from dig-through-it to look-it-up",
    ],
    kpis: [
      { value: "~20", label: "properties' records organized" },
      { value: "8", label: "automation tools built (scripts + Excel macro)" },
      { value: "3 mo", label: "summer engagement" },
      { value: "1", label: "formal recommendation letter" },
    ],
    businessAngle:
      "Every real-estate office, law firm, and small business has a version of this archive. Document automation turns the filing cabinet — physical or digital — into infrastructure that works as fast as you do.",
    featured: true,
  },
  {
    slug: "midday-madness",
    title: "Midday Madness",
    tagline: "A podcast website plus an agent crew that runs the show",
    year: "2026",
    status: "Live",
    tech: ["GitHub Pages", "Multi-agent rooms", "Agent delegation"],
    summary:
      "For the Midday Madness podcast: a full website built in days, plus something more interesting — an agent crew that runs the show's operations. Each host's AI agent lives in a dedicated coordination room, posting start/ship/blocked updates and handling handoffs, replacing the email threads that used to run production.",
    problem:
      "A podcast is a small media business: episodes to plan, a site to maintain, clips to ship, coordination across hosts. All of it ran on scattered messages and memory. The hosts needed the show to run like an operation, not a group chat.",
    built: [
      "Complete podcast website — episodes, clips, and show infrastructure",
      "A dedicated agent coordination room for the podcast crew",
      "Agents that post production updates (started / shipped / blocked) instead of status emails",
      "Delegation workflows: site tasks assigned to agents and confirmed back when done",
      "Handoff packets so a new host's agent can join the crew and get up to speed",
    ],
    howItWorks:
      "The website is the storefront; the agent crew is the back office. When work needs doing — a site update, a production task — it's delegated to an agent in the crew room, which reports back when it's done. The hosts see a feed of what's happening instead of a pile of threads asking what's happening.",
    pipeline: [
      "Website brief",
      "Design + build",
      "Agent crew room",
      "Delegation workflows",
      "Handoff packets",
    ],
    demo: {
      beforeTitle: "Production via group chat (before)",
      before: [
        "“did anyone post the episode?”",
        "“site still shows the old ep”",
        "“who has the clips?”",
      ],
      afterTitle: "Production via agent crew (after)",
      after: [
        "agent-site: shipped — episode 12 page is live",
        "agent-clips: started — clipping episode 12",
        "agent-site: blocked — needs cover art",
      ],
      note: "Illustrative messages — the pattern is real.",
    },
    results: [
      "Podcast website designed and shipped with the hosts",
      "Production coordination moved from scattered messages into one agent-run room",
      "A repeatable pattern: any small content operation can run on a crew like this",
    ],
    kpis: [
      { value: "1", label: "website designed + shipped" },
      { value: "1", label: "agent coordination room" },
      { value: "3", label: "agent workflows (updates, delegation, handoffs)" },
      { value: "0", label: "status-email threads needed" },
    ],
    businessAngle:
      "This is the purest form of the offer: agents that do the work instead of you doing the work. A content business gets a staff that never sleeps; your business gets the same pattern applied to whatever eats your week.",
    featured: true,
  },
  {
    slug: "bot-room",
    title: "Bot Room",
    tagline: "A multi-agent chat platform where AI assistants talk to each other",
    year: "2026",
    status: "Live — used daily",
    tech: ["Next.js", "React Native", "Supabase", "Vercel", "The Odds API", "ESPN API"],
    summary:
      "A real-time chat platform for Ryan and his friends where every person has an AI agent in the room. It started as one shared group chat and grew into a multi-room system with private agent-to-agent rooms, a live ESPN-settled betting leaderboard, a parlay builder with combined-odds math, and a sportsbook handoff flow.",
    problem:
      "Group chats are where Ryan and his friends live — picks, debates, bets, banter. But every AI assistant lived in its own silo. The question was: what happens when you put the agents in the room together and let them talk to each other, not just to their humans?",
    built: [
      "Group chat, DMs, and podcast rooms on a custom agent message bus with push webhooks",
      "Private rooms where agents converse directly, with every sender clearly labeled",
      "ESPN-settled betting leaderboard with live scores and a parlay maker",
      "Market-odds autofill from The Odds API with a 60-minute cache and fail-soft fallback to ESPN",
      "Human client as an installable phone app with haptics, league tabs, and tap-to-call UI",
    ],
    howItWorks:
      "A lightweight message bus hosted on Vercel routes every message; agents wake only on new messages and friends' clients poll cheaply. Game outcomes settle automatically against ESPN data, so the leaderboard is always current without anyone keeping score. Odds pre-fill from a cached market-data layer, and the whole UI is tuned for one-handed phone use — pick teams, enter ending odds, done.",
    pipeline: [
      "Message bus on Vercel",
      "Agent rooms (group, DMs, podcast)",
      "Phone app for humans",
      "ESPN auto-settlement",
      "Cached odds layer",
      "Daily live use",
    ],
    results: [
      "Live in production, used every day by Ryan and his friends",
      "Agents from different builders interoperating in the same rooms",
      "Betting, parlays, and leaderboards settle themselves — zero manual scorekeeping",
    ],
    kpis: [
      { value: "Daily", label: "live production use" },
      { value: "3", label: "room types (group, DMs, podcast)" },
      { value: "2", label: "sports data APIs (ESPN, The Odds API)" },
      { value: "0", label: "manual scorekeeping needed" },
    ],
    businessAngle:
      "The same architecture powers customer-facing assistants: agents that know your business, talk to your customers in real time, and take action — booking, quoting, support. That's the whole thesis: agents that do the work instead of you doing the work.",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
