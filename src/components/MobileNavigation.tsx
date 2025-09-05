"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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

    const menuVariants = {
        closed: {
            scale: 1,
            borderRadius: "50%",
            width: 64,
            height: 64,
        },
        open: {
            scale: 1,
            borderRadius: "24px",
            width: 280,
            height: "auto",
        },
    };

    const contentVariants = {
        closed: {
            opacity: 0,
            y: 20,
        },
        open: {
            opacity: 1,
            y: 0,
        },
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1 + 0.2,
                duration: 0.3,
            },
        }),
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Backdrop */}
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

            {/* Floating Menu */}
            <motion.div
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
                variants={menuVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6,
                }}
                style={{
                    transformOrigin: "center bottom",
                }}
            >
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 shadow-xl overflow-hidden">
                    {/* Hamburger Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-16 h-16 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors ${
                            isOpen ? "absolute top-4 right-4 w-8 h-8" : ""
                        }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={24} />}
                        </motion.div>
                    </motion.button>

                    {/* Menu Content */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                variants={contentVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="p-6 pt-12 min-h-[300px]"
                            >
                                {/* Navigation Links */}
                                <nav className="flex flex-col space-y-4">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            custom={index}
                                            variants={itemVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors py-2 px-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Divider */}
                                <motion.hr
                                    className="my-6 border-gray-200/50 dark:border-gray-700/50"
                                    variants={itemVariants}
                                    custom={navItems.length}
                                    initial="closed"
                                    animate="open"
                                />

                                {/* Theme Toggle */}
                                <motion.div
                                    className="flex items-center justify-center gap-3 mb-4"
                                    variants={itemVariants}
                                    custom={navItems.length + 1}
                                    initial="closed"
                                    animate="open"
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
                                    variants={itemVariants}
                                    custom={navItems.length + 2}
                                    initial="closed"
                                    animate="open"
                                >
                                    <Link
                                        href="/Ahmad Graham - Software Engineer Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleLinkClick}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                                    >
                                        <Download size={16} />
                                        Download Resume
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    );
}
