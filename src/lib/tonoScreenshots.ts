import fs from "node:fs";
import path from "node:path";
import { CHAPTER_KEYS, type Screenshots } from "@/components/tono/content";

const DIRECTORY = path.join(process.cwd(), "public", "tono", "screens");
const EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

/** The first file named `<name>.<ext>` in the screenshots folder, as a public URL. */
const find = (name: string): string | undefined => {
    const ext = EXTENSIONS.find((candidate) => fs.existsSync(path.join(DIRECTORY, `${name}.${candidate}`)));
    return ext ? `/tono/screens/${name}.${ext}` : undefined;
};

/**
 * Real app screenshots dropped into public/tono/screens, found at build time.
 * Files are named `NN-key.png` (for example `02-words.png`), with an optional
 * `NN-key-dark.png` for dark mode. Chapters with no file keep their drawn screen.
 * See TONO_SCREENSHOTS.md for what to capture.
 */
export function findTonoScreenshots(): Screenshots {
    const found: Screenshots = {};
    CHAPTER_KEYS.forEach((key, index) => {
        const base = `${String(index).padStart(2, "0")}-${key}`;
        const light = find(base);
        if (light) found[key] = { light, dark: find(`${base}-dark`) };
    });
    return found;
}
