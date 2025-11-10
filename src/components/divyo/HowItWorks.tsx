"use client";
import { motion } from "motion/react";
import { Camera, ListChecks, Users, CheckCircle2 } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "Snap Receipt",
        desc: "OCR detects every item so you don't start from zero.",
    },
    {
        icon: ListChecks,
        title: "Review & Edit",
        desc: "Adjust tax, tip, or add custom charges in seconds.",
    },
    {
        icon: Users,
        title: "Add Friends",
        desc: "Assign items—guests don't even need an account.",
    },
    {
        icon: CheckCircle2,
        title: "Publish & Track",
        desc: "Share the link, mark who paid, stay organized.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="py-20 sm:py-28 md:py-36 bg-muted/30"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-16 sm:mb-20 text-center space-y-4">
                    <h2
                        id="how-it-works-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        How it works
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Split bills in four easy steps
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.article
                                key={s.title}
                                className="relative flex flex-col items-center text-center space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                {/* Step number badge */}
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg">
                                    {i + 1}
                                </div>

                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-card border border-border/50 shadow-sm">
                                    <Icon
                                        className="h-10 w-10 text-primary"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="font-semibold text-xl">
                                    {s.title}
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {s.desc}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
