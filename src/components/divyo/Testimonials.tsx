"use client";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Finally, an app that actually makes splitting bills easy. No more awkward conversations or complicated math!",
        author: "Sarah Chen",
        role: "Food Blogger",
        avatar: "SC",
    },
    {
        quote: "As someone who travels with groups constantly, Divyo has been a game-changer. It's saved countless hours and friendships.",
        author: "Marcus Johnson",
        role: "Travel Coordinator",
        avatar: "MJ",
    },
    {
        quote: "The receipt scanning is incredibly accurate. It handles everything from grocery runs to restaurant bills flawlessly.",
        author: "Priya Patel",
        role: "Event Planner",
        avatar: "PP",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-background">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    className="mb-16 sm:mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Loved by early users
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl text-muted-foreground">
                        See what people are saying about Divyo
                    </p>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={index}
                            className="flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 [transition:box-shadow_300ms,border-color_300ms,background-color_300ms] will-change-[transform,opacity] duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            tabIndex={0}
                            role="article"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Quote className="h-6 w-6" aria-hidden="true" />
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="mb-6 flex-grow">
                                <p className="text-base leading-relaxed text-foreground">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                {/* Avatar */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                                    {testimonial.avatar}
                                </div>

                                {/* Author Details */}
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
