// src/components/InfiniteScrollLogos.tsx
import React from "react";

interface IconItem {
    id: string | number; // Unique key for React list rendering
    icon: React.ReactNode; // The actual icon component instance (e.g., <FaReact />)
}

interface InfiniteScrollLogosProps {
    icons: IconItem[]; // Changed prop name from logos to icons
    iconSize?: string; // Tailwind class for icon size (e.g., 'text-4xl', 'h-10 w-10')
    iconColor?: string; // Tailwind class for default icon color (e.g., 'text-gray-500')
    iconHoverColor?: string; // Tailwind class for hover icon color (e.g., 'hover:text-white')
    speed?: "normal" | "fast" | "slow";
}

const InfiniteScrollLogos: React.FC<InfiniteScrollLogosProps> = ({
    icons = [],
    iconSize = "text-4xl", // Default icon size (adjust as needed)
    iconColor = "text-gray-500", // Default icon color (like grayscale/opacity)
    iconHoverColor = "hover:text-gray-200", // Default hover color (brighter)
    speed = "normal",
}) => {
    // Duplicate the logos array for seamless looping
    const extendedIcons = [...icons, ...icons];

    // Map speed prop to the custom CSS classes defined in globals.css
    const speedClasses = {
        fast: "animate-infinite-scroll-fast",
        normal: "animate-infinite-scroll-normal",
        slow: "animate-infinite-scroll-slow",
    };

    return (
        <div
            className="infinite-scroll-container w-full overflow-hidden relative py-5"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <div
                className={`flex flex-nowrap items-center w-max ${speedClasses[speed]}`}
            >
                {/* Render the duplicated icons */}
                {extendedIcons.map((item, index) => (
                    <div
                        // Use item.id and index for a more robust key
                        key={`${item.id}-${index}`}
                        // Apply color, size, and transition directly to the icon wrapper
                        className={`flex-shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12 ${iconSize} ${iconColor} ${iconHoverColor} transition-colors duration-300 ease-in-out`}
                        aria-hidden="true" // Hide decorative icons from screen readers
                    >
                        {item.icon} {/* Render the icon component directly */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollLogos;
