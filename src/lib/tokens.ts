// Re-export the Divyo design tokens for global consumption across the app
// This keeps to the spec of using `/lib/tokens.ts` while preserving the
// existing location under `src/app/divyo/lib/tokens.ts`.

export {
    tokens,
    type ColorScheme,
    type ThemeColors,
} from "@/app/divyo/lib/tokens";
