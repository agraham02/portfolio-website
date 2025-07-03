"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutSection from "@/components/about/AboutSection";
import TimelineSection from "@/components/about/Timeline";
import CallToAction from "@/components/CallToAction";

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
        <div className="min-h-screen  bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/20">
            <div className="px-5 md:px-10">
                <AboutSection />

                <TimelineSection />
            </div>
            {/* Hero Section */}
            {/* <motion.section
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
            </motion.section> */}

            {/* Call to Action */}
            <CallToAction
                title="Let's Build Something Amazing Together"
                subtitle="Interested in collaborating or have a project in mind? I'd love to hear about your ideas and explore how we can bring them to life."
                primaryButtonText="Start a Conversation"
                secondaryButtonText="View My Projects"
                onPrimaryClick={() =>
                    (window.location.href = "mailto:your.email@example.com")
                }
                onSecondaryClick={() => (window.location.href = "/projects")}
                badgeText="Open to opportunities"
            />
        </div>
    );
}
