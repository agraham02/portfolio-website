"use client";
import React, { useState, useCallback } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import MediaNotAvailable from "../MediaNotAvailable";

interface EnhancedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
    fallbackSize?: "sm" | "md" | "lg";
    showLoadingSpinner?: boolean;
    loadingClassName?: string;
    onLoadComplete?: () => void;
    onError?: () => void;
}

export default function EnhancedImage({
    src,
    alt,
    className = "",
    fallbackSize = "md",
    showLoadingSpinner = true,
    loadingClassName = "",
    onLoadComplete,
    onError,
    ...props
}: EnhancedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
        onLoadComplete?.();
    }, [onLoadComplete]);

    const handleError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
        onError?.();
    }, [onError]);

    // If there's an error or no src, show fallback
    if (hasError || !src) {
        return (
            <MediaNotAvailable
                type="image"
                size={fallbackSize}
                className={className}
            />
        );
    }

    return (
        <>
            <AnimatePresence>
                {isLoading && showLoadingSpinner && (
                    <motion.div
                        className={`absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm z-10 ${loadingClassName}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Loader2 className="w-6 h-6 text-primary" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            </motion.div>
        </>
    );
}

// Utility hook for handling image loading state
export function useImageLoader() {
    const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
    const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

    const handleImageLoad = useCallback((src: string) => {
        setLoadingImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(src);
            return newSet;
        });
    }, []);

    const handleImageError = useCallback((src: string) => {
        setLoadingImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(src);
            return newSet;
        });
        setErrorImages((prev) => new Set(prev).add(src));
    }, []);

    const startLoading = useCallback((src: string) => {
        setLoadingImages((prev) => new Set(prev).add(src));
        setErrorImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(src);
            return newSet;
        });
    }, []);

    return {
        isLoading: (src: string) => loadingImages.has(src),
        hasError: (src: string) => errorImages.has(src),
        handleImageLoad,
        handleImageError,
        startLoading,
    };
}
