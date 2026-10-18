"use client";

import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import useCalmMotion from "../useCalmMotion";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import IntonationCurve from "../IntonationCurve";
import StaggerWords from "../StaggerWords";
import { CHAPTER_KEYS, STORY, TONO_LAUNCH_MAILTO, type Screenshots } from "../content";
import Crossfade from "./Crossfade";
import Phone3D, { PHONE_HEIGHT, PHONE_WIDTH } from "./PhoneFrame";
import { SCREENS } from "./screens";

const COUNT = STORY.length;
/** How much page scroll one unit of the story gets, in viewport heights. */
const SCREENS_PER_UNIT = 0.85;
/**
 * The story is measured in units of scroll. The hero gets two (one holding, one
 * for the phone's spin across), and every later chapter gets one.
 */
const HERO_UNITS = 2;
const UNITS = HERO_UNITS + (COUNT - 1);
/** How far the hero phone is turned, in degrees: enough to show its thickness. */
const REST_ANGLE = 15;

/** Where, as a scroll fraction (0 to 1), a point this many units into the story falls. */
const at = (unit: number) => unit / UNITS;

/** The unit at which chapter 1 begins; chapter 2 follows one unit later, and so on. */
const FIRST_CHAPTER_UNIT = HERO_UNITS;

/** The point in the spin where the phone shows its back, so its screen can change unseen. */
const SCREEN_SWAP_UNIT = 1.5;
/**
 * A dead zone, in units, either side of every switch point. Inside it nothing
 * changes, so a little scroll jitter at a boundary can't flip the text or the
 * screen back and forth.
 */
const SETTLE_MARGIN = 0.06;

type Shown = { chapter: number; screen: number };

/**
 * What to show a given number of units into the story: the chapter (the words
 * and the dots) and the screen on the phone. The screen switches to the first
 * chapter's halfway through the spin, while the phone faces away, so nobody sees
 * it change; with reduced motion there is no spin, so it switches with the words.
 */
const showAt = (unit: number, calm: boolean): Shown => {
    const chapter = unit < FIRST_CHAPTER_UNIT ? 0 : Math.min(COUNT - 1, 1 + Math.floor(unit - FIRST_CHAPTER_UNIT));
    const swapAt = calm ? FIRST_CHAPTER_UNIT : SCREEN_SWAP_UNIT;
    return { chapter, screen: unit < swapAt ? 0 : Math.max(1, chapter) };
};

/** `showAt`, but keeping what was shown while still inside a switch point's dead zone. */
const settle = (progress: number, previous: Shown, calm: boolean): Shown => {
    const unit = progress * UNITS;
    const before = showAt(unit - SETTLE_MARGIN, calm);
    const after = showAt(unit + SETTLE_MARGIN, calm);
    const next = {
        chapter: before.chapter === after.chapter ? before.chapter : previous.chapter,
        screen: before.screen === after.screen ? before.screen : previous.screen,
    };
    return next.chapter === previous.chapter && next.screen === previous.screen ? previous : next;
};

/** The scroll fraction at the middle of a chapter. */
const centerOf = (chapter: number) => (chapter === 0 ? at(0.4) : at(FIRST_CHAPTER_UNIT + (chapter - 1) + 0.5));

/**
 * The phone moves once. It sits on the right through the first unit of the hero,
 * turned slightly. During the second unit it spins a full turn while crossing to
 * the left, and lands facing straight at you, at the same size, exactly as the
 * first chapter begins. It stays there: after that only its screen changes.
 */
function buildKeyframes() {
    return {
        at: [at(0), at(1), at(1.5), at(2), at(UNITS)],
        side: [1, 1, 0, -1, -1],
        spin: [-REST_ANGLE, -REST_ANGLE, 180, 360, 360],
        // The hero's words fade out before the phone crosses over them.
        heroText: { at: [at(0), at(1), at(1.3)], opacity: [1, 1, 0] },
    };
}

const KEYS = buildKeyframes();

const BUTTON =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium sm:px-6 sm:py-3 sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type StoryProps = {
    /** Real screenshots found in public/tono/screens, by chapter. Chapters without one show a drawn screen. */
    screenshots?: Screenshots;
};

export default function Story({ screenshots = {} }: StoryProps) {
    const container = useRef<HTMLDivElement>(null);
    const reduceMotion = useCalmMotion();
    const [shown, setShown] = useState<Shown>({ chapter: 0, screen: 0 });
    const { chapter } = shown;

    const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        setShown((previous) => settle(progress, previous, reduceMotion));
    });

    // `side` runs 1 (right) to -1 (left); CSS turns it into a distance (--tono-shift in globals.css).
    const side = useTransform(scrollYProgress, KEYS.at, KEYS.side);
    const heroOpacity = useTransform(scrollYProgress, KEYS.heroText.at, KEYS.heroText.opacity);
    const heroPointer = useTransform(heroOpacity, (value) => (value < 0.05 ? "none" : "auto"));
    const x = useMotionTemplate`calc(${side} * var(--tono-shift))`;
    const rotateY = useTransform(scrollYProgress, KEYS.at, KEYS.spin);
    // Light catches the glass as the phone turns edge-on.
    const sheen = useTransform(rotateY, (degrees) => Math.min(0.55, Math.abs(Math.sin((degrees * Math.PI) / 180)) * 0.7));

    const scrollToChapter = useCallback(
        (target: number) => {
            const el = container.current;
            if (!el) return;
            const top = el.getBoundingClientRect().top + window.scrollY;
            const distance = el.offsetHeight - window.innerHeight;
            window.scrollTo({ top: top + centerOf(target) * distance, behavior: reduceMotion ? "auto" : "smooth" });
        },
        [reduceMotion]
    );

    return (
        <section aria-label="How Tono works" className="relative">
            {/* The same story as plain text, for screen readers and search engines */}
            <ol className="sr-only">
                {STORY.slice(1).map((item) => (
                    <li key={item.label}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ol>

            <div ref={container} style={{ height: `${UNITS * SCREENS_PER_UNIT * 100 + 100}svh` }} className="relative">
                <div className="sticky top-0 h-svh overflow-hidden">
                    {/* The phone */}
                    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[var(--tono-phone-top)] z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="[transform:scale(var(--tono-phone-scale))]">
                            <motion.div style={reduceMotion ? { x: "var(--tono-shift)" } : { x }}>
                                <div className="relative [perspective:1800px]" style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}>
                                    {/* Where it would fall on the table: stays flat while the phone turns */}
                                    <div className="absolute -bottom-10 left-1/2 h-12 w-[78%] -translate-x-1/2 rounded-[100%] bg-black/30 blur-2xl" />
                                    <motion.div
                                        className="absolute inset-0 [transform-style:preserve-3d]"
                                        style={reduceMotion ? { rotateY: -REST_ANGLE } : { rotateY }}
                                    >
                                        <Phone3D sheen={reduceMotion ? undefined : sheen}>
                                            <Crossfade
                                                value={shown.screen}
                                                className="h-full"
                                                render={(index) => <ScreenView index={index} screenshots={screenshots} />}
                                            />
                                        </Phone3D>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* The words beside it */}
                    <Crossfade
                        value={chapter}
                        lift={8}
                        className="relative z-20 h-full"
                        render={(index) => (
                            // Each layer lays itself out, so the words keep their own side while they fade.
                            <div className="grid h-full grid-rows-[1fr_auto] px-6 pb-24 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:px-[6vw] lg:pb-0">
                                {/* The hero's words are on the left of the phone; every chapter's are on the right. */}
                                <div className={clsx("row-start-2 lg:row-start-1 lg:max-w-[34rem]", index === 0 || reduceMotion ? "lg:col-start-1" : "lg:col-start-2 lg:pl-[4vw]")}>
                                    {index === 0 ? (
                                        <motion.div style={reduceMotion ? undefined : { opacity: heroOpacity, pointerEvents: heroPointer }}>
                                            <Hero onSeeHow={() => scrollToChapter(1)} />
                                        </motion.div>
                                    ) : (
                                        <ChapterText chapter={index} title={STORY[index].title} body={STORY[index].body} note={STORY[index].note} />
                                    )}
                                </div>
                            </div>
                        )}
                    />

                    <ProgressDots chapter={chapter} onSelect={scrollToChapter} />
                </div>
            </div>
        </section>
    );
}

/** The phone's screen for a chapter: the real screenshot if there is one, otherwise the drawn screen. */
function ScreenView({ index, screenshots }: { index: number; screenshots: Screenshots }) {
    const shot = screenshots[CHAPTER_KEYS[index]];
    const Screen = SCREENS[index];
    return shot ? <ScreenImage light={shot.light} dark={shot.dark} priority={index === 0} /> : <Screen />;
}

type ScreenImageProps = { light: string; dark?: string; priority?: boolean };

/** A real screenshot filling the phone's screen. A dark version, if given, shows in dark mode. */
function ScreenImage({ light, dark, priority }: ScreenImageProps) {
    return (
        <>
            <Image src={light} alt="" fill sizes="300px" priority={priority} className={clsx("object-cover object-top", dark && "dark:hidden")} />
            {dark ? <Image src={dark} alt="" fill sizes="300px" priority={priority} className="hidden object-cover object-top dark:block" /> : null}
        </>
    );
}

function Hero({ onSeeHow }: { onSeeHow: () => void }) {
    return (
        <div className="space-y-5 text-center lg:space-y-8 lg:text-left">
            <p className="flex items-center justify-center gap-2.5 font-mono text-xs text-muted-foreground lg:justify-start">
                <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-tono-record opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex size-2 rounded-full bg-tono-record" />
                </span>
                <span className="lg:hidden">Tono ·</span> coming soon to iPhone
            </p>

            <div className="hidden items-center gap-3 lg:flex">
                <IntonationCurve animate className="h-7 w-auto text-foreground" strokeWidth={84} />
                <span className="text-2xl font-semibold tracking-tight">Tono</span>
            </div>

            <h1 className="text-[2rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.5rem]">
                Get better at speaking, one rep at a time.
            </h1>

            <p className="hidden max-w-md text-lg leading-relaxed text-muted-foreground lg:block">
                Tono listens while you practice, watches how you come across, and shows you what to work on next. All of it measured on your
                phone.
            </p>

            <div className="flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
                <button type="button" onClick={onSeeHow} className={`${BUTTON} bg-primary text-primary-foreground hover:bg-primary/90`}>
                    See how it works
                </button>
                <a href={TONO_LAUNCH_MAILTO} className={`${BUTTON} text-foreground underline underline-offset-4 hover:text-muted-foreground`}>
                    Get a heads-up at launch
                </a>
            </div>
        </div>
    );
}

type ChapterTextProps = { chapter: number; title: string; body: string; note: string };

function ChapterText({ chapter, title, body, note }: ChapterTextProps) {
    return (
        <div aria-hidden="true" className="space-y-4 lg:space-y-6">
            <p className="font-mono text-xs text-muted-foreground tabular-nums">
                {String(chapter).padStart(2, "0")} / {String(COUNT - 1).padStart(2, "0")} · {STORY[chapter].label.toLowerCase()}
            </p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-4xl lg:text-6xl">
                <StaggerWords text={title} />
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">{body}</p>
            <p className="flex items-center gap-2.5 border-t border-border pt-4 text-sm lg:max-w-md">
                <span className="size-1.5 shrink-0 rounded-full bg-tono-record" aria-hidden="true" />
                {note}
            </p>
        </div>
    );
}

type ProgressDotsProps = { chapter: number; onSelect: (chapter: number) => void };

/** One dot per chapter down the right edge. The current one is the red record dot. */
function ProgressDots({ chapter, onSelect }: ProgressDotsProps) {
    return (
        <nav aria-label="Chapters" className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 lg:flex">
            {STORY.map((item, index) => (
                <button
                    key={item.label}
                    type="button"
                    aria-label={`Go to ${item.label}`}
                    aria-current={index === chapter}
                    onClick={() => onSelect(index)}
                    className="group grid size-6 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    <span
                        className={clsx(
                            "block rounded-full transition-all duration-300",
                            index === chapter ? "size-2.5 bg-tono-record" : "size-1.5 bg-foreground/25 group-hover:bg-foreground/50"
                        )}
                    />
                </button>
            ))}
        </nav>
    );
}
