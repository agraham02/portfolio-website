/**
 * Waitlist Count API Route
 *
 * Public GET endpoint that returns the total count of waitlist signups.
 * Uses Supabase admin client for server-side access with caching for performance.
 *
 * Caching Strategy:
 * - Next.js revalidation every 60s (tunable)
 * - Response headers with stale-while-revalidate pattern
 * - Fail gracefully with { count: 0 } to prevent error leaks
 *
 * Security:
 * - No authentication required (count is public info)
 * - Minimal response payload
 * - No sensitive data exposure
 *
 * Usage:
 * ```
 * const res = await fetch('/api/waitlist-count')
 * const { count } = await res.json()
 * ```
 */

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

/**
 * Response type for the waitlist count endpoint
 */
export type WaitlistCountResult = {
    count: number;
};

/**
 * GET /api/waitlist-count
 *
 * Returns the total number of waitlist signups.
 * Implements ISR-style caching to reduce database load.
 */
export async function GET() {
    try {
        // Query Supabase for total count using head request (no data transfer)
        const { count, error } = await supabaseAdmin
            .from("waitlist_signups")
            .select("*", { count: "exact", head: true });

        if (error) {
            console.error("Database error fetching waitlist count:", error);
        }

        // Return the count with caching headers (0 if error occurred)
        return NextResponse.json(
            { count: count ?? 0 } satisfies WaitlistCountResult,
            {
                status: 200,
                headers: {
                    "Cache-Control":
                        "public, s-maxage=60, stale-while-revalidate=300",
                    "CDN-Cache-Control": "public, s-maxage=60",
                },
            }
        );
    } catch (error) {
        console.error("Unexpected error in waitlist count API:", error);
        return NextResponse.json({ count: 0 } satisfies WaitlistCountResult, {
            status: 200,
            headers: {
                "Cache-Control":
                    "public, s-maxage=60, stale-while-revalidate=300",
            },
        });
    }
}
