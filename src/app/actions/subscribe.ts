/**
 * Waitlist Subscription Server Action
 *
 * This module handles waitlist signups with the following features:
 * - Server-side reCAPTCHA v3 verification with score threshold
 * - Zod validation for email and token
 * - Privacy-conscious IP hashing using SHA-256
 * - Duplicate email handling (returns success to prevent email enumeration)
 * - Optional confirmation email via Resend
 *
 * Environment Variables Required:
 * - NEXT_PUBLIC_SUPABASE_URL: Supabase project URL
 * - SUPABASE_SERVICE_ROLE_KEY: Supabase service role key (server-only)
 * - RECAPTCHA_SECRET_KEY: Google reCAPTCHA secret key (server-only)
 * - RESEND_API_KEY: Resend API key (optional, server-only)
 * - DIVYO_EMAIL_FROM: Sender email address (optional)
 *
 * Usage in Client Components:
 * ```typescript
 * import { subscribeToWaitlist } from '@/app/actions/subscribe'
 *
 * const formData = new FormData()
 * formData.append('email', email)
 * formData.append('token', recaptchaToken)
 * formData.append('source', 'landing-hero')
 * formData.append('userAgent', navigator.userAgent)
 *
 * const result = await subscribeToWaitlist(formData)
 * ```
 */

"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { supabaseAdmin, type WaitlistSignupInsert } from "@/lib/supabaseAdmin";

/**
 * reCAPTCHA minimum score threshold
 * Scores range from 0.0 (likely bot) to 1.0 (likely human)
 * Recommended: 0.5 for production (adjust based on your needs)
 */
const RECAPTCHA_MIN_SCORE = 0.5;

/**
 * Expected reCAPTCHA action name
 * Must match the action specified in the client-side grecaptcha.execute() call
 */
const EXPECTED_RECAPTCHA_ACTION = "waitlist_signup";

/**
 * Zod validation schema for form data
 */
const subscribeSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address"),
    token: z.string().min(1, "reCAPTCHA token is required"),
    source: z.string().optional(),
    userAgent: z.string().optional(),
});

/**
 * Type for the server action response
 */
export interface SubscribeResponse {
    ok: boolean;
    message: string;
}

/**
 * reCAPTCHA verification response type from Google
 */
interface RecaptchaVerificationResponse {
    success: boolean;
    score?: number;
    action?: string;
    challenge_ts?: string;
    hostname?: string;
    "error-codes"?: string[];
}

/**
 * Verify reCAPTCHA token with Google's API
 *
 * @param token - The reCAPTCHA token from the client
 * @returns Verification response from Google
 */
async function verifyRecaptcha(
    token: string
): Promise<RecaptchaVerificationResponse> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        throw new Error(
            "RECAPTCHA_SECRET_KEY environment variable is not configured"
        );
    }

    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";
    const params = new URLSearchParams({
        secret: secretKey,
        response: token,
    });

    try {
        const response = await fetch(verificationUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        });

        if (!response.ok) {
            throw new Error(
                `reCAPTCHA verification failed with status: ${response.status}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        throw new Error("Failed to verify reCAPTCHA token");
    }
}

/**
 * Hash an IP address using SHA-256 for privacy-conscious storage
 *
 * @param ip - The IP address to hash
 * @returns SHA-256 hash of the IP address in hexadecimal format
 */
async function hashIP(ip: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(ip);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Extract client IP address from request headers
 *
 * Checks multiple headers in order of preference:
 * 1. x-forwarded-for (most common in production behind proxies)
 * 2. x-real-ip (alternative header)
 * 3. cf-connecting-ip (Cloudflare)
 *
 * @returns The client IP address or null if not found
 */
async function getClientIP(): Promise<string | null> {
    const headersList = await headers();

    // Try x-forwarded-for first (most common)
    const forwardedFor = headersList.get("x-forwarded-for");
    if (forwardedFor) {
        // x-forwarded-for can be a comma-separated list; take the first IP
        return forwardedFor.split(",")[0].trim();
    }

    // Try x-real-ip
    const realIp = headersList.get("x-real-ip");
    if (realIp) {
        return realIp.trim();
    }

    // Try Cloudflare's header
    const cfIp = headersList.get("cf-connecting-ip");
    if (cfIp) {
        return cfIp.trim();
    }

    // No IP found
    return null;
}

/**
 * Send confirmation email via Resend (optional)
 *
 * @param email - The recipient email address
 * @returns true if email was sent successfully, false otherwise
 */
async function sendConfirmationEmail(email: string): Promise<boolean> {
    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.DIVYO_EMAIL_FROM;

    if (!resendApiKey || !emailFrom) {
        console.log("Resend not configured, skipping confirmation email");
        return false;
    }

    try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        const { error } = await resend.emails.send({
            from: emailFrom,
            to: email,
            subject: "You're on the Divyo waitlist! 🎉",
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; padding: 40px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 32px;">Welcome to Divyo! 🎉</h1>
            </div>
            
            <div style="background: #f9f9f9; border-radius: 10px; padding: 30px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin-top: 0;">You're on the list!</h2>
              <p style="font-size: 16px; margin-bottom: 20px;">
                Thank you for joining the Divyo waitlist. We're excited to have you as part of our early community!
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                We'll keep you updated on our progress and let you know as soon as we're ready to launch.
              </p>
              <p style="font-size: 16px; margin-bottom: 0;">
                Stay tuned! 🚀
              </p>
            </div>
            
            <div style="text-align: center; color: #666; font-size: 14px;">
              <p>Questions? Email <a href="mailto:ahmadgrahamdev@gmail.com" style="color: #667eea; text-decoration: none;">ahmadgrahamdev@gmail.com</a> and we'll get back to you.</p>
              <p style="margin-top: 20px;">
                <a href="https://ahmadgraham.me/divyo" style="color: #667eea; text-decoration: none;">Visit our website</a>
              </p>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            console.error("Failed to send confirmation email:", error);
            return false;
        }

        console.log("Confirmation email sent successfully to:", email);
        return true;
    } catch (error) {
        // Log error but don't fail the signup
        console.error("Error sending confirmation email:", error);
        return false;
    }
}

/**
 * Server action to subscribe a user to the waitlist
 *
 * This function:
 * 1. Validates form data with Zod
 * 2. Verifies reCAPTCHA token server-side
 * 3. Hashes the client IP address for privacy
 * 4. Upserts the email to the database (handles duplicates gracefully)
 * 5. Optionally sends a confirmation email
 *
 * @param formData - Form data containing email, token, source, and userAgent
 * @returns Response object with success status and message
 */
export async function subscribeToWaitlist(
    formData: FormData
): Promise<SubscribeResponse> {
    try {
        // 1. Extract and validate form data
        const rawData = {
            email: formData.get("email"),
            token: formData.get("token"),
            source: formData.get("source"),
            userAgent: formData.get("userAgent"),
        };

        const validationResult = subscribeSchema.safeParse(rawData);

        if (!validationResult.success) {
            const firstError = validationResult.error.issues[0];
            return {
                ok: false,
                message: firstError.message || "Invalid form data",
            };
        }

        const { email, token, source, userAgent } = validationResult.data;

        // 2. Verify reCAPTCHA token
        let recaptchaResult: RecaptchaVerificationResponse;
        try {
            recaptchaResult = await verifyRecaptcha(token);
        } catch (error) {
            console.error("reCAPTCHA verification failed:", error);
            return {
                ok: false,
                message: "Verification failed. Please try again.",
            };
        }

        // Check reCAPTCHA success
        if (!recaptchaResult.success) {
            console.error(
                "reCAPTCHA verification failed:",
                recaptchaResult["error-codes"]
            );
            return {
                ok: false,
                message: "Verification failed. Please try again.",
            };
        }

        // Check reCAPTCHA score (v3 returns a score between 0.0 and 1.0)
        if (
            recaptchaResult.score !== undefined &&
            recaptchaResult.score < RECAPTCHA_MIN_SCORE
        ) {
            console.warn(
                `reCAPTCHA score too low: ${recaptchaResult.score} (threshold: ${RECAPTCHA_MIN_SCORE})`
            );
            return {
                ok: false,
                message:
                    "Verification failed. Please try again or contact support.",
            };
        }

        // Check reCAPTCHA action (optional but recommended)
        if (
            recaptchaResult.action &&
            recaptchaResult.action !== EXPECTED_RECAPTCHA_ACTION
        ) {
            console.warn(
                `Unexpected reCAPTCHA action: ${recaptchaResult.action} (expected: ${EXPECTED_RECAPTCHA_ACTION})`
            );
            return {
                ok: false,
                message: "Verification failed. Please try again.",
            };
        }

        // 3. Get and hash client IP address
        let ipHash: string | null = null;
        try {
            const clientIP = await getClientIP();
            if (clientIP) {
                ipHash = await hashIP(clientIP);
            }
        } catch (error) {
            // Log error but don't fail the signup
            console.error("Failed to hash IP:", error);
        }

        // 4. Check if email already exists
        const { data: existingSignup } = await supabaseAdmin
            .from("waitlist_signups")
            .select("email")
            .eq("email", email)
            .single();

        const isExisting = existingSignup !== null;

        // 5. Insert or update in database
        const signupData: WaitlistSignupInsert = {
            email,
            source: source || null,
            user_agent: userAgent || null,
            ip_hash: ipHash,
        };

        const { error: dbError } = await supabaseAdmin
            .from("waitlist_signups")
            .upsert(signupData, {
                onConflict: "email",
                ignoreDuplicates: false, // Allow update of existing records
            });

        if (dbError) {
            console.error("Database error:", dbError);
            return {
                ok: false,
                message: "Failed to save your email. Please try again later.",
            };
        }

        // 6. Send confirmation email only for new signups
        if (!isExisting) {
            // We don't await this to avoid blocking the response
            sendConfirmationEmail(email).catch((error) => {
                console.error("Error in background email send:", error);
            });
        }

        // 7. Return success with appropriate message
        const message = isExisting
            ? "You're already on the list! 🙌"
            : "You're on the list! 🎉";

        return {
            ok: true,
            message,
        };
    } catch (error) {
        // Catch-all error handler
        console.error("Unexpected error in subscribeToWaitlist:", error);
        return {
            ok: false,
            message: "An unexpected error occurred. Please try again later.",
        };
    }
}
