import DivyoFAQ from "./_components/DivyoFAQ";
import ScrollStoryContainer from "./_components/ScrollStoryContainer";
import WaitlistForm from "@/components/WaitlistForm";

export default function DivyoLandingPage() {
    return (
        <main className="flex flex-col">
            <div className="mt-12">
                <ScrollStoryContainer />
            </div>

            {/* Additional content placeholder */}
            <section className="mx-auto max-w-5xl px-6 pb-24">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Continue exploring
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Placeholder content after the sticky story ends. Add your
                    features, testimonials, or CTA here.
                </p>
            </section>

            {/* Waitlist CTA Section */}
            <section id="waitlist" className="mx-auto max-w-5xl px-6 py-12">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Join the Divyo Waitlist
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Be the first to know when Divyo launches. Sign up
                            now and get exclusive early access to my mobile app.
                        </p>
                    </div>

                    <WaitlistForm source="divyo-landing" />

                    <p className="text-sm text-muted-foreground">
                        No spam, ever. Unsubscribe anytime.
                    </p>
                </div>
            </section>

            <section className="flex justify-center items-center">
                <DivyoFAQ />
            </section>
        </main>
    );
}
