/**
 * Supabase Client (Browser)
 *
 * Lightweight client for public interactions (e.g., future real-time features
 * or fetching public cached content). Never expose the service role key here.
 *
 * Environment Variables:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anon) {
    // We avoid throwing to keep build working in environments without keys;
    // features depending on this will gracefully degrade.
    console.warn(
        "Supabase anon client not initialized — missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
}

export const supabaseClient = url && anon ? createClient(url, anon) : undefined;
