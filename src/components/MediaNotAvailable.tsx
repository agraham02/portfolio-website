"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImageOff, AlertCircle, VideoOff } from "lucide-react";

interface MediaNotAvailableProps {
    className?: string;
    showText?: boolean;
    size?: "sm" | "md" | "lg";
    type?: "image" | "video";
}

export default function MediaNotAvailable({ 
    className = "", 
    showText = true,
    size = "md",
    type = "image"
}: MediaNotAvailableProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16"
    };

    const textSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
    };

    const IconComponent = type === "video" ? VideoOff : ImageOff;
    const fallbackText = type === "video" ? "Video not available" : "Image not available";

    return (
        <motion.div 
            className={`flex flex-col items-center justify-center w-full h-full bg-muted/20 border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 ${className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col items-center gap-2"
            >
                <div className="relative">
                    <IconComponent 
                        className={`${sizeClasses[size]} text-muted-foreground/60`}
                    />
                    <motion.div
                        className="absolute -top-1 -right-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    >
                        <AlertCircle className="w-4 h-4 text-destructive/70" />
                    </motion.div>
                </div>
                
                {showText && (
                    <motion.p 
                        className={`${textSizes[size]} text-foreground text-center font-medium`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        {fallbackText}
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
}

// Backward compatibility export
export { MediaNotAvailable as ImageNotAvailable };
