import clsx from "clsx";
import type { ReactNode } from "react";

type SectionProps = {
    /** Anchor id for in-page links. The heading inside should use `${id}-title`. */
    id: string;
    children: ReactNode;
    className?: string;
};

/** A section below the story: a hairline above it, then a two-column grid (heading left, content right). */
export default function Section({ id, children, className }: SectionProps) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className={clsx("scroll-mt-20 border-t border-border py-20 sm:py-28", className)}>
            <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.35fr] lg:gap-20">{children}</div>
        </section>
    );
}
