"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useInView,
    useScroll,
    useTransform,
} from "motion/react";
import Phone from "./Phone";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import ScrollProgress from "./ScrollProgress";

type StickyStoryProps = {
    showPhone?: boolean;
    onInViewChange?: (inView: boolean) => void;
};

export default function StickyStory({
    showPhone = true,
    onInViewChange,
}: StickyStoryProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const stickyRootRef = useRef<HTMLDivElement>(null);

    // Observe when sticky section is in view to toggle hero/sticky phone
    // Trigger earlier and keep until mostly past to ensure one instance at a time
    const stickyInView = useInView(stickyRootRef, {
        margin: "-20% 0px -65% 0px",
    });
    useEffect(() => {
        onInViewChange?.(stickyInView);
    }, [stickyInView, onInViewChange]);

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"],
    });

    // Map scroll to index 0..2 and a fractional index for smooth transitions
    const indexRaw = useTransform(
        scrollYProgress,
        [0, 1 / 3, 2 / 3, 1],
        [0, 1, 2, 3]
    );
    const activeIndexMV = useTransform(indexRaw, (v) =>
        Math.min(2, Math.floor(v))
    );
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const unsub = activeIndexMV.on("change", (v) => setActiveIndex(v));
        return () => unsub();
    }, [activeIndexMV]);

    // Subtle transforms while sticky
    // TODO: fix phone animations on scroll

    // Screen resolver
    const Screen = useMemo(() => {
        return function ScreenByIndex({ index }: { index: number }) {
            switch (index) {
                case 0:
                    return <Screen1 />;
                case 1:
                    return <Screen2 />;
                case 2:
                default:
                    return <Screen3 />;
            }
        };
    }, []);

    // Debug bar: toggle by setting to true if needed
    const showDebug = false;

    return (
        <section id="story" ref={trackRef} className="relative min-h-[400vh]">
            <div ref={stickyRootRef} className="sticky top-0 h-dvh">
                {/* layoutRoot is required for animations within sticky/fixed containers */}
                <motion.div
                    layoutRoot
                    layout
                    className="grid h-full place-items-center"
                >
                    {/* Only render phone here while sticky should own it */}
                    {showPhone && (
                        <motion.div layout >
                            <Phone
                                layoutId="phone-frame"
                            >
                                <div className="relative h-full w-full">
                                    <AnimatePresence mode="wait">
                                        {/* key is the active index to crossfade/slide */}
                                        <motion.div
                                            key={`screen-${activeIndex}`}
                                            className="absolute inset-0"
                                            initial={{ opacity: 0, x: 24 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -24 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 220,
                                                damping: 26,
                                                mass: 0.9,
                                            }}
                                        >
                                            {/* Bind the resolved screen */}
                                            <Screen index={activeIndex} />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </Phone>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            {showDebug && <ScrollProgress progress={scrollYProgress} />}
            {/* Spacer after to ensure clean unstick transition */}
            <div className="h-[30vh]" />
        </section>
    );
}
