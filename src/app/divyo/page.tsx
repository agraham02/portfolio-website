import {
    ArrowRight,
    CheckCircle,
    Download,
    Phone,
    Scan,
    ScanLine,
    Send,
    Share2,
    Star,
    User,
    Users,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function DivyoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            {/* Navigation */}
            <nav className="relative z-50 px-4 py-6">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Divyo
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            How It Works
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            Reviews
                        </a>
                        <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600">
                            Download Free
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-12">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full border border-cyan-400/30">
                                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                                        <span className="text-sm font-medium text-cyan-400">
                                            Smart Bill Splitting Technology
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                        Split the Bill,{" "}
                                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                            Not the Friendship
                                        </span>
                                    </h1>
                                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                        Divyo is the smartest way to split
                                        expenses. Just snap a photo of any
                                        receipt, and our app instantly reads
                                        every item, calculates each person's
                                        exact share—including tax and tip—and
                                        lets you settle up in seconds.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold"
                                    >
                                        <Download className="mr-2 h-5 w-5" />
                                        Download Divyo for Free
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4"
                                    >
                                        Watch Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>

                                <div className="flex items-center gap-8 justify-center lg:justify-start">
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            4.9/5 Rating
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        <span className="font-semibold text-white">
                                            100K+
                                        </span>{" "}
                                        Downloads
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image/Phone Mockup */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur-2xl opacity-20 scale-110"></div>
                                    <div className="relative bg-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
                                        <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-600">
                                            <div className="text-center space-y-4">
                                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                                                    <ScanLine className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="text-lg font-semibold">
                                                        Receipt Scanned!
                                                    </div>
                                                    <div className="text-sm text-gray-400">
                                                        Processing items...
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span>
                                                            Pizza - Sarah
                                                        </span>
                                                        <span className="text-cyan-400">
                                                            $24.50
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span>
                                                            Burger - Mike
                                                        </span>
                                                        <span className="text-purple-400">
                                                            $18.75
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span>
                                                            Shared Appetizer
                                                        </span>
                                                        <span className="text-yellow-400">
                                                            $12.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem/Solution Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
                    <div className="container mx-auto text-center">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Tired of the{" "}
                                <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                                    Post-Meal Math Problem?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                You had a great time out. Then the bill arrives.
                                Suddenly, you're the designated accountant,
                                trying to decipher who had the extra appetizer
                                and manually calculating tax and tip. It's slow,
                                awkward, and someone always feels like they
                                overpaid.
                            </p>
                            <div className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30">
                                <p className="text-lg font-medium">
                                    Divyo ends the awkwardness for good. Our
                                    powerful OCR technology does the hard work
                                    for you, creating a perfectly fair and
                                    transparent split every time. No more
                                    calculators. No more guesswork. Just
                                    fairness and speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
                                <span className="text-sm font-medium text-cyan-400">
                                    Key Features
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Why You'll{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Love Divyo
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Experience the future of bill splitting with
                                features designed to make your life easier
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <ScanLine className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Scan and Go in Seconds
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-center">
                                        Our best-in-class OCR scanner digitizes
                                        your receipt instantly. Just snap a
                                        photo and let Divyo itemize everything.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300 group">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Fairness Down to the Cent
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-center">
                                        Assign shared items or split drinks with
                                        a tap. Divyo automatically prorates tax
                                        and tip for each person.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 group">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Share2 className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Settle Up Seamlessly
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-center">
                                        Integrates directly with Venmo, Cash
                                        App, and more. Pay or get paid with a
                                        single tap.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <User className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Remember Your Crew
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-center">
                                        Save recurring groups for friends,
                                        family, or travel buddies. Your next
                                        split is just one tap away.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section
                    id="how-it-works"
                    className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50"
                >
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                How It{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Works
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300">
                                Splitting a bill with Divyo is as easy as 1, 2,
                                3
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="text-center group">
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <Scan className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                                        1
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Snap the Receipt
                                </h3>
                                <p className="text-gray-300">
                                    Open Divyo and take a picture of the bill.
                                    The app automatically reads and lists every
                                    single item and charge.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <User className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                                        2
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Tag Who Had What
                                </h3>
                                <p className="text-gray-300">
                                    Quickly tap to assign items to each person
                                    in your group. Color-coded tabs make it easy
                                    to see who had what.
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <Send className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                                        3
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Settle the Bill
                                </h3>
                                <p className="text-gray-300">
                                    Divyo instantly calculates the final amount
                                    for each person. Tap to send or receive
                                    payment through your favorite app. Done.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Don't Just Take{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Our Word For It
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300">
                                See what our users are saying about how Divyo
                                transformed their group payments
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-medium text-white mb-4">
                                        "Divyo is a game-changer for group
                                        dinners. It completely eliminated the
                                        awkward 'who owes what' conversation. We
                                        use it every time we go out."
                                    </p>
                                    <p className="text-gray-400">
                                        - Sarah K., San Francisco
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-medium text-white mb-4">
                                        "The receipt scanner is shockingly
                                        accurate. I use it for tracking business
                                        lunches and it saves me so much time on
                                        expense reports. The export feature is
                                        brilliant."
                                    </p>
                                    <p className="text-gray-400">
                                        - Michael B., New York
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex justify-center items-center gap-12">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-xl text-white">
                                        4.9 Stars
                                    </span>
                                    <p className="text-gray-400 text-sm">
                                        on App Store
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-xl text-white">
                                        4.8 Stars
                                    </span>
                                    <p className="text-gray-400 text-sm">
                                        on Google Play
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-t border-gray-800">
                    <div className="container mx-auto text-center">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Ready for{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Stress-Free Bill Splitting?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300">
                                It's free. And it will change the way you dine
                                out forever.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white px-12 py-4 text-lg font-semibold"
                                >
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Divyo Now
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-4"
                                >
                                    View Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Free to download</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>No hidden fees</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Available on all devices</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-gray-800">
                <div className="container mx-auto text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Divyo
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        © 2025 Divyo. Split smart, pay fair.
                    </p>
                </div>
            </footer>
        </div>
    );
}
