import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UNDER_CONSTRUCTION } from "@/lib/construction";

export function middleware(request: NextRequest) {
    // Skip middleware for static files and API routes
    if (
        request.nextUrl.pathname.startsWith("/_next") ||
        request.nextUrl.pathname.startsWith("/api") ||
        request.nextUrl.pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    // If under construction, redirect all routes to construction page
    if (UNDER_CONSTRUCTION && request.nextUrl.pathname !== "/construction") {
        return NextResponse.redirect(new URL("/construction", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
