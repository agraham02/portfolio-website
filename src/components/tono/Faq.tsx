import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { FAQ } from "./content";

export default function Faq() {
    return (
        <Section id="faq">
            <Reveal>
                <SectionHeading id="faq-title" eyebrow="questions" title="The short answers." />
            </Reveal>

            <Reveal delay={0.1}>
                <Accordion type="single" collapsible className="border-t border-border">
                    {FAQ.map((item, index) => (
                        <AccordionItem key={item.question} value={`faq-${index}`}>
                            <AccordionTrigger className="py-5 text-left text-lg font-medium sm:text-xl">{item.question}</AccordionTrigger>
                            <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Reveal>
        </Section>
    );
}
