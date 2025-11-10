import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import packageJson from "../../package.json";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://ahmadgraham.me"),
    title: {
        default: "Ahmad Graham",
        template: "%s | Ahmad Graham",
    },
    description:
        "Ahmad Graham — full-stack developer building accessible, performant web apps. Explore projects, open-source work, and contact info.",
    keywords: [
        "Ahmad Graham",
        "portfolio",
        "web developer",
        "React",
        "Next.js",
        "Tailwind CSS",
        "open source",
        "full-stack developer",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "developer blog",
        "software engineer",
        "Python",
        "AI",
        "machine learning",
    ],
    authors: [{ name: "Ahmad Graham", url: "https://ahmadgraham.me" }],
    // Open Graph (used by Facebook, LinkedIn, etc.)
    openGraph: {
        title: "Ahmad Graham",
        description:
            "Full-stack developer building accessible, performant web apps. Explore projects, blog posts, and contact info.",
        url: "https://ahmadgraham.me",
        siteName: "Ahmad Graham",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ahmad Graham — Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    // Twitter card
    twitter: {
        card: "summary_large_image",
        title: packageJson?.name ?? "Ahmad Graham",
        description:
            "Full-stack developer building accessible, performant web apps.",
        images: ["/opengraph-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const version = packageJson?.version ?? "1.0.0";
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                <MobileNavigation />
                {children}
                <Footer version={version} />
                <ScrollToTop />
                <Analytics />

                {/* Google reCAPTCHA v3 Script */}
                {recaptchaSiteKey && (
                    <Script
                        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
                        strategy="lazyOnload"
                    />
                )}
            </body>
        </html>
    );
}
