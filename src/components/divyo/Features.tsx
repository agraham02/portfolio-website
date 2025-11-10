"use client";
import { motion } from "motion/react";
import { Sparkles, UserPlus2, Move3D, CreditCard, Shield } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const features = [
    {
        icon: Sparkles,
        title: "Smart OCR",
        desc: "Auto-detect items with confidence scores so edits are rare.",
    },
    {
        icon: UserPlus2,
        title: "Add Guests",
        desc: "Invite by link—friends can join without creating an account.",
    },
    {
        icon: Move3D,
        title: "Automatic Split",
        desc: "Prorated tax and tip—no math, no debates, just fair totals.",
    },
    {
        icon: CreditCard,
        title: "Payment Tracking",
        desc: "Mark paid/unpaid and export a summary when everyone's settled.",
    },
    {
        icon: Shield,
        title: "Privacy First",
        desc: "Your data is encrypted and deletable. You're always in control.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            aria-labelledby="features-heading"
            className="py-20 sm:py-28 md:py-36 bg-background"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-16 sm:mb-20 text-center space-y-4">
                    <h2
                        id="features-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        Built for simplicity
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Everything you need. Nothing you don&apos;t.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <motion.article
                                key={f.title}
                                className="group overflow-hidden rounded-3xl border border-border/50 bg-card p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 [transition:box-shadow_300ms,border-color_300ms,background-color_300ms] will-change-[transform,opacity]"
                                {...fadeInUp({
                                    i,
                                    distance: 24,
                                    duration: 0.45,
                                    delayPerIndex: 0.07,
                                    viewportAmount: 0.3,
                                })}
                                tabIndex={0}
                                role="article"
                            >
                                <div className="flex flex-col items-start space-y-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                                        <Icon
                                            className="h-7 w-7"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-xl">
                                            {f.title}
                                        </h3>
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
