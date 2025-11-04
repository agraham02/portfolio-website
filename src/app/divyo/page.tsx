import Orchestrator from "./_components/Orchestrator";
import WaitlistForm from "@/components/WaitlistForm";

export default function DivyoLandingPage() {
    return (
        <main className="flex flex-col">
            <Orchestrator />

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
            <section className="mx-auto max-w-5xl px-6 py-24">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Join the divyo Waitlist
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Be the first to know when divyo launches. Sign up
                            now and get exclusive early access to our React
                            Native mobile app.
                        </p>
                    </div>

                    <WaitlistForm source="divyo-landing" />

                    <p className="text-sm text-muted-foreground">
                        No spam, ever. Unsubscribe anytime.
                    </p>
                </div>
            </section>
        </main>
    );
}
