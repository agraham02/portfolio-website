import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy — Divyo",
    description:
        "Privacy Policy for Divyo, the receipt splitting app. Learn how we collect, use, and protect your data.",
    openGraph: {
        title: "Privacy Policy — Divyo",
        description:
            "Privacy Policy for Divyo, the receipt splitting app. Learn how we collect, use, and protect your data.",
        url: "https://ahmadgraham.me/divyo/privacy",
        siteName: "Divyo",
        type: "website",
    },
};

export default function DivyoPrivacyPolicy() {
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
                        Privacy Policy
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
                            Divyo (&quot;we,&quot; &quot;our,&quot; or
                            &quot;us&quot;) is committed to protecting your
                            privacy. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your
                            information when you use our mobile application
                            (&quot;Divyo&quot; or the &quot;App&quot;). Please
                            read this Privacy Policy carefully. By using Divyo,
                            you agree to the collection and use of information
                            in accordance with this policy.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            1. Information We Collect
                        </h2>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            1.1 Personal Information
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            When you create an account, we collect information
                            provided through Google Sign-In or Apple Sign-In:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>Email address</li>
                            <li>Display name</li>
                            <li>
                                Profile photo (if provided by your sign-in
                                provider)
                            </li>
                        </ul>
                        <p className="text-foreground leading-relaxed mt-4 mb-4">
                            During account setup, you may also provide:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>First and last name</li>
                            <li>Username (unique identifier)</li>
                            <li>
                                Payment handles (optional): Venmo, Cash App, or
                                PayPal usernames for payment convenience
                            </li>
                            <li>Profile photo (if you choose to upload one)</li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            1.2 Receipt and Financial Data
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            When you scan receipts, we collect and process:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>Receipt images you capture or upload</li>
                            <li>
                                OCR-extracted data including merchant name, line
                                items, prices, taxes, tips, and totals
                            </li>
                            <li>
                                Item assignments (who owes what on each receipt)
                            </li>
                            <li>
                                Payment status tracking (paid/pending amounts)
                            </li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            1.3 Group Data
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            If you use our Groups feature, we store:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>Group names and descriptions</li>
                            <li>Group membership information</li>
                            <li>Group admin assignments</li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            1.4 Usage and Analytics Data
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            We automatically collect:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>
                                Screen views and feature usage via Firebase
                                Analytics
                            </li>
                            <li>
                                Crash reports and error logs via Firebase
                                Crashlytics
                            </li>
                            <li>
                                Device information (device model, operating
                                system version)
                            </li>
                            <li>App version and performance metrics</li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            1.5 Local Device Storage
                        </h3>
                        <p className="text-foreground leading-relaxed">
                            We store certain data locally on your device for
                            performance and offline access, including recent
                            searches, user profile cache, theme preferences, and
                            draft receipt data.
                        </p>
                    </section>

                    {/* Device Permissions */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            2. Device Permissions
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            Divyo requires the following permissions to
                            function:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-4">
                            <li>
                                <strong>Camera:</strong> Required to scan
                                receipts. We only access the camera when you
                                actively choose to scan a receipt.
                            </li>
                            <li>
                                <strong>Photo Library:</strong> Required to
                                select existing receipt images from your device.
                                We only access photos you explicitly select.
                            </li>
                            <li>
                                <strong>
                                    App Tracking Transparency (iOS):
                                </strong>{" "}
                                We request permission to use your device&apos;s
                                advertising identifier to deliver personalized
                                ads. You can deny this permission without
                                affecting core app functionality.
                            </li>
                            <li>
                                <strong>Location (approximate):</strong> Used
                                only for ad personalization. You can deny this
                                permission without affecting core app
                                functionality.
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                            <li>
                                Provide, maintain, and improve the Divyo
                                application
                            </li>
                            <li>
                                Process receipts and calculate expense splits
                            </li>
                            <li>Enable payment tracking and status updates</li>
                            <li>Facilitate group expense management</li>
                            <li>
                                Send you service-related communications and
                                payment reminders
                            </li>
                            <li>
                                Analyze usage patterns to improve user
                                experience
                            </li>
                            <li>
                                Detect, prevent, and address technical issues
                            </li>
                            <li>
                                Display advertisements (for free-tier users)
                            </li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Third-Party Services */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            4. Third-Party Services
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            Divyo integrates with the following third-party
                            services:
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            4.1 Firebase (Google)
                        </h3>
                        <p className="text-foreground leading-relaxed mb-2">
                            We use Firebase for:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>
                                <strong>Authentication:</strong> Secure user
                                sign-in via Google and Apple
                            </li>
                            <li>
                                <strong>Cloud Firestore:</strong> Database
                                storage for user data, receipts, and groups
                            </li>
                            <li>
                                <strong>Cloud Storage:</strong> Storage for
                                receipt images and profile photos
                            </li>
                            <li>
                                <strong>Analytics:</strong> Usage tracking and
                                product improvement (production environment
                                only)
                            </li>
                            <li>
                                <strong>Crashlytics:</strong> Crash reporting
                                and stability monitoring
                            </li>
                        </ul>
                        <p className="text-foreground leading-relaxed">
                            Firebase Privacy Policy:{" "}
                            <a
                                href="https://firebase.google.com/support/privacy"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://firebase.google.com/support/privacy
                            </a>
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            4.2 Google AdMob
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            For free-tier users, we display advertisements
                            through Google AdMob. AdMob may collect device
                            identifiers and usage data for ad targeting and
                            attribution. Premium subscribers do not see
                            advertisements.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            Google Privacy Policy:{" "}
                            <a
                                href="https://policies.google.com/privacy"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://policies.google.com/privacy
                            </a>
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            4.3 RevenueCat (Coming Soon)
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            We plan to use RevenueCat for subscription
                            management and in-app purchase processing.
                            RevenueCat processes purchase transactions and
                            subscription status.
                        </p>
                        <p className="text-foreground leading-relaxed">
                            RevenueCat Privacy Policy:{" "}
                            <a
                                href="https://www.revenuecat.com/privacy"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.revenuecat.com/privacy
                            </a>
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                            4.4 Authentication Providers
                        </h3>
                        <p className="text-foreground leading-relaxed">
                            We offer sign-in through Google and Apple. When you
                            sign in, we receive basic profile information as
                            described above. We do not receive your password.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            5. Data Retention
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            We retain your data based on your subscription tier:
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            Free Tier
                        </h3>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>
                                Receipt images: Retained for 30 days after
                                upload
                            </li>
                            <li>
                                Receipt history: Visible for 90 days (unsettled
                                receipts remain visible until settled)
                            </li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            Premium Tier
                        </h3>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>
                                Receipt images: Retained indefinitely while your
                                account is active
                            </li>
                            <li>Receipt history: Unlimited access</li>
                        </ul>

                        <p className="text-foreground leading-relaxed">
                            Account data (profile, username, email) is retained
                            until you request account deletion.
                        </p>
                    </section>

                    {/* Your Rights and Choices */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            6. Your Rights and Choices
                        </h2>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            6.1 Account Deletion
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            You can request deletion of your account at any time
                            through the app settings. Upon request:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
                            <li>
                                Your account enters a 30-day grace period during
                                which you can reactivate it
                            </li>
                            <li>
                                After 30 days, your account and associated data
                                are permanently deleted
                            </li>
                            <li>
                                Certain anonymized data may be retained for
                                analytics purposes
                            </li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            6.2 Data Export
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            Premium users can export their receipt data in CSV,
                            PDF, or plain text format through the app.
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            6.3 Analytics Opt-Out
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            You can opt out of analytics collection in the app
                            settings under Privacy preferences.
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-3">
                            6.4 Ad Personalization
                        </h3>
                        <p className="text-foreground leading-relaxed">
                            You can control ad personalization through your
                            device settings (iOS App Tracking Transparency or
                            Android ad settings) or by subscribing to Premium to
                            remove ads entirely.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            7. Data Security
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            We implement appropriate technical and
                            organizational security measures to protect your
                            data, including:
                        </p>
                        <ul className="list-disc pl-6 text-foreground space-y-2 mt-4">
                            <li>
                                Encryption in transit (HTTPS) for all data
                                transfers
                            </li>
                            <li>
                                Firebase Security Rules to enforce access
                                control
                            </li>
                            <li>
                                Secure authentication via OAuth (Google/Apple)
                            </li>
                            <li>
                                Secure storage for sensitive local data on your
                                device
                            </li>
                        </ul>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            8. Children&apos;s Privacy
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            Divyo is not intended for use by children under the
                            age of 13. We do not knowingly collect personal
                            information from children under 13. If you are a
                            parent or guardian and believe your child has
                            provided us with personal information, please
                            contact us at{" "}
                            <a
                                href="mailto:ahmadgrahamdev@gmail.com"
                                className="text-primary hover:underline"
                            >
                                ahmadgrahamdev@gmail.com
                            </a>{" "}
                            and we will take steps to delete such information.
                        </p>
                    </section>

                    {/* International Users */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            9. International Users
                        </h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            Divyo is operated from the United States. If you are
                            accessing the App from outside the United States,
                            please be aware that your information may be
                            transferred to, stored, and processed in the United
                            States.
                        </p>
                        <p className="text-foreground leading-relaxed mb-4">
                            <strong>For EU/EEA Users (GDPR):</strong> You have
                            the right to access, rectify, erase, restrict
                            processing, and port your personal data. We process
                            your data based on your consent and our legitimate
                            interests in providing the service. Our
                            GDPR-compliant consent framework for advertising is
                            implemented via Google&apos;s User Messaging
                            Platform (UMP).
                        </p>
                        <p className="text-foreground leading-relaxed">
                            <strong>For California Users (CCPA):</strong> You
                            have the right to know what personal information we
                            collect, request deletion of your data, and opt-out
                            of the sale of personal information. We do not sell
                            personal information.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            10. Changes to This Privacy Policy
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time.
                            We will notify you of any material changes by
                            posting the new Privacy Policy on this page and
                            updating the &quot;Last Updated&quot; date. We
                            encourage you to review this Privacy Policy
                            periodically for any changes.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">
                            11. Contact Us
                        </h2>
                        <p className="text-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy,
                            please contact us at:
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
                            href="/divyo/terms"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
