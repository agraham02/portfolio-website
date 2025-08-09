"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Section {
    id: string;
    label: string;
}

const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Skills" },
    { id: "tech", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
];

const FloatingNavigation = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-50px 0px -50px 0px",
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        >
            <nav className="flex flex-col gap-4 p-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg">
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group relative"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSection === section.id
                                    ? "bg-primary scale-125"
                                    : "bg-muted-foreground/30 hover:bg-primary/50"
                            }`}
                        />

                        {/* Tooltip */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 10 }}
                            whileHover={{ opacity: 1, scale: 1, x: 0 }}
                            className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap px-3 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg border border-border/50 pointer-events-none"
                        >
                            {section.label}
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-popover border-y-4 border-y-transparent" />
                        </motion.div>
                    </motion.button>
                ))}
            </nav>
        </motion.div>
    );
};

export default FloatingNavigation;
