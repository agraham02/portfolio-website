"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Download, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "./ui/button";

function HamburgerButton({
    isOpen,
    toggle,
}: {
    isOpen: boolean;
    toggle: () => void;
}) {
    const transition = { duration: 0.3 };

    return (
        <button
            onClick={toggle}
            className="relative w-12 h-12 flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-md bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 shadow-lg mt-1"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
        >
            <div className="w-7 h-6 relative flex flex-col justify-center">
                {/* Top bar */}
                <motion.span
                    className="absolute w-full h-1 bg-foreground rounded-full left-0"
                    style={{ top: "0%" }}
                    animate={
                        isOpen
                            ? { rotate: 45, top: "50%", translateY: "-50%" }
                            : { rotate: 0, top: "0%", translateY: "0%" }
                    }
                    transition={transition}
                />
                {/* Middle bar */}
                <motion.span
                    className="absolute w-full h-1 bg-foreground rounded-full left-0 top-1/2 -translate-y-1/2"
                    animate={
                        isOpen
                            ? { opacity: 0, scale: 0.8 }
                            : { opacity: 1, scale: 1 }
                    }
                    transition={transition}
                />
                {/* Bottom bar */}
                <motion.span
                    className="absolute w-full h-1 bg-foreground rounded-full left-0"
                    style={{ bottom: "0%" }}
                    animate={
                        isOpen
                            ? { rotate: -45, bottom: "50%", translateY: "50%" }
                            : { rotate: 0, bottom: "0%", translateY: "0%" }
                    }
                    transition={transition}
                />
            </div>
        </button>
    );
}

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        // Get theme from localStorage or system preference
        const stored =
            typeof window !== "undefined"
                ? localStorage.getItem("theme")
                : null;
        if (
            stored === "dark" ||
            (!stored &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    const toggleTheme = (checked: boolean) => {
        const newTheme = checked ? "dark" : "light";
        setTheme(newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme);
        }
    };

    const navItems = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Container variants for staggered animation
    const containerVariants = {
        closed: { opacity: 0, width: 0, height: 0 },
        open: {
            opacity: 1,
            width: "auto",
            height: "auto",
            transition: {
                duration: 0.4,
            },
        },
    };

    // Item variants for staggered fade-in
    const itemVariants = {
        closed: { opacity: 0, y: -10 },
        open: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.15 + custom * 0.08,
            },
        }),
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            <div className="fixed bottom-6 left-6 z-50 lg:hidden">
                <motion.div
                    className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 shadow-xl rounded-lg overflow-hidden"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={containerVariants}
                >
                    {isOpen && (
                        <motion.div className="p-6 min-w-[60vw]">
                            {/* Navigation Links */}
                            <nav className="flex flex-col space-y-2 mb-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        custom={index}
                                        initial="closed"
                                        animate="open"
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={handleLinkClick}
                                            className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Divider */}
                            <motion.hr
                                className="my-4 border-gray-200/50 dark:border-gray-700/50"
                                custom={navItems.length}
                                initial="closed"
                                animate="open"
                                variants={itemVariants}
                            />

                            {/* Theme Toggle */}
                            <motion.div
                                className="flex items-center justify-center gap-3 mb-6"
                                custom={navItems.length + 1}
                                initial="closed"
                                animate="open"
                                variants={itemVariants}
                            >
                                <Sun
                                    size={16}
                                    className={`transition-colors ${
                                        theme === "light"
                                            ? "text-amber-500"
                                            : "text-gray-400"
                                    }`}
                                />
                                <Switch
                                    checked={theme === "dark"}
                                    onCheckedChange={toggleTheme}
                                    id="mobile-floating-theme-toggle"
                                />
                                <Moon
                                    size={16}
                                    className={`transition-colors ${
                                        theme === "dark"
                                            ? "text-cyan-400"
                                            : "text-gray-400"
                                    }`}
                                />
                            </motion.div>

                            {/* Resume Button */}
                            <motion.div
                                custom={navItems.length + 2}
                                initial="closed"
                                animate="open"
                                variants={itemVariants}
                            >
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleLinkClick}
                                >
                                    <Download size={16} />
                                    View Resume
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>

                <HamburgerButton
                    isOpen={isOpen}
                    toggle={() => setIsOpen(!isOpen)}
                />
            </div>
        </>
    );
}
