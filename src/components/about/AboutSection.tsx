"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const imageFloat = {
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            className="py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 border-b border-slate-200/50 dark:border-slate-700/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side – Image */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    variants={imageFloat}
                >
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-xl animate-pulse" />
                        <Image
                            src="/images/hero-template.png" // Placeholder - replace with your real photo
                            alt="Ahmad Graham"
                            width={450}
                            height={450}
                            className="relative rounded-3xl object-cover shadow-2xl border-2 border-white/50 dark:border-slate-700/50 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </motion.div>

                {/* Right Side – Bio */}
                <motion.div
                    className="w-full lg:w-1/2"
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent mb-6"
                        variants={fadeInUp}
                    >
                        Hi, I'm Ahmad Graham 👋
                    </motion.h2>
                    <motion.p
                        className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6"
                        variants={fadeInUp}
                    >
                        I'm a full-stack software engineer with a passion for
                        solving real-world problems through code. My journey
                        began in the U.S. Virgin Islands and took shape after
                        relocating to Virginia, where I dove headfirst into
                        self-taught web development. Since then, I've built
                        full-stack apps, interned at Amazon, collaborated with
                        startups, and created personal tools to help people live
                        better, like a receipt-splitting app, a financial
                        dashboard, and a music discovery platform.
                    </motion.p>
                    <motion.p
                        className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6"
                        variants={fadeInUp}
                    >
                        I thrive where code meets creativity, whether that means
                        shipping pixel-perfect UI, optimizing backend
                        performance, or building user-centric features from
                        scratch. My mission is to create software that's not
                        only functional but thoughtful, inclusive, and
                        human-centered.
                    </motion.p>
                    <motion.p
                        className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8"
                        variants={fadeInUp}
                    >
                        Outside of coding, I'm all about chasing inspiration and
                        bettering myself, whether I'm hitting the gym,
                        discovering new music or films, or spending quality time
                        with friends. If you're into building (or even just
                        enjoying) things that make life better, we'll get along
                        just fine!
                    </motion.p>

                    {/* Skills/Tech Stack */}
                    <motion.div
                        className="flex flex-wrap gap-3"
                        variants={fadeInUp}
                    >
                        {[
                            "React",
                            "TypeScript",
                            "Node.js",
                            "Python",
                            "AWS",
                            "PostgreSQL",
                        ].map((tech, index) => (
                            <motion.span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-shadow duration-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.3,
                                    },
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
