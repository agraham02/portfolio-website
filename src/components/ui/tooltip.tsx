"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";

export interface TooltipProps {
    label: string;
    children: React.ReactElement;
    side?: TooltipPrimitive.TooltipContentProps["side"];
    align?: TooltipPrimitive.TooltipContentProps["align"];
    sideOffset?: number;
    delayDuration?: number;
    className?: string;
    asChild?: boolean;
}

// Provider wrapper (optional external usage too)
export const TooltipProvider = TooltipPrimitive.Provider;

export function Tooltip({
    label,
    children,
    side = "top",
    align = "center",
    sideOffset = 6,
    delayDuration = 150,
    className,
    asChild = true,
}: TooltipProps) {
    return (
        <TooltipPrimitive.Root delayDuration={delayDuration}>
            <TooltipPrimitive.Trigger asChild={asChild}>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    className={clsx(
                        "z-50 select-none rounded-md bg-gray-900 px-2 py-1 text-xs font-medium leading-none text-white shadow-md ring-1 ring-black/30 data-[state=delayed-open]:data-[side=top]:animate-in data-[state=delayed-open]:data-[side=top]:fade-in data-[state=delayed-open]:data-[side=top]:zoom-in-95",
                        "data-[side=bottom]:animate-in data-[side=bottom]:fade-in data-[side=bottom]:slide-in-from-top-1",
                        "data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1",
                        className
                    )}
                >
                    {label}
                    <TooltipPrimitive.Arrow
                        className="fill-gray-900"
                        width={10}
                        height={5}
                    />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
    );
}
