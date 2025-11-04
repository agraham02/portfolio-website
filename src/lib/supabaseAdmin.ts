/**
 * Supabase Admin Client
 *
 * This module provides a server-only Supabase client that uses the service role key.
 * The service role key bypasses Row Level Security (RLS) policies and should NEVER
 * be exposed to the client.
 *
 * Environment Variables Required (SERVER-ONLY):
 * - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
 * - SUPABASE_SERVICE_ROLE_KEY: Your Supabase service role key (secret)
 *
 * Usage:
 * ```typescript
 * import { supabaseAdmin } from '@/lib/supabaseAdmin'
 *
 * const { data, error } = await supabaseAdmin
 *   .from('waitlist_signups')
 *   .insert({ email: 'user@example.com' })
 * ```
 *
 * Security Notes:
 * - Only import and use this client in Server Components, Server Actions, or API Routes
 * - Never import this in Client Components or expose it to the browser
 * - The service role key has full database access, bypassing all RLS policies
 */

import { createClient } from "@supabase/supabase-js";

// Validate required environment variables at module load time
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error(
        "Missing required environment variable: NEXT_PUBLIC_SUPABASE_URL"
    );
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
        "Missing required environment variable: SUPABASE_SERVICE_ROLE_KEY (server-only)"
    );
}

/**
 * Supabase admin client with service role access
 *
 * This client:
 * - Bypasses Row Level Security (RLS) policies
 * - Has full read/write access to all tables
 * - Does not persist sessions (stateless)
 * - Should only be used for trusted server-side operations
 *
 * @constant
 */
export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
        auth: {
            // Disable session persistence for server-side client
            persistSession: false,
            // Disable automatic token refresh since we're not using sessions
            autoRefreshToken: false,
            // Detect session from cookies (for server components)
            detectSessionInUrl: false,
        },
    }
);

/**
 * Type definitions for the waitlist_signups table
 */
export interface WaitlistSignup {
    id: string;
    email: string;
    created_at: string;
    source: string | null;
    user_agent: string | null;
    ip_hash: string | null;
}

/**
 * Type for inserting a new waitlist signup
 */
export interface WaitlistSignupInsert {
    email: string;
    source?: string | null;
    user_agent?: string | null;
    ip_hash?: string | null;
}
