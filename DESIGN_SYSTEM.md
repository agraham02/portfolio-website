# Portfolio Website Design System

**Version:** 1.0  
**Last Updated:** January 26, 2026  
**Status:** Finalized  
**Related Document:** PORTFOLIO_REDESIGN_PRD.md

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Grid & Layout](#grid--layout)
6. [Components](#components)
7. [Animation Guidelines](#animation-guidelines)
8. [Accessibility](#accessibility)
9. [Implementation](#implementation)

---

## Design Principles

### Core Values

1. **Clean & Modern**: Minimal clutter, maximum clarity
2. **Performance First**: Design with performance in mind, optimize intelligently
3. **Accessibility**: WCAG 2.1 AA compliance minimum
4. **Responsive**: Mobile-first approach, works beautifully on all devices
5. **Consistent**: Predictable patterns and behaviors

### Visual Language

- **Professional yet approachable**: Blue color palette conveys trustworthiness
- **Motion-driven**: Smooth animations create engaging experiences
- **Content-focused**: Design serves content, not the other way around
- **Intentional whitespace**: Generous spacing for breathing room

---

## Color Palette

### Theme System

**Primary Mode**: Dark theme  
**Secondary Mode**: Light theme  
**Toggle**: Manual override with system preference detection

### Dark Theme (Primary)

#### Primary Colors

```css
--blue-50: #eff6ff; /* Lightest blue accent */
--blue-100: #dbeafe;
--blue-200: #bfdbfe;
--blue-300: #93c5fd;
--blue-400: #60a5fa; /* Interactive elements */
--blue-500: #3b82f6; /* Primary brand blue */
--blue-600: #2563eb; /* Primary hover state */
--blue-700: #1d4ed8;
--blue-800: #1e40af;
--blue-900: #1e3a8a; /* Deepest blue */
```

#### Neutral Colors (Dark Theme)

```css
--background: #0a0a0a; /* Main background */
--background-secondary: #111111; /* Card/section backgrounds */
--background-tertiary: #1a1a1a; /* Elevated elements */

--foreground: #fafafa; /* Primary text */
--foreground-secondary: #a1a1aa; /* Secondary text */
--foreground-tertiary: #71717a; /* Muted text */

--border: #27272a; /* Default borders */
--border-hover: #3f3f46; /* Hover state borders */
```

#### Semantic Colors (Dark Theme)

```css
--success: #10b981; /* Green for success states */
--warning: #f59e0b; /* Amber for warnings */
--error: #ef4444; /* Red for errors */
--info: #3b82f6; /* Blue for info (matches primary) */
```

### Light Theme (Secondary)

#### Primary Colors

```css
/* Same blue scale, used differently in light context */
--blue-50: #eff6ff;
--blue-500: #3b82f6; /* Primary brand blue */
--blue-600: #2563eb; /* Primary hover state */
--blue-700: #1d4ed8; /* Active/pressed state */
```

#### Neutral Colors (Light Theme)

```css
--background: #ffffff; /* Main background */
--background-secondary: #f9fafb; /* Card/section backgrounds */
--background-tertiary: #f3f4f6; /* Elevated elements */

--foreground: #18181b; /* Primary text */
--foreground-secondary: #52525b; /* Secondary text */
--foreground-tertiary: #a1a1aa; /* Muted text */

--border: #e4e4e7; /* Default borders */
--border-hover: #d4d4d8; /* Hover state borders */
```

#### Semantic Colors (Light Theme)

```css
--success: #059669; /* Darker green for light backgrounds */
--warning: #d97706; /* Darker amber */
--error: #dc2626; /* Darker red */
--info: #2563eb; /* Darker blue */
```

### Accent Colors

```css
--accent-gradient-start: #3b82f6; /* Blue-500 */
--accent-gradient-end: #1d4ed8; /* Blue-700 */

/* For special highlights, CTAs */
--accent-highlight: #60a5fa; /* Blue-400 */
```

### Usage Guidelines

#### Backgrounds

- **Main**: Use `--background` for page background
- **Cards/Sections**: Use `--background-secondary` for elevated content
- **Interactive elements**: Use `--background-tertiary` for hover states

#### Text

- **Headings**: Use `--foreground` (highest contrast)
- **Body text**: Use `--foreground` for readability
- **Secondary info**: Use `--foreground-secondary` (metadata, captions)
- **Muted text**: Use `--foreground-tertiary` (placeholders, disabled)

#### Interactive Elements

- **Primary CTA**: `--blue-500` background, white text
- **Hover**: `--blue-600`
- **Active/Pressed**: `--blue-700`
- **Links**: `--blue-400` (better visibility on dark backgrounds)
- **Link hover**: `--blue-300`

---

## Typography

### Font Stack

#### Display/Headings

**Primary Option**: Google Font (1-2 fonts via next/font)

Recommended options:

1. **Inter** - Modern, highly legible, variable font
2. **Space Grotesk** - Geometric, distinctive, great for headings
3. **Manrope** - Professional, clean, excellent variable font

```css
--font-display: "Inter Variable", "Space Grotesk", system-ui, sans-serif;
```

#### Body Text

**System Font Stack** (Performance optimized):

```css
--font-body:
    system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell",
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
```

#### Monospace (Code)

```css
--font-mono:
    "Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", "Consolas",
    "Liberation Mono", "Courier New", monospace;
```

### Type Scale

Based on modular scale with 1.25 ratio (major third):

```css
--text-xs: 0.75rem; /* 12px - Small labels, captions */
--text-sm: 0.875rem; /* 14px - Secondary text, metadata */
--text-base: 1rem; /* 16px - Body text */
--text-lg: 1.125rem; /* 18px - Emphasized body text */
--text-xl: 1.25rem; /* 20px - Small headings, lead text */
--text-2xl: 1.5rem; /* 24px - H4 */
--text-3xl: 1.875rem; /* 30px - H3 */
--text-4xl: 2.25rem; /* 36px - H2 */
--text-5xl: 3rem; /* 48px - H1 */
--text-6xl: 3.75rem; /* 60px - Hero headings */
--text-7xl: 4.5rem; /* 72px - Large hero text */
```

### Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Letter Spacing

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### Typography Usage

#### Headings

```css
h1,
.heading-1 {
    font-family: var(--font-display);
    font-size: var(--text-5xl);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
}

h2,
.heading-2 {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
}

h3,
.heading-3 {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-snug);
}

h4,
.heading-4 {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-snug);
}
```

#### Body Text

```css
.body-large {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
}

.body-base {
    font-size: var(--text-base);
    line-height: var(--leading-normal);
}

.body-small {
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
}
```

#### Hero Text

```css
.hero-heading {
    font-family: var(--font-display);
    font-size: var(--text-6xl);
    font-weight: var(--font-extrabold);
    line-height: var(--leading-none);
    letter-spacing: var(--tracking-tighter);
}

@media (min-width: 768px) {
    .hero-heading {
        font-size: var(--text-7xl);
    }
}
```

---

## Spacing System

### Base Unit

**Base**: 4px (0.25rem)

### Scale

```css
--space-0: 0;
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
--space-40: 10rem; /* 160px */
--space-48: 12rem; /* 192px */
```

### Section Spacing

```css
--section-sm: var(--space-16); /* 64px - Small sections */
--section-md: var(--space-24); /* 96px - Medium sections */
--section-lg: var(--space-32); /* 128px - Large sections */
--section-xl: var(--space-48); /* 192px - Extra large sections */
```

### Component Spacing

```css
--component-gap-sm: var(--space-2); /* 8px - Tight spacing */
--component-gap-md: var(--space-4); /* 16px - Default spacing */
--component-gap-lg: var(--space-6); /* 24px - Generous spacing */
```

---

## Grid & Layout

### Container

```css
.container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-6); /* 24px */
    padding-right: var(--space-6);
}

@media (min-width: 768px) {
    .container {
        padding-left: var(--space-8); /* 32px */
        padding-right: var(--space-8);
    }
}
```

### Breakpoints

```css
--breakpoint-sm: 640px; /* Mobile landscape */
--breakpoint-md: 768px; /* Tablet portrait */
--breakpoint-lg: 1024px; /* Tablet landscape / Small desktop */
--breakpoint-xl: 1280px; /* Desktop */
--breakpoint-2xl: 1536px; /* Large desktop */
```

### Grid System (12-column)

```css
.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-6);
}

/* Common column spans */
.col-span-full {
    grid-column: 1 / -1;
}
.col-span-6 {
    grid-column: span 6;
}
.col-span-4 {
    grid-column: span 4;
}
.col-span-3 {
    grid-column: span 3;
}
```

### Content Width Guidelines

- **Max content width**: 65ch (for optimal readability)
- **Max hero width**: 1280px
- **Narrow content**: 45ch (for focused content)
- **Wide content**: Full container width

---

## Components

### Buttons

#### Primary Button

```css
.btn-primary {
    background: var(--blue-500);
    color: white;
    padding: var(--space-3) var(--space-6);
    border-radius: 0.5rem;
    font-weight: var(--font-semibold);
    font-size: var(--text-base);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    background: var(--blue-600);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

.btn-primary:active {
    background: var(--blue-700);
    transform: translateY(0);
}
```

#### Secondary Button

```css
.btn-secondary {
    background: transparent;
    color: var(--blue-400);
    border: 2px solid var(--blue-400);
    padding: var(--space-3) var(--space-6);
    border-radius: 0.5rem;
    font-weight: var(--font-semibold);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
    background: var(--blue-500);
    border-color: var(--blue-500);
    color: white;
    transform: translateY(-2px);
}
```

#### Ghost Button

```css
.btn-ghost {
    background: transparent;
    color: var(--foreground-secondary);
    padding: var(--space-3) var(--space-6);
    border-radius: 0.5rem;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-ghost:hover {
    background: var(--background-secondary);
    color: var(--foreground);
}
```

### Cards

#### Default Card

```css
.card {
    background: var(--background-secondary);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: var(--space-6);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    border-color: var(--blue-500);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
}
```

#### Project Card

```css
.project-card {
    background: var(--background-secondary);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
    transform: translateY(-8px);
}

.project-card-image {
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.project-card-content {
    padding: var(--space-6);
}
```

### Form Elements

#### Input

```css
.input {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    background: var(--background-secondary);
    border: 2px solid var(--border);
    border-radius: 0.5rem;
    color: var(--foreground);
    font-size: var(--text-base);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus {
    outline: none;
    border-color: var(--blue-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input::placeholder {
    color: var(--foreground-tertiary);
}
```

#### Textarea

```css
.textarea {
    width: 100%;
    min-height: 120px;
    padding: var(--space-3) var(--space-4);
    background: var(--background-secondary);
    border: 2px solid var(--border);
    border-radius: 0.5rem;
    color: var(--foreground);
    font-size: var(--text-base);
    font-family: var(--font-body);
    resize: vertical;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.textarea:focus {
    outline: none;
    border-color: var(--blue-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

### Navigation

#### Navbar

```css
.navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
}

.nav-link {
    color: var(--foreground-secondary);
    font-weight: var(--font-medium);
    padding: var(--space-2) var(--space-4);
    border-radius: 0.5rem;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
    color: var(--foreground);
    background: var(--background-secondary);
}

.nav-link.active {
    color: var(--blue-400);
    background: rgba(59, 130, 246, 0.1);
}
```

### Tags/Badges

#### Tech Badge

```css
.tech-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    background: var(--background-secondary);
    border: 1px solid var(--border);
    border-radius: 9999px;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--foreground-secondary);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-badge:hover {
    border-color: var(--blue-400);
    color: var(--blue-400);
    background: rgba(59, 130, 246, 0.1);
}
```

---

## Animation Guidelines

### Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration Scale

```css
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-medium: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
```

### Animation Principles

#### Micro-interactions

- **Hover states**: 200ms transition
- **Button clicks**: 150ms for press, 200ms for release
- **Input focus**: 200ms with ring animation

#### Page Transitions

- **Fade in**: 300ms ease-out
- **Slide up**: 500ms ease-out with 50px translation
- **Stagger children**: 100ms delay between each

#### Scroll Animations

- **Reveal on scroll**: 500ms ease-out
- **Parallax**: Subtle, 0.1-0.3 factor
- **Sticky headers**: Immediate with smooth blur transition

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Common Animations

#### Fade In Up

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 500ms var(--ease-out) backwards;
}
```

#### Scale In

```css
@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.scale-in {
    animation: scaleIn 300ms var(--ease-out) backwards;
}
```

#### Shimmer Effect

```css
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

.shimmer {
    background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
}
```

---

## Accessibility

### Focus Indicators

```css
*:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
    border-radius: 0.25rem;
}

/* For interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
}
```

### Color Contrast Requirements

- **Normal text (< 18px)**: 4.5:1 minimum contrast ratio
- **Large text (≥ 18px)**: 3:1 minimum contrast ratio
- **UI components**: 3:1 minimum contrast ratio

### Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use `<h1>` through `<h6>` in proper hierarchy
- Use `<button>` for actions, `<a>` for navigation
- Include proper ARIA labels where needed

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Skip navigation link for screen readers
- Focus management for modals and overlays

### Screen Reader Support

```html
<!-- Example: Visually hidden but screen reader accessible -->
<span class="sr-only"> Navigate to homepage </span>
```

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

---

## Implementation

### CSS Custom Properties Setup

Create `globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        /* Color system */
        --background: 255 255 255;
        --foreground: 24 24 27;
        /* ... other light mode colors */
    }

    .dark {
        --background: 10 10 10;
        --foreground: 250 250 250;
        /* ... other dark mode colors */
    }

    * {
        @apply border-border;
    }

    body {
        @apply bg-background text-foreground;
        font-family: var(--font-body);
    }
}
```

### Tailwind Configuration

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: "hsl(var(--blue-500))",
                // ... other colors
            },
            fontFamily: {
                display: "var(--font-display)",
                body: "var(--font-body)",
                mono: "var(--font-mono)",
            },
            spacing: {
                // Use Tailwind's default spacing scale (based on 4px)
            },
            animation: {
                "fade-in-up": "fadeInUp 500ms ease-out backwards",
                "scale-in": "scaleIn 300ms ease-out backwards",
                shimmer: "shimmer 2s infinite",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

export default config;
```

### Theme Hook Implementation

Create `hooks/useTheme.ts`:

```typescript
"use client";

import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        // Check localStorage
        const stored = localStorage.getItem("theme");

        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme };
}
```

### Usage Examples

#### Button Component

```tsx
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
}

export function Button({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all duration-200",
                {
                    "bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30":
                        variant === "primary",
                    "border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white":
                        variant === "secondary",
                    "text-foreground/70 hover:bg-secondary hover:text-foreground":
                        variant === "ghost",
                },
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
```

---

## Design Tokens Reference

### Quick Reference Card

| Category          | Token            | Value                                |
| ----------------- | ---------------- | ------------------------------------ |
| **Primary Color** | `--blue-500`     | `#3b82f6`                            |
| **Background**    | `--background`   | `#0a0a0a` (dark)                     |
| **Text**          | `--foreground`   | `#fafafa` (dark)                     |
| **Border**        | `--border`       | `#27272a` (dark)                     |
| **Spacing Base**  | `--space-4`      | `1rem` (16px)                        |
| **Border Radius** | Default          | `0.5rem` (8px)                       |
| **Transition**    | Default          | `200ms cubic-bezier(0.4, 0, 0.2, 1)` |
| **Font Body**     | `--font-body`    | System font stack                    |
| **Font Display**  | `--font-display` | Google Font (Inter/Space Grotesk)    |

---

**Design System Version:** 1.0  
**Last Review:** January 26, 2026  
**Next Review:** After Phase 1 implementation
