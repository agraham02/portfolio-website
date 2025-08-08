"use client";

import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function Navbar() {
    // Theme state: 'light' | 'dark'
    const [theme, setTheme] = useState<string>("light");
    useEffect(() => {
        // On mount, set theme from localStorage or system
        const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
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
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        &lt;<span className="text-blue-600 dark:text-cyan-400">Portfolio</span>
                        /&gt;
                    </span>
                </Link>

                {/* Nav links */}
                <nav className="flex items-center space-x-8 text-gray-700 dark:text-gray-200 font-medium">
                    <Link
                        href="/projects"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blog"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 dark:bg-cyan-400 text-white dark:text-neutral-900 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-cyan-500 transition"
                    >
                        Resume
                    </Link>
                    {/* Dark mode toggle */}
                    <div className="ml-4 flex items-center gap-2">
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={toggleTheme}
                            id="theme-toggle"
                        />
                        <label htmlFor="theme-toggle" className="text-xs text-gray-500 dark:text-gray-400 select-none">
                            {theme === "dark" ? "Dark" : "Light"}
                        </label>
                    </div>
                </nav>
            </div>
        </header>
    );
}
