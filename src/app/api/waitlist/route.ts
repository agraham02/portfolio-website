/**
 * Waitlist Export API Route
 *
 * Server-only API endpoint for exporting waitlist signups as CSV.
 * This endpoint is protected by a simple API key authentication.
 *
 * Environment Variables Required (SERVER-ONLY):
 * - NEXT_PUBLIC_SUPABASE_URL: Supabase project URL
 * - SUPABASE_SERVICE_ROLE_KEY: Supabase service role key
 * - ADMIN_EXPORT_KEY: Secret key for authenticating export requests
 *
 * Usage:
 * ```bash
 * curl -H "x-admin-key: your-admin-key" \
 *      https://yourdomain.com/api/waitlist
 * ```
 *
 * Security Notes:
 * - Always use HTTPS in production
 * - Keep ADMIN_EXPORT_KEY secret and rotate it regularly
 * - Consider implementing rate limiting for production
 * - Add IP whitelisting for additional security
 */

import { NextResponse } from "next/server";
import { supabaseAdmin, type WaitlistSignup } from "@/lib/supabaseAdmin";

/**
 * GET handler for exporting waitlist signups
 *
 * Returns a CSV file with all waitlist signups ordered by created_at DESC.
 * Requires authentication via the x-admin-key header.
 *
 * @returns CSV file download or error response
 */
export async function GET(request: Request) {
    try {
        // 1. Authenticate the request
        const adminKey = request.headers.get("x-admin-key");
        const expectedKey = process.env.ADMIN_EXPORT_KEY;

        if (!expectedKey) {
            console.error("ADMIN_EXPORT_KEY environment variable is not set");
            return NextResponse.json(
                {
                    error: "Server configuration error",
                    message: "Export functionality is not configured",
                },
                { status: 500 }
            );
        }

        if (!adminKey || adminKey !== expectedKey) {
            return NextResponse.json(
                {
                    error: "Unauthorized",
                    message: "Invalid or missing admin key",
                },
                { status: 401 }
            );
        }

        // 2. Fetch waitlist signups from database
        const { data: signups, error: dbError } = await supabaseAdmin
            .from("waitlist_signups")
            .select("email, created_at, source")
            .order("created_at", { ascending: false });

        if (dbError) {
            console.error("Database error:", dbError);
            return NextResponse.json(
                {
                    error: "Database error",
                    message: "Failed to fetch waitlist data",
                },
                { status: 500 }
            );
        }

        if (!signups || signups.length === 0) {
            return NextResponse.json(
                {
                    error: "No data",
                    message: "No waitlist signups found",
                },
                { status: 404 }
            );
        }

        // 3. Convert data to CSV format
        const csv = convertToCSV(signups);

        // 4. Return CSV file as downloadable attachment
        return new NextResponse(csv, {
            status: 200,
            headers: {
                "Content-Type": "text/csv",
                "Content-Disposition": `attachment; filename=waitlist-${
                    new Date().toISOString().split("T")[0]
                }.csv`,
                "Cache-Control": "no-cache, no-store, must-revalidate",
            },
        });
    } catch (error) {
        console.error("Unexpected error in waitlist export:", error);
        return NextResponse.json(
            {
                error: "Internal server error",
                message: "An unexpected error occurred",
            },
            { status: 500 }
        );
    }
}

/**
 * Convert waitlist signups to CSV format
 *
 * @param data - Array of waitlist signup records
 * @returns CSV string with headers and data rows
 */
function convertToCSV(
    data: Array<Pick<WaitlistSignup, "email" | "created_at" | "source">>
): string {
    // Define CSV headers
    const headers = ["Email", "Created At", "Source"];

    // Convert data rows to CSV format
    const rows = data.map((signup) => [
        escapeCSV(signup.email),
        escapeCSV(new Date(signup.created_at).toISOString()),
        escapeCSV(signup.source || ""),
    ]);

    // Combine headers and rows
    const csvLines = [headers.join(","), ...rows.map((row) => row.join(","))];

    return csvLines.join("\n");
}

/**
 * Escape special characters in CSV fields
 *
 * Handles commas, quotes, and newlines according to CSV RFC 4180
 *
 * @param value - Field value to escape
 * @returns Properly escaped CSV field value
 */
function escapeCSV(value: string): string {
    // If value contains comma, quote, or newline, wrap in quotes
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
        // Escape existing quotes by doubling them
        return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
}

/**
 * Optional: POST handler for filtering/pagination
 *
 * Example implementation for more advanced export features:
 * - Date range filtering
 * - Source filtering
 * - Pagination
 * - Custom field selection
 */
export async function POST(request: Request) {
    try {
        // Authenticate
        const adminKey = request.headers.get("x-admin-key");
        const expectedKey = process.env.ADMIN_EXPORT_KEY;

        if (!expectedKey || !adminKey || adminKey !== expectedKey) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Parse request body for filters
        const body = await request.json();
        const { startDate, endDate, source, limit = 1000, offset = 0 } = body;

        // Build query with filters
        let query = supabaseAdmin
            .from("waitlist_signups")
            .select("email, created_at, source, user_agent")
            .order("created_at", { ascending: false });

        // Apply filters
        if (startDate) {
            query = query.gte("created_at", startDate);
        }
        if (endDate) {
            query = query.lte("created_at", endDate);
        }
        if (source) {
            query = query.eq("source", source);
        }

        // Apply pagination
        query = query.range(offset, offset + limit - 1);

        const { data: signups, error: dbError } = await query;

        if (dbError) {
            console.error("Database error:", dbError);
            return NextResponse.json(
                { error: "Database error" },
                { status: 500 }
            );
        }

        // Return as JSON for POST requests (client-side processing)
        return NextResponse.json({
            data: signups,
            count: signups?.length || 0,
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
