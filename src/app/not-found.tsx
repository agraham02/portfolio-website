"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const floatingAnimation = {
        y: [0, -10, 0],
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* 404 Number with glitch effect */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-8"
                    >
                        <motion.h1
                            className="text-9xl md:text-[12rem] font-black text-primary/20 select-none"
                            animate={floatingAnimation}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            404
                        </motion.h1>
                        <motion.div
                            className="absolute inset-0 text-9xl md:text-[12rem] font-black text-primary/10"
                            animate={{
                                x: [0, 2, -2, 0],
                                y: [0, -1, 1, 0],
                            }}
                            transition={{
                                duration: 0.1,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            404
                        </motion.div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Oops! Page{" "}
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                            Not Found
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        The page you&apos;re looking for seems to have wandered off
                        into the digital void. Don&apos;t worry though, let&apos;s get you
                        back on track!
                    </motion.p>

                    {/* Navigation buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Link href="/">
                            <Button
                                size="lg"
                                className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Home className="mr-2 h-5 w-5" />
                                Go Home
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Go Back
                        </Button>
                    </motion.div>

                    {/* Helpful links */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
                    >
                        {/* Home */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300"
                        >
                            <Home className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold mb-2">Homepage</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Return to the main page and explore my work
                            </p>
                            <Link href="/">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full"
                                >
                                    Visit Homepage
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Projects */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300"
                        >
                            <Search className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold mb-2">My Projects</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Check out my latest work and projects
                            </p>
                            <Link href="/projects">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full"
                                >
                                    View Projects
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300"
                        >
                            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-semibold mb-2">Get in Touch</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Have questions? Let&apos;s connect!
                            </p>
                            <Link href="/about">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full"
                                >
                                    Contact Me
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Fun easter egg */}
                    <motion.div variants={itemVariants} className="text-center">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span>💡</span>
                            <span>Pro tip: Check the URL for typos!</span>
                        </motion.div>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary/20 rounded-full"
                        animate={{
                            y: [0, 15, 0],
                            x: [0, -15, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/30 rounded-full"
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 20, 0],
                            opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
