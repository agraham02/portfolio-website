"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnhancedImage from "@/components/ui/enhanced-image";
import EnhancedVideo from "@/components/ui/enhanced-video";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

type MediaType = "image" | "video";

interface MediaItem {
    src: string;
    alt: string;
    type: MediaType;
    aspectRatio?: string; // e.g., "9/16" for portrait phone
}

const mediaItems: MediaItem[] = [
    {
        src: "/screenshots/scan-camera.png",
        alt: "Scan Camera",
        type: "image",
        aspectRatio: "9/16",
    },
    {
        src: "/screenshots/edit-items.png",
        alt: "Edit Items",
        type: "image",
        aspectRatio: "9/16",
    },
    {
        src: "/screenshots/preview.png",
        alt: "Preview",
        type: "image",
        aspectRatio: "9/16",
    },
    {
        src: "/screenshots/summary.png",
        alt: "Summary",
        type: "image",
        aspectRatio: "9/16",
    },
    {
        src: "/screenshots/history.png",
        alt: "History",
        type: "image",
        aspectRatio: "9/16",
    },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [mainViewportRef, emblaMainApi] = useEmblaCarousel({
        loop: false,
        duration: 30,
    });
    const [thumbViewportRef, emblaThumbApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const scrollPrev = useCallback(() => {
        emblaMainApi?.scrollPrev();
    }, [emblaMainApi]);

    const scrollNext = useCallback(() => {
        emblaMainApi?.scrollNext();
    }, [emblaMainApi]);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbApi) return;
        const selected = emblaMainApi.selectedScrollSnap();
        setSelectedIndex(selected);
        setCanScrollPrev(emblaMainApi.canScrollPrev());
        setCanScrollNext(emblaMainApi.canScrollNext());
        emblaThumbApi.scrollTo(selected);
    }, [emblaMainApi, emblaThumbApi]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollPrev();
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [scrollPrev, scrollNext]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();
        emblaMainApi.on("select", onSelect);
        emblaMainApi.on("reInit", onSelect);

        return () => {
            emblaMainApi.off("select", onSelect);
            emblaMainApi.off("reInit", onSelect);
        };
    }, [emblaMainApi, onSelect]);

    const selectedMedia = mediaItems[selectedIndex];

    return (
        <section
            id="gallery"
            aria-labelledby="gallery-heading"
            className="py-20 sm:py-28 md:py-36 bg-background"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="mb-16 sm:mb-20 text-center space-y-4"
                    {...fadeInUp({ i: 0, distance: 20, duration: 0.6 })}
                >
                    <h2
                        id="gallery-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        See it in action
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        A glimpse of the Divyo experience
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {/* Main Preview with Gradient Backdrop */}
                    <motion.div
                        className="relative"
                        {...fadeInUp({
                            i: 1,
                            distance: 30,
                            duration: 0.6,
                            delayPerIndex: 0.2,
                        })}
                    >
                        {/* Gradient backdrop */}
                        <div className="absolute inset-0 -mx-6 sm:-mx-8 lg:-mx-12 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />

                        <div className="relative group">
                            {/* Navigation Arrows - Desktop Only */}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                className={cn(
                                    "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex",
                                    "h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg",
                                    "hover:bg-background hover:scale-110 transition-all duration-300",
                                    "disabled:opacity-0 disabled:cursor-not-allowed",
                                    "opacity-0 group-hover:opacity-100"
                                )}
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                className={cn(
                                    "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex",
                                    "h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg",
                                    "hover:bg-background hover:scale-110 transition-all duration-300",
                                    "disabled:opacity-0 disabled:cursor-not-allowed",
                                    "opacity-0 group-hover:opacity-100"
                                )}
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>

                            <div
                                className="overflow-hidden"
                                ref={mainViewportRef}
                            >
                                <div className="flex touch-pan-y">
                                    {mediaItems.map((media, index) => (
                                        <div
                                            key={media.src}
                                            className="flex-[0_0_100%] min-w-0 px-2"
                                        >
                                            {/* Constrain preview size to viewport */}
                                            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                                                <AnimatePresence mode="wait">
                                                    {selectedIndex ===
                                                        index && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.95,
                                                                y: 20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                                y: 0,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                scale: 0.95,
                                                                y: -20,
                                                            }}
                                                            transition={{
                                                                duration: 0.4,
                                                                ease: "easeInOut",
                                                            }}
                                                            className="relative rounded-3xl overflow-hidden border-2 border-border/50 bg-muted/20 shadow-2xl hover:shadow-primary/20 transition-shadow duration-500"
                                                            style={{
                                                                aspectRatio:
                                                                    media.aspectRatio ||
                                                                    "9/16",
                                                            }}
                                                        >
                                                            {media.type ===
                                                            "image" ? (
                                                                <EnhancedImage
                                                                    src={
                                                                        media.src
                                                                    }
                                                                    alt={
                                                                        media.alt
                                                                    }
                                                                    fill
                                                                    priority={
                                                                        index ===
                                                                        0
                                                                    }
                                                                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                                                                    className="object-cover"
                                                                />
                                                            ) : (
                                                                <EnhancedVideo
                                                                    src={
                                                                        media.src
                                                                    }
                                                                    controls
                                                                    playsInline
                                                                    muted
                                                                    loop
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Caption */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={selectedMedia.alt}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-center text-lg text-muted-foreground"
                        >
                            {selectedMedia.alt}
                        </motion.p>
                    </AnimatePresence>

                    {/* Thumbnail Carousel */}
                    <motion.div
                        className="overflow-hidden max-w-2xl mx-auto py-2 px-1"
                        ref={thumbViewportRef}
                        {...fadeInUp({
                            i: 2,
                            distance: 20,
                            duration: 0.6,
                            delayPerIndex: 0.2,
                        })}
                    >
                        <div className="flex justify-around touch-pan-x">
                            {mediaItems.map((media, index) => (
                                <button
                                    key={media.src}
                                    type="button"
                                    onClick={() => onThumbClick(index)}
                                    className={cn(
                                        "relative mx-2 flex-[0_0_auto] w-[80px] sm:w-[90px] md:w-[100px] rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                        selectedIndex === index
                                            ? "border-primary shadow-lg shadow-primary/30 scale-105 ring-2 ring-primary/50"
                                            : "border-border/40 hover:border-primary/60 shadow-sm hover:shadow-md hover:scale-[1.02]"
                                    )}
                                    style={{
                                        aspectRatio:
                                            media.aspectRatio || "9/16",
                                    }}
                                    aria-label={`View ${media.alt}`}
                                    aria-pressed={selectedIndex === index}
                                >
                                    {media.type === "image" ? (
                                        <EnhancedImage
                                            src={media.src}
                                            alt={media.alt}
                                            fill
                                            sizes="100px"
                                            className={cn(
                                                "object-cover transition-all duration-300",
                                                selectedIndex !== index &&
                                                    "opacity-50 group-hover:opacity-80 grayscale-[30%] group-hover:grayscale-0"
                                            )}
                                        />
                                    ) : (
                                        <video
                                            src={media.src}
                                            muted
                                            playsInline
                                            className={cn(
                                                "w-full h-full object-cover transition-all duration-300",
                                                selectedIndex !== index &&
                                                    "opacity-50 group-hover:opacity-80"
                                            )}
                                        />
                                    )}

                                    {/* Active indicator overlay with smooth animation */}
                                    {selectedIndex === index && (
                                        <motion.div
                                            layoutId="activeThumb"
                                            className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none bg-primary/5"
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 35,
                                            }}
                                        />
                                    )}

                                    {/* Subtle gradient overlay on inactive thumbnails */}
                                    {selectedIndex !== index && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
