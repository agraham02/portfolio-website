"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import CallToAction from "@/components/CallToAction";

// Note: Since this is a client component, metadata should be handled in layout.tsx or a parent server component

// ───────────────────────────────────────────────────────────
//  1. Helper types
// ───────────────────────────────────────────────────────────
type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    language: string | null;
    private: boolean;
    fork: boolean;
    topics: string[];
    created_at: string;
    updated_at: string;
};

// ───────────────────────────────────────────────────────────
//  2. Featured projects – curated content with enhanced metadata
// ───────────────────────────────────────────────────────────
const featured = [
    {
        slug: "divyo",
        title: "Divyo",
        subtitle: "Smart Receipt Splitter",
        tagline: "OCR-powered app that automatically splits receipts among friends",
        description: "Built with React Native, Node.js, and advanced OCR technology to solve the everyday problem of splitting bills accurately and fairly.",
        image: "/images/divyo-mock.png",
        href: "/divyo",
        tech: ["React Native", "Node.js", "OCR", "MongoDB"],
        status: "Live",
        category: "Mobile App",
        year: "2024"
    },
    {
        slug: "online-spades",
        title: "Multiplayer Spades",
        subtitle: "Real-time Card Game",
        tagline: "WebSocket-powered multiplayer card rooms with live gameplay",
        description: "A full-stack real-time card game featuring room management, live chat, and competitive gameplay mechanics.",
        image: "/images/spades-mock.png",
        href: "/projects/online-spades",
        tech: ["React", "Node.js", "WebSocket", "Redis"],
        status: "In Development", 
        category: "Web App",
        year: "2024"
    },
    {
        slug: "portfolio",
        title: "Portfolio Website",
        subtitle: "Personal Brand Hub",
        tagline: "Modern portfolio showcasing development skills and creativity",
        description: "A responsive, animated portfolio built with Next.js 15, featuring advanced animations and modern design patterns.",
        image: "/images/landscape.png",
        href: "/",
        tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
        status: "Live",
        category: "Portfolio",
        year: "2025"
    }
];

// ───────────────────────────────────────────────────────────
//  3. Animation variants
// ───────────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const scaleOnHover = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const gridItemVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.8,
        y: 20,
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: { 
            duration: 0.4, 
            ease: "easeOut" 
        },
    },
    exit: { 
        opacity: 0, 
        scale: 0.8,
        y: -20,
        transition: { 
            duration: 0.3, 
            ease: "easeIn" 
        },
    },
};

// ───────────────────────────────────────────────────────────
//  4. Components
// ───────────────────────────────────────────────────────────

// Hero Section with animated introduction
function ProjectsHero() {
    return (
        <motion.section
            className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating code symbols */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl md:text-4xl font-mono text-blue-200/20 dark:text-blue-400/10"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [-5, 5, -5],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 3,
                        }}
                    >
                        {['</>', '{}', '[]', '()', '</>'][Math.floor(Math.random() * 5)]}
                    </motion.div>
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <motion.div variants={fadeInUp}>
                    <Badge 
                        variant="outline" 
                        className="mb-6 px-4 py-2 bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300"
                    >
                        <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full mr-2"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        Portfolio Showcase
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
                    variants={fadeInUp}
                >
                    Featured Projects
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                    variants={fadeInUp}
                >
                    From mobile apps that solve real-world problems to interactive web experiences — 
                    explore the projects I'm most passionate about building and shipping.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={fadeInUp}
                >
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
                        <span>3 Featured Projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                        <span>Open Source Available</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

// Enhanced Featured Projects with parallax and interactions
function FeaturedProjects() {
    return (
        <motion.section
            className="py-20 bg-white dark:bg-slate-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Featured Work
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Dive deep into the products and experiences I've crafted with attention to detail and user-centered design.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:gap-16">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
                            variants={fadeInUp}
                        >
                            {/* Project Image */}
                            <motion.div
                                className="flex-1 w-full"
                                whileHover="hover"
                                variants={scaleOnHover}
                            >
                                <Link href={project.href} className="block group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={800}
                                            height={500}
                                            className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                                                View Project →
                                            </Badge>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Project Info */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300">
                                        {project.category}
                                    </Badge>
                                    <Badge variant={project.status === "Live" ? "default" : "outline"} 
                                           className={project.status === "Live" ? "bg-green-500 text-white" : "border-orange-300 text-orange-600 dark:border-orange-600 dark:text-orange-400"}>
                                        {project.status}
                                    </Badge>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                    {project.subtitle}
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <Link
                                    href={project.href}
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300 group"
                                >
                                    <span>Explore Project</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// Project Statistics Section
function ProjectStats() {
    const stats = [
        { number: "15+", label: "Projects Built", icon: "🚀" },
        { number: "5+", label: "Technologies", icon: "⚡" },
        { number: "2", label: "Years Experience", icon: "📈" },
        { number: "100%", label: "Passion Driven", icon: "❤️" },
    ];

    return (
        <motion.section
            className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="max-w-6xl mx-auto px-6">
                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            variants={fadeInUp}
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

// GitHub Projects with Search and Filter
function GitHubProjects({ repos }: { repos: Repo[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("all");

    // Get unique languages from repos
    const languages = useMemo(() => {
        const langs = repos
            .map(repo => repo.language)
            .filter((lang): lang is string => Boolean(lang))
            .filter((lang, index, arr) => arr.indexOf(lang) === index);
        return ["all", ...langs];
    }, [repos]);

    // Filter repos based on search and language
    const filteredRepos = useMemo(() => {
        return repos.filter(repo => {
            const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                repo.description?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesLanguage = selectedLanguage === "all" || repo.language === selectedLanguage;
            return matchesSearch && matchesLanguage;
        });
    }, [repos, searchTerm, selectedLanguage]);

    return (
        <motion.section
            className="py-20 bg-slate-50 dark:bg-slate-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Open Source & Experiments
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Explore my GitHub repositories, side projects, and coding experiments. 
                        Search and filter to find what interests you most.
                    </p>
                </motion.div>

                {/* Search and Filter Controls */}
                <motion.div 
                    className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto"
                    variants={fadeInUp}
                >
                    <div className="flex-1">
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                        />
                    </div>
                    <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    >
                        {languages.map(lang => (
                            <option key={lang} value={lang}>
                                {lang === "all" ? "All Languages" : lang}
                            </option>
                        ))}
                    </select>
                </motion.div>

                {/* Results count with animation */}
                <motion.div 
                    className="text-center mb-8" 
                    key={`results-${filteredRepos.length}`} // Key changes trigger re-animation
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-slate-600 dark:text-slate-400">
                        Showing <motion.span
                            key={filteredRepos.length}
                            initial={{ scale: 1.2, color: "#3B82F6" }}
                            animate={{ scale: 1, color: "inherit" }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredRepos.length}
                        </motion.span> of {repos.length} projects
                    </p>
                </motion.div>

                {/* Projects Grid with AnimatePresence */}
                <motion.div 
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredRepos.map((repo) => (
                            <ProjectCard key={repo.id} repo={repo} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredRepos.length === 0 && (
                    <AnimatePresence>
                        <motion.div 
                            className="text-center py-12 col-span-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="text-slate-500 dark:text-slate-400 text-lg">
                                No projects found matching your criteria. Try adjusting your search.
                            </p>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </motion.section>
    );
}

// Enhanced Project Card
function ProjectCard({ repo }: { repo: Repo }) {
    return (
        <motion.div
            className="group"
            layout
            variants={gridItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
        >
            <motion.a
                href={repo.homepage || repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
                variants={scaleOnHover}
            >
                <div className="h-full p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {repo.name}
                        </h4>
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm flex-1 mb-4 line-clamp-3">
                        {repo.description || "No description available."}
                    </p>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                            {repo.topics.slice(0, 3).map((topic) => (
                                <Badge
                                    key={topic}
                                    variant="outline"
                                    className="text-xs bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-400"
                                >
                                    {topic}
                                </Badge>
                            ))}
                            {repo.topics.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{repo.topics.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                            {repo.language && (
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span>{repo.language}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{repo.stargazers_count}</span>
                        </div>
                    </div>
                </div>
            </motion.a>
        </motion.div>
    );
}

// ───────────────────────────────────────────────────────────
//  5. Client-side fetch function
// ───────────────────────────────────────────────────────────
async function getRepos(): Promise<Repo[]> {
    const headers: HeadersInit = {
        Accept: "application/vnd.github+json",
        ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }),
    };

    try {
        const res = await fetch(
            "https://api.github.com/users/agraham02/repos?sort=updated&per_page=100",
            {
                headers,
            }
        );

        if (!res.ok) {
            console.error("GitHub fetch failed", await res.text());
            return [];
        }

        const data: Repo[] = await res.json();
        return data.filter(
            (r) =>
                !r.private && // skip private repos
                !r.fork && // skip forks
                r.description // only show repos with a description
        );
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}

// ───────────────────────────────────────────────────────────
//  6. Main Page Component
// ───────────────────────────────────────────────────────────
export default function ProjectsPage() {
    const [repos, setRepos] = React.useState<Repo[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchRepos() {
            setLoading(true);
            const data = await getRepos();
            setRepos(data);
            setLoading(false);
        }
        fetchRepos();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ProjectsHero />

            {/* Featured Projects */}
            <FeaturedProjects />

            {/* Project Statistics */}
            <ProjectStats />

            {/* GitHub Projects with Search/Filter */}
            {loading ? (
                <div className="py-20 text-center">
                    <div className="text-slate-600 dark:text-slate-300">Loading projects...</div>
                </div>
            ) : (
                <GitHubProjects repos={repos} />
            )}

            {/* Call to Action */}
            <CallToAction
                title="Ready to Collaborate?"
                subtitle="Let's build something amazing together! I'm always excited to work on new projects and bring innovative ideas to life."
                primaryButtonText="Start a Project"
                secondaryButtonText="View Resume"
                variant="default"
            />
        </div>
    );
}
