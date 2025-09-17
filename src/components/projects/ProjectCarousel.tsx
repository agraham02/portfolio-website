"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { type Project } from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({
    title,
    subtitle,
    projects,
}: {
    title: string;
    subtitle: string;
    projects: Project[];
}) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const getItemsPerRow = () => {
        if (typeof window === "undefined") return 3; // assume desktop on SSR
        const w = window.innerWidth;
        if (w >= 1024) return 3; // lg
        if (w >= 768) return 2; // md
        return 1; // base
    };
    const [itemsPerRow, setItemsPerRow] = useState<number>(getItemsPerRow());

    React.useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    React.useEffect(() => {
        const onResize = () => setItemsPerRow(getItemsPerRow());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const shouldUseCarousel = projects.length > itemsPerRow;

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                    <p className="text-muted-foreground">{subtitle}</p>
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        No projects to show here yet.
                    </p>
                ) : shouldUseCarousel ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        <Carousel
                            opts={{
                                align: "start",
                                dragFree: true,
                                loop: false,
                                skipSnaps: false,
                                containScroll: "trimSnaps",
                            }}
                            setApi={setApi}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {projects.map((project) => (
                                    <CarouselItem
                                        key={project.id}
                                        className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                                    >
                                        <ProjectCard
                                            project={project}
                                            isActive={true}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="absolute -left-12 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground" />
                            <CarouselNext className="absolute -right-12 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground" />
                        </Carousel>

                        {/* pagination dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: count }).map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-200",
                                        index === current
                                            ? "bg-primary scale-125"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    )}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p) => (
                            <ProjectCard
                                key={p.id}
                                project={p}
                                isActive={true}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
