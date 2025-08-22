"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Scale,
    Coffee,
    Laugh,
    Handshake,
    AlertCircle,
    CheckCircle,
} from "lucide-react";

export default function TermsPage() {
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
                            <Scale className="w-16 h-16 text-blue-500" />
                            <Laugh className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        The most reasonable terms you'll ever agree to
                        (probably)
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
                        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                                <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
                                    TL;DR (The Reasonable Version)
                                </h2>
                            </div>
                            <p className="text-lg">
                                Be cool, don't be a jerk, and we'll get along
                                just fine. This is just a portfolio website, not
                                a nuclear reactor. ☮️
                            </p>
                        </div>

                        {/* The Actual Terms */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Handshake className="w-6 h-6 text-blue-500" />
                                <h2 className="text-2xl font-bold">
                                    The Actual Terms
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-6 border border-border rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🤝</span>
                                        1. What This Website Is
                                    </h3>
                                    <p className="text-muted-foreground">
                                        This is Ahmad Graham's portfolio
                                        website. It showcases my work, tells you
                                        a bit about me, and hopefully convinces
                                        you that I'm not a robot (though I do
                                        drink a lot of coffee, which is
                                        suspicious). It also collects some
                                        basic, anonymous analytics so I can
                                        pretend people actually visit.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-6 border border-border rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🚫</span>
                                        2. What You Can't Do
                                    </h3>
                                    <ul className="text-muted-foreground space-y-2">
                                        <li>
                                            • Don't try to hack this website
                                            (there's literally nothing to steal)
                                        </li>
                                        <li>
                                            • Don't pretend to be me (trust me,
                                            it's not that fun)
                                        </li>
                                        <li>
                                            • Don't use my content to train your
                                            evil AI overlord
                                        </li>
                                        <li>
                                            • Don't spam my contact form with
                                            "GET RICH QUICK" schemes
                                        </li>
                                        <li>
                                            • Don't try to sell me
                                            cryptocurrency (I already have
                                            0.0001 Bitcoin)
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-6 border border-border rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-2xl">✅</span>
                                        3. What You Can Do
                                    </h3>
                                    <ul className="text-muted-foreground space-y-2">
                                        <li>
                                            • Browse around and enjoy the
                                            animations
                                        </li>
                                        <li>
                                            • Download my resume (please hire
                                            me)
                                        </li>
                                        <li>• Send me cool project ideas</li>
                                        <li>
                                            • Share this website with friends
                                            (if you have any)
                                        </li>
                                        <li>
                                            • Judge my code style (but be
                                            gentle, I have feelings)
                                        </li>
                                        <li>
                                            • Use the dark mode toggle
                                            obsessively (I do too)
                                        </li>
                                        <li>
                                            • Be part of my anonymous analytics
                                            (you're helping my self-esteem)
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="p-6 border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-amber-500" />
                                        4. Disclaimer (The Lawyer-y Bit)
                                    </h3>
                                    <p className="text-muted-foreground">
                                        This website is provided "as is" - like
                                        that friend who's always late but you
                                        still love them. I try my best to keep
                                        everything working, but if something
                                        breaks, I'll fix it when I finish my
                                        coffee. ☕
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="p-6 border border-border rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🔄</span>
                                        5. Changes to These Terms
                                    </h3>
                                    <p className="text-muted-foreground">
                                        I might update these terms occasionally,
                                        but I promise to keep them just as
                                        silly. Major changes will be announced
                                        with the same enthusiasm I announce new
                                        coffee flavors I've tried.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="p-6 border border-border rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                        <span className="text-2xl">📞</span>
                                        6. Contact & Disputes
                                    </h3>
                                    <p className="text-muted-foreground mb-3">
                                        Got a problem? Let's talk it out like
                                        civilized humans over virtual coffee:
                                    </p>
                                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                                        <Coffee className="w-5 h-5 text-amber-500" />
                                        <Link
                                            href="mailto:ahmadgrahamdev@gmail.com"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            ahmadgrahamdev@gmail.com
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Fun Fact */}
                        <div className="text-center p-6 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20">
                            <h3 className="text-lg font-semibold mb-2">
                                🎉 Fun Fact
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                You just read a terms of service that's actually
                                readable! You're probably in the 0.01% of
                                internet users who do this. You deserve a
                                cookie. 🍪
                            </p>
                        </div>

                        {/* Agreement Section */}
                        <div className="text-center p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <p className="text-muted-foreground mb-4">
                                By using this website, you agree to these terms
                                and also agree that pineapple on pizza is...
                                well, let's not get into that debate.
                            </p>
                            <p className="text-sm font-semibold">
                                Last updated: August 21, 2025 (while drinking my
                                third cup of coffee)
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
