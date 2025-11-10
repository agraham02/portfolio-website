"use client";
import { motion, AnimatePresence } from "motion/react";
import EnhancedImage from "@/components/ui/enhanced-image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero({ children }: { children?: React.ReactNode }) {
    const [reduceMotion, setReduceMotion] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mq.matches);
        const handler = () => setReduceMotion(mq.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return (
        <section
            id="hero"
            aria-label="Hero section"
            className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-44 md:pb-36 bg-background"
        >
            {/* Subtle gradient backdrop - 60-30-10: 60% background, 30% muted gradient, 10% accent */}
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-muted/5 via-background to-background"
                aria-hidden="true"
            />

            {/* Minimal accent element - 10% rule */}
            <div
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center md:text-left space-y-8 max-w-2xl"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={reduceMotion ? {} : { opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                            initial={
                                reduceMotion ? false : { opacity: 0, y: 10 }
                            }
                            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <span className="text-foreground">Divyo</span>
                        </motion.h1>
                        <motion.h2
                            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
                            initial={
                                reduceMotion ? false : { opacity: 0, y: 10 }
                            }
                            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <span className="text-foreground">
                                Split bills.
                            </span>
                            <br />
                            <span className="text-primary">
                                Not friendships.
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0"
                            initial={
                                reduceMotion ? false : { opacity: 0, y: 10 }
                            }
                            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            Snap a receipt, assign items, settle up. The easiest
                            way to split any bill with friends.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                            initial={
                                reduceMotion ? false : { opacity: 0, y: 10 }
                            }
                            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <Link
                                href="#waitlist"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg shadow-primary/25"
                                aria-label="Join the Divyo waitlist"
                            >
                                Join Waitlist
                            </Link>

                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-foreground bg-muted/50 rounded-full hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Learn how Divyo works"
                            >
                                Learn More
                            </Link>
                        </motion.div>

                        <motion.div
                            className=""
                            initial={reduceMotion ? false : { opacity: 0 }}
                            animate={reduceMotion ? {} : { opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {children}
                            <p className="text-muted-foreground/80 mt-2">
                                Free to join • No credit card required
                            </p>
                        </motion.div>

                        <motion.p
                            initial={reduceMotion ? false : { opacity: 0 }}
                            animate={reduceMotion ? {} : { opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        ></motion.p>
                    </motion.div>

                    {/* Phone Mockup */}
                    <AnimatePresence>
                        <motion.div
                            className="flex-1 w-full max-w-md md:max-w-lg"
                            initial={reduceMotion ? false : { opacity: 0 }}
                            animate={reduceMotion ? {} : { opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                        >
                            <div className="relative aspect-[9/16] w-3/4 mx-auto rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden bg-muted/20">
                                <EnhancedImage
                                    src="/screenshots/placeholder-phone.png"
                                    alt="Divyo mobile app interface showing receipt scanning"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
