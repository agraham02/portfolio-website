import Link from "next/link";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { LEAVES_ONLY_IF_YOU_CHOOSE, STAYS_ON_PHONE } from "./content";

export default function PrivacySection() {
    return (
        <Section id="privacy">
            <Reveal className="space-y-8">
                <SectionHeading
                    id="privacy-title"
                    eyebrow="privacy"
                    title="Your practice stays yours."
                    description="A recording of you speaking is personal. Tono is built so it never has to leave your phone."
                />
                <Link
                    href="/tono/privacy"
                    className="inline-block font-medium underline underline-offset-4 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    Read the full privacy policy
                </Link>
            </Reveal>

            <Reveal delay={0.1} className="space-y-12">
                <div>
                    <h3 className="mb-4 font-mono text-xs text-muted-foreground">stays on your phone, always</h3>
                    <ul className="divide-y divide-border border-y border-border">
                        {STAYS_ON_PHONE.map((item) => (
                            <li key={item} className="py-3.5 text-lg">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 font-mono text-xs text-muted-foreground">leaves only if you choose</h3>
                    <dl className="divide-y divide-border border-y border-border">
                        {LEAVES_ONLY_IF_YOU_CHOOSE.map((item) => (
                            <div key={item.what} className="grid gap-1 py-3.5 sm:grid-cols-[1.3fr_1fr] sm:gap-6">
                                <dt className="text-lg">{item.what}</dt>
                                <dd className="text-muted-foreground sm:text-right">{item.where}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-4 text-sm text-muted-foreground">Nothing goes through a server of mine. There isn&apos;t one.</p>
                </div>
            </Reveal>
        </Section>
    );
}
