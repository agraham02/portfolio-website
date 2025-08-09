"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGridProps {
    images: {
        src: string;
        alt: string;
        className?: string;
        orientation?: "landscape" | "portrait" | "square";
    }[];
    className?: string;
}

export default function ImageGrid({ images, className }: ImageGridProps) {
    // Simple inline animation helpers
    const itemInitial = { opacity: 0, y: 20, scale: 0.95 };
    const itemAnimate = { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } };

    // Generate grid layout based on number of images
    const getGridLayout = (count: number) => {
        switch (count) {
            case 1:
                return "grid-cols-1";
            case 2:
                return "grid-cols-1 md:grid-cols-2";
            case 3:
                return "grid-cols-2 md:grid-cols-3";
            case 4:
                return "grid-cols-2";
            case 5:
                return "grid-cols-2 md:grid-cols-3";
            case 6:
                return "grid-cols-2 md:grid-cols-3";
            default:
                return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        }
    };

    // Define bento box patterns for different image counts
    const getBentoPattern = (
        index: number,
        total: number,
        orientation: string = "landscape"
    ) => {
        // Base classes for all images
        const baseClasses = "relative overflow-hidden rounded-lg";

        // Aspect ratio based on orientation
        const getAspectRatio = (defaultType: string) => {
            if (orientation === "portrait") {
                return "aspect-[3/4]"; // Portrait aspect ratio
            }
            if (orientation === "square") {
                return "aspect-square";
            }
            // Default landscape orientations
            if (defaultType === "video") {
                return "aspect-video";
            }
            return "aspect-square";
        };

        // Responsive height classes for bento layout
        if (total === 1) {
            return cn(baseClasses, getAspectRatio("video"));
        }

        if (total === 2) {
            return cn(
                baseClasses,
                `${getAspectRatio("square")} md:${getAspectRatio("video")}`
            );
        }

        if (total === 3) {
            if (index === 0) {
                return cn(
                    baseClasses,
                    `md:col-span-2 ${getAspectRatio("video")}`
                );
            }
            return cn(baseClasses, getAspectRatio("square"));
        }

        if (total === 4) {
            // Create a more balanced 2x2 grid
            if (index === 0) {
                return cn(
                    baseClasses,
                    `${getAspectRatio("video")} md:${getAspectRatio("square")}`
                );
            }
            if (index === 1) {
                return cn(baseClasses, getAspectRatio("square"));
            }
            if (index === 2) {
                return cn(
                    baseClasses,
                    `md:col-span-2 ${getAspectRatio("video")}`
                );
            }
            return cn(baseClasses, getAspectRatio("square"));
        }

        if (total === 5) {
            if (index === 0) {
                return cn(
                    baseClasses,
                    `md:col-span-2 md:row-span-2 ${getAspectRatio(
                        "square"
                    )} md:aspect-[4/5]`
                );
            }
            if (index === 1 || index === 2) {
                return cn(baseClasses, getAspectRatio("square"));
            }
            if (index === 3 || index === 4) {
                return cn(
                    baseClasses,
                    `${getAspectRatio("video")} md:${getAspectRatio("square")}`
                );
            }
            return cn(baseClasses, getAspectRatio("square"));
        }

        if (total === 6) {
            if (index === 0 || index === 3) {
                return cn(
                    baseClasses,
                    `md:col-span-2 ${getAspectRatio("video")}`
                );
            }
            return cn(baseClasses, getAspectRatio("square"));
        }

        // Default pattern for more than 6 images
        if (index % 5 === 0) {
            return cn(baseClasses, `md:col-span-2 ${getAspectRatio("video")}`);
        }
        if (index % 3 === 0) {
            return cn(
                baseClasses,
                `md:row-span-2 ${getAspectRatio("square")} md:aspect-[4/5]`
            );
        }
        return cn(baseClasses, getAspectRatio("square"));
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <motion.div
            className={cn(
                "grid gap-4 w-full",
                getGridLayout(images.length),
                className
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {images.map((image, index) => (
                <motion.div
                    key={`${image.src}-${index}`}
                    className={cn(
                        getBentoPattern(
                            index,
                            images.length,
                            image.orientation || "landscape"
                        ),
                        image.className,
                        "border-2"
                    )}
                    initial={itemInitial}
                    whileInView={itemAnimate}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        style={{
                            boxShadow:
                                "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
                        }}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
