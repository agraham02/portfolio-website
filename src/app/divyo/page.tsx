import type { Metadata } from "next";
import DivyoFAQ from "../../components/divyo/Faq";
import Hero from "@/components/divyo/Hero";
import HowItWorks from "@/components/divyo/HowItWorks";
import Features from "@/components/divyo/Features";
// import Gallery from "@/components/divyo/Gallery";
import Personas from "@/components/divyo/Personas";
import Testimonials from "@/components/divyo/Testimonials";
import WaitlistSection from "@/components/divyo/WaitlistSection";
import WaitlistCount from "@/components/WaitlistCount";

export default function DivyoLandingPage() {
    return (
        <div id="divyo-page">
            {/* Skip to main content link for keyboard navigation */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                Skip to main content
            </a>

            <main id="main-content" className="flex flex-col">
                <Hero>
                    <div>
                        <WaitlistCount className="text-lg" />
                    </div>
                </Hero>

                <HowItWorks />
                <Features />
                {/* <Gallery /> */}
                <Personas />
                <Testimonials />

                <WaitlistSection>
                    <WaitlistCount
                        threshold={50}
                        className="text-sm md:text-base mb-8"
                    />
                </WaitlistSection>

                <DivyoFAQ />
            </main>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Divyo — Scan. Split. Settle.",
    description:
        "Divyo turns any receipt into a shareable bill — snap a photo, assign items, and settle up instantly. The easiest way to split bills with friends.",
    keywords: [
        "bill splitting",
        "receipt scanner",
        "split bills",
        "share expenses",
        "group payments",
        "OCR receipt",
        "expense sharing",
    ],
    authors: [{ name: "Divyo Team" }],
    openGraph: {
        title: "Divyo — Scan. Split. Settle.",
        description:
            "Effortless bill splitting for everyone. Join the waitlist for early access.",
        url: "https://ahmadgraham.me/divyo",
        siteName: "Divyo",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://ahmadgraham.me/images/divyo/divyo_thumbnail.png",
                width: 1200,
                height: 630,
                alt: "Divyo - Split bills, not friendships",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Divyo — Scan. Split. Settle.",
        description:
            "Effortless bill splitting for everyone. Join the waitlist for early access.",
        images: ["https://ahmadgraham.me/images/divyo/divyo_thumbnail.png"],
    },
    alternates: {
        canonical: "/divyo",
    },
    robots: {
        index: true,
        follow: true,
    },
};
