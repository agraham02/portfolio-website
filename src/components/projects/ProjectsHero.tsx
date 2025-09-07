"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProjects, type Project } from "@/lib/projectsData";

const releasedProjects = featuredProjects.filter(
    (p) =>
        p.status === "completed" &&
        (p.category === "web" || p.category === "mobile")
);

export default function ProjectsHero() {
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [snapCount, setSnapCount] = React.useState(0);
    const [paused, setPaused] = React.useState(false);

    // Sync pagination state with Embla
    React.useEffect(() => {
        if (!api) return;
        const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
        setSnapCount(api.scrollSnapList().length);
        onSelect();
        api.on("select", onSelect);
        api.on("reInit", () => {
            setSnapCount(api.scrollSnapList().length);
            onSelect();
        });
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    // Autoplay
    React.useEffect(() => {
        if (!api) return;
        const interval = setInterval(() => {
            if (!paused) api.scrollNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [api, paused]);

    return (
        <section
            aria-label="Released Projects"
            className="relative w-full min-h-[100svh]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
        >
            <Carousel
                className="h-[100svh] w-full"
                opts={{ loop: true, align: "start", duration: 24 }}
                setApi={setApi}
            >
                <CarouselContent className="h-full">
                    {releasedProjects.map((project, idx) => (
                        <CarouselItem key={project.id} className="h-full">
                            <Slide project={project} priority={idx === 0} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Nav controls */}
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border-none bg-background/70 backdrop-blur shadow-md hover:bg-background/90" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border-none bg-background/70 backdrop-blur shadow-md hover:bg-background/90" />

                {/* Pagination dots */}
                {snapCount > 1 ? (
                    <div
                        className="pointer-events-auto absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 shadow-sm backdrop-blur"
                        onFocus={() => setPaused(true)}
                        onBlur={() => setPaused(false)}
                    >
                        {Array.from({ length: snapCount }).map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={selectedIndex === i}
                                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                    selectedIndex === i
                                        ? "bg-primary"
                                        : "bg-foreground/30 hover:bg-foreground/50"
                                }`}
                                onClick={() => api?.scrollTo(i)}
                            />
                        ))}
                    </div>
                ) : null}
            </Carousel>
        </section>
    );
}

function Slide({
    project,
    priority,
}: {
    project: Project;
    priority?: boolean;
}) {
    const isVideo =
        project.image.endsWith(".mp4") || project.image.endsWith(".webm");

    return (
        <div className="relative h-[100svh] w-full">
            {/* Background media */}
            <div className="absolute inset-0 -z-10">
                {isVideo ? (
                    <video
                        className="h-full w-full object-cover"
                        src={project.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={`${project.title} preview video`}
                    />
                ) : (
                    <Image
                        src={project.image}
                        alt={`${project.title} background`}
                        fill
                        priority={priority}
                        className="object-cover"
                        sizes="100vw"
                    />
                )}
                {/* Gradient overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies?.length ? (
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <li key={tech}>
                                    <Badge
                                        variant="outline"
                                        className="bg-background/60 backdrop-blur"
                                    >
                                        {tech}
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    ) : null}

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.demoUrl ? (
                            <Button asChild className="shadow-md">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    View project
                                </a>
                            </Button>
                        ) : null}
                        {project.githubUrl ? (
                            <Button
                                asChild
                                variant="outline"
                                className="bg-background/60 backdrop-blur"
                            >
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Source code
                                </a>
                            </Button>
                        ) : null}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
