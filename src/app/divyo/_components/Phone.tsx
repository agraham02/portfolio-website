"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type PhoneProps = {
    className?: string;
    children?: ReactNode;
};

export default function Phone({ className, children }: PhoneProps) {
    return (
        <div
            className={cn(
                "relative aspect-[9/19.5] w-[260px] rounded-3xl border border-black/5 bg-white/90 shadow-2xl backdrop-blur",
                "lg:w-[300px]",
                className
            )}
        >
            {/* Bezel/padding */}
            <div className="absolute inset-3 overflow-hidden rounded-2xl bg-neutral-950/2">
                {/* Screen content */}
                <div className="h-full w-full">{children}</div>
            </div>
            {/* Camera notch indicator (decorative) */}
            <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/10" />
        </div>
    );
}
