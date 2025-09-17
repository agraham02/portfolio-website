"use client";
import { motion } from "motion/react";
import Phone from "./Phone";

type HeroProps = {
    showPhone?: boolean;
};

export default function Hero({ showPhone = true }: HeroProps) {
    return (
        <motion.section
            layout
            className="mx-auto max-w-6xl px-6 py-20 md:py-24"
        >
            <motion.div
                layout
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
            >
                <div>
                    <motion.h1
                        layout
                        className="text-pretty text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                    >
                        A smarter way to share and connect
                    </motion.h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Divyo brings your social, contact, and business profiles
                        together in a single, beautiful card.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a
                            className="rounded-md bg-black px-4 py-2 text-white shadow hover:bg-black/90"
                            href="#story"
                        >
                            See how it works
                        </a>
                        <a
                            className="rounded-md border px-4 py-2 hover:bg-black/5"
                            href="#"
                        >
                            Get started
                        </a>
                    </div>
                </div>

                <motion.div layout className="relative">
                    {showPhone && (
                        <Phone
                            layoutId="phone-frame"
                            className="ml-auto"
                            transition={{
                                layout: {
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 26,
                                    mass: 0.9,
                                },
                            }}
                        />
                    )}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
