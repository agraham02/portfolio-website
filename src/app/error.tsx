"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

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

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-destructive/5" />
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-destructive/5 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-20 w-96 h-96 bg-destructive/5 rounded-full blur-3xl"
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
                    {/* Error icon */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-8"
                    >
                        <motion.div
                            className="inline-flex p-8 bg-destructive/10 rounded-full"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <AlertTriangle className="h-16 w-16 text-destructive" />
                        </motion.div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Something Went{" "}
                        <span className="bg-gradient-to-r from-destructive via-destructive/80 to-red-600 bg-clip-text text-transparent">
                            Wrong
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        An unexpected error has occurred. Don't worry, it's not your fault! 
                        Please try refreshing the page or return to the homepage.
                    </motion.p>

                    {/* Error details (in development only) */}
                    {process.env.NODE_ENV === "development" && (
                        <motion.div
                            variants={itemVariants}
                            className="mb-8 p-4 bg-destructive/5 border border-destructive/20 rounded-lg text-left max-w-2xl mx-auto"
                        >
                            <h3 className="font-semibold mb-2 text-destructive">Error Details:</h3>
                            <code className="text-sm text-muted-foreground block whitespace-pre-wrap">
                                {error.message}
                            </code>
                            {error.digest && (
                                <p className="text-xs text-muted-foreground mt-2">
                                    Error ID: {error.digest}
                                </p>
                            )}
                        </motion.div>
                    )}

                    {/* Action buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <Button 
                            onClick={reset}
                            size="lg" 
                            className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <RefreshCw className="mr-2 h-5 w-5" />
                            Try Again
                        </Button>
                        
                        <Link href="/">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                            >
                                <Home className="mr-2 h-5 w-5" />
                                Go Home
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Helpful message */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span>💻</span>
                            <span>If the problem persists, please contact support</span>
                        </motion.div>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-4 h-4 bg-destructive/20 rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-6 h-6 bg-destructive/15 rounded-full"
                        animate={{
                            y: [0, 15, 0],
                            x: [0, -15, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
