/**
 * Design System Tokens
 * Centralized theme values for spacing, typography, radii, and color palettes.
 * Use these tokens throughout the app - DO NOT hard-code values.
 */

export const tokens = {
    radius: {
        xs: 8,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 28,
    },
    spacing: {
        xxs: 4,
        xs: 8,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
        "2xl": 32,
        "3xl": 40,
    },
    typography: {
        title: 24,
        subtitle: 18,
        body: 16,
        small: 14,
        tiny: 12,
        weight: {
            regular: "400" as const,
            medium: "600" as const,
            bold: "700" as const,
        },
    },
    light: {
        bg: "#F9FAFB",
        surface: "#FFFFFF",
        text: "#1F2937",
        muted: "#64748B",
        primary: "#00BF86",
        accent: "#64748B",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        border: "#E5E7EB",
    },
    dark: {
        bg: "#121212",
        surface: "#18181b",
        text: "#F1F5F9",
        muted: "#94A3B8",
        primary: "#00A574",
        accent: "#94A3B8",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        border: "#27272a",
    },
};

export type ColorScheme = "light" | "dark";
export type ThemeColors = typeof tokens.light;
