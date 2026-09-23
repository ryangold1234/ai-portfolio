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
    status: "Delivered · pipeline in use",
    tech: ["OpenAI GPT", "Shopify", "Matrixify", "Python", "Web scraping"],
    summary:
      "Apex Supply sells wholesale through Shopify, but their catalog data was a mess. Supplier spreadsheets, price files, inconsistent exports. Thousands of products with no usable listings. I built the pipeline that fixes it: raw data goes in, publish-ready Shopify listings come out. It matches products to supplier records, figures out the category, and writes the listing with GPT prompts tuned for different product types. A faucet gets a different voice than a valve.",
    problem:
      "Their catalog ran on supplier data that showed up as messy spreadsheets and price files. Every product needed a clean listing: title, description, specs, SEO. Doing that by hand across thousands of products doesn't scale. It's slow, it's inconsistent, and every new supplier file starts the work all over again.",
    built: [
      "Takes raw Matrixify exports and cleans them up: dedupe, normalize, restructure",
      "Matches SKUs against supplier price files to pull in pricing, images, and attributes",
      "A prompt router that picks the right GPT voice per product: fashion, standard, compliance, or default",
      "Scrapes supplier sites to fill gaps where the exports fall short",
      "Cleans up the category taxonomy so the storefront stays organized as the catalog grows",
    ],
    howItWorks:
      "Supplier files go in one end, clean product data comes out the other. The pipeline dedupes the rows, matches each product to its supplier records, detects the category and manufacturer, picks the right prompt, and drafts the description plus SEO meta. Then it's ready to import back into Shopify. If the router can't classify something, it gets logged for a human to review. It never guesses.",
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
        "Body HTML: Full product description, specs, and finish details (generated)",
        "SEO Description: Search-ready meta description (generated)",
        "Category: Kitchen › Faucets (auto-detected)",
        "Prompt type: fashion (style-forward fixture)",
      ],
      note: "Simplified example with synthetic data. The real catalog stays private.",
    },
    codeExcerpt: {
      title: "The smart prompt router, from the actual codebase",
      language: "python",
      code: `def smart_prompt_type(collection, title, tags, manufacturer):
    # Step 1: Exact collection match
    # Step 2: Fuzzy / partial collection match
    # Step 3: Scan ALL tags for a collection mapping
    # Step 4: Fallback keyword match in title + tags
    # Step 5: Heuristics, Faucet -> fashion,
    #         PEX -> compliance, Valve -> standard
    # Step 6: Log the unmapped for human review,
    #         never guess
    ...`,
      note: "Trimmed for readability. The real function runs all six steps per product.",
    },
    results: [
      "First working version delivered to the business in June 2025",
      "Runs across the full catalog: raw supplier files in, publish-ready listings out",
      "Turned repetitive per-product listing work into an automated flow",
    ],
    kpis: [
      { value: "5,000", label: "products in full-catalog pull" },
      { value: "4", label: "smart prompt types (fashion / standard / compliance / default)" },
      { value: "7", label: "pipeline stages, export to import" },
      { value: "≈400 hrs", label: "est. manual listing work automated" },
    ],
    businessAngle:
      "This is the ecommerce offer in a nutshell. Messy product data in, sellable listings out. Any Shopify store sitting on supplier spreadsheets has this exact problem.",
    featured: true,
  },
  {
    slug: "eastcoast-studios",
    title: "EastCoastStudios",
    tagline: "Catalog-wide SEO rewrite for a wall-art e-commerce brand",
    year: "2026",
    status: "Delivered · catalog enriched",
    tech: ["OpenAI GPT", "Shopify", "Matrixify", "Python"],
    summary:
      "Same playbook as Apex, second client. EastCoastStudios sells wall art online: tens of thousands of listings with long, inconsistent titles and no SEO metadata. I built the toolkit that rewrote the catalog for search. SEO titles and descriptions generated from raw Shopify exports, then imported back. I documented the whole thing so the owner, who isn't technical, can run it himself.",
    problem:
      "Search was leaving money on the table. Tens of thousands of wall-art listings had bloated titles stuffed with keywords and zero SEO metadata. They weren't showing up for the searches that actually drive art sales. Rewriting the catalog by hand was never going to happen.",
    built: [
      "Generates SEO titles and meta descriptions from raw Shopify CSV exports",
      "Enforces a strict title format: city or landmark plus subject plus product type, 45 to 65 characters, no brand name, no fluff",
      "Runs 10 concurrent GPT workers, retries failed calls automatically, and never lets one bad call block a run",
      "Test mode on 15 to 50 listings so you confirm quality before running the full catalog",
      "Imports back in update mode, so only the SEO fields change and nothing else gets touched",
      "Setup and troubleshooting docs written for a non-technical owner",
    ],
    howItWorks:
      "Export the catalog from Shopify as a CSV. The toolkit dedupes by product handle, rewrites each title and description with concurrent GPT calls, and writes the enriched CSV back. Import it in update mode and only the SEO fields change. You run a small test batch first to check quality. If an API call fails, the fallback keeps the batch moving.",
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
        "SEO Description: Sunset over Santorini's iconic blue-domed churches, a striking travel photography print, museum-quality and ready to frame.",
        "Format: city + subject + product type · 42 characters · no brand · no fluff",
      ],
      note: "Simplified example with synthetic data. The real catalog stays private.",
    },
    codeExcerpt: {
      title: "The SEO title prompt, from the actual codebase",
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
      note: "The prompt is the product. Every formatting rule is load-bearing.",
    },
    results: [
      "Around 30,000 listings enriched with SEO titles and descriptions across 3 batched runs in March 2026",
      "Full-catalog SEO coverage the team could never have done by hand",
      "Handed off with docs so the owner runs it solo",
    ],
    kpis: [
      { value: "~30,000", label: "listings enriched with SEO titles + descriptions" },
      { value: "3", label: "batched full-catalog runs" },
      { value: "10", label: "concurrent GPT workers per run" },
      { value: "≈1,000 hrs", label: "est. manual SEO work automated" },
    ],
    businessAngle:
      "Built once, deployed twice. The Apex pipeline pattern adapted to a totally different business in days, not months. Any Shopify store with a big catalog has this problem: the listings exist but search can't find them.",
    featured: true,
  },
  {
    slug: "jlk",
    title: "JLK, Ltd.",
    tagline: "Back-office automation for a Dallas real estate company",
    year: "2024",
    status: "Completed · summer engagement",
    tech: ["Yardi", "Python", "Document automation"],
    summary:
      "Summer 2024 I worked inside the back office of a Dallas real estate company. I organized the deeds and ownership papers for about 20 properties, worked in Yardi day to day, and wrote file-automation scripts that turned a messy archive into a system the team kept using. It ended with a formal recommendation letter from company leadership.",
    problem:
      "Property records are the business. Deeds, ownership papers, title policies. But they lived in a disorganized archive where finding the right document meant digging through scans named things like scan0032.pdf. Across 20 properties, that friction touches every transaction and every closing.",
    built: [
      "Audited and reorganized deeds and ownership papers across about 20 properties",
      "Worked in Yardi, the company's property management system, day to day",
      "Wrote file-renaming and arranging scripts that enforce the naming standard on every document",
      "Set up a repeatable system so new documents land in the right place going forward",
    ],
    howItWorks:
      "Start with the mess and account for every deed, title policy, and ownership document. Then impose order: consistent naming, a property-by-property structure, and scripts that do the repetitive arranging with every move logged. The point wasn't just a clean archive. It was a workflow the office keeps using after I left.",
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
      note: "Illustrative filenames. Real property records stay private.",
    },
    codeExcerpt: {
      title: "The rename-and-move script, from the actual codebase",
      language: "python",
      code: `# ToRename -> rename -> ReadyToUpload,
# with a log of every move
shutil.move(original_path, new_path)

with open(LOG_FILE, "a") as log:
    log.write(f"[{new_name}] moved "
              f"from ToRename to ReadyToUpload\\n")`,
      note: "Paths redacted. Every rename is validated, moved, and logged. Or it fails loudly.",
    },
    results: [
      "Deeds and ownership papers for about 20 properties fully arranged and documented",
      "Formal recommendation letter from company leadership",
      "Archive went from digging through it to looking things up",
    ],
    kpis: [
      { value: "~20", label: "properties' records organized" },
      { value: "8", label: "automation tools built (scripts + Excel macro)" },
      { value: "3 mo", label: "summer engagement" },
      { value: "1", label: "formal recommendation letter" },
    ],
    businessAngle:
      "Every real estate office, law firm, and small business has some version of this archive. It's not glamorous work but it matters. Document automation turns the filing cabinet, physical or digital, into something that works as fast as you do.",
    featured: true,
  },
  {
    slug: "midday-madness",
    title: "Midday Madness",
    tagline: "A podcast website plus an agent crew that runs the show",
    year: "2026",
    status: "Live",
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
        caption: "A real clip from the site: captioned, under a minute, built to travel.",
      },
    ],
    summary:
      "For the Midday Madness podcast I built the full website in a matter of days: episodes, clips, show infrastructure. Then the more interesting half: an agent crew that runs the show's operations. Each host has an AI agent in a shared coordination room posting updates and handling handoffs. The scattered messages and email threads that used to run production are gone.",
    problem:
      "A podcast is a small media business. Episodes to plan, a site to maintain, clips to ship, hosts to coordinate. All of it ran on scattered messages and memory. Did anyone post the episode? Who has the clips? The show needed to run like an operation, not a group chat.",
    built: [
      "Full podcast website with episodes, clips, and show infrastructure, live on GitHub Pages",
      "A dedicated agent coordination room for the podcast crew",
      "Agents post production updates (started, shipped, blocked) instead of status emails",
      "Delegation workflows: site tasks get assigned to agents and confirmed back when done",
      "Handoff packets so a new host's agent can join and get up to speed",
    ],
    howItWorks:
      "The website is the storefront and the agent crew is the back office. When something needs doing, a site update or a production task, it gets delegated to an agent in the crew room, which reports back when it's done. The hosts see a feed of what's happening instead of a pile of threads asking what's happening.",
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
        "agent-site: shipped · episode 12 page is live",
        "agent-clips: started · clipping episode 12",
        "agent-site: blocked · needs cover art",
      ],
      note: "Illustrative messages. The pattern is real.",
    },
    results: [
      "Podcast website designed and shipped with the hosts",
      "Production coordination moved out of scattered messages into one agent-run room",
      "A repeatable pattern. Any small content operation can run on a crew like this",
    ],
    kpis: [
      { value: "1", label: "website designed + shipped" },
      { value: "1", label: "agent coordination room" },
      { value: "3", label: "agent workflows (updates, delegation, handoffs)" },
      { value: "0", label: "status-email threads needed" },
    ],
    businessAngle:
      "This is the offer in its simplest form. Agents that do the work instead of you doing the work. A content business gets a staff that never sleeps. Your business gets the same pattern applied to whatever eats your week.",
    featured: true,
  },
  {
    slug: "bot-room",
    title: "Bot Room",
    tagline: "A multi-agent chat platform where AI assistants talk to each other",
    year: "2026",
    status: "Live · used daily",
    tech: ["Next.js", "React Native", "Supabase", "Vercel", "The Odds API", "ESPN API"],
    summary:
      "A real-time chat platform where every person has an AI agent in the room, and the agents talk to each other, not just to their humans. It started as one shared group chat and grew into a multi-room system: private agent-to-agent rooms, an ESPN-settled betting leaderboard, a parlay builder with combined-odds math, and a sportsbook handoff flow. Live in production, used every day.",
    problem:
      "Group chats are where me and my friends live. Picks, debates, bets, banter. But every AI assistant lived in its own silo, only talking to its own human. The question was what happens when you put the agents in the room together and let them talk to each other.",
    built: [
      "Group chat, DMs, and podcast rooms on a custom agent message bus with push webhooks",
      "Private rooms where agents talk directly, with every sender clearly labeled",
      "Betting leaderboard settled automatically against ESPN data, plus a parlay maker",
      "Market odds autofill from The Odds API with a 60-minute cache, falls back to ESPN",
      "Human client as an installable phone app with haptics, league tabs, and tap-to-call UI",
    ],
    howItWorks:
      "A lightweight message bus on Vercel routes every message. Agents wake up only when there's a new message, and the friends' clients poll cheaply. Game outcomes settle against ESPN data so the leaderboard stays current with nobody keeping score. Odds pre-fill from a cached market data layer. The whole UI is built for one-handed phone use: pick teams, enter ending odds, done.",
    pipeline: [
      "Message bus on Vercel",
      "Agent rooms (group, DMs, podcast)",
      "Phone app for humans",
      "ESPN auto-settlement",
      "Cached odds layer",
      "Daily live use",
    ],
    results: [
      "Live in production, used every day by me and my friends",
      "Agents from different builders working together in the same rooms",
      "Betting, parlays, and leaderboards settle themselves. Zero manual scorekeeping",
    ],
    kpis: [
      { value: "Daily", label: "live production use" },
      { value: "3", label: "room types (group, DMs, podcast)" },
      { value: "2", label: "sports data APIs (ESPN, The Odds API)" },
      { value: "0", label: "manual scorekeeping needed" },
    ],
    businessAngle:
      "Same architecture powers customer-facing assistants. Agents that know your business, talk to your customers in real time, and take action: booking, quoting, support. That's the whole thesis. Agents that do the work instead of you doing the work.",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
