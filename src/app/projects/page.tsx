"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    ExternalLink,
    Star,
    GitBranch,
    Users,
    Code,
    Zap,
    Target,
    TrendingUp,
    Search,
    Filter,
    X,
    Play,
    Award,
    Lightbulb,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Types
interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    updated_at: string;
    created_at: string;
}

interface FeaturedProject {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    image: string;
    category: string;
    status: "Live" | "In Development" | "Completed";
    tags: string[];
    links: {
        live?: string;
        github?: string;
        demo?: string;
    };
    metrics: {
        users?: string;
        performance?: string;
        engagement?: string;
        downloads?: string;
    };
    caseStudy: {
        problem: string;
        solution: string;
        challenges: string[];
        technologies: string[];
        outcome: string;
        impact: string[];
        timeline: string;
        role: string;
        teamSize?: string;
    };
    gallery: string[];
}

// Featured projects data with case studies
const featuredProjects: FeaturedProject[] = [
    {
        id: "ecommerce-platform",
        title: "AI-Powered E-commerce Platform",
        subtitle: "Next-gen shopping experience with ML recommendations",
        description:
            "Full-stack e-commerce platform featuring AI-driven product recommendations, real-time inventory management, and seamless checkout experience.",
        longDescription:
            "A comprehensive e-commerce solution built with modern technologies, featuring AI-powered product recommendations, advanced search capabilities, real-time inventory tracking, and a highly optimized checkout process. The platform serves thousands of users daily with 99.9% uptime.",
        image: "/images/ecommerce-hero.jpg",
        category: "Full Stack",
        status: "Live",
        tags: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Stripe",
            "AI/ML",
        ],
        links: {
            live: "https://shop-ai.vercel.app",
            github: "https://github.com/agraham02/ecommerce-ai",
            demo: "https://demo.shop-ai.vercel.app",
        },
        metrics: {
            users: "10K+ Active Users",
            performance: "98% Lighthouse Score",
            engagement: "4.8/5 User Rating",
            downloads: "50K+ Orders Processed",
        },
        caseStudy: {
            problem:
                "Traditional e-commerce platforms struggle with personalization and user engagement, leading to high bounce rates and low conversion.",
            solution:
                "Built an AI-powered recommendation engine using collaborative filtering and machine learning to provide personalized shopping experiences.",
            challenges: [
                "Implementing real-time ML recommendations at scale",
                "Optimizing database queries for large product catalogs",
                "Creating seamless mobile-first checkout experience",
                "Integrating multiple payment providers securely",
            ],
            technologies: [
                "Next.js 14",
                "TypeScript",
                "Prisma ORM",
                "PostgreSQL",
                "Redis",
                "Stripe API",
                "TensorFlow.js",
                "Tailwind CSS",
            ],
            outcome:
                "Achieved 40% increase in conversion rates and 60% improvement in user engagement compared to traditional platforms.",
            impact: [
                "40% increase in conversion rates",
                "60% improvement in average session duration",
                "25% reduction in cart abandonment",
                "99.9% uptime with sub-200ms response times",
            ],
            timeline: "6 months from concept to production",
            role: "Lead Full-Stack Developer",
            teamSize: "4 developers",
        },
        gallery: [
            "/images/ecommerce-1.jpg",
            "/images/ecommerce-2.jpg",
            "/images/ecommerce-3.jpg",
        ],
    },
    {
        id: "task-management",
        title: "Collaborative Task Management App",
        subtitle: "Team productivity platform with real-time collaboration",
        description:
            "Modern task management application with real-time collaboration features, advanced analytics, and intuitive project visualization.",
        longDescription:
            "A sophisticated project management tool designed for modern teams, featuring real-time collaboration, advanced project analytics, customizable workflows, and intelligent task prioritization. Built with performance and user experience as top priorities.",
        image: "/images/taskapp-hero.jpg",
        category: "Web App",
        status: "Live",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
        links: {
            live: "https://taskflow-pro.vercel.app",
            github: "https://github.com/agraham02/taskflow-pro",
        },
        metrics: {
            users: "5K+ Teams",
            performance: "95% Lighthouse Score",
            engagement: "4.7/5 User Rating",
            downloads: "100K+ Tasks Created",
        },
        caseStudy: {
            problem:
                "Remote teams struggled with coordination and task visibility, leading to missed deadlines and communication gaps.",
            solution:
                "Developed a real-time collaborative platform with intelligent task prioritization and comprehensive project analytics.",
            challenges: [
                "Implementing real-time synchronization across multiple users",
                "Designing intuitive drag-and-drop interfaces",
                "Optimizing performance with large datasets",
                "Creating flexible permission systems",
            ],
            technologies: [
                "React 18",
                "Node.js",
                "Socket.io",
                "MongoDB",
                "Express.js",
                "JWT",
                "Framer Motion",
                "Chart.js",
            ],
            outcome:
                "Teams reported 35% improvement in project delivery times and 50% better task visibility.",
            impact: [
                "35% faster project completion",
                "50% improvement in task visibility",
                "90% user satisfaction rate",
                "70% reduction in missed deadlines",
            ],
            timeline: "4 months development cycle",
            role: "Full-Stack Developer & UI/UX Designer",
        },
        gallery: [
            "/images/taskapp-1.jpg",
            "/images/taskapp-2.jpg",
            "/images/taskapp-3.jpg",
        ],
    },
    {
        id: "weather-dashboard",
        title: "Advanced Weather Analytics Dashboard",
        subtitle: "Real-time weather data visualization and forecasting",
        description:
            "Comprehensive weather dashboard with advanced data visualization, historical analysis, and accurate forecasting capabilities.",
        longDescription:
            "An enterprise-grade weather analytics platform that aggregates data from multiple sources to provide accurate forecasts, historical trends, and real-time monitoring. Features interactive maps, customizable alerts, and detailed analytics.",
        image: "/images/weather-hero.jpg",
        category: "Data Visualization",
        status: "Completed",
        tags: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
        links: {
            live: "https://weather-analytics.vercel.app",
            github: "https://github.com/agraham02/weather-dashboard",
        },
        metrics: {
            users: "2K+ Users",
            performance: "96% Lighthouse Score",
            engagement: "4.9/5 User Rating",
            downloads: "1M+ Data Points Processed",
        },
        caseStudy: {
            problem:
                "Existing weather apps lacked comprehensive analytics and historical data comparison for professional use cases.",
            solution:
                "Built a sophisticated dashboard with multiple data sources, advanced visualizations, and predictive analytics.",
            challenges: [
                "Integrating multiple weather API sources",
                "Creating responsive data visualizations",
                "Handling large time-series datasets",
                "Implementing accurate forecast algorithms",
            ],
            technologies: [
                "Vue.js 3",
                "TypeScript",
                "D3.js",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Redis",
                "WebSockets",
            ],
            outcome:
                "Delivered 95% forecast accuracy and comprehensive analytics suite used by meteorological professionals.",
            impact: [
                "95% forecast accuracy rate",
                "Real-time data from 10+ sources",
                "60% faster data analysis workflow",
                "Custom alerting for critical weather events",
            ],
            timeline: "3 months intensive development",
            role: "Full-Stack Developer & Data Engineer",
        },
        gallery: [
            "/images/weather-1.jpg",
            "/images/weather-2.jpg",
            "/images/weather-3.jpg",
        ],
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const ProjectsPage = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("all");
    const [selectedProject, setSelectedProject] =
        useState<FeaturedProject | null>(null);
    const [activeFilter, setActiveFilter] = useState("all");

    // Fetch GitHub repos
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/agraham02/repos?sort=updated&per_page=50",
                    {
                        headers: {
                            Accept: "application/vnd.github+json",
                            ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
                                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                            }),
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setRepos(
                        data.filter(
                            (repo: Repo) =>
                                !repo.name.includes("fork") && repo.description
                        )
                    );
                }
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    // Filter repos
    const filteredRepos = useMemo(() => {
        return repos.filter((repo) => {
            const matchesSearch =
                repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                repo.description
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase());
            const matchesLanguage =
                selectedLanguage === "all" ||
                repo.language === selectedLanguage;
            return matchesSearch && matchesLanguage;
        });
    }, [repos, searchTerm, selectedLanguage]);

    // Get unique languages
    const languages = useMemo(() => {
        const langs = repos
            .map((repo) => repo.language)
            .filter((lang): lang is string => Boolean(lang))
            .filter((lang, index, arr) => arr.indexOf(lang) === index);
        return ["all", ...langs.sort()];
    }, [repos]);

    // Filter featured projects
    const filteredFeaturedProjects = useMemo(() => {
        if (activeFilter === "all") return featuredProjects;
        return featuredProjects.filter(
            (project) =>
                project.category
                    .toLowerCase()
                    .includes(activeFilter.toLowerCase()) ||
                project.status
                    .toLowerCase()
                    .includes(activeFilter.toLowerCase())
        );
    }, [activeFilter]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-10 dark:opacity-5"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            width: `${30 + Math.random() * 50}px`,
                            height: `${30 + Math.random() * 50}px`,
                        }}
                        animate={{
                            x: [0, 50, -50, 0],
                            y: [0, -50, 50, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 0.8, 1],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-sm" />
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <motion.section
                    className="pt-32 pb-20 px-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div variants={itemVariants} className="mb-6">
                            <Badge
                                variant="outline"
                                className="mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border-primary/20"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Portfolio Showcase
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
                        >
                            Featured Projects
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
                        >
                            Explore my latest work, from innovative web
                            applications to data-driven solutions. Each project
                            represents a unique challenge solved with creativity
                            and technical excellence.
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                        >
                            {[
                                {
                                    icon: Code,
                                    label: "Projects Built",
                                    value: "25+",
                                },
                                {
                                    icon: Star,
                                    label: "GitHub Stars",
                                    value: "150+",
                                },
                                {
                                    icon: Users,
                                    label: "Users Served",
                                    value: "10K+",
                                },
                                {
                                    icon: Award,
                                    label: "Success Rate",
                                    value: "98%",
                                },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-4 bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/30"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                                    <div className="text-lg font-bold">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Featured Projects Section */}
                <motion.section
                    className="py-20 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Featured Work
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                                Deep dive into my most impactful projects with
                                detailed case studies, technical insights, and
                                measurable outcomes.
                            </p>

                            {/* Filter Buttons */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    "all",
                                    "Full Stack",
                                    "Web App",
                                    "Data Visualization",
                                    "Live",
                                    "Completed",
                                ].map((filter) => (
                                    <Button
                                        key={filter}
                                        variant={
                                            activeFilter === filter
                                                ? "default"
                                                : "outline"
                                        }
                                        size="sm"
                                        onClick={() => setActiveFilter(filter)}
                                        className="capitalize"
                                    >
                                        {filter}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Featured Projects Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredFeaturedProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Card className="group h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                            {/* Project Image */}
                                            <div className="relative h-48 overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                                    <Code className="h-12 w-12 text-primary/60" />
                                                </div>
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button
                                                                variant="secondary"
                                                                size="sm"
                                                                className="backdrop-blur-sm"
                                                                onClick={() =>
                                                                    setSelectedProject(
                                                                        project
                                                                    )
                                                                }
                                                            >
                                                                <Eye className="h-4 w-4 mr-2" />
                                                                View Case Study
                                                            </Button>
                                                        </DialogTrigger>
                                                    </Dialog>
                                                </div>
                                            </div>

                                            {/* Project Content */}
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs"
                                                    >
                                                        {project.category}
                                                    </Badge>
                                                    <Badge
                                                        variant={
                                                            project.status ===
                                                            "Live"
                                                                ? "default"
                                                                : "secondary"
                                                        }
                                                        className="text-xs"
                                                    >
                                                        {project.status}
                                                    </Badge>
                                                </div>

                                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-primary font-medium mb-3">
                                                    {project.subtitle}
                                                </p>
                                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                    {project.description}
                                                </p>

                                                {/* Tech Stack */}
                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {project.tags
                                                        .slice(0, 3)
                                                        .map((tag) => (
                                                            <Badge
                                                                key={tag}
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    {project.tags.length >
                                                        3 && (
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-xs"
                                                        >
                                                            +
                                                            {project.tags
                                                                .length - 3}
                                                        </Badge>
                                                    )}
                                                </div>

                                                {/* Links */}
                                                <div className="flex gap-2">
                                                    {project.links.live && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="flex-1"
                                                            onClick={() =>
                                                                window.open(
                                                                    project
                                                                        .links
                                                                        .live,
                                                                    "_blank"
                                                                )
                                                            }
                                                        >
                                                            <ExternalLink className="h-3 w-3 mr-1" />
                                                            Live
                                                        </Button>
                                                    )}
                                                    {project.links.github && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="flex-1"
                                                            onClick={() =>
                                                                window.open(
                                                                    project
                                                                        .links
                                                                        .github,
                                                                    "_blank"
                                                                )
                                                            }
                                                        >
                                                            <Github className="h-3 w-3 mr-1" />
                                                            Code
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.section>

                {/* GitHub Projects Section */}
                <motion.section
                    className="py-20 px-4 bg-slate-50/50 dark:bg-slate-800/50"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Open Source & Experiments
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Explore my GitHub repositories, side projects,
                                and coding experiments. Filter and search to
                                find what interests you most.
                            </p>
                        </motion.div>

                        {/* Search and Filter */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="max-w-2xl mx-auto">
                                <div className="flex flex-col md:flex-row gap-4 mb-6">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Search projects..."
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                            className="pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <select
                                            value={selectedLanguage}
                                            onChange={(e) =>
                                                setSelectedLanguage(
                                                    e.target.value
                                                )
                                            }
                                            className="pl-10 pr-8 py-2 rounded-md border border-input bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm min-w-[140px]"
                                        >
                                            {languages.map((lang) => (
                                                <option key={lang} value={lang}>
                                                    {lang === "all"
                                                        ? "All Languages"
                                                        : lang}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Results count */}
                                <motion.div
                                    className="text-center text-sm text-muted-foreground"
                                    key={filteredRepos.length}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Showing {filteredRepos.length} of{" "}
                                    {repos.length} repositories
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* GitHub Projects Grid */}
                        {loading ? (
                            <div className="text-center py-20">
                                <motion.div
                                    className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full mx-auto"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <p className="text-muted-foreground mt-4">
                                    Loading repositories...
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence>
                                    {filteredRepos.map((repo) => (
                                        <motion.div
                                            key={repo.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <Card className="h-full p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                                            {repo.name}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                                            {repo.description ||
                                                                "No description available"}
                                                        </p>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() =>
                                                            window.open(
                                                                repo.html_url,
                                                                "_blank"
                                                            )
                                                        }
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </div>

                                                {/* Topics */}
                                                {repo.topics.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mb-4">
                                                        {repo.topics
                                                            .slice(0, 3)
                                                            .map((topic) => (
                                                                <Badge
                                                                    key={topic}
                                                                    variant="outline"
                                                                    className="text-xs"
                                                                >
                                                                    {topic}
                                                                </Badge>
                                                            ))}
                                                        {repo.topics.length >
                                                            3 && (
                                                            <Badge
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                +
                                                                {repo.topics
                                                                    .length - 3}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Stats */}
                                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-4">
                                                        {repo.language && (
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                                <span>
                                                                    {
                                                                        repo.language
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                        <div className="flex items-center gap-1">
                                                            <Star className="h-3 w-3" />
                                                            <span>
                                                                {
                                                                    repo.stargazers_count
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <GitBranch className="h-3 w-3" />
                                                            <span>
                                                                {
                                                                    repo.forks_count
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {filteredRepos.length === 0 && !loading && (
                            <motion.div
                                className="text-center py-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-muted-foreground text-lg">
                                    No repositories found matching your
                                    criteria.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedLanguage("all");
                                    }}
                                >
                                    <X className="h-4 w-4 mr-2" />
                                    Clear Filters
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </motion.section>
            </div>

            {/* Case Study Modal */}
            {selectedProject && (
                <Dialog
                    open={!!selectedProject}
                    onOpenChange={() => setSelectedProject(null)}
                >
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">
                                {selectedProject.title}
                            </DialogTitle>
                        </DialogHeader>

                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger value="case-study">
                                    Case Study
                                </TabsTrigger>
                                <TabsTrigger value="technical">
                                    Technical
                                </TabsTrigger>
                                <TabsTrigger value="impact">Impact</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="mt-6">
                                <div className="space-y-6">
                                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                                        <Code className="h-16 w-16 text-primary/60" />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            {selectedProject.subtitle}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedProject.longDescription}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {Object.entries(
                                            selectedProject.metrics
                                        ).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="text-center p-3 bg-muted rounded-lg"
                                            >
                                                <div className="font-semibold">
                                                    {value}
                                                </div>
                                                <div className="text-sm text-muted-foreground capitalize">
                                                    {key
                                                        .replace(
                                                            /([A-Z])/g,
                                                            " $1"
                                                        )
                                                        .trim()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        {selectedProject.links.live && (
                                            <Button
                                                onClick={() =>
                                                    window.open(
                                                        selectedProject.links
                                                            .live,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                View Live
                                            </Button>
                                        )}
                                        {selectedProject.links.github && (
                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    window.open(
                                                        selectedProject.links
                                                            .github,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <Github className="h-4 w-4 mr-2" />
                                                Source Code
                                            </Button>
                                        )}
                                        {selectedProject.links.demo && (
                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    window.open(
                                                        selectedProject.links
                                                            .demo,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <Play className="h-4 w-4 mr-2" />
                                                Demo
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="case-study" className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Target className="h-5 w-5 text-red-500" />
                                            <h3 className="text-lg font-semibold">
                                                Problem Statement
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedProject.caseStudy.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Lightbulb className="h-5 w-5 text-yellow-500" />
                                            <h3 className="text-lg font-semibold">
                                                Solution
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedProject.caseStudy.solution}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Zap className="h-5 w-5 text-orange-500" />
                                            <h3 className="text-lg font-semibold">
                                                Key Challenges
                                            </h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {selectedProject.caseStudy.challenges.map(
                                                (challenge, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                        <span className="text-muted-foreground">
                                                            {challenge}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            <h3 className="text-lg font-semibold">
                                                Outcome
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedProject.caseStudy.outcome}
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="technical" className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Technology Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.caseStudy.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="text-sm"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-2">
                                                Project Details
                                            </h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">
                                                        Timeline:
                                                    </span>
                                                    <span>
                                                        {
                                                            selectedProject
                                                                .caseStudy
                                                                .timeline
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">
                                                        Role:
                                                    </span>
                                                    <span>
                                                        {
                                                            selectedProject
                                                                .caseStudy.role
                                                        }
                                                    </span>
                                                </div>
                                                {selectedProject.caseStudy
                                                    .teamSize && (
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">
                                                            Team Size:
                                                        </span>
                                                        <span>
                                                            {
                                                                selectedProject
                                                                    .caseStudy
                                                                    .teamSize
                                                            }
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2">
                                                Category & Status
                                            </h4>
                                            <div className="space-y-2">
                                                <Badge variant="outline">
                                                    {selectedProject.category}
                                                </Badge>
                                                <Badge
                                                    variant={
                                                        selectedProject.status ===
                                                        "Live"
                                                            ? "default"
                                                            : "secondary"
                                                    }
                                                >
                                                    {selectedProject.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="impact" className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <TrendingUp className="h-5 w-5 text-green-500" />
                                            <h3 className="text-lg font-semibold">
                                                Measurable Impact
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedProject.caseStudy.impact.map(
                                                (impact, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                                                    >
                                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                        <span className="text-sm">
                                                            {impact}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {Object.entries(
                                            selectedProject.metrics
                                        ).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="text-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg"
                                            >
                                                <div className="text-2xl font-bold text-primary">
                                                    {value}
                                                </div>
                                                <div className="text-sm text-muted-foreground capitalize">
                                                    {key
                                                        .replace(
                                                            /([A-Z])/g,
                                                            " $1"
                                                        )
                                                        .trim()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default ProjectsPage;
