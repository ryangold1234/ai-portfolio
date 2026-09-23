import { NextResponse } from "next/server";

const NOTION_VERSION = "2022-06-28";
const DB_ID =
  process.env.NOTION_INQUIRIES_DB_ID ?? "3e4b1f83-27a7-813b-9348-c2ad71a893a5";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROJECT_TYPES = new Set([
  "AI agents",
  "Ecommerce automation",
  "Back-office automation",
  "Agent crew / operations",
  "Something else",
]);
const BUDGETS = new Set(["Under $1k", "$1k–$5k", "$5k+", "Not sure yet"]);
const TIMELINES = new Set(["ASAP", "1–3 months", "Just exploring"]);

type Body = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  website?: string; // honeypot — must stay empty
};

function bad(msg: string) {
  return NextResponse.json({ ok: false, error: msg }, { status: 400 });
}

export async function POST(req: Request) {
  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "This form isn't connected yet — please email rygold04@gmail.com directly and I'll reply within 48 hours.",
      },
      { status: 503 }
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return bad("Couldn't read that submission — please try again.");
  }

  // Honeypot: bots fill it, humans don't.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().slice(0, 200);
  const company = (body.company ?? "").trim().slice(0, 120);
  const message = (body.message ?? "").trim().slice(0, 5000);
  const projectType = (body.projectType ?? "").trim();
  const budget = (body.budget ?? "").trim();
  const timeline = (body.timeline ?? "").trim();

  if (name.length < 2) return bad("Please add your name.");
  if (!EMAIL_RE.test(email)) return bad("That email doesn't look right.");
  if (message.length < 10)
    return bad("Tell me a little more about the project (a sentence or two).");
  if (projectType && !PROJECT_TYPES.has(projectType))
    return bad("Please pick a project type from the list.");
  if (budget && !BUDGETS.has(budget))
    return bad("Please pick a budget range from the list.");
  if (timeline && !TIMELINES.has(timeline))
    return bad("Please pick a timeline from the list.");

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: name } }] },
    Email: { email },
    Company: { rich_text: [{ text: { content: company } }] },
    Message: { rich_text: [{ text: { content: message } }] },
    Status: { select: { name: "New" } },
  };
  if (projectType)
    properties["Project type"] = { select: { name: projectType } };
  if (budget) properties["Budget"] = { select: { name: budget } };
  if (timeline) properties["Timeline"] = { select: { name: timeline } };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: DB_ID },
      properties,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong saving your request — please email rygold04@gmail.com directly instead.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
