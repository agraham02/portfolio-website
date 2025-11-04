import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function DivyoFAQ() {
    const faqItems = [
        {
            value: "item-1",
            trigger:
                "What makes Divyo different from other bill-splitting apps?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Unlike competitors, Divyo combines the four things
                        people actually need:
                    </p>

                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold text-foreground mb-1">
                                1. Smart Receipt Scanning
                            </p>
                            <p className="leading-relaxed">
                                Apps like Splitwise force you to manually enter
                                each item. Divyo's advanced OCR instantly reads
                                your receipt, so you skip the tedious data entry
                                that wastes time at the table.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-foreground mb-1">
                                2. Fair Splits Down to the Cent
                            </p>
                            <p className="leading-relaxed">
                                Most apps just split bills equally or require
                                guesswork. Divyo automatically prorates tax and
                                tip based on each person's actual items,
                                ensuring everyone pays exactly what they owe—no
                                arguments.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-foreground mb-1">
                                3. Built-in Payment Integration
                            </p>
                            <p className="leading-relaxed">
                                Venmo requires separate context-switching. Divyo
                                lets you settle up directly through Venmo, Cash
                                App, or other platforms with one tap, all within
                                the app.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-foreground mb-1">
                                4. Save Your Groups
                            </p>
                            <p className="leading-relaxed">
                                Recurring friend groups, travel crews, or
                                roommates are just one tap away. No recreating
                                splits every time you go out.
                            </p>
                        </div>
                    </div>

                    <p className="pt-2 italic leading-relaxed border-l-4 border-primary pl-4">
                        Divyo is designed specifically for the post-meal moment:
                        fast, fair, and friction-free.
                    </p>
                </div>
            ),
        },
        {
            value: "item-2",
            trigger: "Why did you create Divyo?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        As a software engineer, I've always wanted to create a
                        mobile app that solves real-world problems. The idea
                        struck me when I was out with friends and we tried to
                        manually split a restaurant bill. What should've been
                        simple turned into a tedious process—someone had to
                        calculate tax and tip, figure out who had what, and
                        there were always disagreements about fairness.
                    </p>
                    <p className="leading-relaxed">
                        I realized this was a pain point that happened at
                        virtually every group meal or shared expense. I wanted
                        to build something that would eliminate that awkward
                        moment and make bill splitting as effortless as taking a
                        photo. That's when Divyo was born.
                    </p>
                </div>
            ),
        },
        {
            value: "item-3",
            trigger: "Is Divyo free?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Yes! Divyo is completely free to download and use. We
                        want everyone to experience fair, stress-free bill
                        splitting without worrying about subscription fees or
                        hidden charges.
                    </p>
                </div>
            ),
        },
        {
            value: "item-4",
            trigger: "How accurate is the receipt scanner?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Our OCR technology is highly accurate and constantly
                        improving. It can read most restaurant receipts, grocery
                        receipts, and other itemized bills with excellent
                        accuracy, even if the image is slightly blurry.
                    </p>
                    <p className="leading-relaxed">
                        That said, no scanner is perfect. If an item is missed
                        or incorrectly read, you can easily edit or add items
                        manually in seconds.
                    </p>
                </div>
            ),
        },
        {
            value: "item-5",
            trigger: "What if the OCR misses an item or reads it incorrectly?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        No problem! Divyo lets you manually add, edit, or delete
                        items after scanning. You can also modify quantities,
                        prices, or any other details with just a few taps. The
                        app's calculations will update automatically.
                    </p>
                    <p className="leading-relaxed">
                        For special charges like health surcharges or service
                        fees, you can add them as additional charges, and Divyo
                        will prorate them fairly.
                    </p>
                </div>
            ),
        },
        {
            value: "item-6",
            trigger: "Can I share the bill split with my friends?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Absolutely! Once you've split the bill, you can share
                        the breakdown with your friends via text, email, or
                        directly through your favorite payment app. They'll see
                        exactly how much they owe or are owed, to or from whom.
                    </p>
                    <p className="leading-relaxed">
                        You can also initiate payments directly through Venmo,
                        Cash App, and other integrated payment services, all
                        from within the Divyo app.
                    </p>
                </div>
            ),
        },
        {
            value: "item-7",
            trigger: "Is my data private and secure?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Yes. We take your privacy seriously. Your receipt data,
                        groups, and personal information are encrypted and kept
                        secure. We do not store or share your sensitive data
                        without your consent.
                    </p>
                    <p className="leading-relaxed">
                        We follow industry-standard security practices to
                        protect your information, and your financial data never
                        leaves your device unless you explicitly choose to share
                        it.
                    </p>
                </div>
            ),
        },
        {
            value: "item-8",
            trigger: "What types of receipts does Divyo work with?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Divyo works with most itemized receipts, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li className="leading-relaxed">
                            Restaurant and cafe bills
                        </li>
                        <li className="leading-relaxed">
                            Grocery and store receipts
                        </li>
                        <li className="leading-relaxed">Bar and lounge tabs</li>
                        <li className="leading-relaxed">Hotel bills</li>
                        <li className="leading-relaxed">
                            Airbnb and rental invoices
                        </li>
                        <li className="leading-relaxed">
                            Any other itemized expense
                        </li>
                    </ul>
                    <p className="leading-relaxed pt-2">
                        As long as the receipt shows itemized charges and
                        totals, Divyo can read it. Even blurry or faded receipts
                        work!
                    </p>
                </div>
            ),
        },
        {
            value: "item-9",
            trigger: "Can I use Divyo for non-restaurant bills?",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Yes! While Divyo was designed with restaurant bills in
                        mind, it works great for any shared expense scenario:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li className="leading-relaxed">
                            Split rent with roommates
                        </li>
                        <li className="leading-relaxed">
                            Divide group travel costs
                        </li>
                        <li className="leading-relaxed">
                            Split groceries or household supplies
                        </li>
                        <li className="leading-relaxed">
                            Share vacation expenses
                        </li>
                        <li className="leading-relaxed">
                            Divide event planning costs
                        </li>
                        <li className="leading-relaxed">
                            Track any shared expenses with friends or family
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Section Header */}
                <div className="mb-12 text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about Divyo. Can't find the
                        answer you're looking for? Feel free to reach out to our
                        support team.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible>
                    {faqItems.map((item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="px-6 py-2 hover:bg-accent/5 transition-colors duration-200"
                        >
                            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-4 flex items-center cursor-pointer">
                                {item.trigger}
                            </AccordionTrigger>
                            <AccordionContent className="text-base md:text-lg text-muted-foreground pb-4">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* CTA Section */}
                {/* <div className="mt-16 text-center p-8 rounded-2xl bg-accent/10 border border-border">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-6">
                        Can't find the answer you're looking for? Our support
                        team is here to help.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    >
                        Contact Support
                    </a>
                </div> */}
            </div>
        </section>
    );
}
