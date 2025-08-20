"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function UnderConstruction() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [progress, setProgress] = useState(0); 

    useEffect(() => {
        const targetDate = new Date("September 1, 2025");

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
            setProgress(((20 - days) / 20) * 100);

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
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8 md:px-8 lg:px-12">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
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

            <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center space-y-8 md:space-y-12"
                >
                    {/* Main logo/icon */}
                    <motion.div variants={itemVariants} className="mb-8 md:mb-12">
                        <motion.div
                            className="inline-flex p-6 md:p-8 bg-blue-500/10 rounded-full border-2 border-blue-500/20 backdrop-blur-sm"
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
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-white"
                    >
                        Coming{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                            Soon
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl md:text-2xl lg:text-4xl text-gray-300 mb-8 md:mb-12 font-light"
                    >
                        Ahmad Graham&apos;s Portfolio Website
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        I&apos;m currently putting the finishing touches on my
                        portfolio website. It&apos;s going to be amazing! Check back
                        soon to see my latest projects and skills.
                    </motion.p>

                    {/* Countdown Timer */}
                    <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                        <h3 className="text-lg md:text-xl font-semibold mb-8 md:mb-10 text-gray-300">
                            Estimated Launch
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
                            {[
                                { label: "Days", value: timeLeft.days },
                                { label: "Hours", value: timeLeft.hours },
                                { label: "Minutes", value: timeLeft.minutes },
                                { label: "Seconds", value: timeLeft.seconds },
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-800/70"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
                                        {item.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-400">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-6 md:gap-8 px-4"
                    >
                        <motion.a
                            href="mailto:ahmadgrahamdev@gmail.com"
                            className="p-4 md:p-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-blue-500/30 transition-all duration-300 group hover:bg-gray-800/70"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="h-6 w-6 md:h-7 md:w-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </motion.a>

                        <motion.a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 md:p-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-blue-500/30 transition-all duration-300 group hover:bg-gray-800/70"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="h-6 w-6 md:h-7 md:w-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/ahmad-graham"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 md:p-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-blue-500/30 transition-all duration-300 group hover:bg-gray-800/70"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin className="h-6 w-6 md:h-7 md:w-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </motion.a>
                    </motion.div>

                    {/* Progress indicator */}
                    <motion.div variants={itemVariants} className="mt-16 md:mt-20 px-4">
                        <div className="mb-6 max-w-md mx-auto">
                            <div className="flex justify-between text-sm md:text-base text-gray-400 mb-4">
                                <span>Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="w-full bg-gray-800/50 rounded-full h-3 md:h-4 overflow-hidden backdrop-blur-sm border border-gray-700/30">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 2, delay: 1 }}
                                />
                            </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
                            Almost there! Just adding the final touches.
                        </p>
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
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
                        className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full"
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
                        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300/40 rounded-full"
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
