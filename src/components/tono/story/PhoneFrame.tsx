"use client";

import { motion, type MotionValue } from "motion/react";
import type { ReactNode } from "react";
import IntonationCurve from "../IntonationCurve";

/** The phone's width and height in px at full size. Screens are laid out for this. */
export const PHONE_WIDTH = 300;
export const PHONE_HEIGHT = 640;
/** How thick the phone is, front glass to back glass. A real one is about a ninth of its width. */
const DEPTH = 34;

const HALF = DEPTH / 2;
const RADIUS = "rounded-[3.1rem]";
const HIDE_BACK = "[backface-visibility:hidden] [-webkit-backface-visibility:hidden]";
/** Titanium, lit from above. */
const TITANIUM = "bg-gradient-to-b from-zinc-300 to-zinc-500 dark:from-zinc-600 dark:to-zinc-800";

/** The rail around the phone: thin slices of the body's outline stacked front to back, which reads as a solid edge from the side. */
const RAIL_Z = Array.from({ length: DEPTH / 2 - 1 }, (_, index) => -HALF + 3 + index * 2);

/** Side buttons: [side, top, height]. */
const BUTTONS: ["left" | "right", number, number][] = [
    ["left", 96, 24],
    ["left", 142, 44],
    ["left", 196, 44],
    ["right", 160, 72],
];

type Phone3DProps = {
    children: ReactNode;
    /** Opacity of a sheen across the glass, driven by how far the phone has turned. */
    sheen?: MotionValue<number>;
};

/**
 * A phone with real depth, built from CSS 3D layers: glass front, a rail of
 * stacked slices, side buttons and a back. Put it inside an element with
 * `transform-style: preserve-3d` and `perspective` on a parent, then rotate that.
 */
export default function Phone3D({ children, sheen }: Phone3DProps) {
    return (
        <div className="relative [transform-style:preserve-3d]" style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}>
            {/* Rail */}
            {RAIL_Z.map((z) => (
                <div key={z} aria-hidden="true" className={`absolute inset-0 ${RADIUS} ${TITANIUM}`} style={{ transform: `translateZ(${z}px)` }} />
            ))}

            {/* Buttons, flush with the rail */}
            {BUTTONS.map(([side, top, height]) => (
                <div
                    key={`${side}-${top}`}
                    aria-hidden="true"
                    className={`absolute w-[5px] rounded-sm bg-zinc-400 dark:bg-zinc-600 ${side === "left" ? "-left-[4px]" : "-right-[4px]"}`}
                    style={{ top, height, transform: "translateZ(0px)" }}
                />
            ))}

            {/* Front glass */}
            <div
                className={`absolute inset-0 p-[3px] ${RADIUS} ${TITANIUM} ${HIDE_BACK}`}
                style={{ transform: `translateZ(${HALF}px)` }}
            >
                <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-black p-[7px]">
                    <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-card text-card-foreground">
                        {children}
                        {/* Dynamic island */}
                        <div aria-hidden="true" className="absolute left-1/2 top-2.5 z-30 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
                        {/* Home indicator */}
                        <div aria-hidden="true" className="absolute bottom-1.5 left-1/2 z-30 h-1 w-24 -translate-x-1/2 rounded-full bg-foreground/30" />
                        {/* Light sliding over the glass as it turns */}
                        {sheen ? (
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-br from-white/60 via-white/10 to-transparent"
                                style={{ opacity: sheen }}
                            />
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Back */}
            <div
                aria-hidden="true"
                className={`absolute inset-0 overflow-hidden ${RADIUS} bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-500 dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-800 ${HIDE_BACK}`}
                style={{ transform: `translateZ(${-HALF}px) rotateY(180deg)` }}
            >
                {/* Camera plate, top left as you look at the back */}
                <div className="absolute left-5 top-5 size-[104px] rounded-[1.7rem] bg-zinc-900/15 ring-1 ring-white/40 dark:bg-black/30 dark:ring-white/10">
                    {[
                        { left: 12, top: 12 },
                        { left: 12, top: 56 },
                        { left: 54, top: 34 },
                    ].map((lens) => (
                        <span
                            key={`${lens.left}-${lens.top}`}
                            className="absolute size-[38px] rounded-full bg-zinc-950 ring-[3px] ring-zinc-400/70 dark:ring-zinc-600"
                            style={{ left: lens.left, top: lens.top }}
                        >
                            <span className="absolute inset-[11px] rounded-full bg-gradient-to-br from-indigo-950 to-black" />
                        </span>
                    ))}
                    <span className="absolute right-3.5 top-3.5 size-3 rounded-full bg-amber-100/80" />
                </div>
                <div className="absolute inset-x-0 top-[44%] flex justify-center">
                    <IntonationCurve className="h-9 w-auto text-zinc-900/35 dark:text-white/30" strokeWidth={84} />
                </div>
                <div className={`absolute inset-0 ${RADIUS} ring-1 ring-inset ring-white/50 dark:ring-white/10`} />
            </div>
        </div>
    );
}
