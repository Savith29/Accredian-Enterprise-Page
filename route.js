import { NextResponse } from "next/server";

// NOTE: This is an in-memory mock store for assignment/demo purposes.
// It resets on every server restart / redeploy and is NOT shared across
// serverless function instances in production. Swap this for a real
// database (Postgres, MongoDB, etc.) for a production build.
const leads = [];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, company, teamSize, message } = body || {};

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Name, work email, and company are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const lead = {
    id: Date.now().toString(36),
    name,
    email,
    company,
    teamSize: teamSize || "unspecified",
    message: message || "",
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);

  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  // Lets you sanity-check submissions during local development:
  // GET /api/lead
  return NextResponse.json({ count: leads.length, leads });
}
