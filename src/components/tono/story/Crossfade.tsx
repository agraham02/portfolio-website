"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import { useEffect, useState, type ReactNode } from "react";
import useCalmMotion from "../useCalmMotion";

type Layer = { id: number; value: number };

type CrossfadeProps = {
    /** Which thing to show. When it changes, the old one fades out as the new one fades in. */
    value: number;
    render: (value: number) => ReactNode;
    /** Seconds the fade takes. */
    duration?: number;
    /** How far the outgoing layer drifts up while it fades, in px. */
    lift?: number;
    className?: string;
};

/**
 * Fades one thing into the next without unmounting the old one first.
 *
 * Both layers stay mounted for the length of the fade: the old one (the same
 * instance, so nothing inside it restarts) fades to nothing while the new one
 * fades in, and a timer removes the old one afterwards. It does not use
 * AnimatePresence, whose exit animations stalled inside the phone's 3D layers
 * and left stale content on screen.
 */
export default function Crossfade({ value, render, duration = 0.3, lift = 0, className }: CrossfadeProps) {
    const calm = useCalmMotion();
    const fade = calm ? 0 : duration;
    const [layers, setLayers] = useState<Layer[]>([{ id: 0, value }]);

    // A new value adds a layer on top. (Setting state while rendering is React's way to derive it from props.)
    const top = layers[layers.length - 1];
    if (top.value !== value) setLayers([top, { id: top.id + 1, value }]);

    // Once the fade is over, drop the layer that left.
    useEffect(() => {
        if (layers.length < 2) return;
        const timer = setTimeout(() => setLayers((current) => current.slice(-1)), fade * 1000 + 80);
        return () => clearTimeout(timer);
    }, [layers, fade]);

    return (
        <div className={clsx("relative", className)}>
            {layers.map((layer, index) => {
                const current = index === layers.length - 1;
                return (
                    <motion.div
                        key={layer.id}
                        aria-hidden={current ? undefined : true}
                        className={clsx("absolute inset-0", !current && "pointer-events-none")}
                        initial={layer.id === 0 ? false : { opacity: 0 }}
                        animate={{ opacity: current ? 1 : 0, y: current ? 0 : -lift }}
                        transition={{ duration: fade, ease: "easeOut" }}
                    >
                        {render(layer.value)}
                    </motion.div>
                );
            })}
        </div>
    );
}
