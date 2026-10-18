type SectionHeadingProps = {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
};

/** A section's small mono label, big headline and optional lead-in, left aligned. */
export default function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
    return (
        <div className="space-y-5">
            <p className="font-mono text-xs text-muted-foreground">{eyebrow}</p>
            <h2 id={id} className="text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {title}
            </h2>
            {description ? <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p> : null}
        </div>
    );
}
