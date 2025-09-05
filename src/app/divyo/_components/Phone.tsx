"use client";
import { motion, type MotionStyle, type Transition } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type PhoneProps = {
    layoutId?: string;
    className?: string;
    children?: ReactNode;
    style?: MotionStyle;
    transition?: Transition;
};

export default function Phone({
    layoutId = "phone-frame",
    className,
    style,
    transition,
    children,
}: PhoneProps) {
    return (
        <motion.div
            layout
            layoutId={layoutId}
            transition={
                transition ?? {
                    layout: { type: "spring", stiffness: 260, damping: 30 },
                }
            }
            style={{ transformOrigin: "center", ...style }}
            className={cn(
                "relative aspect-[9/19.5] w-[180px] rounded-3xl border border-black/5 bg-white/90 shadow-2xl backdrop-blur",
                "sm:w-[150px] md:w-[260px] lg:w-[300px]",
                className
            )}
        >
            {/* Bezel/padding */}
            <div className="absolute inset-3 overflow-hidden rounded-2xl bg-neutral-950/2">
                {/* Screen content */}
                <div className="h-full w-full will-change-transform">
                    {children}
                </div>
            </div>
            {/* Camera notch indicator (decorative) */}
            <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/10" />
        </motion.div>
    );
}
