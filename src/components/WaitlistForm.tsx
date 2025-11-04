/**
 * Waitlist Form Component
 *
 * A client-side form component for collecting waitlist signups with:
 * - Google reCAPTCHA v3 integration
 * - Real-time validation
 * - Accessible form controls with ARIA labels
 * - Optimistic UI states (idle, pending, success, error)
 * - Auto-complete support for email fields
 *
 * Props:
 * - source: Optional string to track where the signup came from (default: "landing-hero")
 * - className: Optional additional CSS classes
 *
 * Environment Variables Required (Client-Side):
 * - NEXT_PUBLIC_RECAPTCHA_SITE_KEY: Google reCAPTCHA site key
 *
 * Usage:
 * ```tsx
 * <WaitlistForm source="blog-post" />
 * ```
 */

"use client";

import { useEffect, useState } from "react";
import {
    subscribeToWaitlist,
    type SubscribeResponse,
} from "@/app/actions/subscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/**
 * Extend Window interface to include grecaptcha
 */
declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (
                siteKey: string,
                options: { action: string }
            ) => Promise<string>;
        };
    }
}

interface WaitlistFormProps {
    /**
     * Source identifier to track where the signup came from
     * @default "landing-hero"
     */
    source?: string;
    /**
     * Additional CSS classes to apply to the form container
     */
    className?: string;
}

/**
 * Client-side waitlist signup form with reCAPTCHA v3 protection
 */
export default function WaitlistForm({
    source = "landing-hero",
    className,
}: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
    const [state, setState] = useState<SubscribeResponse | null>(null);
    const [isPending, setIsPending] = useState(false);

    /**
     * Initialize reCAPTCHA when component mounts
     * Wait for the grecaptcha object to be available
     */
    useEffect(() => {
        let isMounted = true;
        let interval: NodeJS.Timeout | undefined;
        let timeout: NodeJS.Timeout | undefined;

        const initRecaptcha = () => {
            // Check if reCAPTCHA is already loaded
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    if (isMounted) {
                        setIsRecaptchaReady(true);
                    }
                });
            } else {
                // Poll for grecaptcha to become available
                interval = setInterval(() => {
                    if (window.grecaptcha) {
                        window.grecaptcha.ready(() => {
                            if (isMounted) {
                                setIsRecaptchaReady(true);
                            }
                        });
                        if (interval) clearInterval(interval);
                    }
                }, 100);

                // Set timeout but don't log error (reCAPTCHA may load after this)
                timeout = setTimeout(() => {
                    if (interval) clearInterval(interval);
                }, 10000);
            }
        };

        initRecaptcha();

        return () => {
            isMounted = false;
            if (interval) clearInterval(interval);
            if (timeout) clearTimeout(timeout);
        };
    }, []);

    /**
     * Handle form submission
     * 1. Prevent default form submission
     * 2. Execute reCAPTCHA to get token
     * 3. Add token and metadata to FormData
     * 4. Submit via server action
     */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if reCAPTCHA is ready
        if (!isRecaptchaReady || !window.grecaptcha) {
            console.error("reCAPTCHA is not ready yet");
            setState({
                ok: false,
                message:
                    "Security check is loading. Please wait a moment and try again.",
            });
            return;
        }

        // Get reCAPTCHA site key from environment
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (!siteKey) {
            console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured");
            setState({
                ok: false,
                message: "Configuration error. Please contact support.",
            });
            return;
        }

        try {
            setIsPending(true);
            setState(null);

            // Execute reCAPTCHA to get token
            const token = await window.grecaptcha.execute(siteKey, {
                action: "waitlist_signup",
            });

            // Create FormData with all required fields
            const formData = new FormData();
            formData.append("email", email);
            formData.append("token", token);
            formData.append("source", source);
            formData.append("userAgent", navigator.userAgent);

            // Submit via server action
            const result = await subscribeToWaitlist(formData);
            setState(result);
        } catch (error) {
            console.error("reCAPTCHA execution failed:", error);
            setState({
                ok: false,
                message: "An error occurred. Please try again.",
            });
        } finally {
            setIsPending(false);
        }
    };

    /**
     * Reset form after successful submission
     */
    useEffect(() => {
        if (state?.ok) {
            setEmail("");
        }
    }, [state]);

    return (
        <div className={cn("w-full max-w-md", className)}>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                    <Label htmlFor="email" className="sr-only">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isPending}
                        aria-label="Email address for waitlist signup"
                        aria-required="true"
                        className="w-full"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isPending || !isRecaptchaReady || !email}
                    className="w-full"
                    size="lg"
                >
                    {isPending ? "Joining..." : "Notify me"}
                </Button>

                {/* Status Messages */}
                {state && (
                    <div
                        className={cn(
                            "rounded-lg p-3 text-sm text-center animate-in fade-in slide-in-from-top-2",
                            state.ok
                                ? "bg-green-50 text-green-900 dark:bg-green-900/10 dark:text-green-400"
                                : "bg-red-50 text-red-900 dark:bg-red-900/10 dark:text-red-400"
                        )}
                        role="alert"
                        aria-live="polite"
                    >
                        {state.message}
                    </div>
                )}

                {/* reCAPTCHA Badge Info */}
                <p className="text-xs text-muted-foreground text-center">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        Terms of Service
                    </a>{" "}
                    apply.
                </p>
            </form>
        </div>
    );
}
