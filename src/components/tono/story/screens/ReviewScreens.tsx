"use client";

import { motion } from "motion/react";
import useCalmMotion from "../../useCalmMotion";
import { Check, Lock } from "lucide-react";
import { Caption, In, ScreenBody, Tile } from "./parts";

/** One word of the transcript: `filler` marks the ones Tono counts. */
type Word = { text: string; filler?: boolean };

const plain = (text: string): Word[] => text.split(" ").map((word) => ({ text: word }));
const filler = (text: string): Word => ({ text, filler: true });

const TRANSCRIPT: Word[] = [
    ...plain("So,"),
    filler("um,"),
    ...plain("I wanted to talk about,"),
    filler("uh,"),
    ...plain("how I started running last year. It was,"),
    filler("uh,"),
    ...plain("honestly kind of an accident. I was"),
    filler("um,"),
    ...plain("trying to get to the bus stop and I missed it, so I just kept going. By the time I got to work, I realized I hadn’t stopped once."),
];

/** The transcript arriving word by word, with the fillers marked. */
export function WordsScreen() {
    const reduce = useCalmMotion();
    return (
        <ScreenBody>
            <div className="flex items-center justify-between">
                <p className="text-xl font-semibold tracking-tight">Words</p>
                <span className="rounded-full bg-tono-impromptu/15 px-2.5 py-1 text-[11px] font-medium text-tono-impromptu">4 fillers</span>
            </div>

            <p className="text-[17px] leading-[1.65]">
                {TRANSCRIPT.map((word, index) => (
                    <span key={index}>
                        <motion.span
                            initial={reduce ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 + index * 0.045, duration: 0.2 }}
                            className={word.filler ? "inline-block rounded bg-tono-impromptu/25 px-1" : "inline-block"}
                        >
                            {word.text}
                        </motion.span>{" "}
                    </span>
                ))}
            </p>

            <In delay={0.9} className="mt-auto">
                <Tile className="flex items-end justify-between">
                    <div>
                        <Caption>Fillers a minute</Caption>
                        <p className="mt-1.5 text-2xl font-semibold leading-none tabular-nums">3.8</p>
                    </div>
                    <Caption>1:03 take</Caption>
                </Tile>
            </In>
        </ScreenBody>
    );
}

const PACE_PATH = "M0 78 C 18 78, 22 40, 44 44 S 70 70, 92 54 S 118 18, 140 32 S 172 66, 198 48 S 232 26, 252 40";
const PAUSES = [
    { x: 28, w: 9 },
    { x: 62, w: 12 },
    { x: 96, w: 8 },
    { x: 128, w: 10 },
    { x: 166, w: 14 },
    { x: 206, w: 9 },
];

/** Pace across the take, with the pauses marked. */
export function VoiceScreen() {
    return (
        <ScreenBody>
            <p className="text-xl font-semibold tracking-tight">Voice</p>

            <In>
                <Tile className="space-y-2">
                    <Caption>Pace across the take</Caption>
                    <svg viewBox="0 0 252 100" className="h-[130px] w-full" aria-hidden="true" focusable="false">
                        {PAUSES.map((pause) => (
                            <motion.rect
                                key={pause.x}
                                x={pause.x}
                                y="0"
                                width={pause.w}
                                height="100"
                                rx="3"
                                className="fill-tono-cadence/20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                            />
                        ))}
                        <motion.path
                            d={PACE_PATH}
                            fill="none"
                            className="stroke-tono-cadence"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                        />
                    </svg>
                    <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span className="size-2 rounded-sm bg-tono-cadence/30" aria-hidden="true" />
                        Pauses
                    </p>
                </Tile>
            </In>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { value: "138", label: "words a minute" },
                    { value: "6", label: "pauses" },
                    { value: "0", label: "stalls" },
                ].map((stat, index) => (
                    <In key={stat.label} delay={0.3 + index * 0.1}>
                        <Tile className="space-y-1.5 p-2.5">
                            <p className="text-2xl font-semibold leading-none tabular-nums">{stat.value}</p>
                            <Caption className="leading-tight">{stat.label}</Caption>
                        </Tile>
                    </In>
                ))}
            </div>

            <In delay={0.7} className="mt-auto">
                <Tile>
                    <Caption>Pitch</Caption>
                    <p className="mt-1.5 text-sm leading-snug">Your voice rose and fell by about 9 semitones. That reads as lively.</p>
                </Tile>
            </In>
        </ScreenBody>
    );
}

/** A 1 to 5 scale with one answer picked. */
function Scale({ picked, tone }: { picked: number; tone: string }) {
    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
                <span
                    key={n}
                    className={`grid size-9 place-items-center rounded-full text-sm tabular-nums ${
                        n === picked ? `${tone} font-medium text-white` : "bg-background text-muted-foreground ring-1 ring-foreground/15"
                    }`}
                >
                    {n}
                </span>
            ))}
        </div>
    );
}

/** Felt versus observed: the two ratings, and the gap between them. */
export function FeltScreen() {
    return (
        <ScreenBody>
            <p className="text-xl font-semibold tracking-tight">How did it go?</p>

            <In>
                <Tile className="space-y-3">
                    <Caption>Before you watch</Caption>
                    <p className="text-sm leading-snug">How do you think you came across?</p>
                    <Scale picked={3} tone="bg-foreground !text-background" />
                </Tile>
            </In>
            <In delay={0.5}>
                <Tile className="space-y-3">
                    <Caption>Now watch it back</Caption>
                    <p className="text-sm leading-snug">How did it actually come across?</p>
                    <Scale picked={4} tone="bg-tono-success" />
                </Tile>
            </In>

            <In delay={1} className="mt-auto text-sm leading-snug text-muted-foreground">
                <span className="font-medium text-foreground">Felt like a 3, looked like a 4.</span> You come across better than it feels from the inside.
            </In>
        </ScreenBody>
    );
}

const STAYS = ["The recording", "The transcript", "Your face measurements", "Your scores and streak"];

/** Privacy: what lives on the phone, and what is switched off. */
export function PrivacyScreen() {
    return (
        <ScreenBody>
            <In className="flex flex-col items-center gap-3 pt-2 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-muted">
                    <Lock className="size-6" aria-hidden="true" />
                </span>
                <p className="text-xl font-semibold tracking-tight">On this phone</p>
            </In>

            <ul className="space-y-2.5">
                {STAYS.map((item, index) => (
                    <In key={item} delay={0.2 + index * 0.12} className="flex items-center justify-between rounded-2xl bg-muted/80 px-3.5 py-3 text-sm">
                        {item}
                        <Check className="size-4 text-tono-success" aria-hidden="true" />
                    </In>
                ))}
            </ul>

            <In delay={0.8} className="mt-auto flex items-center justify-between rounded-2xl ring-1 ring-foreground/15 px-3.5 py-3 text-sm">
                AI review
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">Off</span>
            </In>
        </ScreenBody>
    );
}
