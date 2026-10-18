"use client";

import { motion } from "motion/react";
import useCalmMotion from "../../useCalmMotion";
import { useEffect, useState } from "react";
import { Caption, In, ScreenBody, Tile } from "./parts";

const pad = (n: number) => String(n).padStart(2, "0");

/** A running m:ss clock, so the recording screen looks alive. */
function RecordingClock({ from }: { from: number }) {
    const reduce = useCalmMotion();
    const [seconds, setSeconds] = useState(from);
    useEffect(() => {
        if (reduce) return;
        const id = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(id);
    }, [reduce]);
    return (
        <span className="tabular-nums">
            {Math.floor(seconds / 60)}:{pad(seconds % 60)}
        </span>
    );
}

/** Recording: the camera, the prompt, and the framing guide. */
export function RecordScreen() {
    return (
        <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-black text-white">
            {/* A person, suggested: head and shoulders */}
            <svg viewBox="0 0 286 600" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
                <ellipse cx="143" cy="270" rx="62" ry="78" className="fill-zinc-700/70" />
                <path d="M30 600 C 30 470, 80 410, 143 410 C 206 410, 256 470, 256 600 Z" className="fill-zinc-700/60" />
                <ellipse cx="143" cy="265" rx="86" ry="108" fill="none" stroke="white" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="5 6" />
            </svg>

            <div className="absolute inset-x-3 top-12 space-y-2">
                <In className="rounded-2xl bg-black/55 px-3.5 py-3 backdrop-blur-md">
                    <p className="text-[10px] text-white/60">Your prompt</p>
                    <p className="mt-1 text-sm font-medium leading-snug">Tell me about a decision you changed your mind on.</p>
                </In>
                <In delay={0.2} className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-tono-success" aria-hidden="true" />
                    In frame
                </In>
            </div>

            <div className="absolute inset-x-0 bottom-9 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                    <motion.span
                        className="size-2 rounded-full bg-tono-record"
                        animate={{ opacity: [1, 0.25, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        aria-hidden="true"
                    />
                    <RecordingClock from={38} />
                </div>
                <span className="grid size-14 place-items-center rounded-full ring-2 ring-white/70">
                    <span className="size-6 rounded-md bg-tono-record" />
                </span>
            </div>
        </div>
    );
}

const BREAKDOWN = [
    { name: "On the lens", value: 81 },
    { name: "Looking down", value: 12 },
    { name: "Away", value: 7 },
];

/** Presence: a face, a gaze, and where the eyes spent the take. */
export function PresenceScreen() {
    return (
        <ScreenBody>
            <p className="text-xl font-semibold tracking-tight">Presence</p>

            <In>
                <Tile className="relative overflow-hidden p-0">
                    <svg viewBox="0 0 252 200" className="h-[200px] w-full" aria-hidden="true" focusable="false">
                        {/* The lens, above the face */}
                        <circle cx="126" cy="18" r="6" className="fill-tono-record" />
                        <circle cx="126" cy="18" r="12" fill="none" className="stroke-tono-record/40" strokeWidth="1.5" />
                        {/* Gaze, from each eye to the lens */}
                        {[104, 148].map((cx, index) => (
                            <motion.path
                                key={cx}
                                d={"M" + cx + " 118 L126 30"}
                                className="stroke-tono-conversation"
                                strokeWidth="1.5"
                                strokeDasharray="3 4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.9, delay: 0.5 + index * 0.1 }}
                            />
                        ))}
                        <ellipse cx="126" cy="128" rx="54" ry="64" fill="none" className="stroke-foreground/35" strokeWidth="1.5" />
                        {[104, 148].map((cx) => (
                            <g key={cx}>
                                <ellipse cx={cx} cy="118" rx="12" ry="7.5" fill="none" className="stroke-foreground/50" strokeWidth="1.5" />
                                <motion.circle
                                    r="3.6"
                                    className="fill-foreground"
                                    initial={{ cx: cx - 5, cy: 121 }}
                                    animate={{ cx: cx + (cx < 126 ? 1.5 : -1.5), cy: 116 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                />
                            </g>
                        ))}
                        <path d="M126 128 L122 146 L130 146" fill="none" className="stroke-foreground/30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Tile>
            </In>

            <In delay={0.1}>
                <p className="text-[40px] font-semibold leading-none tracking-tight tabular-nums">
                    81<span className="text-xl text-muted-foreground">%</span>
                </p>
                <Caption className="mt-1.5">of the take on the lens</Caption>
            </In>

            <ul className="mt-auto space-y-3 pb-1">
                {BREAKDOWN.map((row, index) => (
                    <li key={row.name} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                            <span>{row.name}</span>
                            <span className="tabular-nums text-muted-foreground">{row.value}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                            <motion.div
                                className={index === 0 ? "h-full rounded-full bg-tono-conversation" : "h-full rounded-full bg-foreground/35"}
                                initial={{ width: 0 }}
                                animate={{ width: `${row.value}%` }}
                                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </ScreenBody>
    );
}
