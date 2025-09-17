"use client";
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import MediaNotAvailable from "../MediaNotAvailable";

interface EnhancedVideoProps
    extends React.VideoHTMLAttributes<HTMLVideoElement> {
    fallbackSize?: "sm" | "md" | "lg";
    showLoadingSpinner?: boolean;
    loadingClassName?: string;
    loadingTimeoutMs?: number;
    onLoadComplete?: () => void;
    onError?: () => void;
}

export default function EnhancedVideo({
    src,
    className = "",
    fallbackSize = "md",
    showLoadingSpinner = true,
    loadingClassName = "",
    loadingTimeoutMs = 1500,
    onLoadComplete,
    onError,
    ...props
}: EnhancedVideoProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleCanPlay = useCallback(() => {
        setIsLoading(false);
        onLoadComplete?.();
    }, [onLoadComplete]);

    const handleError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
        onError?.();
    }, [onError]);

    // Auto-hide loading after a configurable timeout - videos load quickly
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, loadingTimeoutMs);

        return () => clearTimeout(timeout);
    }, [src, loadingTimeoutMs]);

    // If there's an error or no src, show fallback
    if (hasError || !src) {
        return (
            <MediaNotAvailable
                type="video"
                size={fallbackSize}
                className={className}
            />
        );
    }

    return (
        <div className={`relative ${className}`}>
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
                <video
                    className={className}
                    src={src}
                    onCanPlay={handleCanPlay}
                    onError={handleError}
                    {...props}
                />
            </motion.div>
        </div>
    );
}
