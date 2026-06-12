import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREVIEW_COOKIE = "thales_preview";
const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "thales-preview-2026";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== PREVIEW_SECRET) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(PREVIEW_COOKIE, PREVIEW_SECRET, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
    path: "/",
  });
  return response;
}
