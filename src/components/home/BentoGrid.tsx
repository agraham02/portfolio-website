"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Code2,
    Globe,
    Sparkles,
    Users,
    Trophy,
    MessageSquare,
    Calendar,
    MapPin,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";
// Removed unused Image import

const BentoGrid = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get to know me better through these highlights of my
                        journey and expertise
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto"
                >
                    {/* Large card - About me */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2 lg:row-span-2"
                    >
                        <Card className="p-8 h-full bg-gradient-to-br from-card to-secondary/5 border-2 hover:border-primary/20 transition-all duration-300 group">
                            <motion.div
                                className="h-full flex flex-col justify-between"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <Code2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold">
                                            About Me
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        I&apos;m a passionate software engineer with
                                        expertise in full-stack development,
                                        cloud computing, and modern web
                                        technologies. I love solving complex
                                        problems and creating elegant solutions
                                        that make a real impact.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <Badge variant="secondary">
                                            Problem Solver
                                        </Badge>
                                        <Badge variant="secondary">
                                            Team Player
                                        </Badge>
                                        <Badge variant="secondary">
                                            Innovation Focused
                                        </Badge>
                                    </div>
                                </div>
                                <Link href="/about">
                                    <Button
                                        variant="outline"
                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                    >
                                        Learn More About Me
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Location */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-6 h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300">
                            <motion.div
                                className="text-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4">
                                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Based in</h4>
                                <p className="text-sm text-muted-foreground">
                                    New York, USA
                                </p>
                                <div className="mt-3 text-xs text-green-600 dark:text-green-400">
                                    Available globally
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Experience */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-6 h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                            <motion.div
                                className="text-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-4">
                                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-semibold mb-2">
                                    Experience
                                </h4>
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    3+
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Years
                                </p>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Current Focus */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2"
                    >
                        <Card className="p-6 h-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
                            <motion.div
                                className="flex items-center justify-between h-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                            <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <h4 className="text-lg font-semibold">
                                            Currently Working On
                                        </h4>
                                    </div>
                                    <p className="text-muted-foreground mb-2">
                                        Building scalable web applications with
                                        React, Node.js, and cloud technologies
                                    </p>
                                    <Badge
                                        variant="outline"
                                        className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
                                    >
                                        Full-Stack Development
                                    </Badge>
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="text-4xl opacity-20"
                                >
                                    ⚡
                                </motion.div>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-6 h-full bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-300">
                            <motion.div
                                className="text-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-fit mx-auto mb-4">
                                    <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Awards</h4>
                                <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                                    5+
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Certifications
                                </p>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Collaboration */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-6 h-full bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300">
                            <motion.div
                                className="text-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full w-fit mx-auto mb-4">
                                    <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h4 className="font-semibold mb-2">
                                    Team Size
                                </h4>
                                <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                    10+
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Collaborators
                                </p>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Latest Project Showcase */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2"
                    >
                        <Card className="p-6 h-full bg-gradient-to-br from-card to-muted/5 border-2 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                            <motion.div
                                className="h-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Globe className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-semibold">
                                        Latest Project
                                    </h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <Globe className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                                            <p className="text-sm text-muted-foreground">
                                                Project Screenshot
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold mb-2">
                                            E-Commerce Platform
                                        </h5>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            A full-stack e-commerce solution
                                            built with Next.js, Node.js, and
                                            PostgreSQL
                                        </p>
                                        <div className="flex gap-2">
                                            <Badge variant="secondary">
                                                React
                                            </Badge>
                                            <Badge variant="secondary">
                                                Node.js
                                            </Badge>
                                            <Badge variant="secondary">
                                                PostgreSQL
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Card>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                            <motion.div
                                className="text-center h-full flex flex-col justify-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-semibold mb-3">
                                    Let&apos;s Connect
                                </h4>
                                <Button
                                    size="sm"
                                    className="w-full group-hover:scale-105 transition-transform"
                                >
                                    Say Hello
                                </Button>
                            </motion.div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
