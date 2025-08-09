"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface CallToActionProps {
    title?: string;
    subtitle?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    showBadge?: boolean;
    badgeText?: string;
    variant?: "default" | "gradient" | "minimal";
}

export default function CallToAction({
    title = "Ready to Work Together?",
    subtitle = "Let's create something amazing! I'm always excited to collaborate on new projects and bring innovative ideas to life.",
    primaryButtonText = "Get In Touch",
    secondaryButtonText = "View My Work",
    onPrimaryClick,
    onSecondaryClick,
    showBadge = true,
    badgeText = "Available for hire",
    variant = "default",
}: CallToActionProps) {
    // Simple animation settings used directly on motion components
    const fadeInTransition = { duration: 0.5, ease: "easeOut" as const };

    // Stagger handled via viewport/transition props instead of variants

    // Removed unused subtleFloat animation config

    const getVariantClasses = () => {
        switch (variant) {
            case "gradient":
                return "bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white";
            case "minimal":
                return "bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700";
            default:
                return "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-800 dark:via-blue-800 dark:to-indigo-800 text-white";
        }
    };

    const getTextClasses = () => {
        switch (variant) {
            case "gradient":
                return "text-white/90";
            case "minimal":
                return "text-slate-600 dark:text-slate-300";
            default:
                return "text-white/90";
        }
    };

    return (
        <motion.section
            className={`relative py-16 md:py-20 overflow-hidden ${getVariantClasses()}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* CSS Dot Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle, ${
                        variant === "minimal"
                            ? "rgb(100 116 139 / 0.3)" // slate-500/30 for light mode
                            : "rgb(255 255 255 / 0.25)" // white/25 for dark backgrounds
                    } 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    opacity: 0.4,
                }}
            />

            {/* Subtle floating elements (minimal) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Just a few subtle floating dots */}
                {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                        key={`floating-dot-${i}`}
                        className={`absolute w-0.5 h-0.5 rounded-full ${
                            variant === "minimal"
                                ? "bg-slate-400/20 dark:bg-slate-600/20"
                                : "bg-white/15"
                        }`}
                        style={{
                            left: `${25 + Math.random() * 50}%`,
                            top: `${25 + Math.random() * 50}%`,
                        }}
                        animate={{
                            y: [-5, 5, -5],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 4,
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                {/* Status Badge */}
                {showBadge && (
                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={fadeInTransition}
                        viewport={{ once: true }}
                    >
                        <Badge
                            variant="outline"
                            className={`px-4 py-2 ${
                                variant === "minimal"
                                    ? "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                                    : "bg-white/10 border-white/20 text-white backdrop-blur-sm"
                            }`}
                        >
                            <motion.div
                                className={`w-2 h-2 ${
                                    variant === "minimal"
                                        ? "bg-green-500"
                                        : "bg-green-400"
                                } rounded-full mr-2`}
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            {badgeText}
                        </Badge>
                    </motion.div>
                )}

                {/* Title */}
                <motion.h2
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                        variant === "minimal"
                            ? "bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent"
                            : "text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={fadeInTransition}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto ${getTextClasses()}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...fadeInTransition, delay: 0.05 }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.p>

                {/* Buttons - Simple and Clean */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...fadeInTransition, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={onPrimaryClick}
                        className={`px-8 py-3 ${
                            variant === "minimal"
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                                : "bg-white text-slate-900 hover:bg-gray-100"
                        } font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 min-w-[180px] justify-center`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{primaryButtonText}</span>
                        <span className="text-sm">→</span>
                    </motion.button>

                    <motion.button
                        onClick={onSecondaryClick}
                        className={`px-8 py-3 border ${
                            variant === "minimal"
                                ? "border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                : "border-white/30 text-white hover:bg-white/10"
                        } font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 min-w-[180px] justify-center`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{secondaryButtonText}</span>
                        <span className="text-sm">↗</span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
}
