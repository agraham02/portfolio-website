"use client";

import { motion } from "motion/react";
import useCalmMotion from "../../useCalmMotion";
import { Check } from "lucide-react";
import { SKILLS } from "../../content";
import { Caption, In, ScreenBody, SKILL_DOT, Tile } from "./parts";

/** The home tab: today's plan, with its steps ticking off. */
export function TodayScreen() {
    const reduce = useCalmMotion();
    const steps = [
        { name: "Warm up", done: true },
        { name: "Pace drill", done: true },
        { name: "Record a take", done: false },
    ];

    return (
        <ScreenBody>
            <Caption>Good morning, Sam</Caption>
            <p className="-mt-1 text-[28px] font-semibold leading-none tracking-tight">Today</p>

            <In delay={0.05} className="flex items-center gap-2 text-xs">
                <span className="size-2 rounded-full bg-tono-record" aria-hidden="true" />
                12-day streak
            </In>

            <In delay={0.1}>
                <Tile className="space-y-4 p-4">
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <Caption>Today&apos;s focus</Caption>
                            <p className="flex items-center gap-2 text-lg font-medium leading-none">
                                <span className="size-2.5 rounded-full bg-tono-cadence" aria-hidden="true" />
                                Cadence
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground">5 min</span>
                    </div>
                    <ul className="space-y-3">
                        {steps.map((step, index) => (
                            <li key={step.name} className="flex items-center gap-3 text-sm">
                                <span
                                    className={`grid size-5 place-items-center rounded-full ${
                                        step.done ? "bg-primary text-primary-foreground" : "ring-1 ring-foreground/25"
                                    }`}
                                >
                                    {step.done ? (
                                        <motion.span
                                            initial={reduce ? false : { scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.5 + index * 0.25, type: "spring", stiffness: 500, damping: 18 }}
                                            className="grid place-items-center"
                                        >
                                            <Check className="size-3" aria-hidden="true" />
                                        </motion.span>
                                    ) : null}
                                </span>
                                <span className={step.done ? "text-muted-foreground line-through decoration-foreground/30" : ""}>{step.name}</span>
                            </li>
                        ))}
                    </ul>
                </Tile>
            </In>

            <In delay={0.2}>
                <Tile className="space-y-3">
                    <Caption>This week</Caption>
                    <div className="flex justify-between">
                        {WEEK.map((day, index) => (
                            <div key={index} className="flex flex-col items-center gap-1.5 text-[11px] text-muted-foreground">
                                {day}
                                <span className={`size-5 rounded-full ${index < 4 ? "bg-primary" : index === 4 ? "ring-2 ring-tono-record" : "ring-1 ring-foreground/20"}`} />
                            </div>
                        ))}
                    </div>
                </Tile>
            </In>

            <In delay={0.25} className="mt-auto rounded-full bg-primary py-3 text-center text-sm font-medium text-primary-foreground">
                Start
            </In>
        </ScreenBody>
    );
}

const SKILL_LEVELS = [62, 74, 48, 55, 66];
const WEEK = ["M", "T", "W", "T", "F", "S", "S"];

/** The plan: this week's practice days and where each skill stands. */
export function PracticeScreen() {
    return (
        <ScreenBody>
            <Caption>This week</Caption>
            <In className="flex justify-between">
                {WEEK.map((day, index) => (
                    <div key={index} className="flex flex-col items-center gap-1.5 text-[11px] text-muted-foreground">
                        {day}
                        <span
                            className={`size-5 rounded-full ${
                                index < 4 ? "bg-primary" : index === 4 ? "ring-2 ring-tono-record" : "ring-1 ring-foreground/20"
                            }`}
                        />
                    </div>
                ))}
            </In>

            <Caption className="mt-2">Skills</Caption>
            <ul className="space-y-3.5">
                {SKILLS.map((skill, index) => (
                    <li key={skill.id} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2">
                                <span className={`size-2 rounded-full ${SKILL_DOT[skill.id]}`} aria-hidden="true" />
                                {skill.name}
                            </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                            <motion.div
                                className={`h-full rounded-full ${SKILL_DOT[skill.id]}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${SKILL_LEVELS[index]}%` }}
                                transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            <In delay={0.5} className="mt-auto">
                <Tile>
                    <Caption>Up next</Caption>
                    <p className="mt-1.5 text-sm font-medium">Impromptu: say it short</p>
                    <p className="text-xs text-muted-foreground">4 minutes</p>
                </Tile>
            </In>
        </ScreenBody>
    );
}

/** The optional AI coach's notes on a take. */
export function CoachScreen() {
    return (
        <ScreenBody>
            <div className="flex items-center justify-between">
                <p className="text-xl font-semibold tracking-tight">AI coach</p>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] text-muted-foreground">Your key</span>
            </div>

            <In delay={0.05}>
                <Tile className="space-y-1.5">
                    <p className="flex items-center gap-2 text-[11px] text-tono-success">
                        <span className="size-1.5 rounded-full bg-tono-success" aria-hidden="true" />
                        Strength
                    </p>
                    <p className="text-sm leading-snug">You said what you&apos;d cover in your first sentence, so I knew where you were going.</p>
                </Tile>
            </In>
            <In delay={0.2}>
                <Tile className="space-y-1.5">
                    <p className="flex items-center gap-2 text-[11px] text-tono-impromptu">
                        <span className="size-1.5 rounded-full bg-tono-impromptu" aria-hidden="true" />
                        Work on
                    </p>
                    <p className="text-sm leading-snug">Land your main point, then pause. You moved on before it sank in.</p>
                </Tile>
            </In>
            <In delay={0.35}>
                <Tile className="space-y-1.5">
                    <p className="flex items-center gap-2 text-[11px] text-tono-conversation">
                        <span className="size-1.5 rounded-full bg-tono-conversation" aria-hidden="true" />
                        Try next
                    </p>
                    <p className="text-sm leading-snug">Three takes of the same answer, each ending on a two-second pause.</p>
                </Tile>
            </In>

            <In delay={0.5} className="mt-auto text-center text-[11px] text-muted-foreground">
                Sent only after you allowed it
            </In>
        </ScreenBody>
    );
}
