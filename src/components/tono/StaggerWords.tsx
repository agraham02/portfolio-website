"use client";

import { motion } from "motion/react";
import useCalmMotion from "./useCalmMotion";

type StaggerWordsProps = {
    text: string;
    className?: string;
    /** Seconds between one word and the next. */
    step?: number;
};

/** Writes a line in word by word. Renders plainly if the visitor prefers reduced motion. */
export default function StaggerWords({ text, className, step = 0.045 }: StaggerWordsProps) {
    const reduce = useCalmMotion();
    if (reduce) return <span className={className}>{text}</span>;

    return (
        <span className={className} aria-label={text}>
            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    aria-hidden="true"
                    className="inline-block"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * step, ease: "easeOut" }}
                >
                    {word}
                    {index < text.split(" ").length - 1 ? " " : ""}
                </motion.span>
            ))}
        </span>
    );
}
