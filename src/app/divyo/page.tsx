import Orchestrator from "./_components/Orchestrator";

export default function DivyoLandingPage() {
    return (
        <main className="flex flex-col">
            <Orchestrator />

            {/* Normal flow resumes after scrollytelling */}
            <section className="mx-auto max-w-5xl px-6 py-24">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Continue exploring
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Placeholder content after the sticky story ends. Add your
                    features, testimonials, or CTA here.
                </p>
            </section>
        </main>
    );
}
