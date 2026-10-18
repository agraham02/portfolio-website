"use client";

import { motion } from "motion/react";
import useCalmMotion from "./useCalmMotion";
import type { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

/** Fades its children up as they scroll into view; does nothing if the visitor prefers reduced motion. */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
    const reduceMotion = useCalmMotion();
    if (reduceMotion) return <div className={className}>{children}</div>;

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
