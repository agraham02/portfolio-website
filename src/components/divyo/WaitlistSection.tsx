"use client";
import { motion } from "motion/react";
import WaitlistForm from "@/components/WaitlistForm";
import { ReactNode } from "react";

interface WaitlistSectionProps {
    children?: ReactNode;
}

export default function WaitlistSection({ children }: WaitlistSectionProps) {
    return (
        <section
            id="waitlist"
            aria-labelledby="waitlist-heading"
            className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-muted/30"
        >
            <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="relative rounded-[2.5rem] border border-border/50 bg-card p-10 sm:p-12 md:p-16 text-center shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2
                        id="waitlist-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6"
                    >
                        Get early access
                    </h2>

                    {/* Server-rendered WaitlistCount passed as children */}
                    {children}

                    <div className="flex justify-center w-full mt-8">
                        <WaitlistForm source="divyo-landing" />
                    </div>

                    <p className="mt-6 text-sm text-muted-foreground/80">
                        No spam. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
