import type { Metadata } from "next";
import ComingSoon from "@/components/tono/ComingSoon";
import Faq from "@/components/tono/Faq";
import Practice from "@/components/tono/Practice";
import PrivacySection from "@/components/tono/PrivacySection";
import Story from "@/components/tono/story/Story";
import { findTonoScreenshots } from "@/lib/tonoScreenshots";

const TITLE = "Tono: get better at speaking, one rep at a time";
const DESCRIPTION =
    "Tono is a speaking coach for iPhone. It measures your pace, filler words, pauses and eye contact on your phone, and shows you what to practice next. Coming soon.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: ["speaking practice", "public speaking app", "filler words", "speech coach", "pace and pauses", "iPhone app"],
    alternates: { canonical: "/tono" },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://ahmadgraham.me/tono",
        siteName: "Tono",
        type: "website",
        locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
    robots: { index: true, follow: true },
};

export default function TonoLandingPage() {
    return (
        <div id="tono-page">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
                Skip to main content
            </a>

            <main id="main-content">
                <h1 className="sr-only">Tono: get better at speaking, one rep at a time</h1>
                <Story screenshots={findTonoScreenshots()} />
                <Practice />
                <PrivacySection />
                <Faq />
                <ComingSoon />
            </main>
        </div>
    );
}
