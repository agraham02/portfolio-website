import type { Metadata } from "next";
import LegalDocument from "@/components/tono/LegalDocument";
import { EFFECTIVE, INTRO, SECTIONS } from "./content";

export const metadata: Metadata = {
    title: "Tono Terms of Service",
    description: "The terms for using the Tono speaking-practice app, including how AI reviews with your own API key work.",
    alternates: { canonical: "/tono/terms" },
    robots: { index: true, follow: true },
};

export default function TonoTermsPage() {
    return (
        <LegalDocument
            title="Tono Terms of Service"
            effective={EFFECTIVE}
            intro={INTRO}
            sections={SECTIONS}
            other={{ href: "/tono/privacy", label: "Privacy Policy" }}
        />
    );
}
