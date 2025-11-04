"use client";
import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    AnimatePresence,
    useReducedMotion,
} from "motion/react";
import Phone from "./Phone";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import { Button } from "@/components/ui/button";

// Content for each sticky screen
const screenContent = [
    {
        title: "",
        subtitle: "",
    },
    {
        title: "Seamless Experience",
        subtitle:
            "Navigate through your profiles with an intuitive interface designed for speed and simplicity.",
    },
    {
        title: "Rich Content",
        subtitle:
            "Share articles, media, and updates with your network in a beautifully organized format.",
    },
    {
        title: "Stay Organized",
        subtitle:
            "Keep track of your schedule, connections, and important information all in one place.",
    },
];

export default function ScrollStoryContainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeScreen, setActiveScreen] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    // Track scroll progress through the entire container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scroll to where screen 1 starts (sticky phase begins)
    const handleSeeHowItWorks = () => {
        if (containerRef.current) {
            const containerTop =
                containerRef.current.getBoundingClientRect().top +
                window.scrollY +
                60;
            // Screen 1 starts around 30% of the container scroll
            const targetScroll = containerTop + window.innerHeight * 1.2;
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
        }
    };

    // Scroll to waitlist section
    const handleJoinWaitlist = () => {
        const waitlistSection = document.getElementById("waitlist");
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Check if mobile for responsive transforms
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Phone Y position transform (hero → center → sticky)
    // Smooth monotonic descent: starts at initial position, stays centered during sticky
    const phoneY = useTransform(
        scrollYProgress,
        [0, 0.3, 0.85, 1],
        prefersReducedMotion
            ? ["0vh", "0vh", "0vh", "0vh"] // No movement if reduced motion
            : isMobile
            ? ["-22vh", "8vh", "8vh", "8vh"] // Start slightly below on mobile
            : ["0vh", "12vh", "12vh", "12vh"] // Desktop: stay at sticky center throughout
    );

    // Phone X position transform (hero offset → center)
    const phoneX = useTransform(
        scrollYProgress,
        [0, 0.3, 0.85, 1],
        prefersReducedMotion
            ? ["0%", "0%", "0%", "0%"]
            : isMobile
            ? ["0%", "0%", "0%", "0%"]
            : ["100%", "0%", "0%", "0%"] // Start right, smooth move to center
    );

    // Phone scale transform (more noticeable emphasis during sticky)
    const phoneScale = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.85, 1],
        prefersReducedMotion
            ? [1, 1, 1, 1, 1] // No scale if reduced motion
            : isMobile
            ? [0.7, 0.8, 0.8, 0.8, 0.7]
            : [0.95, 0.9, 0.9, 0.9, 0.85]
    );

    // Hero content opacity (fade out more gradually)
    const heroOpacity = useTransform(
        scrollYProgress,
        [0, 0.1, 0.25, 0.35],
        [1, 1, 0.3, 0]
    );

    // Hero content Y position (subtle upward movement)
    const heroY = useTransform(
        scrollYProgress,
        [0, 0.1, 0.25, 0.35],
        ["0vh", "0vh", "-5vh", "-10vh"]
    );

    // Screen index tracking (0 → 1 → 2 → 3 through sticky phase)
    // More time per screen for better content absorption
    const screenIndexRaw = useTransform(
        scrollYProgress,
        [0.3, 0.42, 0.54, 0.66, 0.78, 0.85],
        [0, 1, 1, 2, 3, 3]
    );

    // Convert continuous motion value to discrete screen index
    useMotionValueEvent(screenIndexRaw, "change", (latest) => {
        const clamped = Math.max(0, Math.min(3, latest));
        const rounded = Math.round(clamped);
        if (rounded !== activeScreen) {
            setActiveScreen(rounded);
        }
    });

    // Backdrop opacity for sticky phase (adds depth)
    const backdropOpacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.35, 0.85, 0.95],
        [0, 0, 0.03, 0.03, 0]
    );

    // Content titles opacity for screens 2-4
    const contentTitlesOpacity = useTransform(
        scrollYProgress,
        [0, 0.38, 0.42, 0.85, 0.88],
        [0, 0, 1, 1, 0]
    );

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: "400vh", minHeight: "400vh" }}
        >
            {/* Backdrop for depth during sticky phase */}
            <motion.div
                style={{ opacity: backdropOpacity }}
                className="fixed inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none z-10"
            />

            {/* Hero Content Layer - Fades out as scroll progresses */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY }}
                className="sticky top-0 left-0 right-0 h-screen flex items-end lg:items-center  pointer-events-none"
            >
                <div className="max-w-6xl mx-auto px-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Text Content */}
                        <div className="pointer-events-auto mb-44 lg:mb-0 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                                A smarter way to share and connect
                            </h1>
                            <p className="mt-4 text-md sm:text-lg text-muted-foreground">
                                Divyo brings your social, contact, and business
                                profiles together in a single, beautiful card.
                            </p>
                            <div className="mt-6 flex gap-3 justify-center lg:justify-start">
                                <Button
                                    variant="secondary"
                                    onClick={handleSeeHowItWorks}
                                >
                                    See how it works
                                </Button>
                                <Button onClick={handleJoinWaitlist}>
                                    Join Waitlist
                                </Button>
                            </div>
                        </div>

                        {/* Empty space for phone on desktop */}
                        <div className="hidden lg:block" />
                    </div>
                </div>
            </motion.div>

            {/* Content Titles - Appear above phone during sticky phase for screens 2-4 */}
            <motion.div
                style={{ opacity: contentTitlesOpacity }}
                className="fixed top-[12%] left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full max-w-2xl px-6"
            >
                <AnimatePresence mode="wait">
                    {activeScreen > 0 && (
                        <motion.div
                            key={`content-${activeScreen}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 0.61, 0.36, 1],
                            }}
                            className="text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                {screenContent[activeScreen].title}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {screenContent[activeScreen].subtitle}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Sticky track for the phone: sticks until ~85%, then scrolls naturally without jumping */}
            {/* Absolute positioning at the start to overlap with hero, then sticky behavior kicks in */}
            <div
                className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{ height: "400vh" }}
            >
                <div className="sticky top-1/2 -translate-y-1/2 z-20 flex justify-center pointer-events-none">
                    <motion.div
                        style={{ x: phoneX, y: phoneY, scale: phoneScale }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                    >
                        <Phone>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`screen-${activeScreen}`}
                                    initial={
                                        prefersReducedMotion
                                            ? { opacity: 0 }
                                            : { opacity: 0, x: 30, scale: 0.95 }
                                    }
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={
                                        prefersReducedMotion
                                            ? { opacity: 0 }
                                            : {
                                                  opacity: 0,
                                                  x: -30,
                                                  scale: 0.95,
                                              }
                                    }
                                    transition={{
                                        duration: prefersReducedMotion
                                            ? 0.2
                                            : 0.5,
                                        ease: [0.22, 0.61, 0.36, 1],
                                    }}
                                    className="absolute inset-0"
                                >
                                    {activeScreen === 0 && <Screen1 />}
                                    {activeScreen === 1 && <Screen2 />}
                                    {activeScreen === 2 && <Screen3 />}
                                    {activeScreen === 3 && <Screen4 />}
                                </motion.div>
                            </AnimatePresence>
                        </Phone>
                    </motion.div>
                </div>
            </div>

            {/* Tail after sticky ends so the phone scrolls naturally at the bottom segment */}
            <div style={{ height: "100vh" }} />

            {/* Scroll Progress Debug Indicator (Development Only) */}
            {process.env.NODE_ENV === "development" && (
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
                />
            )}
        </section>
    );
}
