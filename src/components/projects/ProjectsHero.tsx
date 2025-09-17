"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
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
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-2 text-white pointer-events-none">
                                    <h3 className="text-2xl font-semibold drop-shadow text-right">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm line-clamp-3 max-w-xl drop-shadow text-right">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap justify-end gap-2 mt-2">
                                        {project.technologies
                                            .slice(0, 4)
                                            .map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-white/20 backdrop-blur-sm rounded px-2 py-0.5 text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Dots */}
            <div className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredProjects.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        className={
                            "h-2.5 w-2.5 rounded-full transition " +
                            (i === selectedIndex
                                ? "bg-white shadow ring-2 ring-white/60"
                                : "bg-white/40 hover:bg-white/70")
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default function ProjectsHero() {
    return (
        <div className="min-h-screen flex lg:flex-row flex-col">
            <div className="flex flex-1 flex-col items-center justify-center p-8 z-30 text-center lg:text-left bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    My Projects
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                    A showcase of work spanning web apps, mobile experiences, AI
                    systems, and game prototypes.
                </p>
            </div>
            <div className="flex-2 relative bg-blue-500">
                <FeaturedProjectsCarousel />
                {/* <div className="absolute left-0 top-0 w-full h-full bg-black/70" /> */}
                <div className="hidden lg:block">
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                </div>
                <div className="block lg:hidden">
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
