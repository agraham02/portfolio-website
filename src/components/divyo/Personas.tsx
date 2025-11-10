"use client";
import { motion } from "motion/react";
import { UtensilsCrossed, Home, Briefcase, Baby } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const personas = [
    {
        icon: UtensilsCrossed,
        title: "Friends Dining Out",
        desc: "Split every bite fairly—no more Venmo calculus.",
    },
    {
        icon: Home,
        title: "Roommates",
        desc: "Groceries and utilities, shared without stress.",
    },
    {
        icon: Briefcase,
        title: "Coworkers",
        desc: "Team lunches that reimburse cleanly.",
    },
    {
        icon: Baby,
        title: "Families",
        desc: "Track parents + kids items without friction.",
    },
];

export default function Personas() {
    return (
        <section
            id="personas"
            className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-muted/30"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-16 sm:mb-20 text-center space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Perfect for any group
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        From brunch to bills, Divyo adapts to your needs
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    {personas.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.article
                                key={p.title}
                                className="relative rounded-3xl border border-border/50 bg-card p-8 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 [transition:box-shadow_300ms,border-color_300ms,background-color_300ms] will-change-[transform,opacity]"
                                {...fadeInUp({
                                    i,
                                    distance: 22,
                                    duration: 0.45,
                                    delayPerIndex: 0.07,
                                    viewportAmount: 0.4,
                                })}
                            >
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                                    <Icon
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="font-semibold text-lg mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {p.desc}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
