import Link from "next/link";
import IntonationCurve from "./IntonationCurve";
import Reveal from "./Reveal";
import { TONO_EMAIL, TONO_LAUNCH_MAILTO } from "./content";

const LINK =
    "underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/** The closing statement, and the legal links every visitor should be able to find. */
export default function ComingSoon() {
    return (
        <section id="coming-soon" aria-labelledby="coming-soon-title" className="scroll-mt-20 border-t border-border py-24 sm:py-36">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <Reveal className="space-y-10">
                    <IntonationCurve className="h-10 w-auto text-foreground" />
                    <h2 id="coming-soon-title" className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
                        Coming soon.
                    </h2>
                    <p className="max-w-lg text-xl leading-relaxed text-muted-foreground">
                        Tono is on its way to iPhone. Email me and I&apos;ll send you one note the day it&apos;s out. Nothing else.
                    </p>
                    <a
                        href={TONO_LAUNCH_MAILTO}
                        className="inline-block text-2xl font-medium underline underline-offset-8 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-3xl"
                    >
                        {TONO_EMAIL}
                    </a>
                </Reveal>

                <nav aria-label="Tono legal" className="mt-24 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                    <Link href="/tono/privacy" className={LINK}>
                        Privacy policy
                    </Link>
                    <Link href="/tono/terms" className={LINK}>
                        Terms of service
                    </Link>
                    <span className="sm:ml-auto">Made by Ahmad Graham</span>
                </nav>
            </div>
        </section>
    );
}
