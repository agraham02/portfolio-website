"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Sparkles, ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/projectsData";

function FeaturedProjectsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        duration: 30,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Autoplay (lightweight)
    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            if (!emblaApi) return;
            emblaApi.scrollNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    // Track selected slide
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div
            className="w-full h-full relative"
            aria-label="Featured projects carousel"
        >
            <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                    {featuredProjects.map((project) => {
                        const isVideo = project.image.endsWith(".mp4");
                        return (
                            <div
                                className="relative flex-[0_0_100%] w-full h-full group"
                                key={project.id}
                                aria-roledescription="slide"
                                aria-label={project.title}
                            >
                                {isVideo ? (
                                    <video
                                        className="w-full h-full object-cover"
                                        src={project.image}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                )}
                                {/* Overlay content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-3 text-white pointer-events-none">
                                    <motion.h3
                                        className="text-2xl lg:text-3xl font-bold drop-shadow-lg text-right"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-sm lg:text-base line-clamp-3 max-w-xl drop-shadow-md text-right leading-relaxed self-end"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    <motion.div
                                        className="flex flex-wrap justify-end gap-2 mt-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {project.technologies
                                            .slice(0, 4)
                                            .map((tech, index) => (
                                                <motion.span
                                                    key={tech}
                                                    className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium border border-white/30"
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.5 + index * 0.1,
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Enhanced navigation dots */}
            <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {featuredProjects.map((_, i) => (
                    <motion.button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        className={
                            "relative h-3 w-3 rounded-full transition-all duration-300 " +
                            (i === selectedIndex
                                ? "bg-white shadow-lg ring-2 ring-white/60 scale-125"
                                : "bg-white/40 hover:bg-white/70 hover:scale-110")
                        }
                        whileHover={{ scale: i === selectedIndex ? 1.25 : 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {i === selectedIndex && (
                            <motion.div
                                className="absolute inset-0 bg-white rounded-full"
                                layoutId="activeIndicator"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}

export default function ProjectsHero() {
    return (
        <div className="min-h-screen flex lg:flex-row flex-col relative overflow-hidden">
            {/* Left content section */}
            <div className="flex flex-1 flex-col items-center justify-center p-8 lg:p-12 z-30 text-center lg:text-left relative">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-10" />

                <div className="relative z-10 max-w-2xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20"
                    >
                        <Sparkles className="w-4 h-4" />
                        Featured Projects
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                    >
                        <span className="block">My</span>
                        <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                            Projects
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
                    >
                        A showcase of work spanning{" "}
                        <span className="text-primary font-medium">
                            web apps
                        </span>
                        ,{" "}
                        <span className="text-primary font-medium">
                            mobile experiences
                        </span>
                        ,{" "}
                        <span className="text-primary font-medium">
                            AI systems
                        </span>
                        , and{" "}
                        <span className="text-primary font-medium">
                            game prototypes
                        </span>
                        .
                    </motion.p>

                    {/* Stats or highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-6 items-center justify-center lg:justify-start"
                    >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Code2 className="w-4 h-4 text-primary" />
                            <span className="font-medium text-foreground">
                                {featuredProjects.length}+
                            </span>
                            Featured Works
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Actively Building
                        </div>
                        <motion.div
                            className="hidden lg:flex items-center gap-2 text-sm text-primary cursor-pointer hover:text-primary/80 transition-colors"
                            whileHover={{ x: 5 }}
                        >
                            <span>Explore Below</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* Right carousel section */}
            <div className="flex-2 relative bg-gradient-to-br from-primary/5 to-secondary/10">
                <FeaturedProjectsCarousel />

                {/* Gradient overlays for better text readability */}
                <div className="hidden lg:block">
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
                </div>
                <div className="block lg:hidden">
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-background/20 via-transparent to-background/20 z-20 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
