import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allowlist of routes that should remain publicly accessible
const ALLOWED_PATHS = new Set<string>([
  "/",
  "/projects",
  "/divyo",
  "/debug-env",
  "/coming-soon",
  "/favicon.ico",
  "/sitemap.xml",
  "/robots.txt",
]);

const normalizePath = (pathname: string): string =>
  pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Normalize path (treat "/about" and "/about/" the same)
  const path = normalizePath(pathname);

  // Allow exact matches on the allowlist
  if (ALLOWED_PATHS.has(path)) {
    return NextResponse.next();
  }

    // Allow subpaths under explicitly allowed roots (e.g., /projects/*)
    if (path.startsWith("/projects/")) {
        return NextResponse.next();
    }

  // Allow subpaths under explicitly allowed roots (e.g., /projects/*)
  if (path.startsWith("/projects/")) {
    return NextResponse.next();
  }

  // Otherwise, rewrite to the Coming Soon page
  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

// Match all paths except Next.js internals and any file with an extension (e.g., assets)
// Pattern recommended by Next.js examples
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
