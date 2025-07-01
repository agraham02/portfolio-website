"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutSection from "@/components/about/AboutSection";
import TimelineSection from "@/components/about/Timeline";

export default function AboutPage() {
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
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/20">
            {/* Hero Section */}
            <motion.section
                className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-950/50 dark:to-indigo-950/30"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-800 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-400 bg-clip-text text-transparent mb-6"
                        variants={fadeInUp}
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="text-slate-600 dark:text-slate-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
                        variants={fadeInUp}
                    >
                        A journey from the U.S. Virgin Islands to becoming a
                        full-stack software engineer, building solutions that
                        make life better through thoughtful, human-centered
                        design.
                    </motion.p>
                </div>
            </motion.section>

            {/* About Section */}
            <AboutSection />

            {/* Timeline Section */}
            <motion.section
                className="py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
                            My Journey
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            From self-taught beginner to full-stack engineer,
                            here's how I've grown through real projects,
                            internships, and continuous learning.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <TimelineSection />
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50/50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/20 border-t border-slate-200/50 dark:border-slate-700/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div className="relative" variants={fadeInUp}>
                        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse" />
                        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                            <motion.h3
                                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6"
                                variants={fadeInUp}
                            >
                                Let's Build Something Amazing
                            </motion.h3>
                            <motion.p
                                className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8"
                                variants={fadeInUp}
                            >
                                Whether you're looking for a collaborator, have
                                a project in mind, or just want to chat about
                                tech and creativity, I'd love to connect and
                                explore what we can create together.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                variants={fadeInUp}
                            >
                                <motion.a
                                    href="/projects"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View My Projects
                                </motion.a>
                                <motion.a
                                    href="mailto:your-email@example.com"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold rounded-xl transition-all duration-300 text-lg"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get In Touch
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
