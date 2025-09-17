"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const CallToActionSection = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Main heading */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Ready to Build Something Amazing?
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Let&apos;s collaborate to turn your ideas into
                        exceptional digital experiences. I&apos;m always excited
                        to work on innovative projects and solve complex
                        challenges.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                Get In Touch
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <Link href="/projects">
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                View My Work
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Availability status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full border border-green-200 dark:border-green-800"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium">
                            Currently available for new projects
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToActionSection;
