"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ExternalLink,
    Github,
    Play,
    Calendar,
    Code2,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type Project } from "@/lib/projectsData";
import EnhancedImage from "../ui/enhanced-image";
import EnhancedVideo from "../ui/enhanced-video";

const categoryIcons = {
    web: <Code2 className="w-4 h-4" />,
    mobile: <Play className="w-4 h-4" />,
    ai: <Sparkles className="w-4 h-4" />,
    backend: <Code2 className="w-4 h-4" />,
};

const categoryColors = {
    web: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
    mobile: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
    ai: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
    backend:
        "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",
};

export default function ProjectCard({
    project,
    isActive,
}: {
    project: Project;
    isActive: boolean;
}) {
    const isVideo =
        project.image.endsWith(".mp4") || project.image.endsWith(".MP4");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isActive ? 1 : 0.7,
                y: 0,
                scale: isActive ? 1 : 0.95,
            }}
            transition={{
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="relative h-full"
        >
            <Card
                className={cn(
                    "relative h-full bg-gradient-to-br from-background to-muted/20",
                    "border-border/40 backdrop-blur-sm",
                    "transition-all duration-300 ease-out",
                    "hover:shadow-lg hover:shadow-primary/5",
                    "hover:border-primary/20",
                    "overflow-hidden group"
                )}
            >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project Image/Video */}
                <div className="relative aspect-video overflow-hidden bg-muted/30">
                    {isVideo ? (
                        <EnhancedVideo
                            src={project.image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            autoPlay
                            loop
                            muted
                            playsInline
                            fallbackSize="md"
                            showLoadingSpinner={true}
                            loadingClassName="rounded-t-lg"
                        />
                    ) : (
                        <EnhancedImage
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fallbackSize="md"
                            showLoadingSpinner={true}
                            loadingClassName="rounded-t-lg"
                        />
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                        <Badge
                            variant={
                                project.status === "completed"
                                    ? "default"
                                    : "secondary"
                            }
                            className={cn(
                                "text-xs font-medium backdrop-blur-sm",
                                project.status === "completed"
                                    ? "bg-green-500/90 text-white border-green-500"
                                    : "bg-yellow-500/90 text-white border-yellow-500"
                            )}
                        >
                            {project.status === "completed"
                                ? "Completed"
                                : "In Progress"}
                        </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                        <Badge
                            variant="outline"
                            className={cn(
                                "text-xs font-medium backdrop-blur-sm border",
                                categoryColors[project.category]
                            )}
                        >
                            {categoryIcons[project.category]}
                            <span className="ml-1 capitalize">
                                {project.category}
                            </span>
                        </Badge>
                    </div>
                </div>

                <CardHeader className="space-y-4 pb-4">
                    {/* Year */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors duration-200">
                            {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs px-2 py-0.5 bg-muted/50 hover:bg-muted transition-colors"
                            >
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                            <Badge
                                variant="secondary"
                                className="text-xs px-2 py-0.5 bg-muted/50"
                            >
                                +{project.technologies.length - 4}
                            </Badge>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        {project.demoUrl && (
                            <Button
                                asChild
                                size="sm"
                                className="flex-1 group/btn"
                            >
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                                    <span>Live Demo</span>
                                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                </a>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="group/btn"
                            >
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Github className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                                    <span className="hidden sm:inline">
                                        Code
                                    </span>
                                </a>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
