/**
 * WaitlistCountClient (Client Component)
 *
 * Displays the waitlist count with smooth motion.dev animations.
 * Respects prefers-reduced-motion for accessibility.
 *
 * Features:
 * - Fade/slide entrance animation
 * - Optional count-up animation when count >= 100
 * - Accessible with aria-live and screen reader text
 * - Theme-aware using Tailwind + tokens
 *
 * Props:
 * - count: The numeric count value
 * - message: Pre-formatted message string from server
 * - className: Additional CSS classes
 */

"use client";

import { motion, useMotionValue, useSpring, animate } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WaitlistCountClientProps {
    count: number;
    message: string;
    className?: string;
}

/**
 * Client component for animated waitlist count display
 */
export function WaitlistCountClient({
    count,
    message,
    className,
}: WaitlistCountClientProps) {
    const [reduceMotion, setReduceMotion] = useState(false);
    const displayCount = useMotionValue(0);
    const springCount = useSpring(displayCount, {
        duration: 700,
        bounce: 0,
    });
    const [displayValue, setDisplayValue] = useState(count);

    // Detect prefers-reduced-motion
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mq.matches);
        const handler = () => setReduceMotion(mq.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Round count to nearest 50 (50, 100, 150, 200, etc.)
    const roundToNearest50 = (num: number) => Math.round(num / 50) * 50;
    const roundedCount = roundToNearest50(count);

    // Animate count-up when count >= 100 and motion is not reduced
    useEffect(() => {
        if (count >= 100 && !reduceMotion) {
            // Start from 0 and animate to rounded count
            displayCount.set(0);
            const controls = animate(displayCount, roundedCount, {
                duration: 0.7,
                ease: "easeOut",
            });

            // Update display value as it animates, rounding to nearest 50
            const unsubscribe = springCount.on("change", (latest) => {
                setDisplayValue(roundToNearest50(Math.round(latest)));
            });

            return () => {
                controls.stop();
                unsubscribe();
            };
        } else {
            // No animation - show final rounded count immediately
            setDisplayValue(roundedCount);
        }
    }, [count, roundedCount, reduceMotion, displayCount, springCount]);

    // Format the message with animated count if applicable
    const formattedMessage =
        count >= 100
            ? message.replace("{count}", `${displayValue.toLocaleString()}+`)
            : message;

    // Animation variants for container
    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className={cn(
                "text-sm md:text-base text-muted-foreground",
                className
            )}
            initial={reduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={variants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-live="polite"
            aria-atomic="true"
        >
            {/* Visible text */}
            <p className="leading-relaxed">{formattedMessage}</p>

            {/* Screen reader only: full context */}
            <span className="sr-only">
                {count >= 100
                    ? `${count} people are on the waitlist`
                    : "Be among the first to join our waitlist"}
            </span>
        </motion.div>
    );
}
