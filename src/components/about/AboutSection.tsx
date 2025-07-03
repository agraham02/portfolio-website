"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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

    const floatingElements = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const techStackData = [
        { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
        {
            name: "TypeScript",
            icon: "📘",
            color: "from-blue-500 to-indigo-500",
        },
        { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
        { name: "Python", icon: "🐍", color: "from-yellow-500 to-orange-500" },
        { name: "AWS", icon: "☁️", color: "from-orange-500 to-red-500" },
        {
            name: "PostgreSQL",
            icon: "🐘",
            color: "from-purple-500 to-pink-500",
        },
        { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
        { name: "Tailwind", icon: "🎨", color: "from-teal-500 to-cyan-500" },
    ];

    return (
        <motion.section
            className="relative py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 border-b border-slate-200/50 dark:border-slate-700/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
                    variants={floatingElements}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-xl"
                    variants={floatingElements}
                    animate="animate"
                    transition={{ delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-xl"
                    variants={floatingElements}
                    animate="animate"
                    transition={{ delay: 2 }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side – Enhanced Image */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center px-8 sm:px-12 lg:px-4"
                    variants={imageFloat}
                >
                    <div className="relative group max-w-sm sm:max-w-md w-full">
                        {/* Layered Background Effects - Responsive */}
                        <div className="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-20 blur-xl sm:blur-2xl animate-pulse group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full opacity-10 blur-lg sm:blur-xl animate-pulse animation-delay-1000" />

                        {/* Main Image Container */}
                        <div className="relative w-full aspect-square">
                            <Image
                                src="/images/hero-template.png"
                                alt="Ahmad Graham"
                                fill
                                className="relative rounded-full object-cover shadow-2xl border-2 sm:border-4 border-white/70 dark:border-slate-700/70 group-hover:scale-105 transition-all duration-500 group-hover:shadow-3xl"
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 450px"
                            />

                            {/* Floating Tech Icons - Responsive */}
                            <motion.div
                                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-lg sm:text-xl lg:text-2xl border-2 border-blue-200 dark:border-blue-700"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                🏝️
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-1 -left-3 sm:-bottom-2 sm:-left-4 lg:-left-6 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-base sm:text-lg lg:text-xl border-2 border-green-200 dark:border-green-700"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                💻
                            </motion.div>
                            <motion.div
                                className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-xs sm:text-sm border-2 border-purple-200 dark:border-purple-700"
                                animate={{ x: [0, -5, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            >
                                🚀
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side – Enhanced Bio */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-8"
                    variants={staggerContainer}
                >
                    {/* Enhanced Header with Badge */}
                    <div className="space-y-4">
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap items-center gap-3 mb-4"
                        >
                            <Badge
                                variant="outline"
                                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                            >
                                Full-Stack Engineer
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <motion.div
                                    className="w-2 h-2 bg-green-400 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    Available for work
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                            variants={fadeInUp}
                        >
                            Hi, I'm{" "}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                                    Ahmad Graham
                                </span>
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                        </motion.h2>
                    </div>

                    {/* Bio Text with Better Typography */}
                    <div className="space-y-6">
                        <motion.div
                            className="relative p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="absolute top-4 left-4 w-1 h-12 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full" />
                            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed pl-6">
                                I'm a full-stack software engineer with a
                                passion for solving real-world problems through
                                code. My journey began in the U.S. Virgin
                                Islands and took shape after relocating to
                                Virginia, where I dove headfirst into
                                self-taught web development.
                            </p>
                        </motion.div>

                        <motion.div
                            className="relative p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="absolute top-4 left-4 w-1 h-12 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full" />
                            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed pl-6">
                                I thrive where code meets creativity, building
                                everything from pixel-perfect UIs to optimized
                                backend systems. My mission is to create
                                software that's functional, thoughtful, and
                                human-centered.
                            </p>
                        </motion.div>

                        <motion.div
                            className="relative p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="absolute top-4 left-4 w-1 h-12 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
                            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed pl-6">
                                When I'm not coding, you'll find me at the gym,
                                discovering new music, or spending quality time
                                with friends. I believe in building things that
                                make life better! 🚀
                            </p>
                        </motion.div>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <motion.div className="space-y-4" variants={fadeInUp}>
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <span className="text-2xl">🛠️</span>
                            Tech Stack & Tools
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {techStackData.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="group relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: index * 0.1,
                                            duration: 0.4,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <div
                                        className={`relative p-4 bg-gradient-to-br ${tech.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20`}
                                    >
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl">
                                                {tech.icon}
                                            </div>
                                            <div className="text-white font-medium text-sm">
                                                {tech.name}
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-6"
                        variants={fadeInUp}
                    >
                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Let's Connect</span>
                            <motion.span className="group-hover:translate-x-1 transition-transform duration-300">
                                🚀
                            </motion.span>
                        </motion.button>

                        <motion.button
                            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>View Resume</span>
                            <span>📄</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
