import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service — Divyo",
    description:
        "Terms of Service for Divyo, the receipt splitting app. Read our terms and conditions for using the app.",
    openGraph: {
        title: "Terms of Service — Divyo",
        description:
            "Terms of Service for Divyo, the receipt splitting app. Read our terms and conditions for using the app.",
        url: "https://ahmadgraham.me/divyo/terms",
        siteName: "Divyo",
        type: "website",
    },
};

export default function DivyoTermsOfService() {
    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <Link
                        href="/divyo"
                        className="text-primary hover:underline text-sm mb-4 inline-block"
                    >
                        ← Back to Divyo
                    </Link>
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground">
                        Last Updated: December 29, 2025
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-foreground leading-relaxed">
                            Welcome to Divyo. These Terms of Service
                            (&quot;Terms&quot;) govern your use of the Divyo
                            mobile application (&quot;App&quot;) operated by
                            Divyo (&quot;we,&quot; &quot;our,&quot; or
                            &quot;us&quot;). By downloading, installing, or
                            using Divyo, you agree to be bound by these Terms.
                            If you do not agree to these Terms, please do not
                            use the App.
                        </p>
                    </section>

                    {/* Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            By creating an account or using Divyo, you
                            acknowledge that you have read, understood, and
                            agree to be bound by these Terms and our Privacy
                            Policy. You must be at least 13 years of age to use
                            this App. If you are under 18, you represent that
                            you have your parent or guardian&apos;s permission
                            to use the App.
                        </p>
                    </section>

                    {/* Description of Service */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            2. Description of Service
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            Divyo is a receipt splitting application that allows
                            users to scan receipts, assign items to
                            participants, track payment status, and manage
                            shared expenses with groups. The App uses optical
                            character recognition (OCR) technology to extract
                            data from receipt images.
                        </p>
                    </section>

                    {/* Account Registration */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            3. Account Registration
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            To use Divyo, you must create an account using
                            Google Sign-In or Apple Sign-In. You agree to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>
                                Provide accurate, current, and complete
                                information during registration
                            </li>
                            <li>
                                Maintain and promptly update your account
                                information
                            </li>
                            <li>
                                Maintain the security of your account
                                credentials
                            </li>
                            <li>
                                Accept responsibility for all activities that
                                occur under your account
                            </li>
                            <li>
                                Notify us immediately of any unauthorized use of
                                your account
                            </li>
                            <li>
                                Create and maintain only one account per person
                            </li>
                        </ul>
                        <p className="text-foreground leading-relaxed mt-4">
                            We reserve the right to suspend or terminate
                            accounts that violate these Terms or contain false
                            or misleading information.
                        </p>
                    </section>

                    {/* Subscription and Billing */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            4. Subscription and Billing
                        </h2>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            4.1 Free Tier
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            Divyo offers a free tier with the following
                            limitations:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>10 receipt scans per month</li>
                            <li>Maximum 8 participants per receipt</li>
                            <li>Maximum 5 groups</li>
                            <li>Maximum 5 members per group</li>
                            <li>Receipt history visible for 90 days</li>
                            <li>Receipt images retained for 30 days</li>
                            <li>
                                Advertisements displayed within the application
                            </li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            4.2 Premium Subscription
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            Premium subscriptions unlock additional features
                            including:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>Unlimited receipt scans</li>
                            <li>Up to 25 participants per receipt</li>
                            <li>Up to 25 groups with 25 members each</li>
                            <li>Unlimited receipt history</li>
                            <li>Permanent receipt image retention</li>
                            <li>Ad-free experience</li>
                            <li>Data export (CSV, PDF, Text formats)</li>
                            <li>
                                Payment deep links (Venmo, Cash App, PayPal)
                            </li>
                            <li>Payment reminders</li>
                            <li>Priority customer support</li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            4.3 Billing
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            Premium subscriptions are billed through the Apple
                            App Store or Google Play Store, depending on your
                            device. All billing is subject to the terms and
                            conditions of the respective app store. Subscription
                            management, including cancellation, is handled
                            through your app store account settings.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            We may offer a 14-day free trial for new Premium
                            subscribers. At the end of the trial period, your
                            subscription will automatically convert to a paid
                            subscription unless canceled before the trial ends.
                        </p>
                    </section>

                    {/* Acceptable Use */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            5. Acceptable Use
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            You agree not to use Divyo to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>
                                Upload fraudulent, falsified, or manipulated
                                receipts
                            </li>
                            <li>Harass, abuse, or harm other users</li>
                            <li>
                                Impersonate any person or entity, or falsely
                                claim an affiliation with any person or entity
                            </li>
                            <li>
                                Use the App for any illegal purpose or in
                                violation of any applicable laws
                            </li>
                            <li>
                                Attempt to gain unauthorized access to any
                                portion of the App or its related systems
                            </li>
                            <li>
                                Reverse engineer, decompile, or disassemble the
                                App
                            </li>
                            <li>
                                Use automated systems, bots, or scrapers to
                                access the App
                            </li>
                            <li>
                                Interfere with or disrupt the integrity or
                                performance of the App
                            </li>
                            <li>
                                Create multiple accounts for fraudulent purposes
                            </li>
                            <li>Share your account credentials with others</li>
                        </ul>
                    </section>

                    {/* Receipt Scanning Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            6. Receipt Scanning and OCR Disclaimer
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            Divyo uses optical character recognition (OCR)
                            technology to extract data from receipt images. You
                            acknowledge and agree that:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>
                                <strong>OCR accuracy is not guaranteed.</strong>{" "}
                                The technology may occasionally misread or fail
                                to detect certain text, prices, or items on
                                receipts.
                            </li>
                            <li>
                                <strong>
                                    You are solely responsible for verifying
                                </strong>{" "}
                                the accuracy of all extracted data, including
                                item names, quantities, prices, taxes, tips, and
                                totals before assigning items or settling
                                payments.
                            </li>
                            <li>
                                <strong>
                                    We are not liable for any errors
                                </strong>{" "}
                                in OCR extraction or any financial disputes
                                arising from inaccurate data.
                            </li>
                            <li>
                                <strong>Image quality affects accuracy.</strong>{" "}
                                Blurry, damaged, faded, or poorly lit receipt
                                images may result in lower accuracy.
                            </li>
                        </ul>
                    </section>

                    {/* User Content */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            7. User Content
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            You retain ownership of all content you upload to
                            Divyo, including receipt images, profile photos, and
                            any other materials (&quot;User Content&quot;). By
                            uploading User Content, you grant us a
                            non-exclusive, worldwide, royalty-free license to
                            use, store, process, and display your User Content
                            solely for the purpose of providing and improving
                            the App.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            You represent and warrant that you own or have the
                            necessary rights to upload your User Content and
                            that your User Content does not violate any
                            third-party rights or applicable laws.
                        </p>
                    </section>

                    {/* Payment Processing */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            8. Payment Processing
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            Divyo facilitates expense splitting and payment
                            tracking but does not process actual monetary
                            transactions between users. Any payments made
                            between users (via Venmo, Cash App, PayPal, or other
                            methods) are entirely between those users and are
                            governed by the terms of those third-party payment
                            services.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            We are not responsible for any disputes, failed
                            transactions, or issues arising from payments made
                            outside of our App.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            9. Limitation of Liability
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
                            DIVYO AND ITS AFFILIATES, OFFICERS, DIRECTORS,
                            EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>
                                Any indirect, incidental, special,
                                consequential, or punitive damages
                            </li>
                            <li>
                                Any loss of profits, revenue, data, or goodwill
                            </li>
                            <li>
                                Any damages arising from OCR errors or
                                inaccuracies
                            </li>
                            <li>
                                Any disputes between users regarding expense
                                splits or payments
                            </li>
                            <li>
                                Any unauthorized access to or use of our servers
                                or your personal information
                            </li>
                            <li>
                                Any interruption or cessation of transmission to
                                or from the App
                            </li>
                        </ul>
                        <p className="text-foreground leading-relaxed">
                            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED
                            THE AMOUNT YOU HAVE PAID US IN THE TWELVE (12)
                            MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS
                            ($100), WHICHEVER IS GREATER.
                        </p>
                    </section>

                    {/* Disclaimer of Warranties */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            10. Disclaimer of Warranties
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                            TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                            FOR A PARTICULAR PURPOSE, TITLE, AND
                            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP
                            WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT
                            DEFECTS WILL BE CORRECTED, OR THAT THE APP IS FREE
                            OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            11. Indemnification
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            You agree to indemnify, defend, and hold harmless
                            Divyo and its affiliates, officers, directors,
                            employees, and agents from and against any and all
                            claims, liabilities, damages, losses, costs, and
                            expenses (including reasonable attorneys&apos; fees)
                            arising out of or related to your use of the App,
                            your violation of these Terms, or your violation of
                            any rights of another.
                        </p>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            12. Termination
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            We reserve the right to suspend or terminate your
                            account and access to the App at any time, with or
                            without cause, and with or without notice. Reasons
                            for termination may include, but are not limited to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>Violation of these Terms</li>
                            <li>
                                Requests by law enforcement or government
                                agencies
                            </li>
                            <li>Fraudulent or illegal activities</li>
                            <li>Extended periods of inactivity</li>
                            <li>Technical or security issues</li>
                        </ul>
                        <p className="text-foreground leading-relaxed">
                            You may terminate your account at any time by
                            requesting account deletion through the App
                            settings. Upon termination, your right to use the
                            App will immediately cease.
                        </p>
                    </section>

                    {/* Modifications to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            13. Modifications to Terms
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            We reserve the right to modify these Terms at any
                            time. We will provide notice of material changes by
                            posting the updated Terms within the App or by other
                            reasonable means. Your continued use of the App
                            after such modifications constitutes your acceptance
                            of the updated Terms. If you do not agree to the
                            modified Terms, you must stop using the App.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            14. Governing Law
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            These Terms shall be governed by and construed in
                            accordance with the laws of the State of New York,
                            United States, without regard to its conflict of law
                            provisions. Any disputes arising under these Terms
                            shall be resolved in the state or federal courts
                            located in New York, and you consent to the
                            jurisdiction of such courts.
                        </p>
                    </section>

                    {/* Severability */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            15. Severability
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            If any provision of these Terms is found to be
                            unenforceable or invalid, that provision shall be
                            limited or eliminated to the minimum extent
                            necessary so that these Terms shall otherwise remain
                            in full force and effect and enforceable.
                        </p>
                    </section>

                    {/* Entire Agreement */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            16. Entire Agreement
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            These Terms, together with our Privacy Policy,
                            constitute the entire agreement between you and
                            Divyo regarding your use of the App and supersede
                            all prior agreements and understandings, whether
                            written or oral.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            17. Contact Us
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            If you have any questions about these Terms, please
                            contact us at:
                        </p>
                        <p className="text-foreground leading-relaxed mt-4">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:ahmadgrahamdev@gmail.com"
                                className="text-primary hover:underline"
                            >
                                ahmadgrahamdev@gmail.com
                            </a>
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <Link
                            href="/divyo"
                            className="text-primary hover:underline"
                        >
                            ← Back to Divyo
                        </Link>
                        <Link
                            href="/divyo/privacy"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
