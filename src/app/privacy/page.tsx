"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Coffee, Smile, Heart, Database, X } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <Shield className="w-16 h-16 text-blue-500" />
                            <Heart className="w-6 h-6 text-red-400 absolute -top-1 -right-1 animate-pulse" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        The most boring (and shortest) privacy policy you'll
                        ever read
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card border border-border rounded-lg p-8 mb-8"
                >
                    <div className="space-y-8">
                        {/* TL;DR Section */}
                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Smile className="w-6 h-6 text-blue-500" />
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    TL;DR (Too Long; Didn't Read)
                                </h2>
                            </div>
                            <p className="text-lg">
                                I collect minimal, anonymous analytics to see if
                                anyone actually visits this site (and to fuel my
                                imposter syndrome). No personal data, no creepy
                                tracking, just basic "someone clicked a button"
                                stats. 📊
                            </p>
                        </div>

                        {/* What We Don't Do */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="w-6 h-6" />
                                <X className="w-4 h-4 text-red-500" />
                                <h2 className="text-2xl font-bold">
                                    What We DON'T Do
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "🚫 No personal data collection",
                                    "🚫 No tracking across other websites",
                                    "🚫 No selling your data to spam lords",
                                    "🚫 No creepy retargeting ads",
                                    "🚫 No storing your personal info",
                                    "🚫 No surveillance capitalism",
                                    "🚫 No dark patterns (just dark mode)",
                                    "🚫 No cookies for tracking (just for theme)",
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.4 + index * 0.1,
                                        }}
                                        className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg"
                                    >
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* What We Do */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Coffee className="w-6 h-6 text-amber-500" />
                                <h2 className="text-2xl font-bold">
                                    What We DO
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                                        ✅ Show you my work
                                    </h3>
                                    <p className="text-muted-foreground">
                                        That's literally it. This is a portfolio
                                        website. You look at my projects, maybe
                                        think "neat", and move on with your
                                        life.
                                    </p>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                                        ✅ Remember your theme preference
                                    </h3>
                                    <p className="text-muted-foreground">
                                        If you switch to dark mode, we'll
                                        remember that locally in your browser.
                                        It never leaves your device. Promise.
                                    </p>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                                        ✅ Collect anonymous analytics
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Using Vercel Analytics and possibly
                                        Google Analytics to see basic stats like
                                        "someone visited the projects page." No
                                        personal info, just numbers that make me
                                        feel less alone.
                                    </p>
                                </div>
                                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                                        ✅ Host pretty images
                                    </h3>
                                    <p className="text-muted-foreground">
                                        The images you see are hosted by me or
                                        trusted CDNs. No tracking images, no
                                        pixel shenanigans.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Analytics Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">📊</span>
                                <h2 className="text-2xl font-bold">
                                    The Analytics Situation
                                </h2>
                            </div>
                            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                                <h3 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">
                                    What I Actually Track (Spoiler: It's Boring)
                                </h3>
                                <ul className="text-muted-foreground space-y-2 mb-4">
                                    <li>
                                        • <strong>Page visits:</strong> "Someone
                                        looked at my projects page" (no idea who
                                        though)
                                    </li>
                                    <li>
                                        • <strong>Button clicks:</strong>{" "}
                                        "Someone downloaded my resume" (please
                                        hire me)
                                    </li>
                                    <li>
                                        • <strong>General location:</strong>{" "}
                                        "Visitor from Earth" (city level,
                                        nothing creepy)
                                    </li>
                                    <li>
                                        • <strong>Device type:</strong> "Mobile
                                        user" or "Desktop user" (helps me fix
                                        responsive design)
                                    </li>
                                    <li>
                                        • <strong>Popular pages:</strong> So I
                                        know what people actually care about
                                    </li>
                                </ul>
                                <p className="text-sm text-muted-foreground">
                                    <strong>What I DON'T see:</strong> Your
                                    name, email, personal info, browsing
                                    history, what you had for breakfast, or
                                    anything that could identify you personally.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Questions? Concerns? Just Want to Chat?
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about this privacy
                                policy (or lack thereof), or if you just want to
                                tell me about your day, feel free to reach out:
                            </p>
                            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                                <span>📧</span>
                                <Link
                                    href="mailto:ahmadgrahamdev@gmail.com"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    ahmadgrahamdev@gmail.com
                                </Link>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="text-center p-6 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground italic">
                                "I collect just enough data to know if this
                                website is a complete failure, but not enough to
                                know what you had for lunch." - Ahmad Graham,
                                2025
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Home */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        ← Back to Portfolio
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
