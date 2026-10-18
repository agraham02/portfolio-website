import type { Metadata } from "next";
import LegalDocument from "@/components/tono/LegalDocument";
import { EFFECTIVE, INTRO, SECTIONS } from "./content";

export const metadata: Metadata = {
    title: "Tono Privacy Policy",
    description:
        "What Tono does with your information: recordings, transcripts and measurements stay on your phone, and nothing is sent anywhere unless you turn on AI reviews.",
    alternates: { canonical: "/tono/privacy" },
    robots: { index: true, follow: true },
};

export default function TonoPrivacyPage() {
    return (
        <LegalDocument
            title="Tono Privacy Policy"
            effective={EFFECTIVE}
            intro={INTRO}
            sections={SECTIONS}
            other={{ href: "/tono/terms", label: "Terms of Service" }}
        />
    );
}
