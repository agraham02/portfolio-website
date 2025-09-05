"use client";

import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon, ExternalLink } from "lucide-react";
import { navItems, RESUME_URL } from "@/lib/const";

export default function Navbar() {
    // Theme state: 'light' | 'dark'
    const [theme, setTheme] = useState<string>("light");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // On mount, set theme from localStorage or system
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
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }

        // Handle scroll effect
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 hidden md:block ${
                isScrolled
                    ? "bg-slate-200/60 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20"
                    : "bg-transparent backdrop-blur-sm"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <motion.span
                            className="text-2xl font-bold text-gray-900 dark:text-white"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            &lt;
                            <span className="text-blue-400">Ahmad Graham </span>
                            /&gt;
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 transition-colors duration-200 group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Theme Toggle */}
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
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
                                id="theme-toggle"
                            />
                            <Moon
                                size={16}
                                className={`transition-colors ${
                                    theme === "dark"
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                            />
                        </motion.div>

                        {/* Resume Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                            >
                                Resume
                                <ExternalLink className="h-5 w-5" />
                            </Link>
                        </motion.div>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
}
