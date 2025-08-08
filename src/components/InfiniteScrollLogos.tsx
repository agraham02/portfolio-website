// src/components/InfiniteScrollLogos.tsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tooltip as RadixTooltip, TooltipProvider } from "./ui/tooltip";

interface IconItem {
    id: string | number; // Unique key for React list rendering
    icon: React.ReactNode; // The actual icon component instance (e.g., <FaReact />)
    label?: string; // Optional human-readable name for tooltip / accessibility
    displayName?: string; // Explicit display name to prioritize in tooltip
}

interface InfiniteScrollLogosProps {
    icons: IconItem[]; // Icon items with stable ids
    iconSize?: string; // Tailwind size classes (e.g., 'text-4xl')
    iconColor?: string; // Base color
    iconHoverColor?: string; // Hover color util (e.g., 'hover:text-white')
    speed?: "normal" | "fast" | "slow"; // Animation speed preset
    decorative?: boolean; // If true (default) hides from a11y tree
    ariaLabel?: string; // Accessible label when not decorative
    pauseOnHover?: boolean; // Pause animation on hover/focus for readability
    showTooltips?: boolean; // Show native title tooltips for icons
    fallbackLabelPrefix?: string; // Prefix when generating fallback labels
    useCustomTooltip?: boolean; // Use custom styled tooltip instead of native title
    tooltipClassName?: string; // Extra classes for tooltip styling
    useRadixTooltip?: boolean; // Prefer Radix tooltip implementation
}

const InfiniteScrollLogos: React.FC<InfiniteScrollLogosProps> = ({
    icons = [],
    iconSize = "text-4xl",
    iconColor = "text-gray-500",
    iconHoverColor = "hover:text-gray-200",
    speed = "normal",
    decorative = true,
    ariaLabel,
    pauseOnHover = true,
    showTooltips = true,
    fallbackLabelPrefix = "Icon",
    useCustomTooltip = true,
    tooltipClassName = "",
    useRadixTooltip = true,
}) => {
    // Memoize duplicated list (2x) to avoid recalculation each render.
    const extendedIcons = useMemo(() => {
        if (!icons || icons.length === 0) return [];
        if (icons.length === 1) {
            // If only one icon, duplicate more times to avoid visual stutter.
            return Array.from({ length: 6 }).map((_, i) => ({
                ...icons[0],
                id: `${icons[0].id}-dup-${i}`,
            }));
        }
        return [...icons, ...icons];
    }, [icons]);

    // Reduced motion preference (accessibility) – disable animation if user prefers reduced motion.
    const [reduceMotion, setReduceMotion] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    // Map speed prop to the custom CSS classes defined in globals.css
    const speedClasses: Record<string, string> = {
        fast: "animate-infinite-scroll-fast",
        normal: "animate-infinite-scroll-normal",
        slow: "animate-infinite-scroll-slow",
    };

    const animationClass = reduceMotion
        ? ""
        : speedClasses[speed] || speedClasses.normal;

    // Pause on hover/focus (uses arbitrary properties to control animation-play-state)
    const pauseUtility =
        pauseOnHover && !reduceMotion
            ? "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
            : "";

    // Mask style memoized (minor perf win: stable object reference)
    const maskStyle = useMemo<React.CSSProperties>(
        () => ({
            maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }),
        []
    );

    // Ref could be used later for dynamic duplication logic (future perf enhancement)
    const trackRef = useRef<HTMLDivElement | null>(null);

    if (extendedIcons.length === 0) {
        return null; // Nothing to render
    }

    return (
        <div
            className={`infinite-scroll-container group w-full overflow-hidden relative py-5 ${
                decorative ? "" : "list-none m-0 p-0"
            }`}
            style={maskStyle}
            {...(decorative
                ? { "aria-hidden": true }
                : {
                      role: "list",
                      "aria-label": ariaLabel || "Scrolling icons",
                  })}
            data-reduced-motion={reduceMotion ? "true" : "false"}
        >
            <TooltipProvider>
                <div
                    ref={trackRef}
                    className={`flex flex-nowrap items-center w-max ${animationClass} ${pauseUtility}`}
                >
                    {extendedIcons.map((item, index) => {
                        const reactType: any = (item.icon as any)?.type;
                        // Attempt to derive a readable name if no explicit label provided
                        const derivedName =
                            item.displayName ||
                            item.label ||
                            reactType?.displayName ||
                            reactType?.name;
                        const label =
                            derivedName ||
                            `${fallbackLabelPrefix} ${index + 1}`;
                        const baseIcon = (
                            <div
                                key={`${item.id}-loop-${index}`}
                                className={`relative group/icon flex-shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12 ${iconSize} ${iconColor} ${iconHoverColor} transition-colors duration-300 ease-in-out`}
                                {...(!decorative
                                    ? { role: "listitem", "aria-label": label }
                                    : { "aria-hidden": true })}
                                {...(showTooltips &&
                                !useCustomTooltip &&
                                !useRadixTooltip
                                    ? { title: label }
                                    : {})}
                            >
                                {item.icon}
                                {showTooltips &&
                                    useCustomTooltip &&
                                    !useRadixTooltip && (
                                        <span
                                            className={`pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 scale-90 opacity-0 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[10px] font-medium tracking-wide text-white shadow-lg ring-1 ring-black/30 transition duration-150 group-hover/icon:opacity-100 group-hover/icon:scale-100 group-focus-within/icon:opacity-100 group-focus-within/icon:scale-100 ${tooltipClassName}`}
                                            role="tooltip"
                                        >
                                            {label}
                                            <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
                                        </span>
                                    )}
                            </div>
                        );
                        if (showTooltips && useRadixTooltip) {
                            return (
                                <RadixTooltip
                                    key={`${item.id}-loop-${index}`}
                                    label={label}
                                >
                                    {baseIcon}
                                </RadixTooltip>
                            );
                        }
                        return baseIcon;
                    })}
                </div>
            </TooltipProvider>
        </div>
    );
};

export default InfiniteScrollLogos;
