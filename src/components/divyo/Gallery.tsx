"use client";
import { motion } from "motion/react";
import EnhancedImage from "@/components/ui/enhanced-image";
import { fadeInUp } from "@/lib/animations";

const images = [
    { src: "/screenshots/scan-camera.png", alt: "Scan Camera" },
    { src: "/screenshots/edit-items.png", alt: "Edit Items" },
    { src: "/screenshots/preview.png", alt: "Preview" },
    { src: "/screenshots/summary.png", alt: "Summary" },
    { src: "/screenshots/history.png", alt: "History" },
];

export default function Gallery() {
    return (
        <section
            id="gallery"
            aria-labelledby="gallery-heading"
            className="py-20 sm:py-28 md:py-36 bg-background"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-16 sm:mb-20 text-center space-y-4">
                    <h2
                        id="gallery-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        See it in action
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        A glimpse of the Divyo experience
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                    {images.map((img, i) => (
                        <motion.figure
                            key={img.src}
                            className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border/50 bg-muted/30 shadow-md hover:shadow-xl hover:border-primary/20 [transition:box-shadow_300ms,border-color_300ms,background-color_300ms] will-change-[transform,opacity]"
                            {...fadeInUp({
                                i,
                                distance: 28,
                                duration: 0.48,
                                delayPerIndex: 0.06,
                                viewportAmount: 0.25,
                            })}
                            tabIndex={0}
                            role="img"
                            aria-label={img.alt}
                        >
                            <EnhancedImage
                                src={img.src}
                                alt={img.alt}
                                fill
                                loading="lazy"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            />
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
