"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import {
    Code2,
    Palette,
    Zap,
    Shield,
    Smartphone,
    Cloud,
    Database,
    GitBranch,
    Brain,
} from "lucide-react";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const features: Feature[] = [
    {
        icon: <Code2 className="h-8 w-8" />,
        title: "Full-Stack Development",
        description:
            "End-to-end application development with modern frameworks and best practices",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: <Palette className="h-8 w-8" />,
        title: "UI/UX Design",
        description:
            "Creating beautiful, intuitive interfaces that provide exceptional user experiences",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: <Cloud className="h-8 w-8" />,
        title: "Cloud Architecture",
        description:
            "Scalable cloud solutions using AWS, Azure, and modern DevOps practices",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: <Smartphone className="h-8 w-8" />,
        title: "Mobile Development",
        description:
            "Cross-platform mobile apps with React Native and Flutter for iOS and Android",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: <Database className="h-8 w-8" />,
        title: "Database Design",
        description:
            "Efficient database architecture and optimization for high-performance applications",
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: <Shield className="h-8 w-8" />,
        title: "Security & Performance",
        description:
            "Implementing robust security measures and performance optimization strategies",
        color: "from-red-500 to-pink-500",
    },
    {
        icon: <GitBranch className="h-8 w-8" />,
        title: "DevOps & CI/CD",
        description:
            "Automated deployment pipelines and infrastructure as code for reliable releases",
        color: "from-teal-500 to-green-500",
    },
    {
        icon: <Brain className="h-8 w-8" />,
        title: "AI/ML Integration",
        description:
            "Integrating machine learning models and AI capabilities into web applications",
        color: "from-violet-500 to-purple-500",
    },
];

const FeaturesSection = () => {
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
        },
    };

    return (
        <section className="py-20 px-12 bg-gradient-to-b from-background to-secondary/10">
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
                        What I Bring to the Table
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive skill set covering the entire software
                        development lifecycle, from conception to deployment and
                        beyond.
                    </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
                                <motion.div
                                    className="h-full flex flex-col"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Icon with gradient background */}
                                    <div className="mb-6">
                                        <motion.div
                                            className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-white">
                                                {feature.icon}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Hover effect indicator */}
                                    <motion.div
                                        className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/100 transition-all duration-500"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                    />
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">
                            Always learning and adapting to new technologies
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
