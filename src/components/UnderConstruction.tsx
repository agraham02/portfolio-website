"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function UnderConstruction() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Countdown to estimated completion (example: 2 weeks from now)
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 14); // 2 weeks from now

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
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
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 30,
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
                    {/* Main logo/icon */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <motion.div
                            className="inline-flex p-8 bg-primary/10 rounded-full border-2 border-primary/20"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <motion.div
                                className="text-6xl"
                                animate={{
                                    rotate: [0, -360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                🚀
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        Coming{" "}
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                            Soon
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                    >
                        Software Engineer Portfolio
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        I'm currently putting the finishing touches on my
                        portfolio website. It's going to be amazing! Check back
                        soon to see my latest projects and skills.
                    </motion.p>

                    {/* Countdown Timer */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
                            Estimated Launch
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                            {[
                                { label: "Days", value: timeLeft.days },
                                { label: "Hours", value: timeLeft.hours },
                                { label: "Minutes", value: timeLeft.minutes },
                                { label: "Seconds", value: timeLeft.seconds },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-primary">
                                        {item.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Email notification signup */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <h3 className="text-lg font-semibold mb-4">
                            Get Notified When It's Ready
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-card/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                            />
                            <Button className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                                Notify Me
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            No spam, just a friendly heads up when the site is
                            live!
                        </p>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-6"
                    >
                        <motion.a
                            href="mailto:your.email@example.com"
                            className="p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.a>

                        <motion.a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.a>

                        <motion.a
                            href="https://calendly.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Calendar className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.a>
                    </motion.div>

                    {/* Progress indicator */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                                <span>Progress</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 2, delay: 1 }}
                                />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Almost there! Just adding the final touches.
                        </p>
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary/30 rounded-full"
                        animate={{
                            y: [0, 15, 0],
                            x: [0, -15, 0],
                            opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/40 rounded-full"
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 20, 0],
                            opacity: [0.5, 1, 0.5],
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
