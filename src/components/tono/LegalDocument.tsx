import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import IntonationCurve from "./IntonationCurve";
import { TONO_EMAIL } from "./content";

export type LegalSection = {
    id: string;
    title: string;
    body: ReactNode;
};

type LegalDocumentProps = {
    title: string;
    effective: string;
    intro: ReactNode;
    sections: LegalSection[];
    /** The other legal page, linked at the end. */
    other: { href: string; label: string };
};

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

/* Building blocks for the text of a policy */
export const P = ({ children }: { children: ReactNode }) => <p className="leading-relaxed text-muted-foreground">{children}</p>;

export const UL = ({ children }: { children: ReactNode }) => (
    <ul className="list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">{children}</ul>
);

export const B = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-foreground">{children}</strong>;

const LINK = `font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground ${FOCUS}`;

/** Inline link: pages on this site use client-side navigation, everything else a plain anchor. */
export const A = ({ href, children }: { href: string; children: ReactNode }) =>
    href.startsWith("/") ? (
        <Link href={href} className={LINK}>
            {children}
        </Link>
    ) : (
        <a href={href} className={LINK}>
            {children}
        </a>
    );

export const H3 = ({ children }: { children: ReactNode }) => (
    <h3 className="pt-2 text-lg font-semibold tracking-tight text-foreground">{children}</h3>
);

/** A page of policy text: heading, contents list, numbered sections, and a way back. */
export default function LegalDocument({ title, effective, intro, sections, other }: LegalDocumentProps) {
    return (
        <div id="tono-page" className="min-h-screen">
            <a
                href="#legal-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
                Skip to the document
            </a>

            <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-8 sm:pt-24 lg:pt-36">
                <Link href="/tono" className={`mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground ${FOCUS}`}>
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    <IntonationCurve className="h-3.5 w-auto text-foreground" strokeWidth={96} />
                    Tono
                </Link>

                <header className="mb-14 max-w-3xl space-y-4">
                    <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
                    <p className="text-sm text-muted-foreground">Effective {effective}</p>
                    <div className="space-y-4 text-lg">{intro}</div>
                </header>

                <div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
                    <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
                        <p className="mb-3 text-sm font-medium">On this page</p>
                        <ol className="space-y-2 text-sm">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className={`text-muted-foreground hover:text-foreground ${FOCUS}`}>
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <div id="legal-content" className="max-w-3xl space-y-12">
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24 space-y-4">
                                <h2 id={`${section.id}-title`} className="text-2xl font-semibold tracking-tight">
                                    {section.title}
                                </h2>
                                {section.body}
                            </section>
                        ))}

                        <footer className="space-y-3 border-t border-border pt-8 text-sm text-muted-foreground">
                            <p>
                                Questions? <A href={`mailto:${TONO_EMAIL}`}>{TONO_EMAIL}</A>
                            </p>
                            <p>
                                See also the <Link href={other.href} className={`font-medium text-foreground underline underline-offset-4 ${FOCUS}`}>{other.label}</Link>.
                            </p>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    );
}
