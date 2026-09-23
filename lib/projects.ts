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

export type CodeExcerpt = {
  title: string;
  language: string;
  code: string;
  note: string;
};

export type Visual = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: string;
  monogram: string;
  /** Path under public/ to the client's real logo image, when available. */
  logo?: string;
  tech: string[];
  summary: string;
  problem: string;
  built: string[];
  howItWorks: string;
  pipeline: string[];
  demo?: Demo;
  codeExcerpt?: CodeExcerpt;
  visuals?: Visual[];
  liveUrl?: string;
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
    monogram: "AS",
    tech: ["OpenAI GPT", "Shopify", "Matrixify", "Python", "Web scraping"],
    summary:
      "Wholesale catalogs don't arrive clean. Apex Supply's came as supplier spreadsheets, price files, and inconsistent exports — thousands of products with no usable listings. I built the pipeline that fixes that end to end: raw Matrixify exports go in, publish-ready Shopify listings come out. Every product is matched to its supplier records, auto-categorized, and written up by a tuned GPT prompt system that knows a style-forward faucet from a compliance valve.",
    problem:
      "Apex Supply sells through Shopify, but its catalog runs on supplier data that arrives as messy spreadsheets, price files, and inconsistent exports. Every product needed a clean, accurate, well-written listing — title, description, specs, SEO. Doing that by hand across a wholesale catalog doesn't scale: it's slow, inconsistent, and every new supplier file restarts the work from zero.",
    built: [
      "Matrixify export ingestion — dedupe, normalize, and restructure raw catalog rows into a clean working set",
      "SKU matching across supplier price files to attach accurate pricing, images, and attributes",
      "A six-step smart prompt router that picks the right GPT voice per product: fashion, standard, compliance, or default",
      "Supplier data scraping to fill gaps where the exports came up short",
      "Category taxonomy cleanup so the storefront stays organized as the catalog grows",
    ],
    howItWorks:
      "Supplier files and Matrixify exports go in one end; clean, structured product data comes out the other. The pipeline dedupes and normalizes the rows, matches each product to its supplier records, detects its category and manufacturer, routes it to the right prompt, and drafts the description — Body HTML plus SEO meta — ready for Matrixify import back into Shopify. Anything the router can't classify gets logged for human review instead of guessed at.",
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
    codeExcerpt: {
      title: "The smart prompt router — from the actual codebase",
      language: "python",
      code: `def smart_prompt_type(collection, title, tags, manufacturer):
    # Step 1: Exact collection match
    # Step 2: Fuzzy / partial collection match
    # Step 3: Scan ALL tags for a collection mapping
    # Step 4: Fallback keyword match in title + tags
    # Step 5: Heuristics — Faucet -> fashion,
    #         PEX -> compliance, Valve -> standard
    # Step 6: Log the unmapped for human review,
    #         never guess
    ...`,
      note: "Trimmed for readability — the real function runs all six steps per product.",
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
      { value: "≈400 hrs", label: "est. manual listing work automated" },
    ],
    businessAngle:
      "This is the ecommerce offer in miniature: messy product data in, sellable listings out. Any Shopify store sitting on supplier spreadsheets gets the same treatment — a catalog that maintains itself instead of eating someone's week.",
    featured: true,
  },
  {
    slug: "eastcoast-studios",
    title: "EastCoastStudios",
    tagline: "Catalog-wide SEO rewrite for a wall-art e-commerce brand",
    year: "2026",
    status: "Delivered — catalog enriched",
    monogram: "EC",
    tech: ["OpenAI GPT", "Shopify", "Matrixify", "Python"],
    summary:
      "The Apex playbook, deployed for a second client. EastCoastStudios sells wall art online — tens of thousands of listings with long, inconsistent titles and missing SEO metadata. I built the toolkit that rewrote the catalog for search: strict-format SEO titles and meta descriptions generated from raw Shopify exports, then imported back via Matrixify. Documented end to end so the non-technical owner runs it solo.",
    problem:
      "Search was leaving money on the table. Tens of thousands of wall-art listings had bloated, keyword-stuffed titles and no SEO metadata — invisible to the exact searches that drive art sales. Rewriting the catalog by hand, one listing at a time, was never going to happen.",
    built: [
      "SEO title + meta description generation from raw Shopify CSV exports",
      "A strict title format enforced by prompt: city/landmark + subject + product type, 45–65 characters, no brand, no fluff",
      "Handle-deduped processing with 10 concurrent GPT workers, 3 automatic retries, and safe fallbacks that never block a run",
      "Test mode (15–50 listings) so output quality is confirmed before full-catalog runs",
      "Matrixify update-mode import — only the SEO fields are touched, nothing else overwritten",
      "Non-coder documentation: setup, usage, troubleshooting, and glossary",
    ],
    howItWorks:
      "Export the catalog from Shopify as a CSV. The toolkit dedupes by product handle, rewrites each title and description against a strict SEO format with concurrent GPT calls, and writes the enriched CSV back. Import via Matrixify in update mode and only the SEO fields change. A small test batch runs first to confirm quality; safe fallbacks mean a failed API call never blocks the batch.",
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
    codeExcerpt: {
      title: "The SEO title prompt — from the actual codebase",
      language: "python",
      code: `def build_seo_title_prompt(title: str) -> str:
    return (
        "You are an SEO title writer for a wall art "
        "e-commerce catalog.\\n\\n"
        "Formatting Rules:\\n"
        "- Format: City or landmark + subject "
        "  + product type.\\n"
        "- Exactly one product type: wall art, "
        "  print, poster, or canvas.\\n"
        "- Do not include the brand name.\\n"
        "- Use Title Case.\\n"
        "- Target 45–65 characters (hard max 75).\\n"
        "- No emojis, no filler like "
        "  'high quality'.\\n"
        ...`,
      note: "The prompt is the product: every formatting rule is load-bearing.",
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
      "Built once, deployed twice: the Apex pipeline's pattern, adapted to a totally different vertical in days, not months. Any Shopify store with a big catalog has this exact problem — the listings exist, but search can't find them.",
    featured: true,
  },
  {
    slug: "jlk",
    title: "JLK, Ltd.",
    tagline: "Back-office automation for a Dallas real estate company",
    year: "2024",
    status: "Completed — summer engagement",
    monogram: "JLK",
    tech: ["Yardi", "Python", "Document automation"],
    summary:
      "Three months inside a Dallas real estate company's back office. I organized the deeds and ownership papers for ~20 properties, worked day-to-day in Yardi, and built file-automation scripts that turned a chaotic archive into a system the team kept using. The engagement ended with a formal recommendation letter from company leadership.",
    problem:
      "Property records are the business — deeds, ownership papers, title policies — but they lived in a disorganized archive where finding the right document meant digging through scans named things like scan0032.pdf. For a company managing ~20 properties, that friction touches every transaction, every closing, every audit.",
    built: [
      "Full audit and reorganization of deeds and ownership papers across ~20 properties",
      "Day-to-day work inside Yardi, the company's property-management system",
      "File-renaming and arranging scripts that enforce the naming standard on every document",
      "A repeatable organization system so new documents land in the right place",
    ],
    howItWorks:
      "Start with the mess: every deed, title policy, and ownership document accounted for. Then impose order — consistent naming, property-by-property structure, and scripts that do the repetitive arranging, with every move logged. The result isn't just a clean archive; it's a workflow the office keeps using after you're gone.",
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
    codeExcerpt: {
      title: "The rename-and-move script — from the actual codebase",
      language: "python",
      code: `# ToRename -> rename -> ReadyToUpload,
# with a log of every move
shutil.move(original_path, new_path)

with open(LOG_FILE, "a") as log:
    log.write(f"[{new_name}] moved "
              f"from ToRename to ReadyToUpload\\n")`,
      note: "Paths redacted. Every rename is validated, moved, and logged — or it fails loudly.",
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
      "Every real-estate office, law firm, and small business has a version of this archive. The work isn't glamorous — it's load-bearing. Document automation turns the filing cabinet, physical or digital, into infrastructure that works as fast as you do.",
    featured: true,
  },
  {
    slug: "midday-madness",
    title: "Midday Madness",
    tagline: "A podcast website plus an agent crew that runs the show",
    year: "2026",
    status: "Live",
    monogram: "MM",
    logo: "/visuals/midday-logo.jpg",
    tech: ["GitHub Pages", "Multi-agent rooms", "Agent delegation"],
    liveUrl: "https://alex22musi.github.io/midday-madness/",
    visuals: [
      {
        src: "/visuals/midday-logo.jpg",
        alt: "Midday Madness show logo",
        caption: "Show branding from the live site.",
      },
      {
        src: "/visuals/mm-clip-still.jpg",
        alt: "Still from the 'Texas A&M Is Overrated' clip",
        caption: "A real clip from the site — captioned, under a minute, built to travel.",
      },
    ],
    summary:
      "For the Midday Madness podcast I shipped a full website in days — episodes, clips, and show infrastructure — then built the more interesting half: an agent crew that runs the show's operations. Each host's AI agent lives in a dedicated coordination room, posting start/ship/blocked updates and handling handoffs. The scattered messages and email threads that used to run production are gone.",
    problem:
      "A podcast is a small media business: episodes to plan, a site to maintain, clips to ship, coordination across hosts. All of it ran on scattered messages and memory — 'did anyone post the episode?', 'who has the clips?' The hosts needed the show to run like an operation, not a group chat.",
    built: [
      "Complete podcast website — episodes, clips, and show infrastructure, live on GitHub Pages",
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
    monogram: "BR",
    tech: ["Next.js", "React Native", "Supabase", "Vercel", "The Odds API", "ESPN API"],
    summary:
      "A real-time chat platform where every person has an AI agent in the room — and the agents talk to each other, not just to their humans. It started as one shared group chat and grew into a multi-room system: private agent-to-agent rooms, an ESPN-settled betting leaderboard, a parlay builder with combined-odds math, and a sportsbook handoff flow. Live in production, used every day.",
    problem:
      "Group chats are where Ryan and his friends live — picks, debates, bets, banter. But every AI assistant lived in its own silo, only ever talking to its own human. The question was: what happens when you put the agents in the room together and let them talk to each other?",
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
