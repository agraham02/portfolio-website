import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { PRACTICE_EXTRAS, SKILLS, type Skill } from "./content";

const DOT: Record<Skill["id"], string> = {
    articulation: "bg-tono-articulation",
    cadence: "bg-tono-cadence",
    impromptu: "bg-tono-impromptu",
    confidence: "bg-tono-confidence",
    conversation: "bg-tono-conversation",
};

export default function Practice() {
    return (
        <Section id="practice">
            <Reveal>
                <SectionHeading
                    id="practice-title"
                    eyebrow="daily practice"
                    title="A plan for today, not a pile of features."
                    description="Speaking improves with short, regular reps. Tono builds today's around the skill you need most."
                />
            </Reveal>

            <Reveal delay={0.1} className="space-y-10">
                <ul className="divide-y divide-border border-y border-border">
                    {SKILLS.map((skill) => (
                        <li key={skill.id} className="flex items-baseline justify-between gap-6 py-5">
                            <span className="flex items-center gap-4 text-2xl font-medium tracking-tight sm:text-3xl">
                                <span className={`size-2.5 shrink-0 rounded-full ${DOT[skill.id]}`} aria-hidden="true" />
                                {skill.name}
                            </span>
                            <span className="text-right text-sm text-muted-foreground sm:text-base">{skill.line}</span>
                        </li>
                    ))}
                </ul>

                <ul className="grid gap-x-10 gap-y-3 text-muted-foreground sm:grid-cols-2">
                    {PRACTICE_EXTRAS.map((extra) => (
                        <li key={extra} className="flex gap-3 leading-relaxed">
                            <span aria-hidden="true">—</span>
                            {extra}
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    );
}
