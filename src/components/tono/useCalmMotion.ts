"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Whether to tone the animation down because the visitor asked for reduced motion.
 *
 * It is false on the server and on the first client render, and only then
 * follows the visitor's setting. `useReducedMotion` alone answers differently on
 * the server and in the browser, which makes React's hydration fail.
 */
export default function useCalmMotion(): boolean {
    const prefersReduced = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted && !!prefersReduced;
}
