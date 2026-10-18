"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import useCalmMotion from "../../useCalmMotion";
import clsx from "clsx";
import type { ReactNode } from "react";

/** Common layout for every screen: room for the status bar and the home indicator. */
export function ScreenBody({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={clsx("flex h-full flex-col gap-3 px-4 pb-6 pt-11", className)}>{children}</div>;
}

/** The small grey caption above a value. */
export function Caption({ children, className }: { children: ReactNode; className?: string }) {
    return <p className={clsx("text-[11px] leading-none text-muted-foreground", className)}>{children}</p>;
}

/** A tonal block, the app's version of a card. */
export function Tile({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={clsx("rounded-2xl bg-muted/80 p-3", className)}>{children}</div>;
}

/**
 * Fades and lifts a piece of a screen in, a beat after the screen appears.
 * Does nothing for visitors who prefer reduced motion.
 */
export function In({ delay = 0, className, ...rest }: { delay?: number } & HTMLMotionProps<"div">) {
    const reduce = useCalmMotion();
    return (
        <motion.div
            className={className}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + delay, ease: "easeOut" }}
            {...rest}
        />
    );
}

/** Tone-on-tone dots used for the five skills. */
export const SKILL_DOT: Record<string, string> = {
    articulation: "bg-tono-articulation",
    cadence: "bg-tono-cadence",
    impromptu: "bg-tono-impromptu",
    confidence: "bg-tono-confidence",
    conversation: "bg-tono-conversation",
};
