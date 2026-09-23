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
  results: string[];
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
    results: [
      "Initial automation draft delivered to the business in June 2025",
      "Catalog-wide pipeline: raw supplier files in, publish-ready listings out",
      "Turned repetitive per-product listing work into an automated flow",
    ],
    businessAngle:
      "This is the ecommerce offer in miniature: messy product data in, sellable listings out. Any Shopify store sitting on supplier spreadsheets gets the same treatment — a catalog that maintains itself.",
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
    results: [
      "Deeds and ownership papers for ~20 properties fully arranged and documented",
      "Formal recommendation letter from company leadership for the work",
      "Archive went from dig-through-it to look-it-up",
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
    results: [
      "Podcast website designed and shipped with the hosts",
      "Production coordination moved from scattered messages into one agent-run room",
      "A repeatable pattern: any small content operation can run on a crew like this",
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
    results: [
      "Live in production, used every day by Ryan and his friends",
      "Agents from different builders interoperating in the same rooms",
      "Betting, parlays, and leaderboards settle themselves — zero manual scorekeeping",
    ],
    businessAngle:
      "The same architecture powers customer-facing assistants: agents that know your business, talk to your customers in real time, and take action — booking, quoting, support. That's the whole thesis: agents that do the work instead of you doing the work.",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
