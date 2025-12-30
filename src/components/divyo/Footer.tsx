"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function DivyoFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/50 border-t border-border/50">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Logo/Brand */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold tracking-tight text-foreground">
                            Divyo
                        </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-muted-foreground text-sm text-center">
                        Scan. Split. Settle.
                    </p>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="/divyo/privacy"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/divyo/terms"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="mailto:ahmadgrahamdev@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-muted-foreground/70 text-xs text-center">
                        © {currentYear} Divyo. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
