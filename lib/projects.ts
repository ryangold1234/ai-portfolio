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
      "The same architecture powers customer-facing assistants: agents that know your business, talk to your customers in real time, and take action — booking, quoting, support — instead of just answering questions.",
    featured: true,
  },
  {
    slug: "route-1-eta",
    title: "Route 1 Live ETA",
    tagline: "Knowing exactly when the bus comes, down to the minute",
    year: "2026",
    status: "Running daily",
    tech: ["Python", "GTFS-RT", "TomTom API", "Cron"],
    summary:
      "A real-time arrival system for Bloomington Transit's Route 1. It parses the agency's live vehicle feed, computes ETAs from scheduled times plus measured delay, folds in live road-traffic data, and texts a \"leave now\" alert so Ryan never waits outside for the bus again.",
    problem:
      "Ryan rides Route 1 every class day and hated waiting outside not knowing when the bus would show. His earlier machine-learning predictor never gave a reliable exact-minute answer — so he rebuilt the problem from first principles with live data instead of historical models.",
    built: [
      "Parser for the transit agency's GTFS real-time vehicle feed, including its non-standard data fields",
      "ETA engine: scheduled arrival plus measured delay from live GPS positions",
      "Live traffic integration — congested road segments ahead of the bus add expected delay",
      "Fifteen automated checks per week across morning and evening class commutes",
      "\"Leave now\" texts, delay heads-ups, and missed-bus notes — at most one message a day",
    ],
    howItWorks:
      "Each check takes one live GPS snapshot of the bus, computes where it actually is versus schedule, then looks ahead at traffic on the segments the bus hasn't reached yet. If the bus will be at Ryan's stop within seven minutes, his phone buzzes. The system is deliberately honest about uncertainty until real arrival data tunes it further.",
    results: [
      "Running on class days across morning and evening commutes",
      "Pure standard-library Python — no heavy dependencies, cheap to operate",
      "Documented end-to-end so any future AI agent can maintain and extend it",
    ],
    businessAngle:
      "This is operational alerting: live data in, a decision out, a human notified at exactly the right moment. The same pattern watches inventory, flags late shipments, or pings a manager when a KPI moves.",
    featured: true,
  },
  {
    slug: "recruiting-command-center",
    title: "Recruiting Command Center",
    tagline: "A job search that largely runs itself",
    year: "2025 – 2026",
    status: "Running daily",
    tech: ["Notion API", "Gmail API", "Scheduled jobs"],
    summary:
      "A personal operating system for Ryan's investment-banking recruiting: every company, contact, call, interview, and deadline tracked in one place, watched over by nightly audits that flag stale follow-ups and a Monday-morning scan that surfaces closing application deadlines.",
    problem:
      "Dozens of firms, dozens of contacts, rolling deadlines — run it all from memory and things slip. Ryan needed a system with the memory of a chief of staff: nothing falls through, every follow-up has an owner and a date, and the week's risks surface before Monday coffee.",
    built: [
      "Structured pipeline: companies, contacts, calls, interviews, and deadlines in one database",
      "Nightly audit that flags stale follow-ups, inconsistent records, and recurring failure patterns",
      "Monday deadline watch — alerts only when a new application deadline is actually closing",
      "Prep-capture-follow-up workflow for every networking call, with one-page briefs",
    ],
    howItWorks:
      "The databases are the source of truth; scheduled jobs read them like a diligent analyst. The nightly audit diffs today's state against yesterday's and only speaks up when something is new, changed, or broken. The deadline watch checks every application date each Monday and stays silent when there's nothing closing — no noise, only signal.",
    results: [
      "Ran Ryan's full IB recruiting pipeline across two recruiting cycles",
      "Catches slipped follow-ups and closing deadlines before they cost opportunities",
      "Audit-only by design: it proposes, Ryan decides — nothing sends without him",
    ],
    businessAngle:
      "Replace 'recruiting' with 'sales pipeline' or 'client onboarding' and this is a CRM that manages itself: automated follow-up hygiene, deadline risk radar, and briefings before every important conversation.",
    featured: true,
  },
  {
    slug: "daily-brief",
    title: "Daily Intelligence Brief",
    tagline: "Every morning, the day briefs itself",
    year: "2025 – 2026",
    status: "Running daily",
    tech: ["Gmail API", "Google Calendar", "Notion API", "Scheduled jobs"],
    summary:
      "A 7:15 AM briefing assembled from Ryan's assignments, exams, email, and calendar — what's due, what's new, what needs attention — delivered before his day starts so he never opens five apps to figure out his morning.",
    problem:
      "The information Ryan needed each morning lived in five places: the assignment tracker, the exam schedule, two inboxes, and a calendar. Mornings were spent hunting for the day instead of starting it.",
    built: [
      "Daily 7:15 AM briefing pulling assignments, exams, school email, and calendar",
      "Due-today vs. overdue distinction so priorities are obvious at a glance",
      "School email read through a dedicated pipeline (Outlook-only by design)",
      "Quiet by default: the brief is a briefing, not a notification firehose",
    ],
    howItWorks:
      "A scheduled job gathers the day's raw material from each source, separates what's due today from what's already overdue, and composes one readable brief. It runs unattended every morning — Ryan's only job is to read it.",
    results: [
      "Delivered every morning through the school year",
      "One read replaces checking five separate apps",
      "Evolved over months of real use — the format is earned, not guessed",
    ],
    businessAngle:
      "Every small business has a version of this: orders, appointments, cash position, staffing — scattered across tools. A morning brief turns scattered data into one decision-ready page.",
    featured: false,
  },
  {
    slug: "health-analytics",
    title: "Health Analytics",
    tagline: "Coaching from his own data",
    year: "2026",
    status: "Running weekly",
    tech: ["Whoop API", "Apple HealthKit", "Scheduled jobs"],
    summary:
      "A personal health data pipeline combining Whoop recovery, sleep, and workout data with Apple Health metrics, reviewed every Sunday evening: sleep duration and bedtime regularity, training mix, resting heart rate trends — with concrete next-week targets.",
    problem:
      "Ryan wanted better sleep and more strength training, but 'try to sleep more' isn't a plan. He needed the same discipline he brings to data projects: baselines, trends, and a weekly review that says exactly what changed.",
    built: [
      "Direct Whoop API integration: recovery, sleep debt, workouts, resting HR",
      "Apple HealthKit sync for steps, distance, and daily activity",
      "Weekly Sunday review: sleep averages, training mix, trend deltas, next-week targets",
      "Plain-spoken, data-led coaching — on demand plus the weekly review, never nagging",
    ],
    howItWorks:
      "Workout and biometric data flow in continuously from both platforms. Each Sunday the review aggregates the week — average sleep, bedtime consistency, strength sessions vs. target, resting-HR trend — and sets specific targets for the week ahead. Progress is measured in trends, not single days.",
    results: [
      "Baselined a full month: ~6.5h sleep, 1:30–3 AM bedtimes, 1 strength session in 32 workouts",
      "Weekly reviews turned vague goals into measurable targets",
      "The same pipeline now supports a diet-tracking integration from food-order data",
    ],
    businessAngle:
      "Wearables are just sensors; the value is the loop — collect, review, adjust. The same loop optimizes staffing schedules, equipment maintenance, or ad spend: instrument it, review it weekly, act on the trend.",
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
