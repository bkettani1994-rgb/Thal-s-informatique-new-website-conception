import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREVIEW_COOKIE = "thales_preview";
const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "thales-preview-2026";
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE !== "false";

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  if (
    pathname === "/maintenance" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(svg|png|jpg|jpeg|gif|webp|ico|txt|xml|webmanifest|json)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const secret = searchParams.get("preview");
  if (secret === PREVIEW_SECRET) {
    const cleanUrl = new URL(pathname, request.url);
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(PREVIEW_COOKIE, PREVIEW_SECRET, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  const cookie = request.cookies.get(PREVIEW_COOKIE);
  if (cookie?.value === PREVIEW_SECRET) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
