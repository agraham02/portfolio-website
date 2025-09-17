"use client";
import {
    motion,
    useSpring,
    useTransform,
    type MotionValue,
} from "motion/react";

type ScrollProgressProps = {
    progress: MotionValue<number>;
};

export default function ScrollProgress({ progress }: ScrollProgressProps) {
    const width = useTransform(progress, [0, 1], ["0%", "100%"]);
    const smooth = useSpring(width, { stiffness: 200, damping: 30, mass: 0.2 });
    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1.5 bg-transparent">
            <motion.div
                style={{ width: smooth }}
                className="h-full bg-blue-500/70"
            />
        </div>
    );
}
