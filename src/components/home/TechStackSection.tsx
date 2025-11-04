"use client";

import { motion } from "motion/react";
import InfiniteScrollLogos from "@/components/InfiniteScrollLogos";

interface TechStackSectionProps {
    techIcons: Array<{
        id: string;
        icon: React.ReactNode;
        displayName: string;
    }>;
}

const TechStackSection = ({ techIcons }: TechStackSectionProps) => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-secondary/5 to-background">
            <div className="container mx-auto max-w-7xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technologies I{" "}
                        <span className="text-primary">Work With</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A diverse toolkit of modern technologies and frameworks
                        that I use to build scalable, performant, and
                        maintainable applications.
                    </p>
                </motion.div>

                {/* Tech stack showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl" />

                    {/* Infinite scroll component */}
                    <div className="relative z-10 py-8">
                        <InfiniteScrollLogos
                            icons={techIcons}
                            iconSize="text-5xl md:text-6xl"
                            iconColor="text-muted-foreground/60"
                            iconHoverColor="hover:text-primary hover:scale-110"
                            speed="normal"
                            pauseOnHover={true}
                            showTooltips={true}
                            useRadixTooltip={true}
                        />
                    </div>

                    {/* Gradient overlays for smooth fade */}
                    <div className="absolute left-0 top-0 bottom-0 lg:w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 lg:w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
                </motion.div>

                {/* Categories
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
                >
                    <div className="text-center p-4">
                        <div className="text-2xl font-bold text-primary mb-2">
                            Frontend
                        </div>
                        <div className="text-sm text-muted-foreground">
                            React, Next.js, TypeScript
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-2xl font-bold text-primary mb-2">
                            Backend
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Node.js, Python, Java
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-2xl font-bold text-primary mb-2">
                            Database
                        </div>
                        <div className="text-sm text-muted-foreground">
                            PostgreSQL, MongoDB
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-2xl font-bold text-primary mb-2">
                            Cloud
                        </div>
                        <div className="text-sm text-muted-foreground">
                            AWS, Docker, Vercel
                        </div>
                    </div>
                </motion.div>

                {/* Additional info */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium">
                            I'm constantly expanding my technology stack
                        </span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default TechStackSection;
