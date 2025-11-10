/**
 * WaitlistCount (Server Component)
 *
 * Fetches the waitlist count from the API and displays dynamic messaging
 * based on a configurable threshold. Server-side rendering ensures no
 * client-side API keys are exposed and enables ISR caching.
 *
 * Logic:
 * - If count < threshold: "Be among the first to join."
 * - If count >= threshold: "Join {count} people already waiting for early access."
 *
 * Props:
 * - className: Additional CSS classes (optional)
 * - threshold: Count threshold for switching messages (default: 100)
 * - revalidate: ISR revalidation interval in seconds (default: 60)
 *
 * Usage:
 * ```tsx
 * // In Hero section
 * <WaitlistCount className="mt-4 text-sm" />
 *
 * // In Waitlist section with custom threshold
 * <WaitlistCount threshold={150} className="mt-2" />
 * ```
 */

import { WaitlistCountClient } from "./WaitlistCountClient";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { unstable_cache } from "next/cache";

interface WaitlistCountProps {
    className?: string;
    threshold?: number;
}

/**
 * Fetch waitlist count directly from Supabase with caching
 * Using unstable_cache for better RSC support than fetch API
 */
const getCachedWaitlistCount = unstable_cache(
    async () => {
        try {
            const { count, error } = await supabaseAdmin
                .from("waitlist_signups")
                .select("*", { count: "exact", head: true });

            if (error) {
                console.error("Database error fetching waitlist count:", error);
                return { count: 0 };
            }

            return { count: count ?? 0 };
        } catch (error) {
            console.error("Error fetching waitlist count:", error);
            return { count: 0 };
        }
    },
    ["waitlist-count"],
    {
        revalidate: 60, // Cache for 60 seconds
        tags: ["waitlist-count"],
    }
);

/**
 * Server component that fetches count and delegates rendering to client component
 */
export default async function WaitlistCount({
    className,
    threshold = 100,
}: WaitlistCountProps) {
    // Fetch count with Next.js caching
    const { count } = await getCachedWaitlistCount();

    console.log("🔢 WaitlistCount fetched:", count); // Debug log

    // Determine message based on threshold (rounding happens in client component)
    const message =
        count < threshold
            ? "Be among the first to join."
            : `Join {count} people already waiting for early access.`;

    // Pass data to client component for animation
    return (
        <WaitlistCountClient
            count={count}
            message={message}
            className={className}
        />
    );
}
