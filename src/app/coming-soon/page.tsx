import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Coming Soon | Ahmad Graham",
    description: "This page is under construction. Check back soon!",
    robots: {
        index: false,
        follow: true,
    },
};

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/10 flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                {/* Animated Icon */}
                <div className="relative">
                    <div className="absolute inset-0 animate-pulse">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"></div>
                    </div>
                    <div className="relative w-24 h-24 mx-auto bg-gradient-to-r from-blue-200/60 to-blue-600/60 rounded-full flex items-center justify-center shadow-lg">
                        <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            Coming Soon
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Something amazing is in the works! This page is
                            currently under construction and will be ready soon.
                        </p>
                    </div>

                    {/* Feature Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 space-y-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-card-foreground">
                                Enhanced Experience
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                We&apos;re crafting an improved user experience
                                with better performance and features.
                            </p>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 space-y-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-card-foreground">
                                Worth the Wait
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Stay tuned for exciting updates and new features
                                coming your way.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="shadow-lg hover:shadow-xl transition-all"
                        >
                            <Link href="/">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
