"use client";

import { motion } from "motion/react";
import useCalmMotion from "./useCalmMotion";

type IntonationCurveProps = {
    className?: string;
    /** Stroke width in the mark's own coordinates (the app icon uses 84). */
    strokeWidth?: number;
    /** Draw the curve in on mount. */
    animate?: boolean;
};

/**
 * Tono's mark: a rising and falling line (intonation) ending in a red
 * recording dot. The curve takes the surrounding text colour.
 */
export default function IntonationCurve({
    className,
    strokeWidth = 84,
    animate = false,
}: IntonationCurveProps) {
    const reduceMotion = useCalmMotion();
    const draw = animate && !reduceMotion;

    return (
        <svg
            viewBox="172 369 680 262"
            className={className}
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <motion.path
                d="M214 581 C 270 581, 300 411, 390 411 C 500 411, 540 581, 654 581"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                initial={draw ? { pathLength: 0 } : false}
                animate={draw ? { pathLength: 1 } : undefined}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.circle
                cx="802"
                cy="581"
                r="50"
                className="fill-tono-record"
                initial={draw ? { scale: 0, opacity: 0 } : false}
                animate={draw ? { scale: 1, opacity: 1 } : undefined}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                transition={{ duration: 0.4, delay: 1.5 }}
            />
        </svg>
    );
}
